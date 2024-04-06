import { r as reactExports } from './__federation_shared_react-BIqEe97N.js';
import { importShared } from './__federation_fn_import-D9EYfZVG.js';
import { c as commonjsGlobal, a as getDefaultExportFromCjs } from './_commonjsHelpers-Dr0z5XX9.js';
import { c as commonjsRequire } from './_commonjs-dynamic-modules-COweQ1RR.js';
import { _ as _createClass$1, a as _classCallCheck$1 } from './createClass-DckaxmvH.js';

function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    } }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

const React$3 = await importShared('react');

const SvgLogo = (props) => /* @__PURE__ */ React$3.createElement("svg", { width: 101, height: 40, viewBox: "0 0 101 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React$3.createElement("path", { d: "M0 6.0875C0 2.72547 2.72547 0 6.0875 0H33.9125C37.2745 0 40 2.72547 40 6.0875V33.9125C40 37.2745 37.2745 40 33.9125 40H6.0875C2.72547 40 0 37.2745 0 33.9125V6.0875Z", fill: "#FF3000" }), /* @__PURE__ */ React$3.createElement("path", { d: "M30.129 33.125C28.3434 33.125 27.1133 32.1463 27.1133 29.1144V28.4623H29.0973V29.1148C29.0973 30.7267 29.5339 31.1679 30.129 31.1679C30.724 31.1679 31.141 30.7267 31.141 29.9782C31.141 29.0378 31.0021 28.52 29.6131 27.5412C27.9861 26.4092 27.2322 25.2002 27.2322 23.646C27.2322 21.6695 28.3034 20.4799 30.129 20.4799C31.3987 20.4799 33.0854 20.8638 33.0854 24.0872V24.8357H31.1014V24.0872C31.1014 22.8209 30.6848 22.3987 30.129 22.3987C29.5339 22.3987 29.2162 22.8209 29.2162 23.569C29.2162 24.3364 29.3947 24.9696 30.7836 26.006C32.5099 27.2916 33.125 28.3087 33.125 29.9779C33.125 31.6471 32.3311 33.125 30.129 33.125ZM23.363 33.125C21.5774 33.125 20.3473 32.2999 20.3473 29.1144V28.4623H22.3314V29.1148C22.3314 30.7267 22.7679 31.1679 23.363 31.1679C23.9581 31.1679 24.375 30.7267 24.375 29.9782C24.375 29.0378 24.2361 28.52 22.8472 27.5412C21.2201 26.4092 20.4662 25.2002 20.4662 23.646C20.4662 21.6695 21.5375 20.4799 23.363 20.4799C24.6327 20.4799 26.3194 20.8638 26.3194 24.0872V24.8357H24.3354V24.0872C24.3354 22.8209 23.9188 22.3987 23.363 22.3987C22.7679 22.3987 22.4502 22.8209 22.4502 23.569C22.4502 24.3364 22.6287 24.9696 24.0177 26.006C25.744 27.2916 26.359 28.3087 26.359 29.9779C26.359 31.6471 25.5655 33.125 23.363 33.125ZM30.129 19.5201C28.3434 19.5201 27.1133 18.5414 27.1133 15.5096V14.8574H29.0973V15.5099C29.0973 17.1218 29.5339 17.563 30.129 17.563C30.724 17.563 31.141 17.1218 31.141 16.3733C31.141 15.4329 31.0021 14.9151 29.6131 13.9364C27.9861 12.8043 27.2322 11.5953 27.2322 10.0411C27.2322 8.06467 28.3034 6.875 30.129 6.875C31.3987 6.875 33.0854 7.2589 33.0854 10.4823V11.2308H31.1014V10.4823C31.1014 9.21601 30.6848 8.79379 30.129 8.79379C29.5339 8.79379 29.2162 9.21601 29.2162 9.96412C29.2162 10.7316 29.3947 11.3647 30.7836 12.4011C32.5099 13.6868 33.125 14.7038 33.125 16.373C33.125 18.0422 32.3311 19.5201 30.129 19.5201ZM23.363 19.5201C21.5774 19.5201 20.3473 18.695 20.3473 15.5096V14.8574H22.3314V15.5099C22.3314 17.1218 22.7679 17.563 23.363 17.563C23.9581 17.563 24.375 17.1218 24.375 16.3733C24.375 15.4329 24.2361 14.9151 22.8472 13.9364C21.2201 12.8043 20.4662 11.5953 20.4662 10.0411C20.4662 8.06467 21.5375 6.875 23.363 6.875C24.6327 6.875 26.3194 7.2589 26.3194 10.4823V11.2308H24.3354V10.4823C24.3354 9.21601 23.9188 8.79379 23.363 8.79379C22.7679 8.79379 22.4502 9.21601 22.4502 9.96412C22.4502 10.7316 22.6287 11.3647 24.0177 12.4011C25.744 13.6868 26.359 14.7038 26.359 16.373C26.359 18.0422 25.5655 19.5201 23.363 19.5201ZM8.8594 28.4623H9.25635C10.1295 28.4623 10.5657 28.0401 10.5657 26.083V24.97C10.5657 23.0128 10.1291 22.5906 9.25635 22.5906H8.8594V28.4623ZM8.8594 32.933H6.87537V20.6715H9.25635C11.8358 20.6715 12.5501 22.0914 12.5501 24.778V26.2746C12.5501 28.9608 11.8358 30.3811 9.25635 30.3811H8.8594V32.933ZM9.25598 12.9386H8.85902V8.98574H9.25598C10.1488 8.98574 10.5653 9.27367 10.5653 10.6166V11.3074C10.5657 12.6507 10.1491 12.9386 9.25598 12.9386ZM12.9267 19.3285L11.3989 14.2243C12.1331 13.6295 12.5497 12.6507 12.5497 11.4421V10.4827C12.5497 8.23764 11.5181 7.06695 9.25598 7.06695H6.875V19.3285H8.85902V14.8574H9.11712C9.21636 14.8574 9.35522 14.8574 9.57332 14.8381L10.7638 19.3282L12.9267 19.3285ZM15.1884 28.4623L16.2004 22.5906H16.3593L17.3709 28.4623H15.1884ZM18.1252 32.933H20.1092L17.9067 20.6715H14.653L12.4309 32.933H14.4149L14.8711 30.3811H17.6886L18.1252 32.933ZM16.4782 19.5201C14.0376 19.5201 13.5814 17.7356 13.5814 15.5672V7.06695H15.645V15.7402C15.645 17.2561 15.9227 17.6013 16.4782 17.6013C17.0336 17.6013 17.3113 17.2561 17.3113 15.7402V7.06695H19.3749V15.5676C19.3749 17.7356 18.9187 19.5201 16.4782 19.5201Z", fill: "white" }), /* @__PURE__ */ React$3.createElement("path", { d: "M48 27.8209V12.1826H54.8807V14.4177H50.4571V18.4168H51.8863C53.122 18.4168 54.0497 18.7445 54.6676 19.4C55.2854 20.0555 55.5953 21.0154 55.5953 22.2816V23.9579C55.5953 25.224 55.2854 26.184 54.6676 26.8394C54.0497 27.4949 53.122 27.8226 51.8863 27.8226H48V27.8209ZM51.8881 25.5858C52.2749 25.5858 52.5811 25.4819 52.8032 25.2724C53.0271 25.0646 53.1381 24.6778 53.1381 24.1101V22.1222C53.1381 21.5562 53.0271 21.1694 52.8032 20.9599C52.5794 20.7521 52.2749 20.6465 51.8881 20.6465H50.4589V25.584H51.8881V25.5858Z", fill: "white" }), /* @__PURE__ */ React$3.createElement("path", { d: "M59.7752 27.8209H57.25V12.1826H59.4403V22.0792L60.3339 18.6388L62.3451 12.1826H65.0476V27.8209H62.8359V16.8067L61.8312 20.65L59.7752 27.8209Z", fill: "white" }), /* @__PURE__ */ React$3.createElement("path", { d: "M71.5254 16.0242C71.5254 15.3239 71.409 14.8511 71.1798 14.6058C70.9487 14.3604 70.6389 14.2368 70.2521 14.2368C69.8652 14.2368 69.5518 14.3533 69.3136 14.5825C69.0754 14.8135 68.9555 15.2111 68.9555 15.777V17.0504H66.6989V15.8881C66.6989 14.6219 66.9998 13.6584 67.6033 12.994C68.2069 12.3313 69.1113 12 70.3183 12C71.5254 12 72.437 12.3385 73.0549 13.0172C73.6727 13.696 73.9825 14.6667 73.9825 15.9328V16.3358C73.9825 18.0031 73.4095 19.0759 72.2615 19.5523C72.8865 19.8209 73.3307 20.2346 73.5903 20.7916C73.85 21.3503 73.9808 22.0309 73.9808 22.835V24.0636C73.9808 25.3297 73.6709 26.3022 73.0531 26.9792C72.4352 27.6579 71.5218 27.9964 70.3166 27.9964C69.1095 27.9964 68.1979 27.6579 67.58 26.9792C66.9622 26.3022 66.6523 25.3297 66.6523 24.0636V22.3425H68.9752V24.2194C68.9752 24.7853 69.0898 25.1847 69.3208 25.4139C69.5518 25.645 69.8599 25.7596 70.2485 25.7596C70.6353 25.7596 70.9452 25.6396 71.1762 25.4014C71.4072 25.1632 71.5218 24.694 71.5218 23.9937V22.7652C71.5218 22.0363 71.3947 21.5223 71.1422 21.2232C70.8878 20.9259 70.4795 20.7755 69.9136 20.7755H69.3101V18.5404H70.0479C70.51 18.5404 70.8699 18.4222 71.1314 18.1822C71.3911 17.944 71.5218 17.5124 71.5218 16.8856V16.0242H71.5254Z", fill: "white" }), /* @__PURE__ */ React$3.createElement("path", { d: "M78.0943 27.8209H75.6372V12.1826H78.0943V18.8842H80.8864V12.1826H83.3883V27.8209H80.8864V21.1193H78.0943V27.8209Z", fill: "white" }), /* @__PURE__ */ React$3.createElement("path", { d: "M87.6329 18.7712H91.007V21.0063H87.6329V25.5856H91.8774V27.8189H85.1758V12.1807H91.8774V14.4157H87.6329V18.7712Z", fill: "white" }), /* @__PURE__ */ React$3.createElement("path", { d: "M100.524 21.9899V24.0673C100.524 25.3335 100.214 26.306 99.596 26.9829C98.9782 27.6617 98.0648 28.0002 96.8595 28.0002C95.6542 28.0002 94.7409 27.6617 94.123 26.9829C93.5051 26.306 93.1953 25.3335 93.1953 24.0673V15.9348C93.1953 14.6686 93.5051 13.6979 94.123 13.0192C94.7409 12.3422 95.6542 12.002 96.8595 12.002C98.0648 12.002 98.9782 12.3404 99.596 13.0192C100.214 13.6979 100.524 14.6686 100.524 15.9348V17.4535H98.2009V15.7772C98.2009 15.2113 98.0845 14.8137 97.8553 14.5827C97.6242 14.3516 97.3144 14.237 96.9276 14.237C96.5407 14.237 96.2309 14.3534 95.9999 14.5827C95.7688 14.8137 95.6542 15.2113 95.6542 15.7772V24.2213C95.6542 24.7873 95.7688 25.1813 95.9999 25.4051C96.2309 25.629 96.5389 25.74 96.9276 25.74C97.3144 25.74 97.6242 25.629 97.8553 25.4051C98.0863 25.1813 98.2009 24.7873 98.2009 24.2213V21.9881H100.524V21.9899Z", fill: "white" }));

const React$2 = await importShared('react');

const SvgHeader = (props) => /* @__PURE__ */ React$2.createElement("svg", { width: 176, height: 48, viewBox: "0 0 176 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React$2.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21 16C17.134 16 14 19.134 14 23C14 26.866 17.134 30 21 30C22.8859 30 24.5977 29.2542 25.8564 28.0414C25.8827 28.0072 25.9115 27.9742 25.9429 27.9429C25.9742 27.9115 26.0072 27.8827 26.0414 27.8564C27.2542 26.5977 28 24.8859 28 23C28 19.134 24.866 16 21 16ZM28.0319 28.6177C29.2635 27.078 30 25.125 30 23C30 18.0294 25.9706 14 21 14C16.0294 14 12 18.0294 12 23C12 27.9706 16.0294 32 21 32C23.125 32 25.078 31.2635 26.6177 30.0319L30.5955 34.0098L32.0098 32.5955L28.0319 28.6177Z", fill: "white" }), /* @__PURE__ */ React$2.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.0505 15.0503C62.3632 13.7375 64.1437 13 66.0002 13C67.8567 13 69.6372 13.7375 70.95 15.0503C72.2627 16.363 73.0002 18.1435 73.0002 20C73.0002 22.9127 73.7322 24.8439 74.4996 26.0771L74.5114 26.096C74.8687 26.6703 75.1512 27.1243 75.3416 27.4547C75.4371 27.6202 75.524 27.7797 75.5884 27.9215C75.6205 27.9922 75.6564 28.079 75.6845 28.1733C75.7078 28.2515 75.7522 28.4187 75.7356 28.6223C75.7244 28.7591 75.6965 28.9928 75.5623 29.2343C75.4282 29.4758 75.2445 29.623 75.1342 29.7047C74.8839 29.8904 74.5965 29.9329 74.5006 29.947L74.4961 29.9477C74.3487 29.9695 74.1815 29.9804 74.0127 29.9869C73.6774 30 73.2133 30 72.6361 30H72.6114H59.3891H59.3644C58.7872 30 58.323 30 57.9878 29.9869C57.819 29.9804 57.6517 29.9695 57.5043 29.9477L57.4999 29.947C57.4039 29.9329 57.1165 29.8904 56.8662 29.7047C56.756 29.623 56.5723 29.4758 56.4381 29.2343C56.304 28.9928 56.2761 28.7591 56.2649 28.6223C56.2482 28.4187 56.2926 28.2515 56.3159 28.1733C56.344 28.079 56.38 27.9922 56.4121 27.9215C56.4765 27.7797 56.5634 27.6202 56.6588 27.4547C56.8492 27.1243 57.1317 26.6703 57.489 26.0961L57.5008 26.0771C58.2682 24.8439 59.0002 22.9127 59.0002 20C59.0002 18.1435 59.7377 16.363 61.0505 15.0503ZM66.0002 15C64.6741 15 63.4024 15.5268 62.4647 16.4645C61.527 17.4021 61.0002 18.6739 61.0002 20C61.0002 23.2677 60.1732 25.5681 59.1989 27.1337C58.9861 27.4758 58.8084 27.7614 58.6633 27.9988C58.8699 28 59.1102 28 59.3891 28H72.6114C72.8902 28 73.1306 28 73.3371 27.9988C73.192 27.7614 73.0144 27.4758 72.8015 27.1337C71.8273 25.5681 71.0002 23.2677 71.0002 20C71.0002 18.6739 70.4734 17.4021 69.5358 16.4645C68.5981 15.5268 67.3263 15 66.0002 15ZM63.0002 33C63.0002 32.4477 63.4479 32 64.0002 32H68.0002C68.5525 32 69.0002 32.4477 69.0002 33C69.0002 33.5523 68.5525 34 68.0002 34H64.0002C63.4479 34 63.0002 33.5523 63.0002 33Z", fill: "white" }), /* @__PURE__ */ React$2.createElement("rect", { x: 70, y: 4, width: 16, height: 16, rx: 8, fill: "#FFCF08" }), /* @__PURE__ */ React$2.createElement("path", { d: "M79.0278 16H77.8378V10.48H76.2178V9.66C77.2678 9.63 77.7778 9.54 78.1478 8.75H79.0278V16Z", fill: "#1D1D1D" }), /* @__PURE__ */ React$2.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M110 16C108.067 16 106.5 17.567 106.5 19.5C106.5 21.433 108.067 23 110 23C111.933 23 113.5 21.433 113.5 19.5C113.5 17.567 111.933 16 110 16ZM104.5 19.5C104.5 16.4624 106.962 14 110 14C113.038 14 115.5 16.4624 115.5 19.5C115.5 22.5376 113.038 25 110 25C106.962 25 104.5 22.5376 104.5 19.5ZM110 29C106.809 29 103.893 30.389 101.728 32.686C101.349 33.0878 100.716 33.1065 100.314 32.7276C99.9122 32.3487 99.8935 31.7158 100.272 31.314C102.778 28.6562 106.205 27 110 27C113.795 27 117.222 28.6562 119.728 31.314C120.106 31.7158 120.088 32.3487 119.686 32.7276C119.284 33.1065 118.651 33.0878 118.272 32.686C116.107 30.389 113.191 29 110 29Z", fill: "white" }), /* @__PURE__ */ React$2.createElement("rect", { x: 114, y: 4, width: 16, height: 16, rx: 8, fill: "#FFCF08" }), /* @__PURE__ */ React$2.createElement("path", { d: "M123.028 16H121.838V10.48H120.218V9.66C121.268 9.63 121.778 9.54 122.148 8.75H123.028V16Z", fill: "#1D1D1D" }), /* @__PURE__ */ React$2.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M146 16.25C145.586 16.25 145.25 16.5858 145.25 17C145.25 17.4142 145.586 17.75 146 17.75L162 17.75C162.414 17.75 162.75 17.4142 162.75 17C162.75 16.5858 162.414 16.25 162 16.25L146 16.25ZM145.25 24C145.25 23.5858 145.586 23.25 146 23.25L162 23.25C162.414 23.25 162.75 23.5858 162.75 24C162.75 24.4142 162.414 24.75 162 24.75L146 24.75C145.586 24.75 145.25 24.4142 145.25 24ZM145.25 31C145.25 30.5858 145.586 30.25 146 30.25L162 30.25C162.414 30.25 162.75 30.5858 162.75 31C162.75 31.4142 162.414 31.75 162 31.75L146 31.75C145.586 31.75 145.25 31.4142 145.25 31Z", fill: "white" }));

const {Flex: Flex$5,Layout: Layout$2} = await importShared('antd');
const {Link} = await importShared('react-router-dom');
const Header = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout$2.Header, { className: "ui-header", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex$5, { align: "center", justify: "space-between", className: "h-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "header-logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SvgLogo, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SvgHeader, {})
  ] }) });
};

