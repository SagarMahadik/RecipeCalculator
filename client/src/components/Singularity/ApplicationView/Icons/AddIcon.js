import React from 'react';

function Icon(props) {
  return (
    <svg width={40} height={40} {...props} viewBox="0 0 20.096 19.371">
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
      <g strokeLinejoin="round" transform="translate(-3.667 -4.4)">
        <circle
          cx="14.057"
          cy="13.943"
          r="7.421"
          fill="#6a55e5"
          fillOpacity="1"
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
          fillOpacity="1"
          strokeWidth="1"
          stopColor="#000"
        />
        <path
          fill="#000"
          fillOpacity="0"
          stroke="#fff"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.265"
          d="M13.2 17.996l.058-9.533"
        />
        <path
          fill="none"
          fillOpacity="1"
          stroke="#fff"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.265"
          d="M8.463 13.2l9.533.058"
        />
      </g>
    </svg>
  );
}

export default Icon;
