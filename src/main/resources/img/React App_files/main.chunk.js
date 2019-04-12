(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Filter/Filter.sass":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/Filter/Filter.sass ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter-container {\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n  margin: 32px 0;\n  display: -webkit-flex;\n  display: flex;\n  font-family: Helvetica, sans-serif;\n  font-size: 36px;\n  line-height: 42px; }\n  @media screen and (max-width: 1023px) {\n    .filter-container {\n      -webkit-justify-content: center;\n              justify-content: center;\n      margin: 12px 0; } }\n  @media screen and (max-width: 410px) {\n    .filter-container {\n      -webkit-justify-content: flex-start;\n              justify-content: flex-start;\n      -webkit-overflow-scrolling: touch;\n      position: relative;\n      -ms-overflow-style: -ms-autohiding-scrollbar;\n      overflow-x: auto;\n      box-sizing: border-box;\n      white-space: nowrap; }\n      .filter-container::-webkit-scrollbar {\n        display: none; } }\n\n@media screen and (max-width: 1023px) {\n  #color-0 + .filter-color-square {\n    margin-left: 16px;\n    background-color: red; } }\n\n.filter-color-square {\n  margin-top: 5px;\n  margin-right: 16px;\n  opacity: .4;\n  border-radius: 8px;\n  width: 32px;\n  height: 32px; }\n  @media screen and (max-width: 1023px) {\n    .filter-color-square {\n      width: 40px;\n      height: 40px; } }\n\n.filter-radio {\n  display: none; }\n\n.filter-color-square:hover {\n  cursor: pointer;\n  opacity: 1;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); }\n\n.filter-radio:checked ~ .filter-color-square {\n  opacity: 1;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); }\n\n.filter-radio:checked ~ .filter-color-square::after {\n  content: '\\2713';\n  position: relative;\n  top: -4px;\n  left: 2px; }\n  @media screen and (max-width: 1023px) {\n    .filter-radio:checked ~ .filter-color-square::after {\n      top: 0;\n      left: 5px; } }\n\n.filter-caption {\n  margin-right: 16px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Footer/Footer.sass":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/Footer/Footer.sass ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-align-items: center;\n          align-items: center;\n  background-color: #FFF; }\n  @media screen and (max-width: 1023px) {\n    .footer-container {\n      padding: 16px; } }\n\n.footer-copyright {\n  margin-right: 25px; }\n  @media screen and (max-width: 1023px) {\n    .footer-copyright {\n      margin: 0; } }\n\n@media screen and (max-width: 1023px) {\n  .crutch {\n    display: none; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Header/Header.sass":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/Header/Header.sass ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-hamburger {\n  display: none; }\n\n@media screen and (max-width: 1023px) {\n  .filter-caption {\n    display: none; } }\n\n@media screen and (max-width: 1023px) {\n  .header-navigation {\n    width: 100%;\n    display: none; } }\n\n.header-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  padding: 16px;\n  background-color: #FFF;\n  box-sizing: border-box; }\n  @media screen and (max-width: 1023px) {\n    .header-container {\n      -webkit-flex-direction: row;\n              flex-direction: row;\n      width: 100%;\n      -webkit-flex-wrap: wrap;\n              flex-wrap: wrap;\n      position: -webkit-sticky;\n      position: sticky;\n      z-index: 233;\n      top: 0; } }\n\n.header-logo {\n  height: 28px; }\n\n.header-input {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  width: 475px;\n  position: relative;\n  border: 2px solid #E6E6E6;\n  border-radius: 4px 8px 8px 4px;\n  height: 28px; }\n  @media screen and (max-width: 1023px) {\n    .header-input {\n      opacity: 0;\n      display: none;\n      -webkit-order: 30;\n              order: 30;\n      width: 100%;\n      margin: 16px auto; } }\n\n.header-text-input {\n  border-width: 0 0 0 10px;\n  max-width: 370px;\n  border-color: transparent;\n  width: 100%;\n  font-size: 15px;\n  padding: 0;\n  margin: 2px; }\n  .header-text-input::-webkit-search-cancel-button {\n    display: none; }\n  .header-text-input:focus {\n    outline-color: transparent; }\n\n.header-text-input-submit {\n  background: #E6E6E6;\n  outline: 0;\n  font-size: 15px;\n  line-height: 22px;\n  font-family: Helvetica, sans-serif;\n  border-radius: 0 4px 4px 0;\n  border: 2px solid #E6E6E6;\n  width: 75px; }\n\n.header-button-list-container {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: -webkit-flex;\n  display: flex; }\n  @media screen and (max-width: 1023px) {\n    .header-button-list-container {\n      text-align: center;\n      width: 100%;\n      display: block; } }\n\n.header-button {\n  font-family: Helvetica, serif;\n  font-size: 16px;\n  line-height: 32px; }\n  .header-button:hover {\n    cursor: pointer; }\n  @media screen and (max-width: 1023px) {\n    .header-button {\n      width: 100%; } }\n\n.header-button-list-container li {\n  display: inline;\n  margin-right: 32px;\n  height: 32px; }\n  @media screen and (max-width: 1023px) {\n    .header-button-list-container li {\n      display: block;\n      width: calc(100% - 32px);\n      margin: 16px auto;\n      text-align: center; } }\n\n.header-button-list-container li:last-child {\n  margin-right: 0; }\n\n.header-button_style_none {\n  color: #333; }\n  .header-button_style_none:hover {\n    opacity: 1; }\n\n.header-button_style_opacity_reduced {\n  color: #333;\n  opacity: .6; }\n\n.header-button_style_yellow {\n  height: 32px;\n  padding: 0 15px;\n  background-color: #FC0;\n  border-radius: 4px; }\n\n.search-input__clear {\n  background: url(" + escape(__webpack_require__(/*! ../../graphics/cancel-button.svg */ "./src/graphics/cancel-button.svg")) + ") no-repeat center;\n  opacity: .1;\n  width: 20px;\n  display: none; }\n\n.search-input__clear:hover {\n  opacity: .4; }\n\n.delete-item {\n  display: inline; }\n\n.header-label-hamburger {\n  display: none; }\n  @media screen and (max-width: 1023px) {\n    .header-label-hamburger {\n      display: block; } }\n\n@media screen and (max-width: 1023px) {\n  #hamburger:checked ~ .header-navigation {\n    opacity: 1;\n    display: block; } }\n\n@media screen and (max-width: 1023px) {\n  #hamburger:checked ~ .header-input {\n    display: -webkit-flex;\n    display: flex;\n    opacity: 1;\n    margin-bottom: 0; } }\n\na {\n  text-decoration: none; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Modal/modal.sass":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/Modal/modal.sass ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-content {\n  position: absolute;\n  left: 25%;\n  top: -100%;\n  background: #fff;\n  z-index: 9999;\n  transition: all 0.5s ease-in;\n  border-radius: 16px; }\n  @media screen and (max-width: 1023px) {\n    .modal-content {\n      left: 0;\n      right: 0;\n      max-width: calc(100% - 30px);\n      margin: 0 auto -17px; } }\n\n.modal-overflow {\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9998;\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/Attachments/Attachments.sass":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/Notes/Attachments/Attachments.sass ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".attachments-img {\n  height: 64px;\n  width: 64px;\n  border-radius: 4px;\n  margin-left: 24px; }\n\n.attachments-container {\n  background-color: #E8E8E8;\n  position: relative;\n  border-radius: 0 0 16px 16px; }\n\n.fa-globe {\n  opacity: 1;\n  font-size: 24px;\n  margin-right: 10px; }\n\n.fa-image {\n  font-size: 25px;\n  line-height: 67px;\n  text-align: center; }\n\ndiv > a {\n  color: #000;\n  font-weight: bold;\n  text-decoration: none;\n  height: 48px; }\n\na:visited {\n  color: #000; }\n\n.attachments-container_type_link {\n  padding: 0 24px; }\n\n.attachments-container_type_image {\n  padding: 12px 25px;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-between;\n          justify-content: space-between; }\n\n.attachments-link {\n  padding: 12px 0;\n  border-bottom: #FFF solid 1px; }\n\n.attachments-link:last-child {\n  border-bottom: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/List/List.sass":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/Notes/List/List.sass ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".note-list-container {\n  padding: 24px;\n  border-radius: 16px;\n  margin-left: -24px;\n  margin-top: -24px;\n  width: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/Note.sass":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/Notes/Note.sass ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".notes-container {\n  display: grid;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  grid-row-gap: 24px;\n  grid-column-gap: 24px;\n  grid-template-columns: repeat(6, calc((100% - 120px) / 6)); }\n  @media screen and (max-width: 1023px) {\n    .notes-container {\n      display: block; } }\n\n.note-container_size_l {\n  grid-column-end: span 4;\n  grid-row-end: span 3; }\n\n.note-container_size_m {\n  grid-column-end: span 3;\n  grid-row-end: span 2; }\n\n.note-container_size_s {\n  grid-column-end: span 2;\n  grid-row-end: span 1; }\n\n.note-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: stretch;\n          align-items: stretch;\n  min-height: 100px;\n  border-radius: 16px;\n  border: 1px solid #e8e8e8; }\n  @media screen and (max-width: 1023px) {\n    .note-container {\n      margin-bottom: 17px; } }\n\n.note-title {\n  font-size: 24px;\n  font-family: Helvetica, sans-serif;\n  line-height: 28px;\n  font-weight: bold;\n  margin-bottom: 10px; }\n\n.note-text {\n  font-size: 18px;\n  font-weight: lighter; }\n\nul {\n  margin: 18px 0;\n  padding: 0; }\n\n.note-tags {\n  max-width: 220px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  background-color: rgba(51, 51, 51, 0.1);\n  font-size: 14px;\n  line-height: 24px;\n  padding: 0 12px;\n  margin-right: 12px;\n  list-style: none;\n  display: inline-block;\n  border-radius: 16px; }\n\n.note-tags:first-child {\n  margin-left: 0; }\n\n.note-tags:hover {\n  background-color: rgba(51, 51, 51, 0.2);\n  cursor: pointer; }\n\n.note-footer {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-between;\n          justify-content: space-between; }\n\n.fas {\n  margin-left: 17px;\n  font-size: 16px;\n  opacity: 0; }\n  @media screen and (max-width: 1023px) {\n    .fas {\n      opacity: .2; } }\n\n.note-icons .fas {\n  opacity: 0; }\n\n.fas:first-child {\n  margin-left: 0; }\n\n.note-icons .fas:hover {\n  cursor: pointer;\n  opacity: .4 !important; }\n\n.note-container:hover .note-icons .fas {\n  opacity: .2; }\n\n.note-container:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); }\n\n.note-date {\n  font-family: Helvetica, serif;\n  font-size: 18px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/Note/NoteText.sass":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/Notes/Note/NoteText.sass ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".note-text-flex-container {\n  margin: 24px;\n  height: 100%;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-justify-content: space-between;\n          justify-content: space-between; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/NoteImage.sass":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/Notes/NoteImage.sass ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".note-img {\n  width: calc(100% + 48px);\n  margin-top: -24px;\n  margin-left: -24px; }\n\n.note-image-container {\n  margin: 24px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/NoteList.sass":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/Notes/NoteList.sass ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".note-list-todo-contatiner {\n  margin: 24px; }\n\n.note-list-todo {\n  list-style: none; }\n\n.note-list-todo-li {\n  margin: 12px 0;\n  font-size: 18px; }\n\ninput[type=checkbox] {\n  -webkit-transform: scale(1.4);\n  transform: scale(1.4);\n  margin-right: 12px;\n  background: #D9D9D9;\n  outline: none; }\n\n.note-list-done {\n  text-decoration: line-through; }\n\n.note-list-gray {\n  padding: 24px;\n  background: #FFF;\n  border-radius: 16px;\n  margin-top: 58px; }\n\n.note-list-done-span {\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  margin-right: 12px;\n  margin-top: 12px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/Reminder/Reminder.sass":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/components/Notes/Reminder/Reminder.sass ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reminder-container {\n  display: -webkit-box;\n  background-color: #DB5341;\n  border-radius: 16px 16px 0 0;\n  padding: 14px 26px; }\n\n.reminder-caption {\n  margin-left: 14px;\n  line-height: 22px;\n  color: #FFF; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App {\n    background-color: #F7F7F7;\n    display: grid;\n    grid-template-rows: auto auto 64px;\n    grid-template-columns: auto 1000px auto;\n    grid-template-areas: 'h h h' '. c .' 'f f f';\n}\n\n@media screen and (max-width: 1023px) {\n    .App {\n        display: block;\n    }\n}\n\n.header-container {\n    grid-area: h;\n\n}\n\n.main-container {\n    grid-area: c;\n    min-height: 100vh;\n\n}\n@media screen and (min-width: 1023px) {\n    .main-container{\n        margin-bottom: 17px;\n    }\n}\n@media screen and (max-width: 1023px) {\n    .notes-container {\n        margin: 16px 16px 0 16px\n    }\n}\n\n.footer-container {\n    grid-area: f;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    margin: 0;\n    padding: 0;\n    font-family: Helvetica, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Main/Main */ "./src/components/Main/Main.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _host__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./host */ "./src/host.js");
/* harmony import */ var _model_Notes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/Notes */ "./src/model/Notes.ts");



