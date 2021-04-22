import React from 'react';

function RandomButton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      fill="none"
      viewBox="0 0 56 56"
    >
      <g filter="url(#filter0_ddi)">
        <path
          fill="#FDFCFC"
          d="M42 26c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16z"
        />
        <path
          stroke="#E7EAEF"
          d="M41.5 26c0 8.56-6.94 15.5-15.5 15.5-8.56 0-15.5-6.94-15.5-15.5 0-8.56 6.94-15.5 15.5-15.5 8.56 0 15.5 6.94 15.5 15.5z"
        />
      </g>
      <g filter="url(#filter1_ddi)">
        <circle cx="26" cy="26" r="11" fill="url(#paint0_linear)" />
        <circle cx="26" cy="26" r="10.5" stroke="#E7EAEF" />
      </g>
      <g clipPath="url(#clip0)">
        <path
          fill="url(#paint1_linear)"
          d="M30.985 24.837a.199.199 0 00-.046-.068l-1.25-1.25a.209.209 0 00-.294.296l.894.894h-.122c-1.628 0-2.751.448-3.641 1.452a.208.208 0 10.313.277c.54-.611 1.408-1.313 3.328-1.313h.122l-.894.894a.208.208 0 00.295.295l1.25-1.25a.206.206 0 00.045-.227z"
        />
        <path
          fill="url(#paint2_linear)"
          d="M25.772 27.58a.209.209 0 00-.288.063l-.06.096c-.832 1.305-1.723 2.385-4.216 2.385a.208.208 0 000 .417c2.701 0 3.702-1.22 4.567-2.578l.06-.096a.208.208 0 00-.063-.288z"
        />
        <path
          fill="url(#paint3_linear)"
          d="M30.984 29.003a.199.199 0 00-.046-.068l-1.25-1.25a.208.208 0 00-.294.295l.894.894h-.122c-2.605 0-3.394-1.255-4.23-2.584-.876-1.392-1.782-2.832-4.728-2.832a.208.208 0 000 .417c2.716 0 3.522 1.28 4.375 2.637.86 1.367 1.748 2.779 4.583 2.779h.122l-.894.894a.208.208 0 10.295.295l1.25-1.25a.217.217 0 00.045-.068.212.212 0 000-.159z"
        />
      </g>
      <defs>
        <filter
          id="filter0_ddi"
          width="50"
          height="50"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-2" dy="-2" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix values="0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 0.75 0" />
          <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect3_innerShadow" />
        </filter>
        <filter
          id="filter1_ddi"
          width="52"
          height="52"
          x="4"
          y="4"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="3"
            result="effect1_dropShadow"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-2" dy="-2" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix values="0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 1 0" />
          <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect3_innerShadow" />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="30.447"
          x2="21.665"
          y1="28.663"
          y2="27.369"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7EAEF" />
          <stop offset="1" stopColor="#F5F7F9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="26.474"
          x2="31.422"
          y1="24.387"
          y2="25.468"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#494343" />
          <stop offset="1" stopColor="#131111" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="21"
          x2="26.274"
          y1="28.458"
          y2="29.72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#494343" />
          <stop offset="1" stopColor="#131111" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="21"
          x2="31.979"
          y1="25.614"
          y2="27.894"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#494343" />
          <stop offset="1" stopColor="#131111" stopOpacity="0.35" />
        </linearGradient>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H10V10H0z" transform="translate(21 22)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default RandomButton;