const {Flex: Flex$4,Layout: Layout$1} = await importShared('antd');
const Footer = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout$1.Footer, { className: "ui-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex$4, { align: "center", justify: "space-between", className: "h-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2024, Крутые Бобры" })
  ] }) });
};

const {Flex: Flex$3} = await importShared('antd');
const MockHeader = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex$3, { vertical: true, className: "mock-header", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Главная" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "●" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Проекты" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "●" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Moscow Travel Hub" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Фотографии" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "paragraph", children: "Наш портал предлагает огромный выбор фотографий высокого качества, подходящих для любых проектов. Найдите идеальное изображение для вашего сайта или рекламной кампании с нами." })
  ] });
};

const React$1 = await importShared('react');

const SvgSearch = (props) => /* @__PURE__ */ React$1.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React$1.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.72883 1.99414C4.83779 1.99414 2.49414 4.33779 2.49414 7.22883C2.49414 10.1199 4.83779 12.4635 7.72883 12.4635C9.13363 12.4635 10.4092 11.9102 11.3494 11.0095C11.3727 10.9803 11.3979 10.952 11.425 10.925C11.452 10.8979 11.4803 10.8727 11.5095 10.8494C12.4102 9.90919 12.9635 8.63363 12.9635 7.22883C12.9635 4.33779 10.6199 1.99414 7.72883 1.99414ZM13.5028 11.5886C14.4197 10.3762 14.9635 8.86604 14.9635 7.22883C14.9635 3.23322 11.7244 -0.00585938 7.72883 -0.00585938C3.73322 -0.00585938 0.494141 3.23322 0.494141 7.22883C0.494141 11.2244 3.73322 14.4635 7.72883 14.4635C9.36604 14.4635 10.8762 13.9197 12.0886 13.0028L15.051 15.9652L16.4652 14.551L13.5028 11.5886Z", fill: "currentColor" }));