var _jsxFileName = "/home/nikita/yandex-domashka/yandex-domashka-1/src/App.js";









var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState2 = Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      notesObj = _useState2[0],
      setNotesObj = _useState2[1];

  function getNoteObj(_x) {
    return _getNoteObj.apply(this, arguments);
  }

  function _getNoteObj() {
    _getNoteObj = Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(i) {
      var link, result, lol;
      return _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              link = _host__WEBPACK_IMPORTED_MODULE_9__["host"] + '/api/cards';

              if (i) {
                link = _host__WEBPACK_IMPORTED_MODULE_9__["host"] + '/api/cards?color=' + i;
              }

              if (i === 0) {
                link = _host__WEBPACK_IMPORTED_MODULE_9__["host"] + '/api/cards?color=0';
              }

              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_8___default()(link);

            case 5:
              result = _context.sent;
              lol = new _model_Notes__WEBPACK_IMPORTED_MODULE_10__["Notes"](_model_Notes__WEBPACK_IMPORTED_MODULE_10__["Notes"].factory(result.data.notes.notes));
              notesObj = lol;
              setNotesObj(lol);
              return _context.abrupt("return", lol);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getNoteObj.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getNoteObj();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: 'main-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Main_Main__WEBPACK_IMPORTED_MODULE_5__["default"], {
    callback: getNoteObj,
    notes: notesObj ? notesObj : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Filter/Filter.js":
/*!*****************************************!*\
  !*** ./src/components/Filter/Filter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Filter_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Filter.sass */ "./src/components/Filter/Filter.sass");
/* harmony import */ var _Filter_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Filter_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bem-react/classname */ "./node_modules/@bem-react/classname/index.js");
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_bem_react_classname__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/nikita/yandex-domashka/yandex-domashka-1/src/components/Filter/Filter.js";



