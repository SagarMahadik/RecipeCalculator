import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg width={110} height={61} viewBox="0 0 28.919 16.14" {...props}>
      <defs>
        <linearGradient id="prefix__e">
          <stop offset={0} stopColor="#f2f2f2" />
          <stop offset={0.855} stopColor="#fff" />
          <stop offset={1} stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="prefix__d">
          <stop offset={0} stopColor="#f2f2f2" />
          <stop offset={0.818} stopColor="#fff" />
          <stop offset={1} stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="prefix__c">
          <stop offset={0} stopColor="#ccc" />
          <stop offset={0.777} stopColor="#fff" />
          <stop offset={1} stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="prefix__b">
          <stop offset={0} stopColor="#e6e6e6" />
          <stop offset={0.868} stopColor="#fff" />
          <stop offset={1} stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="prefix__a">
          <stop offset={0} stopColor="#e6e6e6" />
          <stop offset={0.873} stopColor="#fff" />
          <stop offset={1} stopColor="#1a1a1a" />
        </linearGradient>
        <radialGradient
          r={20.694}
          fy={19.853}
          fx={34.461}
          cy={19.853}
          cx={34.461}
          gradientTransform="matrix(-.0056 -.32943 .69414 .00401 33.885 12.092)"
          gradientUnits="userSpaceOnUse"
          id="prefix__g"
          xlinkHref="#prefix__e"
        />
        <filter
          height={1.22}
          y={-0.11}
          width={1.093}
          x={-0.046}
          id="prefix__f"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={1.122} />
        </filter>
      </defs>
      <path
        transform="matrix(.45655 0 0 .54046 52.493 -9.388)"
        d="M-54.33 32.301a28.979 12.238.35 01-28.632 12.24 28.979 12.238.35 01-29.32-12.24 28.979 12.238.35 0128.63-12.238A28.979 12.238.35 01-54.33 32.3"
        opacity={0.757}
        fill="#4d4d4d"
        stroke="#f2f2f2"
        strokeWidth={0.201}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#prefix__f)"
      />
      <path
        d="M60.901 1.181A13.23 6.614.455 0147.83 7.796 13.23 6.614.455 0134.443 1.18a13.23 6.614.455 0113.072-6.614A13.23 6.614.455 0160.9 1.18"
        opacity={0.962}
        fill="url(#prefix__g)"
        transform="translate(-33.307 5.518)"
      />
    </svg>
  );
}

export default SvgComponent;