const React = await importShared('react');

const SvgCamera = (props) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { d: "M0.9375 0.625C0.419922 0.625 0 1.04492 0 1.5625V8.4375C0 8.95508 0.419922 9.375 0.9375 9.375H9.0625C9.58008 9.375 10 8.95508 10 8.4375V1.5625C10 1.04492 9.58008 0.625 9.0625 0.625H0.9375ZM0.9375 1.25H3.00781C3.07227 1.25 3.125 1.30273 3.125 1.36719V1.75781C3.125 1.82227 3.07227 1.875 3.00781 1.875H0.742188C0.677734 1.875 0.625 1.82227 0.625 1.75781V1.5625C0.625 1.39062 0.765625 1.25 0.9375 1.25ZM9.25781 3.125H0.742188C0.677734 3.125 0.625 3.07227 0.625 3.00781V2.30469C0.625 2.24023 0.677734 2.1875 0.742188 2.1875H3.4375L4.02734 1.30273C4.04883 1.26953 4.08594 1.25 4.125 1.25H9.0625C9.23438 1.25 9.375 1.39062 9.375 1.5625V3.00781C9.375 3.07227 9.32227 3.125 9.25781 3.125ZM5 8.28125C3.70703 8.28125 2.65625 7.23047 2.65625 5.9375C2.65625 4.64453 3.70703 3.59375 5 3.59375C6.29297 3.59375 7.34375 4.64453 7.34375 5.9375C7.34375 7.23047 6.29297 8.28125 5 8.28125ZM5 4.21875C4.05273 4.21875 3.28125 4.99023 3.28125 5.9375C3.28125 6.88477 4.05273 7.65625 5 7.65625C5.94727 7.65625 6.71875 6.88477 6.71875 5.9375C6.71875 4.99023 5.94727 4.21875 5 4.21875ZM4.0625 6.25C3.89062 6.25 3.75 6.10938 3.75 5.9375C3.75 5.24805 4.31055 4.6875 5 4.6875C5.17188 4.6875 5.3125 4.82812 5.3125 5C5.3125 5.17188 5.17188 5.3125 5 5.3125C4.65625 5.3125 4.375 5.59375 4.375 5.9375C4.375 6.10938 4.23438 6.25 4.0625 6.25Z", fill: "currentColor" }));

const {Flex: Flex$2,Segmented} = await importShared('antd');
const {useNavigate} = await importShared('react-router-dom');

const SearchToggles = () => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Segmented,
    {
      onChange: (value) => navigate(value),
      className: "search-toggles",
      block: true,
      options: [
        {
          label: /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex$2, { align: "center", justify: "center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SvgSearch, {}),
            "Простой поиск"
          ] }),
          value: "/"
        },
        {
          label: /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex$2, { align: "center", justify: "center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SvgCamera, {}),
            "Поиск по фото"
          ] }),
          value: "/photo-search"
        }
      ]
    }
  );
};

const {Outlet} = await importShared('react-router-dom');
const {Layout} = await importShared('antd');
const SearchLayout = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MockHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout.Content, { className: "search-layout-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SearchToggles, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};

const DetailPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "ddd" });
};

const {Input:InputAntD} = await importShared('antd');
const Input = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputAntD, { ...props, className: "ui-input" });
};

const {Flex: Flex$1} = await importShared('antd');
const SimpleSearch = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Flex$1, { vertical: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { prefix: /* @__PURE__ */ jsxRuntimeExports.jsx(SvgSearch, {}), placeholder: "Введите запрос, название или #тег" }) });
};

const {Flex} = await importShared('antd');
const SearchPhoto = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { vertical: true, children: "photo search" });
};

const {BrowserRouter,Route,Routes} = await importShared('react-router-dom');
const AppRouter = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Route, { element: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchLayout, {}), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleSearch, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/photo-search", element: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchPhoto, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/:id", element: /* @__PURE__ */ jsxRuntimeExports.jsx(DetailPage, {}) })
  ] }) });
};

function _typeof$2(o) { "@babel/helpers - typeof"; return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$2(o); }
function hasXMLHttpRequest() {
  return typeof XMLHttpRequest === 'function' || (typeof XMLHttpRequest === "undefined" ? "undefined" : _typeof$2(XMLHttpRequest)) === 'object';
}
function isPromise(maybePromise) {
  return !!maybePromise && typeof maybePromise.then === 'function';
}
function makePromise(maybePromise) {
  if (isPromise(maybePromise)) {
    return maybePromise;
  }
  return Promise.resolve(maybePromise);
}