var filter = Object(_bem_react_classname__WEBPACK_IMPORTED_MODULE_7__["cn"])('filter');

var Filter =
/*#__PURE__*/
function (_Component) {
  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Filter, _Component);

  function Filter() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Filter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Filter)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      selected: undefined
    };
    _this.colors = [];
    return _this;
  }

  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Filter, [{
    key: "makeCallback",
    value: function makeCallback(i) {
      if (i < 0) {
        this.props.callback();
        this.setState({
          selected: undefined
        });
        return;
      }

      this.props.callback(i);

      if (this.state.selected === i) {
        this.setState({
          selected: undefined
        });
      } else {
        this.setState({
          selected: i
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.colors = this.props.Colors.map(function (el, i) {
        var colorStyle = {
          backgroundColor: el.color
        };
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          key: i,
          htmlFor: "color-".concat(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          onChange: function onChange(e) {
            e.stopPropagation();

            _this2.makeCallback(i === _this2.state.selected ? -1 : i);
          },
          type: "checkbox",
          id: "color-".concat(i),
          name: 'color',
          key: i,
          checked: i === _this2.state.selected,
          className: filter('radio'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: colorStyle,
          className: filter('color-square'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        /*onClick={(e)=> {e.stopPropagation(); this.makeCallback(-1)}}*/
        className: filter('container'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: filter('caption'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\u0417\u0430\u043C\u0435\u0442\u043A\u0438"), this.colors);
    }
  }]);

  return Filter;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./src/components/Filter/Filter.sass":
/*!*******************************************!*\
  !*** ./src/components/Filter/Filter.sass ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Filter.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Filter/Filter.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Filter.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Filter/Filter.sass", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Filter.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Filter/Filter.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bem-react/classname */ "./node_modules/@bem-react/classname/index.js");
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Footer_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer.sass */ "./src/components/Footer/Footer.sass");
/* harmony import */ var _Footer_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Footer_sass__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/nikita/yandex-domashka/yandex-domashka-1/src/components/Footer/Footer.js";



var footer = Object(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__["cn"])('footer');

var Footer =
/*#__PURE__*/
function (_Component) {
  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _Component);

  function Footer() {
    Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).apply(this, arguments));
  }

  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: footer('container'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: 'crutch',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "Vasya pupkin"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: footer('copyright'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "\xA9 \u042F\u043D\u0434\u0435\u043A\u0441 \u0428\u0420\u0418"));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/Footer.sass":
/*!*******************************************!*\
  !*** ./src/components/Footer/Footer.sass ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Footer.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Footer/Footer.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Footer.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Footer/Footer.sass", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Footer.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Footer/Footer.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Header_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header.sass */ "./src/components/Header/Header.sass");
/* harmony import */ var _Header_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Header_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _graphics_logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../graphics/logo.svg */ "./src/graphics/logo.svg");
/* harmony import */ var _graphics_logo_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_graphics_logo_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _graphics_L_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../graphics/L.svg */ "./src/graphics/L.svg");
/* harmony import */ var _graphics_L_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_graphics_L_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bem-react/classname */ "./node_modules/@bem-react/classname/index.js");
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_bem_react_classname__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/home/nikita/yandex-domashka/yandex-domashka-1/src/components/Header/Header.js";






var Header =
/*#__PURE__*/
function (_Component) {
  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      inputValue: ''
    };
    return _this;
  }

  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "updateInputValue",
    value: function updateInputValue(evt) {
      this.setState({
        inputValue: evt.target.value
      });
    }
  }, {
    key: "clearInput",
    value: function clearInput() {
      this.setState({
        inputValue: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var header = Object(_bem_react_classname__WEBPACK_IMPORTED_MODULE_9__["cn"])('header');
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: header('container'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _graphics_logo_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        className: header('logo'),
        alt: header('logo'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: 'checkbox',
        id: 'hamburger',
        className: header('hamburger'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: header('label-hamburger'),
        htmlFor: 'hamburger',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _graphics_L_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: 'hamburger',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: header('input'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: [header('text-input')],
        type: 'search',
        maxLength: 400,
        name: 'lol',
        value: this.state.inputValue,
        onChange: function onChange(e) {
          return _this2.updateInputValue(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: ['search-input__clear', this.state.inputValue === '' ? '' : 'delete-item'].join(' '),
        onClick: function onClick() {
          return _this2.clearInput();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: header('text-input-submit'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "\u041D\u0430\u0439\u0442\u0438")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        className: header('navigation'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: header('button-list-container'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: header('button', {
          style: 'none'
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://ya.ru",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: header('button', {
          style: 'opacity_reduced'
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://ya.ru",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "\u0410\u0440\u0445\u0438\u0432")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: header('button', {
          style: 'yellow'
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://ya.ru",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/Header.sass":
/*!*******************************************!*\
  !*** ./src/components/Header/Header.sass ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Header.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Header/Header.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Header.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Header/Header.sass", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Header.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Header/Header.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Main/Main.js":
/*!*************************************!*\
  !*** ./src/components/Main/Main.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _model_NotesList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/NotesList */ "./src/model/NotesList.js");
/* harmony import */ var _Filter_Filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Filter/Filter */ "./src/components/Filter/Filter.js");
/* harmony import */ var _Notes_Notes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Notes/Notes */ "./src/components/Notes/Notes.js");





var _jsxFileName = "/home/nikita/yandex-domashka/yandex-domashka-1/src/components/Main/Main.js";





var Main =
/*#__PURE__*/
function (_Component) {
  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Main, _Component);

  function Main() {
    Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Main);

    return Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Main).apply(this, arguments));
  }

  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Main, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Filter_Filter__WEBPACK_IMPORTED_MODULE_7__["default"], {
        callback: this.props.callback,
        Colors: _model_NotesList__WEBPACK_IMPORTED_MODULE_6__["Colors"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Notes_Notes__WEBPACK_IMPORTED_MODULE_8__["default"], {
        callback: this.props.callback,
        NotesObject: this.props.notes ? this.props.notes : null,
        Notes: this.props.notes ? this.props.notes.toArray() : _model_NotesList__WEBPACK_IMPORTED_MODULE_6__["NoteList"],
        Colors: _model_NotesList__WEBPACK_IMPORTED_MODULE_6__["Colors"],
        Tags: _model_NotesList__WEBPACK_IMPORTED_MODULE_6__["Tags"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/components/Modal/Modal.js":
/*!***************************************!*\
  !*** ./src/components/Modal/Modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bem-react/classname */ "./node_modules/@bem-react/classname/index.js");
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modal_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal.sass */ "./src/components/Modal/modal.sass");
/* harmony import */ var _modal_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modal_sass__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/nikita/yandex-domashka/yandex-domashka-1/src/components/Modal/Modal.js";



var modalCN = Object(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__["cn"])('modal');

var Modal =
/*#__PURE__*/
function (_Component) {
  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Modal, _Component);

  function Modal() {
    Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Modal);

    return Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Modal).apply(this, arguments));
  }

  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Modal, [{
    key: "render",
    value: function render() {
      var size;

      switch (this.props.size) {
        case 'l':
          size = '676px';
          break;

        case 'm':
          size = '528px';
          break;

        case 's':
          size = '340px';
          break;

        default:
          size = '656px';
          break;
      }

      var show = {
        top: '0%',
        marginTop: window.pageYOffset + document.documentElement.clientHeight / 4 + 'px',
        width: size
      };
      var overflowStyle = {
        height: document.documentElement.scrollHeight
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: overflowStyle,
        className: this.props.note ? modalCN('overflow') : '',
        onClick: this.props.callback,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: modalCN('content'),
        style: this.props.note ? show : '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.props.note)));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/components/Modal/modal.sass":
/*!*****************************************!*\
  !*** ./src/components/Modal/modal.sass ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./modal.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Modal/modal.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./modal.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Modal/modal.sass", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./modal.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Modal/modal.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Notes/Attachments/Attachments.js":
/*!*********************************************************!*\
  !*** ./src/components/Notes/Attachments/Attachments.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bem-react/classname */ "./node_modules/@bem-react/classname/index.js");
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Attachments_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Attachments.sass */ "./src/components/Notes/Attachments/Attachments.sass");
/* harmony import */ var _Attachments_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Attachments_sass__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/nikita/yandex-domashka/yandex-domashka-1/src/components/Notes/Attachments/Attachments.js";




var Attachments =
/*#__PURE__*/
function (_Component) {
  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Attachments, _Component);

  function Attachments() {
    Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Attachments);

    return Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Attachments).apply(this, arguments));
  }

  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Attachments, [{
    key: "render",
    value: function render() {
      var info = this.props.info;
      var attachCn = Object(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__["cn"])('attachments');
      var attachments;
      var type = info[0].type;
      var attach = info.map(function (el, i) {
        if (type === "link") {
          var protomatch = /^(https?|ftp):\/\//;
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            key: i,
            className: attachCn('link'),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: el.url,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
            className: "fas fa-globe",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          }), el.url.replace(protomatch, '')));
        }

        if (type === "image") {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            key: i,
            className: attachCn('img'),
            src: el.url,
            alt: 'random staff',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        });
      });
      if (type === "link") attachments = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: attachCn('container', {
          type: type
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, attach);
      if (type === "image") attachments = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: attachCn('container', {
          type: type
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "far fa-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, attach));
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, attachments);
    }
  }]);

  return Attachments;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Attachments);

/***/ }),

