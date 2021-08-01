import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../GlobalStyle";

function Wheels({ width, white }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 512 512"
      width={width ? width : 40}
      height={40}
      stroke={white ? "#fff" : COLORS.primary}
      fill={white ? "#fff" : COLORS.primary}
    >
      <Path d="M255.944 331.185A75.185 75.185 0 10180.759 256a75.27 75.27 0 0075.185 75.185zM250 318.9a62.669 62.669 0 01-34.251-14.151l13.689-13.674A42.285 42.285 0 00250 299.592zm12-.017v-19.305a42.423 42.423 0 0020.569-8.551l13.607 13.62A62.674 62.674 0 01262 318.884zm42.694-22.731l-13.618-13.618A43.786 43.786 0 00299.585 262h19.251a62.9 62.9 0 01-14.142 34.153zM318.836 250h-19.251a43.786 43.786 0 00-8.509-20.535l13.618-13.618A62.9 62.9 0 01318.836 250zM262 193.116a62.674 62.674 0 0134.176 14.237l-13.607 13.62A42.423 42.423 0 00262 212.422zM256 224a32 32 0 11-32 32 32.04 32.04 0 0132-32zm-6-30.9v19.309a42.285 42.285 0 00-20.562 8.516l-13.689-13.675A62.669 62.669 0 01250 193.1zm-42.7 22.627l13.674 13.673a43.781 43.781 0 00-8.559 20.6h-19.363a62.9 62.9 0 0114.248-34.274zM212.415 262a43.781 43.781 0 008.559 20.6L207.3 296.274A62.9 62.9 0 01193.052 262zM215.988 146.021a21.064 21.064 0 0021.884 10.108 103.9 103.9 0 0136.256 0 21.047 21.047 0 0021.884-10.108l26.371-45.489a6 6 0 00-3.044-8.612 177.622 177.622 0 00-126.678 0 6 6 0 00-3.044 8.612zM256 92.243a164.512 164.512 0 0152.393 8.5L285.63 140a9.03 9.03 0 01-9.39 4.314 115.388 115.388 0 00-40.48 0 9.029 9.029 0 01-9.39-4.314l-22.763-39.265A164.512 164.512 0 01256 92.243zM366.955 120.731a6 6 0 00-8.926 1.607l-26.393 44.452a21.544 21.544 0 002.237 24.377 103.979 103.979 0 0118.106 31.876c3.164 8.807 11.263 14.957 19.7 14.957h52.708a6 6 0 005.928-6.92 176 176 0 00-63.36-110.349zM371.677 226c-3.3 0-6.992-3.081-8.405-7.014a116.071 116.071 0 00-20.251-35.586 9.474 9.474 0 01-1.034-10.539l22.749-38.314A163.948 163.948 0 01417.233 226zM160.021 290.955C157.149 282.964 149.6 278 140.323 278H87.615a6 6 0 00-5.928 6.92c6.668 42.993 28.577 80.545 63.358 108.6a6 6 0 008.976-1.695l26.342-46.115a20.571 20.571 0 00-2.236-23.876 98.664 98.664 0 01-18.106-30.879zm9.942 48.769l-22.8 39.909c-27.475-24.016-45.452-54.768-52.4-89.633h45.553c1.549 0 6.733.361 8.405 5.013a112 112 0 0020.258 34.587 8.607 8.607 0 01.984 10.124zM296.012 365.979a21.063 21.063 0 00-21.884-10.108 103.9 103.9 0 01-36.256 0 21.066 21.066 0 00-21.884 10.108l-26.371 45.489a6 6 0 003.044 8.612 177.622 177.622 0 00126.678 0 6 6 0 003.044-8.612zM256 419.757a164.512 164.512 0 01-52.393-8.5L226.37 372a9.036 9.036 0 019.39-4.314 115.93 115.93 0 0040.48 0 9.036 9.036 0 019.39 4.314l22.763 39.265A164.512 164.512 0 01256 419.757zM424.385 278h-52.708c-9.118 0-16.849 5.123-19.7 13.051a98.134 98.134 0 01-18.106 30.59 21.16 21.16 0 00-2.248 24.242l26.362 45.859a6 6 0 008.968 1.68c34.792-28.062 56.7-65.581 63.358-108.5a6 6 0 00-5.928-6.92zM364.82 379.55l-22.8-39.666a9.265 9.265 0 011-10.478 109.9 109.9 0 0020.252-34.3c1.149-3.2 4.291-5.109 8.4-5.109h45.558c-6.94 34.809-24.922 65.534-52.41 89.553zM153.984 122.208a6 6 0 00-8.939-1.63 176.177 176.177 0 00-63.358 110.5A6 6 0 0087.615 238h52.708c8.466 0 16.566-6.087 19.7-14.8 4.423-12.308 10.853-23.793 18.106-32.339a20.486 20.486 0 002.218-23.792zm15 60.886c-8.28 9.755-15.282 22.219-20.251 36.046-1.382 3.847-5.074 6.86-8.405 6.86H94.766a164.113 164.113 0 0152.474-91.583l22.742 38.7a8.5 8.5 0 01-1.003 9.977z" />
      <Path d="M256 10.975a245.026 245.026 0 10173.94 418.293A245.026 245.026 0 00256 10.975zm165.472 409.79a234.694 234.694 0 01-330.944 0A233.026 233.026 0 01256 22.975a232.826 232.826 0 01165.472 397.79z" />
      <Path d="M84.27 189.911a185.517 185.517 0 0173.873-89.711 6 6 0 10-6.393-10.155A197.6 197.6 0 0073.071 185.6a6 6 0 1011.2 4.313zM174.462 90.387a5.977 5.977 0 002.574-.584c2.3-1.095 4.655-2.155 6.991-3.149a6 6 0 00-4.7-11.042c-2.49 1.059-5 2.188-7.45 3.356a6 6 0 002.583 11.419z" />
      <Path d="M256 39.1a216.9 216.9 0 10153.967 370.276A216.9 216.9 0 00256 39.1zm0 421.79C142.547 460.9 50.245 368.979 50.245 256S142.547 51.105 256 51.105 461.755 143.021 461.755 256 369.453 460.9 256 460.9z" />
    </Svg>
  );
}

export default Wheels;