var getFetch$1 = {exports: {}};

var browserPonyfill = {exports: {}};

var hasRequiredBrowserPonyfill;

function requireBrowserPonyfill () {
	if (hasRequiredBrowserPonyfill) return browserPonyfill.exports;
	hasRequiredBrowserPonyfill = 1;
	(function (module, exports) {
		// Save global object in a variable
		var __global__ =
		(typeof globalThis !== 'undefined' && globalThis) ||
		(typeof self !== 'undefined' && self) ||
		(typeof commonjsGlobal !== 'undefined' && commonjsGlobal);
		// Create an object that extends from __global__ without the fetch function
		var __globalThis__ = (function () {
		function F() {
		this.fetch = false;
		this.DOMException = __global__.DOMException;
		}
		F.prototype = __global__; // Needed for feature detection on whatwg-fetch's code
		return new F();
		})();
		// Wraps whatwg-fetch with a function scope to hijack the global object
		// "globalThis" that's going to be patched
		(function(globalThis) {

		((function (exports) {

		  var global =
		    (typeof globalThis !== 'undefined' && globalThis) ||
		    (typeof self !== 'undefined' && self) ||
		    (typeof global !== 'undefined' && global);

		  var support = {
		    searchParams: 'URLSearchParams' in global,
		    iterable: 'Symbol' in global && 'iterator' in Symbol,
		    blob:
		      'FileReader' in global &&
		      'Blob' in global &&
		      (function() {
		        try {
		          new Blob();
		          return true
		        } catch (e) {
		          return false
		        }
		      })(),
		    formData: 'FormData' in global,
		    arrayBuffer: 'ArrayBuffer' in global
		  };

		  function isDataView(obj) {
		    return obj && DataView.prototype.isPrototypeOf(obj)
		  }

		  if (support.arrayBuffer) {
		    var viewClasses = [
		      '[object Int8Array]',
		      '[object Uint8Array]',
		      '[object Uint8ClampedArray]',
		      '[object Int16Array]',
		      '[object Uint16Array]',
		      '[object Int32Array]',
		      '[object Uint32Array]',
		      '[object Float32Array]',
		      '[object Float64Array]'
		    ];

		    var isArrayBufferView =
		      ArrayBuffer.isView ||
		      function(obj) {
		        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
		      };
		  }

		  function normalizeName(name) {
		    if (typeof name !== 'string') {
		      name = String(name);
		    }
		    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
		      throw new TypeError('Invalid character in header field name: "' + name + '"')
		    }
		    return name.toLowerCase()
		  }

		  function normalizeValue(value) {
		    if (typeof value !== 'string') {
		      value = String(value);
		    }
		    return value
		  }

		  // Build a destructive iterator for the value list
		  function iteratorFor(items) {
		    var iterator = {
		      next: function() {
		        var value = items.shift();
		        return {done: value === undefined, value: value}
		      }
		    };

		    if (support.iterable) {
		      iterator[Symbol.iterator] = function() {
		        return iterator
		      };
		    }

		    return iterator
		  }

		  function Headers(headers) {
		    this.map = {};

		    if (headers instanceof Headers) {
		      headers.forEach(function(value, name) {
		        this.append(name, value);
		      }, this);
		    } else if (Array.isArray(headers)) {
		      headers.forEach(function(header) {
		        this.append(header[0], header[1]);
		      }, this);
		    } else if (headers) {
		      Object.getOwnPropertyNames(headers).forEach(function(name) {
		        this.append(name, headers[name]);
		      }, this);
		    }
		  }

		  Headers.prototype.append = function(name, value) {
		    name = normalizeName(name);
		    value = normalizeValue(value);
		    var oldValue = this.map[name];
		    this.map[name] = oldValue ? oldValue + ', ' + value : value;
		  };

		  Headers.prototype['delete'] = function(name) {
		    delete this.map[normalizeName(name)];
		  };

		  Headers.prototype.get = function(name) {
		    name = normalizeName(name);
		    return this.has(name) ? this.map[name] : null
		  };

		  Headers.prototype.has = function(name) {
		    return this.map.hasOwnProperty(normalizeName(name))
		  };

		  Headers.prototype.set = function(name, value) {
		    this.map[normalizeName(name)] = normalizeValue(value);
		  };

		  Headers.prototype.forEach = function(callback, thisArg) {
		    for (var name in this.map) {
		      if (this.map.hasOwnProperty(name)) {
		        callback.call(thisArg, this.map[name], name, this);
		      }
		    }
		  };

		  Headers.prototype.keys = function() {
		    var items = [];
		    this.forEach(function(value, name) {
		      items.push(name);
		    });
		    return iteratorFor(items)
		  };

		  Headers.prototype.values = function() {
		    var items = [];
		    this.forEach(function(value) {
		      items.push(value);
		    });
		    return iteratorFor(items)
		  };

		  Headers.prototype.entries = function() {
		    var items = [];
		    this.forEach(function(value, name) {
		      items.push([name, value]);
		    });
		    return iteratorFor(items)
		  };

		  if (support.iterable) {
		    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
		  }

		  function consumed(body) {
		    if (body.bodyUsed) {
		      return Promise.reject(new TypeError('Already read'))
		    }
		    body.bodyUsed = true;
		  }

		  function fileReaderReady(reader) {
		    return new Promise(function(resolve, reject) {
		      reader.onload = function() {
		        resolve(reader.result);
		      };
		      reader.onerror = function() {
		        reject(reader.error);
		      };
		    })
		  }

		  function readBlobAsArrayBuffer(blob) {
		    var reader = new FileReader();
		    var promise = fileReaderReady(reader);
		    reader.readAsArrayBuffer(blob);
		    return promise
		  }

		  function readBlobAsText(blob) {
		    var reader = new FileReader();
		    var promise = fileReaderReady(reader);
		    reader.readAsText(blob);
		    return promise
		  }

		  function readArrayBufferAsText(buf) {
		    var view = new Uint8Array(buf);
		    var chars = new Array(view.length);

		    for (var i = 0; i < view.length; i++) {
		      chars[i] = String.fromCharCode(view[i]);
		    }
		    return chars.join('')
		  }

		  function bufferClone(buf) {
		    if (buf.slice) {
		      return buf.slice(0)
		    } else {
		      var view = new Uint8Array(buf.byteLength);
		      view.set(new Uint8Array(buf));
		      return view.buffer
		    }
		  }

		  function Body() {
		    this.bodyUsed = false;

		    this._initBody = function(body) {
		      /*
		        fetch-mock wraps the Response object in an ES6 Proxy to
		        provide useful test harness features such as flush. However, on
		        ES5 browsers without fetch or Proxy support pollyfills must be used;
		        the proxy-pollyfill is unable to proxy an attribute unless it exists
		        on the object before the Proxy is created. This change ensures
		        Response.bodyUsed exists on the instance, while maintaining the
		        semantic of setting Request.bodyUsed in the constructor before
		        _initBody is called.
		      */
		      this.bodyUsed = this.bodyUsed;
		      this._bodyInit = body;
		      if (!body) {
		        this._bodyText = '';
		      } else if (typeof body === 'string') {
		        this._bodyText = body;
		      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
		        this._bodyBlob = body;
		      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
		        this._bodyFormData = body;
		      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
		        this._bodyText = body.toString();
		      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
		        this._bodyArrayBuffer = bufferClone(body.buffer);
		        // IE 10-11 can't handle a DataView body.
		        this._bodyInit = new Blob([this._bodyArrayBuffer]);
		      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
		        this._bodyArrayBuffer = bufferClone(body);
		      } else {
		        this._bodyText = body = Object.prototype.toString.call(body);
		      }

		      if (!this.headers.get('content-type')) {
		        if (typeof body === 'string') {
		          this.headers.set('content-type', 'text/plain;charset=UTF-8');
		        } else if (this._bodyBlob && this._bodyBlob.type) {
		          this.headers.set('content-type', this._bodyBlob.type);
		        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
		          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
		        }
		      }
		    };

		    if (support.blob) {
		      this.blob = function() {
		        var rejected = consumed(this);
		        if (rejected) {
		          return rejected
		        }

		        if (this._bodyBlob) {
		          return Promise.resolve(this._bodyBlob)
		        } else if (this._bodyArrayBuffer) {
		          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
		        } else if (this._bodyFormData) {
		          throw new Error('could not read FormData body as blob')
		        } else {
		          return Promise.resolve(new Blob([this._bodyText]))
		        }
		      };

		      this.arrayBuffer = function() {
		        if (this._bodyArrayBuffer) {
		          var isConsumed = consumed(this);
		          if (isConsumed) {
		            return isConsumed
		          }
		          if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
		            return Promise.resolve(
		              this._bodyArrayBuffer.buffer.slice(
		                this._bodyArrayBuffer.byteOffset,
		                this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
		              )
		            )
		          } else {
		            return Promise.resolve(this._bodyArrayBuffer)
		          }
		        } else {
		          return this.blob().then(readBlobAsArrayBuffer)
		        }
		      };
		    }

		    this.text = function() {
		      var rejected = consumed(this);
		      if (rejected) {
		        return rejected
		      }

		      if (this._bodyBlob) {
		        return readBlobAsText(this._bodyBlob)
		      } else if (this._bodyArrayBuffer) {
		        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
		      } else if (this._bodyFormData) {
		        throw new Error('could not read FormData body as text')
		      } else {
		        return Promise.resolve(this._bodyText)
		      }
		    };

		    if (support.formData) {
		      this.formData = function() {
		        return this.text().then(decode)
		      };
		    }

		    this.json = function() {
		      return this.text().then(JSON.parse)
		    };

		    return this
		  }

		  // HTTP methods whose capitalization should be normalized
		  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

		  function normalizeMethod(method) {
		    var upcased = method.toUpperCase();
		    return methods.indexOf(upcased) > -1 ? upcased : method
		  }

		  function Request(input, options) {
		    if (!(this instanceof Request)) {
		      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
		    }

		    options = options || {};
		    var body = options.body;

		    if (input instanceof Request) {
		      if (input.bodyUsed) {
		        throw new TypeError('Already read')
		      }
		      this.url = input.url;
		      this.credentials = input.credentials;
		      if (!options.headers) {
		        this.headers = new Headers(input.headers);
		      }
		      this.method = input.method;
		      this.mode = input.mode;
		      this.signal = input.signal;
		      if (!body && input._bodyInit != null) {
		        body = input._bodyInit;
		        input.bodyUsed = true;
		      }
		    } else {
		      this.url = String(input);
		    }

		    this.credentials = options.credentials || this.credentials || 'same-origin';
		    if (options.headers || !this.headers) {
		      this.headers = new Headers(options.headers);
		    }
		    this.method = normalizeMethod(options.method || this.method || 'GET');
		    this.mode = options.mode || this.mode || null;
		    this.signal = options.signal || this.signal;
		    this.referrer = null;

		    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
		      throw new TypeError('Body not allowed for GET or HEAD requests')
		    }
		    this._initBody(body);

		    if (this.method === 'GET' || this.method === 'HEAD') {
		      if (options.cache === 'no-store' || options.cache === 'no-cache') {
		        // Search for a '_' parameter in the query string
		        var reParamSearch = /([?&])_=[^&]*/;
		        if (reParamSearch.test(this.url)) {
		          // If it already exists then set the value with the current time
		          this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
		        } else {
		          // Otherwise add a new '_' parameter to the end with the current time
		          var reQueryString = /\?/;
		          this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
		        }
		      }
		    }
		  }

		  Request.prototype.clone = function() {
		    return new Request(this, {body: this._bodyInit})
		  };

		  function decode(body) {
		    var form = new FormData();
		    body
		      .trim()
		      .split('&')
		      .forEach(function(bytes) {
		        if (bytes) {
		          var split = bytes.split('=');
		          var name = split.shift().replace(/\+/g, ' ');
		          var value = split.join('=').replace(/\+/g, ' ');
		          form.append(decodeURIComponent(name), decodeURIComponent(value));
		        }
		      });
		    return form
		  }

		  function parseHeaders(rawHeaders) {
		    var headers = new Headers();
		    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
		    // https://tools.ietf.org/html/rfc7230#section-3.2
		    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
		    // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
		    // https://github.com/github/fetch/issues/748
		    // https://github.com/zloirock/core-js/issues/751
		    preProcessedHeaders
		      .split('\r')
		      .map(function(header) {
		        return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
		      })
		      .forEach(function(line) {
		        var parts = line.split(':');
		        var key = parts.shift().trim();
		        if (key) {
		          var value = parts.join(':').trim();
		          headers.append(key, value);
		        }
		      });
		    return headers
		  }

		  Body.call(Request.prototype);

		  function Response(bodyInit, options) {
		    if (!(this instanceof Response)) {
		      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
		    }
		    if (!options) {
		      options = {};
		    }

		    this.type = 'default';
		    this.status = options.status === undefined ? 200 : options.status;
		    this.ok = this.status >= 200 && this.status < 300;
		    this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
		    this.headers = new Headers(options.headers);
		    this.url = options.url || '';
		    this._initBody(bodyInit);
		  }

		  Body.call(Response.prototype);

		  Response.prototype.clone = function() {
		    return new Response(this._bodyInit, {
		      status: this.status,
		      statusText: this.statusText,
		      headers: new Headers(this.headers),
		      url: this.url
		    })
		  };

		  Response.error = function() {
		    var response = new Response(null, {status: 0, statusText: ''});
		    response.type = 'error';
		    return response
		  };

		  var redirectStatuses = [301, 302, 303, 307, 308];

		  Response.redirect = function(url, status) {
		    if (redirectStatuses.indexOf(status) === -1) {
		      throw new RangeError('Invalid status code')
		    }

		    return new Response(null, {status: status, headers: {location: url}})
		  };

		  exports.DOMException = global.DOMException;
		  try {
		    new exports.DOMException();
		  } catch (err) {
		    exports.DOMException = function(message, name) {
		      this.message = message;
		      this.name = name;
		      var error = Error(message);
		      this.stack = error.stack;
		    };
		    exports.DOMException.prototype = Object.create(Error.prototype);
		    exports.DOMException.prototype.constructor = exports.DOMException;
		  }

		  function fetch(input, init) {
		    return new Promise(function(resolve, reject) {
		      var request = new Request(input, init);

		      if (request.signal && request.signal.aborted) {
		        return reject(new exports.DOMException('Aborted', 'AbortError'))
		      }

		      var xhr = new XMLHttpRequest();

		      function abortXhr() {
		        xhr.abort();
		      }

		      xhr.onload = function() {
		        var options = {
		          status: xhr.status,
		          statusText: xhr.statusText,
		          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
		        };
		        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
		        var body = 'response' in xhr ? xhr.response : xhr.responseText;
		        setTimeout(function() {
		          resolve(new Response(body, options));
		        }, 0);
		      };

		      xhr.onerror = function() {
		        setTimeout(function() {
		          reject(new TypeError('Network request failed'));
		        }, 0);
		      };

		      xhr.ontimeout = function() {
		        setTimeout(function() {
		          reject(new TypeError('Network request failed'));
		        }, 0);
		      };

		      xhr.onabort = function() {
		        setTimeout(function() {
		          reject(new exports.DOMException('Aborted', 'AbortError'));
		        }, 0);
		      };

		      function fixUrl(url) {
		        try {
		          return url === '' && global.location.href ? global.location.href : url
		        } catch (e) {
		          return url
		        }
		      }

		      xhr.open(request.method, fixUrl(request.url), true);

		      if (request.credentials === 'include') {
		        xhr.withCredentials = true;
		      } else if (request.credentials === 'omit') {
		        xhr.withCredentials = false;
		      }

		      if ('responseType' in xhr) {
		        if (support.blob) {
		          xhr.responseType = 'blob';
		        } else if (
		          support.arrayBuffer &&
		          request.headers.get('Content-Type') &&
		          request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
		        ) {
		          xhr.responseType = 'arraybuffer';
		        }
		      }

		      if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
		        Object.getOwnPropertyNames(init.headers).forEach(function(name) {
		          xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
		        });
		      } else {
		        request.headers.forEach(function(value, name) {
		          xhr.setRequestHeader(name, value);
		        });
		      }

		      if (request.signal) {
		        request.signal.addEventListener('abort', abortXhr);

		        xhr.onreadystatechange = function() {
		          // DONE (success or failure)
		          if (xhr.readyState === 4) {
		            request.signal.removeEventListener('abort', abortXhr);
		          }
		        };
		      }

		      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
		    })
		  }

		  fetch.polyfill = true;

		  if (!global.fetch) {
		    global.fetch = fetch;
		    global.Headers = Headers;
		    global.Request = Request;
		    global.Response = Response;
		  }

		  exports.Headers = Headers;
		  exports.Request = Request;
		  exports.Response = Response;
		  exports.fetch = fetch;

		  return exports;

		}))({});
		})(__globalThis__);
		// This is a ponyfill, so...
		__globalThis__.fetch.ponyfill = true;
		delete __globalThis__.fetch.polyfill;
		// Choose between native implementation (__global__) or custom implementation (__globalThis__)
		var ctx = __global__.fetch ? __global__ : __globalThis__;
		exports = ctx.fetch; // To enable: import fetch from 'cross-fetch'
		exports.default = ctx.fetch; // For TypeScript consumers without esModuleInterop.
		exports.fetch = ctx.fetch; // To enable: import {fetch} from 'cross-fetch'
		exports.Headers = ctx.Headers;
		exports.Request = ctx.Request;
		exports.Response = ctx.Response;
		module.exports = exports; 
	} (browserPonyfill, browserPonyfill.exports));
	return browserPonyfill.exports;
}