/***/ "./src/components/Notes/Attachments/Attachments.sass":
/*!***********************************************************!*\
  !*** ./src/components/Notes/Attachments/Attachments.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Attachments.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/Attachments/Attachments.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Attachments.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/Attachments/Attachments.sass", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Attachments.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/Attachments/Attachments.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Notes/List/List.js":
/*!*******************************************!*\
  !*** ./src/components/Notes/List/List.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bem-react/classname */ "./node_modules/@bem-react/classname/index.js");
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _List_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./List.sass */ "./src/components/Notes/List/List.sass");
/* harmony import */ var _List_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_List_sass__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/nikita/yandex-domashka/yandex-domashka-1/src/components/Notes/List/List.js";



var noteListCN = Object(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__["cn"])('note-list');
var note = Object(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__["cn"])('note');

var List =
/*#__PURE__*/
function (_Component) {
  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(List, _Component);

  function List() {
    Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, List);

    return Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(List).apply(this, arguments));
  }

  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(List, [{
    key: "render",
    value: function render() {
      var info = this.props.info;
      var done = info.items.filter(function (el) {
        return el.checked;
      });
      var todo = info.items.filter(function (el) {
        return !el.checked;
      });
      todo = todo.map(function (el, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: i,
          className: noteListCN('todo-li'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          htmlFor: noteListCN(i.toString()),
          className: noteListCN('label-todo'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          id: noteListCN(i.toString()),
          type: "checkbox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }), el.text));
      });
      done = done.map(function (el, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: i,
          className: noteListCN('done-span'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          htmlFor: noteListCN('done', i.toString()),
          className: noteListCN('label-done'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          id: noteListCN('done', i.toString()),
          type: "checkbox",
          checked: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }), el.text));
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: noteListCN('container'),
        style: {
          backgroundColor: this.props.color
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: note('title'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, info.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: noteListCN('todo'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, todo)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: noteListCN('done'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, done));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/components/Notes/List/List.sass":
/*!*********************************************!*\
  !*** ./src/components/Notes/List/List.sass ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./List.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/List/List.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./List.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/List/List.sass", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./List.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/List/List.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Notes/Note.sass":
/*!****************************************!*\
  !*** ./src/components/Notes/Note.sass ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Note.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/Note.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Note.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/Note.sass", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Note.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/Note.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Notes/Note/Note.js":
/*!*******************************************!*\
  !*** ./src/components/Notes/Note/Note.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bem-react/classname */ "./node_modules/@bem-react/classname/index.js");
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _NoteText_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NoteText.sass */ "./src/components/Notes/Note/NoteText.sass");
/* harmony import */ var _NoteText_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_NoteText_sass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _List_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../List/List */ "./src/components/Notes/List/List.js");
/* harmony import */ var _host__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../host */ "./src/host.js");





var _jsxFileName = "/home/nikita/yandex-domashka/yandex-domashka-1/src/components/Notes/Note/Note.js";






var noteText = Object(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__["cn"])('note-text');
var note = Object(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__["cn"])('note');
var noteImageCN = Object(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__["cn"])('note-img');

var Note =
/*#__PURE__*/
function (_Component) {
  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Note, _Component);

  function Note() {
    Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Note);

    return Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Note).apply(this, arguments));
  }

  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Note, [{
    key: "deleteNote",
    value: function deleteNote() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.delete(_host__WEBPACK_IMPORTED_MODULE_10__["host"] + '/api/cards/' + this.props.info.id).then(function () {
        return _this.props.callback();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var info = this.props.info;
      var str;

      if (info.text) {
        str = info.text.split('\n').map(function (item, i) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          }, item, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          }));
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        onClick: this.props.onClick,
        className: noteText('flex-container'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, info.type === 'image' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: noteImageCN(),
        src: info.url,
        alt: "some random",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }) : '', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: noteText('container', {
          size: info.size
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, info.type === 'list' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_List_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
        info: info,
        color: this.props.color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: note('title'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, info.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: note('text'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, str)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: noteText('foot'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, this.props.tags), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: note('footer'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: note('icons'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        onClick: function onClick() {
          _this2.deleteNote();
        },
        className: "fas fa-check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fas fa-pen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: note('date'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.props.date))));
    }
  }]);

  return Note;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Note);

/***/ }),

