(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*!
* sweetalert2 v7.26.28
* Released under the MIT License.
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Sweetalert2 = factory());
}(this, (function () { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */

var uniqueArray = function uniqueArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */

var toArray = function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
};
/**
* Converts `inputOptions` into an array of `[value, label]`s
* @param inputOptions
*/

var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];

  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }

  return result;
};
/**
 * Standardise console warnings
 * @param message
 */

var warn = function warn(message) {
  console.warn("".concat(consolePrefix, " ").concat(message));
};
/**
 * Standardise console errors
 * @param message
 */

var error = function error(message) {
  console.error("".concat(consolePrefix, " ").concat(message));
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */

var previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */

var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */

var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};
var isThenable = function isThenable(arg) {
  return _typeof(arg) === 'object' && typeof arg.then === 'function';
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'overlay',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var version = "7.26.28";

var argsToParams = function argsToParams(args) {
  var params = {};

  switch (_typeof(args[0])) {
    case 'object':
      _extends(params, args[0]);

      break;

    default:
      ['title', 'html', 'type'].forEach(function (name, index) {
        switch (_typeof(args[index])) {
          case 'string':
            params[name] = args[index];
            break;

          case 'undefined':
            break;

          default:
            error("Unexpected type of ".concat(name, "! Expected \"string\", got ").concat(_typeof(args[index])));
        }
      });
  }

  return params;
};

/**
 * Adapt a legacy inputValidator for use with expectRejections=false
 */
var adaptInputValidator = function adaptInputValidator(legacyValidator) {
  return function adaptedInputValidator(inputValue, extraParams) {
    return legacyValidator.call(this, inputValue, extraParams).then(function () {
      return undefined;
    }, function (validationError) {
      return validationError;
    });
  };
};

var swalPrefix = 'swal2-';
var prefix = function prefix(items) {
  var result = {};

  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }

  return result;
};
var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-text', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen']);
var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var states = {
  previousBodyPadding: null
};
var hasClass = function hasClass(elem, className) {
  return elem.classList.contains(className);
};
var focusInput = function focusInput(input) {
  input.focus(); // place cursor at end of text in text input

  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addOrRemoveClass = function addOrRemoveClass(target, classList, add) {
  if (!target || !classList) {
    return;
  }

  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }

  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        add ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      add ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};

var addClass = function addClass(target, classList) {
  addOrRemoveClass(target, classList, true);
};
var removeClass = function removeClass(target, classList) {
  addOrRemoveClass(target, classList, false);
};
var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};
var show = function show(elem) {
  elem.style.opacity = '';
  elem.style.display = elem.id === swalClasses.content ? 'block' : 'flex';
};
var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
}; // borrowed from jquery $(elem).is(':visible') implementation

var isVisible = function isVisible(elem) {
  return elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};
var removeStyleProperty = function removeStyleProperty(elem, property) {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property);
  } else {
    elem.style.removeAttribute(property);
  }
};

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var elementByClass = function elementByClass(className) {
  var container = getContainer();
  return container ? container.querySelector('.' + className) : null;
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};
var getIcons = function getIcons() {
  var popup = getPopup();
  return toArray(popup.querySelectorAll('.' + swalClasses.icon));
};
var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};
var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};
var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};
var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};
var getValidationError = function getValidationError() {
  return elementByClass(swalClasses.validationerror);
};
var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};
var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};
/* @deprecated */

/* istanbul ignore next */

var getButtonsWrapper = function getButtonsWrapper() {
  warnOnce("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead");
  return elementByClass(swalClasses.actions);
};
var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};
var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};
var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};
var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  }); // https://github.com/jkup/focusable/blob/master/index.js

  var otherFocusableElements = toArray(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function (el) {
    return el.getAttribute('tabindex') !== '-1';
  });
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
    return isVisible(el);
  });
};
var isModal = function isModal() {
  return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
};
var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};
var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses.progresssteps, "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\">\n       <span class=\"swal2-x-mark\"><span class=\"swal2-x-mark-line-left\"></span><span class=\"swal2-x-mark-line-right\"></span></span>\n     </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">?</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">!</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">i</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\">\n       <div class=\"swal2-success-circular-line-left\"></div>\n       <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n       <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n       <div class=\"swal2-success-circular-line-right\"></div>\n     </div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\">\xD7</button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses.validationerror, "\" id=\"").concat(swalClasses.validationerror, "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\">\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
/*
 * Add modal + backdrop to DOM
 */

var init = function init(params) {
  // Clean up the old popup if it exists
  var c = getContainer();

  if (c) {
    c.parentNode.removeChild(c);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
  }

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);
  var popup = getPopup();
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector(".".concat(swalClasses.range, " input"));
  var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
  var textarea = getChildByClass(content, swalClasses.textarea); // a11y

  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  }

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationError = function resetValidationError(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationError();
    }

    oldInputVal = e.target.value;
  };

  input.oninput = resetValidationError;
  file.onchange = resetValidationError;
  select.onchange = resetValidationError;
  checkbox.onchange = resetValidationError;
  textarea.oninput = resetValidationError;

  range.oninput = function (e) {
    resetValidationError(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationError(e);
    range.nextSibling.value = range.value;
  };

  return popup;
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  if (!param) {
    return hide(target);
  }

  if (_typeof(param) === 'object') {
    target.innerHTML = '';

    if (0 in param) {
      for (var i = 0; i in param; i++) {
        target.appendChild(param[i].cloneNode(true));
      }
    } else {
      target.appendChild(param.cloneNode(true));
    }
  } else if (param) {
    target.innerHTML = param;
  }

  show(target);
};

var animationEndEvent = function () {
  // Prevent run in Node env
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };

  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

  if (supportsTouch) {
    return 0;
  }

  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var renderActions = function renderActions(params) {
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // Actions (buttons) wrapper

  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  } // Cancel button


  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  } // Confirm button


  if (params.showConfirmButton) {
    removeStyleProperty(confirmButton, 'display');
  } else {
    hide(confirmButton);
  } // Edit text on confirm and cancel buttons


  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText; // ARIA labels for confirm and cancel buttons

  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel); // Add buttons custom classes

  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass); // Buttons styling

  if (params.buttonsStyling) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }
};

var renderContent = function renderContent(params) {
  var content = getContent().querySelector('#' + swalClasses.content); // Content as HTML

  if (params.html) {
    parseHtmlToContainer(params.html, content); // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content);
  } else {
    hide(content);
  }
};

var renderIcon = function renderIcon(params) {
  var icons = getIcons();

  for (var i = 0; i < icons.length; i++) {
    hide(icons[i]);
  }

  if (params.type) {
    if (Object.keys(iconTypes).indexOf(params.type) !== -1) {
      var icon = Swal.getPopup().querySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.type]));
      show(icon); // Animate icon

      if (params.animation) {
        addClass(icon, "swal2-animate-".concat(params.type, "-icon"));
      }
    } else {
      error("Unknown type! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.type, "\""));
    }
  }
};

var renderImage = function renderImage(params) {
  var image = getImage();

  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;

    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }
};

var renderProgressSteps = function renderProgressSteps(params) {
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep, 10);

  if (params.progressSteps && params.progressSteps.length) {
    show(progressStepsContainer);
    progressStepsContainer.innerHTML = '';

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;

      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }

      progressStepsContainer.appendChild(circle);

      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);

        if (params.progressStepsDistance) {
          line.style.width = params.progressStepsDistance;
        }

        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }
};

var renderTitle = function renderTitle(params) {
  var title = getTitle();

  if (params.titleText) {
    title.innerText = params.titleText;
  } else if (params.title) {
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    parseHtmlToContainer(params.title, title);
  }
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  } // if the body has overflow


  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = states.previousBodyPadding + measureScrollbar() + 'px';
  }
};
var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

/* istanbul ignore next */

var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};
/* istanbul ignore next */

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

var setAriaHidden = function setAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el === getContainer() || el.contains(getContainer())) {
      return;
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
    }

    el.setAttribute('aria-hidden', 'true');
  });
};
var unsetAriaHidden = function unsetAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

var RESTORE_FOCUS_TIMEOUT = 100;

var globalState = {};
var restoreActiveElement = function restoreActiveElement() {
  var x = window.scrollX;
  var y = window.scrollY;
  globalState.restoreFocusTimeout = setTimeout(function () {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }, RESTORE_FOCUS_TIMEOUT); // issues/900

  if (typeof x !== 'undefined' && typeof y !== 'undefined') {
    // IE doesn't have scrollX/scrollY support
    window.scrollTo(x, y);
  }
};

/*
 * Global function to close sweetAlert
 */

var close = function close(onClose, onAfterClose) {
  var container = getContainer();
  var popup = getPopup();

  if (!popup) {
    return;
  }

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);

  var removePopupAndResetState = function removePopupAndResetState() {
    if (!isToast()) {
      restoreActiveElement();
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }

    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }

    if (onAfterClose !== null && typeof onAfterClose === 'function') {
      setTimeout(function () {
        onAfterClose();
      });
    }
  }; // If animation is supported, animate


  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);

      if (hasClass(popup, swalClasses.hide)) {
        removePopupAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState();
  }
};

/*
 * Global function to determine if swal2 popup is shown
 */

var isVisible$1 = function isVisible() {
  return !!getPopup();
};
/*
 * Global function to click 'Confirm' button
 */

var clickConfirm = function clickConfirm() {
  return getConfirmButton().click();
};
/*
 * Global function to click 'Cancel' button
 */

var clickCancel = function clickCancel() {
  return getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Swal, args);
}

/**
 * Extends a Swal class making it able to be instantiated without the `new` keyword (and thus without `Swal.fire`)
 * @param ParentSwal
 * @returns {NoNewKeywordSwal}
 */
function withNoNewKeyword(ParentSwal) {
  var NoNewKeywordSwal = function NoNewKeywordSwal() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!(this instanceof NoNewKeywordSwal)) {
      return _construct(NoNewKeywordSwal, args);
    }

    Object.getPrototypeOf(NoNewKeywordSwal).apply(this, args);
  };

  NoNewKeywordSwal.prototype = _extends(Object.create(ParentSwal.prototype), {
    constructor: NoNewKeywordSwal
  });

  if (typeof Object.setPrototypeOf === 'function') {
    Object.setPrototypeOf(NoNewKeywordSwal, ParentSwal);
  } else {
    // Android 4.4
    // eslint-disable-next-line
    NoNewKeywordSwal.__proto__ = ParentSwal;
  }

  return NoNewKeywordSwal;
}

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onAfterClose: null,
  onOpen: null,
  onClose: null,
  useRejections: false,
  expectRejections: false
};
var deprecatedParams = ['useRejections', 'expectRejections'];
var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
/**
 * Is valid parameter
 * @param {String} paramName
 */

var isValidParameter = function isValidParameter(paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */

var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams.indexOf(paramName) !== -1;
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */

var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }

    if (params.toast && toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }

    if (isDeprecatedParameter(param)) {
      warnOnce("The parameter \"".concat(param, "\" is deprecated and will be removed in the next major release."));
    }
  }
};

var deprecationWarning = "\"setDefaults\" & \"resetDefaults\" methods are deprecated in favor of \"mixin\" method and will be removed in the next major release. For new projects, use \"mixin\". For past projects already using \"setDefaults\", support will be provided through an additional package.";
var defaults = {};
function withGlobalDefaults(ParentSwal) {
  var SwalWithGlobalDefaults =
  /*#__PURE__*/
  function (_ParentSwal) {
    _inherits(SwalWithGlobalDefaults, _ParentSwal);

    function SwalWithGlobalDefaults() {
      _classCallCheck(this, SwalWithGlobalDefaults);

      return _possibleConstructorReturn(this, _getPrototypeOf(SwalWithGlobalDefaults).apply(this, arguments));
    }

    _createClass(SwalWithGlobalDefaults, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(SwalWithGlobalDefaults.prototype), "_main", this).call(this, _extends({}, defaults, params));
      }
    }], [{
      key: "setDefaults",
      value: function setDefaults(params) {
        warnOnce(deprecationWarning);

        if (!params || _typeof(params) !== 'object') {
          throw new TypeError('SweetAlert2: The argument for setDefaults() is required and has to be a object');
        }

        showWarningsForParams(params); // assign valid params from `params` to `defaults`

        Object.keys(params).forEach(function (param) {
          if (ParentSwal.isValidParameter(param)) {
            defaults[param] = params[param];
          }
        });
      }
    }, {
      key: "resetDefaults",
      value: function resetDefaults() {
        warnOnce(deprecationWarning);
        defaults = {};
      }
    }]);

    return SwalWithGlobalDefaults;
  }(ParentSwal); // Set default params if `window._swalDefaults` is an object


  if (typeof window !== 'undefined' && _typeof(window._swalDefaults) === 'object') {
    SwalWithGlobalDefaults.setDefaults(window._swalDefaults);
  }

  return SwalWithGlobalDefaults;
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */

function mixin(mixinParams) {
  return withNoNewKeyword(
  /*#__PURE__*/
  function (_this) {
    _inherits(MixinSwal, _this);

    function MixinSwal() {
      _classCallCheck(this, MixinSwal);

      return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
    }

    _createClass(MixinSwal, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
      }
    }]);

    return MixinSwal;
  }(this));
}

// private global state for the queue feature
var currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */

var queue = function queue(steps) {
  var swal = this;
  currentSteps = steps;

  var resetQueue = function resetQueue() {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };

  var queueResult = [];
  return new Promise(function (resolve) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);
        swal(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetQueue();
            resolve({
              dismiss: result.dismiss
            });
          }
        });
      } else {
        resetQueue();
        resolve({
          value: queueResult
        });
      }
    })(0);
  });
};
/*
 * Global function for getting the index of current popup in queue
 */

var getQueueStep = function getQueueStep() {
  return document.body.getAttribute('data-swal2-queue-step');
};
/*
 * Global function for inserting a popup to the queue
 */

var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }

  return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */

var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */

var showLoading = function showLoading() {
  var popup = getPopup();

  if (!popup) {
    Swal('');
  }

  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  show(actions);
  show(confirmButton);
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;
  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

/**
 * If `timer` parameter is set, returns number os milliseconds of timer remained.
 * Otherwise, returns null.
 */

var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	adaptInputValidator: adaptInputValidator,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getContainer: getContainer,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getImage: getImage,
	getIcons: getIcons,
	getCloseButton: getCloseButton,
	getButtonsWrapper: getButtonsWrapper,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getFooter: getFooter,
	getFocusableElements: getFocusableElements,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft
});

// https://github.com/Riim/symbol-polyfill/blob/master/index.js

/* istanbul ignore next */
var _Symbol = typeof Symbol === 'function' ? Symbol : function () {
  var idCounter = 0;

  function _Symbol(key) {
    return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + ++idCounter + '__';
  }

  _Symbol.iterator = _Symbol('Symbol.iterator');
  return _Symbol;
}();

// WeakMap polyfill, needed for Android 4.4
// Related issue: https://github.com/sweetalert2/sweetalert2/issues/1071
// http://webreflection.blogspot.fi/2015/04/a-weakmap-polyfill-in-20-lines-of-code.html
/* istanbul ignore next */

var WeakMap$1 = typeof WeakMap === 'function' ? WeakMap : function (s, dP, hOP) {
  function WeakMap() {
    dP(this, s, {
      value: _Symbol('WeakMap')
    });
  }

  WeakMap.prototype = {
    'delete': function del(o) {
      delete o[this[s]];
    },
    get: function get(o) {
      return o[this[s]];
    },
    has: function has(o) {
      return hOP.call(o, this[s]);
    },
    set: function set(o, v) {
      dP(o, this[s], {
        configurable: true,
        value: v
      });
    }
  };
  return WeakMap;
}(_Symbol('WeakMap'), Object.defineProperty, {}.hasOwnProperty);

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateProps = {
  promise: new WeakMap$1(),
  innerParams: new WeakMap$1(),
  domCache: new WeakMap$1()
};

/**
 * Enables buttons and hide loader.
 */

function hideLoading() {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);

  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);

    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }

  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function getInput(inputType) {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);
  inputType = inputType || innerParams.input;

  if (!inputType) {
    return null;
  }

  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(domCache.content, swalClasses[inputType]);

    case 'checkbox':
      return domCache.popup.querySelector(".".concat(swalClasses.checkbox, " input"));

    case 'radio':
      return domCache.popup.querySelector(".".concat(swalClasses.radio, " input:checked")) || domCache.popup.querySelector(".".concat(swalClasses.radio, " input:first-child"));

    case 'range':
      return domCache.popup.querySelector(".".concat(swalClasses.range, " input"));

    default:
      return getChildByClass(domCache.content, swalClasses.input);
  }
}

function enableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}
function disableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
  domCache.cancelButton.disabled = true;
}
function enableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
}
function disableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
}
function enableInput() {
  var input = this.getInput();

  if (!input) {
    return false;
  }

  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = false;
    }
  } else {
    input.disabled = false;
  }
}
function disableInput() {
  var input = this.getInput();

  if (!input) {
    return false;
  }

  if (input && input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = true;
    }
  } else {
    input.disabled = true;
  }
}

function showValidationError(error) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationError.innerHTML = error;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationError.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
  domCache.validationError.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
  show(domCache.validationError);
  var input = this.getInput();

  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses.validationerror);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
} // Hide block with validation error

function resetValidationError() {
  var domCache = privateProps.domCache.get(this);

  if (domCache.validationError) {
    hide(domCache.validationError);
  }

  var input = this.getInput();

  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
}

function getProgressSteps$1() {
  var innerParams = privateProps.innerParams.get(this);
  return innerParams.progressSteps;
}
function setProgressSteps(progressSteps) {
  var innerParams = privateProps.innerParams.get(this);

  var updatedParams = _extends({}, innerParams, {
    progressSteps: progressSteps
  });

  privateProps.innerParams.set(this, updatedParams);
  renderProgressSteps(updatedParams);
}
function showProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  show(domCache.progressSteps);
}
function hideProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  hide(domCache.progressSteps);
}

var Timer = function Timer(callback, delay) {
  _classCallCheck(this, Timer);

  var id, started, running;
  var remaining = delay;

  this.start = function () {
    running = true;
    started = new Date();
    id = setTimeout(callback, remaining);
  };

  this.stop = function () {
    running = false;
    clearTimeout(id);
    remaining -= new Date() - started;
  };

  this.getTimerLeft = function () {
    if (running) {
      this.stop();
      this.start();
    }

    return remaining;
  };

  this.start();
};

var defaultInputValidators = {
  email: function email(string, extraParams) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid email address');
  },
  url: function url(string, extraParams) {
    // taken from https://stackoverflow.com/a/3809435/1331425
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid URL');
  }
};

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */

function setParameters(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = params.expectRejections ? defaultInputValidators[key] : Swal.adaptInputValidator(defaultInputValidators[key]);
      }
    });
  } // Determine if the custom target element is valid


  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }

  var popup;
  var oldPopup = getPopup();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target; // If the model target has changed, refresh the popup

  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = init(params);
  } else {
    popup = oldPopup || init(params);
  } // Set popup width


  if (params.width) {
    popup.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
  } // Set popup padding


  if (params.padding) {
    popup.style.padding = typeof params.padding === 'number' ? params.padding + 'px' : params.padding;
  } // Set popup background


  if (params.background) {
    popup.style.background = params.background;
  }

  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }

  var container = getContainer();
  var closeButton = getCloseButton();
  var footer = getFooter(); // Title

  renderTitle(params); // Content

  renderContent(params); // Backdrop

  if (typeof params.backdrop === 'string') {
    getContainer().style.background = params.backdrop;
  } else if (!params.backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }

  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  } // Position


  if (params.position in swalClasses) {
    addClass(container, swalClasses[params.position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  } // Grow


  if (params.grow && typeof params.grow === 'string') {
    var growClass = 'grow-' + params.grow;

    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  } // Animation


  if (typeof params.animation === 'function') {
    params.animation = params.animation.call();
  } // Close button


  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  } // Default Class


  popup.className = swalClasses.popup;

  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  } // Custom Class


  if (params.customClass) {
    addClass(popup, params.customClass);
  } // Progress steps


  renderProgressSteps(params); // Icon

  renderIcon(params); // Image

  renderImage(params); // Actions (buttons)

  renderActions(params); // Footer

  parseHtmlToContainer(params.footer, footer); // CSS animation

  if (params.animation === true) {
    removeClass(popup, swalClasses.noanimation);
  } else {
    addClass(popup, swalClasses.noanimation);
  } // showLoaderOnConfirm && preConfirm


  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  }
}

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */

var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  if (params.animation) {
    addClass(popup, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(popup, swalClasses.hide);
  } else {
    removeClass(popup, swalClasses.fade);
  }

  show(popup); // scrolling is 'hidden' until animation is done, after that 'auto'

  container.style.overflowY = 'hidden';

  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass([document.documentElement, document.body, container], swalClasses.shown);

  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }

  if (isModal()) {
    fixScrollbar();
    iOSfix();
    setAriaHidden();
  }

  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }

  if (params.onOpen !== null && typeof params.onOpen === 'function') {
    setTimeout(function () {
      params.onOpen(popup);
    });
  }
};

function _main(userParams) {
  var _this = this;

  showWarningsForParams(userParams);

  var innerParams = _extends({}, defaultParams, userParams);

  setParameters(innerParams);
  Object.freeze(innerParams);
  privateProps.innerParams.set(this, innerParams); // clear the previous timer

  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  } // clear the restore focus timeout


  clearTimeout(globalState.restoreFocusTimeout);
  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationError: getValidationError(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(this, domCache);
  var constructor = this.constructor;
  return new Promise(function (resolve, reject) {
    // functions to handle all resolving/rejecting/settling
    var succeedWith = function succeedWith(value) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose); // TODO: make closePopup an *instance* method

      if (innerParams.useRejections) {
        resolve(value);
      } else {
        resolve({
          value: value
        });
      }
    };

    var dismissWith = function dismissWith(dismiss) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);

      if (innerParams.useRejections) {
        reject(dismiss);
      } else {
        resolve({
          dismiss: dismiss
        });
      }
    };

    var errorWith = function errorWith(error$$1) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);
      reject(error$$1);
    }; // Close on timer


    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
    } // Get the value of the popup input


    var getInputValue = function getInputValue() {
      var input = _this.getInput();

      if (!input) {
        return null;
      }

      switch (innerParams.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;

        case 'radio':
          return input.checked ? input.value : null;

        case 'file':
          return input.files.length ? input.files[0] : null;

        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value;
      }
    }; // input autofocus


    if (innerParams.input) {
      setTimeout(function () {
        var input = _this.getInput();

        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (innerParams.showLoaderOnConfirm) {
        constructor.showLoading(); // TODO: make showLoading an *instance* method
      }

      if (innerParams.preConfirm) {
        _this.resetValidationError();

        var preConfirmPromise = Promise.resolve().then(function () {
          return innerParams.preConfirm(value, innerParams.extraParams);
        });

        if (innerParams.expectRejections) {
          preConfirmPromise.then(function (preConfirmValue) {
            return succeedWith(preConfirmValue || value);
          }, function (validationError) {
            _this.hideLoading();

            if (validationError) {
              _this.showValidationError(validationError);
            }
          });
        } else {
          preConfirmPromise.then(function (preConfirmValue) {
            if (isVisible(domCache.validationError) || preConfirmValue === false) {
              _this.hideLoading();
            } else {
              succeedWith(preConfirmValue || value);
            }
          }, function (error$$1) {
            return errorWith(error$$1);
          });
        }
      } else {
        succeedWith(value);
      }
    }; // Mouse interactions


    var onButtonEvent = function onButtonEvent(e) {
      var target = e.target;
      var confirmButton = domCache.confirmButton,
          cancelButton = domCache.cancelButton;
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && constructor.isVisible()) {
            _this.disableButtons();

            if (innerParams.input) {
              var inputValue = getInputValue();

              if (innerParams.inputValidator) {
                _this.disableInput();

                var validationPromise = Promise.resolve().then(function () {
                  return innerParams.inputValidator(inputValue, innerParams.extraParams);
                });

                if (innerParams.expectRejections) {
                  validationPromise.then(function () {
                    _this.enableButtons();

                    _this.enableInput();

                    confirm(inputValue);
                  }, function (validationError) {
                    _this.enableButtons();

                    _this.enableInput();

                    if (validationError) {
                      _this.showValidationError(validationError);
                    }
                  });
                } else {
                  validationPromise.then(function (validationError) {
                    _this.enableButtons();

                    _this.enableInput();

                    if (validationError) {
                      _this.showValidationError(validationError);
                    } else {
                      confirm(inputValue);
                    }
                  }, function (error$$1) {
                    return errorWith(error$$1);
                  });
                }
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            } // Clicked 'cancel'

          } else if (targetedCancel && constructor.isVisible()) {
            _this.disableButtons();

            dismissWith(constructor.DismissReason.cancel);
          }

          break;

        default:
      }
    };

    var buttons = domCache.popup.querySelectorAll('button');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    } // Closing popup by close button


    domCache.closeButton.onclick = function () {
      dismissWith(constructor.DismissReason.close);
    };

    if (innerParams.toast) {
      // Closing popup by internal click
      domCache.popup.onclick = function () {
        if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
          return;
        }

        dismissWith(constructor.DismissReason.close);
      };
    } else {
      var ignoreOutsideClick = false; // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider

      domCache.popup.onmousedown = function () {
        domCache.container.onmouseup = function (e) {
          domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup

          if (e.target === domCache.container) {
            ignoreOutsideClick = true;
          }
        };
      }; // Ignore click events that had mousedown on the container but mouseup on the popup


      domCache.container.onmousedown = function () {
        domCache.popup.onmouseup = function (e) {
          domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };

      domCache.container.onclick = function (e) {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }

        if (e.target !== domCache.container) {
          return;
        }

        if (callIfFunction(innerParams.allowOutsideClick)) {
          dismissWith(constructor.DismissReason.backdrop);
        }
      };
    } // Reverse buttons (Confirm on the right side)


    if (innerParams.reverseButtons) {
      domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
    } else {
      domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
    } // Focus handling


    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(innerParams.focusCancel); // search for visible elements and select the next possible match

      for (var _i = 0; _i < focusableElements.length; _i++) {
        index = index + increment; // rollover to first item

        if (index === focusableElements.length) {
          index = 0; // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        return focusableElements[index].focus();
      } // no visible focusable elements, focus the popup


      domCache.popup.focus();
    };

    var keydownHandler = function keydownHandler(e, innerParams) {
      if (innerParams.stopKeydownPropagation) {
        e.stopPropagation();
      }

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target && _this.getInput() && e.target.outerHTML === _this.getInput().outerHTML) {
          if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
            return; // do not submit
          }

          constructor.clickConfirm();
          e.preventDefault();
        } // TAB

      } else if (e.key === 'Tab') {
        var targetElement = e.target;
        var focusableElements = getFocusableElements(innerParams.focusCancel);
        var btnIndex = -1;

        for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
          if (targetElement === focusableElements[_i2]) {
            btnIndex = _i2;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }

        e.stopPropagation();
        e.preventDefault(); // ARROWS - switch focus between buttons
      } else if (arrowKeys.indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === domCache.confirmButton && isVisible(domCache.cancelButton)) {
          domCache.cancelButton.focus(); // and vice versa
        } else if (document.activeElement === domCache.cancelButton && isVisible(domCache.confirmButton)) {
          domCache.confirmButton.focus();
        } // ESC

      } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(innerParams.allowEscapeKey) === true) {
        dismissWith(constructor.DismissReason.esc);
      }
    };

    if (globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(e, innerParams);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : domCache.popup;
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }

    _this.enableButtons();

    _this.hideLoading();

    _this.resetValidationError();

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      addClass(document.body, swalClasses['toast-column']);
    } else {
      removeClass(document.body, swalClasses['toast-column']);
    } // inputs


    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
    var input;

    for (var _i3 = 0; _i3 < inputTypes.length; _i3++) {
      var inputClass = swalClasses[inputTypes[_i3]];
      var inputContainer = getChildByClass(domCache.content, inputClass);
      input = _this.getInput(inputTypes[_i3]); // set attributes

      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;

            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }

        for (var attr in innerParams.inputAttributes) {
          input.setAttribute(attr, innerParams.inputAttributes[attr]);
        }
      } // set class


      inputContainer.className = inputClass;

      if (innerParams.inputClass) {
        addClass(inputContainer, innerParams.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions;

    switch (innerParams.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        {
          input = getChildByClass(domCache.content, swalClasses.input);
          input.value = innerParams.inputValue;
          input.placeholder = innerParams.inputPlaceholder;
          input.type = innerParams.input;
          show(input);
          break;
        }

      case 'file':
        {
          input = getChildByClass(domCache.content, swalClasses.file);
          input.placeholder = innerParams.inputPlaceholder;
          input.type = innerParams.input;
          show(input);
          break;
        }

      case 'range':
        {
          var range = getChildByClass(domCache.content, swalClasses.range);
          var rangeInput = range.querySelector('input');
          var rangeOutput = range.querySelector('output');
          rangeInput.value = innerParams.inputValue;
          rangeInput.type = innerParams.input;
          rangeOutput.value = innerParams.inputValue;
          show(range);
          break;
        }

      case 'select':
        {
          var select = getChildByClass(domCache.content, swalClasses.select);
          select.innerHTML = '';

          if (innerParams.inputPlaceholder) {
            var placeholder = document.createElement('option');
            placeholder.innerHTML = innerParams.inputPlaceholder;
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }

          populateInputOptions = function populateInputOptions(inputOptions) {
            inputOptions.forEach(function (inputOption) {
              var optionValue = inputOption[0];
              var optionLabel = inputOption[1];
              var option = document.createElement('option');
              option.value = optionValue;
              option.innerHTML = optionLabel;

              if (innerParams.inputValue.toString() === optionValue.toString()) {
                option.selected = true;
              }

              select.appendChild(option);
            });
            show(select);
            select.focus();
          };

          break;
        }

      case 'radio':
        {
          var radio = getChildByClass(domCache.content, swalClasses.radio);
          radio.innerHTML = '';

          populateInputOptions = function populateInputOptions(inputOptions) {
            inputOptions.forEach(function (inputOption) {
              var radioValue = inputOption[0];
              var radioLabel = inputOption[1];
              var radioInput = document.createElement('input');
              var radioLabelElement = document.createElement('label');
              radioInput.type = 'radio';
              radioInput.name = swalClasses.radio;
              radioInput.value = radioValue;

              if (innerParams.inputValue.toString() === radioValue.toString()) {
                radioInput.checked = true;
              }

              var label = document.createElement('span');
              label.innerHTML = radioLabel;
              label.className = swalClasses.label;
              radioLabelElement.appendChild(radioInput);
              radioLabelElement.appendChild(label);
              radio.appendChild(radioLabelElement);
            });
            show(radio);
            var radios = radio.querySelectorAll('input');

            if (radios.length) {
              radios[0].focus();
            }
          };

          break;
        }

      case 'checkbox':
        {
          var checkbox = getChildByClass(domCache.content, swalClasses.checkbox);

          var checkboxInput = _this.getInput('checkbox');

          checkboxInput.type = 'checkbox';
          checkboxInput.value = 1;
          checkboxInput.id = swalClasses.checkbox;
          checkboxInput.checked = Boolean(innerParams.inputValue);
          var label = checkbox.querySelector('span');
          label.innerHTML = innerParams.inputPlaceholder;
          show(checkbox);
          break;
        }

      case 'textarea':
        {
          var textarea = getChildByClass(domCache.content, swalClasses.textarea);
          textarea.value = innerParams.inputValue;
          textarea.placeholder = innerParams.inputPlaceholder;
          show(textarea);
          break;
        }

      case null:
        {
          break;
        }

      default:
        error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(innerParams.input, "\""));
        break;
    }

    if (innerParams.input === 'select' || innerParams.input === 'radio') {
      var processInputOptions = function processInputOptions(inputOptions) {
        return populateInputOptions(formatInputOptions(inputOptions));
      };

      if (isThenable(innerParams.inputOptions)) {
        constructor.showLoading();
        innerParams.inputOptions.then(function (inputOptions) {
          _this.hideLoading();

          processInputOptions(inputOptions);
        });
      } else if (_typeof(innerParams.inputOptions) === 'object') {
        processInputOptions(innerParams.inputOptions);
      } else {
        error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(innerParams.inputOptions)));
      }
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(innerParams.input) !== -1 && isThenable(innerParams.inputValue)) {
      constructor.showLoading();
      hide(input);
      innerParams.inputValue.then(function (inputValue) {
        input.value = innerParams.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
        show(input);
        input.focus();

        _this.hideLoading();
      }).catch(function (err) {
        error('Error in inputValue promise: ' + err);
        input.value = '';
        show(input);
        input.focus();

        _this.hideLoading();
      });
    }

    openPopup(innerParams);

    if (!innerParams.toast) {
      if (!callIfFunction(innerParams.allowEnterKey)) {
        if (document.activeElement) {
          document.activeElement.blur();
        }
      } else if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
        domCache.cancelButton.focus();
      } else if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
        domCache.confirmButton.focus();
      } else {
        setFocus(-1, 1);
      }
    } // fix scroll


    domCache.container.scrollTop = 0;
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableConfirmButton: enableConfirmButton,
	disableConfirmButton: disableConfirmButton,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationError: showValidationError,
	resetValidationError: resetValidationError,
	getProgressSteps: getProgressSteps$1,
	setProgressSteps: setProgressSteps,
	showProgressSteps: showProgressSteps,
	hideProgressSteps: hideProgressSteps,
	_main: _main
});

var currentInstance; // SweetAlert constructor