(function (module, exports) {
	var fetchApi;
	if (typeof fetch === 'function') {
	  if (typeof commonjsGlobal !== 'undefined' && commonjsGlobal.fetch) {
	    fetchApi = commonjsGlobal.fetch;
	  } else if (typeof window !== 'undefined' && window.fetch) {
	    fetchApi = window.fetch;
	  } else {
	    fetchApi = fetch;
	  }
	}

	if (typeof commonjsRequire !== 'undefined' && (typeof window === 'undefined' || typeof window.document === 'undefined')) {
	  var f = fetchApi || requireBrowserPonyfill();
	  if (f.default) f = f.default;
	  exports.default = f;
	  module.exports = exports.default;
	} 
} (getFetch$1, getFetch$1.exports));

var getFetchExports = getFetch$1.exports;
const getFetch = /*@__PURE__*/getDefaultExportFromCjs(getFetchExports);

const fetchNode = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: getFetch
}, [getFetchExports]);

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$1(obj, key, value) { key = _toPropertyKey$1(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$1(i) ? i : String(i); }
function _toPrimitive$1(t, r) { if ("object" != _typeof$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
var fetchApi;
if (typeof fetch === 'function') {
  if (typeof global !== 'undefined' && global.fetch) {
    fetchApi = global.fetch;
  } else if (typeof window !== 'undefined' && window.fetch) {
    fetchApi = window.fetch;
  } else {
    fetchApi = fetch;
  }
}
var XmlHttpRequestApi;
if (hasXMLHttpRequest()) {
  if (typeof global !== 'undefined' && global.XMLHttpRequest) {
    XmlHttpRequestApi = global.XMLHttpRequest;
  } else if (typeof window !== 'undefined' && window.XMLHttpRequest) {
    XmlHttpRequestApi = window.XMLHttpRequest;
  }
}
var ActiveXObjectApi;
if (typeof ActiveXObject === 'function') {
  if (typeof global !== 'undefined' && global.ActiveXObject) {
    ActiveXObjectApi = global.ActiveXObject;
  } else if (typeof window !== 'undefined' && window.ActiveXObject) {
    ActiveXObjectApi = window.ActiveXObject;
  }
}
if (!fetchApi && fetchNode && !XmlHttpRequestApi && !ActiveXObjectApi) fetchApi = getFetch || fetchNode;
if (typeof fetchApi !== 'function') fetchApi = undefined;
var addQueryString = function addQueryString(url, params) {
  if (params && _typeof$1(params) === 'object') {
    var queryString = '';
    for (var paramName in params) {
      queryString += '&' + encodeURIComponent(paramName) + '=' + encodeURIComponent(params[paramName]);
    }
    if (!queryString) return url;
    url = url + (url.indexOf('?') !== -1 ? '&' : '?') + queryString.slice(1);
  }
  return url;
};
var fetchIt = function fetchIt(url, fetchOptions, callback, altFetch) {
  var resolver = function resolver(response) {
    if (!response.ok) return callback(response.statusText || 'Error', {
      status: response.status
    });
    response.text().then(function (data) {
      callback(null, {
        status: response.status,
        data: data
      });
    }).catch(callback);
  };
  if (altFetch) {
    var altResponse = altFetch(url, fetchOptions);
    if (altResponse instanceof Promise) {
      altResponse.then(resolver).catch(callback);
      return;
    }
  }
  if (typeof fetch === 'function') {
    fetch(url, fetchOptions).then(resolver).catch(callback);
  } else {
    fetchApi(url, fetchOptions).then(resolver).catch(callback);
  }
};
var omitFetchOptions = false;
var requestWithFetch = function requestWithFetch(options, url, payload, callback) {
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }
  var headers = _objectSpread$1({}, typeof options.customHeaders === 'function' ? options.customHeaders() : options.customHeaders);
  if (typeof window === 'undefined' && typeof global !== 'undefined' && typeof global.process !== 'undefined' && global.process.versions && global.process.versions.node) {
    headers['User-Agent'] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")");
  }
  if (payload) headers['Content-Type'] = 'application/json';
  var reqOptions = typeof options.requestOptions === 'function' ? options.requestOptions(payload) : options.requestOptions;
  var fetchOptions = _objectSpread$1({
    method: payload ? 'POST' : 'GET',
    body: payload ? options.stringify(payload) : undefined,
    headers: headers
  }, omitFetchOptions ? {} : reqOptions);
  var altFetch = typeof options.alternateFetch === 'function' && options.alternateFetch.length >= 1 ? options.alternateFetch : undefined;
  try {
    fetchIt(url, fetchOptions, callback, altFetch);
  } catch (e) {
    if (!reqOptions || Object.keys(reqOptions).length === 0 || !e.message || e.message.indexOf('not implemented') < 0) {
      return callback(e);
    }
    try {
      Object.keys(reqOptions).forEach(function (opt) {
        delete fetchOptions[opt];
      });
      fetchIt(url, fetchOptions, callback, altFetch);
      omitFetchOptions = true;
    } catch (err) {
      callback(err);
    }
  }
};
var requestWithXmlHttpRequest = function requestWithXmlHttpRequest(options, url, payload, callback) {
  if (payload && _typeof$1(payload) === 'object') {
    payload = addQueryString('', payload).slice(1);
  }
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }
  try {
    var x;
    if (XmlHttpRequestApi) {
      x = new XmlHttpRequestApi();
    } else {
      x = new ActiveXObjectApi('MSXML2.XMLHTTP.3.0');
    }
    x.open(payload ? 'POST' : 'GET', url, 1);
    if (!options.crossDomain) {
      x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    }
    x.withCredentials = !!options.withCredentials;
    if (payload) {
      x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    if (x.overrideMimeType) {
      x.overrideMimeType('application/json');
    }
    var h = options.customHeaders;
    h = typeof h === 'function' ? h() : h;
    if (h) {
      for (var i in h) {
        x.setRequestHeader(i, h[i]);
      }
    }
    x.onreadystatechange = function () {
      x.readyState > 3 && callback(x.status >= 400 ? x.statusText : null, {
        status: x.status,
        data: x.responseText
      });
    };
    x.send(payload);
  } catch (e) {
    console && console.log(e);
  }
};
var request = function request(options, url, payload, callback) {
  if (typeof payload === 'function') {
    callback = payload;
    payload = undefined;
  }
  callback = callback || function () {};
  if (fetchApi && url.indexOf('file:') !== 0) {
    return requestWithFetch(options, url, payload, callback);
  }
  if (hasXMLHttpRequest() || typeof ActiveXObject === 'function') {
    return requestWithXmlHttpRequest(options, url, payload, callback);
  }
  callback(new Error('No fetch and no xhr implementation found!'));
};

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var getDefaults$1 = function getDefaults() {
  return {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: '/locales/add/{{lng}}/{{ns}}',
    parse: function parse(data) {
      return JSON.parse(data);
    },
    stringify: JSON.stringify,
    parsePayload: function parsePayload(namespace, key, fallbackValue) {
      return _defineProperty({}, key, fallbackValue || '');
    },
    parseLoadPayload: function parseLoadPayload(languages, namespaces) {
      return undefined;
    },
    request: request,
    reloadInterval: typeof window !== 'undefined' ? false : 60 * 60 * 1000,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: false,
    withCredentials: false,
    overrideMimeType: false,
    requestOptions: {
      mode: 'cors',
      credentials: 'same-origin',
      cache: 'default'
    }
  };
};
var Backend = function () {
  function Backend(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, Backend);
    this.services = services;
    this.options = options;
    this.allOptions = allOptions;
    this.type = 'backend';
    this.init(services, options, allOptions);
  }
  _createClass(Backend, [{
    key: "init",
    value: function init(services) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.services = services;
      this.options = _objectSpread(_objectSpread(_objectSpread({}, getDefaults$1()), this.options || {}), options);
      this.allOptions = allOptions;
      if (this.services && this.options.reloadInterval) {
        setInterval(function () {
          return _this.reload();
        }, this.options.reloadInterval);
      }
    }
  }, {
    key: "readMulti",
    value: function readMulti(languages, namespaces, callback) {
      this._readAny(languages, languages, namespaces, namespaces, callback);
    }
  }, {
    key: "read",
    value: function read(language, namespace, callback) {
      this._readAny([language], language, [namespace], namespace, callback);
    }
  }, {
    key: "_readAny",
    value: function _readAny(languages, loadUrlLanguages, namespaces, loadUrlNamespaces, callback) {
      var _this2 = this;
      var loadPath = this.options.loadPath;
      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath(languages, namespaces);
      }
      loadPath = makePromise(loadPath);
      loadPath.then(function (resolvedLoadPath) {
        if (!resolvedLoadPath) return callback(null, {});
        var url = _this2.services.interpolator.interpolate(resolvedLoadPath, {
          lng: languages.join('+'),
          ns: namespaces.join('+')
        });
        _this2.loadUrl(url, callback, loadUrlLanguages, loadUrlNamespaces);
      });
    }
  }, {
    key: "loadUrl",
    value: function loadUrl(url, callback, languages, namespaces) {
      var _this3 = this;
      var lng = typeof languages === 'string' ? [languages] : languages;
      var ns = typeof namespaces === 'string' ? [namespaces] : namespaces;
      var payload = this.options.parseLoadPayload(lng, ns);
      this.options.request(this.options, url, payload, function (err, res) {
        if (res && (res.status >= 500 && res.status < 600 || !res.status)) return callback('failed loading ' + url + '; status code: ' + res.status, true);
        if (res && res.status >= 400 && res.status < 500) return callback('failed loading ' + url + '; status code: ' + res.status, false);
        if (!res && err && err.message && err.message.indexOf('Failed to fetch') > -1) return callback('failed loading ' + url + ': ' + err.message, true);
        if (err) return callback(err, false);
        var ret, parseErr;
        try {
          if (typeof res.data === 'string') {
            ret = _this3.options.parse(res.data, languages, namespaces);
          } else {
            ret = res.data;
          }
        } catch (e) {
          parseErr = 'failed parsing ' + url + ' to json';
        }
        if (parseErr) return callback(parseErr, false);
        callback(null, ret);
      });
    }
  }, {
    key: "create",
    value: function create(languages, namespace, key, fallbackValue, callback) {
      var _this4 = this;
      if (!this.options.addPath) return;
      if (typeof languages === 'string') languages = [languages];
      var payload = this.options.parsePayload(namespace, key, fallbackValue);
      var finished = 0;
      var dataArray = [];
      var resArray = [];
      languages.forEach(function (lng) {
        var addPath = _this4.options.addPath;
        if (typeof _this4.options.addPath === 'function') {
          addPath = _this4.options.addPath(lng, namespace);
        }
        var url = _this4.services.interpolator.interpolate(addPath, {
          lng: lng,
          ns: namespace
        });
        _this4.options.request(_this4.options, url, payload, function (data, res) {
          finished += 1;
          dataArray.push(data);
          resArray.push(res);
          if (finished === languages.length) {
            if (typeof callback === 'function') callback(dataArray, resArray);
          }
        });
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this5 = this;
      var _this$services = this.services,
        backendConnector = _this$services.backendConnector,
        languageUtils = _this$services.languageUtils,
        logger = _this$services.logger;
      var currentLanguage = backendConnector.language;
      if (currentLanguage && currentLanguage.toLowerCase() === 'cimode') return;
      var toLoad = [];
      var append = function append(lng) {
        var lngs = languageUtils.toResolveHierarchy(lng);
        lngs.forEach(function (l) {
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };
      append(currentLanguage);
      if (this.allOptions.preload) this.allOptions.preload.forEach(function (l) {
        return append(l);
      });
      toLoad.forEach(function (lng) {
        _this5.allOptions.ns.forEach(function (ns) {
          backendConnector.read(lng, ns, 'read', null, null, function (err, data) {
            if (err) logger.warn("loading namespace ".concat(ns, " for language ").concat(lng, " failed"), err);
            if (!err && data) logger.log("loaded namespace ".concat(ns, " for language ").concat(lng), data);
            backendConnector.loaded("".concat(lng, "|").concat(ns), err, data);
          });
        });
      });
    }
  }]);
  return Backend;
}();
Backend.type = 'backend';

var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

// eslint-disable-next-line no-control-regex
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
var serializeCookie = function serializeCookie(name, val, options) {
  var opt = options || {};
  opt.path = opt.path || '/';
  var value = encodeURIComponent(val);
  var str = "".concat(name, "=").concat(value);
  if (opt.maxAge > 0) {
    var maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += "; Max-Age=".concat(Math.floor(maxAge));
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }
    str += "; Domain=".concat(opt.domain);
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }
    str += "; Path=".concat(opt.path);
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }
    str += "; Expires=".concat(opt.expires.toUTCString());
  }
  if (opt.httpOnly) str += '; HttpOnly';
  if (opt.secure) str += '; Secure';
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }
  return str;
};
var cookie = {
  create: function create(name, value, minutes, domain) {
    var cookieOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      path: '/',
      sameSite: 'strict'
    };
    if (minutes) {
      cookieOptions.expires = new Date();
      cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1000);
    }
    if (domain) cookieOptions.domain = domain;
    document.cookie = serializeCookie(name, encodeURIComponent(value), cookieOptions);
  },
  read: function read(name) {
    var nameEQ = "".concat(name, "=");
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  remove: function remove(name) {
    this.create(name, '', -1);
  }
};
var cookie$1 = {
  name: 'cookie',
  lookup: function lookup(options) {
    var found;
    if (options.lookupCookie && typeof document !== 'undefined') {
      var c = cookie.read(options.lookupCookie);
      if (c) found = c;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupCookie && typeof document !== 'undefined') {
      cookie.create(options.lookupCookie, lng, options.cookieMinutes, options.cookieDomain, options.cookieOptions);
    }
  }
};

