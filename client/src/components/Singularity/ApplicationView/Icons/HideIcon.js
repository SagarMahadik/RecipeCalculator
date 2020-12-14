import React from 'react';

function DisplayHideIcon(props) {
  return (
    <svg width={40} height={40} viewBox="0 0 20.096 19.371" {...props}>
      <defs>
        <linearGradient id="linearGradient841">
          <stop offset="0" stopColor="#654fe5" stopOpacity="1" />
          <stop offset="1" stopColor="#b0a7e5" stopOpacity="1" />
        </linearGradient>
        <linearGradient
          id="linearGradient843"
          x1="13.386"
          x2="13.329"
          y1="20.093"
          y2="9.105"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient841"
        />
        <filter
          id="filter1895"
          width="1.21"
          height="1.21"
          x="-0.105"
          y="-0.105"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="0.649" />
        </filter>
      </defs>
      <g transform="translate(176.357 2.882)">
        <g
          fillOpacity="1"
          strokeLinejoin="round"
          transform="translate(-180.024 -7.282)"
        >
          <circle
            cx="14.057"
            cy="13.943"
            r="7.421"
            fill="#6a55e5"
            strokeWidth="0.91"
            filter="url(#filter1895)"
            opacity="0.507"
            stopColor="#000"
            transform="matrix(1.11923 0 0 1.07885 -2.019 -.957)"
          />
          <circle
            cx="13.229"
            cy="13.229"
            r="7.421"
            fill="url(#linearGradient843)"
            strokeWidth="1"
            stopColor="#000"
          />
          <path
            fill="none"
            stroke="#fff"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.765"
            d="M9.295 11.131l3.823 4.384 3.653-4.571"
          />
        </g>
      </g>
    </svg>
  );
}

export default DisplayHideIcon;
