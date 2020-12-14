import React, { useState, useEffect } from 'react';
import {
  CenterAlignedColumnContainer,
  CenterAlignedRowContainer,
  GridContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';
import _ from 'lodash';

import uuid from 'react-uuid';

function Test() {
  let rawMaterial = [
    { id: 1, name: 'Marjoram - Fresh', price: '78.76' },
    { id: 2, name: 'English Muffin', price: '481.59' },
    { id: 3, name: 'Table Cloth 81x81 White', price: '126.94' },
    { id: 4, name: 'Radish - Pickled', price: '220.35' },
    { id: 5, name: 'Wasabi Powder', price: '370.55' },
    { id: 6, name: 'Wasabi Powder', price: '426.33' },
    { id: 7, name: 'Persimmons', price: '468.82' },
    { id: 8, name: 'Bacardi Breezer - Strawberry', price: '315.66' },
    { id: 9, name: 'Pepper - Orange', price: '192.44' },
    { id: 10, name: 'Pork - Butt, Boneless', price: '270.88' },
    { id: 11, name: 'Turnip - Wax', price: '402.02' },
    { id: 12, name: 'Chips - Assorted', price: '485.70' },
    { id: 13, name: 'Spoon - Soup, Plastic', price: '387.45' },
    { id: 14, name: 'Bag - Bread, White, Plain', price: '475.52' },
    { id: 15, name: 'Halibut - Fletches', price: '447.20' },
    { id: 16, name: 'Marsala - Sperone, Fine, D.o.c.', price: '4.85' },
    { id: 17, name: 'Pineapple - Canned, Rings', price: '126.45' },
    { id: 18, name: 'Rice - Jasmine Sented', price: '315.17' },
    { id: 19, name: 'Gherkin', price: '96.33' },
    { id: 20, name: 'Cheese - Asiago', price: '187.01' },
    { id: 21, name: 'Soup - Campbells, Beef Barley', price: '197.51' },
    { id: 22, name: 'Pepper - Roasted Red', price: '185.48' },
    { id: 23, name: 'Sugar - Splenda Sweetener', price: '374.10' },
    { id: 24, name: 'Graham Cracker Mix', price: '433.36' },
    { id: 25, name: 'Pasta - Penne, Lisce, Dry', price: '85.77' },
    { id: 26, name: 'Brandy Apricot', price: '202.79' },
    { id: 27, name: 'Cod - Fillets', price: '185.89' },
    { id: 28, name: 'Catfish - Fillets', price: '290.86' },
    { id: 29, name: 'Chick Peas - Dried', price: '370.56' },
    { id: 30, name: 'Potatoes - Idaho 80 Count', price: '72.46' },
    { id: 31, name: 'Mushroom - Oyster, Fresh', price: '420.29' },
    { id: 32, name: 'Coffee Decaf Colombian', price: '387.99' },
    { id: 33, name: 'Ecolab Crystal Fusion', price: '220.57' },
    { id: 34, name: 'Nestea - Iced Tea', price: '401.90' },
    { id: 35, name: 'Tart Shells - Savory, 3', price: '61.39' },
    { id: 36, name: 'Wine - Two Oceans Sauvignon', price: '432.20' },
    { id: 37, name: 'Soup - Campbells - Chicken Noodle', price: '416.72' },
    { id: 38, name: 'Thyme - Dried', price: '215.12' },
    { id: 39, name: 'Juice - Happy Planet', price: '152.44' },
    { id: 40, name: 'Vinegar - Balsamic, White', price: '366.71' },
    { id: 41, name: 'Foam Dinner Plate', price: '372.17' },
    { id: 42, name: 'Propel Sport Drink', price: '270.44' },
    { id: 43, name: 'Beef - Ox Tongue', price: '349.91' },
    { id: 44, name: 'Soup - Campbells, Lentil', price: '438.68' },
    { id: 45, name: 'True - Vue Containers', price: '307.96' },
    { id: 46, name: 'Olives - Morracan Dired', price: '205.62' },
    { id: 47, name: 'Island Oasis - Strawberry', price: '246.48' },
    { id: 48, name: 'Heavy Duty Dust Pan', price: '175.59' },
    { id: 49, name: 'Island Oasis - Mango Daiquiri', price: '110.43' },
    { id: 50, name: 'Apple - Custard', price: '176.43' },
    { id: 51, name: 'Cheese - Mozzarella', price: '424.22' },
    { id: 52, name: 'Bread - Sticks, Thin, Plain', price: '42.33' },
    { id: 53, name: 'Cheese - Provolone', price: '331.84' },
    { id: 54, name: 'Sole - Iqf', price: '360.61' },
    { id: 55, name: 'Bread - Malt', price: '266.60' },
    { id: 56, name: 'Ham - Smoked, Bone - In', price: '15.69' },
    { id: 57, name: 'Wine - Ej Gallo Sonoma', price: '358.44' },
    { id: 58, name: 'Capon - Breast, Double, Wing On', prie: '196.70' },
    { id: 59, name: 'Butter - Unsalted', price: '199.00' },
    { id: 60, name: 'Glass Clear 8 Oz', price: '492.57' },
    { id: 61, name: 'Wine - Tribal Sauvignon', price: '161.82' },
    { id: 62, name: 'Mushroom - King Eryingii', price: '418.84' },
    { id: 63, name: 'Kahlua', price: '203.61' },
    { id: 64, name: 'Chickensplit Half', price: '175.26' },
    { id: 65, name: 'Shichimi Togarashi Peppeers', price: '132.61' },
    { id: 66, name: 'Veal Inside - Provimi', price: '241.59' },
    { id: 67, name: 'Beer - True North Strong Ale', price: '194.30' },
    { id: 68, name: 'Chips - Doritos', price: '203.75' },
    { id: 69, name: 'Nut - Walnut, Chopped', price: '310.09' },
    { id: 70, name: 'Spice - Chili Powder Mexican', price: '110.13' },
    { id: 71, name: 'Container Clear 8 Oz', price: '360.98' },
    { id: 72, name: 'Tray - Foam, Square 4 - S', price: '246.94' },
    { id: 73, name: 'Fennel - Seeds', price: '116.95' },
    { id: 74, name: 'Soup Knorr Chili With Beans', price: '476.85' },
    { id: 75, name: 'Buffalo - Tenderloin', price: '302.62' },
    { id: 76, name: 'Ocean Spray - Ruby Red', price: '318.46' },
    { id: 77, name: 'Chinese Lemon Pork', price: '409.38' },
    { id: 78, name: 'Pickles - Gherkins', price: '383.31' },
    { id: 79, name: 'Beer - Mill St Organic', price: '176.40' },
    { id: 80, name: 'Garbag Bags - Black', price: '386.27' },
    { id: 81, name: 'Durian Fruit', price: '92.50' },
    { id: 82, name: 'Bagelers - Cinn / Brown Sugar', price: '111.09' },
    { id: 83, name: 'Creamers - 10%', price: '420.44' },
    { id: 84, name: 'Bread - White Epi Baguette', price: '292.81' },
    { id: 85, name: 'Wine - Jaboulet Cotes Du Rhone', price: '46.02' },
    { id: 86, name: 'Wine - White, French Cross', price: '449.39' },
    { id: 87, name: 'Beer - Corona', price: '169.81' },
    { id: 88, name: 'Cheese - Romano, Grated', price: '28.26' },
    { id: 89, name: 'Veal - Brisket, Provimi, Bone - In', price: '426.17' },
    { id: 90, name: 'Onions - Dried, Chopped', price: '362.84' },
    { id: 91, name: 'Wine - Two Oceans Cabernet', price: '461.98' },
    { id: 92, name: 'Appetizer - Escargot Puff', price: '385.64' },
    { id: 93, name: 'Glass - Juice Clear 5oz 55005', price: '159.23' },
    { id: 94, name: 'Appetizer - Seafood Assortment', price: '231.95' },
    { id: 95, name: 'Pickle - Dill', price: '362.68' },
    { id: 96, name: 'Muffin Mix - Chocolate Chip', price: '329.23' },
    { id: 97, name: 'Wine - Sogrape Mateus Rose', price: '390.29' },
    { id: 98, name: 'Sweet Pea Sprouts', price: '135.87' },
    { id: 99, name: 'Sour Puss Raspberry', price: '348.75' },
    { id: 100, name: 'Shrimp - 16/20, Iqf, Shell On', price: '385.34' },
    { id: 101, name: 'Chicken - Diced, Cooked', price: '220.13' },
    { id: 102, name: 'Sobe - Green Tea', price: '125.52' },
    { id: 103, name: 'Soup - Campbells, Creamy', price: '115.36' },
    { id: 104, name: 'Zucchini - Mini, Green', price: '188.42' },
    { id: 105, name: 'Milk - 2% 250 Ml', price: '240.67' },
    { id: 106, name: 'Flower - Leather Leaf Fern', price: '332.14' },
    { id: 107, name: 'Corn - Cream, Canned', price: '48.93' },
    { id: 108, name: 'Stainless Steel Cleaner Vision', price: '192.63' },
    { id: 109, name: 'Chicken - Leg, Fresh', price: '336.30' },
    { id: 110, name: 'Mop Head - Cotton, 24 Oz', price: '223.06' },
    { id: 111, name: 'Knife Plastic - White', price: '102.93' },
    { id: 112, name: 'Tea - English Breakfast', price: '128.38' },
    { id: 113, name: 'Bread - Malt', price: '304.18' },
    { id: 114, name: 'Beef - Texas Style Burger', price: '189.84' },
    { id: 115, name: 'Couscous', price: '464.30' },
    { id: 116, name: 'Veal - Inside, Choice', price: '406.12' },
    { id: 117, name: 'The Pop Shoppe - Cream Soda', price: '31.49' },
    { id: 118, name: 'Cheese - Colby', price: '218.38' },
    { id: 119, name: 'Jagermeister', price: '407.66' },
    { id: 120, name: 'Mints - Striped Red', price: '19.85' },
    { id: 121, name: 'Clams - Canned', price: '152.03' },
    { id: 122, name: 'Cake - Dulce De Leche', price: '127.36' },
    { id: 123, name: 'Corn Shoots', price: '280.61' },
    { id: 124, name: 'Basil - Thai', price: '67.43' },
    { id: 125, name: 'Wine - Cousino Macul Antiguas', price: '62.87' },
    { id: 126, name: 'Beef - Rouladin, Sliced', price: '256.35' },
    { id: 127, name: 'Pepper - Sorrano', price: '356.27' },
    { id: 128, name: 'Lumpfish Black', price: '318.23' },
    { id: 129, name: 'Spring Roll Wrappers', price: '255.92' },
    { id: 130, name: 'Table Cloth - 53x69 Colour', price: '317.56' },
    { id: 131, name: 'Halibut - Steaks', price: '332.74' },
    { id: 132, name: 'Sugar - White Packet', price: '267.34' },
    { id: 133, name: 'Iced Tea Concentrate', price: '363.85' },
    { id: 134, name: 'Venison - Ground', price: '466.94' },
    { id: 135, name: 'Ocean Spray - Kiwi Strawberry', price: '479.68' },
    { id: 136, name: 'Chocolate - Chips Compound', price: '235.92' },
    { id: 137, name: 'Appetizer - Chicken Satay', price: '199.69' },
    { id: 138, name: 'Compound - Mocha', price: '431.16' },
    { id: 139, name: 'Syrup - Chocolate', price: '427.25' },
    { id: 140, name: 'Lamb - Leg, Boneless', price: '183.44' },
    { id: 141, name: 'Jam - Blackberry, 20 Ml Jar', price: '493.03' },
    { id: 142, name: 'Lid - 3oz Med Rec', price: '259.42' },
    { id: 143, name: 'Wine - Ej Gallo Sierra Valley', price: '447.99' },
    { id: 144, name: 'Onions - Pearl', price: '12.31' },
    { id: 145, name: 'Broom - Angled', price: '361.98' },
    { id: 146, name: 'Pastry - Raisin Muffin - Mini', price: '117.14' },
    { id: 147, name: 'Wine - Conde De Valdemar', price: '330.20' },
    { id: 148, name: 'Sauce - Rosee', price: '66.95' },
    { id: 149, name: 'Ecolab - Hand Soap Form Antibac', price: '39.67' },
    { id: 150, name: 'Rice - Brown', price: '384.18' },
    { id: 151, name: 'Fudge - Chocolate Fudge', price: '402.12' },
    { id: 152, name: 'Juice - Grape, White', price: '440.56' },
    { id: 153, name: 'Cheese - Grie Des Champ', price: '49.06' },
    { id: 154, name: 'Mustard Prepared', price: '480.13' },
    { id: 155, name: 'Cookies Cereal Nut', price: '352.47' },
    { id: 156, name: 'Mushroom - Oyster, Fresh', price: '331.17' },
    { id: 157, name: 'Beef Ground Medium', price: '329.50' },
    { id: 158, name: 'Magnotta - Bel Paese White', price: '335.43' },
    { id: 159, name: 'Beef Wellington', price: '161.59' },
    { id: 160, name: 'Lotus Rootlets - Canned', price: '77.22' },
    { id: 161, name: 'Pork - Liver', price: '496.19' },
    { id: 162, name: 'Tea - Earl Grey', price: '44.85' },
    { id: 163, name: 'Wine - Cahors Ac 2000, Clos', price: '352.28' },
    { id: 164, name: 'Veal - Nuckle', price: '427.98' },
    { id: 165, name: 'Shrimp - Black Tiger 13/15', price: '257.59' },
    { id: 166, name: 'Wine - Spumante Bambino White', price: '338.01' },
    { id: 167, name: 'Potatoes - Yukon Gold, 80 Ct', price: '43.55' },
    { id: 168, name: 'Arizona - Green Tea', price: '113.40' },
    { id: 169, name: 'Pie Filling - Cherry', price: '375.29' },
    { id: 170, name: 'Wine - Riesling Dr. Pauly', price: '322.35' },
    { id: 171, name: 'Bread - Dark Rye', price: '477.27' },
    { id: 172, name: 'Bread - Rye', price: '100.68' },
    { id: 173, name: 'Butter Balls Salted', price: '251.50' },
    { id: 174, name: 'Rolled Oats', price: '297.94' },
    { id: 175, name: 'Butter - Salted', price: '241.25' },
    { id: 176, name: 'Schnappes Peppermint - Walker', price: '199.35' },
    { id: 177, name: 'Banana - Leaves', price: '187.78' },
    { id: 178, name: 'Mushroom - King Eryingii', price: '99.90' },
    { id: 179, name: 'Truffle Shells - Semi - Sweet', price: '450.02' },
    { id: 180, name: 'Oranges - Navel, 72', price: '65.81' },
    { id: 181, name: 'Ham - Cooked', price: '393.48' },
    { id: 182, name: 'Garlic - Peeled', price: '198.73' },
    { id: 183, name: 'Beer - Mill St Organic', price: '365.67' },
    { id: 184, name: 'Shrimp - Black Tiger 26/30', price: '48.25' },
    { id: 185, name: 'Mix - Cocktail Strawberry Daiquiri', price: '371.21' },
    { id: 186, name: 'Bread - Bistro Sour', price: '240.56' },
    { id: 187, name: 'Soup - Campbells Chicken', price: '347.80' },
    { id: 188, name: 'Chicken - White Meat With Tender', price: '456.02' },
    { id: 189, name: 'Chinese Foods - Plain Fried Rice', price: '384.52' },
    { id: 190, name: 'Alize Sunset', price: '213.97' },
    { id: 191, name: 'Langers - Ruby Red Grapfruit', price: '113.31' },
    { id: 192, name: 'Glass - Wine, Plastic, Clear 5 Oz', price: '456.55' },
    { id: 193, name: 'Stock - Fish', price: '324.88' },
    { id: 194, name: 'Beef - Baby, Liver', price: '308.05' },
    { id: 195, name: 'Muffin - Mix - Creme Brule 15l', price: '196.57' },
    { id: 196, name: 'Vodka - Moskovskaya', price: '345.84' },
    { id: 197, name: 'Snapple Lemon Tea', price: '277.09' },
    { id: 198, name: 'Calaloo', price: '4.25' },
    { id: 199, name: 'Wine - Red, Metus Rose', price: '280.89' },
    { id: 200, name: 'Mousse - Mango', price: '162.66' }
  ];

  let baseReceipes = [
    {
      name: 'Moousse',
      id: '1',
      details: [
        { id: 199, name: 'Wine - Red, Metus Rose', price: '280.89' },
        { id: 200, name: 'Mousse - Mango', price: '162.66' }
      ]
    },
    {
      name: 'glaze',

      id: '2',
      details: [
        { id: 195, name: 'Muffin - Mix - Creme Brule 15l', price: '196.57' },
        { id: 196, name: 'Vodka - Moskovskaya', price: '345.84' },
        { id: 197, name: 'Snapple Lemon Tea', price: '277.09' }
      ]
    },
    {
      name: 'innert',

      id: '3',
      details: [
        { id: 180, name: 'Oranges - Navel, 72', price: '65.81' },
        { id: 181, name: 'Ham - Cooked', price: '393.48' },
        { id: 182, name: 'Garlic - Peeled', price: '198.73' },
        { id: 183, name: 'Beer - Mill St Organic', price: '365.67' }
      ]
    },
    {
      name: 'Shell',

      id: '4',
      details: [
        { id: 2, name: 'English Muffin', price: '481.59' },
        { id: 3, name: 'Table Cloth 81x81 White', price: '126.94' },
        { id: 4, name: 'Radish - Pickled', price: '220.35' }
      ]
    },
    {
      name: 'ganche',

      id: '5',
      details: [
        { id: 124, name: 'Basil - Thai', price: '67.43' },
        { id: 125, name: 'Wine - Cousino Macul Antiguas', price: '62.87' },
        { id: 126, name: 'Beef - Rouladin, Sliced', price: '256.35' },
        { id: 127, name: 'Pepper - Sorrano', price: '356.27' },
        { id: 128, name: 'Lumpfish Black', price: '318.23' }
      ]
    },
    {
      name: 'Moousse1',
      id: '6',
      details: [
        { id: 145, name: 'Broom - Angled', price: '361.98' },
        { id: 146, name: 'Pastry - Raisin Muffin - Mini', price: '117.14' },
        { id: 147, name: 'Wine - Conde De Valdemar', price: '330.20' },
        { id: 148, name: 'Sauce - Rosee', price: '66.95' }
      ]
    },
    {
      name: 'ganache1',
      id: '7',
      details: [
        { id: 118, name: 'Cheese - Colby', price: '218.38' },
        { id: 119, name: 'Jagermeister', price: '407.66' },
        { id: 120, name: 'Mints - Striped Red', price: '19.85' },
        { id: 121, name: 'Clams - Canned', price: '152.03' },
        { id: 122, name: 'Cake - Dulce De Leche', price: '127.36' },
        { id: 123, name: 'Corn Shoots', price: '280.61' },
        { id: 124, name: 'Basil - Thai', price: '67.43' },
        { id: 125, name: 'Wine - Cousino Macul Antiguas', price: '62.87' }
      ]
    },
    {
      name: 'gealto mix',
      id: '8',
      details: [
        { id: 139, name: 'Syrup - Chocolate', price: '427.25' },
        { id: 140, name: 'Lamb - Leg, Boneless', price: '183.44' },
        { id: 141, name: 'Jam - Blackberry, 20 Ml Jar', price: '493.03' },
        { id: 142, name: 'Lid - 3oz Med Rec', price: '259.42' }
      ]
    },
    {
      name: 'bread',

      id: '9',
      details: [
        { id: 181, name: 'Ham - Cooked', price: '393.48' },
        { id: 182, name: 'Garlic - Peeled', price: '198.73' },
        { id: 183, name: 'Beer - Mill St Organic', price: '365.67' }
      ]
    },
    {
      name: 'salao bread',
      id: '45',
      details: [
        { id: 179, name: 'Truffle Shells - Semi - Sweet', price: '450.02' },
        { id: 180, name: 'Oranges - Navel, 72', price: '65.81' },
        { id: 181, name: 'Ham - Cooked', price: '393.48' },
        { id: 182, name: 'Garlic - Peeled', price: '198.73' }
      ]
    },
    {
      name: 'Moousse10',
      id: '145',
      details: [
        { id: 108, name: 'Stainless Steel Cleaner Vision', price: '192.63' },
        { id: 109, name: 'Chicken - Leg, Fresh', price: '336.30' },
        { id: 110, name: 'Mop Head - Cotton, 24 Oz', price: '223.06' },
        { id: 111, name: 'Knife Plastic - White', price: '102.93' },
        { id: 112, name: 'Tea - English Breakfast', price: '128.38' },
        { id: 113, name: 'Bread - Malt', price: '304.18' },
        { id: 114, name: 'Beef - Texas Style Burger', price: '189.84' },
        { id: 115, name: 'Couscous', price: '464.30' }
      ]
    },
    {
      name: 'Moousse11',
      id: '126767',
      details: [
        { id: 136, name: 'Chocolate - Chips Compound', price: '235.92' },
        { id: 137, name: 'Appetizer - Chicken Satay', price: '199.69' },
        { id: 138, name: 'Compound - Mocha', price: '431.16' },
        { id: 139, name: 'Syrup - Chocolate', price: '427.25' }
      ]
    }
  ];

  const [finalrmArray, setFinalrm] = useState([]);
  let [finalbrArray, setFinalBr] = useState([]);
  let [finalRecArray, setFianlRecAray] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('');
  const [array, setArrray] = useState([]);
  const [options, setOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [final, setFinal] = useState();
  const [changing, setchanging] = useState(false);

  const [showRm, setShowRm] = useState(false);

  const [showBr, setShowBr] = useState(false);

  useEffect(() => {
    if (finalbrArray.length > 0) {
      setShowBr(true);
    }
    if (finalrmArray.length > 0) {
      setShowRm(true);
    }
  }, [finalbrArray, finalrmArray]);

  const onChange = e => {
    console.log('in a on Change');

    let string = e.currentTarget.value;

    setSearchText(prevText => {
      return string;
    });

    console.log(searchText);
    console.log(array);

    let filterOptions = array.filter(
      material =>
        material.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    );
    setOptions(filterOptions);
  };

  const onRawMaterial = () => {
    setArrray(rawMaterial);
    setSearchText('');
    setOptions([]);
    setFilter('rawMaterial');
    console.log(filter);
  };
  const onBaseRecepie = () => {
    setArrray(baseReceipes);
    setSearchText('');
    setOptions([]);
    setFilter('baseReceipes');
    console.log(filter);
  };

  const listClick = item => {
    console.log(array);
    console.log(filter);
    console.log(final);
    if (filter == 'rawMaterial') {
      finalrmArray.push(item);
      setFinalrm(finalrmArray);
      finalRecArray = finalbrArray.concat(finalrmArray);
      if (finalrmArray.length > 0) {
        setShowRm(true);
      }
    }
    if (filter == 'baseReceipes') {
      item.details.map(rawm => {
        finalbrArray.push(rawm);
        if (finalbrArray.length > 0) {
          setShowBr(true);
        }
      });
      setFinalBr(finalbrArray);
    }
    setSearchText('');
    setOptions([]);
    console.table(finalbrArray);
    console.table(finalRecArray);
  };

  const handleTextClick = id => e => {
    /**
     *     const objIndex = finalbrArray.findIndex(br => br.id === id);

    console.log(objIndex);

    finalbrArray[objIndex].price = e.target.value;

    const updatedObj = { ...finalbrArray[objIndex], price: e.target.value };
        finalbrArray = finalbrArray.map(it =>
      it.id === id ? { ...it, price: e.target.value } : it
        setTimeout(() => setFinalBr(updatedBaseRecpie), 3000);
    );
     */

    finalbrArray
      .filter(br => br.id === id)
      .forEach(item => {
        item.price = e.target.value;
      });

    const updatedBaseRecpie = [...finalbrArray];
    console.log(updatedBaseRecpie);

    setFinalBr(updatedBaseRecpie);

    console.table(finalbrArray);
  };
  return (
    <>
      <CenterAlignedColumnContainer>
        <input type="text" onChange={onChange} value={searchText} />
        {options.length
          ? options.slice(0, 4).map(opt => {
              return <div onClick={() => listClick(opt)}>{opt.name}</div>;
            })
          : null}
        <CenterAlignedRowContainer>
          <button
            onClick={onBaseRecepie}
            style={{
              background: 'black',
              color: 'white',
              width: '20%',
              height: '60px'
            }}
          >
            {' '}
            Base recepie
          </button>
          <button
            onClick={onRawMaterial}
            style={{
              background: 'green',
              margin: '20px',
              width: '20%',
              height: '60px'
            }}
          >
            {' '}
            raw material
          </button>
          <CenterAlignedColumnContainer>
            {showRm &&
              finalrmArray.map((item, index) => {
                return (
                  <CenterAlignedRowContainer key={item.id}>
                    <h1>{item.name}</h1>
                    <input
                      type="number"
                      name="price"
                      value={item.price}
                      onClick={handleTextClick}
                      onChange={handleTextClick}
                    />
                  </CenterAlignedRowContainer>
                );
              })}
          </CenterAlignedColumnContainer>
          <CenterAlignedColumnContainer>
            <div />
            {showBr &&
              finalbrArray.map((item, index) => {
                return (
                  <GridContainer key={index}>
                    <h6>{item.name}</h6>
                    <input
                      type="number"
                      name="quantity"
                      value={item.price}
                      onClick={handleTextClick}
                      onChange={handleTextClick(item.id)}
                      style={{ height: '30px' }}
                    />
                    <h6>{2 * item.price}</h6>
                  </GridContainer>
                );
              })}
          </CenterAlignedColumnContainer>
        </CenterAlignedRowContainer>
      </CenterAlignedColumnContainer>
    </>
  );
}

export default Test;