function SweetAlert() {
  // Prevent run in Node env
  if (typeof window === 'undefined') {
    return;
  } // Check for the existence of Promise


  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 0) {
    error('At least 1 argument is expected!');
    return false;
  }

  currentInstance = this;
  var outerParams = Object.freeze(this.constructor.argsToParams(args));
  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true
    }
  });

  var promise = this._main(this.params);

  privateProps.promise.set(this, promise);
} // `catch` cannot be the name of a module export, so we define our thenable methods here instead


SweetAlert.prototype.then = function (onFulfilled, onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled, onRejected);
};

SweetAlert.prototype.catch = function (onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.catch(onRejected);
};

SweetAlert.prototype.finally = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise.finally(onFinally);
}; // Assign instance methods from src/instanceMethods/*.js to prototype


_extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


_extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});
SweetAlert.DismissReason = DismissReason;

SweetAlert.noop = function () {};

SweetAlert.version = version;

var Swal = withNoNewKeyword(withGlobalDefaults(SweetAlert));
Swal.default = Swal;

return Swal;

})));
if (typeof window !== 'undefined' && window.Sweetalert2){  window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show {\n" +
"  0% {\n" +
"    -webkit-transform: scale(0.7);\n" +
"            transform: scale(0.7); }\n" +
"  45% {\n" +
"    -webkit-transform: scale(1.05);\n" +
"            transform: scale(1.05); }\n" +
"  80% {\n" +
"    -webkit-transform: scale(0.95);\n" +
"            transform: scale(0.95); }\n" +
"  100% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1); } }\n" +
"\n" +
"@keyframes swal2-show {\n" +
"  0% {\n" +
"    -webkit-transform: scale(0.7);\n" +
"            transform: scale(0.7); }\n" +
"  45% {\n" +
"    -webkit-transform: scale(1.05);\n" +
"            transform: scale(1.05); }\n" +
"  80% {\n" +
"    -webkit-transform: scale(0.95);\n" +
"            transform: scale(0.95); }\n" +
"  100% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1); } }\n" +
"\n" +
"@-webkit-keyframes swal2-hide {\n" +
"  0% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; }\n" +
"  100% {\n" +
"    -webkit-transform: scale(0.5);\n" +
"            transform: scale(0.5);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@keyframes swal2-hide {\n" +
"  0% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; }\n" +
"  100% {\n" +
"    -webkit-transform: scale(0.5);\n" +
"            transform: scale(0.5);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-success-line-tip {\n" +
"  0% {\n" +
"    top: 1.1875em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: 1.0625em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: 2.1875em;\n" +
"    left: -.375em;\n" +
"    width: 3.125em; }\n" +
"  84% {\n" +
"    top: 3em;\n" +
"    left: 1.3125em;\n" +
"    width: 1.0625em; }\n" +
"  100% {\n" +
"    top: 2.8125em;\n" +
"    left: .875em;\n" +
"    width: 1.5625em; } }\n" +
"\n" +
"@keyframes swal2-animate-success-line-tip {\n" +
"  0% {\n" +
"    top: 1.1875em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: 1.0625em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: 2.1875em;\n" +
"    left: -.375em;\n" +
"    width: 3.125em; }\n" +
"  84% {\n" +
"    top: 3em;\n" +
"    left: 1.3125em;\n" +
"    width: 1.0625em; }\n" +
"  100% {\n" +
"    top: 2.8125em;\n" +
"    left: .875em;\n" +
"    width: 1.5625em; } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-success-line-long {\n" +
"  0% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: 2.1875em;\n" +
"    right: 0;\n" +
"    width: 3.4375em; }\n" +
"  100% {\n" +
"    top: 2.375em;\n" +
"    right: .5em;\n" +
"    width: 2.9375em; } }\n" +
"\n" +
"@keyframes swal2-animate-success-line-long {\n" +
"  0% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: 2.1875em;\n" +
"    right: 0;\n" +
"    width: 3.4375em; }\n" +
"  100% {\n" +
"    top: 2.375em;\n" +
"    right: .5em;\n" +
"    width: 2.9375em; } }\n" +
"\n" +
"@-webkit-keyframes swal2-rotate-success-circular-line {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  5% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  12% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); } }\n" +
"\n" +
"@keyframes swal2-rotate-success-circular-line {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  5% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  12% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-error-x-mark {\n" +
"  0% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  50% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  80% {\n" +
"    margin-top: -.375em;\n" +
"    -webkit-transform: scale(1.15);\n" +
"            transform: scale(1.15); }\n" +
"  100% {\n" +
"    margin-top: 0;\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@keyframes swal2-animate-error-x-mark {\n" +
"  0% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  50% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  80% {\n" +
"    margin-top: -.375em;\n" +
"    -webkit-transform: scale(1.15);\n" +
"            transform: scale(1.15); }\n" +
"  100% {\n" +
"    margin-top: 0;\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-error-icon {\n" +
"  0% {\n" +
"    -webkit-transform: rotateX(100deg);\n" +
"            transform: rotateX(100deg);\n" +
"    opacity: 0; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateX(0deg);\n" +
"            transform: rotateX(0deg);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@keyframes swal2-animate-error-icon {\n" +
"  0% {\n" +
"    -webkit-transform: rotateX(100deg);\n" +
"            transform: rotateX(100deg);\n" +
"    opacity: 0; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateX(0deg);\n" +
"            transform: rotateX(0deg);\n" +
"    opacity: 1; } }\n" +
"\n" +
"body.swal2-toast-shown .swal2-container {\n" +
"  position: fixed;\n" +
"  background-color: transparent; }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-shown {\n" +
"    background-color: transparent; }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-top {\n" +
"    top: 0;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-top-end, body.swal2-toast-shown .swal2-container.swal2-top-right {\n" +
"    top: 0;\n" +
"    right: 0;\n" +
"    bottom: auto;\n" +
"    left: auto; }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-top-start, body.swal2-toast-shown .swal2-container.swal2-top-left {\n" +
"    top: 0;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 0; }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-center-start, body.swal2-toast-shown .swal2-container.swal2-center-left {\n" +
"    top: 50%;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 0;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-center {\n" +
"    top: 50%;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translate(-50%, -50%);\n" +
"            transform: translate(-50%, -50%); }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-center-end, body.swal2-toast-shown .swal2-container.swal2-center-right {\n" +
"    top: 50%;\n" +
"    right: 0;\n" +
"    bottom: auto;\n" +
"    left: auto;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-bottom-start, body.swal2-toast-shown .swal2-container.swal2-bottom-left {\n" +
"    top: auto;\n" +
"    right: auto;\n" +
"    bottom: 0;\n" +
"    left: 0; }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-bottom {\n" +
"    top: auto;\n" +
"    right: auto;\n" +
"    bottom: 0;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-bottom-end, body.swal2-toast-shown .swal2-container.swal2-bottom-right {\n" +
"    top: auto;\n" +
"    right: 0;\n" +
"    bottom: 0;\n" +
"    left: auto; }\n" +
"\n" +
"body.swal2-toast-column .swal2-toast {\n" +
"  flex-direction: column;\n" +
"  align-items: stretch; }\n" +
"  body.swal2-toast-column .swal2-toast .swal2-actions {\n" +
"    flex: 1;\n" +
"    align-self: stretch;\n" +
"    height: 2.2em;\n" +
"    margin-top: .3125em; }\n" +
"  body.swal2-toast-column .swal2-toast .swal2-loading {\n" +
"    justify-content: center; }\n" +
"  body.swal2-toast-column .swal2-toast .swal2-input {\n" +
"    height: 2em;\n" +
"    margin: .3125em auto;\n" +
"    font-size: 1em; }\n" +
"  body.swal2-toast-column .swal2-toast .swal2-validationerror {\n" +
"    font-size: 1em; }\n" +
"\n" +
".swal2-popup.swal2-toast {\n" +
"  flex-direction: row;\n" +
"  align-items: center;\n" +
"  width: auto;\n" +
"  padding: 0.625em;\n" +
"  box-shadow: 0 0 0.625em #d9d9d9;\n" +
"  overflow-y: hidden; }\n" +
"  .swal2-popup.swal2-toast .swal2-header {\n" +
"    flex-direction: row; }\n" +
"  .swal2-popup.swal2-toast .swal2-title {\n" +
"    flex-grow: 1;\n" +
"    justify-content: flex-start;\n" +
"    margin: 0 .6em;\n" +
"    font-size: 1em; }\n" +
"  .swal2-popup.swal2-toast .swal2-footer {\n" +
"    margin: 0.5em 0 0;\n" +
"    padding: 0.5em 0 0;\n" +
"    font-size: 0.8em; }\n" +
"  .swal2-popup.swal2-toast .swal2-close {\n" +
"    position: initial;\n" +
"    width: 0.8em;\n" +
"    height: 0.8em;\n" +
"    line-height: 0.8; }\n" +
"  .swal2-popup.swal2-toast .swal2-content {\n" +
"    justify-content: flex-start;\n" +
"    font-size: 1em; }\n" +
"  .swal2-popup.swal2-toast .swal2-icon {\n" +
"    width: 2em;\n" +
"    min-width: 2em;\n" +
"    height: 2em;\n" +
"    margin: 0; }\n" +
"    .swal2-popup.swal2-toast .swal2-icon-text {\n" +
"      font-size: 2em;\n" +
"      font-weight: bold;\n" +
"      line-height: 1em; }\n" +
"    .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n" +
"      width: 2em;\n" +
"      height: 2em; }\n" +
"    .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n" +
"      top: .875em;\n" +
"      width: 1.375em; }\n" +
"      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n" +
"        left: .3125em; }\n" +
"      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n" +
"        right: .3125em; }\n" +
"  .swal2-popup.swal2-toast .swal2-actions {\n" +
"    height: auto;\n" +
"    margin: 0 .3125em; }\n" +
"  .swal2-popup.swal2-toast .swal2-styled {\n" +
"    margin: 0 .3125em;\n" +
"    padding: .3125em .625em;\n" +
"    font-size: 1em; }\n" +
"    .swal2-popup.swal2-toast .swal2-styled:focus {\n" +
"      box-shadow: 0 0 0 0.0625em #fff, 0 0 0 0.125em rgba(50, 100, 150, 0.4); }\n" +
"  .swal2-popup.swal2-toast .swal2-success {\n" +
"    border-color: #a5dc86; }\n" +
"    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {\n" +
"      position: absolute;\n" +
"      width: 2em;\n" +
"      height: 2.8125em;\n" +
"      -webkit-transform: rotate(45deg);\n" +
"              transform: rotate(45deg);\n" +
"      border-radius: 50%; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n" +
"        top: -.25em;\n" +
"        left: -.9375em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg);\n" +
"        -webkit-transform-origin: 2em 2em;\n" +
"                transform-origin: 2em 2em;\n" +
"        border-radius: 4em 0 0 4em; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n" +
"        top: -.25em;\n" +
"        left: .9375em;\n" +
"        -webkit-transform-origin: 0 2em;\n" +
"                transform-origin: 0 2em;\n" +
"        border-radius: 0 4em 4em 0; }\n" +
"    .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n" +
"      width: 2em;\n" +
"      height: 2em; }\n" +
"    .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n" +
"      top: 0;\n" +
"      left: .4375em;\n" +
"      width: .4375em;\n" +
"      height: 2.6875em; }\n" +
"    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {\n" +
"      height: .3125em; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {\n" +
"        top: 1.125em;\n" +
"        left: .1875em;\n" +
"        width: .75em; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {\n" +
"        top: .9375em;\n" +
"        right: .1875em;\n" +
"        width: 1.375em; }\n" +
"  .swal2-popup.swal2-toast.swal2-show {\n" +
"    -webkit-animation: showSweetToast .5s;\n" +
"            animation: showSweetToast .5s; }\n" +
"  .swal2-popup.swal2-toast.swal2-hide {\n" +
"    -webkit-animation: hideSweetToast .2s forwards;\n" +
"            animation: hideSweetToast .2s forwards; }\n" +
"  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip {\n" +
"    -webkit-animation: animate-toast-success-tip .75s;\n" +
"            animation: animate-toast-success-tip .75s; }\n" +
"  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long {\n" +
"    -webkit-animation: animate-toast-success-long .75s;\n" +
"            animation: animate-toast-success-long .75s; }\n" +
"\n" +
"@-webkit-keyframes showSweetToast {\n" +
"  0% {\n" +
"    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n" +
"            transform: translateY(-0.625em) rotateZ(2deg);\n" +
"    opacity: 0; }\n" +
"  33% {\n" +
"    -webkit-transform: translateY(0) rotateZ(-2deg);\n" +
"            transform: translateY(0) rotateZ(-2deg);\n" +
"    opacity: .5; }\n" +
"  66% {\n" +
"    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n" +
"            transform: translateY(0.3125em) rotateZ(2deg);\n" +
"    opacity: .7; }\n" +
"  100% {\n" +
"    -webkit-transform: translateY(0) rotateZ(0);\n" +
"            transform: translateY(0) rotateZ(0);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@keyframes showSweetToast {\n" +
"  0% {\n" +
"    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n" +
"            transform: translateY(-0.625em) rotateZ(2deg);\n" +
"    opacity: 0; }\n" +
"  33% {\n" +
"    -webkit-transform: translateY(0) rotateZ(-2deg);\n" +
"            transform: translateY(0) rotateZ(-2deg);\n" +
"    opacity: .5; }\n" +
"  66% {\n" +
"    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n" +
"            transform: translateY(0.3125em) rotateZ(2deg);\n" +
"    opacity: .7; }\n" +
"  100% {\n" +
"    -webkit-transform: translateY(0) rotateZ(0);\n" +
"            transform: translateY(0) rotateZ(0);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@-webkit-keyframes hideSweetToast {\n" +
"  0% {\n" +
"    opacity: 1; }\n" +
"  33% {\n" +
"    opacity: .5; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateZ(1deg);\n" +
"            transform: rotateZ(1deg);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@keyframes hideSweetToast {\n" +
"  0% {\n" +
"    opacity: 1; }\n" +
"  33% {\n" +
"    opacity: .5; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateZ(1deg);\n" +
"            transform: rotateZ(1deg);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@-webkit-keyframes animate-toast-success-tip {\n" +
"  0% {\n" +
"    top: .5625em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: .125em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: .625em;\n" +
"    left: -.25em;\n" +
"    width: 1.625em; }\n" +
"  84% {\n" +
"    top: 1.0625em;\n" +
"    left: .75em;\n" +
"    width: .5em; }\n" +
"  100% {\n" +
"    top: 1.125em;\n" +
"    left: .1875em;\n" +
"    width: .75em; } }\n" +
"\n" +
"@keyframes animate-toast-success-tip {\n" +
"  0% {\n" +
"    top: .5625em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: .125em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: .625em;\n" +
"    left: -.25em;\n" +
"    width: 1.625em; }\n" +
"  84% {\n" +
"    top: 1.0625em;\n" +
"    left: .75em;\n" +
"    width: .5em; }\n" +
"  100% {\n" +
"    top: 1.125em;\n" +
"    left: .1875em;\n" +
"    width: .75em; } }\n" +
"\n" +
"@-webkit-keyframes animate-toast-success-long {\n" +
"  0% {\n" +
"    top: 1.625em;\n" +
"    right: 1.375em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 1.25em;\n" +
"    right: .9375em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: .9375em;\n" +
"    right: 0;\n" +
"    width: 1.125em; }\n" +
"  100% {\n" +
"    top: .9375em;\n" +
"    right: .1875em;\n" +
"    width: 1.375em; } }\n" +
"\n" +
"@keyframes animate-toast-success-long {\n" +
"  0% {\n" +
"    top: 1.625em;\n" +
"    right: 1.375em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 1.25em;\n" +
"    right: .9375em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: .9375em;\n" +
"    right: 0;\n" +
"    width: 1.125em; }\n" +
"  100% {\n" +
"    top: .9375em;\n" +
"    right: .1875em;\n" +
"    width: 1.375em; } }\n" +
"\n" +
"body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n" +
"  overflow-y: hidden; }\n" +
"\n" +
"body.swal2-height-auto {\n" +
"  height: auto !important; }\n" +
"\n" +
"body.swal2-no-backdrop .swal2-shown {\n" +
"  top: auto;\n" +
"  right: auto;\n" +
"  bottom: auto;\n" +
"  left: auto;\n" +
"  background-color: transparent; }\n" +
"  body.swal2-no-backdrop .swal2-shown > .swal2-modal {\n" +
"    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-top {\n" +
"    top: 0;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-top-start, body.swal2-no-backdrop .swal2-shown.swal2-top-left {\n" +
"    top: 0;\n" +
"    left: 0; }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-top-end, body.swal2-no-backdrop .swal2-shown.swal2-top-right {\n" +
"    top: 0;\n" +
"    right: 0; }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-center {\n" +
"    top: 50%;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translate(-50%, -50%);\n" +
"            transform: translate(-50%, -50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-center-start, body.swal2-no-backdrop .swal2-shown.swal2-center-left {\n" +
"    top: 50%;\n" +
"    left: 0;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-center-end, body.swal2-no-backdrop .swal2-shown.swal2-center-right {\n" +
"    top: 50%;\n" +
"    right: 0;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-bottom {\n" +
"    bottom: 0;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-bottom-start, body.swal2-no-backdrop .swal2-shown.swal2-bottom-left {\n" +
"    bottom: 0;\n" +
"    left: 0; }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-bottom-end, body.swal2-no-backdrop .swal2-shown.swal2-bottom-right {\n" +
"    right: 0;\n" +
"    bottom: 0; }\n" +
"\n" +
".swal2-container {\n" +
"  display: flex;\n" +
"  position: fixed;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  bottom: 0;\n" +
"  left: 0;\n" +
"  flex-direction: row;\n" +
"  align-items: center;\n" +
"  justify-content: center;\n" +
"  padding: 10px;\n" +
"  background-color: transparent;\n" +
"  z-index: 1060;\n" +
"  overflow-x: hidden;\n" +
"  -webkit-overflow-scrolling: touch; }\n" +
"  .swal2-container.swal2-top {\n" +
"    align-items: flex-start; }\n" +
"  .swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n" +
"    align-items: flex-start;\n" +
"    justify-content: flex-start; }\n" +
"  .swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n" +
"    align-items: flex-start;\n" +
"    justify-content: flex-end; }\n" +
"  .swal2-container.swal2-center {\n" +
"    align-items: center; }\n" +
"  .swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n" +
"    align-items: center;\n" +
"    justify-content: flex-start; }\n" +
"  .swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n" +
"    align-items: center;\n" +
"    justify-content: flex-end; }\n" +
"  .swal2-container.swal2-bottom {\n" +
"    align-items: flex-end; }\n" +
"  .swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n" +
"    align-items: flex-end;\n" +
"    justify-content: flex-start; }\n" +
"  .swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n" +
"    align-items: flex-end;\n" +
"    justify-content: flex-end; }\n" +
"  .swal2-container.swal2-grow-fullscreen > .swal2-modal {\n" +
"    display: flex !important;\n" +
"    flex: 1;\n" +
"    align-self: stretch;\n" +
"    justify-content: center; }\n" +
"  .swal2-container.swal2-grow-row > .swal2-modal {\n" +
"    display: flex !important;\n" +
"    flex: 1;\n" +
"    align-content: center;\n" +
"    justify-content: center; }\n" +
"  .swal2-container.swal2-grow-column {\n" +
"    flex: 1;\n" +
"    flex-direction: column; }\n" +
"    .swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n" +
"      align-items: center; }\n" +
"    .swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n" +
"      align-items: flex-start; }\n" +
"    .swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n" +
"      align-items: flex-end; }\n" +
"    .swal2-container.swal2-grow-column > .swal2-modal {\n" +
"      display: flex !important;\n" +
"      flex: 1;\n" +
"      align-content: center;\n" +
"      justify-content: center; }\n" +
"  .swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen) > .swal2-modal {\n" +
"    margin: auto; }\n" +
"  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n" +
"    .swal2-container .swal2-modal {\n" +
"      margin: 0 !important; } }\n" +
"  .swal2-container.swal2-fade {\n" +
"    transition: background-color .1s; }\n" +
"  .swal2-container.swal2-shown {\n" +
"    background-color: rgba(0, 0, 0, 0.4); }\n" +
"\n" +
".swal2-popup {\n" +
"  display: none;\n" +
"  position: relative;\n" +
"  flex-direction: column;\n" +
"  justify-content: center;\n" +
"  width: 32em;\n" +
"  max-width: 100%;\n" +
"  padding: 1.25em;\n" +
"  border-radius: 0.3125em;\n" +
"  background: #fff;\n" +
"  font-family: inherit;\n" +
"  font-size: 1rem;\n" +
"  box-sizing: border-box; }\n" +
"  .swal2-popup:focus {\n" +
"    outline: none; }\n" +
"  .swal2-popup.swal2-loading {\n" +
"    overflow-y: hidden; }\n" +
"  .swal2-popup .swal2-header {\n" +
"    display: flex;\n" +
"    flex-direction: column;\n" +
"    align-items: center; }\n" +
"  .swal2-popup .swal2-title {\n" +
"    display: block;\n" +
"    position: relative;\n" +
"    max-width: 100%;\n" +
"    margin: 0 0 0.4em;\n" +
"    padding: 0;\n" +
"    color: #595959;\n" +
"    font-size: 1.875em;\n" +
"    font-weight: 600;\n" +
"    text-align: center;\n" +
"    text-transform: none;\n" +
"    word-wrap: break-word; }\n" +
"  .swal2-popup .swal2-actions {\n" +
"    flex-wrap: wrap;\n" +
"    align-items: center;\n" +
"    justify-content: center;\n" +
"    margin: 1.25em auto 0;\n" +
"    z-index: 1; }\n" +
"    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n" +
"      opacity: .4; }\n" +
"    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n" +
"      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)); }\n" +
"    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active {\n" +
"      background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)); }\n" +
"    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n" +
"      width: 2.5em;\n" +
"      height: 2.5em;\n" +
"      margin: .46875em;\n" +
"      padding: 0;\n" +
"      border: .25em solid transparent;\n" +
"      border-radius: 100%;\n" +
"      border-color: transparent;\n" +
"      background-color: transparent !important;\n" +
"      color: transparent;\n" +
"      cursor: default;\n" +
"      box-sizing: border-box;\n" +
"      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
"              animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
"      -webkit-user-select: none;\n" +
"         -moz-user-select: none;\n" +
"          -ms-user-select: none;\n" +
"              user-select: none; }\n" +
"    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n" +
"      margin-right: 30px;\n" +
"      margin-left: 30px; }\n" +
"    .swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n" +
"      display: inline-block;\n" +
"      width: 15px;\n" +
"      height: 15px;\n" +
"      margin-left: 5px;\n" +
"      border: 3px solid #999999;\n" +
"      border-radius: 50%;\n" +
"      border-right-color: transparent;\n" +
"      box-shadow: 1px 1px 1px #fff;\n" +
"      content: '';\n" +
"      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
"              animation: swal2-rotate-loading 1.5s linear 0s infinite normal; }\n" +
"  .swal2-popup .swal2-styled {\n" +
"    margin: .3125em;\n" +
"    padding: .625em 2em;\n" +
"    font-weight: 500;\n" +
"    box-shadow: none; }\n" +
"    .swal2-popup .swal2-styled:not([disabled]) {\n" +
"      cursor: pointer; }\n" +
"    .swal2-popup .swal2-styled.swal2-confirm {\n" +
"      border: 0;\n" +
"      border-radius: 0.25em;\n" +
"      background: initial;\n" +
"      background-color: #3085d6;\n" +
"      color: #fff;\n" +
"      font-size: 1.0625em; }\n" +
"    .swal2-popup .swal2-styled.swal2-cancel {\n" +
"      border: 0;\n" +
"      border-radius: 0.25em;\n" +
"      background: initial;\n" +
"      background-color: #aaa;\n" +
"      color: #fff;\n" +
"      font-size: 1.0625em; }\n" +
"    .swal2-popup .swal2-styled:focus {\n" +
"      outline: none;\n" +
"      box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n" +
"    .swal2-popup .swal2-styled::-moz-focus-inner {\n" +
"      border: 0; }\n" +
"  .swal2-popup .swal2-footer {\n" +
"    justify-content: center;\n" +
"    margin: 1.25em 0 0;\n" +
"    padding: 1em 0 0;\n" +
"    border-top: 1px solid #eee;\n" +
"    color: #545454;\n" +
"    font-size: 1em; }\n" +
"  .swal2-popup .swal2-image {\n" +
"    max-width: 100%;\n" +
"    margin: 1.25em auto; }\n" +
"  .swal2-popup .swal2-close {\n" +
"    position: absolute;\n" +
"    top: 0;\n" +
"    right: 0;\n" +
"    justify-content: center;\n" +
"    width: 1.2em;\n" +
"    height: 1.2em;\n" +
"    padding: 0;\n" +
"    transition: color 0.1s ease-out;\n" +
"    border: none;\n" +
"    border-radius: 0;\n" +
"    background: transparent;\n" +
"    color: #cccccc;\n" +
"    font-family: serif;\n" +
"    font-size: 2.5em;\n" +
"    line-height: 1.2;\n" +
"    cursor: pointer;\n" +
"    overflow: hidden; }\n" +
"    .swal2-popup .swal2-close:hover {\n" +
"      -webkit-transform: none;\n" +
"              transform: none;\n" +
"      color: #f27474; }\n" +
"  .swal2-popup > .swal2-input,\n" +
"  .swal2-popup > .swal2-file,\n" +
"  .swal2-popup > .swal2-textarea,\n" +
"  .swal2-popup > .swal2-select,\n" +
"  .swal2-popup > .swal2-radio,\n" +
"  .swal2-popup > .swal2-checkbox {\n" +
"    display: none; }\n" +
"  .swal2-popup .swal2-content {\n" +
"    justify-content: center;\n" +
"    margin: 0;\n" +
"    padding: 0;\n" +
"    color: #545454;\n" +
"    font-size: 1.125em;\n" +
"    font-weight: 300;\n" +
"    line-height: normal;\n" +
"    z-index: 1;\n" +
"    word-wrap: break-word; }\n" +
"  .swal2-popup #swal2-content {\n" +
"    text-align: center; }\n" +
"  .swal2-popup .swal2-input,\n" +
"  .swal2-popup .swal2-file,\n" +
"  .swal2-popup .swal2-textarea,\n" +
"  .swal2-popup .swal2-select,\n" +
"  .swal2-popup .swal2-radio,\n" +
"  .swal2-popup .swal2-checkbox {\n" +
"    margin: 1em auto; }\n" +
"  .swal2-popup .swal2-input,\n" +
"  .swal2-popup .swal2-file,\n" +
"  .swal2-popup .swal2-textarea {\n" +
"    width: 100%;\n" +
"    transition: border-color .3s, box-shadow .3s;\n" +
"    border: 1px solid #d9d9d9;\n" +
"    border-radius: 0.1875em;\n" +
"    font-size: 1.125em;\n" +
"    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n" +
"    box-sizing: border-box; }\n" +
"    .swal2-popup .swal2-input.swal2-inputerror,\n" +
"    .swal2-popup .swal2-file.swal2-inputerror,\n" +
"    .swal2-popup .swal2-textarea.swal2-inputerror {\n" +
"      border-color: #f27474 !important;\n" +
"      box-shadow: 0 0 2px #f27474 !important; }\n" +
"    .swal2-popup .swal2-input:focus,\n" +
"    .swal2-popup .swal2-file:focus,\n" +
"    .swal2-popup .swal2-textarea:focus {\n" +
"      border: 1px solid #b4dbed;\n" +
"      outline: none;\n" +
"      box-shadow: 0 0 3px #c4e6f5; }\n" +
"    .swal2-popup .swal2-input::-webkit-input-placeholder,\n" +
"    .swal2-popup .swal2-file::-webkit-input-placeholder,\n" +
"    .swal2-popup .swal2-textarea::-webkit-input-placeholder {\n" +
"      color: #cccccc; }\n" +
"    .swal2-popup .swal2-input:-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-file:-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-textarea:-ms-input-placeholder {\n" +
"      color: #cccccc; }\n" +
"    .swal2-popup .swal2-input::-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-file::-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-textarea::-ms-input-placeholder {\n" +
"      color: #cccccc; }\n" +
"    .swal2-popup .swal2-input::placeholder,\n" +
"    .swal2-popup .swal2-file::placeholder,\n" +
"    .swal2-popup .swal2-textarea::placeholder {\n" +
"      color: #cccccc; }\n" +
"  .swal2-popup .swal2-range input {\n" +
"    width: 80%; }\n" +
"  .swal2-popup .swal2-range output {\n" +
"    width: 20%;\n" +
"    font-weight: 600;\n" +
"    text-align: center; }\n" +
"  .swal2-popup .swal2-range input,\n" +
"  .swal2-popup .swal2-range output {\n" +
"    height: 2.625em;\n" +
"    margin: 1em auto;\n" +
"    padding: 0;\n" +
"    font-size: 1.125em;\n" +
"    line-height: 2.625em; }\n" +
"  .swal2-popup .swal2-input {\n" +
"    height: 2.625em;\n" +
"    padding: 0 0.75em; }\n" +
"    .swal2-popup .swal2-input[type='number'] {\n" +
"      max-width: 10em; }\n" +
"  .swal2-popup .swal2-file {\n" +
"    font-size: 1.125em; }\n" +
"  .swal2-popup .swal2-textarea {\n" +
"    height: 6.75em;\n" +
"    padding: 0.75em; }\n" +
"  .swal2-popup .swal2-select {\n" +
"    min-width: 50%;\n" +
"    max-width: 100%;\n" +
"    padding: .375em .625em;\n" +
"    color: #545454;\n" +
"    font-size: 1.125em; }\n" +
"  .swal2-popup .swal2-radio,\n" +
"  .swal2-popup .swal2-checkbox {\n" +
"    align-items: center;\n" +
"    justify-content: center; }\n" +
"    .swal2-popup .swal2-radio label,\n" +
"    .swal2-popup .swal2-checkbox label {\n" +
"      margin: 0 .6em;\n" +
"      font-size: 1.125em; }\n" +
"    .swal2-popup .swal2-radio input,\n" +
"    .swal2-popup .swal2-checkbox input {\n" +
"      margin: 0 .4em; }\n" +
"  .swal2-popup .swal2-validationerror {\n" +
"    display: none;\n" +
"    align-items: center;\n" +
"    justify-content: center;\n" +
"    padding: 0.625em;\n" +
"    background: #f0f0f0;\n" +
"    color: #666666;\n" +
"    font-size: 1em;\n" +
"    font-weight: 300;\n" +
"    overflow: hidden; }\n" +
"    .swal2-popup .swal2-validationerror::before {\n" +
"      display: inline-block;\n" +
"      width: 1.5em;\n" +
"      min-width: 1.5em;\n" +
"      height: 1.5em;\n" +
"      margin: 0 .625em;\n" +
"      border-radius: 50%;\n" +
"      background-color: #f27474;\n" +
"      color: #fff;\n" +
"      font-weight: 600;\n" +
"      line-height: 1.5em;\n" +
"      text-align: center;\n" +
"      content: '!';\n" +
"      zoom: normal; }\n" +
"\n" +
"@supports (-ms-accelerator: true) {\n" +
"  .swal2-range input {\n" +
"    width: 100% !important; }\n" +
"  .swal2-range output {\n" +
"    display: none; } }\n" +
"\n" +
"@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n" +
"  .swal2-range input {\n" +
"    width: 100% !important; }\n" +
"  .swal2-range output {\n" +
"    display: none; } }\n" +
"\n" +
"@-moz-document url-prefix() {\n" +
"  .swal2-close:focus {\n" +
"    outline: 2px solid rgba(50, 100, 150, 0.4); } }\n" +
"\n" +
".swal2-icon {\n" +
"  position: relative;\n" +
"  justify-content: center;\n" +
"  width: 5em;\n" +
"  height: 5em;\n" +
"  margin: 1.25em auto 1.875em;\n" +
"  border: .25em solid transparent;\n" +
"  border-radius: 50%;\n" +
"  line-height: 5em;\n" +
"  cursor: default;\n" +
"  box-sizing: content-box;\n" +
"  -webkit-user-select: none;\n" +
"     -moz-user-select: none;\n" +
"      -ms-user-select: none;\n" +
"          user-select: none;\n" +
"  zoom: normal; }\n" +
"  .swal2-icon-text {\n" +
"    font-size: 3.75em; }\n" +
"  .swal2-icon.swal2-error {\n" +
"    border-color: #f27474; }\n" +
"    .swal2-icon.swal2-error .swal2-x-mark {\n" +
"      position: relative;\n" +
"      flex-grow: 1; }\n" +
"    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n" +
"      display: block;\n" +
"      position: absolute;\n" +
"      top: 2.3125em;\n" +
"      width: 2.9375em;\n" +
"      height: .3125em;\n" +
"      border-radius: .125em;\n" +
"      background-color: #f27474; }\n" +
"      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n" +
"        left: 1.0625em;\n" +
"        -webkit-transform: rotate(45deg);\n" +
"                transform: rotate(45deg); }\n" +
"      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n" +
"        right: 1em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg); }\n" +
"  .swal2-icon.swal2-warning {\n" +
"    border-color: #facea8;\n" +
"    color: #f8bb86; }\n" +
"  .swal2-icon.swal2-info {\n" +
"    border-color: #9de0f6;\n" +
"    color: #3fc3ee; }\n" +
"  .swal2-icon.swal2-question {\n" +
"    border-color: #c9dae1;\n" +
"    color: #87adbd; }\n" +
"  .swal2-icon.swal2-success {\n" +
"    border-color: #a5dc86; }\n" +
"    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n" +
"      position: absolute;\n" +
"      width: 3.75em;\n" +
"      height: 7.5em;\n" +
"      -webkit-transform: rotate(45deg);\n" +
"              transform: rotate(45deg);\n" +
"      border-radius: 50%; }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n" +
"        top: -.4375em;\n" +
"        left: -2.0635em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg);\n" +
"        -webkit-transform-origin: 3.75em 3.75em;\n" +
"                transform-origin: 3.75em 3.75em;\n" +
"        border-radius: 7.5em 0 0 7.5em; }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n" +
"        top: -.6875em;\n" +
"        left: 1.875em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg);\n" +
"        -webkit-transform-origin: 0 3.75em;\n" +
"                transform-origin: 0 3.75em;\n" +
"        border-radius: 0 7.5em 7.5em 0; }\n" +
"    .swal2-icon.swal2-success .swal2-success-ring {\n" +
"      position: absolute;\n" +
"      top: -.25em;\n" +
"      left: -.25em;\n" +
"      width: 100%;\n" +
"      height: 100%;\n" +
"      border: 0.25em solid rgba(165, 220, 134, 0.3);\n" +
"      border-radius: 50%;\n" +
"      z-index: 2;\n" +
"      box-sizing: content-box; }\n" +
"    .swal2-icon.swal2-success .swal2-success-fix {\n" +
"      position: absolute;\n" +
"      top: .5em;\n" +
"      left: 1.625em;\n" +
"      width: .4375em;\n" +
"      height: 5.625em;\n" +
"      -webkit-transform: rotate(-45deg);\n" +
"              transform: rotate(-45deg);\n" +
"      z-index: 1; }\n" +
"    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n" +
"      display: block;\n" +
"      position: absolute;\n" +
"      height: .3125em;\n" +
"      border-radius: .125em;\n" +
"      background-color: #a5dc86;\n" +
"      z-index: 2; }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n" +
"        top: 2.875em;\n" +
"        left: .875em;\n" +
"        width: 1.5625em;\n" +
"        -webkit-transform: rotate(45deg);\n" +
"                transform: rotate(45deg); }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n" +
"        top: 2.375em;\n" +
"        right: .5em;\n" +
"        width: 2.9375em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg); }\n" +
"\n" +
".swal2-progresssteps {\n" +
"  align-items: center;\n" +
"  margin: 0 0 1.25em;\n" +
"  padding: 0;\n" +
"  font-weight: 600; }\n" +
"  .swal2-progresssteps li {\n" +
"    display: inline-block;\n" +
"    position: relative; }\n" +
"  .swal2-progresssteps .swal2-progresscircle {\n" +
"    width: 2em;\n" +
"    height: 2em;\n" +
"    border-radius: 2em;\n" +
"    background: #3085d6;\n" +
"    color: #fff;\n" +
"    line-height: 2em;\n" +
"    text-align: center;\n" +
"    z-index: 20; }\n" +
"    .swal2-progresssteps .swal2-progresscircle:first-child {\n" +
"      margin-left: 0; }\n" +
"    .swal2-progresssteps .swal2-progresscircle:last-child {\n" +
"      margin-right: 0; }\n" +
"    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n" +
"      background: #3085d6; }\n" +
"      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n" +
"        background: #add8e6; }\n" +
"      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n" +
"        background: #add8e6; }\n" +
"  .swal2-progresssteps .swal2-progressline {\n" +
"    width: 2.5em;\n" +
"    height: .4em;\n" +
"    margin: 0 -1px;\n" +
"    background: #3085d6;\n" +
"    z-index: 10; }\n" +
"\n" +
"[class^='swal2'] {\n" +
"  -webkit-tap-highlight-color: transparent; }\n" +
"\n" +
".swal2-show {\n" +
"  -webkit-animation: swal2-show 0.3s;\n" +
"          animation: swal2-show 0.3s; }\n" +
"  .swal2-show.swal2-noanimation {\n" +
"    -webkit-animation: none;\n" +
"            animation: none; }\n" +
"\n" +
".swal2-hide {\n" +
"  -webkit-animation: swal2-hide 0.15s forwards;\n" +
"          animation: swal2-hide 0.15s forwards; }\n" +
"  .swal2-hide.swal2-noanimation {\n" +
"    -webkit-animation: none;\n" +
"            animation: none; }\n" +
"\n" +
"[dir='rtl'] .swal2-close {\n" +
"  right: auto;\n" +
"  left: 0; }\n" +
"\n" +
".swal2-animate-success-icon .swal2-success-line-tip {\n" +
"  -webkit-animation: swal2-animate-success-line-tip 0.75s;\n" +
"          animation: swal2-animate-success-line-tip 0.75s; }\n" +
"\n" +
".swal2-animate-success-icon .swal2-success-line-long {\n" +
"  -webkit-animation: swal2-animate-success-line-long 0.75s;\n" +
"          animation: swal2-animate-success-line-long 0.75s; }\n" +
"\n" +
".swal2-animate-success-icon .swal2-success-circular-line-right {\n" +
"  -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;\n" +
"          animation: swal2-rotate-success-circular-line 4.25s ease-in; }\n" +
"\n" +
".swal2-animate-error-icon {\n" +
"  -webkit-animation: swal2-animate-error-icon 0.5s;\n" +
"          animation: swal2-animate-error-icon 0.5s; }\n" +
"  .swal2-animate-error-icon .swal2-x-mark {\n" +
"    -webkit-animation: swal2-animate-error-x-mark 0.5s;\n" +
"            animation: swal2-animate-error-x-mark 0.5s; }\n" +
"\n" +
"@-webkit-keyframes swal2-rotate-loading {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(0deg);\n" +
"            transform: rotate(0deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(360deg);\n" +
"            transform: rotate(360deg); } }\n" +
"\n" +
"@keyframes swal2-rotate-loading {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(0deg);\n" +
"            transform: rotate(0deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(360deg);\n" +
"            transform: rotate(360deg); } }");
},{}],2:[function(require,module,exports){
"use strict";

var _sweetalert = _interopRequireDefault(require("sweetalert2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Handle contact form submission listener
var formSubmit = function formSubmit() {
  $("form").on("submit", function (event) {
    // send info to focuspocus
    $.post($(this).attr("action"), $(this).serialize(), "json"); // prevent focus pocus popup and page reload

    event.preventDefault(); // sweet alert to let user know all is well

    (0, _sweetalert.default)({
      type: "success",
      title: "Message Sent!",
      text: "Thank you for your message. I will get back to you shortly."
    });
    $("form")[0].reset();
  });
}; // Smooth scroll listener


var smoothScroll = function smoothScroll() {
  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top
    }, 900, "swing");
  });
}; // Hamburger menu listener