var querystring = {
  name: 'querystring',
  lookup: function lookup(options) {
    var found;
    if (typeof window !== 'undefined') {
      var search = window.location.search;
      if (!window.location.search && window.location.hash && window.location.hash.indexOf('?') > -1) {
        search = window.location.hash.substring(window.location.hash.indexOf('?'));
      }
      var query = search.substring(1);
      var params = query.split('&');
      for (var i = 0; i < params.length; i++) {
        var pos = params[i].indexOf('=');
        if (pos > 0) {
          var key = params[i].substring(0, pos);
          if (key === options.lookupQuerystring) {
            found = params[i].substring(pos + 1);
          }
        }
      }
    }
    return found;
  }
};

var hasLocalStorageSupport = null;
var localStorageAvailable = function localStorageAvailable() {
  if (hasLocalStorageSupport !== null) return hasLocalStorageSupport;
  try {
    hasLocalStorageSupport = window !== 'undefined' && window.localStorage !== null;
    var testKey = 'i18next.translate.boo';
    window.localStorage.setItem(testKey, 'foo');
    window.localStorage.removeItem(testKey);
  } catch (e) {
    hasLocalStorageSupport = false;
  }
  return hasLocalStorageSupport;
};
var localStorage = {
  name: 'localStorage',
  lookup: function lookup(options) {
    var found;
    if (options.lookupLocalStorage && localStorageAvailable()) {
      var lng = window.localStorage.getItem(options.lookupLocalStorage);
      if (lng) found = lng;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupLocalStorage && localStorageAvailable()) {
      window.localStorage.setItem(options.lookupLocalStorage, lng);
    }
  }
};