/***/ "./src/components/Notes/Note/NoteText.sass":
/*!*************************************************!*\
  !*** ./src/components/Notes/Note/NoteText.sass ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./NoteText.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/Note/NoteText.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./NoteText.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/Note/NoteText.sass", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./NoteText.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/Note/NoteText.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Notes/NoteImage.sass":
/*!*********************************************!*\
  !*** ./src/components/Notes/NoteImage.sass ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./NoteImage.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/NoteImage.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./NoteImage.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/NoteImage.sass", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./NoteImage.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/NoteImage.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Notes/NoteList.sass":
/*!********************************************!*\
  !*** ./src/components/Notes/NoteList.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./NoteList.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/NoteList.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./NoteList.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/NoteList.sass", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./NoteList.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/NoteList.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Notes/Notes.js":
/*!***************************************!*\
  !*** ./src/components/Notes/Notes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bem-react/classname */ "./node_modules/@bem-react/classname/index.js");
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Note_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Note.sass */ "./src/components/Notes/Note.sass");
/* harmony import */ var _Note_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Note_sass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _NoteImage_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NoteImage.sass */ "./src/components/Notes/NoteImage.sass");
/* harmony import */ var _NoteImage_sass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_NoteImage_sass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _NoteList_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NoteList.sass */ "./src/components/Notes/NoteList.sass");
/* harmony import */ var _NoteList_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_NoteList_sass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helpers_colorProcess__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/colorProcess */ "./src/helpers/colorProcess.js");
/* harmony import */ var _Note_Note__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Note/Note */ "./src/components/Notes/Note/Note.js");
/* harmony import */ var _Attachments_Attachments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Attachments/Attachments */ "./src/components/Notes/Attachments/Attachments.js");
/* harmony import */ var _Reminder_Reminder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Reminder/Reminder */ "./src/components/Notes/Reminder/Reminder.js");
/* harmony import */ var _helpers_dateProcess__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../helpers/dateProcess */ "./src/helpers/dateProcess.js");
/* harmony import */ var _Modal_Modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Modal/Modal */ "./src/components/Modal/Modal.js");





