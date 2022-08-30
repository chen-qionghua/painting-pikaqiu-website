// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"stringCss.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/*hey\uFF0C\u6211\u6765\u5728\u7EBF\u753B\u4E2A\u76AE\u5361\u4E18\uFF0C\u770B\u597D\u5566\uFF01 **/\n.skin *{box-sizing: border-box;margin: 0;padding: 0;}\n.skin *::before, .skin *::after{box-sizing: border-box;}\n/*\u5148\u753B\u76AE\u5361\u4E18\u6700\u7279\u522B\u7684\u76AE\u80A4\u989C\u8272~**/\n.skin{\n  background: #ffe600;\n  min-height: 50vh;\n  position: relative;\n}\n/*\u63A5\u4E0B\u6765\u662F\u8C46\u8C46\u9F3B\u5B50\uFF0C**/\n.nose{\n  border: 10px solid black;\n  border-color: black transparent transparent;\n  border-bottom: none;\n  width: 0px;\n  height: 0px;\n  position: relative;\n  left: 50%;\n  top: 145px;\n  margin-left: -10px;\n  z-index: 10;\n}\n@keyframes wave{\n  0%{\n    transform: rotate(0deg);\n}\n  33%{\n    transform: rotate(5deg);\n}\n  66%{\n    transform: rotate(-5deg);\n}\n  100%{\n    transform: rotate(0deg);\n}\n}\n.nose:hover{\n  transform-origin: center bottom;\n  animation: wave 300ms infinite linear;\n}\n/*\u4F60\u53EF\u4EE5\u6478\u6478\u5B83\u7684\u5C0F\u9F3B\u5934\uFF0C\u4F1A\u52A8\u7684\u54E6~**/\n.yuan{\n  position: absolute;\n  width: 20px;\n  height: 6px;\n  top: -16px;\n  left: -10px;\n  border-radius: 10px 10px 0 0;\n  background: black;\n}\n.eye {\n  border: 2px solid #000;\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  left: 50%;\n  top: 100px;\n  margin-left: -32px;\n  background: #2e2e2e;\n  border-radius: 50%;\n}\n.eye::before{\n  content: '';\n  display: block;\n  border: 3px solid #000;\n  width: 30px;\n  height: 30px;\n  background: #fff;\n  border-radius: 50%;\n  position: relative;\n  left: 4px;\n  top: 2px;\n}\n.eye.left{\n  transform: translateX(-100px);\n}\n.eye.right{\n  transform: translateX(100px);\n}\n/*\u63A5\u4E0B\u6765\u662F\u6BD4\u8F83\u96BE\u753B\u7684\u5634\u5DF4\u4E86**/\n.mouth{\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  top: 170px;\n  margin-left: -100px;\n}\n/*\u5148\u753B\u4E0A\u5634\u5507\uFF0C\u770B\u597D\u5566\uFF0C\u5B83\u662F\u7531\u4E24\u4E2A\u56DB\u5206\u4E4B\u4E00\u7684\u5706\u89D2\u77E9\u5F62\u62FC\u63A5\u800C\u6210\u7684**/\n.mouth .up{\n  position: relative;\n  top: -20px;\n  z-index: 1;\n}\n.mouth .up .lip{\n  border: 3px solid black;\n  height: 30px;\n  width: 100px;\n  background: #ffe600;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  position: relative;\n  position: absolute;\n  left: 50%;\n  margin-left: -50px;\n}\n/*\u91CD\u70B9\u6765\u4E86\uFF01\u6211\u4EEC\u65CB\u8F6C\u4E00\u4E0B\u4E0A\u5634\u5507\u7684\u5F27\u5EA6**/\n.mouth .up .lip.left{\n  border-radius: 0 0 0 50px;\n  transform: rotate(-15deg) translateX(-53px);\n}\n.mouth .up .lip.right{\n  border-radius: 0 0 50px 0px;\n  transform: rotate(15deg) translateX(53px);\n}\n/*\u628A\u9732\u51FA\u6765\u7684\u9ED1\u8272\u5C0F\u557E\u557E\u7528\u4F2A\u5143\u7D20\u906E\u6321\u4F4F\u54C8**/\n.mouth .up .lip::before{\n  content: '';\n  display: block;\n  width: 7px;\n  height: 30px;\n  position: absolute;\n  bottom: 0;\n  background: #ffe600;\n}\n.mouth .up .lip.left::before{\n  right: -6px;\n}\n.mouth .up .lip.right::before{\n  left: -6px;\n}\n/*\u4E0B\u5634\u5507\u5C31\u6BD4\u8F83\u7B80\u5355\u4E86\uFF0C\u662F\u7528border-radius\u7684\u8BBE\u7F6E\u62C9\u4E00\u4E2A\u53C8\u957F\u53C8\u6241\u7684\u26AA\u5706\u5708~\u7136\u540E\u8D85\u51FA\u8303\u56F4\u9690\u85CF\u90E8\u5206\u5C31\u884C\u4E86**/\n.mouth .down{\n  height: 180px;\n  position: absolute;\n  top: 5px;\n  width: 100%;\n  overflow: hidden;\n}\n.mouth .down .yuan1{\n  border: 3px solid black;\n  width: 150px;\n  height: 1000px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -75px;\n  border-radius: 75px/300px;\n  background: #9b000a;\n  overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2{\n  width: 200px;\n  height: 300px;\n  background: #ff485f;\n  position: absolute;\n  bottom: -155px;\n  left: 50%;\n  margin-left: -100px;\n  border-radius: 100px;\n}\n/*\u6700\u540E\u522B\u5FD8\u4E86\u8FD9\u4E24\u4E2A\u5C0F\u7EA2\u8138\u988A~**/\n.face{\n  position: absolute;\n  left: 50%;\n  border: 3px solid black;\n  width: 88px;\n  height: 88px;\n  top: 200px;\n  margin-left: -44px;\n  z-index: 3;\n}\n\n.face.left{\n  transform: translateX(-180px);\n  background: #ff0000;\n  border-radius: 50%;\n}\n\n.face.right{\n  transform: translateX(180px);\n  background: #ff0000;\n  border-radius: 50%;\n}\n/*\u4E00\u53EA\u53EF\u7231\u7684\u76AE\u5361\u4E18\u5C31\u5B8C\u6210\u4E86o(*\uFFE3\u25BD\uFFE3*)\u30D6\uD83D\uDE0A\uD83D\uDE0A\uD83D\uDE0A\n\u4F60\u53EF\u4EE5\u6478\u4E00\u6478\u5B83\u7684\u5C0F\u9F3B\u5934\u4F1A\u6709\u60CA\u559C\u2570(*\xB0\u25BD\xB0*)\u256F**/\n";
var _default = string;
exports.default = _default;
},{}],"flash.js":[function(require,module,exports) {
"use strict";

var _stringCss = _interopRequireDefault(require("./stringCss.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//面向对象
var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  //表驱动编程
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast',
    '#btnReload': 'reload'
  },
  n: 1,
  init: function init() {
    // 同时操作demo和demo2，展示文本和渲染样式
    player.ui.demo.innerText = _stringCss.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _stringCss.default.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  //绑定按钮事件
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value]; //这是一个函数
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _stringCss.default.length) {
      return window.clearInterval(player.id);
    }

    player.ui.demo.innerText = _stringCss.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _stringCss.default.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight; //页面滚动位置为滚动条高度（页面拉底状态）
  },
  play: function play() {
    window.clearInterval(player.id); //播放即销毁定时器后重新安装定时器

    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  //变速，先销毁后重新安装定时器
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  },
  reload: function reload() {
    player.pause();
    player.time = 100;
    player.n = 1;
    player.play();
  }
};
player.init();
},{"./stringCss.js":"stringCss.js"}],"C:/Users/50008324/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50142" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/50008324/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","flash.js"], null)
//# sourceMappingURL=/flash.8adb5c59.js.map