var hasSessionStorageSupport = null;
var sessionStorageAvailable = function sessionStorageAvailable() {
  if (hasSessionStorageSupport !== null) return hasSessionStorageSupport;
  try {
    hasSessionStorageSupport = window !== 'undefined' && window.sessionStorage !== null;
    var testKey = 'i18next.translate.boo';
    window.sessionStorage.setItem(testKey, 'foo');
    window.sessionStorage.removeItem(testKey);
  } catch (e) {
    hasSessionStorageSupport = false;
  }
  return hasSessionStorageSupport;
};
var sessionStorage = {
  name: 'sessionStorage',
  lookup: function lookup(options) {
    var found;
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      var lng = window.sessionStorage.getItem(options.lookupSessionStorage);
      if (lng) found = lng;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      window.sessionStorage.setItem(options.lookupSessionStorage, lng);
    }
  }
};

var navigator$1 = {
  name: 'navigator',
  lookup: function lookup(options) {
    var found = [];
    if (typeof navigator !== 'undefined') {
      if (navigator.languages) {
        // chrome only; not an array, so can't use .push.apply instead of iterating
        for (var i = 0; i < navigator.languages.length; i++) {
          found.push(navigator.languages[i]);
        }
      }
      if (navigator.userLanguage) {
        found.push(navigator.userLanguage);
      }
      if (navigator.language) {
        found.push(navigator.language);
      }
    }
    return found.length > 0 ? found : undefined;
  }
};