var hamburgerToggle = function hamburgerToggle() {
  $(".hamburger").on("click", function (e) {
    $(".hamburger").toggleClass("is-active");
    $(".nav-sections").toggleClass("toggle");
  });
}; // Reveal animations


var reveal = function reveal() {
  ScrollReveal().reveal(".nav-bar", {
    delay: 50
  });
  ScrollReveal().reveal(".landing-page-body", {
    reset: true,
    delay: 50
  });
  ScrollReveal().reveal(".get-started", {
    reset: true,
    delay: 50
  });
  ScrollReveal().reveal(".bio", {
    reset: true
  });
  ScrollReveal().reveal(".skills", {
    reset: true
  });
  ScrollReveal().reveal(".project", {
    reset: true
  });
}; // Init function for all listeners


var init = function init() {
  hamburgerToggle();
  smoothScroll();
  formSubmit();
  reveal();
}; // Doc ready


$(function () {
  init();
});

},{"sweetalert2":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvZGlzdC9zd2VldGFsZXJ0Mi5hbGwuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdm5IQTs7OztBQUVBO0FBQ0EsSUFBTSxVQUFVLEdBQUcsU0FBYixVQUFhLEdBQU07QUFDdkIsRUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsRUFBVixDQUFhLFFBQWIsRUFBdUIsVUFBUyxLQUFULEVBQWdCO0FBQ3JDO0FBQ0EsSUFBQSxDQUFDLENBQUMsSUFBRixDQUFPLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxJQUFSLENBQWEsUUFBYixDQUFQLEVBQStCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxTQUFSLEVBQS9CLEVBQW9ELE1BQXBELEVBRnFDLENBR3JDOztBQUNBLElBQUEsS0FBSyxDQUFDLGNBQU4sR0FKcUMsQ0FLckM7O0FBQ0EsNkJBQUs7QUFDSCxNQUFBLElBQUksRUFBRSxTQURIO0FBRUgsTUFBQSxLQUFLLEVBQUUsZUFGSjtBQUdILE1BQUEsSUFBSSxFQUFFO0FBSEgsS0FBTDtBQUtBLElBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLENBQVYsRUFBYSxLQUFiO0FBQ0QsR0FaRDtBQWFELENBZEQsQyxDQWdCQTs7O0FBQ0EsSUFBTSxZQUFZLEdBQUcsU0FBZixZQUFlLEdBQU07QUFDekIsRUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVksRUFBWixDQUFlLE9BQWYsRUFBd0IsY0FBeEIsRUFBd0MsVUFBUyxLQUFULEVBQWdCO0FBQ3RELElBQUEsS0FBSyxDQUFDLGNBQU47QUFFQSxJQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsT0FBaEIsQ0FDRTtBQUNFLE1BQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRixDQUFPLElBQVAsRUFBYSxNQUFiLENBQUQsQ0FBRCxDQUF3QixNQUF4QixHQUFpQztBQUQ5QyxLQURGLEVBSUUsR0FKRixFQUtFLE9BTEY7QUFPRCxHQVZEO0FBV0QsQ0FaRCxDLENBY0E7OztBQUNBLElBQU0sZUFBZSxHQUFHLFNBQWxCLGVBQWtCLEdBQU07QUFDNUIsRUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFVBQVMsQ0FBVCxFQUFZO0FBQ3RDLElBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixXQUFoQixDQUE0QixXQUE1QjtBQUNBLElBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQixXQUFuQixDQUErQixRQUEvQjtBQUNELEdBSEQ7QUFJRCxDQUxELEMsQ0FPQTs7O0FBQ0EsSUFBTSxNQUFNLEdBQUcsU0FBVCxNQUFTLEdBQU07QUFDbkIsRUFBQSxZQUFZLEdBQUcsTUFBZixDQUFzQixVQUF0QixFQUFrQztBQUFFLElBQUEsS0FBSyxFQUFFO0FBQVQsR0FBbEM7QUFDQSxFQUFBLFlBQVksR0FBRyxNQUFmLENBQXNCLG9CQUF0QixFQUE0QztBQUFFLElBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZSxJQUFBLEtBQUssRUFBRTtBQUF0QixHQUE1QztBQUNBLEVBQUEsWUFBWSxHQUFHLE1BQWYsQ0FBc0IsY0FBdEIsRUFBc0M7QUFBRSxJQUFBLEtBQUssRUFBRSxJQUFUO0FBQWUsSUFBQSxLQUFLLEVBQUU7QUFBdEIsR0FBdEM7QUFDQSxFQUFBLFlBQVksR0FBRyxNQUFmLENBQXNCLE1BQXRCLEVBQThCO0FBQUUsSUFBQSxLQUFLLEVBQUU7QUFBVCxHQUE5QjtBQUNBLEVBQUEsWUFBWSxHQUFHLE1BQWYsQ0FBc0IsU0FBdEIsRUFBaUM7QUFBRSxJQUFBLEtBQUssRUFBRTtBQUFULEdBQWpDO0FBQ0EsRUFBQSxZQUFZLEdBQUcsTUFBZixDQUFzQixVQUF0QixFQUFrQztBQUFFLElBQUEsS0FBSyxFQUFFO0FBQVQsR0FBbEM7QUFDRCxDQVBELEMsQ0FTQTs7O0FBQ0EsSUFBTSxJQUFJLEdBQUcsU0FBUCxJQUFPLEdBQU07QUFDakIsRUFBQSxlQUFlO0FBQ2YsRUFBQSxZQUFZO0FBQ1osRUFBQSxVQUFVO0FBQ1YsRUFBQSxNQUFNO0FBQ1AsQ0FMRCxDLENBT0E7OztBQUNBLENBQUMsQ0FBQyxZQUFXO0FBQ1gsRUFBQSxJQUFJO0FBQ0wsQ0FGQSxDQUFEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyohXG4qIHN3ZWV0YWxlcnQyIHY3LjI2LjI4XG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuU3dlZXRhbGVydDIgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbnZhciBjb25zb2xlUHJlZml4ID0gJ1N3ZWV0QWxlcnQyOic7XG4vKipcbiAqIEZpbHRlciB0aGUgdW5pcXVlIHZhbHVlcyBpbnRvIGEgbmV3IGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKi9cblxudmFyIHVuaXF1ZUFycmF5ID0gZnVuY3Rpb24gdW5pcXVlQXJyYXkoYXJyKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyZXN1bHQuaW5kZXhPZihhcnJbaV0pID09PSAtMSkge1xuICAgICAgcmVzdWx0LnB1c2goYXJyW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbi8qKlxuICogQ29udmVydCBOb2RlTGlzdCB0byBBcnJheVxuICogQHBhcmFtIG5vZGVMaXN0XG4gKi9cblxudmFyIHRvQXJyYXkgPSBmdW5jdGlvbiB0b0FycmF5KG5vZGVMaXN0KSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdCk7XG59O1xuLyoqXG4qIENvbnZlcnRzIGBpbnB1dE9wdGlvbnNgIGludG8gYW4gYXJyYXkgb2YgYFt2YWx1ZSwgbGFiZWxdYHNcbiogQHBhcmFtIGlucHV0T3B0aW9uc1xuKi9cblxudmFyIGZvcm1hdElucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIGZvcm1hdElucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGlmICh0eXBlb2YgTWFwICE9PSAndW5kZWZpbmVkJyAmJiBpbnB1dE9wdGlvbnMgaW5zdGFuY2VvZiBNYXApIHtcbiAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgcmVzdWx0LnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBPYmplY3Qua2V5cyhpbnB1dE9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmVzdWx0LnB1c2goW2tleSwgaW5wdXRPcHRpb25zW2tleV1dKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiBTdGFuZGFyZGlzZSBjb25zb2xlIHdhcm5pbmdzXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG5cbnZhciB3YXJuID0gZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gIGNvbnNvbGUud2FybihcIlwiLmNvbmNhdChjb25zb2xlUHJlZml4LCBcIiBcIikuY29uY2F0KG1lc3NhZ2UpKTtcbn07XG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgZXJyb3JzXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG5cbnZhciBlcnJvciA9IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5lcnJvcihcIlwiLmNvbmNhdChjb25zb2xlUHJlZml4LCBcIiBcIikuY29uY2F0KG1lc3NhZ2UpKTtcbn07XG4vKipcbiAqIFByaXZhdGUgZ2xvYmFsIHN0YXRlIGZvciBgd2Fybk9uY2VgXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMgPSBbXTtcbi8qKlxuICogU2hvdyBhIGNvbnNvbGUgd2FybmluZywgYnV0IG9ubHkgaWYgaXQgaGFzbid0IGFscmVhZHkgYmVlbiBzaG93blxuICogQHBhcmFtIG1lc3NhZ2VcbiAqL1xuXG52YXIgd2Fybk9uY2UgPSBmdW5jdGlvbiB3YXJuT25jZShtZXNzYWdlKSB7XG4gIGlmICghKHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpICE9PSAtMSkpIHtcbiAgICBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICB3YXJuKG1lc3NhZ2UpO1xuICB9XG59O1xuLyoqXG4gKiBJZiBgYXJnYCBpcyBhIGZ1bmN0aW9uLCBjYWxsIGl0ICh3aXRoIG5vIGFyZ3VtZW50cyBvciBjb250ZXh0KSBhbmQgcmV0dXJuIHRoZSByZXN1bHQuXG4gKiBPdGhlcndpc2UsIGp1c3QgcGFzcyB0aGUgdmFsdWUgdGhyb3VnaFxuICogQHBhcmFtIGFyZ1xuICovXG5cbnZhciBjYWxsSWZGdW5jdGlvbiA9IGZ1bmN0aW9uIGNhbGxJZkZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZygpIDogYXJnO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gaXNUaGVuYWJsZShhcmcpIHtcbiAgcmV0dXJuIF90eXBlb2YoYXJnKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGFyZy50aGVuID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIERpc21pc3NSZWFzb24gPSBPYmplY3QuZnJlZXplKHtcbiAgY2FuY2VsOiAnY2FuY2VsJyxcbiAgYmFja2Ryb3A6ICdvdmVybGF5JyxcbiAgY2xvc2U6ICdjbG9zZScsXG4gIGVzYzogJ2VzYycsXG4gIHRpbWVyOiAndGltZXInXG59KTtcblxudmFyIHZlcnNpb24gPSBcIjcuMjYuMjhcIjtcblxudmFyIGFyZ3NUb1BhcmFtcyA9IGZ1bmN0aW9uIGFyZ3NUb1BhcmFtcyhhcmdzKSB7XG4gIHZhciBwYXJhbXMgPSB7fTtcblxuICBzd2l0Y2ggKF90eXBlb2YoYXJnc1swXSkpIHtcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgX2V4dGVuZHMocGFyYW1zLCBhcmdzWzBdKTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgWyd0aXRsZScsICdodG1sJywgJ3R5cGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICAgICAgICBzd2l0Y2ggKF90eXBlb2YoYXJnc1tpbmRleF0pKSB7XG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHBhcmFtc1tuYW1lXSA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZXJyb3IoXCJVbmV4cGVjdGVkIHR5cGUgb2YgXCIuY29uY2F0KG5hbWUsIFwiISBFeHBlY3RlZCBcXFwic3RyaW5nXFxcIiwgZ290IFwiKS5jb25jYXQoX3R5cGVvZihhcmdzW2luZGV4XSkpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1zO1xufTtcblxuLyoqXG4gKiBBZGFwdCBhIGxlZ2FjeSBpbnB1dFZhbGlkYXRvciBmb3IgdXNlIHdpdGggZXhwZWN0UmVqZWN0aW9ucz1mYWxzZVxuICovXG52YXIgYWRhcHRJbnB1dFZhbGlkYXRvciA9IGZ1bmN0aW9uIGFkYXB0SW5wdXRWYWxpZGF0b3IobGVnYWN5VmFsaWRhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiBhZGFwdGVkSW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgZXh0cmFQYXJhbXMpIHtcbiAgICByZXR1cm4gbGVnYWN5VmFsaWRhdG9yLmNhbGwodGhpcywgaW5wdXRWYWx1ZSwgZXh0cmFQYXJhbXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCBmdW5jdGlvbiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGlvbkVycm9yO1xuICAgIH0pO1xuICB9O1xufTtcblxudmFyIHN3YWxQcmVmaXggPSAnc3dhbDItJztcbnZhciBwcmVmaXggPSBmdW5jdGlvbiBwcmVmaXgoaXRlbXMpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gaXRlbXMpIHtcbiAgICByZXN1bHRbaXRlbXNbaV1dID0gc3dhbFByZWZpeCArIGl0ZW1zW2ldO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgc3dhbENsYXNzZXMgPSBwcmVmaXgoWydjb250YWluZXInLCAnc2hvd24nLCAnaGVpZ2h0LWF1dG8nLCAnaW9zZml4JywgJ3BvcHVwJywgJ21vZGFsJywgJ25vLWJhY2tkcm9wJywgJ3RvYXN0JywgJ3RvYXN0LXNob3duJywgJ3RvYXN0LWNvbHVtbicsICdmYWRlJywgJ3Nob3cnLCAnaGlkZScsICdub2FuaW1hdGlvbicsICdjbG9zZScsICd0aXRsZScsICdoZWFkZXInLCAnY29udGVudCcsICdhY3Rpb25zJywgJ2NvbmZpcm0nLCAnY2FuY2VsJywgJ2Zvb3RlcicsICdpY29uJywgJ2ljb24tdGV4dCcsICdpbWFnZScsICdpbnB1dCcsICdmaWxlJywgJ3JhbmdlJywgJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveCcsICdsYWJlbCcsICd0ZXh0YXJlYScsICdpbnB1dGVycm9yJywgJ3ZhbGlkYXRpb25lcnJvcicsICdwcm9ncmVzc3N0ZXBzJywgJ2FjdGl2ZXByb2dyZXNzc3RlcCcsICdwcm9ncmVzc2NpcmNsZScsICdwcm9ncmVzc2xpbmUnLCAnbG9hZGluZycsICdzdHlsZWQnLCAndG9wJywgJ3RvcC1zdGFydCcsICd0b3AtZW5kJywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCcsICdjZW50ZXInLCAnY2VudGVyLXN0YXJ0JywgJ2NlbnRlci1lbmQnLCAnY2VudGVyLWxlZnQnLCAnY2VudGVyLXJpZ2h0JywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLCAnYm90dG9tLWVuZCcsICdib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAnZ3Jvdy1yb3cnLCAnZ3Jvdy1jb2x1bW4nLCAnZ3Jvdy1mdWxsc2NyZWVuJ10pO1xudmFyIGljb25UeXBlcyA9IHByZWZpeChbJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdpbmZvJywgJ3F1ZXN0aW9uJywgJ2Vycm9yJ10pO1xuXG52YXIgc3RhdGVzID0ge1xuICBwcmV2aW91c0JvZHlQYWRkaW5nOiBudWxsXG59O1xudmFyIGhhc0NsYXNzID0gZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xufTtcbnZhciBmb2N1c0lucHV0ID0gZnVuY3Rpb24gZm9jdXNJbnB1dChpbnB1dCkge1xuICBpbnB1dC5mb2N1cygpOyAvLyBwbGFjZSBjdXJzb3IgYXQgZW5kIG9mIHRleHQgaW4gdGV4dCBpbnB1dFxuXG4gIGlmIChpbnB1dC50eXBlICE9PSAnZmlsZScpIHtcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMzQ1OTE1LzEzMzE0MjVcbiAgICB2YXIgdmFsID0gaW5wdXQudmFsdWU7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICBpbnB1dC52YWx1ZSA9IHZhbDtcbiAgfVxufTtcblxudmFyIGFkZE9yUmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiBhZGRPclJlbW92ZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0LCBhZGQpIHtcbiAgaWYgKCF0YXJnZXQgfHwgIWNsYXNzTGlzdCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09PSAnc3RyaW5nJykge1xuICAgIGNsYXNzTGlzdCA9IGNsYXNzTGlzdC5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbiAgfVxuXG4gIGNsYXNzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAodGFyZ2V0LmZvckVhY2gpIHtcbiAgICAgIHRhcmdldC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIGFkZCA/IGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkID8gdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSA6IHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKHRhcmdldCwgY2xhc3NMaXN0KSB7XG4gIGFkZE9yUmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIHRydWUpO1xufTtcbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0KSB7XG4gIGFkZE9yUmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIGZhbHNlKTtcbn07XG52YXIgZ2V0Q2hpbGRCeUNsYXNzID0gZnVuY3Rpb24gZ2V0Q2hpbGRCeUNsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChoYXNDbGFzcyhlbGVtLmNoaWxkTm9kZXNbaV0sIGNsYXNzTmFtZSkpIHtcbiAgICAgIHJldHVybiBlbGVtLmNoaWxkTm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xudmFyIHNob3cgPSBmdW5jdGlvbiBzaG93KGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9IGVsZW0uaWQgPT09IHN3YWxDbGFzc2VzLmNvbnRlbnQgPyAnYmxvY2snIDogJ2ZsZXgnO1xufTtcbnZhciBoaWRlID0gZnVuY3Rpb24gaGlkZShlbGVtKSB7XG4gIGVsZW0uc3R5bGUub3BhY2l0eSA9ICcnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59OyAvLyBib3Jyb3dlZCBmcm9tIGpxdWVyeSAkKGVsZW0pLmlzKCc6dmlzaWJsZScpIGltcGxlbWVudGF0aW9uXG5cbnZhciBpc1Zpc2libGUgPSBmdW5jdGlvbiBpc1Zpc2libGUoZWxlbSkge1xuICByZXR1cm4gZWxlbSAmJiAoZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcbn07XG52YXIgcmVtb3ZlU3R5bGVQcm9wZXJ0eSA9IGZ1bmN0aW9uIHJlbW92ZVN0eWxlUHJvcGVydHkoZWxlbSwgcHJvcGVydHkpIHtcbiAgaWYgKGVsZW0uc3R5bGUucmVtb3ZlUHJvcGVydHkpIHtcbiAgICBlbGVtLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3BlcnR5KTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtLnN0eWxlLnJlbW92ZUF0dHJpYnV0ZShwcm9wZXJ0eSk7XG4gIH1cbn07XG5cbnZhciBnZXRDb250YWluZXIgPSBmdW5jdGlvbiBnZXRDb250YWluZXIoKSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMuY29udGFpbmVyKTtcbn07XG5cbnZhciBlbGVtZW50QnlDbGFzcyA9IGZ1bmN0aW9uIGVsZW1lbnRCeUNsYXNzKGNsYXNzTmFtZSkge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHJldHVybiBjb250YWluZXIgPyBjb250YWluZXIucXVlcnlTZWxlY3RvcignLicgKyBjbGFzc05hbWUpIDogbnVsbDtcbn07XG5cbnZhciBnZXRQb3B1cCA9IGZ1bmN0aW9uIGdldFBvcHVwKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMucG9wdXApO1xufTtcbnZhciBnZXRJY29ucyA9IGZ1bmN0aW9uIGdldEljb25zKCkge1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICByZXR1cm4gdG9BcnJheShwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHN3YWxDbGFzc2VzLmljb24pKTtcbn07XG52YXIgZ2V0VGl0bGUgPSBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnRpdGxlKTtcbn07XG52YXIgZ2V0Q29udGVudCA9IGZ1bmN0aW9uIGdldENvbnRlbnQoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jb250ZW50KTtcbn07XG52YXIgZ2V0SW1hZ2UgPSBmdW5jdGlvbiBnZXRJbWFnZSgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmltYWdlKTtcbn07XG52YXIgZ2V0UHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIGdldFByb2dyZXNzU3RlcHMoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5wcm9ncmVzc3N0ZXBzKTtcbn07XG52YXIgZ2V0VmFsaWRhdGlvbkVycm9yID0gZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbkVycm9yKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMudmFsaWRhdGlvbmVycm9yKTtcbn07XG52YXIgZ2V0Q29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENvbmZpcm1CdXR0b24oKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jb25maXJtKTtcbn07XG52YXIgZ2V0Q2FuY2VsQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q2FuY2VsQnV0dG9uKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY2FuY2VsKTtcbn07XG4vKiBAZGVwcmVjYXRlZCAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG52YXIgZ2V0QnV0dG9uc1dyYXBwZXIgPSBmdW5jdGlvbiBnZXRCdXR0b25zV3JhcHBlcigpIHtcbiAgd2Fybk9uY2UoXCJzd2FsLmdldEJ1dHRvbnNXcmFwcGVyKCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UsIHVzZSBzd2FsLmdldEFjdGlvbnMoKSBpbnN0ZWFkXCIpO1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuYWN0aW9ucyk7XG59O1xudmFyIGdldEFjdGlvbnMgPSBmdW5jdGlvbiBnZXRBY3Rpb25zKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuYWN0aW9ucyk7XG59O1xudmFyIGdldEZvb3RlciA9IGZ1bmN0aW9uIGdldEZvb3RlcigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmZvb3Rlcik7XG59O1xudmFyIGdldENsb3NlQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q2xvc2VCdXR0b24oKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jbG9zZSk7XG59O1xudmFyIGdldEZvY3VzYWJsZUVsZW1lbnRzID0gZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKSB7XG4gIHZhciBmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleCA9IHRvQXJyYXkoZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yQWxsKCdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFt0YWJpbmRleD1cIjBcIl0pJykpIC8vIHNvcnQgYWNjb3JkaW5nIHRvIHRhYmluZGV4XG4gIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgYSA9IHBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcbiAgICBiID0gcGFyc2VJbnQoYi5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpO1xuXG4gICAgaWYgKGEgPiBiKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH0pOyAvLyBodHRwczovL2dpdGh1Yi5jb20vamt1cC9mb2N1c2FibGUvYmxvYi9tYXN0ZXIvaW5kZXguanNcblxuICB2YXIgb3RoZXJGb2N1c2FibGVFbGVtZW50cyA9IHRvQXJyYXkoZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZdLCBhcmVhW2hyZWZdLCBpbnB1dDpub3QoW2Rpc2FibGVkXSksIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSwgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSwgaWZyYW1lLCBvYmplY3QsIGVtYmVkLCBbdGFiaW5kZXg9XCIwXCJdLCBbY29udGVudGVkaXRhYmxlXSwgYXVkaW9bY29udHJvbHNdLCB2aWRlb1tjb250cm9sc10nKSkuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgIT09ICctMSc7XG4gIH0pO1xuICByZXR1cm4gdW5pcXVlQXJyYXkoZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXguY29uY2F0KG90aGVyRm9jdXNhYmxlRWxlbWVudHMpKS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIGlzVmlzaWJsZShlbCk7XG4gIH0pO1xufTtcbnZhciBpc01vZGFsID0gZnVuY3Rpb24gaXNNb2RhbCgpIHtcbiAgcmV0dXJuICFpc1RvYXN0KCkgJiYgIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKTtcbn07XG52YXIgaXNUb2FzdCA9IGZ1bmN0aW9uIGlzVG9hc3QoKSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSk7XG59O1xudmFyIGlzTG9hZGluZyA9IGZ1bmN0aW9uIGlzTG9hZGluZygpIHtcbiAgcmV0dXJuIGdldFBvcHVwKCkuaGFzQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbn07XG5cbi8vIERldGVjdCBOb2RlIGVudlxudmFyIGlzTm9kZUVudiA9IGZ1bmN0aW9uIGlzTm9kZUVudigpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCc7XG59O1xuXG52YXIgc3dlZXRIVE1MID0gXCJcXG4gPGRpdiBhcmlhLWxhYmVsbGVkYnk9XFxcIlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy50aXRsZSwgXCJcXFwiIGFyaWEtZGVzY3JpYmVkYnk9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29udGVudCwgXCJcXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnBvcHVwLCBcIlxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmhlYWRlciwgXCJcXFwiPlxcbiAgICAgPHVsIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnByb2dyZXNzc3RlcHMsIFwiXFxcIj48L3VsPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy5lcnJvciwgXCJcXFwiPlxcbiAgICAgICA8c3BhbiBjbGFzcz1cXFwic3dhbDIteC1tYXJrXFxcIj48c3BhbiBjbGFzcz1cXFwic3dhbDIteC1tYXJrLWxpbmUtbGVmdFxcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmstbGluZS1yaWdodFxcXCI+PC9zcGFuPjwvc3Bhbj5cXG4gICAgIDwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy5xdWVzdGlvbiwgXCJcXFwiPlxcbiAgICAgICA8c3BhbiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1snaWNvbi10ZXh0J10sIFwiXFxcIj4/PC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy53YXJuaW5nLCBcIlxcXCI+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWydpY29uLXRleHQnXSwgXCJcXFwiPiE8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLmluZm8sIFwiXFxcIj5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ2ljb24tdGV4dCddLCBcIlxcXCI+aTwvc3Bhbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMuc3VjY2VzcywgXCJcXFwiPlxcbiAgICAgICA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtbGVmdFxcXCI+PC9kaXY+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWxpbmUtdGlwXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ1xcXCI+PC9zcGFuPlxcbiAgICAgICA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLXJpbmdcXFwiPjwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWZpeFxcXCI+PC9kaXY+XFxuICAgICAgIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodFxcXCI+PC9kaXY+XFxuICAgICA8L2Rpdj5cXG4gICAgIDxpbWcgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaW1hZ2UsIFwiXFxcIiAvPlxcbiAgICAgPGgyIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnRpdGxlLCBcIlxcXCIgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIj48L2gyPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNsb3NlLCBcIlxcXCI+XFx4RDc8L2J1dHRvbj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbnRlbnQsIFwiXFxcIj5cXG4gICAgIDxkaXYgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29udGVudCwgXCJcXFwiPjwvZGl2PlxcbiAgICAgPGlucHV0IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmlucHV0LCBcIlxcXCIgLz5cXG4gICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5maWxlLCBcIlxcXCIgLz5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiXFxcIj5cXG4gICAgICAgPGlucHV0IHR5cGU9XFxcInJhbmdlXFxcIiAvPlxcbiAgICAgICA8b3V0cHV0Pjwvb3V0cHV0PlxcbiAgICAgPC9kaXY+XFxuICAgICA8c2VsZWN0IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnNlbGVjdCwgXCJcXFwiPjwvc2VsZWN0PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCJcXFwiPjwvZGl2PlxcbiAgICAgPGxhYmVsIGZvcj1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCJcXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIlxcXCI+XFxuICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMubGFiZWwsIFwiXFxcIj48L3NwYW4+XFxuICAgICA8L2xhYmVsPlxcbiAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnRleHRhcmVhLCBcIlxcXCI+PC90ZXh0YXJlYT5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudmFsaWRhdGlvbmVycm9yLCBcIlxcXCIgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudmFsaWRhdGlvbmVycm9yLCBcIlxcXCI+PC9kaXY+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5hY3Rpb25zLCBcIlxcXCI+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29uZmlybSwgXCJcXFwiPk9LPC9idXR0b24+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2FuY2VsLCBcIlxcXCI+Q2FuY2VsPC9idXR0b24+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5mb290ZXIsIFwiXFxcIj5cXG4gICA8L2Rpdj5cXG4gPC9kaXY+XFxuXCIpLnJlcGxhY2UoLyhefFxcbilcXHMqL2csICcnKTtcbi8qXG4gKiBBZGQgbW9kYWwgKyBiYWNrZHJvcCB0byBET01cbiAqL1xuXG52YXIgaW5pdCA9IGZ1bmN0aW9uIGluaXQocGFyYW1zKSB7XG4gIC8vIENsZWFuIHVwIHRoZSBvbGQgcG9wdXAgaWYgaXQgZXhpc3RzXG4gIHZhciBjID0gZ2V0Q29udGFpbmVyKCk7XG5cbiAgaWYgKGMpIHtcbiAgICBjLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYyk7XG4gICAgcmVtb3ZlQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIFtzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10sIHN3YWxDbGFzc2VzWydoYXMtY29sdW1uJ11dKTtcbiAgfVxuXG4gIGlmIChpc05vZGVFbnYoKSkge1xuICAgIGVycm9yKCdTd2VldEFsZXJ0MiByZXF1aXJlcyBkb2N1bWVudCB0byBpbml0aWFsaXplJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuY29udGFpbmVyO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gc3dlZXRIVE1MO1xuICB2YXIgdGFyZ2V0RWxlbWVudCA9IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgOiBwYXJhbXMudGFyZ2V0O1xuICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gIHZhciBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuICB2YXIgaW5wdXQgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICB2YXIgZmlsZSA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5maWxlKTtcbiAgdmFyIHJhbmdlID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCIgaW5wdXRcIikpO1xuICB2YXIgcmFuZ2VPdXRwdXQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBvdXRwdXRcIikpO1xuICB2YXIgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLnNlbGVjdCk7XG4gIHZhciBjaGVja2JveCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiIGlucHV0XCIpKTtcbiAgdmFyIHRleHRhcmVhID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLnRleHRhcmVhKTsgLy8gYTExeVxuXG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgncm9sZScsIHBhcmFtcy50b2FzdCA/ICdhbGVydCcgOiAnZGlhbG9nJyk7XG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgcGFyYW1zLnRvYXN0ID8gJ3BvbGl0ZScgOiAnYXNzZXJ0aXZlJyk7XG5cbiAgaWYgKCFwYXJhbXMudG9hc3QpIHtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCAndHJ1ZScpO1xuICB9XG5cbiAgdmFyIG9sZElucHV0VmFsOyAvLyBJRTExIHdvcmthcm91bmQsIHNlZSAjMTEwOSBmb3IgZGV0YWlsc1xuXG4gIHZhciByZXNldFZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbkVycm9yKGUpIHtcbiAgICBpZiAoU3dhbC5pc1Zpc2libGUoKSAmJiBvbGRJbnB1dFZhbCAhPT0gZS50YXJnZXQudmFsdWUpIHtcbiAgICAgIFN3YWwucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICB9XG5cbiAgICBvbGRJbnB1dFZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICB9O1xuXG4gIGlucHV0Lm9uaW5wdXQgPSByZXNldFZhbGlkYXRpb25FcnJvcjtcbiAgZmlsZS5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbkVycm9yO1xuICBzZWxlY3Qub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25FcnJvcjtcbiAgY2hlY2tib3gub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25FcnJvcjtcbiAgdGV4dGFyZWEub25pbnB1dCA9IHJlc2V0VmFsaWRhdGlvbkVycm9yO1xuXG4gIHJhbmdlLm9uaW5wdXQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJlc2V0VmFsaWRhdGlvbkVycm9yKGUpO1xuICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gIH07XG5cbiAgcmFuZ2Uub25jaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJlc2V0VmFsaWRhdGlvbkVycm9yKGUpO1xuICAgIHJhbmdlLm5leHRTaWJsaW5nLnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gIH07XG5cbiAgcmV0dXJuIHBvcHVwO1xufTtcblxudmFyIHBhcnNlSHRtbFRvQ29udGFpbmVyID0gZnVuY3Rpb24gcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW0sIHRhcmdldCkge1xuICBpZiAoIXBhcmFtKSB7XG4gICAgcmV0dXJuIGhpZGUodGFyZ2V0KTtcbiAgfVxuXG4gIGlmIChfdHlwZW9mKHBhcmFtKSA9PT0gJ29iamVjdCcpIHtcbiAgICB0YXJnZXQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAoMCBpbiBwYXJhbSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgaW4gcGFyYW07IGkrKykge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQocGFyYW1baV0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmFtLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHBhcmFtKSB7XG4gICAgdGFyZ2V0LmlubmVySFRNTCA9IHBhcmFtO1xuICB9XG5cbiAgc2hvdyh0YXJnZXQpO1xufTtcblxudmFyIGFuaW1hdGlvbkVuZEV2ZW50ID0gZnVuY3Rpb24gKCkge1xuICAvLyBQcmV2ZW50IHJ1biBpbiBOb2RlIGVudlxuICBpZiAoaXNOb2RlRW52KCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciB0cmFuc0VuZEV2ZW50TmFtZXMgPSB7XG4gICAgJ1dlYmtpdEFuaW1hdGlvbic6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgICdPQW5pbWF0aW9uJzogJ29BbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCcsXG4gICAgJ2FuaW1hdGlvbic6ICdhbmltYXRpb25lbmQnXG4gIH07XG5cbiAgZm9yICh2YXIgaSBpbiB0cmFuc0VuZEV2ZW50TmFtZXMpIHtcbiAgICBpZiAodHJhbnNFbmRFdmVudE5hbWVzLmhhc093blByb3BlcnR5KGkpICYmIHR5cGVvZiB0ZXN0RWwuc3R5bGVbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdHJhbnNFbmRFdmVudE5hbWVzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0oKTtcblxuLy8gTWVhc3VyZSB3aWR0aCBvZiBzY3JvbGxiYXJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9qcy9tb2RhbC5qcyNMMjc5LUwyODZcbnZhciBtZWFzdXJlU2Nyb2xsYmFyID0gZnVuY3Rpb24gbWVhc3VyZVNjcm9sbGJhcigpIHtcbiAgdmFyIHN1cHBvcnRzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHM7XG5cbiAgaWYgKHN1cHBvcnRzVG91Y2gpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHZhciBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2Nyb2xsRGl2LnN0eWxlLndpZHRoID0gJzUwcHgnO1xuICBzY3JvbGxEaXYuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xuICBzY3JvbGxEaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICB2YXIgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xufTtcblxudmFyIHJlbmRlckFjdGlvbnMgPSBmdW5jdGlvbiByZW5kZXJBY3Rpb25zKHBhcmFtcykge1xuICB2YXIgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgdmFyIGNvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gIHZhciBjYW5jZWxCdXR0b24gPSBnZXRDYW5jZWxCdXR0b24oKTsgLy8gQWN0aW9ucyAoYnV0dG9ucykgd3JhcHBlclxuXG4gIGlmICghcGFyYW1zLnNob3dDb25maXJtQnV0dG9uICYmICFwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgIGhpZGUoYWN0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgc2hvdyhhY3Rpb25zKTtcbiAgfSAvLyBDYW5jZWwgYnV0dG9uXG5cblxuICBpZiAocGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICBjYW5jZWxCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoY2FuY2VsQnV0dG9uKTtcbiAgfSAvLyBDb25maXJtIGJ1dHRvblxuXG5cbiAgaWYgKHBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbikge1xuICAgIHJlbW92ZVN0eWxlUHJvcGVydHkoY29uZmlybUJ1dHRvbiwgJ2Rpc3BsYXknKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNvbmZpcm1CdXR0b24pO1xuICB9IC8vIEVkaXQgdGV4dCBvbiBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xuXG5cbiAgY29uZmlybUJ1dHRvbi5pbm5lckhUTUwgPSBwYXJhbXMuY29uZmlybUJ1dHRvblRleHQ7XG4gIGNhbmNlbEJ1dHRvbi5pbm5lckhUTUwgPSBwYXJhbXMuY2FuY2VsQnV0dG9uVGV4dDsgLy8gQVJJQSBsYWJlbHMgZm9yIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXG5cbiAgY29uZmlybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBwYXJhbXMuY29uZmlybUJ1dHRvbkFyaWFMYWJlbCk7XG4gIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBwYXJhbXMuY2FuY2VsQnV0dG9uQXJpYUxhYmVsKTsgLy8gQWRkIGJ1dHRvbnMgY3VzdG9tIGNsYXNzZXNcblxuICBjb25maXJtQnV0dG9uLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmNvbmZpcm07XG4gIGFkZENsYXNzKGNvbmZpcm1CdXR0b24sIHBhcmFtcy5jb25maXJtQnV0dG9uQ2xhc3MpO1xuICBjYW5jZWxCdXR0b24uY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuY2FuY2VsO1xuICBhZGRDbGFzcyhjYW5jZWxCdXR0b24sIHBhcmFtcy5jYW5jZWxCdXR0b25DbGFzcyk7IC8vIEJ1dHRvbnMgc3R5bGluZ1xuXG4gIGlmIChwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICBhZGRDbGFzcyhbY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uXSwgc3dhbENsYXNzZXMuc3R5bGVkKTsgLy8gQnV0dG9ucyBiYWNrZ3JvdW5kIGNvbG9yc1xuXG4gICAgaWYgKHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3IpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yKSB7XG4gICAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yO1xuICAgIH0gLy8gTG9hZGluZyBzdGF0ZVxuXG5cbiAgICB2YXIgY29uZmlybUJ1dHRvbkJhY2tncm91bmRDb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbmZpcm1CdXR0b24pLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKTtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGNvbmZpcm1CdXR0b25CYWNrZ3JvdW5kQ29sb3I7XG4gICAgY29uZmlybUJ1dHRvbi5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gY29uZmlybUJ1dHRvbkJhY2tncm91bmRDb2xvcjtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVDbGFzcyhbY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uXSwgc3dhbENsYXNzZXMuc3R5bGVkKTtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY29uZmlybUJ1dHRvbi5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gJyc7XG4gICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNhbmNlbEJ1dHRvbi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBjYW5jZWxCdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICB9XG59O1xuXG52YXIgcmVuZGVyQ29udGVudCA9IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQocGFyYW1zKSB7XG4gIHZhciBjb250ZW50ID0gZ2V0Q29udGVudCgpLnF1ZXJ5U2VsZWN0b3IoJyMnICsgc3dhbENsYXNzZXMuY29udGVudCk7IC8vIENvbnRlbnQgYXMgSFRNTFxuXG4gIGlmIChwYXJhbXMuaHRtbCkge1xuICAgIHBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtcy5odG1sLCBjb250ZW50KTsgLy8gQ29udGVudCBhcyBwbGFpbiB0ZXh0XG4gIH0gZWxzZSBpZiAocGFyYW1zLnRleHQpIHtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gcGFyYW1zLnRleHQ7XG4gICAgc2hvdyhjb250ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNvbnRlbnQpO1xuICB9XG59O1xuXG52YXIgcmVuZGVySWNvbiA9IGZ1bmN0aW9uIHJlbmRlckljb24ocGFyYW1zKSB7XG4gIHZhciBpY29ucyA9IGdldEljb25zKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpY29ucy5sZW5ndGg7IGkrKykge1xuICAgIGhpZGUoaWNvbnNbaV0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy50eXBlKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGljb25UeXBlcykuaW5kZXhPZihwYXJhbXMudHlwZSkgIT09IC0xKSB7XG4gICAgICB2YXIgaWNvbiA9IFN3YWwuZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIi5cIikuY29uY2F0KGljb25UeXBlc1twYXJhbXMudHlwZV0pKTtcbiAgICAgIHNob3coaWNvbik7IC8vIEFuaW1hdGUgaWNvblxuXG4gICAgICBpZiAocGFyYW1zLmFuaW1hdGlvbikge1xuICAgICAgICBhZGRDbGFzcyhpY29uLCBcInN3YWwyLWFuaW1hdGUtXCIuY29uY2F0KHBhcmFtcy50eXBlLCBcIi1pY29uXCIpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3IoXCJVbmtub3duIHR5cGUhIEV4cGVjdGVkIFxcXCJzdWNjZXNzXFxcIiwgXFxcImVycm9yXFxcIiwgXFxcIndhcm5pbmdcXFwiLCBcXFwiaW5mb1xcXCIgb3IgXFxcInF1ZXN0aW9uXFxcIiwgZ290IFxcXCJcIi5jb25jYXQocGFyYW1zLnR5cGUsIFwiXFxcIlwiKSk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgcmVuZGVySW1hZ2UgPSBmdW5jdGlvbiByZW5kZXJJbWFnZShwYXJhbXMpIHtcbiAgdmFyIGltYWdlID0gZ2V0SW1hZ2UoKTtcblxuICBpZiAocGFyYW1zLmltYWdlVXJsKSB7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBwYXJhbXMuaW1hZ2VVcmwpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgcGFyYW1zLmltYWdlQWx0KTtcbiAgICBzaG93KGltYWdlKTtcblxuICAgIGlmIChwYXJhbXMuaW1hZ2VXaWR0aCkge1xuICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHBhcmFtcy5pbWFnZVdpZHRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1hZ2UucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuaW1hZ2VIZWlnaHQpIHtcbiAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcGFyYW1zLmltYWdlSGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1hZ2UucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICB9XG5cbiAgICBpbWFnZS5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5pbWFnZTtcblxuICAgIGlmIChwYXJhbXMuaW1hZ2VDbGFzcykge1xuICAgICAgYWRkQ2xhc3MoaW1hZ2UsIHBhcmFtcy5pbWFnZUNsYXNzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGlkZShpbWFnZSk7XG4gIH1cbn07XG5cbnZhciByZW5kZXJQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gcmVuZGVyUHJvZ3Jlc3NTdGVwcyhwYXJhbXMpIHtcbiAgdmFyIHByb2dyZXNzU3RlcHNDb250YWluZXIgPSBnZXRQcm9ncmVzc1N0ZXBzKCk7XG4gIHZhciBjdXJyZW50UHJvZ3Jlc3NTdGVwID0gcGFyc2VJbnQocGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXAgPT09IG51bGwgPyBTd2FsLmdldFF1ZXVlU3RlcCgpIDogcGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXAsIDEwKTtcblxuICBpZiAocGFyYW1zLnByb2dyZXNzU3RlcHMgJiYgcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoKSB7XG4gICAgc2hvdyhwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKTtcbiAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYgKGN1cnJlbnRQcm9ncmVzc1N0ZXAgPj0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoKSB7XG4gICAgICB3YXJuKCdJbnZhbGlkIGN1cnJlbnRQcm9ncmVzc1N0ZXAgcGFyYW1ldGVyLCBpdCBzaG91bGQgYmUgbGVzcyB0aGFuIHByb2dyZXNzU3RlcHMubGVuZ3RoICcgKyAnKGN1cnJlbnRQcm9ncmVzc1N0ZXAgbGlrZSBKUyBhcnJheXMgc3RhcnRzIGZyb20gMCknKTtcbiAgICB9XG5cbiAgICBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5mb3JFYWNoKGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICAgICAgdmFyIGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBhZGRDbGFzcyhjaXJjbGUsIHN3YWxDbGFzc2VzLnByb2dyZXNzY2lyY2xlKTtcbiAgICAgIGNpcmNsZS5pbm5lckhUTUwgPSBzdGVwO1xuXG4gICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRQcm9ncmVzc1N0ZXApIHtcbiAgICAgICAgYWRkQ2xhc3MoY2lyY2xlLCBzd2FsQ2xhc3Nlcy5hY3RpdmVwcm9ncmVzc3N0ZXApO1xuICAgICAgfVxuXG4gICAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZSk7XG5cbiAgICAgIGlmIChpbmRleCAhPT0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGFkZENsYXNzKGxpbmUsIHN3YWxDbGFzc2VzLnByb2dyZXNzbGluZSk7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2UpIHtcbiAgICAgICAgICBsaW5lLnN0eWxlLndpZHRoID0gcGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2dyZXNzU3RlcHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKTtcbiAgfVxufTtcblxudmFyIHJlbmRlclRpdGxlID0gZnVuY3Rpb24gcmVuZGVyVGl0bGUocGFyYW1zKSB7XG4gIHZhciB0aXRsZSA9IGdldFRpdGxlKCk7XG5cbiAgaWYgKHBhcmFtcy50aXRsZVRleHQpIHtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBwYXJhbXMudGl0bGVUZXh0O1xuICB9IGVsc2UgaWYgKHBhcmFtcy50aXRsZSkge1xuICAgIGlmICh0eXBlb2YgcGFyYW1zLnRpdGxlID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyYW1zLnRpdGxlID0gcGFyYW1zLnRpdGxlLnNwbGl0KCdcXG4nKS5qb2luKCc8YnIgLz4nKTtcbiAgICB9XG5cbiAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMudGl0bGUsIHRpdGxlKTtcbiAgfVxufTtcblxudmFyIGZpeFNjcm9sbGJhciA9IGZ1bmN0aW9uIGZpeFNjcm9sbGJhcigpIHtcbiAgLy8gZm9yIHF1ZXVlcywgZG8gbm90IGRvIHRoaXMgbW9yZSB0aGFuIG9uY2VcbiAgaWYgKHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIHRoZSBib2R5IGhhcyBvdmVyZmxvd1xuXG5cbiAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgLy8gYWRkIHBhZGRpbmcgc28gdGhlIGNvbnRlbnQgZG9lc24ndCBzaGlmdCBhZnRlciByZW1vdmFsIG9mIHNjcm9sbGJhclxuICAgIHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICsgbWVhc3VyZVNjcm9sbGJhcigpICsgJ3B4JztcbiAgfVxufTtcbnZhciB1bmRvU2Nyb2xsYmFyID0gZnVuY3Rpb24gdW5kb1Njcm9sbGJhcigpIHtcbiAgaWYgKHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZztcbiAgICBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyA9IG51bGw7XG4gIH1cbn07XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbnZhciBpT1NmaXggPSBmdW5jdGlvbiBpT1NmaXgoKSB7XG4gIHZhciBpT1MgPSAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtO1xuXG4gIGlmIChpT1MgJiYgIWhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICB2YXIgb2Zmc2V0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBvZmZzZXQgKiAtMSArICdweCc7XG4gICAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KTtcbiAgfVxufTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbnZhciB1bmRvSU9TZml4ID0gZnVuY3Rpb24gdW5kb0lPU2ZpeCgpIHtcbiAgaWYgKGhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS50b3AsIDEwKTtcbiAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBvZmZzZXQgKiAtMTtcbiAgfVxufTtcblxuLy8gQWRkaW5nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRvIGVsZW1lbnRzIG91dHNpZGUgb2YgdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgZW5zdXJlcyB0aGF0XG4vLyBlbGVtZW50cyBub3Qgd2l0aGluIHRoZSBhY3RpdmUgbW9kYWwgZGlhbG9nIHdpbGwgbm90IGJlIHN1cmZhY2VkIGlmIGEgdXNlciBvcGVucyBhIHNjcmVlblxuLy8gcmVhZGVy4oCZcyBsaXN0IG9mIGVsZW1lbnRzIChoZWFkaW5ncywgZm9ybSBjb250cm9scywgbGFuZG1hcmtzLCBldGMuKSBpbiB0aGUgZG9jdW1lbnQuXG5cbnZhciBzZXRBcmlhSGlkZGVuID0gZnVuY3Rpb24gc2V0QXJpYUhpZGRlbigpIHtcbiAgdmFyIGJvZHlDaGlsZHJlbiA9IHRvQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gIGJvZHlDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbCA9PT0gZ2V0Q29udGFpbmVyKCkgfHwgZWwuY29udGFpbnMoZ2V0Q29udGFpbmVyKCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJywgZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKTtcbiAgICB9XG5cbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgfSk7XG59O1xudmFyIHVuc2V0QXJpYUhpZGRlbiA9IGZ1bmN0aW9uIHVuc2V0QXJpYUhpZGRlbigpIHtcbiAgdmFyIGJvZHlDaGlsZHJlbiA9IHRvQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gIGJvZHlDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpKTtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBSRVNUT1JFX0ZPQ1VTX1RJTUVPVVQgPSAxMDA7XG5cbnZhciBnbG9iYWxTdGF0ZSA9IHt9O1xudmFyIHJlc3RvcmVBY3RpdmVFbGVtZW50ID0gZnVuY3Rpb24gcmVzdG9yZUFjdGl2ZUVsZW1lbnQoKSB7XG4gIHZhciB4ID0gd2luZG93LnNjcm9sbFg7XG4gIHZhciB5ID0gd2luZG93LnNjcm9sbFk7XG4gIGdsb2JhbFN0YXRlLnJlc3RvcmVGb2N1c1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50ICYmIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cykge1xuICAgICAgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgIH1cbiAgfSwgUkVTVE9SRV9GT0NVU19USU1FT1VUKTsgLy8gaXNzdWVzLzkwMFxuXG4gIGlmICh0eXBlb2YgeCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gSUUgZG9lc24ndCBoYXZlIHNjcm9sbFgvc2Nyb2xsWSBzdXBwb3J0XG4gICAgd2luZG93LnNjcm9sbFRvKHgsIHkpO1xuICB9XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsb3NlIHN3ZWV0QWxlcnRcbiAqL1xuXG52YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZShvbkNsb3NlLCBvbkFmdGVyQ2xvc2UpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gIGlmICghcG9wdXApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAob25DbG9zZSAhPT0gbnVsbCAmJiB0eXBlb2Ygb25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9uQ2xvc2UocG9wdXApO1xuICB9XG5cbiAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnNob3cpO1xuICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaGlkZSk7XG5cbiAgdmFyIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZSA9IGZ1bmN0aW9uIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZSgpIHtcbiAgICBpZiAoIWlzVG9hc3QoKSkge1xuICAgICAgcmVzdG9yZUFjdGl2ZUVsZW1lbnQoKTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7XG4gICAgICAgIGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmVcbiAgICAgIH0pO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChjb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZW1vdmVDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgW3N3YWxDbGFzc2VzLnNob3duLCBzd2FsQ2xhc3Nlc1snaGVpZ2h0LWF1dG8nXSwgc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddLCBzd2FsQ2xhc3Nlc1sndG9hc3QtY29sdW1uJ11dKTtcblxuICAgIGlmIChpc01vZGFsKCkpIHtcbiAgICAgIHVuZG9TY3JvbGxiYXIoKTtcbiAgICAgIHVuZG9JT1NmaXgoKTtcbiAgICAgIHVuc2V0QXJpYUhpZGRlbigpO1xuICAgIH1cblxuICAgIGlmIChvbkFmdGVyQ2xvc2UgIT09IG51bGwgJiYgdHlwZW9mIG9uQWZ0ZXJDbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uQWZ0ZXJDbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9OyAvLyBJZiBhbmltYXRpb24gaXMgc3VwcG9ydGVkLCBhbmltYXRlXG5cblxuICBpZiAoYW5pbWF0aW9uRW5kRXZlbnQgJiYgIWhhc0NsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5ub2FuaW1hdGlvbikpIHtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBmdW5jdGlvbiBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKCkge1xuICAgICAgcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgc3dhbENsb3NlRXZlbnRGaW5pc2hlZCk7XG5cbiAgICAgIGlmIChoYXNDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaGlkZSkpIHtcbiAgICAgICAgcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlLCByZW1vdmUgaW1tZWRpYXRlbHlcbiAgICByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoKTtcbiAgfVxufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgc3dhbDIgcG9wdXAgaXMgc2hvd25cbiAqL1xuXG52YXIgaXNWaXNpYmxlJDEgPSBmdW5jdGlvbiBpc1Zpc2libGUoKSB7XG4gIHJldHVybiAhIWdldFBvcHVwKCk7XG59O1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ29uZmlybScgYnV0dG9uXG4gKi9cblxudmFyIGNsaWNrQ29uZmlybSA9IGZ1bmN0aW9uIGNsaWNrQ29uZmlybSgpIHtcbiAgcmV0dXJuIGdldENvbmZpcm1CdXR0b24oKS5jbGljaygpO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0NhbmNlbCcgYnV0dG9uXG4gKi9cblxudmFyIGNsaWNrQ2FuY2VsID0gZnVuY3Rpb24gY2xpY2tDYW5jZWwoKSB7XG4gIHJldHVybiBnZXRDYW5jZWxCdXR0b24oKS5jbGljaygpO1xufTtcblxuZnVuY3Rpb24gZmlyZSgpIHtcbiAgdmFyIFN3YWwgPSB0aGlzO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdChTd2FsLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIGEgU3dhbCBjbGFzcyBtYWtpbmcgaXQgYWJsZSB0byBiZSBpbnN0YW50aWF0ZWQgd2l0aG91dCB0aGUgYG5ld2Aga2V5d29yZCAoYW5kIHRodXMgd2l0aG91dCBgU3dhbC5maXJlYClcbiAqIEBwYXJhbSBQYXJlbnRTd2FsXG4gKiBAcmV0dXJucyB7Tm9OZXdLZXl3b3JkU3dhbH1cbiAqL1xuZnVuY3Rpb24gd2l0aE5vTmV3S2V5d29yZChQYXJlbnRTd2FsKSB7XG4gIHZhciBOb05ld0tleXdvcmRTd2FsID0gZnVuY3Rpb24gTm9OZXdLZXl3b3JkU3dhbCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE5vTmV3S2V5d29yZFN3YWwpKSB7XG4gICAgICByZXR1cm4gX2NvbnN0cnVjdChOb05ld0tleXdvcmRTd2FsLCBhcmdzKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTm9OZXdLZXl3b3JkU3dhbCkuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG5cbiAgTm9OZXdLZXl3b3JkU3dhbC5wcm90b3R5cGUgPSBfZXh0ZW5kcyhPYmplY3QuY3JlYXRlKFBhcmVudFN3YWwucHJvdG90eXBlKSwge1xuICAgIGNvbnN0cnVjdG9yOiBOb05ld0tleXdvcmRTd2FsXG4gIH0pO1xuXG4gIGlmICh0eXBlb2YgT2JqZWN0LnNldFByb3RvdHlwZU9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKE5vTmV3S2V5d29yZFN3YWwsIFBhcmVudFN3YWwpO1xuICB9IGVsc2Uge1xuICAgIC8vIEFuZHJvaWQgNC40XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgTm9OZXdLZXl3b3JkU3dhbC5fX3Byb3RvX18gPSBQYXJlbnRTd2FsO1xuICB9XG5cbiAgcmV0dXJuIE5vTmV3S2V5d29yZFN3YWw7XG59XG5cbnZhciBkZWZhdWx0UGFyYW1zID0ge1xuICB0aXRsZTogJycsXG4gIHRpdGxlVGV4dDogJycsXG4gIHRleHQ6ICcnLFxuICBodG1sOiAnJyxcbiAgZm9vdGVyOiAnJyxcbiAgdHlwZTogbnVsbCxcbiAgdG9hc3Q6IGZhbHNlLFxuICBjdXN0b21DbGFzczogJycsXG4gIHRhcmdldDogJ2JvZHknLFxuICBiYWNrZHJvcDogdHJ1ZSxcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBoZWlnaHRBdXRvOiB0cnVlLFxuICBhbGxvd091dHNpZGVDbGljazogdHJ1ZSxcbiAgYWxsb3dFc2NhcGVLZXk6IHRydWUsXG4gIGFsbG93RW50ZXJLZXk6IHRydWUsXG4gIHN0b3BLZXlkb3duUHJvcGFnYXRpb246IHRydWUsXG4gIGtleWRvd25MaXN0ZW5lckNhcHR1cmU6IGZhbHNlLFxuICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcbiAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gIHByZUNvbmZpcm06IG51bGwsXG4gIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICBjb25maXJtQnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgY29uZmlybUJ1dHRvbkNvbG9yOiBudWxsLFxuICBjb25maXJtQnV0dG9uQ2xhc3M6IG51bGwsXG4gIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICcnLFxuICBjYW5jZWxCdXR0b25Db2xvcjogbnVsbCxcbiAgY2FuY2VsQnV0dG9uQ2xhc3M6IG51bGwsXG4gIGJ1dHRvbnNTdHlsaW5nOiB0cnVlLFxuICByZXZlcnNlQnV0dG9uczogZmFsc2UsXG4gIGZvY3VzQ29uZmlybTogdHJ1ZSxcbiAgZm9jdXNDYW5jZWw6IGZhbHNlLFxuICBzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxuICBjbG9zZUJ1dHRvbkFyaWFMYWJlbDogJ0Nsb3NlIHRoaXMgZGlhbG9nJyxcbiAgc2hvd0xvYWRlck9uQ29uZmlybTogZmFsc2UsXG4gIGltYWdlVXJsOiBudWxsLFxuICBpbWFnZVdpZHRoOiBudWxsLFxuICBpbWFnZUhlaWdodDogbnVsbCxcbiAgaW1hZ2VBbHQ6ICcnLFxuICBpbWFnZUNsYXNzOiBudWxsLFxuICB0aW1lcjogbnVsbCxcbiAgd2lkdGg6IG51bGwsXG4gIHBhZGRpbmc6IG51bGwsXG4gIGJhY2tncm91bmQ6IG51bGwsXG4gIGlucHV0OiBudWxsLFxuICBpbnB1dFBsYWNlaG9sZGVyOiAnJyxcbiAgaW5wdXRWYWx1ZTogJycsXG4gIGlucHV0T3B0aW9uczoge30sXG4gIGlucHV0QXV0b1RyaW06IHRydWUsXG4gIGlucHV0Q2xhc3M6IG51bGwsXG4gIGlucHV0QXR0cmlidXRlczoge30sXG4gIGlucHV0VmFsaWRhdG9yOiBudWxsLFxuICBncm93OiBmYWxzZSxcbiAgcG9zaXRpb246ICdjZW50ZXInLFxuICBwcm9ncmVzc1N0ZXBzOiBbXSxcbiAgY3VycmVudFByb2dyZXNzU3RlcDogbnVsbCxcbiAgcHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlOiBudWxsLFxuICBvbkJlZm9yZU9wZW46IG51bGwsXG4gIG9uQWZ0ZXJDbG9zZTogbnVsbCxcbiAgb25PcGVuOiBudWxsLFxuICBvbkNsb3NlOiBudWxsLFxuICB1c2VSZWplY3Rpb25zOiBmYWxzZSxcbiAgZXhwZWN0UmVqZWN0aW9uczogZmFsc2Vcbn07XG52YXIgZGVwcmVjYXRlZFBhcmFtcyA9IFsndXNlUmVqZWN0aW9ucycsICdleHBlY3RSZWplY3Rpb25zJ107XG52YXIgdG9hc3RJbmNvbXBhdGlibGVQYXJhbXMgPSBbJ2FsbG93T3V0c2lkZUNsaWNrJywgJ2FsbG93RW50ZXJLZXknLCAnYmFja2Ryb3AnLCAnZm9jdXNDb25maXJtJywgJ2ZvY3VzQ2FuY2VsJywgJ2hlaWdodEF1dG8nLCAna2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSddO1xuLyoqXG4gKiBJcyB2YWxpZCBwYXJhbWV0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAqL1xuXG52YXIgaXNWYWxpZFBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzVmFsaWRQYXJhbWV0ZXIocGFyYW1OYW1lKSB7XG4gIHJldHVybiBkZWZhdWx0UGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtTmFtZSkgfHwgcGFyYW1OYW1lID09PSAnZXh0cmFQYXJhbXMnO1xufTtcbi8qKlxuICogSXMgZGVwcmVjYXRlZCBwYXJhbWV0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAqL1xuXG52YXIgaXNEZXByZWNhdGVkUGFyYW1ldGVyID0gZnVuY3Rpb24gaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtTmFtZSkge1xuICByZXR1cm4gZGVwcmVjYXRlZFBhcmFtcy5pbmRleE9mKHBhcmFtTmFtZSkgIT09IC0xO1xufTtcbi8qKlxuICogU2hvdyByZWxldmFudCB3YXJuaW5ncyBmb3IgZ2l2ZW4gcGFyYW1zXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICovXG5cbnZhciBzaG93V2FybmluZ3NGb3JQYXJhbXMgPSBmdW5jdGlvbiBzaG93V2FybmluZ3NGb3JQYXJhbXMocGFyYW1zKSB7XG4gIGZvciAodmFyIHBhcmFtIGluIHBhcmFtcykge1xuICAgIGlmICghaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHdhcm4oXCJVbmtub3duIHBhcmFtZXRlciBcXFwiXCIuY29uY2F0KHBhcmFtLCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudG9hc3QgJiYgdG9hc3RJbmNvbXBhdGlibGVQYXJhbXMuaW5kZXhPZihwYXJhbSkgIT09IC0xKSB7XG4gICAgICB3YXJuKFwiVGhlIHBhcmFtZXRlciBcXFwiXCIuY29uY2F0KHBhcmFtLCBcIlxcXCIgaXMgaW5jb21wYXRpYmxlIHdpdGggdG9hc3RzXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgd2Fybk9uY2UoXCJUaGUgcGFyYW1ldGVyIFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cIikpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGRlcHJlY2F0aW9uV2FybmluZyA9IFwiXFxcInNldERlZmF1bHRzXFxcIiAmIFxcXCJyZXNldERlZmF1bHRzXFxcIiBtZXRob2RzIGFyZSBkZXByZWNhdGVkIGluIGZhdm9yIG9mIFxcXCJtaXhpblxcXCIgbWV0aG9kIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS4gRm9yIG5ldyBwcm9qZWN0cywgdXNlIFxcXCJtaXhpblxcXCIuIEZvciBwYXN0IHByb2plY3RzIGFscmVhZHkgdXNpbmcgXFxcInNldERlZmF1bHRzXFxcIiwgc3VwcG9ydCB3aWxsIGJlIHByb3ZpZGVkIHRocm91Z2ggYW4gYWRkaXRpb25hbCBwYWNrYWdlLlwiO1xudmFyIGRlZmF1bHRzID0ge307XG5mdW5jdGlvbiB3aXRoR2xvYmFsRGVmYXVsdHMoUGFyZW50U3dhbCkge1xuICB2YXIgU3dhbFdpdGhHbG9iYWxEZWZhdWx0cyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9QYXJlbnRTd2FsKSB7XG4gICAgX2luaGVyaXRzKFN3YWxXaXRoR2xvYmFsRGVmYXVsdHMsIF9QYXJlbnRTd2FsKTtcblxuICAgIGZ1bmN0aW9uIFN3YWxXaXRoR2xvYmFsRGVmYXVsdHMoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3dhbFdpdGhHbG9iYWxEZWZhdWx0cyk7XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoU3dhbFdpdGhHbG9iYWxEZWZhdWx0cykuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFN3YWxXaXRoR2xvYmFsRGVmYXVsdHMsIFt7XG4gICAgICBrZXk6IFwiX21haW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFpbihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKFN3YWxXaXRoR2xvYmFsRGVmYXVsdHMucHJvdG90eXBlKSwgXCJfbWFpblwiLCB0aGlzKS5jYWxsKHRoaXMsIF9leHRlbmRzKHt9LCBkZWZhdWx0cywgcGFyYW1zKSk7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwic2V0RGVmYXVsdHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREZWZhdWx0cyhwYXJhbXMpIHtcbiAgICAgICAgd2Fybk9uY2UoZGVwcmVjYXRpb25XYXJuaW5nKTtcblxuICAgICAgICBpZiAoIXBhcmFtcyB8fCBfdHlwZW9mKHBhcmFtcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU3dlZXRBbGVydDI6IFRoZSBhcmd1bWVudCBmb3Igc2V0RGVmYXVsdHMoKSBpcyByZXF1aXJlZCBhbmQgaGFzIHRvIGJlIGEgb2JqZWN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBzaG93V2FybmluZ3NGb3JQYXJhbXMocGFyYW1zKTsgLy8gYXNzaWduIHZhbGlkIHBhcmFtcyBmcm9tIGBwYXJhbXNgIHRvIGBkZWZhdWx0c2BcblxuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgaWYgKFBhcmVudFN3YWwuaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgICAgICAgIGRlZmF1bHRzW3BhcmFtXSA9IHBhcmFtc1twYXJhbV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVzZXREZWZhdWx0c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0RGVmYXVsdHMoKSB7XG4gICAgICAgIHdhcm5PbmNlKGRlcHJlY2F0aW9uV2FybmluZyk7XG4gICAgICAgIGRlZmF1bHRzID0ge307XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFN3YWxXaXRoR2xvYmFsRGVmYXVsdHM7XG4gIH0oUGFyZW50U3dhbCk7IC8vIFNldCBkZWZhdWx0IHBhcmFtcyBpZiBgd2luZG93Ll9zd2FsRGVmYXVsdHNgIGlzIGFuIG9iamVjdFxuXG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIF90eXBlb2Yod2luZG93Ll9zd2FsRGVmYXVsdHMpID09PSAnb2JqZWN0Jykge1xuICAgIFN3YWxXaXRoR2xvYmFsRGVmYXVsdHMuc2V0RGVmYXVsdHMod2luZG93Ll9zd2FsRGVmYXVsdHMpO1xuICB9XG5cbiAgcmV0dXJuIFN3YWxXaXRoR2xvYmFsRGVmYXVsdHM7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBleHRlbmRlZCB2ZXJzaW9uIG9mIGBTd2FsYCBjb250YWluaW5nIGBwYXJhbXNgIGFzIGRlZmF1bHRzLlxuICogVXNlZnVsIGZvciByZXVzaW5nIFN3YWwgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBCZWZvcmU6XG4gKiBjb25zdCB0ZXh0UHJvbXB0T3B0aW9ucyA9IHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9XG4gKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBTd2FsKHsgLi4udGV4dFByb21wdE9wdGlvbnMsIHRpdGxlOiAnV2hhdCBpcyB5b3VyIGZpcnN0IG5hbWU/JyB9KVxuICogY29uc3Qge3ZhbHVlOiBsYXN0TmFtZX0gPSBhd2FpdCBTd2FsKHsgLi4udGV4dFByb21wdE9wdGlvbnMsIHRpdGxlOiAnV2hhdCBpcyB5b3VyIGxhc3QgbmFtZT8nIH0pXG4gKlxuICogQWZ0ZXI6XG4gKiBjb25zdCBUZXh0UHJvbXB0ID0gU3dhbC5taXhpbih7IGlucHV0OiAndGV4dCcsIHNob3dDYW5jZWxCdXR0b246IHRydWUgfSlcbiAqIGNvbnN0IHt2YWx1ZTogZmlyc3ROYW1lfSA9IGF3YWl0IFRleHRQcm9tcHQoJ1doYXQgaXMgeW91ciBmaXJzdCBuYW1lPycpXG4gKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFRleHRQcm9tcHQoJ1doYXQgaXMgeW91ciBsYXN0IG5hbWU/JylcbiAqXG4gKiBAcGFyYW0gbWl4aW5QYXJhbXNcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihtaXhpblBhcmFtcykge1xuICByZXR1cm4gd2l0aE5vTmV3S2V5d29yZChcbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX3RoaXMpIHtcbiAgICBfaW5oZXJpdHMoTWl4aW5Td2FsLCBfdGhpcyk7XG5cbiAgICBmdW5jdGlvbiBNaXhpblN3YWwoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWl4aW5Td2FsKTtcblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNaXhpblN3YWwpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNaXhpblN3YWwsIFt7XG4gICAgICBrZXk6IFwiX21haW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFpbihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1peGluU3dhbC5wcm90b3R5cGUpLCBcIl9tYWluXCIsIHRoaXMpLmNhbGwodGhpcywgX2V4dGVuZHMoe30sIG1peGluUGFyYW1zLCBwYXJhbXMpKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWl4aW5Td2FsO1xuICB9KHRoaXMpKTtcbn1cblxuLy8gcHJpdmF0ZSBnbG9iYWwgc3RhdGUgZm9yIHRoZSBxdWV1ZSBmZWF0dXJlXG52YXIgY3VycmVudFN0ZXBzID0gW107XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBjaGFpbmluZyBzd2VldEFsZXJ0IHBvcHVwc1xuICovXG5cbnZhciBxdWV1ZSA9IGZ1bmN0aW9uIHF1ZXVlKHN0ZXBzKSB7XG4gIHZhciBzd2FsID0gdGhpcztcbiAgY3VycmVudFN0ZXBzID0gc3RlcHM7XG5cbiAgdmFyIHJlc2V0UXVldWUgPSBmdW5jdGlvbiByZXNldFF1ZXVlKCkge1xuICAgIGN1cnJlbnRTdGVwcyA9IFtdO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKTtcbiAgfTtcblxuICB2YXIgcXVldWVSZXN1bHQgPSBbXTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgKGZ1bmN0aW9uIHN0ZXAoaSwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChpIDwgY3VycmVudFN0ZXBzLmxlbmd0aCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJywgaSk7XG4gICAgICAgIHN3YWwoY3VycmVudFN0ZXBzW2ldKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHF1ZXVlUmVzdWx0LnB1c2gocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgIHN0ZXAoaSArIDEsIGNhbGxiYWNrKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzZXRRdWV1ZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIGRpc21pc3M6IHJlc3VsdC5kaXNtaXNzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXRRdWV1ZSgpO1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogcXVldWVSZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkoMCk7XG4gIH0pO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGdldHRpbmcgdGhlIGluZGV4IG9mIGN1cnJlbnQgcG9wdXAgaW4gcXVldWVcbiAqL1xuXG52YXIgZ2V0UXVldWVTdGVwID0gZnVuY3Rpb24gZ2V0UXVldWVTdGVwKCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcpO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGluc2VydGluZyBhIHBvcHVwIHRvIHRoZSBxdWV1ZVxuICovXG5cbnZhciBpbnNlcnRRdWV1ZVN0ZXAgPSBmdW5jdGlvbiBpbnNlcnRRdWV1ZVN0ZXAoc3RlcCwgaW5kZXgpIHtcbiAgaWYgKGluZGV4ICYmIGluZGV4IDwgY3VycmVudFN0ZXBzLmxlbmd0aCkge1xuICAgIHJldHVybiBjdXJyZW50U3RlcHMuc3BsaWNlKGluZGV4LCAwLCBzdGVwKTtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW50U3RlcHMucHVzaChzdGVwKTtcbn07XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBkZWxldGluZyBhIHBvcHVwIGZyb20gdGhlIHF1ZXVlXG4gKi9cblxudmFyIGRlbGV0ZVF1ZXVlU3RlcCA9IGZ1bmN0aW9uIGRlbGV0ZVF1ZXVlU3RlcChpbmRleCkge1xuICBpZiAodHlwZW9mIGN1cnJlbnRTdGVwc1tpbmRleF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3VycmVudFN0ZXBzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn07XG5cbi8qKlxuICogU2hvdyBzcGlubmVyIGluc3RlYWQgb2YgQ29uZmlybSBidXR0b24gYW5kIGRpc2FibGUgQ2FuY2VsIGJ1dHRvblxuICovXG5cbnZhciBzaG93TG9hZGluZyA9IGZ1bmN0aW9uIHNob3dMb2FkaW5nKCkge1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gIGlmICghcG9wdXApIHtcbiAgICBTd2FsKCcnKTtcbiAgfVxuXG4gIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gIHNob3coYWN0aW9ucyk7XG4gIHNob3coY29uZmlybUJ1dHRvbik7XG4gIGFkZENsYXNzKFtwb3B1cCwgYWN0aW9uc10sIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnLCB0cnVlKTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLWJ1c3knLCB0cnVlKTtcbiAgcG9wdXAuZm9jdXMoKTtcbn07XG5cbi8qKlxuICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXMgc2V0LCByZXR1cm5zIG51bWJlciBvcyBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gKiBPdGhlcndpc2UsIHJldHVybnMgbnVsbC5cbiAqL1xuXG52YXIgZ2V0VGltZXJMZWZ0ID0gZnVuY3Rpb24gZ2V0VGltZXJMZWZ0KCkge1xuICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LmdldFRpbWVyTGVmdCgpO1xufTtcblxuXG5cbnZhciBzdGF0aWNNZXRob2RzID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGlzVmFsaWRQYXJhbWV0ZXI6IGlzVmFsaWRQYXJhbWV0ZXIsXG5cdGlzRGVwcmVjYXRlZFBhcmFtZXRlcjogaXNEZXByZWNhdGVkUGFyYW1ldGVyLFxuXHRhcmdzVG9QYXJhbXM6IGFyZ3NUb1BhcmFtcyxcblx0YWRhcHRJbnB1dFZhbGlkYXRvcjogYWRhcHRJbnB1dFZhbGlkYXRvcixcblx0Y2xvc2U6IGNsb3NlLFxuXHRjbG9zZVBvcHVwOiBjbG9zZSxcblx0Y2xvc2VNb2RhbDogY2xvc2UsXG5cdGNsb3NlVG9hc3Q6IGNsb3NlLFxuXHRpc1Zpc2libGU6IGlzVmlzaWJsZSQxLFxuXHRjbGlja0NvbmZpcm06IGNsaWNrQ29uZmlybSxcblx0Y2xpY2tDYW5jZWw6IGNsaWNrQ2FuY2VsLFxuXHRnZXRDb250YWluZXI6IGdldENvbnRhaW5lcixcblx0Z2V0UG9wdXA6IGdldFBvcHVwLFxuXHRnZXRUaXRsZTogZ2V0VGl0bGUsXG5cdGdldENvbnRlbnQ6IGdldENvbnRlbnQsXG5cdGdldEltYWdlOiBnZXRJbWFnZSxcblx0Z2V0SWNvbnM6IGdldEljb25zLFxuXHRnZXRDbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24sXG5cdGdldEJ1dHRvbnNXcmFwcGVyOiBnZXRCdXR0b25zV3JhcHBlcixcblx0Z2V0QWN0aW9uczogZ2V0QWN0aW9ucyxcblx0Z2V0Q29uZmlybUJ1dHRvbjogZ2V0Q29uZmlybUJ1dHRvbixcblx0Z2V0Q2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24sXG5cdGdldEZvb3RlcjogZ2V0Rm9vdGVyLFxuXHRnZXRGb2N1c2FibGVFbGVtZW50czogZ2V0Rm9jdXNhYmxlRWxlbWVudHMsXG5cdGlzTG9hZGluZzogaXNMb2FkaW5nLFxuXHRmaXJlOiBmaXJlLFxuXHRtaXhpbjogbWl4aW4sXG5cdHF1ZXVlOiBxdWV1ZSxcblx0Z2V0UXVldWVTdGVwOiBnZXRRdWV1ZVN0ZXAsXG5cdGluc2VydFF1ZXVlU3RlcDogaW5zZXJ0UXVldWVTdGVwLFxuXHRkZWxldGVRdWV1ZVN0ZXA6IGRlbGV0ZVF1ZXVlU3RlcCxcblx0c2hvd0xvYWRpbmc6IHNob3dMb2FkaW5nLFxuXHRlbmFibGVMb2FkaW5nOiBzaG93TG9hZGluZyxcblx0Z2V0VGltZXJMZWZ0OiBnZXRUaW1lckxlZnRcbn0pO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vUmlpbS9zeW1ib2wtcG9seWZpbGwvYmxvYi9tYXN0ZXIvaW5kZXguanNcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbnZhciBfU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyA/IFN5bWJvbCA6IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkQ291bnRlciA9IDA7XG5cbiAgZnVuY3Rpb24gX1N5bWJvbChrZXkpIHtcbiAgICByZXR1cm4gJ19fJyArIGtleSArICdfJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlOSkgKyAnXycgKyArK2lkQ291bnRlciArICdfXyc7XG4gIH1cblxuICBfU3ltYm9sLml0ZXJhdG9yID0gX1N5bWJvbCgnU3ltYm9sLml0ZXJhdG9yJyk7XG4gIHJldHVybiBfU3ltYm9sO1xufSgpO1xuXG4vLyBXZWFrTWFwIHBvbHlmaWxsLCBuZWVkZWQgZm9yIEFuZHJvaWQgNC40XG4vLyBSZWxhdGVkIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzEwNzFcbi8vIGh0dHA6Ly93ZWJyZWZsZWN0aW9uLmJsb2dzcG90LmZpLzIwMTUvMDQvYS13ZWFrbWFwLXBvbHlmaWxsLWluLTIwLWxpbmVzLW9mLWNvZGUuaHRtbFxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxudmFyIFdlYWtNYXAkMSA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IGZ1bmN0aW9uIChzLCBkUCwgaE9QKSB7XG4gIGZ1bmN0aW9uIFdlYWtNYXAoKSB7XG4gICAgZFAodGhpcywgcywge1xuICAgICAgdmFsdWU6IF9TeW1ib2woJ1dlYWtNYXAnKVxuICAgIH0pO1xuICB9XG5cbiAgV2Vha01hcC5wcm90b3R5cGUgPSB7XG4gICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIGRlbChvKSB7XG4gICAgICBkZWxldGUgb1t0aGlzW3NdXTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KG8pIHtcbiAgICAgIHJldHVybiBvW3RoaXNbc11dO1xuICAgIH0sXG4gICAgaGFzOiBmdW5jdGlvbiBoYXMobykge1xuICAgICAgcmV0dXJuIGhPUC5jYWxsKG8sIHRoaXNbc10pO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobywgdikge1xuICAgICAgZFAobywgdGhpc1tzXSwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB2XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBXZWFrTWFwO1xufShfU3ltYm9sKCdXZWFrTWFwJyksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwge30uaGFzT3duUHJvcGVydHkpO1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW50cyBgV2Vha01hcGBzIGZvciBlYWNoIGVmZmVjdGl2ZWx5LVwicHJpdmF0ZSAgcHJvcGVydHlcIiB0aGF0IGEgYHN3YWxgIGhhcy5cbiAqIEZvciBleGFtcGxlLCB0byBzZXQgdGhlIHByaXZhdGUgcHJvcGVydHkgXCJmb29cIiBvZiBgdGhpc2AgdG8gXCJiYXJcIiwgeW91IGNhbiBgcHJpdmF0ZVByb3BzLmZvby5zZXQodGhpcywgJ2JhcicpYFxuICogVGhpcyBpcyB0aGUgYXBwcm9hY2ggdGhhdCBCYWJlbCB3aWxsIHByb2JhYmx5IHRha2UgdG8gaW1wbGVtZW50IHByaXZhdGUgbWV0aG9kcy9maWVsZHNcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJpdmF0ZS1tZXRob2RzXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9wdWxsLzc1NTVcbiAqIE9uY2Ugd2UgaGF2ZSB0aGUgY2hhbmdlcyBmcm9tIHRoYXQgUFIgaW4gQmFiZWwsIGFuZCBvdXIgY29yZSBjbGFzcyBmaXRzIHJlYXNvbmFibGUgaW4gKm9uZSBtb2R1bGUqXG4gKiAgIHRoZW4gd2UgY2FuIHVzZSB0aGF0IGxhbmd1YWdlIGZlYXR1cmUuXG4gKi9cbnZhciBwcml2YXRlUHJvcHMgPSB7XG4gIHByb21pc2U6IG5ldyBXZWFrTWFwJDEoKSxcbiAgaW5uZXJQYXJhbXM6IG5ldyBXZWFrTWFwJDEoKSxcbiAgZG9tQ2FjaGU6IG5ldyBXZWFrTWFwJDEoKVxufTtcblxuLyoqXG4gKiBFbmFibGVzIGJ1dHRvbnMgYW5kIGhpZGUgbG9hZGVyLlxuICovXG5cbmZ1bmN0aW9uIGhpZGVMb2FkaW5nKCkge1xuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuXG4gIGlmICghaW5uZXJQYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24pIHtcbiAgICBoaWRlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pO1xuXG4gICAgaWYgKCFpbm5lclBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgICBoaWRlKGRvbUNhY2hlLmFjdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUNsYXNzKFtkb21DYWNoZS5wb3B1cCwgZG9tQ2FjaGUuYWN0aW9uc10sIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICBkb21DYWNoZS5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYnVzeScpO1xuICBkb21DYWNoZS5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRJbnB1dChpbnB1dFR5cGUpIHtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgaW5wdXRUeXBlID0gaW5wdXRUeXBlIHx8IGlubmVyUGFyYW1zLmlucHV0O1xuXG4gIGlmICghaW5wdXRUeXBlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzd2l0Y2ggKGlucHV0VHlwZSkge1xuICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgY2FzZSAndGV4dGFyZWEnOlxuICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgcmV0dXJuIGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVdKTtcblxuICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgIHJldHVybiBkb21DYWNoZS5wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCIgaW5wdXRcIikpO1xuXG4gICAgY2FzZSAncmFkaW8nOlxuICAgICAgcmV0dXJuIGRvbUNhY2hlLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIiBpbnB1dDpjaGVja2VkXCIpKSB8fCBkb21DYWNoZS5wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCIgaW5wdXQ6Zmlyc3QtY2hpbGRcIikpO1xuXG4gICAgY2FzZSAncmFuZ2UnOlxuICAgICAgcmV0dXJuIGRvbUNhY2hlLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBpbnB1dFwiKSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5hYmxlQnV0dG9ucygpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGRpc2FibGVCdXR0b25zKCkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuYWJsZUNvbmZpcm1CdXR0b24oKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGRpc2FibGVDb25maXJtQnV0dG9uKCkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuYWJsZUlucHV0KCkge1xuICB2YXIgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG5cbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgdmFyIHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB2YXIgcmFkaW9zID0gcmFkaW9zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgcmFkaW9zW2ldLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbn1cbmZ1bmN0aW9uIGRpc2FibGVJbnB1dCgpIHtcbiAgdmFyIGlucHV0ID0gdGhpcy5nZXRJbnB1dCgpO1xuXG4gIGlmICghaW5wdXQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoaW5wdXQgJiYgaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgIHZhciByYWRpb3NDb250YWluZXIgPSBpbnB1dC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgdmFyIHJhZGlvcyA9IHJhZGlvc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByYWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJhZGlvc1tpXS5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93VmFsaWRhdGlvbkVycm9yKGVycm9yKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIGRvbUNhY2hlLnZhbGlkYXRpb25FcnJvci5pbm5lckhUTUwgPSBlcnJvcjtcbiAgdmFyIHBvcHVwQ29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvbUNhY2hlLnBvcHVwKTtcbiAgZG9tQ2FjaGUudmFsaWRhdGlvbkVycm9yLnN0eWxlLm1hcmdpbkxlZnQgPSBcIi1cIi5jb25jYXQocG9wdXBDb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpKTtcbiAgZG9tQ2FjaGUudmFsaWRhdGlvbkVycm9yLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCItXCIuY29uY2F0KHBvcHVwQ29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICBzaG93KGRvbUNhY2hlLnZhbGlkYXRpb25FcnJvcik7XG4gIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuICBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIHRydWUpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRCeScsIHN3YWxDbGFzc2VzLnZhbGlkYXRpb25lcnJvcik7XG4gICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgYWRkQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpO1xuICB9XG59IC8vIEhpZGUgYmxvY2sgd2l0aCB2YWxpZGF0aW9uIGVycm9yXG5cbmZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbkVycm9yKCkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuXG4gIGlmIChkb21DYWNoZS52YWxpZGF0aW9uRXJyb3IpIHtcbiAgICBoaWRlKGRvbUNhY2hlLnZhbGlkYXRpb25FcnJvcik7XG4gIH1cblxuICB2YXIgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG5cbiAgaWYgKGlucHV0KSB7XG4gICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWludmFsaWQnKTtcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkQnknKTtcbiAgICByZW1vdmVDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NTdGVwcyQxKCkge1xuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICByZXR1cm4gaW5uZXJQYXJhbXMucHJvZ3Jlc3NTdGVwcztcbn1cbmZ1bmN0aW9uIHNldFByb2dyZXNzU3RlcHMocHJvZ3Jlc3NTdGVwcykge1xuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuXG4gIHZhciB1cGRhdGVkUGFyYW1zID0gX2V4dGVuZHMoe30sIGlubmVyUGFyYW1zLCB7XG4gICAgcHJvZ3Jlc3NTdGVwczogcHJvZ3Jlc3NTdGVwc1xuICB9KTtcblxuICBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuc2V0KHRoaXMsIHVwZGF0ZWRQYXJhbXMpO1xuICByZW5kZXJQcm9ncmVzc1N0ZXBzKHVwZGF0ZWRQYXJhbXMpO1xufVxuZnVuY3Rpb24gc2hvd1Byb2dyZXNzU3RlcHMoKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIHNob3coZG9tQ2FjaGUucHJvZ3Jlc3NTdGVwcyk7XG59XG5mdW5jdGlvbiBoaWRlUHJvZ3Jlc3NTdGVwcygpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgaGlkZShkb21DYWNoZS5wcm9ncmVzc1N0ZXBzKTtcbn1cblxudmFyIFRpbWVyID0gZnVuY3Rpb24gVGltZXIoY2FsbGJhY2ssIGRlbGF5KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaW1lcik7XG5cbiAgdmFyIGlkLCBzdGFydGVkLCBydW5uaW5nO1xuICB2YXIgcmVtYWluaW5nID0gZGVsYXk7XG5cbiAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICBzdGFydGVkID0gbmV3IERhdGUoKTtcbiAgICBpZCA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIHJlbWFpbmluZyk7XG4gIH07XG5cbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIHJlbWFpbmluZyAtPSBuZXcgRGF0ZSgpIC0gc3RhcnRlZDtcbiAgfTtcblxuICB0aGlzLmdldFRpbWVyTGVmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocnVubmluZykge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbWFpbmluZztcbiAgfTtcblxuICB0aGlzLnN0YXJ0KCk7XG59O1xuXG52YXIgZGVmYXVsdElucHV0VmFsaWRhdG9ycyA9IHtcbiAgZW1haWw6IGZ1bmN0aW9uIGVtYWlsKHN0cmluZywgZXh0cmFQYXJhbXMpIHtcbiAgICByZXR1cm4gL15bYS16QS1aMC05LitfLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWjAtOS1dezIsMjR9JC8udGVzdChzdHJpbmcpID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlamVjdChleHRyYVBhcmFtcyAmJiBleHRyYVBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSA/IGV4dHJhUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlIDogJ0ludmFsaWQgZW1haWwgYWRkcmVzcycpO1xuICB9LFxuICB1cmw6IGZ1bmN0aW9uIHVybChzdHJpbmcsIGV4dHJhUGFyYW1zKSB7XG4gICAgLy8gdGFrZW4gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzgwOTQzNS8xMzMxNDI1XG4gICAgcmV0dXJuIC9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji8vPV0qKSQvLnRlc3Qoc3RyaW5nKSA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZWplY3QoZXh0cmFQYXJhbXMgJiYgZXh0cmFQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UgPyBleHRyYVBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSA6ICdJbnZhbGlkIFVSTCcpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldCB0eXBlLCB0ZXh0IGFuZCBhY3Rpb25zIG9uIHBvcHVwXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gc2V0UGFyYW1ldGVycyhwYXJhbXMpIHtcbiAgLy8gVXNlIGRlZmF1bHQgYGlucHV0VmFsaWRhdG9yYCBmb3Igc3VwcG9ydGVkIGlucHV0IHR5cGVzIGlmIG5vdCBwcm92aWRlZFxuICBpZiAoIXBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgIE9iamVjdC5rZXlzKGRlZmF1bHRJbnB1dFZhbGlkYXRvcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0ga2V5KSB7XG4gICAgICAgIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9IHBhcmFtcy5leHBlY3RSZWplY3Rpb25zID8gZGVmYXVsdElucHV0VmFsaWRhdG9yc1trZXldIDogU3dhbC5hZGFwdElucHV0VmFsaWRhdG9yKGRlZmF1bHRJbnB1dFZhbGlkYXRvcnNba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gLy8gRGV0ZXJtaW5lIGlmIHRoZSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgaXMgdmFsaWRcblxuXG4gIGlmICghcGFyYW1zLnRhcmdldCB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCA9PT0gJ3N0cmluZycgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgfHwgdHlwZW9mIHBhcmFtcy50YXJnZXQgIT09ICdzdHJpbmcnICYmICFwYXJhbXMudGFyZ2V0LmFwcGVuZENoaWxkKSB7XG4gICAgd2FybignVGFyZ2V0IHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJib2R5XCInKTtcbiAgICBwYXJhbXMudGFyZ2V0ID0gJ2JvZHknO1xuICB9XG5cbiAgdmFyIHBvcHVwO1xuICB2YXIgb2xkUG9wdXAgPSBnZXRQb3B1cCgpO1xuICB2YXIgdGFyZ2V0RWxlbWVudCA9IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgOiBwYXJhbXMudGFyZ2V0OyAvLyBJZiB0aGUgbW9kZWwgdGFyZ2V0IGhhcyBjaGFuZ2VkLCByZWZyZXNoIHRoZSBwb3B1cFxuXG4gIGlmIChvbGRQb3B1cCAmJiB0YXJnZXRFbGVtZW50ICYmIG9sZFBvcHVwLnBhcmVudE5vZGUgIT09IHRhcmdldEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHBvcHVwID0gaW5pdChwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIHBvcHVwID0gb2xkUG9wdXAgfHwgaW5pdChwYXJhbXMpO1xuICB9IC8vIFNldCBwb3B1cCB3aWR0aFxuXG5cbiAgaWYgKHBhcmFtcy53aWR0aCkge1xuICAgIHBvcHVwLnN0eWxlLndpZHRoID0gdHlwZW9mIHBhcmFtcy53aWR0aCA9PT0gJ251bWJlcicgPyBwYXJhbXMud2lkdGggKyAncHgnIDogcGFyYW1zLndpZHRoO1xuICB9IC8vIFNldCBwb3B1cCBwYWRkaW5nXG5cblxuICBpZiAocGFyYW1zLnBhZGRpbmcpIHtcbiAgICBwb3B1cC5zdHlsZS5wYWRkaW5nID0gdHlwZW9mIHBhcmFtcy5wYWRkaW5nID09PSAnbnVtYmVyJyA/IHBhcmFtcy5wYWRkaW5nICsgJ3B4JyA6IHBhcmFtcy5wYWRkaW5nO1xuICB9IC8vIFNldCBwb3B1cCBiYWNrZ3JvdW5kXG5cblxuICBpZiAocGFyYW1zLmJhY2tncm91bmQpIHtcbiAgICBwb3B1cC5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tncm91bmQ7XG4gIH1cblxuICB2YXIgcG9wdXBCYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwb3B1cCkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICB2YXIgc3VjY2Vzc0ljb25QYXJ0cyA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXSwgLnN3YWwyLXN1Y2Nlc3MtZml4Jyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWNjZXNzSWNvblBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3VjY2Vzc0ljb25QYXJ0c1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwb3B1cEJhY2tncm91bmRDb2xvcjtcbiAgfVxuXG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIGNsb3NlQnV0dG9uID0gZ2V0Q2xvc2VCdXR0b24oKTtcbiAgdmFyIGZvb3RlciA9IGdldEZvb3RlcigpOyAvLyBUaXRsZVxuXG4gIHJlbmRlclRpdGxlKHBhcmFtcyk7IC8vIENvbnRlbnRcblxuICByZW5kZXJDb250ZW50KHBhcmFtcyk7IC8vIEJhY2tkcm9wXG5cbiAgaWYgKHR5cGVvZiBwYXJhbXMuYmFja2Ryb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgZ2V0Q29udGFpbmVyKCkuc3R5bGUuYmFja2dyb3VuZCA9IHBhcmFtcy5iYWNrZHJvcDtcbiAgfSBlbHNlIGlmICghcGFyYW1zLmJhY2tkcm9wKSB7XG4gICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKTtcbiAgfVxuXG4gIGlmICghcGFyYW1zLmJhY2tkcm9wICYmIHBhcmFtcy5hbGxvd091dHNpZGVDbGljaykge1xuICAgIHdhcm4oJ1wiYWxsb3dPdXRzaWRlQ2xpY2tcIiBwYXJhbWV0ZXIgcmVxdWlyZXMgYGJhY2tkcm9wYCBwYXJhbWV0ZXIgdG8gYmUgc2V0IHRvIGB0cnVlYCcpO1xuICB9IC8vIFBvc2l0aW9uXG5cblxuICBpZiAocGFyYW1zLnBvc2l0aW9uIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1twYXJhbXMucG9zaXRpb25dKTtcbiAgfSBlbHNlIHtcbiAgICB3YXJuKCdUaGUgXCJwb3NpdGlvblwiIHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJjZW50ZXJcIicpO1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuY2VudGVyKTtcbiAgfSAvLyBHcm93XG5cblxuICBpZiAocGFyYW1zLmdyb3cgJiYgdHlwZW9mIHBhcmFtcy5ncm93ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBncm93Q2xhc3MgPSAnZ3Jvdy0nICsgcGFyYW1zLmdyb3c7XG5cbiAgICBpZiAoZ3Jvd0NsYXNzIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW2dyb3dDbGFzc10pO1xuICAgIH1cbiAgfSAvLyBBbmltYXRpb25cblxuXG4gIGlmICh0eXBlb2YgcGFyYW1zLmFuaW1hdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHBhcmFtcy5hbmltYXRpb24gPSBwYXJhbXMuYW5pbWF0aW9uLmNhbGwoKTtcbiAgfSAvLyBDbG9zZSBidXR0b25cblxuXG4gIGlmIChwYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKSB7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNsb3NlQnV0dG9uQXJpYUxhYmVsKTtcbiAgICBzaG93KGNsb3NlQnV0dG9uKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNsb3NlQnV0dG9uKTtcbiAgfSAvLyBEZWZhdWx0IENsYXNzXG5cblxuICBwb3B1cC5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5wb3B1cDtcblxuICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbiAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMudG9hc3QpO1xuICB9IGVsc2Uge1xuICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5tb2RhbCk7XG4gIH0gLy8gQ3VzdG9tIENsYXNzXG5cblxuICBpZiAocGFyYW1zLmN1c3RvbUNsYXNzKSB7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHBhcmFtcy5jdXN0b21DbGFzcyk7XG4gIH0gLy8gUHJvZ3Jlc3Mgc3RlcHNcblxuXG4gIHJlbmRlclByb2dyZXNzU3RlcHMocGFyYW1zKTsgLy8gSWNvblxuXG4gIHJlbmRlckljb24ocGFyYW1zKTsgLy8gSW1hZ2VcblxuICByZW5kZXJJbWFnZShwYXJhbXMpOyAvLyBBY3Rpb25zIChidXR0b25zKVxuXG4gIHJlbmRlckFjdGlvbnMocGFyYW1zKTsgLy8gRm9vdGVyXG5cbiAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmZvb3RlciwgZm9vdGVyKTsgLy8gQ1NTIGFuaW1hdGlvblxuXG4gIGlmIChwYXJhbXMuYW5pbWF0aW9uID09PSB0cnVlKSB7XG4gICAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pO1xuICB9IC8vIHNob3dMb2FkZXJPbkNvbmZpcm0gJiYgcHJlQ29uZmlybVxuXG5cbiAgaWYgKHBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtICYmICFwYXJhbXMucHJlQ29uZmlybSkge1xuICAgIHdhcm4oJ3Nob3dMb2FkZXJPbkNvbmZpcm0gaXMgc2V0IHRvIHRydWUsIGJ1dCBwcmVDb25maXJtIGlzIG5vdCBkZWZpbmVkLlxcbicgKyAnc2hvd0xvYWRlck9uQ29uZmlybSBzaG91bGQgYmUgdXNlZCB0b2dldGhlciB3aXRoIHByZUNvbmZpcm0sIHNlZSB1c2FnZSBleGFtcGxlOlxcbicgKyAnaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vI2FqYXgtcmVxdWVzdCcpO1xuICB9XG59XG5cbi8qKlxuICogT3BlbiBwb3B1cCwgYWRkIG5lY2Vzc2FyeSBjbGFzc2VzIGFuZCBzdHlsZXMsIGZpeCBzY3JvbGxiYXJcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXNcbiAqL1xuXG52YXIgb3BlblBvcHVwID0gZnVuY3Rpb24gb3BlblBvcHVwKHBhcmFtcykge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgaWYgKHBhcmFtcy5vbkJlZm9yZU9wZW4gIT09IG51bGwgJiYgdHlwZW9mIHBhcmFtcy5vbkJlZm9yZU9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICBwYXJhbXMub25CZWZvcmVPcGVuKHBvcHVwKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuYW5pbWF0aW9uKSB7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnNob3cpO1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuZmFkZSk7XG4gICAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmhpZGUpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5mYWRlKTtcbiAgfVxuXG4gIHNob3cocG9wdXApOyAvLyBzY3JvbGxpbmcgaXMgJ2hpZGRlbicgdW50aWwgYW5pbWF0aW9uIGlzIGRvbmUsIGFmdGVyIHRoYXQgJ2F1dG8nXG5cbiAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuXG4gIGlmIChhbmltYXRpb25FbmRFdmVudCAmJiAhaGFzQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKSkge1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQoKSB7XG4gICAgICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKTtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgfVxuXG4gIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHksIGNvbnRhaW5lcl0sIHN3YWxDbGFzc2VzLnNob3duKTtcblxuICBpZiAocGFyYW1zLmhlaWdodEF1dG8gJiYgcGFyYW1zLmJhY2tkcm9wICYmICFwYXJhbXMudG9hc3QpIHtcbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10pO1xuICB9XG5cbiAgaWYgKGlzTW9kYWwoKSkge1xuICAgIGZpeFNjcm9sbGJhcigpO1xuICAgIGlPU2ZpeCgpO1xuICAgIHNldEFyaWFIaWRkZW4oKTtcbiAgfVxuXG4gIGlmICghaXNUb2FzdCgpICYmICFnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQpIHtcbiAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICB9XG5cbiAgaWYgKHBhcmFtcy5vbk9wZW4gIT09IG51bGwgJiYgdHlwZW9mIHBhcmFtcy5vbk9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHBhcmFtcy5vbk9wZW4ocG9wdXApO1xuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBfbWFpbih1c2VyUGFyYW1zKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgc2hvd1dhcm5pbmdzRm9yUGFyYW1zKHVzZXJQYXJhbXMpO1xuXG4gIHZhciBpbm5lclBhcmFtcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UGFyYW1zLCB1c2VyUGFyYW1zKTtcblxuICBzZXRQYXJhbWV0ZXJzKGlubmVyUGFyYW1zKTtcbiAgT2JqZWN0LmZyZWV6ZShpbm5lclBhcmFtcyk7XG4gIHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5zZXQodGhpcywgaW5uZXJQYXJhbXMpOyAvLyBjbGVhciB0aGUgcHJldmlvdXMgdGltZXJcblxuICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgIGdsb2JhbFN0YXRlLnRpbWVvdXQuc3RvcCgpO1xuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS50aW1lb3V0O1xuICB9IC8vIGNsZWFyIHRoZSByZXN0b3JlIGZvY3VzIHRpbWVvdXRcblxuXG4gIGNsZWFyVGltZW91dChnbG9iYWxTdGF0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0KTtcbiAgdmFyIGRvbUNhY2hlID0ge1xuICAgIHBvcHVwOiBnZXRQb3B1cCgpLFxuICAgIGNvbnRhaW5lcjogZ2V0Q29udGFpbmVyKCksXG4gICAgY29udGVudDogZ2V0Q29udGVudCgpLFxuICAgIGFjdGlvbnM6IGdldEFjdGlvbnMoKSxcbiAgICBjb25maXJtQnV0dG9uOiBnZXRDb25maXJtQnV0dG9uKCksXG4gICAgY2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24oKSxcbiAgICBjbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24oKSxcbiAgICB2YWxpZGF0aW9uRXJyb3I6IGdldFZhbGlkYXRpb25FcnJvcigpLFxuICAgIHByb2dyZXNzU3RlcHM6IGdldFByb2dyZXNzU3RlcHMoKVxuICB9O1xuICBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuc2V0KHRoaXMsIGRvbUNhY2hlKTtcbiAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvLyBmdW5jdGlvbnMgdG8gaGFuZGxlIGFsbCByZXNvbHZpbmcvcmVqZWN0aW5nL3NldHRsaW5nXG4gICAgdmFyIHN1Y2NlZWRXaXRoID0gZnVuY3Rpb24gc3VjY2VlZFdpdGgodmFsdWUpIHtcbiAgICAgIGNvbnN0cnVjdG9yLmNsb3NlUG9wdXAoaW5uZXJQYXJhbXMub25DbG9zZSwgaW5uZXJQYXJhbXMub25BZnRlckNsb3NlKTsgLy8gVE9ETzogbWFrZSBjbG9zZVBvcHVwIGFuICppbnN0YW5jZSogbWV0aG9kXG5cbiAgICAgIGlmIChpbm5lclBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGlzbWlzc1dpdGggPSBmdW5jdGlvbiBkaXNtaXNzV2l0aChkaXNtaXNzKSB7XG4gICAgICBjb25zdHJ1Y3Rvci5jbG9zZVBvcHVwKGlubmVyUGFyYW1zLm9uQ2xvc2UsIGlubmVyUGFyYW1zLm9uQWZ0ZXJDbG9zZSk7XG5cbiAgICAgIGlmIChpbm5lclBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgIHJlamVjdChkaXNtaXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIGRpc21pc3M6IGRpc21pc3NcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBlcnJvcldpdGggPSBmdW5jdGlvbiBlcnJvcldpdGgoZXJyb3IkJDEpIHtcbiAgICAgIGNvbnN0cnVjdG9yLmNsb3NlUG9wdXAoaW5uZXJQYXJhbXMub25DbG9zZSwgaW5uZXJQYXJhbXMub25BZnRlckNsb3NlKTtcbiAgICAgIHJlamVjdChlcnJvciQkMSk7XG4gICAgfTsgLy8gQ2xvc2Ugb24gdGltZXJcblxuXG4gICAgaWYgKGlubmVyUGFyYW1zLnRpbWVyKSB7XG4gICAgICBnbG9iYWxTdGF0ZS50aW1lb3V0ID0gbmV3IFRpbWVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlzbWlzc1dpdGgoJ3RpbWVyJyk7XG4gICAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS50aW1lb3V0O1xuICAgICAgfSwgaW5uZXJQYXJhbXMudGltZXIpO1xuICAgIH0gLy8gR2V0IHRoZSB2YWx1ZSBvZiB0aGUgcG9wdXAgaW5wdXRcblxuXG4gICAgdmFyIGdldElucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICAgICAgdmFyIGlucHV0ID0gX3RoaXMuZ2V0SW5wdXQoKTtcblxuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQgPyAxIDogMDtcblxuICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQgPyBpbnB1dC52YWx1ZSA6IG51bGw7XG5cbiAgICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmZpbGVzLmxlbmd0aCA/IGlucHV0LmZpbGVzWzBdIDogbnVsbDtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBpbm5lclBhcmFtcy5pbnB1dEF1dG9UcmltID8gaW5wdXQudmFsdWUudHJpbSgpIDogaW5wdXQudmFsdWU7XG4gICAgICB9XG4gICAgfTsgLy8gaW5wdXQgYXV0b2ZvY3VzXG5cblxuICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IF90aGlzLmdldElucHV0KCk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHZhciBjb25maXJtID0gZnVuY3Rpb24gY29uZmlybSh2YWx1ZSkge1xuICAgICAgaWYgKGlubmVyUGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0pIHtcbiAgICAgICAgY29uc3RydWN0b3Iuc2hvd0xvYWRpbmcoKTsgLy8gVE9ETzogbWFrZSBzaG93TG9hZGluZyBhbiAqaW5zdGFuY2UqIG1ldGhvZFxuICAgICAgfVxuXG4gICAgICBpZiAoaW5uZXJQYXJhbXMucHJlQ29uZmlybSkge1xuICAgICAgICBfdGhpcy5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuXG4gICAgICAgIHZhciBwcmVDb25maXJtUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBpbm5lclBhcmFtcy5wcmVDb25maXJtKHZhbHVlLCBpbm5lclBhcmFtcy5leHRyYVBhcmFtcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpbm5lclBhcmFtcy5leHBlY3RSZWplY3Rpb25zKSB7XG4gICAgICAgICAgcHJlQ29uZmlybVByb21pc2UudGhlbihmdW5jdGlvbiAocHJlQ29uZmlybVZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VjY2VlZFdpdGgocHJlQ29uZmlybVZhbHVlIHx8IHZhbHVlKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICBfdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgIF90aGlzLnNob3dWYWxpZGF0aW9uRXJyb3IodmFsaWRhdGlvbkVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmVDb25maXJtUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwcmVDb25maXJtVmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChpc1Zpc2libGUoZG9tQ2FjaGUudmFsaWRhdGlvbkVycm9yKSB8fCBwcmVDb25maXJtVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIF90aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdWNjZWVkV2l0aChwcmVDb25maXJtVmFsdWUgfHwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvciQkMSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yV2l0aChlcnJvciQkMSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1Y2NlZWRXaXRoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9OyAvLyBNb3VzZSBpbnRlcmFjdGlvbnNcblxuXG4gICAgdmFyIG9uQnV0dG9uRXZlbnQgPSBmdW5jdGlvbiBvbkJ1dHRvbkV2ZW50KGUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgIHZhciBjb25maXJtQnV0dG9uID0gZG9tQ2FjaGUuY29uZmlybUJ1dHRvbixcbiAgICAgICAgICBjYW5jZWxCdXR0b24gPSBkb21DYWNoZS5jYW5jZWxCdXR0b247XG4gICAgICB2YXIgdGFyZ2V0ZWRDb25maXJtID0gY29uZmlybUJ1dHRvbiAmJiAoY29uZmlybUJ1dHRvbiA9PT0gdGFyZ2V0IHx8IGNvbmZpcm1CdXR0b24uY29udGFpbnModGFyZ2V0KSk7XG4gICAgICB2YXIgdGFyZ2V0ZWRDYW5jZWwgPSBjYW5jZWxCdXR0b24gJiYgKGNhbmNlbEJ1dHRvbiA9PT0gdGFyZ2V0IHx8IGNhbmNlbEJ1dHRvbi5jb250YWlucyh0YXJnZXQpKTtcblxuICAgICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgIC8vIENsaWNrZWQgJ2NvbmZpcm0nXG4gICAgICAgICAgaWYgKHRhcmdldGVkQ29uZmlybSAmJiBjb25zdHJ1Y3Rvci5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgX3RoaXMuZGlzYWJsZUJ1dHRvbnMoKTtcblxuICAgICAgICAgICAgaWYgKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICAgICAgICAgIHZhciBpbnB1dFZhbHVlID0gZ2V0SW5wdXRWYWx1ZSgpO1xuXG4gICAgICAgICAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIF90aGlzLmRpc2FibGVJbnB1dCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRpb25Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgaW5uZXJQYXJhbXMuZXh0cmFQYXJhbXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlubmVyUGFyYW1zLmV4cGVjdFJlamVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25Qcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVCdXR0b25zKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlSW5wdXQoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25maXJtKGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHZhbGlkYXRpb25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVCdXR0b25zKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlSW5wdXQoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcih2YWxpZGF0aW9uRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblByb21pc2UudGhlbihmdW5jdGlvbiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVuYWJsZUJ1dHRvbnMoKTtcblxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVJbnB1dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zaG93VmFsaWRhdGlvbkVycm9yKHZhbGlkYXRpb25FcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uZmlybShpbnB1dFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yJCQxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcldpdGgoZXJyb3IkJDEpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmZpcm0oaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbmZpcm0odHJ1ZSk7XG4gICAgICAgICAgICB9IC8vIENsaWNrZWQgJ2NhbmNlbCdcblxuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ZWRDYW5jZWwgJiYgY29uc3RydWN0b3IuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIF90aGlzLmRpc2FibGVCdXR0b25zKCk7XG5cbiAgICAgICAgICAgIGRpc21pc3NXaXRoKGNvbnN0cnVjdG9yLkRpc21pc3NSZWFzb24uY2FuY2VsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYnV0dG9ucyA9IGRvbUNhY2hlLnBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBidXR0b25zW2ldLm9uY2xpY2sgPSBvbkJ1dHRvbkV2ZW50O1xuICAgICAgYnV0dG9uc1tpXS5vbm1vdXNlb3ZlciA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2VvdXQgPSBvbkJ1dHRvbkV2ZW50O1xuICAgICAgYnV0dG9uc1tpXS5vbm1vdXNlZG93biA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgfSAvLyBDbG9zaW5nIHBvcHVwIGJ5IGNsb3NlIGJ1dHRvblxuXG5cbiAgICBkb21DYWNoZS5jbG9zZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgfTtcblxuICAgIGlmIChpbm5lclBhcmFtcy50b2FzdCkge1xuICAgICAgLy8gQ2xvc2luZyBwb3B1cCBieSBpbnRlcm5hbCBjbGlja1xuICAgICAgZG9tQ2FjaGUucG9wdXAub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlubmVyUGFyYW1zLnNob3dDb25maXJtQnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dDYW5jZWxCdXR0b24gfHwgaW5uZXJQYXJhbXMuc2hvd0Nsb3NlQnV0dG9uIHx8IGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7IC8vIElnbm9yZSBjbGljayBldmVudHMgdGhhdCBoYWQgbW91c2Vkb3duIG9uIHRoZSBwb3B1cCBidXQgbW91c2V1cCBvbiB0aGUgY29udGFpbmVyXG4gICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gd2hlbiB0aGUgdXNlciBkcmFncyBhIHNsaWRlclxuXG4gICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9IHVuZGVmaW5lZDsgLy8gV2Ugb25seSBjaGVjayBpZiB0aGUgbW91c2V1cCB0YXJnZXQgaXMgdGhlIGNvbnRhaW5lciBiZWNhdXNlIHVzdWFsbHkgaXQgZG9lc24ndFxuICAgICAgICAgIC8vIGhhdmUgYW55IG90aGVyIGRpcmVjdCBjaGlsZHJlbiBhc2lkZSBvZiB0aGUgcG9wdXBcblxuICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUuY29udGFpbmVyKSB7XG4gICAgICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07IC8vIElnbm9yZSBjbGljayBldmVudHMgdGhhdCBoYWQgbW91c2Vkb3duIG9uIHRoZSBjb250YWluZXIgYnV0IG1vdXNldXAgb24gdGhlIHBvcHVwXG5cblxuICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2V1cCA9IHVuZGVmaW5lZDsgLy8gV2UgYWxzbyBuZWVkIHRvIGNoZWNrIGlmIHRoZSBtb3VzZXVwIHRhcmdldCBpcyBhIGNoaWxkIG9mIHRoZSBwb3B1cFxuXG4gICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb21DYWNoZS5wb3B1cCB8fCBkb21DYWNoZS5wb3B1cC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoaWdub3JlT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBkb21DYWNoZS5jb250YWluZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dPdXRzaWRlQ2xpY2spKSB7XG4gICAgICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5iYWNrZHJvcCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSAvLyBSZXZlcnNlIGJ1dHRvbnMgKENvbmZpcm0gb24gdGhlIHJpZ2h0IHNpZGUpXG5cblxuICAgIGlmIChpbm5lclBhcmFtcy5yZXZlcnNlQnV0dG9ucykge1xuICAgICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb21DYWNoZS5jYW5jZWxCdXR0b24sIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24sIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbik7XG4gICAgfSAvLyBGb2N1cyBoYW5kbGluZ1xuXG5cbiAgICB2YXIgc2V0Rm9jdXMgPSBmdW5jdGlvbiBzZXRGb2N1cyhpbmRleCwgaW5jcmVtZW50KSB7XG4gICAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cyhpbm5lclBhcmFtcy5mb2N1c0NhbmNlbCk7IC8vIHNlYXJjaCBmb3IgdmlzaWJsZSBlbGVtZW50cyBhbmQgc2VsZWN0IHRoZSBuZXh0IHBvc3NpYmxlIG1hdGNoXG5cbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgaW5kZXggPSBpbmRleCArIGluY3JlbWVudDsgLy8gcm9sbG92ZXIgdG8gZmlyc3QgaXRlbVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgaW5kZXggPSAwOyAvLyBnbyB0byBsYXN0IGl0ZW1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBpbmRleCA9IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9jdXNhYmxlRWxlbWVudHNbaW5kZXhdLmZvY3VzKCk7XG4gICAgICB9IC8vIG5vIHZpc2libGUgZm9jdXNhYmxlIGVsZW1lbnRzLCBmb2N1cyB0aGUgcG9wdXBcblxuXG4gICAgICBkb21DYWNoZS5wb3B1cC5mb2N1cygpO1xuICAgIH07XG5cbiAgICB2YXIga2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiBrZXlkb3duSGFuZGxlcihlLCBpbm5lclBhcmFtcykge1xuICAgICAgaWYgKGlubmVyUGFyYW1zLnN0b3BLZXlkb3duUHJvcGFnYXRpb24pIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFycm93S2V5cyA9IFsnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnLCAnQXJyb3dVcCcsICdBcnJvd0Rvd24nLCAnTGVmdCcsICdSaWdodCcsICdVcCcsICdEb3duJyAvLyBJRTExXG4gICAgICBdO1xuXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgIWUuaXNDb21wb3NpbmcpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICYmIF90aGlzLmdldElucHV0KCkgJiYgZS50YXJnZXQub3V0ZXJIVE1MID09PSBfdGhpcy5nZXRJbnB1dCgpLm91dGVySFRNTCkge1xuICAgICAgICAgIGlmIChbJ3RleHRhcmVhJywgJ2ZpbGUnXS5pbmRleE9mKGlubmVyUGFyYW1zLmlucHV0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gZG8gbm90IHN1Ym1pdFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0cnVjdG9yLmNsaWNrQ29uZmlybSgpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSAvLyBUQUJcblxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ1RhYicpIHtcbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICAgICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoaW5uZXJQYXJhbXMuZm9jdXNDYW5jZWwpO1xuICAgICAgICB2YXIgYnRuSW5kZXggPSAtMTtcblxuICAgICAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQgPT09IGZvY3VzYWJsZUVsZW1lbnRzW19pMl0pIHtcbiAgICAgICAgICAgIGJ0bkluZGV4ID0gX2kyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgLy8gQ3ljbGUgdG8gdGhlIG5leHQgYnV0dG9uXG4gICAgICAgICAgc2V0Rm9jdXMoYnRuSW5kZXgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEN5Y2xlIHRvIHRoZSBwcmV2IGJ1dHRvblxuICAgICAgICAgIHNldEZvY3VzKGJ0bkluZGV4LCAtMSk7XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIEFSUk9XUyAtIHN3aXRjaCBmb2N1cyBiZXR3ZWVuIGJ1dHRvbnNcbiAgICAgIH0gZWxzZSBpZiAoYXJyb3dLZXlzLmluZGV4T2YoZS5rZXkpICE9PSAtMSkge1xuICAgICAgICAvLyBmb2N1cyBDYW5jZWwgYnV0dG9uIGlmIENvbmZpcm0gYnV0dG9uIGlzIGN1cnJlbnRseSBmb2N1c2VkXG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb21DYWNoZS5jb25maXJtQnV0dG9uICYmIGlzVmlzaWJsZShkb21DYWNoZS5jYW5jZWxCdXR0b24pKSB7XG4gICAgICAgICAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmZvY3VzKCk7IC8vIGFuZCB2aWNlIHZlcnNhXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZG9tQ2FjaGUuY2FuY2VsQnV0dG9uICYmIGlzVmlzaWJsZShkb21DYWNoZS5jb25maXJtQnV0dG9uKSkge1xuICAgICAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZm9jdXMoKTtcbiAgICAgICAgfSAvLyBFU0NcblxuICAgICAgfSBlbHNlIGlmICgoZS5rZXkgPT09ICdFc2NhcGUnIHx8IGUua2V5ID09PSAnRXNjJykgJiYgY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFc2NhcGVLZXkpID09PSB0cnVlKSB7XG4gICAgICAgIGRpc21pc3NXaXRoKGNvbnN0cnVjdG9yLkRpc21pc3NSZWFzb24uZXNjKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQpIHtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7XG4gICAgICAgIGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmVcbiAgICAgIH0pO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGtleWRvd25IYW5kbGVyKGUsIGlubmVyUGFyYW1zKTtcbiAgICAgIH07XG5cbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQgPSBpbm5lclBhcmFtcy5rZXlkb3duTGlzdGVuZXJDYXB0dXJlID8gd2luZG93IDogZG9tQ2FjaGUucG9wdXA7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlID0gaW5uZXJQYXJhbXMua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7XG4gICAgICAgIGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmVcbiAgICAgIH0pO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgX3RoaXMuZW5hYmxlQnV0dG9ucygpO1xuXG4gICAgX3RoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgIF90aGlzLnJlc2V0VmFsaWRhdGlvbkVycm9yKCk7XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMudG9hc3QgJiYgKGlubmVyUGFyYW1zLmlucHV0IHx8IGlubmVyUGFyYW1zLmZvb3RlciB8fCBpbm5lclBhcmFtcy5zaG93Q2xvc2VCdXR0b24pKSB7XG4gICAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1sndG9hc3QtY29sdW1uJ10pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1sndG9hc3QtY29sdW1uJ10pO1xuICAgIH0gLy8gaW5wdXRzXG5cblxuICAgIHZhciBpbnB1dFR5cGVzID0gWydpbnB1dCcsICdmaWxlJywgJ3JhbmdlJywgJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveCcsICd0ZXh0YXJlYSddO1xuICAgIHZhciBpbnB1dDtcblxuICAgIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IGlucHV0VHlwZXMubGVuZ3RoOyBfaTMrKykge1xuICAgICAgdmFyIGlucHV0Q2xhc3MgPSBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVzW19pM11dO1xuICAgICAgdmFyIGlucHV0Q29udGFpbmVyID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIGlucHV0Q2xhc3MpO1xuICAgICAgaW5wdXQgPSBfdGhpcy5nZXRJbnB1dChpbnB1dFR5cGVzW19pM10pOyAvLyBzZXQgYXR0cmlidXRlc1xuXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgZm9yICh2YXIgaiBpbiBpbnB1dC5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgaWYgKGlucHV0LmF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoaikpIHtcbiAgICAgICAgICAgIHZhciBhdHRyTmFtZSA9IGlucHV0LmF0dHJpYnV0ZXNbal0ubmFtZTtcblxuICAgICAgICAgICAgaWYgKGF0dHJOYW1lICE9PSAndHlwZScgJiYgYXR0ck5hbWUgIT09ICd2YWx1ZScpIHtcbiAgICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBhdHRyIGluIGlubmVyUGFyYW1zLmlucHV0QXR0cmlidXRlcykge1xuICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShhdHRyLCBpbm5lclBhcmFtcy5pbnB1dEF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgICAgICB9XG4gICAgICB9IC8vIHNldCBjbGFzc1xuXG5cbiAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTmFtZSA9IGlucHV0Q2xhc3M7XG5cbiAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dENsYXNzKSB7XG4gICAgICAgIGFkZENsYXNzKGlucHV0Q29udGFpbmVyLCBpbm5lclBhcmFtcy5pbnB1dENsYXNzKTtcbiAgICAgIH1cblxuICAgICAgaGlkZShpbnB1dENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgdmFyIHBvcHVsYXRlSW5wdXRPcHRpb25zO1xuXG4gICAgc3dpdGNoIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAndGVsJzpcbiAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgIHtcbiAgICAgICAgICBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBpbm5lclBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gaW5uZXJQYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgICAgICBpbnB1dC50eXBlID0gaW5uZXJQYXJhbXMuaW5wdXQ7XG4gICAgICAgICAgc2hvdyhpbnB1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIHtcbiAgICAgICAgICBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5maWxlKTtcbiAgICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGlubmVyUGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgICAgaW5wdXQudHlwZSA9IGlubmVyUGFyYW1zLmlucHV0O1xuICAgICAgICAgIHNob3coaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciByYW5nZSA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5yYW5nZSk7XG4gICAgICAgICAgdmFyIHJhbmdlSW5wdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgIHZhciByYW5nZU91dHB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ291dHB1dCcpO1xuICAgICAgICAgIHJhbmdlSW5wdXQudmFsdWUgPSBpbm5lclBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICAgIHJhbmdlSW5wdXQudHlwZSA9IGlubmVyUGFyYW1zLmlucHV0O1xuICAgICAgICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgICBzaG93KHJhbmdlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHNlbGVjdCA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5zZWxlY3QpO1xuICAgICAgICAgIHNlbGVjdC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IGlubmVyUGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHBvcHVsYXRlSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICAgICAgICAgICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGlucHV0T3B0aW9uKSB7XG4gICAgICAgICAgICAgIHZhciBvcHRpb25WYWx1ZSA9IGlucHV0T3B0aW9uWzBdO1xuICAgICAgICAgICAgICB2YXIgb3B0aW9uTGFiZWwgPSBpbnB1dE9wdGlvblsxXTtcbiAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgICAgICAgb3B0aW9uLmlubmVySFRNTCA9IG9wdGlvbkxhYmVsO1xuXG4gICAgICAgICAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IG9wdGlvblZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNob3coc2VsZWN0KTtcbiAgICAgICAgICAgIHNlbGVjdC5mb2N1cygpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgcmFkaW8gPSBnZXRDaGlsZEJ5Q2xhc3MoZG9tQ2FjaGUuY29udGVudCwgc3dhbENsYXNzZXMucmFkaW8pO1xuICAgICAgICAgIHJhZGlvLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgcG9wdWxhdGVJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBwb3B1bGF0ZUlucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dE9wdGlvbikge1xuICAgICAgICAgICAgICB2YXIgcmFkaW9WYWx1ZSA9IGlucHV0T3B0aW9uWzBdO1xuICAgICAgICAgICAgICB2YXIgcmFkaW9MYWJlbCA9IGlucHV0T3B0aW9uWzFdO1xuICAgICAgICAgICAgICB2YXIgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgIHZhciByYWRpb0xhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgIHJhZGlvSW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgICAgICAgICAgIHJhZGlvSW5wdXQubmFtZSA9IHN3YWxDbGFzc2VzLnJhZGlvO1xuICAgICAgICAgICAgICByYWRpb0lucHV0LnZhbHVlID0gcmFkaW9WYWx1ZTtcblxuICAgICAgICAgICAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZS50b1N0cmluZygpID09PSByYWRpb1ZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICByYWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSByYWRpb0xhYmVsO1xuICAgICAgICAgICAgICBsYWJlbC5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5sYWJlbDtcbiAgICAgICAgICAgICAgcmFkaW9MYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFkaW9JbnB1dCk7XG4gICAgICAgICAgICAgIHJhZGlvTGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgcmFkaW8uYXBwZW5kQ2hpbGQocmFkaW9MYWJlbEVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzaG93KHJhZGlvKTtcbiAgICAgICAgICAgIHZhciByYWRpb3MgPSByYWRpby5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXG4gICAgICAgICAgICBpZiAocmFkaW9zLmxlbmd0aCkge1xuICAgICAgICAgICAgICByYWRpb3NbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGNoZWNrYm94ID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzLmNoZWNrYm94KTtcblxuICAgICAgICAgIHZhciBjaGVja2JveElucHV0ID0gX3RoaXMuZ2V0SW5wdXQoJ2NoZWNrYm94Jyk7XG5cbiAgICAgICAgICBjaGVja2JveElucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgIGNoZWNrYm94SW5wdXQudmFsdWUgPSAxO1xuICAgICAgICAgIGNoZWNrYm94SW5wdXQuaWQgPSBzd2FsQ2xhc3Nlcy5jaGVja2JveDtcbiAgICAgICAgICBjaGVja2JveElucHV0LmNoZWNrZWQgPSBCb29sZWFuKGlubmVyUGFyYW1zLmlucHV0VmFsdWUpO1xuICAgICAgICAgIHZhciBsYWJlbCA9IGNoZWNrYm94LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBpbm5lclBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgICAgIHNob3coY2hlY2tib3gpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0ZXh0YXJlYSA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSk7XG4gICAgICAgICAgdGV4dGFyZWEudmFsdWUgPSBpbm5lclBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICAgIHRleHRhcmVhLnBsYWNlaG9sZGVyID0gaW5uZXJQYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgICAgICBzaG93KHRleHRhcmVhKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIG51bGw6XG4gICAgICAgIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dCEgRXhwZWN0ZWQgXFxcInRleHRcXFwiLCBcXFwiZW1haWxcXFwiLCBcXFwicGFzc3dvcmRcXFwiLCBcXFwibnVtYmVyXFxcIiwgXFxcInRlbFxcXCIsIFxcXCJzZWxlY3RcXFwiLCBcXFwicmFkaW9cXFwiLCBcXFwiY2hlY2tib3hcXFwiLCBcXFwidGV4dGFyZWFcXFwiLCBcXFwiZmlsZVxcXCIgb3IgXFxcInVybFxcXCIsIGdvdCBcXFwiXCIuY29uY2F0KGlubmVyUGFyYW1zLmlucHV0LCBcIlxcXCJcIikpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXQgPT09ICdzZWxlY3QnIHx8IGlubmVyUGFyYW1zLmlucHV0ID09PSAncmFkaW8nKSB7XG4gICAgICB2YXIgcHJvY2Vzc0lucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHByb2Nlc3NJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBwb3B1bGF0ZUlucHV0T3B0aW9ucyhmb3JtYXRJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoaXNUaGVuYWJsZShpbm5lclBhcmFtcy5pbnB1dE9wdGlvbnMpKSB7XG4gICAgICAgIGNvbnN0cnVjdG9yLnNob3dMb2FkaW5nKCk7XG4gICAgICAgIGlubmVyUGFyYW1zLmlucHV0T3B0aW9ucy50aGVuKGZ1bmN0aW9uIChpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgICBfdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgICAgICAgcHJvY2Vzc0lucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZihpbm5lclBhcmFtcy5pbnB1dE9wdGlvbnMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwcm9jZXNzSW5wdXRPcHRpb25zKGlubmVyUGFyYW1zLmlucHV0T3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dE9wdGlvbnMhIEV4cGVjdGVkIG9iamVjdCwgTWFwIG9yIFByb21pc2UsIGdvdCBcIi5jb25jYXQoX3R5cGVvZihpbm5lclBhcmFtcy5pbnB1dE9wdGlvbnMpKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChbJ3RleHQnLCAnZW1haWwnLCAnbnVtYmVyJywgJ3RlbCcsICd0ZXh0YXJlYSddLmluZGV4T2YoaW5uZXJQYXJhbXMuaW5wdXQpICE9PSAtMSAmJiBpc1RoZW5hYmxlKGlubmVyUGFyYW1zLmlucHV0VmFsdWUpKSB7XG4gICAgICBjb25zdHJ1Y3Rvci5zaG93TG9hZGluZygpO1xuICAgICAgaGlkZShpbnB1dCk7XG4gICAgICBpbm5lclBhcmFtcy5pbnB1dFZhbHVlLnRoZW4oZnVuY3Rpb24gKGlucHV0VmFsdWUpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBpbm5lclBhcmFtcy5pbnB1dCA9PT0gJ251bWJlcicgPyBwYXJzZUZsb2F0KGlucHV0VmFsdWUpIHx8IDAgOiBpbnB1dFZhbHVlICsgJyc7XG4gICAgICAgIHNob3coaW5wdXQpO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuXG4gICAgICAgIF90aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGVycm9yKCdFcnJvciBpbiBpbnB1dFZhbHVlIHByb21pc2U6ICcgKyBlcnIpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBzaG93KGlucHV0KTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICBfdGhpcy5oaWRlTG9hZGluZygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3BlblBvcHVwKGlubmVyUGFyYW1zKTtcblxuICAgIGlmICghaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIGlmICghY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFbnRlcktleSkpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpbm5lclBhcmFtcy5mb2N1c0NhbmNlbCAmJiBpc1Zpc2libGUoZG9tQ2FjaGUuY2FuY2VsQnV0dG9uKSkge1xuICAgICAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5uZXJQYXJhbXMuZm9jdXNDb25maXJtICYmIGlzVmlzaWJsZShkb21DYWNoZS5jb25maXJtQnV0dG9uKSkge1xuICAgICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRGb2N1cygtMSwgMSk7XG4gICAgICB9XG4gICAgfSAvLyBmaXggc2Nyb2xsXG5cblxuICAgIGRvbUNhY2hlLmNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICB9KTtcbn1cblxuXG5cbnZhciBpbnN0YW5jZU1ldGhvZHMgPSBPYmplY3QuZnJlZXplKHtcblx0aGlkZUxvYWRpbmc6IGhpZGVMb2FkaW5nLFxuXHRkaXNhYmxlTG9hZGluZzogaGlkZUxvYWRpbmcsXG5cdGdldElucHV0OiBnZXRJbnB1dCxcblx0ZW5hYmxlQnV0dG9uczogZW5hYmxlQnV0dG9ucyxcblx0ZGlzYWJsZUJ1dHRvbnM6IGRpc2FibGVCdXR0b25zLFxuXHRlbmFibGVDb25maXJtQnV0dG9uOiBlbmFibGVDb25maXJtQnV0dG9uLFxuXHRkaXNhYmxlQ29uZmlybUJ1dHRvbjogZGlzYWJsZUNvbmZpcm1CdXR0b24sXG5cdGVuYWJsZUlucHV0OiBlbmFibGVJbnB1dCxcblx0ZGlzYWJsZUlucHV0OiBkaXNhYmxlSW5wdXQsXG5cdHNob3dWYWxpZGF0aW9uRXJyb3I6IHNob3dWYWxpZGF0aW9uRXJyb3IsXG5cdHJlc2V0VmFsaWRhdGlvbkVycm9yOiByZXNldFZhbGlkYXRpb25FcnJvcixcblx0Z2V0UHJvZ3Jlc3NTdGVwczogZ2V0UHJvZ3Jlc3NTdGVwcyQxLFxuXHRzZXRQcm9ncmVzc1N0ZXBzOiBzZXRQcm9ncmVzc1N0ZXBzLFxuXHRzaG93UHJvZ3Jlc3NTdGVwczogc2hvd1Byb2dyZXNzU3RlcHMsXG5cdGhpZGVQcm9ncmVzc1N0ZXBzOiBoaWRlUHJvZ3Jlc3NTdGVwcyxcblx0X21haW46IF9tYWluXG59KTtcblxudmFyIGN1cnJlbnRJbnN0YW5jZTsgLy8gU3dlZXRBbGVydCBjb25zdHJ1Y3RvclxuXG5mdW5jdGlvbiBTd2VldEFsZXJ0KCkge1xuICAvLyBQcmV2ZW50IHJ1biBpbiBOb2RlIGVudlxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ2hlY2sgZm9yIHRoZSBleGlzdGVuY2Ugb2YgUHJvbWlzZVxuXG5cbiAgaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICAgIGVycm9yKCdUaGlzIHBhY2thZ2UgcmVxdWlyZXMgYSBQcm9taXNlIGxpYnJhcnksIHBsZWFzZSBpbmNsdWRlIGEgc2hpbSB0byBlbmFibGUgaXQgaW4gdGhpcyBicm93c2VyIChTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi93aWtpL01pZ3JhdGlvbi1mcm9tLVN3ZWV0QWxlcnQtdG8tU3dlZXRBbGVydDIjMS1pZS1zdXBwb3J0KScpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgIGVycm9yKCdBdCBsZWFzdCAxIGFyZ3VtZW50IGlzIGV4cGVjdGVkIScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGN1cnJlbnRJbnN0YW5jZSA9IHRoaXM7XG4gIHZhciBvdXRlclBhcmFtcyA9IE9iamVjdC5mcmVlemUodGhpcy5jb25zdHJ1Y3Rvci5hcmdzVG9QYXJhbXMoYXJncykpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICB2YWx1ZTogb3V0ZXJQYXJhbXMsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICB2YXIgcHJvbWlzZSA9IHRoaXMuX21haW4odGhpcy5wYXJhbXMpO1xuXG4gIHByaXZhdGVQcm9wcy5wcm9taXNlLnNldCh0aGlzLCBwcm9taXNlKTtcbn0gLy8gYGNhdGNoYCBjYW5ub3QgYmUgdGhlIG5hbWUgb2YgYSBtb2R1bGUgZXhwb3J0LCBzbyB3ZSBkZWZpbmUgb3VyIHRoZW5hYmxlIG1ldGhvZHMgaGVyZSBpbnN0ZWFkXG5cblxuU3dlZXRBbGVydC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICB2YXIgcHJvbWlzZSA9IHByaXZhdGVQcm9wcy5wcm9taXNlLmdldCh0aGlzKTtcbiAgcmV0dXJuIHByb21pc2UudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG59O1xuXG5Td2VldEFsZXJ0LnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gIHZhciBwcm9taXNlID0gcHJpdmF0ZVByb3BzLnByb21pc2UuZ2V0KHRoaXMpO1xuICByZXR1cm4gcHJvbWlzZS5jYXRjaChvblJlamVjdGVkKTtcbn07XG5cblN3ZWV0QWxlcnQucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gIHZhciBwcm9taXNlID0gcHJpdmF0ZVByb3BzLnByb21pc2UuZ2V0KHRoaXMpO1xuICByZXR1cm4gcHJvbWlzZS5maW5hbGx5KG9uRmluYWxseSk7XG59OyAvLyBBc3NpZ24gaW5zdGFuY2UgbWV0aG9kcyBmcm9tIHNyYy9pbnN0YW5jZU1ldGhvZHMvKi5qcyB0byBwcm90b3R5cGVcblxuXG5fZXh0ZW5kcyhTd2VldEFsZXJ0LnByb3RvdHlwZSwgaW5zdGFuY2VNZXRob2RzKTsgLy8gQXNzaWduIHN0YXRpYyBtZXRob2RzIGZyb20gc3JjL3N0YXRpY01ldGhvZHMvKi5qcyB0byBjb25zdHJ1Y3RvclxuXG5cbl9leHRlbmRzKFN3ZWV0QWxlcnQsIHN0YXRpY01ldGhvZHMpOyAvLyBQcm94eSB0byBpbnN0YW5jZSBtZXRob2RzIHRvIGNvbnN0cnVjdG9yLCBmb3Igbm93LCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuXG5PYmplY3Qua2V5cyhpbnN0YW5jZU1ldGhvZHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBTd2VldEFsZXJ0W2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGN1cnJlbnRJbnN0YW5jZSkge1xuICAgICAgdmFyIF9jdXJyZW50SW5zdGFuY2U7XG5cbiAgICAgIHJldHVybiAoX2N1cnJlbnRJbnN0YW5jZSA9IGN1cnJlbnRJbnN0YW5jZSlba2V5XS5hcHBseShfY3VycmVudEluc3RhbmNlLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn0pO1xuU3dlZXRBbGVydC5EaXNtaXNzUmVhc29uID0gRGlzbWlzc1JlYXNvbjtcblxuU3dlZXRBbGVydC5ub29wID0gZnVuY3Rpb24gKCkge307XG5cblN3ZWV0QWxlcnQudmVyc2lvbiA9IHZlcnNpb247XG5cbnZhciBTd2FsID0gd2l0aE5vTmV3S2V5d29yZCh3aXRoR2xvYmFsRGVmYXVsdHMoU3dlZXRBbGVydCkpO1xuU3dhbC5kZWZhdWx0ID0gU3dhbDtcblxucmV0dXJuIFN3YWw7XG5cbn0pKSk7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlN3ZWV0YWxlcnQyKXsgIHdpbmRvdy5zd2FsID0gd2luZG93LnN3ZWV0QWxlcnQgPSB3aW5kb3cuU3dhbCA9IHdpbmRvdy5Td2VldEFsZXJ0ID0gd2luZG93LlN3ZWV0YWxlcnQyfVxuXG5cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7aWYoZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQobiksbi5zdHlsZVNoZWV0KW4uc3R5bGVTaGVldC5kaXNhYmxlZHx8KG4uc3R5bGVTaGVldC5jc3NUZXh0PXQpO2Vsc2UgdHJ5e24uaW5uZXJIVE1MPXR9Y2F0Y2goZSl7bi5pbm5lclRleHQ9dH19KGRvY3VtZW50LFwiQC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXNob3cge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7IH1cXG5cIiArXG5cIiAgNDUlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyB9XFxuXCIgK1xuXCIgIDgwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQGtleWZyYW1lcyBzd2FsMi1zaG93IHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOyB9XFxuXCIgK1xuXCIgIDQ1JSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgfVxcblwiICtcblwiICA4MCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1oaWRlIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQGtleWZyYW1lcyBzd2FsMi1oaWRlIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuMTg3NWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC4wNjI1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgNTQlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuMDYyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC4xMjVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA3MCUge1xcblwiICtcblwiICAgIHRvcDogMi4xODc1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLS4zNzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMy4xMjVlbTsgfVxcblwiICtcblwiICA4NCUge1xcblwiICtcblwiICAgIHRvcDogM2VtO1xcblwiICtcblwiICAgIGxlZnQ6IDEuMzEyNWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAxLjA2MjVlbTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IDIuODEyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC44NzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMS41NjI1ZW07IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJAa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuMTg3NWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC4wNjI1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgNTQlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuMDYyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC4xMjVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA3MCUge1xcblwiICtcblwiICAgIHRvcDogMi4xODc1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLS4zNzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMy4xMjVlbTsgfVxcblwiICtcblwiICA4NCUge1xcblwiICtcblwiICAgIHRvcDogM2VtO1xcblwiICtcblwiICAgIGxlZnQ6IDEuMzEyNWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAxLjA2MjVlbTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IDIuODEyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC44NzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMS41NjI1ZW07IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IDMuMzc1ZW07XFxuXCIgK1xuXCIgICAgcmlnaHQ6IDIuODc1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgNjUlIHtcXG5cIiArXG5cIiAgICB0b3A6IDMuMzc1ZW07XFxuXCIgK1xuXCIgICAgcmlnaHQ6IDIuODc1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgODQlIHtcXG5cIiArXG5cIiAgICB0b3A6IDIuMTg3NWVtO1xcblwiICtcblwiICAgIHJpZ2h0OiAwO1xcblwiICtcblwiICAgIHdpZHRoOiAzLjQzNzVlbTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IDIuMzc1ZW07XFxuXCIgK1xuXCIgICAgcmlnaHQ6IC41ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDIuOTM3NWVtOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIHRvcDogMy4zNzVlbTtcXG5cIiArXG5cIiAgICByaWdodDogMi44NzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA2NSUge1xcblwiICtcblwiICAgIHRvcDogMy4zNzVlbTtcXG5cIiArXG5cIiAgICByaWdodDogMi44NzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA4NCUge1xcblwiICtcblwiICAgIHRvcDogMi4xODc1ZW07XFxuXCIgK1xuXCIgICAgcmlnaHQ6IDA7XFxuXCIgK1xuXCIgICAgd2lkdGg6IDMuNDM3NWVtOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIHRvcDogMi4zNzVlbTtcXG5cIiArXG5cIiAgICByaWdodDogLjVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMi45Mzc1ZW07IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXCIgK1xuXCIgIDUlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXCIgK1xuXCIgIDEyJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkBrZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXCIgK1xuXCIgIDUlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXCIgK1xuXCIgIDEyJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICBtYXJnaW4tdG9wOiAxLjYyNWVtO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDA7IH1cXG5cIiArXG5cIiAgNTAlIHtcXG5cIiArXG5cIiAgICBtYXJnaW4tdG9wOiAxLjYyNWVtO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDA7IH1cXG5cIiArXG5cIiAgODAlIHtcXG5cIiArXG5cIiAgICBtYXJnaW4tdG9wOiAtLjM3NWVtO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgbWFyZ2luLXRvcDogMDtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDE7IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJAa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMDsgfVxcblwiICtcblwiICA1MCUge1xcblwiICtcblwiICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMDsgfVxcblwiICtcblwiICA4MCUge1xcblwiICtcblwiICAgIG1hcmdpbi10b3A6IC0uMzc1ZW07XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICBtYXJnaW4tdG9wOiAwO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb24ge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMDBkZWcpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDA7IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDEwMGRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAwOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDE7IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIge1xcblwiICtcblwiICBwb3NpdGlvbjogZml4ZWQ7XFxuXCIgK1xuXCIgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1zaG93biB7XFxuXCIgK1xuXCIgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cIiArXG5cIiAgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcCB7XFxuXCIgK1xuXCIgICAgdG9wOiAwO1xcblwiICtcblwiICAgIHJpZ2h0OiBhdXRvO1xcblwiICtcblwiICAgIGJvdHRvbTogYXV0bztcXG5cIiArXG5cIiAgICBsZWZ0OiA1MCU7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG5cIiArXG5cIiAgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHQge1xcblwiICtcblwiICAgIHRvcDogMDtcXG5cIiArXG5cIiAgICByaWdodDogMDtcXG5cIiArXG5cIiAgICBib3R0b206IGF1dG87XFxuXCIgK1xuXCIgICAgbGVmdDogYXV0bzsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0LCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQge1xcblwiICtcblwiICAgIHRvcDogMDtcXG5cIiArXG5cIiAgICByaWdodDogYXV0bztcXG5cIiArXG5cIiAgICBib3R0b206IGF1dG87XFxuXCIgK1xuXCIgICAgbGVmdDogMDsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0LCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnQge1xcblwiICtcblwiICAgIHRvcDogNTAlO1xcblwiICtcblwiICAgIHJpZ2h0OiBhdXRvO1xcblwiICtcblwiICAgIGJvdHRvbTogYXV0bztcXG5cIiArXG5cIiAgICBsZWZ0OiAwO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXIge1xcblwiICtcblwiICAgIHRvcDogNTAlO1xcblwiICtcblwiICAgIHJpZ2h0OiBhdXRvO1xcblwiICtcblwiICAgIGJvdHRvbTogYXV0bztcXG5cIiArXG5cIiAgICBsZWZ0OiA1MCU7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0IHtcXG5cIiArXG5cIiAgICB0b3A6IDUwJTtcXG5cIiArXG5cIiAgICByaWdodDogMDtcXG5cIiArXG5cIiAgICBib3R0b206IGF1dG87XFxuXCIgK1xuXCIgICAgbGVmdDogYXV0bztcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0LCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQge1xcblwiICtcblwiICAgIHRvcDogYXV0bztcXG5cIiArXG5cIiAgICByaWdodDogYXV0bztcXG5cIiArXG5cIiAgICBib3R0b206IDA7XFxuXCIgK1xuXCIgICAgbGVmdDogMDsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcXG5cIiArXG5cIiAgICB0b3A6IGF1dG87XFxuXCIgK1xuXCIgICAgcmlnaHQ6IGF1dG87XFxuXCIgK1xuXCIgICAgYm90dG9tOiAwO1xcblwiICtcblwiICAgIGxlZnQ6IDUwJTtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodCB7XFxuXCIgK1xuXCIgICAgdG9wOiBhdXRvO1xcblwiICtcblwiICAgIHJpZ2h0OiAwO1xcblwiICtcblwiICAgIGJvdHRvbTogMDtcXG5cIiArXG5cIiAgICBsZWZ0OiBhdXRvOyB9XFxuXCIgK1xuXCJcXG5cIiArXG5cImJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCB7XFxuXCIgK1xuXCIgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXCIgK1xuXCIgIGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItYWN0aW9ucyB7XFxuXCIgK1xuXCIgICAgZmxleDogMTtcXG5cIiArXG5cIiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcblwiICtcblwiICAgIGhlaWdodDogMi4yZW07XFxuXCIgK1xuXCIgICAgbWFyZ2luLXRvcDogLjMxMjVlbTsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLXRvYXN0LWNvbHVtbiAuc3dhbDItdG9hc3QgLnN3YWwyLWxvYWRpbmcge1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItaW5wdXQge1xcblwiICtcblwiICAgIGhlaWdodDogMmVtO1xcblwiICtcblwiICAgIG1hcmdpbjogLjMxMjVlbSBhdXRvO1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMWVtOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItdmFsaWRhdGlvbmVycm9yIHtcXG5cIiArXG5cIiAgICBmb250LXNpemU6IDFlbTsgfVxcblwiICtcblwiXFxuXCIgK1xuXCIuc3dhbDItcG9wdXAuc3dhbDItdG9hc3Qge1xcblwiICtcblwiICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblwiICtcblwiICBhbGlnbi1pdGVtczogY2VudGVyO1xcblwiICtcblwiICB3aWR0aDogYXV0bztcXG5cIiArXG5cIiAgcGFkZGluZzogMC42MjVlbTtcXG5cIiArXG5cIiAgYm94LXNoYWRvdzogMCAwIDAuNjI1ZW0gI2Q5ZDlkOTtcXG5cIiArXG5cIiAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaGVhZGVyIHtcXG5cIiArXG5cIiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItdGl0bGUge1xcblwiICtcblwiICAgIGZsZXgtZ3JvdzogMTtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXCIgK1xuXCIgICAgbWFyZ2luOiAwIC42ZW07XFxuXCIgK1xuXCIgICAgZm9udC1zaXplOiAxZW07IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1mb290ZXIge1xcblwiICtcblwiICAgIG1hcmdpbjogMC41ZW0gMCAwO1xcblwiICtcblwiICAgIHBhZGRpbmc6IDAuNWVtIDAgMDtcXG5cIiArXG5cIiAgICBmb250LXNpemU6IDAuOGVtOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItY2xvc2Uge1xcblwiICtcblwiICAgIHBvc2l0aW9uOiBpbml0aWFsO1xcblwiICtcblwiICAgIHdpZHRoOiAwLjhlbTtcXG5cIiArXG5cIiAgICBoZWlnaHQ6IDAuOGVtO1xcblwiICtcblwiICAgIGxpbmUtaGVpZ2h0OiAwLjg7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1jb250ZW50IHtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXCIgK1xuXCIgICAgZm9udC1zaXplOiAxZW07IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIHtcXG5cIiArXG5cIiAgICB3aWR0aDogMmVtO1xcblwiICtcblwiICAgIG1pbi13aWR0aDogMmVtO1xcblwiICtcblwiICAgIGhlaWdodDogMmVtO1xcblwiICtcblwiICAgIG1hcmdpbjogMDsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi10ZXh0IHtcXG5cIiArXG5cIiAgICAgIGZvbnQtc2l6ZTogMmVtO1xcblwiICtcblwiICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXCIgK1xuXCIgICAgICBsaW5lLWhlaWdodDogMWVtOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XFxuXCIgK1xuXCIgICAgICB3aWR0aDogMmVtO1xcblwiICtcblwiICAgICAgaGVpZ2h0OiAyZW07IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXSB7XFxuXCIgK1xuXCIgICAgICB0b3A6IC44NzVlbTtcXG5cIiArXG5cIiAgICAgIHdpZHRoOiAxLjM3NWVtOyB9XFxuXCIgK1xuXCIgICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXVtjbGFzcyQ9J2xlZnQnXSB7XFxuXCIgK1xuXCIgICAgICAgIGxlZnQ6IC4zMTI1ZW07IH1cXG5cIiArXG5cIiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddW2NsYXNzJD0ncmlnaHQnXSB7XFxuXCIgK1xuXCIgICAgICAgIHJpZ2h0OiAuMzEyNWVtOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItYWN0aW9ucyB7XFxuXCIgK1xuXCIgICAgaGVpZ2h0OiBhdXRvO1xcblwiICtcblwiICAgIG1hcmdpbjogMCAuMzEyNWVtOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3R5bGVkIHtcXG5cIiArXG5cIiAgICBtYXJnaW46IDAgLjMxMjVlbTtcXG5cIiArXG5cIiAgICBwYWRkaW5nOiAuMzEyNWVtIC42MjVlbTtcXG5cIiArXG5cIiAgICBmb250LXNpemU6IDFlbTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3R5bGVkOmZvY3VzIHtcXG5cIiArXG5cIiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMDYyNWVtICNmZmYsIDAgMCAwIDAuMTI1ZW0gcmdiYSg1MCwgMTAwLCAxNTAsIDAuNCk7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIHtcXG5cIiArXG5cIiAgICBib3JkZXItY29sb3I6ICNhNWRjODY7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ10ge1xcblwiICtcblwiICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcblwiICtcblwiICAgICAgd2lkdGg6IDJlbTtcXG5cIiArXG5cIiAgICAgIGhlaWdodDogMi44MTI1ZW07XFxuXCIgK1xuXCIgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcblwiICtcblwiICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XFxuXCIgK1xuXCIgICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ11bY2xhc3MkPSdsZWZ0J10ge1xcblwiICtcblwiICAgICAgICB0b3A6IC0uMjVlbTtcXG5cIiArXG5cIiAgICAgICAgbGVmdDogLS45Mzc1ZW07XFxuXCIgK1xuXCIgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcblwiICtcblwiICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDJlbSAyZW07XFxuXCIgK1xuXCIgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMmVtIDJlbTtcXG5cIiArXG5cIiAgICAgICAgYm9yZGVyLXJhZGl1czogNGVtIDAgMCA0ZW07IH1cXG5cIiArXG5cIiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXVtjbGFzcyQ9J3JpZ2h0J10ge1xcblwiICtcblwiICAgICAgICB0b3A6IC0uMjVlbTtcXG5cIiArXG5cIiAgICAgICAgbGVmdDogLjkzNzVlbTtcXG5cIiArXG5cIiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDJlbTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDJlbTtcXG5cIiArXG5cIiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA0ZW0gNGVtIDA7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XFxuXCIgK1xuXCIgICAgICB3aWR0aDogMmVtO1xcblwiICtcblwiICAgICAgaGVpZ2h0OiAyZW07IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4IHtcXG5cIiArXG5cIiAgICAgIHRvcDogMDtcXG5cIiArXG5cIiAgICAgIGxlZnQ6IC40Mzc1ZW07XFxuXCIgK1xuXCIgICAgICB3aWR0aDogLjQzNzVlbTtcXG5cIiArXG5cIiAgICAgIGhlaWdodDogMi42ODc1ZW07IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ10ge1xcblwiICtcblwiICAgICAgaGVpZ2h0OiAuMzEyNWVtOyB9XFxuXCIgK1xuXCIgICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ11bY2xhc3MkPSd0aXAnXSB7XFxuXCIgK1xuXCIgICAgICAgIHRvcDogMS4xMjVlbTtcXG5cIiArXG5cIiAgICAgICAgbGVmdDogLjE4NzVlbTtcXG5cIiArXG5cIiAgICAgICAgd2lkdGg6IC43NWVtOyB9XFxuXCIgK1xuXCIgICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ11bY2xhc3MkPSdsb25nJ10ge1xcblwiICtcblwiICAgICAgICB0b3A6IC45Mzc1ZW07XFxuXCIgK1xuXCIgICAgICAgIHJpZ2h0OiAuMTg3NWVtO1xcblwiICtcblwiICAgICAgICB3aWR0aDogMS4zNzVlbTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItc2hvdyB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC1hbmltYXRpb246IHNob3dTd2VldFRvYXN0IC41cztcXG5cIiArXG5cIiAgICAgICAgICAgIGFuaW1hdGlvbjogc2hvd1N3ZWV0VG9hc3QgLjVzOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdC5zd2FsMi1oaWRlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LWFuaW1hdGlvbjogaGlkZVN3ZWV0VG9hc3QgLjJzIGZvcndhcmRzO1xcblwiICtcblwiICAgICAgICAgICAgYW5pbWF0aW9uOiBoaWRlU3dlZXRUb2FzdCAuMnMgZm9yd2FyZHM7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy10aXAgLjc1cztcXG5cIiArXG5cIiAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZS10b2FzdC1zdWNjZXNzLXRpcCAuNzVzOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWljb24gLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS10b2FzdC1zdWNjZXNzLWxvbmcgLjc1cztcXG5cIiArXG5cIiAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZS10b2FzdC1zdWNjZXNzLWxvbmcgLjc1czsgfVxcblwiICtcblwiXFxuXCIgK1xuXCJALXdlYmtpdC1rZXlmcmFtZXMgc2hvd1N3ZWV0VG9hc3Qge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNjI1ZW0pIHJvdGF0ZVooMmRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNjI1ZW0pIHJvdGF0ZVooMmRlZyk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMDsgfVxcblwiICtcblwiICAzMyUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IC41OyB9XFxuXCIgK1xuXCIgIDY2JSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogLjc7IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKDApO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDE7IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJAa2V5ZnJhbWVzIHNob3dTd2VldFRvYXN0IHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjYyNWVtKSByb3RhdGVaKDJkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjYyNWVtKSByb3RhdGVaKDJkZWcpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDA7IH1cXG5cIiArXG5cIiAgMzMlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAuNTsgfVxcblwiICtcblwiICA2NiUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMzEyNWVtKSByb3RhdGVaKDJkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMzEyNWVtKSByb3RhdGVaKDJkZWcpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IC43OyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooMCk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQC13ZWJraXQta2V5ZnJhbWVzIGhpZGVTd2VldFRvYXN0IHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIG9wYWNpdHk6IDE7IH1cXG5cIiArXG5cIiAgMzMlIHtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAuNTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxZGVnKTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQGtleWZyYW1lcyBoaWRlU3dlZXRUb2FzdCB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAxOyB9XFxuXCIgK1xuXCIgIDMzJSB7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogLjU7IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMWRlZyk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMDsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtdGlwIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIHRvcDogLjU2MjVlbTtcXG5cIiArXG5cIiAgICBsZWZ0OiAuMDYyNWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAwOyB9XFxuXCIgK1xuXCIgIDU0JSB7XFxuXCIgK1xuXCIgICAgdG9wOiAuMTI1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLjEyNWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAwOyB9XFxuXCIgK1xuXCIgIDcwJSB7XFxuXCIgK1xuXCIgICAgdG9wOiAuNjI1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLS4yNWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAxLjYyNWVtOyB9XFxuXCIgK1xuXCIgIDg0JSB7XFxuXCIgK1xuXCIgICAgdG9wOiAxLjA2MjVlbTtcXG5cIiArXG5cIiAgICBsZWZ0OiAuNzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogLjVlbTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuMTI1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLjE4NzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogLjc1ZW07IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJAa2V5ZnJhbWVzIGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy10aXAge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgdG9wOiAuNTYyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC4wNjI1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgNTQlIHtcXG5cIiArXG5cIiAgICB0b3A6IC4xMjVlbTtcXG5cIiArXG5cIiAgICBsZWZ0OiAuMTI1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgNzAlIHtcXG5cIiArXG5cIiAgICB0b3A6IC42MjVlbTtcXG5cIiArXG5cIiAgICBsZWZ0OiAtLjI1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDEuNjI1ZW07IH1cXG5cIiArXG5cIiAgODQlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuMDYyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC43NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAuNWVtOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIHRvcDogMS4xMjVlbTtcXG5cIiArXG5cIiAgICBsZWZ0OiAuMTg3NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAuNzVlbTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtbG9uZyB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuNjI1ZW07XFxuXCIgK1xuXCIgICAgcmlnaHQ6IDEuMzc1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgNjUlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuMjVlbTtcXG5cIiArXG5cIiAgICByaWdodDogLjkzNzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA4NCUge1xcblwiICtcblwiICAgIHRvcDogLjkzNzVlbTtcXG5cIiArXG5cIiAgICByaWdodDogMDtcXG5cIiArXG5cIiAgICB3aWR0aDogMS4xMjVlbTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IC45Mzc1ZW07XFxuXCIgK1xuXCIgICAgcmlnaHQ6IC4xODc1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDEuMzc1ZW07IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJAa2V5ZnJhbWVzIGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy1sb25nIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIHRvcDogMS42MjVlbTtcXG5cIiArXG5cIiAgICByaWdodDogMS4zNzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA2NSUge1xcblwiICtcblwiICAgIHRvcDogMS4yNWVtO1xcblwiICtcblwiICAgIHJpZ2h0OiAuOTM3NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAwOyB9XFxuXCIgK1xuXCIgIDg0JSB7XFxuXCIgK1xuXCIgICAgdG9wOiAuOTM3NWVtO1xcblwiICtcblwiICAgIHJpZ2h0OiAwO1xcblwiICtcblwiICAgIHdpZHRoOiAxLjEyNWVtOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIHRvcDogLjkzNzVlbTtcXG5cIiArXG5cIiAgICByaWdodDogLjE4NzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMS4zNzVlbTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cImJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikge1xcblwiICtcblwiICBvdmVyZmxvdy15OiBoaWRkZW47IH1cXG5cIiArXG5cIlxcblwiICtcblwiYm9keS5zd2FsMi1oZWlnaHQtYXV0byB7XFxuXCIgK1xuXCIgIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyB9XFxuXCIgK1xuXCJcXG5cIiArXG5cImJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duIHtcXG5cIiArXG5cIiAgdG9wOiBhdXRvO1xcblwiICtcblwiICByaWdodDogYXV0bztcXG5cIiArXG5cIiAgYm90dG9tOiBhdXRvO1xcblwiICtcblwiICBsZWZ0OiBhdXRvO1xcblwiICtcblwiICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93biA+IC5zd2FsMi1tb2RhbCB7XFxuXCIgK1xuXCIgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcCB7XFxuXCIgK1xuXCIgICAgdG9wOiAwO1xcblwiICtcblwiICAgIGxlZnQ6IDUwJTtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi10b3Atc3RhcnQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcC1sZWZ0IHtcXG5cIiArXG5cIiAgICB0b3A6IDA7XFxuXCIgK1xuXCIgICAgbGVmdDogMDsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi10b3AtZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi10b3AtcmlnaHQge1xcblwiICtcblwiICAgIHRvcDogMDtcXG5cIiArXG5cIiAgICByaWdodDogMDsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXIge1xcblwiICtcblwiICAgIHRvcDogNTAlO1xcblwiICtcblwiICAgIGxlZnQ6IDUwJTtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cXG5cIiArXG5cIiAgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItY2VudGVyLXN0YXJ0LCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXItbGVmdCB7XFxuXCIgK1xuXCIgICAgdG9wOiA1MCU7XFxuXCIgK1xuXCIgICAgbGVmdDogMDtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXItZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXItcmlnaHQge1xcblwiICtcblwiICAgIHRvcDogNTAlO1xcblwiICtcblwiICAgIHJpZ2h0OiAwO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbSB7XFxuXCIgK1xuXCIgICAgYm90dG9tOiAwO1xcblwiICtcblwiICAgIGxlZnQ6IDUwJTtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1ib3R0b20tc3RhcnQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbS1sZWZ0IHtcXG5cIiArXG5cIiAgICBib3R0b206IDA7XFxuXCIgK1xuXCIgICAgbGVmdDogMDsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1ib3R0b20tZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1ib3R0b20tcmlnaHQge1xcblwiICtcblwiICAgIHJpZ2h0OiAwO1xcblwiICtcblwiICAgIGJvdHRvbTogMDsgfVxcblwiICtcblwiXFxuXCIgK1xuXCIuc3dhbDItY29udGFpbmVyIHtcXG5cIiArXG5cIiAgZGlzcGxheTogZmxleDtcXG5cIiArXG5cIiAgcG9zaXRpb246IGZpeGVkO1xcblwiICtcblwiICB0b3A6IDA7XFxuXCIgK1xuXCIgIHJpZ2h0OiAwO1xcblwiICtcblwiICBib3R0b206IDA7XFxuXCIgK1xuXCIgIGxlZnQ6IDA7XFxuXCIgK1xuXCIgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXCIgK1xuXCIgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXCIgK1xuXCIgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblwiICtcblwiICBwYWRkaW5nOiAxMHB4O1xcblwiICtcblwiICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cIiArXG5cIiAgei1pbmRleDogMTA2MDtcXG5cIiArXG5cIiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcblwiICtcblwiICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Age1xcblwiICtcblwiICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0IHtcXG5cIiArXG5cIiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodCB7XFxuXCIgK1xuXCIgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXCIgK1xuXCIgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxcblwiICtcblwiICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlciB7XFxuXCIgK1xuXCIgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblwiICtcblwiICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdCB7XFxuXCIgK1xuXCIgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodCB7XFxuXCIgK1xuXCIgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcXG5cIiArXG5cIiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQge1xcblwiICtcblwiICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodCB7XFxuXCIgK1xuXCIgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWZ1bGxzY3JlZW4gPiAuc3dhbDItbW9kYWwge1xcblwiICtcblwiICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG5cIiArXG5cIiAgICBmbGV4OiAxO1xcblwiICtcblwiICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuXCIgK1xuXCIgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LXJvdyA+IC5zd2FsMi1tb2RhbCB7XFxuXCIgK1xuXCIgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcblwiICtcblwiICAgIGZsZXg6IDE7XFxuXCIgK1xuXCIgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4ge1xcblwiICtcblwiICAgIGZsZXg6IDE7XFxuXCIgK1xuXCIgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblwiICtcblwiICAgIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlciwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20ge1xcblwiICtcblwiICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblwiICtcblwiICAgIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1zdGFydCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLWxlZnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLWxlZnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLWxlZnQge1xcblwiICtcblwiICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1yaWdodCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItcmlnaHQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXJpZ2h0IHtcXG5cIiArXG5cIiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgfVxcblwiICtcblwiICAgIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4gPiAuc3dhbDItbW9kYWwge1xcblwiICtcblwiICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcblwiICtcblwiICAgICAgZmxleDogMTtcXG5cIiArXG5cIiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cIiArXG5cIiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1jb250YWluZXI6bm90KC5zd2FsMi10b3ApOm5vdCguc3dhbDItdG9wLXN0YXJ0KTpub3QoLnN3YWwyLXRvcC1lbmQpOm5vdCguc3dhbDItdG9wLWxlZnQpOm5vdCguc3dhbDItdG9wLXJpZ2h0KTpub3QoLnN3YWwyLWNlbnRlci1zdGFydCk6bm90KC5zd2FsMi1jZW50ZXItZW5kKTpub3QoLnN3YWwyLWNlbnRlci1sZWZ0KTpub3QoLnN3YWwyLWNlbnRlci1yaWdodCk6bm90KC5zd2FsMi1ib3R0b20pOm5vdCguc3dhbDItYm90dG9tLXN0YXJ0KTpub3QoLnN3YWwyLWJvdHRvbS1lbmQpOm5vdCguc3dhbDItYm90dG9tLWxlZnQpOm5vdCguc3dhbDItYm90dG9tLXJpZ2h0KTpub3QoLnN3YWwyLWdyb3ctZnVsbHNjcmVlbikgPiAuc3dhbDItbW9kYWwge1xcblwiICtcblwiICAgIG1hcmdpbjogYXV0bzsgfVxcblwiICtcblwiICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xcblwiICtcblwiICAgIC5zd2FsMi1jb250YWluZXIgLnN3YWwyLW1vZGFsIHtcXG5cIiArXG5cIiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50OyB9IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1mYWRlIHtcXG5cIiArXG5cIiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xczsgfVxcblwiICtcblwiICAuc3dhbDItY29udGFpbmVyLnN3YWwyLXNob3duIHtcXG5cIiArXG5cIiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IH1cXG5cIiArXG5cIlxcblwiICtcblwiLnN3YWwyLXBvcHVwIHtcXG5cIiArXG5cIiAgZGlzcGxheTogbm9uZTtcXG5cIiArXG5cIiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblwiICtcblwiICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblwiICtcblwiICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cIiArXG5cIiAgd2lkdGg6IDMyZW07XFxuXCIgK1xuXCIgIG1heC13aWR0aDogMTAwJTtcXG5cIiArXG5cIiAgcGFkZGluZzogMS4yNWVtO1xcblwiICtcblwiICBib3JkZXItcmFkaXVzOiAwLjMxMjVlbTtcXG5cIiArXG5cIiAgYmFja2dyb3VuZDogI2ZmZjtcXG5cIiArXG5cIiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuXCIgK1xuXCIgIGZvbnQtc2l6ZTogMXJlbTtcXG5cIiArXG5cIiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXA6Zm9jdXMge1xcblwiICtcblwiICAgIG91dGxpbmU6IG5vbmU7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLWxvYWRpbmcge1xcblwiICtcblwiICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWhlYWRlciB7XFxuXCIgK1xuXCIgICAgZGlzcGxheTogZmxleDtcXG5cIiArXG5cIiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblwiICtcblwiICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi10aXRsZSB7XFxuXCIgK1xuXCIgICAgZGlzcGxheTogYmxvY2s7XFxuXCIgK1xuXCIgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblwiICtcblwiICAgIG1heC13aWR0aDogMTAwJTtcXG5cIiArXG5cIiAgICBtYXJnaW46IDAgMCAwLjRlbTtcXG5cIiArXG5cIiAgICBwYWRkaW5nOiAwO1xcblwiICtcblwiICAgIGNvbG9yOiAjNTk1OTU5O1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMS44NzVlbTtcXG5cIiArXG5cIiAgICBmb250LXdlaWdodDogNjAwO1xcblwiICtcblwiICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cIiArXG5cIiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG5cIiArXG5cIiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zIHtcXG5cIiArXG5cIiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuXCIgK1xuXCIgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cIiArXG5cIiAgICBtYXJnaW46IDEuMjVlbSBhdXRvIDA7XFxuXCIgK1xuXCIgICAgei1pbmRleDogMTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWRbZGlzYWJsZWRdIHtcXG5cIiArXG5cIiAgICAgIG9wYWNpdHk6IC40OyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDpob3ZlciB7XFxuXCIgK1xuXCIgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMSkpOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDphY3RpdmUge1xcblwiICtcblwiICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY29uZmlybSB7XFxuXCIgK1xuXCIgICAgICB3aWR0aDogMi41ZW07XFxuXCIgK1xuXCIgICAgICBoZWlnaHQ6IDIuNWVtO1xcblwiICtcblwiICAgICAgbWFyZ2luOiAuNDY4NzVlbTtcXG5cIiArXG5cIiAgICAgIHBhZGRpbmc6IDA7XFxuXCIgK1xuXCIgICAgICBib3JkZXI6IC4yNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xcblwiICtcblwiICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG5cIiArXG5cIiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXCIgK1xuXCIgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcblwiICtcblwiICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xcblwiICtcblwiICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcblwiICtcblwiICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cIiArXG5cIiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XFxuXCIgK1xuXCIgICAgICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xcblwiICtcblwiICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cIiArXG5cIiAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXCIgK1xuXCIgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcblwiICtcblwiICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY2FuY2VsIHtcXG5cIiArXG5cIiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG5cIiArXG5cIiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4OyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zLnN3YWwyLWxvYWRpbmcgOm5vdCguc3dhbDItc3R5bGVkKS5zd2FsMi1jb25maXJtOjphZnRlciB7XFxuXCIgK1xuXCIgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXCIgK1xuXCIgICAgICB3aWR0aDogMTVweDtcXG5cIiArXG5cIiAgICAgIGhlaWdodDogMTVweDtcXG5cIiArXG5cIiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuXCIgK1xuXCIgICAgICBib3JkZXI6IDNweCBzb2xpZCAjOTk5OTk5O1xcblwiICtcblwiICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblwiICtcblwiICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cIiArXG5cIiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICNmZmY7XFxuXCIgK1xuXCIgICAgICBjb250ZW50OiAnJztcXG5cIiArXG5cIiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XFxuXCIgK1xuXCIgICAgICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkIHtcXG5cIiArXG5cIiAgICBtYXJnaW46IC4zMTI1ZW07XFxuXCIgK1xuXCIgICAgcGFkZGluZzogLjYyNWVtIDJlbTtcXG5cIiArXG5cIiAgICBmb250LXdlaWdodDogNTAwO1xcblwiICtcblwiICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXN0eWxlZDpub3QoW2Rpc2FibGVkXSkge1xcblwiICtcblwiICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1zdHlsZWQuc3dhbDItY29uZmlybSB7XFxuXCIgK1xuXCIgICAgICBib3JkZXI6IDA7XFxuXCIgK1xuXCIgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuXCIgK1xuXCIgICAgICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xcblwiICtcblwiICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMwODVkNjtcXG5cIiArXG5cIiAgICAgIGNvbG9yOiAjZmZmO1xcblwiICtcblwiICAgICAgZm9udC1zaXplOiAxLjA2MjVlbTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkLnN3YWwyLWNhbmNlbCB7XFxuXCIgK1xuXCIgICAgICBib3JkZXI6IDA7XFxuXCIgK1xuXCIgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuXCIgK1xuXCIgICAgICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xcblwiICtcblwiICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcXG5cIiArXG5cIiAgICAgIGNvbG9yOiAjZmZmO1xcblwiICtcblwiICAgICAgZm9udC1zaXplOiAxLjA2MjVlbTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkOmZvY3VzIHtcXG5cIiArXG5cIiAgICAgIG91dGxpbmU6IG5vbmU7XFxuXCIgK1xuXCIgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggI2ZmZiwgMCAwIDAgNHB4IHJnYmEoNTAsIDEwMCwgMTUwLCAwLjQpOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1zdHlsZWQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcblwiICtcblwiICAgICAgYm9yZGVyOiAwOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItZm9vdGVyIHtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cIiArXG5cIiAgICBtYXJnaW46IDEuMjVlbSAwIDA7XFxuXCIgK1xuXCIgICAgcGFkZGluZzogMWVtIDAgMDtcXG5cIiArXG5cIiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcXG5cIiArXG5cIiAgICBjb2xvcjogIzU0NTQ1NDtcXG5cIiArXG5cIiAgICBmb250LXNpemU6IDFlbTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWltYWdlIHtcXG5cIiArXG5cIiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuXCIgK1xuXCIgICAgbWFyZ2luOiAxLjI1ZW0gYXV0bzsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWNsb3NlIHtcXG5cIiArXG5cIiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXCIgK1xuXCIgICAgdG9wOiAwO1xcblwiICtcblwiICAgIHJpZ2h0OiAwO1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblwiICtcblwiICAgIHdpZHRoOiAxLjJlbTtcXG5cIiArXG5cIiAgICBoZWlnaHQ6IDEuMmVtO1xcblwiICtcblwiICAgIHBhZGRpbmc6IDA7XFxuXCIgK1xuXCIgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLW91dDtcXG5cIiArXG5cIiAgICBib3JkZXI6IG5vbmU7XFxuXCIgK1xuXCIgICAgYm9yZGVyLXJhZGl1czogMDtcXG5cIiArXG5cIiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG5cIiArXG5cIiAgICBjb2xvcjogI2NjY2NjYztcXG5cIiArXG5cIiAgICBmb250LWZhbWlseTogc2VyaWY7XFxuXCIgK1xuXCIgICAgZm9udC1zaXplOiAyLjVlbTtcXG5cIiArXG5cIiAgICBsaW5lLWhlaWdodDogMS4yO1xcblwiICtcblwiICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cIiArXG5cIiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1jbG9zZTpob3ZlciB7XFxuXCIgK1xuXCIgICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xcblwiICtcblwiICAgICAgY29sb3I6ICNmMjc0NzQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwID4gLnN3YWwyLWlucHV0LFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgPiAuc3dhbDItZmlsZSxcXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwID4gLnN3YWwyLXRleHRhcmVhLFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgPiAuc3dhbDItc2VsZWN0LFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgPiAuc3dhbDItcmFkaW8sXFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCA+IC5zd2FsMi1jaGVja2JveCB7XFxuXCIgK1xuXCIgICAgZGlzcGxheTogbm9uZTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWNvbnRlbnQge1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblwiICtcblwiICAgIG1hcmdpbjogMDtcXG5cIiArXG5cIiAgICBwYWRkaW5nOiAwO1xcblwiICtcblwiICAgIGNvbG9yOiAjNTQ1NDU0O1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcXG5cIiArXG5cIiAgICBmb250LXdlaWdodDogMzAwO1xcblwiICtcblwiICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXCIgK1xuXCIgICAgei1pbmRleDogMTtcXG5cIiArXG5cIiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwICNzd2FsMi1jb250ZW50IHtcXG5cIiArXG5cIiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dCxcXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlLFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhLFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLXNlbGVjdCxcXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYWRpbyxcXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1jaGVja2JveCB7XFxuXCIgK1xuXCIgICAgbWFyZ2luOiAxZW0gYXV0bzsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0LFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGUsXFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWEge1xcblwiICtcblwiICAgIHdpZHRoOiAxMDAlO1xcblwiICtcblwiICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3MsIGJveC1zaGFkb3cgLjNzO1xcblwiICtcblwiICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XFxuXCIgK1xuXCIgICAgYm9yZGVyLXJhZGl1czogMC4xODc1ZW07XFxuXCIgK1xuXCIgICAgZm9udC1zaXplOiAxLjEyNWVtO1xcblwiICtcblwiICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcblwiICtcblwiICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0LnN3YWwyLWlucHV0ZXJyb3IsXFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlLnN3YWwyLWlucHV0ZXJyb3IsXFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYS5zd2FsMi1pbnB1dGVycm9yIHtcXG5cIiArXG5cIiAgICAgIGJvcmRlci1jb2xvcjogI2YyNzQ3NCAhaW1wb3J0YW50O1xcblwiICtcblwiICAgICAgYm94LXNoYWRvdzogMCAwIDJweCAjZjI3NDc0ICFpbXBvcnRhbnQ7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0OmZvY3VzLFxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZTpmb2N1cyxcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhOmZvY3VzIHtcXG5cIiArXG5cIiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNGRiZWQ7XFxuXCIgK1xuXCIgICAgICBvdXRsaW5lOiBub25lO1xcblwiICtcblwiICAgICAgYm94LXNoYWRvdzogMCAwIDNweCAjYzRlNmY1OyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuXCIgK1xuXCIgICAgICBjb2xvcjogI2NjY2NjYzsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZTotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcblwiICtcblwiICAgICAgY29sb3I6ICNjY2NjY2M7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYTo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG5cIiArXG5cIiAgICAgIGNvbG9yOiAjY2NjY2NjOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dDo6cGxhY2Vob2xkZXIsXFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOjpwbGFjZWhvbGRlcixcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuXCIgK1xuXCIgICAgICBjb2xvcjogI2NjY2NjYzsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhbmdlIGlucHV0IHtcXG5cIiArXG5cIiAgICB3aWR0aDogODAlOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcXG5cIiArXG5cIiAgICB3aWR0aDogMjAlO1xcblwiICtcblwiICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuXCIgK1xuXCIgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFuZ2UgaW5wdXQsXFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcXG5cIiArXG5cIiAgICBoZWlnaHQ6IDIuNjI1ZW07XFxuXCIgK1xuXCIgICAgbWFyZ2luOiAxZW0gYXV0bztcXG5cIiArXG5cIiAgICBwYWRkaW5nOiAwO1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcXG5cIiArXG5cIiAgICBsaW5lLWhlaWdodDogMi42MjVlbTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0IHtcXG5cIiArXG5cIiAgICBoZWlnaHQ6IDIuNjI1ZW07XFxuXCIgK1xuXCIgICAgcGFkZGluZzogMCAwLjc1ZW07IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0W3R5cGU9J251bWJlciddIHtcXG5cIiArXG5cIiAgICAgIG1heC13aWR0aDogMTBlbTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGUge1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMS4xMjVlbTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhIHtcXG5cIiArXG5cIiAgICBoZWlnaHQ6IDYuNzVlbTtcXG5cIiArXG5cIiAgICBwYWRkaW5nOiAwLjc1ZW07IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1zZWxlY3Qge1xcblwiICtcblwiICAgIG1pbi13aWR0aDogNTAlO1xcblwiICtcblwiICAgIG1heC13aWR0aDogMTAwJTtcXG5cIiArXG5cIiAgICBwYWRkaW5nOiAuMzc1ZW0gLjYyNWVtO1xcblwiICtcblwiICAgIGNvbG9yOiAjNTQ1NDU0O1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMS4xMjVlbTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhZGlvLFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IHtcXG5cIiArXG5cIiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYWRpbyBsYWJlbCxcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IGxhYmVsIHtcXG5cIiArXG5cIiAgICAgIG1hcmdpbjogMCAuNmVtO1xcblwiICtcblwiICAgICAgZm9udC1zaXplOiAxLjEyNWVtOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYWRpbyBpbnB1dCxcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IGlucHV0IHtcXG5cIiArXG5cIiAgICAgIG1hcmdpbjogMCAuNGVtOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItdmFsaWRhdGlvbmVycm9yIHtcXG5cIiArXG5cIiAgICBkaXNwbGF5OiBub25lO1xcblwiICtcblwiICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXCIgK1xuXCIgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXCIgK1xuXCIgICAgcGFkZGluZzogMC42MjVlbTtcXG5cIiArXG5cIiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcblwiICtcblwiICAgIGNvbG9yOiAjNjY2NjY2O1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMWVtO1xcblwiICtcblwiICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuXCIgK1xuXCIgICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItdmFsaWRhdGlvbmVycm9yOjpiZWZvcmUge1xcblwiICtcblwiICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblwiICtcblwiICAgICAgd2lkdGg6IDEuNWVtO1xcblwiICtcblwiICAgICAgbWluLXdpZHRoOiAxLjVlbTtcXG5cIiArXG5cIiAgICAgIGhlaWdodDogMS41ZW07XFxuXCIgK1xuXCIgICAgICBtYXJnaW46IDAgLjYyNWVtO1xcblwiICtcblwiICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblwiICtcblwiICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyNzQ3NDtcXG5cIiArXG5cIiAgICAgIGNvbG9yOiAjZmZmO1xcblwiICtcblwiICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG5cIiArXG5cIiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG5cIiArXG5cIiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cIiArXG5cIiAgICAgIGNvbnRlbnQ6ICchJztcXG5cIiArXG5cIiAgICAgIHpvb206IG5vcm1hbDsgfVxcblwiICtcblwiXFxuXCIgK1xuXCJAc3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjogdHJ1ZSkge1xcblwiICtcblwiICAuc3dhbDItcmFuZ2UgaW5wdXQge1xcblwiICtcblwiICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXJhbmdlIG91dHB1dCB7XFxuXCIgK1xuXCIgICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XFxuXCIgK1xuXCIgIC5zd2FsMi1yYW5nZSBpbnB1dCB7XFxuXCIgK1xuXCIgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgfVxcblwiICtcblwiICAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcXG5cIiArXG5cIiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcXG5cIiArXG5cIiAgLnN3YWwyLWNsb3NlOmZvY3VzIHtcXG5cIiArXG5cIiAgICBvdXRsaW5lOiAycHggc29saWQgcmdiYSg1MCwgMTAwLCAxNTAsIDAuNCk7IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCIuc3dhbDItaWNvbiB7XFxuXCIgK1xuXCIgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cIiArXG5cIiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXCIgK1xuXCIgIHdpZHRoOiA1ZW07XFxuXCIgK1xuXCIgIGhlaWdodDogNWVtO1xcblwiICtcblwiICBtYXJnaW46IDEuMjVlbSBhdXRvIDEuODc1ZW07XFxuXCIgK1xuXCIgIGJvcmRlcjogLjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuXCIgK1xuXCIgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cIiArXG5cIiAgbGluZS1oZWlnaHQ6IDVlbTtcXG5cIiArXG5cIiAgY3Vyc29yOiBkZWZhdWx0O1xcblwiICtcblwiICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG5cIiArXG5cIiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cIiArXG5cIiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cIiArXG5cIiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cIiArXG5cIiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cIiArXG5cIiAgem9vbTogbm9ybWFsOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1pY29uLXRleHQge1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMy43NWVtOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIHtcXG5cIiArXG5cIiAgICBib3JkZXItY29sb3I6ICNmMjc0NzQ7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciAuc3dhbDIteC1tYXJrIHtcXG5cIiArXG5cIiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cIiArXG5cIiAgICAgIGZsZXgtZ3JvdzogMTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149J3N3YWwyLXgtbWFyay1saW5lJ10ge1xcblwiICtcblwiICAgICAgZGlzcGxheTogYmxvY2s7XFxuXCIgK1xuXCIgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXCIgK1xuXCIgICAgICB0b3A6IDIuMzEyNWVtO1xcblwiICtcblwiICAgICAgd2lkdGg6IDIuOTM3NWVtO1xcblwiICtcblwiICAgICAgaGVpZ2h0OiAuMzEyNWVtO1xcblwiICtcblwiICAgICAgYm9yZGVyLXJhZGl1czogLjEyNWVtO1xcblwiICtcblwiICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyNzQ3NDsgfVxcblwiICtcblwiICAgICAgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXVtjbGFzcyQ9J2xlZnQnXSB7XFxuXCIgK1xuXCIgICAgICAgIGxlZnQ6IDEuMDYyNWVtO1xcblwiICtcblwiICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cXG5cIiArXG5cIiAgICAgIC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149J3N3YWwyLXgtbWFyay1saW5lJ11bY2xhc3MkPSdyaWdodCddIHtcXG5cIiArXG5cIiAgICAgICAgcmlnaHQ6IDFlbTtcXG5cIiArXG5cIiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWljb24uc3dhbDItd2FybmluZyB7XFxuXCIgK1xuXCIgICAgYm9yZGVyLWNvbG9yOiAjZmFjZWE4O1xcblwiICtcblwiICAgIGNvbG9yOiAjZjhiYjg2OyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1pY29uLnN3YWwyLWluZm8ge1xcblwiICtcblwiICAgIGJvcmRlci1jb2xvcjogIzlkZTBmNjtcXG5cIiArXG5cIiAgICBjb2xvcjogIzNmYzNlZTsgfVxcblwiICtcblwiICAuc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbiB7XFxuXCIgK1xuXCIgICAgYm9yZGVyLWNvbG9yOiAjYzlkYWUxO1xcblwiICtcblwiICAgIGNvbG9yOiAjODdhZGJkOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3Mge1xcblwiICtcblwiICAgIGJvcmRlci1jb2xvcjogI2E1ZGM4NjsgfVxcblwiICtcblwiICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ10ge1xcblwiICtcblwiICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcblwiICtcblwiICAgICAgd2lkdGg6IDMuNzVlbTtcXG5cIiArXG5cIiAgICAgIGhlaWdodDogNy41ZW07XFxuXCIgK1xuXCIgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcblwiICtcblwiICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XFxuXCIgK1xuXCIgICAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSddW2NsYXNzJD0nbGVmdCddIHtcXG5cIiArXG5cIiAgICAgICAgdG9wOiAtLjQzNzVlbTtcXG5cIiArXG5cIiAgICAgICAgbGVmdDogLTIuMDYzNWVtO1xcblwiICtcblwiICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAzLjc1ZW0gMy43NWVtO1xcblwiICtcblwiICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDMuNzVlbSAzLjc1ZW07XFxuXCIgK1xuXCIgICAgICAgIGJvcmRlci1yYWRpdXM6IDcuNWVtIDAgMCA3LjVlbTsgfVxcblwiICtcblwiICAgICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXVtjbGFzcyQ9J3JpZ2h0J10ge1xcblwiICtcblwiICAgICAgICB0b3A6IC0uNjg3NWVtO1xcblwiICtcblwiICAgICAgICBsZWZ0OiAxLjg3NWVtO1xcblwiICtcblwiICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDMuNzVlbTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDMuNzVlbTtcXG5cIiArXG5cIiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA3LjVlbSA3LjVlbSAwOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5nIHtcXG5cIiArXG5cIiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cIiArXG5cIiAgICAgIHRvcDogLS4yNWVtO1xcblwiICtcblwiICAgICAgbGVmdDogLS4yNWVtO1xcblwiICtcblwiICAgICAgd2lkdGg6IDEwMCU7XFxuXCIgK1xuXCIgICAgICBoZWlnaHQ6IDEwMCU7XFxuXCIgK1xuXCIgICAgICBib3JkZXI6IDAuMjVlbSBzb2xpZCByZ2JhKDE2NSwgMjIwLCAxMzQsIDAuMyk7XFxuXCIgK1xuXCIgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXCIgK1xuXCIgICAgICB6LWluZGV4OiAyO1xcblwiICtcblwiICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeCB7XFxuXCIgK1xuXCIgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXCIgK1xuXCIgICAgICB0b3A6IC41ZW07XFxuXCIgK1xuXCIgICAgICBsZWZ0OiAxLjYyNWVtO1xcblwiICtcblwiICAgICAgd2lkdGg6IC40Mzc1ZW07XFxuXCIgK1xuXCIgICAgICBoZWlnaHQ6IDUuNjI1ZW07XFxuXCIgK1xuXCIgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICB6LWluZGV4OiAxOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXSB7XFxuXCIgK1xuXCIgICAgICBkaXNwbGF5OiBibG9jaztcXG5cIiArXG5cIiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cIiArXG5cIiAgICAgIGhlaWdodDogLjMxMjVlbTtcXG5cIiArXG5cIiAgICAgIGJvcmRlci1yYWRpdXM6IC4xMjVlbTtcXG5cIiArXG5cIiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhNWRjODY7XFxuXCIgK1xuXCIgICAgICB6LWluZGV4OiAyOyB9XFxuXCIgK1xuXCIgICAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtbGluZSddW2NsYXNzJD0ndGlwJ10ge1xcblwiICtcblwiICAgICAgICB0b3A6IDIuODc1ZW07XFxuXCIgK1xuXCIgICAgICAgIGxlZnQ6IC44NzVlbTtcXG5cIiArXG5cIiAgICAgICAgd2lkdGg6IDEuNTYyNWVtO1xcblwiICtcblwiICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cXG5cIiArXG5cIiAgICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ11bY2xhc3MkPSdsb25nJ10ge1xcblwiICtcblwiICAgICAgICB0b3A6IDIuMzc1ZW07XFxuXCIgK1xuXCIgICAgICAgIHJpZ2h0OiAuNWVtO1xcblwiICtcblwiICAgICAgICB3aWR0aDogMi45Mzc1ZW07XFxuXCIgK1xuXCIgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIi5zd2FsMi1wcm9ncmVzc3N0ZXBzIHtcXG5cIiArXG5cIiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cIiArXG5cIiAgbWFyZ2luOiAwIDAgMS4yNWVtO1xcblwiICtcblwiICBwYWRkaW5nOiAwO1xcblwiICtcblwiICBmb250LXdlaWdodDogNjAwOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIGxpIHtcXG5cIiArXG5cIiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXCIgK1xuXCIgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZSB7XFxuXCIgK1xuXCIgICAgd2lkdGg6IDJlbTtcXG5cIiArXG5cIiAgICBoZWlnaHQ6IDJlbTtcXG5cIiArXG5cIiAgICBib3JkZXItcmFkaXVzOiAyZW07XFxuXCIgK1xuXCIgICAgYmFja2dyb3VuZDogIzMwODVkNjtcXG5cIiArXG5cIiAgICBjb2xvcjogI2ZmZjtcXG5cIiArXG5cIiAgICBsaW5lLWhlaWdodDogMmVtO1xcblwiICtcblwiICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cIiArXG5cIiAgICB6LWluZGV4OiAyMDsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZTpmaXJzdC1jaGlsZCB7XFxuXCIgK1xuXCIgICAgICBtYXJnaW4tbGVmdDogMDsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZTpsYXN0LWNoaWxkIHtcXG5cIiArXG5cIiAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZS5zd2FsMi1hY3RpdmVwcm9ncmVzc3N0ZXAge1xcblwiICtcblwiICAgICAgYmFja2dyb3VuZDogIzMwODVkNjsgfVxcblwiICtcblwiICAgICAgLnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlLnN3YWwyLWFjdGl2ZXByb2dyZXNzc3RlcCB+IC5zd2FsMi1wcm9ncmVzc2NpcmNsZSB7XFxuXCIgK1xuXCIgICAgICAgIGJhY2tncm91bmQ6ICNhZGQ4ZTY7IH1cXG5cIiArXG5cIiAgICAgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZS5zd2FsMi1hY3RpdmVwcm9ncmVzc3N0ZXAgfiAuc3dhbDItcHJvZ3Jlc3NsaW5lIHtcXG5cIiArXG5cIiAgICAgICAgYmFja2dyb3VuZDogI2FkZDhlNjsgfVxcblwiICtcblwiICAuc3dhbDItcHJvZ3Jlc3NzdGVwcyAuc3dhbDItcHJvZ3Jlc3NsaW5lIHtcXG5cIiArXG5cIiAgICB3aWR0aDogMi41ZW07XFxuXCIgK1xuXCIgICAgaGVpZ2h0OiAuNGVtO1xcblwiICtcblwiICAgIG1hcmdpbjogMCAtMXB4O1xcblwiICtcblwiICAgIGJhY2tncm91bmQ6ICMzMDg1ZDY7XFxuXCIgK1xuXCIgICAgei1pbmRleDogMTA7IH1cXG5cIiArXG5cIlxcblwiICtcblwiW2NsYXNzXj0nc3dhbDInXSB7XFxuXCIgK1xuXCIgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cIiArXG5cIlxcblwiICtcblwiLnN3YWwyLXNob3cge1xcblwiICtcblwiICAtd2Via2l0LWFuaW1hdGlvbjogc3dhbDItc2hvdyAwLjNzO1xcblwiICtcblwiICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItc2hvdyAwLjNzOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1zaG93LnN3YWwyLW5vYW5pbWF0aW9uIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcXG5cIiArXG5cIiAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTsgfVxcblwiICtcblwiXFxuXCIgK1xuXCIuc3dhbDItaGlkZSB7XFxuXCIgK1xuXCIgIC13ZWJraXQtYW5pbWF0aW9uOiBzd2FsMi1oaWRlIDAuMTVzIGZvcndhcmRzO1xcblwiICtcblwiICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItaGlkZSAwLjE1cyBmb3J3YXJkczsgfVxcblwiICtcblwiICAuc3dhbDItaGlkZS5zd2FsMi1ub2FuaW1hdGlvbiB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XFxuXCIgK1xuXCIgICAgICAgICAgICBhbmltYXRpb246IG5vbmU7IH1cXG5cIiArXG5cIlxcblwiICtcblwiW2Rpcj0ncnRsJ10gLnN3YWwyLWNsb3NlIHtcXG5cIiArXG5cIiAgcmlnaHQ6IGF1dG87XFxuXCIgK1xuXCIgIGxlZnQ6IDA7IH1cXG5cIiArXG5cIlxcblwiICtcblwiLnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwIHtcXG5cIiArXG5cIiAgLXdlYmtpdC1hbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAwLjc1cztcXG5cIiArXG5cIiAgICAgICAgICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAwLjc1czsgfVxcblwiICtcblwiXFxuXCIgK1xuXCIuc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWljb24gLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nIHtcXG5cIiArXG5cIiAgLXdlYmtpdC1hbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgMC43NXM7XFxuXCIgK1xuXCIgICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIDAuNzVzOyB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIi5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiAuc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0IHtcXG5cIiArXG5cIiAgLXdlYmtpdC1hbmltYXRpb246IHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbjtcXG5cIiArXG5cIiAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbjsgfVxcblwiICtcblwiXFxuXCIgK1xuXCIuc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIHtcXG5cIiArXG5cIiAgLXdlYmtpdC1hbmltYXRpb246IHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAwLjVzO1xcblwiICtcblwiICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIDAuNXM7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuc3dhbDIteC1tYXJrIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgMC41cztcXG5cIiArXG5cIiAgICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgMC41czsgfVxcblwiICtcblwiXFxuXCIgK1xuXCJALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItcm90YXRlLWxvYWRpbmcge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJAa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cIik7IiwiaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XG5cbi8vIEhhbmRsZSBjb250YWN0IGZvcm0gc3VibWlzc2lvbiBsaXN0ZW5lclxuY29uc3QgZm9ybVN1Ym1pdCA9ICgpID0+IHtcbiAgJChcImZvcm1cIikub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBzZW5kIGluZm8gdG8gZm9jdXNwb2N1c1xuICAgICQucG9zdCgkKHRoaXMpLmF0dHIoXCJhY3Rpb25cIiksICQodGhpcykuc2VyaWFsaXplKCksIFwianNvblwiKTtcbiAgICAvLyBwcmV2ZW50IGZvY3VzIHBvY3VzIHBvcHVwIGFuZCBwYWdlIHJlbG9hZFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gc3dlZXQgYWxlcnQgdG8gbGV0IHVzZXIga25vdyBhbGwgaXMgd2VsbFxuICAgIHN3YWwoe1xuICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXG4gICAgICB0aXRsZTogXCJNZXNzYWdlIFNlbnQhXCIsXG4gICAgICB0ZXh0OiBcIlRoYW5rIHlvdSBmb3IgeW91ciBtZXNzYWdlLiBJIHdpbGwgZ2V0IGJhY2sgdG8geW91IHNob3J0bHkuXCJcbiAgICB9KTtcbiAgICAkKFwiZm9ybVwiKVswXS5yZXNldCgpO1xuICB9KTtcbn07XG5cbi8vIFNtb290aCBzY3JvbGwgbGlzdGVuZXJcbmNvbnN0IHNtb290aFNjcm9sbCA9ICgpID0+IHtcbiAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCAnYVtocmVmXj1cIiNcIl0nLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKFxuICAgICAge1xuICAgICAgICBzY3JvbGxUb3A6ICQoJC5hdHRyKHRoaXMsIFwiaHJlZlwiKSkub2Zmc2V0KCkudG9wXG4gICAgICB9LFxuICAgICAgOTAwLFxuICAgICAgXCJzd2luZ1wiXG4gICAgKTtcbiAgfSk7XG59O1xuXG4vLyBIYW1idXJnZXIgbWVudSBsaXN0ZW5lclxuY29uc3QgaGFtYnVyZ2VyVG9nZ2xlID0gKCkgPT4ge1xuICAkKFwiLmhhbWJ1cmdlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKFwiLmhhbWJ1cmdlclwiKS50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcbiAgICAkKFwiLm5hdi1zZWN0aW9uc1wiKS50b2dnbGVDbGFzcyhcInRvZ2dsZVwiKTtcbiAgfSk7XG59O1xuXG4vLyBSZXZlYWwgYW5pbWF0aW9uc1xuY29uc3QgcmV2ZWFsID0gKCkgPT4ge1xuICBTY3JvbGxSZXZlYWwoKS5yZXZlYWwoXCIubmF2LWJhclwiLCB7IGRlbGF5OiA1MCB9KTtcbiAgU2Nyb2xsUmV2ZWFsKCkucmV2ZWFsKFwiLmxhbmRpbmctcGFnZS1ib2R5XCIsIHsgcmVzZXQ6IHRydWUsIGRlbGF5OiA1MCB9KTtcbiAgU2Nyb2xsUmV2ZWFsKCkucmV2ZWFsKFwiLmdldC1zdGFydGVkXCIsIHsgcmVzZXQ6IHRydWUsIGRlbGF5OiA1MCB9KTtcbiAgU2Nyb2xsUmV2ZWFsKCkucmV2ZWFsKFwiLmJpb1wiLCB7IHJlc2V0OiB0cnVlIH0pO1xuICBTY3JvbGxSZXZlYWwoKS5yZXZlYWwoXCIuc2tpbGxzXCIsIHsgcmVzZXQ6IHRydWUgfSk7XG4gIFNjcm9sbFJldmVhbCgpLnJldmVhbChcIi5wcm9qZWN0XCIsIHsgcmVzZXQ6IHRydWUgfSk7XG59O1xuXG4vLyBJbml0IGZ1bmN0aW9uIGZvciBhbGwgbGlzdGVuZXJzXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBoYW1idXJnZXJUb2dnbGUoKTtcbiAgc21vb3RoU2Nyb2xsKCk7XG4gIGZvcm1TdWJtaXQoKTtcbiAgcmV2ZWFsKCk7XG59O1xuXG4vLyBEb2MgcmVhZHlcbiQoZnVuY3Rpb24oKSB7XG4gIGluaXQoKTtcbn0pO1xuIl19