var _jsxFileName = "/home/nikita/yandex-domashka/yandex-domashka-1/src/components/Notes/Notes.js";











var note = Object(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__["cn"])('note');

var Notes =
/*#__PURE__*/
function (_Component) {
  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Notes, _Component);

  function Notes() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Notes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Notes)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      selectedID: -1
    };

    _this.showModal = function (e, id) {
      e.stopPropagation();

      _this.setState({
        selectedID: id
      });
    };

    _this.showContent = function (e, id) {
      e.stopPropagation();

      _this.setState({
        selectedID: -1
      });

      _this.modal = undefined;
    };

    _this.modal = undefined;
    return _this;
  }

  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Notes, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var modalSize;
      var Colors = this.props.Colors;
      var Tags = this.props.Tags;
      var classname;
      var Notes = this.props.Notes.map(function (el) {
        classname = note('container', {
          size: el.size
        });
        var tags;

        if (el['tags']) {
          tags = el.tags.map(function (tag) {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
              className: note('tags'),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            }, Tags.find(function (e) {
              return e.id === tag;
            }).tag);
          });
        }

        var dateStr = Object(_helpers_dateProcess__WEBPACK_IMPORTED_MODULE_14__["default"])(el.created, false);
        var reminderStr;

        if (el.reminder) {
          reminderStr = Object(_helpers_dateProcess__WEBPACK_IMPORTED_MODULE_14__["default"])(el.reminder, true);
        }

        var styles = {
          backgroundColor: Object(_helpers_colorProcess__WEBPACK_IMPORTED_MODULE_10__["default"])((Colors.find(function (e) {
            return e.id === el.color;
          }) || {
            color: '#FFFFFF'
          }).color, 0.4)
        };
        var notes = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: el.id,
          className: classname,
          style: el.type === 'list' ? {
            backgroundColor: "#FFF"
          } : styles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, el.reminder ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Reminder_Reminder__WEBPACK_IMPORTED_MODULE_13__["default"], {
          info: reminderStr,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }) : '', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Note_Note__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onClick: function onClick(e) {
            _this2.showModal(e, el.id);
          },
          callback: _this2.props.callback,
          date: dateStr,
          tags: tags,
          className: classname,
          info: el,
          color: styles.backgroundColor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }), el.attachments ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Attachments_Attachments__WEBPACK_IMPORTED_MODULE_12__["default"], {
          info: el.attachments,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }) : '');

        if (el.id === _this2.state.selectedID) {
          _this2.modal = notes;
          modalSize = el.size;
        }

        return notes;
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, this.modal ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Modal_Modal__WEBPACK_IMPORTED_MODULE_15__["default"], {
        note: this.modal,
        callback: this.showContent,
        size: modalSize,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }) : '', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: 'notes-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, Notes));
    }
  }]);

  return Notes;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Notes);

/***/ }),

/***/ "./src/components/Notes/Reminder/Reminder.js":
/*!***************************************************!*\
  !*** ./src/components/Notes/Reminder/Reminder.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bem-react/classname */ "./node_modules/@bem-react/classname/index.js");
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _graphics_icon_color_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../graphics/icon color.svg */ "./src/graphics/icon color.svg");
/* harmony import */ var _graphics_icon_color_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_graphics_icon_color_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Reminder_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Reminder.sass */ "./src/components/Notes/Reminder/Reminder.sass");
/* harmony import */ var _Reminder_sass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Reminder_sass__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/home/nikita/yandex-domashka/yandex-domashka-1/src/components/Notes/Reminder/Reminder.js";