var htmlTag = {
  name: 'htmlTag',
  lookup: function lookup(options) {
    var found;
    var htmlTag = options.htmlTag || (typeof document !== 'undefined' ? document.documentElement : null);
    if (htmlTag && typeof htmlTag.getAttribute === 'function') {
      found = htmlTag.getAttribute('lang');
    }
    return found;
  }
};

var path = {
  name: 'path',
  lookup: function lookup(options) {
    var found;
    if (typeof window !== 'undefined') {
      var language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (language instanceof Array) {
        if (typeof options.lookupFromPathIndex === 'number') {
          if (typeof language[options.lookupFromPathIndex] !== 'string') {
            return undefined;
          }
          found = language[options.lookupFromPathIndex].replace('/', '');
        } else {
          found = language[0].replace('/', '');
        }
      }
    }
    return found;
  }
};

var subdomain = {
  name: 'subdomain',
  lookup: function lookup(options) {
    // If given get the subdomain index else 1
    var lookupFromSubdomainIndex = typeof options.lookupFromSubdomainIndex === 'number' ? options.lookupFromSubdomainIndex + 1 : 1;
    // get all matches if window.location. is existing
    // first item of match is the match itself and the second is the first group macht which sould be the first subdomain match
    // is the hostname no public domain get the or option of localhost
    var language = typeof window !== 'undefined' && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);

    // if there is no match (null) return undefined
    if (!language) return undefined;
    // return the given group match
    return language[lookupFromSubdomainIndex];
  }
};

function getDefaults() {
  return {
    order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    // cache user language
    caches: ['localStorage'],
    excludeCacheFor: ['cimode'],
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'

    convertDetectedLanguage: function convertDetectedLanguage(l) {
      return l;
    }
  };
}
var Browser = /*#__PURE__*/function () {
  function Browser(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck$1(this, Browser);
    this.type = 'languageDetector';
    this.detectors = {};
    this.init(services, options);
  }
  _createClass$1(Browser, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i18nOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.services = services || {
        languageUtils: {}
      }; // this way the language detector can be used without i18next
      this.options = defaults(options, this.options || {}, getDefaults());
      if (typeof this.options.convertDetectedLanguage === 'string' && this.options.convertDetectedLanguage.indexOf('15897') > -1) {
        this.options.convertDetectedLanguage = function (l) {
          return l.replace('-', '_');
        };
      }

      // backwards compatibility
      if (this.options.lookupFromUrlIndex) this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
      this.i18nOptions = i18nOptions;
      this.addDetector(cookie$1);
      this.addDetector(querystring);
      this.addDetector(localStorage);
      this.addDetector(sessionStorage);
      this.addDetector(navigator$1);
      this.addDetector(htmlTag);
      this.addDetector(path);
      this.addDetector(subdomain);
    }
  }, {
    key: "addDetector",
    value: function addDetector(detector) {
      this.detectors[detector.name] = detector;
      return this;
    }
  }, {
    key: "detect",
    value: function detect(detectionOrder) {
      var _this = this;
      if (!detectionOrder) detectionOrder = this.options.order;
      var detected = [];
      detectionOrder.forEach(function (detectorName) {
        if (_this.detectors[detectorName]) {
          var lookup = _this.detectors[detectorName].lookup(_this.options);
          if (lookup && typeof lookup === 'string') lookup = [lookup];
          if (lookup) detected = detected.concat(lookup);
        }
      });
      detected = detected.map(function (d) {
        return _this.options.convertDetectedLanguage(d);
      });
      if (this.services.languageUtils.getBestMatchFromCodes) return detected; // new i18next v19.5.0
      return detected.length > 0 ? detected[0] : null; // a little backward compatibility
    }
  }, {
    key: "cacheUserLanguage",
    value: function cacheUserLanguage(lng, caches) {
      var _this2 = this;
      if (!caches) caches = this.options.caches;
      if (!caches) return;
      if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
      caches.forEach(function (cacheName) {
        if (_this2.detectors[cacheName]) _this2.detectors[cacheName].cacheUserLanguage(lng, _this2.options);
      });
    }
  }]);
  return Browser;
}();
Browser.type = 'languageDetector';

const matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
const htmlEntities = {
  '&amp;': '&',
  '&#38;': '&',
  '&lt;': '<',
  '&#60;': '<',
  '&gt;': '>',
  '&#62;': '>',
  '&apos;': "'",
  '&#39;': "'",
  '&quot;': '"',
  '&#34;': '"',
  '&nbsp;': ' ',
  '&#160;': ' ',
  '&copy;': '©',
  '&#169;': '©',
  '&reg;': '®',
  '&#174;': '®',
  '&hellip;': '…',
  '&#8230;': '…',
  '&#x2F;': '/',
  '&#47;': '/'
};
const unescapeHtmlEntity = m => htmlEntities[m];
const unescape = text => text.replace(matchHtmlEntity, unescapeHtmlEntity);

let defaultOptions = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: true,
  unescape
};
function setDefaults() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  defaultOptions = {
    ...defaultOptions,
    ...options
  };
}

const initReactI18next = {
  type: '3rdParty',
  init(instance) {
    setDefaults(instance.options.react);
  }
};

const i18n = await importShared('i18next');
i18n.use(Backend).use(Browser).use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json"
  }
});

const colors = {
  YELLOW: "#FFCF08",
  GREY: "#D9D9D9",
  GREY_LIGHT: "#F1F1F1",
  WHITE: "#FFFFFF",
  BLACK_LIGHT: "#A6A6A6",
  BLACK: "#1D1D1D"
};

const headerConfig = {
  headerBg: colors.BLACK,
  headerPadding: 0,
  headerColor: colors.WHITE,
  bodyBg: colors.BLACK
};

const footerConfig = {
  footerBg: colors.BLACK,
  footerPadding: 0,
  colorText: colors.GREY
};

const segmentedConfig = {
  itemSelectedBg: colors.YELLOW,
  itemColor: colors.BLACK_LIGHT,
  itemSelectedColor: colors.BLACK,
  borderRadiusSM: 20
};

const {ConfigProvider} = await importShared('antd');
const ThemeProvider = ({ children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ConfigProvider,
    {
      theme: {
        token: {
          fontFamily: "Montserrat",
          colorPrimary: colors.YELLOW
        },
        components: {
          Layout: { ...headerConfig, ...footerConfig },
          Segmented: segmentedConfig
        },
        hashed: false
      },
      children
    }
  );
};

function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppRouter, {}) });
}

export { App as default, jsxRuntimeExports as j };
