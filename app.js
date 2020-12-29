const express = require('express');
const morgan = require('morgan');
const morganBody = require('morgan-body');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const path = require('path');
const axios = require('axios');

var winston = require('winston'),
  expressWinston = require('express-winston');

const bodyParser = require('body-parser');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const userRouter = require('./routes/userRoutes');

//Piatto Routers

const categoryRouter = require('./routes/categoryRoutes');
const productRouter = require('./routes/productRoutes');
const addOnRouter = require('./routes/addOnRoutes');
const rawMaterialRouter = require('./routes/rawMaterialRoutes');
const additionalProductInformationRouter = require('./routes/additionalProductInformationRoutes');
const basicRecipeRouter = require('./routes/basicRecipeRoutes');
const recipeRouter = require('./routes/recipeRoutes');
const supplierRouter = require('./routes/supplierRoutes');
const dMenuRouter = require('./routes/dMenuProductRoutes');
const logRouter = require('./routes/logRoutes');
const { info } = require('winston');
const app = express();

// 1) GLOBAL MIDDLEWARES
// Set security HTTP headers
app.use(helmet());

// Development logging

// Limit requests from same API
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(bodyParser.json());
//app.use(express.json({ limit: '10kb' }));
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  morganBody(app);
}

if (process.env.NODE_ENV === 'production') {
  expressWinston.requestWhitelist.push('body');
  expressWinston.responseWhitelist.push('body');
  expressWinston.bodyBlacklist.push('password', 'passwordConfirm', 'token');

  app.use(
    expressWinston.logger({
      transports: [new winston.transports.Console()],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      ),
      ignoreRoute: function(req, res) {
        return false;
      }
    })
  );
}

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
      'q'
    ]
  })
);

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  next();
});

// 3) ROUTES

app.use('/api/v1/users', userRouter);

// Piatto Routes

//Piatto production routes
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/dMenuProduct', dMenuRouter);
app.use('/api/v1/addOn', addOnRouter);
app.use(
  '/api/v1/additionalProductInfomation',
  additionalProductInformationRouter
);

app.use('/api/v1/rawMaterial', rawMaterialRouter);

app.use('/api/v1/basicRecipe', basicRecipeRouter);
app.use('/api/v1/recipe', recipeRouter);
app.use('/api/v1/supplier', supplierRouter);
app.use('/api/v1/stepLogs', logRouter);

if (process.env.NODE_ENV === 'production') {
  // Serving static files
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