var reminder = Object(_bem_react_classname__WEBPACK_IMPORTED_MODULE_6__["cn"])('reminder');

var Reminder =
/*#__PURE__*/
function (_Component) {
  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Reminder, _Component);

  function Reminder() {
    Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Reminder);

    return Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Reminder).apply(this, arguments));
  }

  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Reminder, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: reminder('container'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _graphics_icon_color_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: reminder('caption'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, this.props.info));
    }
  }]);

  return Reminder;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Reminder);

/***/ }),

/***/ "./src/components/Notes/Reminder/Reminder.sass":
/*!*****************************************************!*\
  !*** ./src/components/Notes/Reminder/Reminder.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Reminder.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/Reminder/Reminder.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Reminder.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/Reminder/Reminder.sass", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./Reminder.sass */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/Notes/Reminder/Reminder.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/graphics/L.svg":
/*!****************************!*\
  !*** ./src/graphics/L.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/L.aee7be9c.svg";

/***/ }),

/***/ "./src/graphics/cancel-button.svg":
/*!****************************************!*\
  !*** ./src/graphics/cancel-button.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cancel-button.4565e230.svg";

/***/ }),

/***/ "./src/graphics/icon color.svg":
/*!*************************************!*\
  !*** ./src/graphics/icon color.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/icon color.cf216124.svg";

/***/ }),

/***/ "./src/graphics/logo.svg":
/*!*******************************!*\
  !*** ./src/graphics/logo.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.c530ec72.svg";

/***/ }),

/***/ "./src/helpers/colorProcess.js":
/*!*************************************!*\
  !*** ./src/helpers/colorProcess.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hexToRGB; });
function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  if (alpha && !(r === 255 && g === 255 && b === 255)) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

/***/ }),

/***/ "./src/helpers/dateProcess.js":
/*!************************************!*\
  !*** ./src/helpers/dateProcess.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getDateString(mill, isReminder) {
  var nowc = new Date();
  var created = new Date(mill);

  if (isReminder) {
    if (nowc.getDate() < created.getDate() && nowc.getMonth() < created.getMonth() && nowc.getFullYear() < created.getFullYear()) {
      var _i = 0;

      while (nowc.getDate() !== created.getDate() || nowc.getMonth() !== created.getMonth() || nowc.getFullYear() !== created.getFullYear()) {
        created.setDate(created.getDate() - 1);
        _i++;
        if (_i > 10000) break;
      }

      if (_i > 4) {
        return "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u0442\u044C ".concat(_i, " \u0434\u043D\u0435\u0439");
      } else if (_i > 1) {
        return "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u0442\u044C ".concat(_i, " \u0434\u043D\u044F");
      } else return 'Остался день';
    } else {
      return 'Событие прошло(';
    }
  }

  var i = 0;

  while (nowc.getDate() !== created.getDate() || nowc.getMonth() !== created.getMonth() || nowc.getFullYear() !== created.getFullYear()) {
    nowc.setDate(nowc.getDate() - 1);
    i++;
    if (i > 3650) break;
  }

  if (i < 1) {
    return "".concat(created.getHours() + ':' + created.getMinutes(), ", \u0421\u0435\u0433\u043E\u0434\u043D\u044F");
  } else if (i < 2) {
    return "".concat(created.getHours() + ':' + created.getMinutes(), ", \u0412\u0447\u0435\u0440\u0430");
  } else if (i < 7) {
    var cap = 'день';
    if (i > 1) cap = 'дня';
    if (i > 4) cap = 'дней';
    return "".concat(i, " ").concat(cap, " \u043D\u0430\u0437\u0430\u0434");
  } else if (i < 31) {
    var weeks = Math.round(i / 7);
    var _cap = 'я';
    if (weeks > 1) _cap = 'и';
    if (weeks > 4) _cap = 'ь';
    return "".concat(weeks, " \u043D\u0435\u0434\u0435\u043B").concat(_cap, " \u043D\u0430\u0437\u0430\u0434");
  } else if (i < 365) {
    var month = Math.round(i / 30.5);
    if (month === 1) return 'Месяц назад';
    var end = '';
    if (month > 1) end = 'a';
    if (month > 4) end = 'ев';
    return "".concat(month, " \u043C\u0435\u0441\u044F\u0446").concat(end, " \u043D\u0430\u0437\u0430\u0434");
  } else {
    var years = Math.round(i / 365);
    if (years === 1) return 'Год назад';
    return "".concat(years, " \u043B\u0435\u0442 \u043D\u0430\u0437\u0430\u0434");
  }
}

/* harmony default export */ __webpack_exports__["default"] = (getDateString);

/***/ }),

/***/ "./src/host.js":
/*!*********************!*\
  !*** ./src/host.js ***!
  \*********************/
/*! exports provided: host */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "host", function() { return host; });
var host = 'https://mineralsfree.com';

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/nikita/yandex-domashka/yandex-domashka-1/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Notes this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/model/Notes.ts":
/*!****************************!*\
  !*** ./src/model/Notes.ts ***!
  \****************************/
/*! exports provided: Notes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notes", function() { return Notes; });
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");




var _Symbol$iterator = Symbol.iterator;

var Notes =
/*#__PURE__*/
function () {
  function Notes(notes) {
    Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Notes);

    this.notes = [];
    this.notes = notes;
  }

  Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Notes, [{
    key: "toArray",
    value: function toArray() {
      return Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.notes);
    }
  }, {
    key: "addNote",
    value: function addNote(note) {
      this.notes.push(Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, note, {
        type: 'text',
        created: new Date().getTime(),
        size: Notes.getNoteSize(note)
      }));
    }
  }, {
    key: _Symbol$iterator,
    value: function value() {
      var i = this.notes.length;
      var lol = this.notes;
      return {
        next: function next(value) {
          if (i === 0) {
            return {
              done: true,
              value: lol[0]
            };
          } else return {
            done: false,
            value: lol[i]
          };
        }
      };
    }
  }], [{
    key: "getNoteSize",
    value: function getNoteSize(item) {
      return 'l';
    }
  }, {
    key: "factory",
    value: function factory(notesItems) {
      return notesItems.map(function (item, index) {
        return Object(_home_nikita_yandex_domashka_yandex_domashka_1_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
          size: item.size ? item.size : Notes.getNoteSize(item)
        });
      });
    }
  }]);

  return Notes;
}();



/***/ }),

/***/ "./src/model/NotesList.js":
/*!********************************!*\
  !*** ./src/model/NotesList.js ***!
  \********************************/
/*! exports provided: Colors, Tags, NoteList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tags", function() { return Tags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteList", function() { return NoteList; });
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "./src/model/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./src/model/data.json", 1);

var Colors = _data_json__WEBPACK_IMPORTED_MODULE_0__['colors'];
var Tags = _data_json__WEBPACK_IMPORTED_MODULE_0__['tags'];
var NoteList = _data_json__WEBPACK_IMPORTED_MODULE_0__['notes'];


/***/ }),

/***/ "./src/model/data.json":
/*!*****************************!*\
  !*** ./src/model/data.json ***!
  \*****************************/
/*! exports provided: tags, colors, notes, default */
/***/ (function(module) {

module.exports = {"tags":[{"id":0,"tag":"покупки"},{"id":1,"tag":"Работа"},{"id":2,"tag":"ШРИ"},{"id":3,"tag":"коты"},{"id":4,"tag":"мемы"},{"id":5,"tag":"универ"},{"id":6,"tag":"домашнее задание"},{"id":7,"tag":"учеба"},{"id":8,"tag":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"}],"colors":[{"id":0,"color":"#E84747"},{"id":1,"color":"#F2994A"},{"id":2,"color":"#F2C94C"},{"id":3,"color":"#219653"},{"id":4,"color":"#56CCF2"},{"id":5,"color":"#2F80ED"},{"id":6,"color":"#9B51E0"}],"notes":[{"type":"list","title":"Список покупок","tags":[0],"color":0,"items":[{"text":"Оливочки","checked":false},{"text":"Макароны","checked":false},{"text":"Яйца","checked":true},{"text":"Сливки","checked":false},{"text":"Хлеб","checked":true},{"text":"Чеснок","checked":false},{"text":"Сыр","checked":true},{"text":"Помидорки","checked":false},{"text":"Ветчина","checked":true},{"text":"Чай","checked":true},{"text":"Огурец","checked":false},{"text":"Масло сливочное","checked":true},{"text":"Вино","checked":true},{"text":"Камамбер","checked":true},{"text":"Сыр фета","checked":true},{"text":"Васаби","checked":true},{"text":"Соевый соус","checked":true},{"text":"Вкусняшки","checked":false},{"text":"Красный имбирь","checked":true},{"text":"Гвоздика","checked":true},{"text":"Кардамон","checked":true},{"text":"Овсяные хлопья","checked":true},{"text":"Пельмени","checked":true},{"text":"Сметана","checked":true}],"size":"l","created":1551780000000},{"type":"text","title":"Завтра дедлайн","text":"Не забыть сверстать макет","tags":[1,2],"color":2,"size":"s","created":1551714600000},{"type":"text","text":"Купить чайник с Bluetooth\nВидел у Xiaomi на днях","tags":[0],"size":"s","created":1551593220000},{"type":"text","title":"Генератор котов","attachments":[{"type":"link","url":"https://thiscatdoesnotexist.com"}],"size":"s","created":1551529380000},{"type":"text","title":"Нагенерил смешных котов","text":"Американец научил нейросети генерировать фото кошек. Получилось не оч","attachments":[{"type":"image","url":"https://avatars.mds.yandex.net/get-pdb/1816426/93eab951-b130-4cf9-98d6-01e250be5530/orig"},{"type":"image","url":"https://avatars.mds.yandex.net/get-pdb/1823123/fc6cf893-91b5-4e80-9f02-82acfc6fe30c/orig"},{"type":"image","url":"https://avatars.mds.yandex.net/get-pdb/1816426/c68f1a18-f763-4a98-8a17-f7d7725753b6/orig"}],"tags":[3,4],"color":4,"size":"m","created":1551265200000},{"type":"text","title":"Скидки в Виталюре","text":"На филе лосося и картоху","tags":[0],"size":"m","reminder":1552640400000,"created":1550653200000},{"type":"text","text":"Реферат до 2 апреля (300 терминов, аннотация, основная, заключение, список литературы)\nПеревод 40к знаков к зачету, 40к к экзамену\nТест 1 и 2\n\nПодготовка кадров зарубежом (юнит 2)\nНаучно исследовательская работа магистранта (юнит 2)\nРоль науки (юнит 1)\n10-15 предложений минимум","tags":[5,6],"color":1,"size":"m","created":1549189500000},{"type":"image","url":"https://avatars.mds.yandex.net/get-pdb/1534889/a869b7ef-32da-41e7-8703-326ae860e67f/orig","tags":[3],"size":"m","created":1548969900000},{"type":"text","title":"Выучить латынь","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","tags":[7,8],"size":"l","created":1543798200000},{"type":"text","text":"Теперь ищу только в яндексе","attachments":[{"type":"link","url":"https://yandex.ru"},{"type":"link","url":"https://ya.ru"}],"tags":[1],"size":"s","created":1536310800000},{"type":"text","title":"Не забыть выгулять Сиба-Ину","color":3,"size":"s","created":1520160803000}]};

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/nikita/yandex-domashka/yandex-domashka-1/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/nikita/yandex-domashka/yandex-domashka-1/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map