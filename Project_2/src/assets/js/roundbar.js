Chart.elements.Rectangle.prototype.draw = function () {
  var ctx = this._chart.ctx;
  var vm = this._view;
  var left, right, top, bottom, signX, signY, borderSkipped, radius;
  var borderWidth = vm.borderWidth;
  // Set Radius Here
  // If radius is large enough to cause drawing errors a max radius is imposed
  var cornerRadius = 20;

  if (!vm.horizontal) {
    // bar
    left = vm.x - vm.width / 2;
    right = vm.x + vm.width / 2;
    top = vm.y;
    bottom = vm.base;
    signX = 1;
    signY = bottom > top ? 1 : -1;
    borderSkipped = vm.borderSkipped || "bottom";
  } else {
    // horizontal bar
    left = vm.base;
    right = vm.x;
    top = vm.y - vm.height / 2;
    bottom = vm.y + vm.height / 2;
    signX = right > left ? 1 : -1;
    signY = 1;
    borderSkipped = vm.borderSkipped || "left";
  }

  // Canvas doesn't allow us to stroke inside the width so we can
  // adjust the sizes to fit if we're setting a stroke on the line
  if (borderWidth) {
    // borderWidth shold be less than bar width and bar height.
    var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    borderWidth = borderWidth > barSize ? barSize : borderWidth;
    var halfStroke = borderWidth / 2;
    // Adjust borderWidth when bar top position is near vm.base(zero).
    var borderLeft = left + (borderSkipped !== "left" ? halfStroke * signX : 0);
    var borderRight =
      right + (borderSkipped !== "right" ? -halfStroke * signX : 0);
    var borderTop = top + (borderSkipped !== "top" ? halfStroke * signY : 0);
    var borderBottom =
      bottom + (borderSkipped !== "bottom" ? -halfStroke * signY : 0);
    // not become a vertical line?
    if (borderLeft !== borderRight) {
      top = borderTop;
      bottom = borderBottom;
    }
    // not become a horizontal line?
    if (borderTop !== borderBottom) {
      left = borderLeft;
      right = borderRight;
    }
  }

  ctx.beginPath();
  ctx.fillStyle = vm.backgroundColor;
  ctx.strokeStyle = vm.borderColor;
  ctx.lineWidth = borderWidth;

  // Corner points, from bottom-left to bottom-right clockwise
  // | 1 2 |
  // | 0 3 |
  var corners = [
    [left, bottom],
    [left, top],
    [right, top],
    [right, bottom],
  ];

  // Find first (starting) corner with fallback to 'bottom'
  var borders = ["bottom", "left", "top", "right"];
  var startCorner = borders.indexOf(borderSkipped, 0);
  if (startCorner === -1) {
    startCorner = 0;
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4];
  }

  // Draw rectangle from 'startCorner'
  var corner = cornerAt(0);
  ctx.moveTo(corner[0], corner[1]);

  for (var i = 1; i < 4; i++) {
    corner = cornerAt(i);
    nextCornerId = i + 1;
    if (nextCornerId == 4) {
      nextCornerId = 0;
    }

    nextCorner = cornerAt(nextCornerId);

    width = corners[2][0] - corners[1][0];
    height = corners[0][1] - corners[1][1];
    x = corners[1][0];
    y = corners[1][1];

    var radius = cornerRadius;

    // Fix radius being too large
    if (radius > height / 2) {
      radius = height / 2;
    }
    if (radius > width / 2) {
      radius = width / 2;
    }

    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
  }

  ctx.fill();
  if (borderWidth) {
    ctx.stroke();
  }
};

!(function t(e, n, r) {
  function o(l, a) {
    if (!n[l]) {
      if (!e[l]) {
        var s = "function" == typeof require && require;
        if (!a && s) return s(l, !0);
        if (i) return i(l, !0);
        var c = new Error("Cannot find module '" + l + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      var u = (n[l] = { exports: {} });
      e[l][0].call(
        u.exports,
        function (t) {
          var n = e[l][1][t];
          return o(n ? n : t);
        },
        u,
        u.exports,
        t,
        e,
        n,
        r
      );
    }
    return n[l].exports;
  }
  for (
    var i = "function" == typeof require && require, l = 0;
    l < r.length;
    l++
  )
    o(r[l]);
  return o;
})(
  {
    1: [
      function (t, e, n) {
        "use strict";
        function r(t) {
          t.fn.perfectScrollbar = function (t) {
            return this.each(function () {
              if ("object" == typeof t || "undefined" == typeof t) {
                var e = t;
                i.get(this) || o.initialize(this, e);
              } else {
                var n = t;
                "update" === n
                  ? o.update(this)
                  : "destroy" === n && o.destroy(this);
              }
            });
          };
        }
        var o = t("../main"),
          i = t("../plugin/instances");
        if ("function" == typeof define && define.amd) define(["jquery"], r);
        else {
          var l = window.jQuery ? window.jQuery : window.$;
          "undefined" != typeof l && r(l);
        }
        e.exports = r;
      },
      { "../main": 7, "../plugin/instances": 18 },
    ],
    2: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          var n = t.className.split(" ");
          n.indexOf(e) < 0 && n.push(e), (t.className = n.join(" "));
        }
        function o(t, e) {
          var n = t.className.split(" "),
            r = n.indexOf(e);
          r >= 0 && n.splice(r, 1), (t.className = n.join(" "));
        }
        (n.add = function (t, e) {
          t.classList ? t.classList.add(e) : r(t, e);
        }),
          (n.remove = function (t, e) {
            t.classList ? t.classList.remove(e) : o(t, e);
          }),
          (n.list = function (t) {
            return t.classList
              ? Array.prototype.slice.apply(t.classList)
              : t.className.split(" ");
          });
      },
      {},
    ],
    3: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          return window.getComputedStyle(t)[e];
        }
        function o(t, e, n) {
          return (
            "number" == typeof n && (n = n.toString() + "px"),
            (t.style[e] = n),
            t
          );
        }
        function i(t, e) {
          for (var n in e) {
            var r = e[n];
            "number" == typeof r && (r = r.toString() + "px"), (t.style[n] = r);
          }
          return t;
        }
        var l = {};
        (l.e = function (t, e) {
          var n = document.createElement(t);
          return (n.className = e), n;
        }),
          (l.appendTo = function (t, e) {
            return e.appendChild(t), t;
          }),
          (l.css = function (t, e, n) {
            return "object" == typeof e
              ? i(t, e)
              : "undefined" == typeof n
              ? r(t, e)
              : o(t, e, n);
          }),
          (l.matches = function (t, e) {
            return "undefined" != typeof t.matches
              ? t.matches(e)
              : "undefined" != typeof t.matchesSelector
              ? t.matchesSelector(e)
              : "undefined" != typeof t.webkitMatchesSelector
              ? t.webkitMatchesSelector(e)
              : "undefined" != typeof t.mozMatchesSelector
              ? t.mozMatchesSelector(e)
              : "undefined" != typeof t.msMatchesSelector
              ? t.msMatchesSelector(e)
              : void 0;
          }),
          (l.remove = function (t) {
            "undefined" != typeof t.remove
              ? t.remove()
              : t.parentNode && t.parentNode.removeChild(t);
          }),
          (l.queryChildren = function (t, e) {
            return Array.prototype.filter.call(t.childNodes, function (t) {
              return l.matches(t, e);
            });
          }),
          (e.exports = l);
      },
      {},
    ],
    4: [
      function (t, e, n) {
        "use strict";
        var r = function (t) {
          (this.element = t), (this.events = {});
        };
        (r.prototype.bind = function (t, e) {
          "undefined" == typeof this.events[t] && (this.events[t] = []),
            this.events[t].push(e),
            this.element.addEventListener(t, e, !1);
        }),
          (r.prototype.unbind = function (t, e) {
            var n = "undefined" != typeof e;
            this.events[t] = this.events[t].filter(function (r) {
              return n && r !== e
                ? !0
                : (this.element.removeEventListener(t, r, !1), !1);
            }, this);
          }),
          (r.prototype.unbindAll = function () {
            for (var t in this.events) this.unbind(t);
          });
        var o = function () {
          this.eventElements = [];
        };
        (o.prototype.eventElement = function (t) {
          var e = this.eventElements.filter(function (e) {
            return e.element === t;
          })[0];
          return (
            "undefined" == typeof e &&
              ((e = new r(t)), this.eventElements.push(e)),
            e
          );
        }),
          (o.prototype.bind = function (t, e, n) {
            this.eventElement(t).bind(e, n);
          }),
          (o.prototype.unbind = function (t, e, n) {
            this.eventElement(t).unbind(e, n);
          }),
          (o.prototype.unbindAll = function () {
            for (var t = 0; t < this.eventElements.length; t++)
              this.eventElements[t].unbindAll();
          }),
          (o.prototype.once = function (t, e, n) {
            var r = this.eventElement(t),
              o = function (t) {
                r.unbind(e, o), n(t);
              };
            r.bind(e, o);
          }),
          (e.exports = o);
      },
      {},
    ],
    5: [
      function (t, e, n) {
        "use strict";
        e.exports = (function () {
          function t() {
            return Math.floor(65536 * (1 + Math.random()))
              .toString(16)
              .substring(1);
          }
          return function () {
            return (
              t() +
              t() +
              "-" +
              t() +
              "-" +
              t() +
              "-" +
              t() +
              "-" +
              t() +
              t() +
              t()
            );
          };
        })();
      },
      {},
    ],
    6: [
      function (t, e, n) {
        "use strict";
        var r = t("./class"),
          o = t("./dom"),
          i = (n.toInt = function (t) {
            return parseInt(t, 10) || 0;
          }),
          l = (n.clone = function (t) {
            if (null === t) return null;
            if (t.constructor === Array) return t.map(l);
            if ("object" == typeof t) {
              var e = {};
              for (var n in t) e[n] = l(t[n]);
              return e;
            }
            return t;
          });
        (n.extend = function (t, e) {
          var n = l(t);
          for (var r in e) n[r] = l(e[r]);
          return n;
        }),
          (n.isEditable = function (t) {
            return (
              o.matches(t, "input,[contenteditable]") ||
              o.matches(t, "select,[contenteditable]") ||
              o.matches(t, "textarea,[contenteditable]") ||
              o.matches(t, "button,[contenteditable]")
            );
          }),
          (n.removePsClasses = function (t) {
            for (var e = r.list(t), n = 0; n < e.length; n++) {
              var o = e[n];
              0 === o.indexOf("ps-") && r.remove(t, o);
            }
          }),
          (n.outerWidth = function (t) {
            return (
              i(o.css(t, "width")) +
              i(o.css(t, "paddingLeft")) +
              i(o.css(t, "paddingRight")) +
              i(o.css(t, "borderLeftWidth")) +
              i(o.css(t, "borderRightWidth"))
            );
          }),
          (n.startScrolling = function (t, e) {
            r.add(t, "ps-in-scrolling"),
              "undefined" != typeof e
                ? r.add(t, "ps-" + e)
                : (r.add(t, "ps-x"), r.add(t, "ps-y"));
          }),
          (n.stopScrolling = function (t, e) {
            r.remove(t, "ps-in-scrolling"),
              "undefined" != typeof e
                ? r.remove(t, "ps-" + e)
                : (r.remove(t, "ps-x"), r.remove(t, "ps-y"));
          }),
          (n.env = {
            isWebKit: "WebkitAppearance" in document.documentElement.style,
            supportsTouch:
              "ontouchstart" in window ||
              (window.DocumentTouch &&
                document instanceof window.DocumentTouch),
            supportsIePointer: null !== window.navigator.msMaxTouchPoints,
          });
      },
      { "./class": 2, "./dom": 3 },
    ],
    7: [
      function (t, e, n) {
        "use strict";
        var r = t("./plugin/destroy"),
          o = t("./plugin/initialize"),
          i = t("./plugin/update");
        e.exports = { initialize: o, update: i, destroy: r };
      },
      {
        "./plugin/destroy": 9,
        "./plugin/initialize": 17,
        "./plugin/update": 21,
      },
    ],
    8: [
      function (t, e, n) {
        "use strict";
        e.exports = {
          handlers: [
            "click-rail",
            "drag-scrollbar",
            "keyboard",
            "wheel",
            "touch",
          ],
          maxScrollbarLength: null,
          minScrollbarLength: null,
          scrollXMarginOffset: 0,
          scrollYMarginOffset: 0,
          stopPropagationOnClick: !0,
          suppressScrollX: !1,
          suppressScrollY: !1,
          swipePropagation: !0,
          useBothWheelAxes: !1,
          wheelPropagation: !1,
          wheelSpeed: 1,
          theme: "default",
        };
      },
      {},
    ],
    9: [
      function (t, e, n) {
        "use strict";
        var r = t("../lib/helper"),
          o = t("../lib/dom"),
          i = t("./instances");
        e.exports = function (t) {
          var e = i.get(t);
          e &&
            (e.event.unbindAll(),
            o.remove(e.scrollbarX),
            o.remove(e.scrollbarY),
            o.remove(e.scrollbarXRail),
            o.remove(e.scrollbarYRail),
            r.removePsClasses(t),
            i.remove(t));
        };
      },
      { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18 },
    ],
    10: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          function n(t) {
            return t.getBoundingClientRect();
          }
          var r = function (t) {
            t.stopPropagation();
          };
          e.settings.stopPropagationOnClick &&
            e.event.bind(e.scrollbarY, "click", r),
            e.event.bind(e.scrollbarYRail, "click", function (r) {
              var i = o.toInt(e.scrollbarYHeight / 2),
                s =
                  e.railYRatio *
                  (r.pageY - window.pageYOffset - n(e.scrollbarYRail).top - i),
                c = e.railYRatio * (e.railYHeight - e.scrollbarYHeight),
                u = s / c;
              0 > u ? (u = 0) : u > 1 && (u = 1),
                a(t, "top", (e.contentHeight - e.containerHeight) * u),
                l(t),
                r.stopPropagation();
            }),
            e.settings.stopPropagationOnClick &&
              e.event.bind(e.scrollbarX, "click", r),
            e.event.bind(e.scrollbarXRail, "click", function (r) {
              var i = o.toInt(e.scrollbarXWidth / 2),
                s =
                  e.railXRatio *
                  (r.pageX - window.pageXOffset - n(e.scrollbarXRail).left - i),
                c = e.railXRatio * (e.railXWidth - e.scrollbarXWidth),
                u = s / c;
              0 > u ? (u = 0) : u > 1 && (u = 1),
                a(
                  t,
                  "left",
                  (e.contentWidth - e.containerWidth) * u -
                    e.negativeScrollAdjustment
                ),
                l(t),
                r.stopPropagation();
            });
        }
        var o = t("../../lib/helper"),
          i = t("../instances"),
          l = t("../update-geometry"),
          a = t("../update-scroll");
        e.exports = function (t) {
          var e = i.get(t);
          r(t, e);
        };
      },
      {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20,
      },
    ],
    11: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          function n(n) {
            var o = r + n * e.railXRatio,
              l =
                Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) +
                e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
            0 > o
              ? (e.scrollbarXLeft = 0)
              : o > l
              ? (e.scrollbarXLeft = l)
              : (e.scrollbarXLeft = o);
            var a =
              i.toInt(
                (e.scrollbarXLeft * (e.contentWidth - e.containerWidth)) /
                  (e.containerWidth - e.railXRatio * e.scrollbarXWidth)
              ) - e.negativeScrollAdjustment;
            c(t, "left", a);
          }
          var r = null,
            o = null,
            a = function (e) {
              n(e.pageX - o), s(t), e.stopPropagation(), e.preventDefault();
            },
            u = function () {
              i.stopScrolling(t, "x"),
                e.event.unbind(e.ownerDocument, "mousemove", a);
            };
          e.event.bind(e.scrollbarX, "mousedown", function (n) {
            (o = n.pageX),
              (r = i.toInt(l.css(e.scrollbarX, "left")) * e.railXRatio),
              i.startScrolling(t, "x"),
              e.event.bind(e.ownerDocument, "mousemove", a),
              e.event.once(e.ownerDocument, "mouseup", u),
              n.stopPropagation(),
              n.preventDefault();
          });
        }
        function o(t, e) {
          function n(n) {
            var o = r + n * e.railYRatio,
              l =
                Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) +
                e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
            0 > o
              ? (e.scrollbarYTop = 0)
              : o > l
              ? (e.scrollbarYTop = l)
              : (e.scrollbarYTop = o);
            var a = i.toInt(
              (e.scrollbarYTop * (e.contentHeight - e.containerHeight)) /
                (e.containerHeight - e.railYRatio * e.scrollbarYHeight)
            );
            c(t, "top", a);
          }
          var r = null,
            o = null,
            a = function (e) {
              n(e.pageY - o), s(t), e.stopPropagation(), e.preventDefault();
            },
            u = function () {
              i.stopScrolling(t, "y"),
                e.event.unbind(e.ownerDocument, "mousemove", a);
            };
          e.event.bind(e.scrollbarY, "mousedown", function (n) {
            (o = n.pageY),
              (r = i.toInt(l.css(e.scrollbarY, "top")) * e.railYRatio),
              i.startScrolling(t, "y"),
              e.event.bind(e.ownerDocument, "mousemove", a),
              e.event.once(e.ownerDocument, "mouseup", u),
              n.stopPropagation(),
              n.preventDefault();
          });
        }
        var i = t("../../lib/helper"),
          l = t("../../lib/dom"),
          a = t("../instances"),
          s = t("../update-geometry"),
          c = t("../update-scroll");
        e.exports = function (t) {
          var e = a.get(t);
          r(t, e), o(t, e);
        };
      },
      {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20,
      },
    ],
    12: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          function n(n, r) {
            var o = t.scrollTop;
            if (0 === n) {
              if (!e.scrollbarYActive) return !1;
              if (
                (0 === o && r > 0) ||
                (o >= e.contentHeight - e.containerHeight && 0 > r)
              )
                return !e.settings.wheelPropagation;
            }
            var i = t.scrollLeft;
            if (0 === r) {
              if (!e.scrollbarXActive) return !1;
              if (
                (0 === i && 0 > n) ||
                (i >= e.contentWidth - e.containerWidth && n > 0)
              )
                return !e.settings.wheelPropagation;
            }
            return !0;
          }
          var r = !1;
          e.event.bind(t, "mouseenter", function () {
            r = !0;
          }),
            e.event.bind(t, "mouseleave", function () {
              r = !1;
            });
          var l = !1;
          e.event.bind(e.ownerDocument, "keydown", function (c) {
            if (!c.isDefaultPrevented || !c.isDefaultPrevented()) {
              var u =
                i.matches(e.scrollbarX, ":focus") ||
                i.matches(e.scrollbarY, ":focus");
              if (r || u) {
                var d = document.activeElement
                  ? document.activeElement
                  : e.ownerDocument.activeElement;
                if (d) {
                  if ("IFRAME" === d.tagName)
                    d = d.contentDocument.activeElement;
                  else for (; d.shadowRoot; ) d = d.shadowRoot.activeElement;
                  if (o.isEditable(d)) return;
                }
                var p = 0,
                  f = 0;
                switch (c.which) {
                  case 37:
                    p = -30;
                    break;
                  case 38:
                    f = 30;
                    break;
                  case 39:
                    p = 30;
                    break;
                  case 40:
                    f = -30;
                    break;
                  case 33:
                    f = 90;
                    break;
                  case 32:
                    f = c.shiftKey ? 90 : -90;
                    break;
                  case 34:
                    f = -90;
                    break;
                  case 35:
                    f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
                    break;
                  case 36:
                    f = c.ctrlKey ? t.scrollTop : e.containerHeight;
                    break;
                  default:
                    return;
                }
                s(t, "top", t.scrollTop - f),
                  s(t, "left", t.scrollLeft + p),
                  a(t),
                  (l = n(p, f)),
                  l && c.preventDefault();
              }
            }
          });
        }
        var o = t("../../lib/helper"),
          i = t("../../lib/dom"),
          l = t("../instances"),
          a = t("../update-geometry"),
          s = t("../update-scroll");
        e.exports = function (t) {
          var e = l.get(t);
          r(t, e);
        };
      },
      {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20,
      },
    ],
    13: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          function n(n, r) {
            var o = t.scrollTop;
            if (0 === n) {
              if (!e.scrollbarYActive) return !1;
              if (
                (0 === o && r > 0) ||
                (o >= e.contentHeight - e.containerHeight && 0 > r)
              )
                return !e.settings.wheelPropagation;
            }
            var i = t.scrollLeft;
            if (0 === r) {
              if (!e.scrollbarXActive) return !1;
              if (
                (0 === i && 0 > n) ||
                (i >= e.contentWidth - e.containerWidth && n > 0)
              )
                return !e.settings.wheelPropagation;
            }
            return !0;
          }
          function r(t) {
            var e = t.deltaX,
              n = -1 * t.deltaY;
            return (
              ("undefined" != typeof e && "undefined" != typeof n) ||
                ((e = (-1 * t.wheelDeltaX) / 6), (n = t.wheelDeltaY / 6)),
              t.deltaMode && 1 === t.deltaMode && ((e *= 10), (n *= 10)),
              e !== e && n !== n && ((e = 0), (n = t.wheelDelta)),
              [e, n]
            );
          }
          function o(e, n) {
            var r = t.querySelector("textarea:hover, .ps-child:hover");
            if (r) {
              if (
                "TEXTAREA" !== r.tagName &&
                !window.getComputedStyle(r).overflow.match(/(scroll|auto)/)
              )
                return !1;
              var o = r.scrollHeight - r.clientHeight;
              if (
                o > 0 &&
                !((0 === r.scrollTop && n > 0) || (r.scrollTop === o && 0 > n))
              )
                return !0;
              var i = r.scrollLeft - r.clientWidth;
              if (
                i > 0 &&
                !(
                  (0 === r.scrollLeft && 0 > e) ||
                  (r.scrollLeft === i && e > 0)
                )
              )
                return !0;
            }
            return !1;
          }
          function a(a) {
            var c = r(a),
              u = c[0],
              d = c[1];
            o(u, d) ||
              ((s = !1),
              e.settings.useBothWheelAxes
                ? e.scrollbarYActive && !e.scrollbarXActive
                  ? (d
                      ? l(t, "top", t.scrollTop - d * e.settings.wheelSpeed)
                      : l(t, "top", t.scrollTop + u * e.settings.wheelSpeed),
                    (s = !0))
                  : e.scrollbarXActive &&
                    !e.scrollbarYActive &&
                    (u
                      ? l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)
                      : l(t, "left", t.scrollLeft - d * e.settings.wheelSpeed),
                    (s = !0))
                : (l(t, "top", t.scrollTop - d * e.settings.wheelSpeed),
                  l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)),
              i(t),
              (s = s || n(u, d)),
              s && (a.stopPropagation(), a.preventDefault()));
          }
          var s = !1;
          "undefined" != typeof window.onwheel
            ? e.event.bind(t, "wheel", a)
            : "undefined" != typeof window.onmousewheel &&
              e.event.bind(t, "mousewheel", a);
        }
        var o = t("../instances"),
          i = t("../update-geometry"),
          l = t("../update-scroll");
        e.exports = function (t) {
          var e = o.get(t);
          r(t, e);
        };
      },
      { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 },
    ],
    14: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          e.event.bind(t, "scroll", function () {
            i(t);
          });
        }
        var o = t("../instances"),
          i = t("../update-geometry");
        e.exports = function (t) {
          var e = o.get(t);
          r(t, e);
        };
      },
      { "../instances": 18, "../update-geometry": 19 },
    ],
    15: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          function n() {
            var t = window.getSelection
              ? window.getSelection()
              : document.getSelection
              ? document.getSelection()
              : "";
            return 0 === t.toString().length
              ? null
              : t.getRangeAt(0).commonAncestorContainer;
          }
          function r() {
            c ||
              (c = setInterval(function () {
                return i.get(t)
                  ? (a(t, "top", t.scrollTop + u.top),
                    a(t, "left", t.scrollLeft + u.left),
                    void l(t))
                  : void clearInterval(c);
              }, 50));
          }
          function s() {
            c && (clearInterval(c), (c = null)), o.stopScrolling(t);
          }
          var c = null,
            u = { top: 0, left: 0 },
            d = !1;
          e.event.bind(e.ownerDocument, "selectionchange", function () {
            t.contains(n()) ? (d = !0) : ((d = !1), s());
          }),
            e.event.bind(window, "mouseup", function () {
              d && ((d = !1), s());
            }),
            e.event.bind(window, "mousemove", function (e) {
              if (d) {
                var n = { x: e.pageX, y: e.pageY },
                  i = {
                    left: t.offsetLeft,
                    right: t.offsetLeft + t.offsetWidth,
                    top: t.offsetTop,
                    bottom: t.offsetTop + t.offsetHeight,
                  };
                n.x < i.left + 3
                  ? ((u.left = -5), o.startScrolling(t, "x"))
                  : n.x > i.right - 3
                  ? ((u.left = 5), o.startScrolling(t, "x"))
                  : (u.left = 0),
                  n.y < i.top + 3
                    ? (i.top + 3 - n.y < 5 ? (u.top = -5) : (u.top = -20),
                      o.startScrolling(t, "y"))
                    : n.y > i.bottom - 3
                    ? (n.y - i.bottom + 3 < 5 ? (u.top = 5) : (u.top = 20),
                      o.startScrolling(t, "y"))
                    : (u.top = 0),
                  0 === u.top && 0 === u.left ? s() : r();
              }
            });
        }
        var o = t("../../lib/helper"),
          i = t("../instances"),
          l = t("../update-geometry"),
          a = t("../update-scroll");
        e.exports = function (t) {
          var e = i.get(t);
          r(t, e);
        };
      },
      {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20,
      },
    ],
    16: [
      function (t, e, n) {
        "use strict";
        function r(t, e, n, r) {
          function o(n, r) {
            var o = t.scrollTop,
              i = t.scrollLeft,
              l = Math.abs(n),
              a = Math.abs(r);
            if (a > l) {
              if (
                (0 > r && o === e.contentHeight - e.containerHeight) ||
                (r > 0 && 0 === o)
              )
                return !e.settings.swipePropagation;
            } else if (
              l > a &&
              ((0 > n && i === e.contentWidth - e.containerWidth) ||
                (n > 0 && 0 === i))
            )
              return !e.settings.swipePropagation;
            return !0;
          }
          function s(e, n) {
            a(t, "top", t.scrollTop - n), a(t, "left", t.scrollLeft - e), l(t);
          }
          function c() {
            Y = !0;
          }
          function u() {
            Y = !1;
          }
          function d(t) {
            return t.targetTouches ? t.targetTouches[0] : t;
          }
          function p(t) {
            return t.targetTouches && 1 === t.targetTouches.length
              ? !0
              : !(
                  !t.pointerType ||
                  "mouse" === t.pointerType ||
                  t.pointerType === t.MSPOINTER_TYPE_MOUSE
                );
          }
          function f(t) {
            if (p(t)) {
              w = !0;
              var e = d(t);
              (v.pageX = e.pageX),
                (v.pageY = e.pageY),
                (g = new Date().getTime()),
                null !== y && clearInterval(y),
                t.stopPropagation();
            }
          }
          function h(t) {
            if ((!w && e.settings.swipePropagation && f(t), !Y && w && p(t))) {
              var n = d(t),
                r = { pageX: n.pageX, pageY: n.pageY },
                i = r.pageX - v.pageX,
                l = r.pageY - v.pageY;
              s(i, l), (v = r);
              var a = new Date().getTime(),
                c = a - g;
              c > 0 && ((m.x = i / c), (m.y = l / c), (g = a)),
                o(i, l) && (t.stopPropagation(), t.preventDefault());
            }
          }
          function b() {
            !Y &&
              w &&
              ((w = !1),
              clearInterval(y),
              (y = setInterval(function () {
                return i.get(t)
                  ? Math.abs(m.x) < 0.01 && Math.abs(m.y) < 0.01
                    ? void clearInterval(y)
                    : (s(30 * m.x, 30 * m.y), (m.x *= 0.8), void (m.y *= 0.8))
                  : void clearInterval(y);
              }, 10)));
          }
          var v = {},
            g = 0,
            m = {},
            y = null,
            Y = !1,
            w = !1;
          n &&
            (e.event.bind(window, "touchstart", c),
            e.event.bind(window, "touchend", u),
            e.event.bind(t, "touchstart", f),
            e.event.bind(t, "touchmove", h),
            e.event.bind(t, "touchend", b)),
            r &&
              (window.PointerEvent
                ? (e.event.bind(window, "pointerdown", c),
                  e.event.bind(window, "pointerup", u),
                  e.event.bind(t, "pointerdown", f),
                  e.event.bind(t, "pointermove", h),
                  e.event.bind(t, "pointerup", b))
                : window.MSPointerEvent &&
                  (e.event.bind(window, "MSPointerDown", c),
                  e.event.bind(window, "MSPointerUp", u),
                  e.event.bind(t, "MSPointerDown", f),
                  e.event.bind(t, "MSPointerMove", h),
                  e.event.bind(t, "MSPointerUp", b)));
        }
        var o = t("../../lib/helper"),
          i = t("../instances"),
          l = t("../update-geometry"),
          a = t("../update-scroll");
        e.exports = function (t) {
          if (o.env.supportsTouch || o.env.supportsIePointer) {
            var e = i.get(t);
            r(t, e, o.env.supportsTouch, o.env.supportsIePointer);
          }
        };
      },
      {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20,
      },
    ],
    17: [
      function (t, e, n) {
        "use strict";
        var r = t("../lib/helper"),
          o = t("../lib/class"),
          i = t("./instances"),
          l = t("./update-geometry"),
          a = {
            "click-rail": t("./handler/click-rail"),
            "drag-scrollbar": t("./handler/drag-scrollbar"),
            keyboard: t("./handler/keyboard"),
            wheel: t("./handler/mouse-wheel"),
            touch: t("./handler/touch"),
            selection: t("./handler/selection"),
          },
          s = t("./handler/native-scroll");
        e.exports = function (t, e) {
          (e = "object" == typeof e ? e : {}), o.add(t, "ps-container");
          var n = i.add(t);
          (n.settings = r.extend(n.settings, e)),
            o.add(t, "ps-theme-" + n.settings.theme),
            n.settings.handlers.forEach(function (e) {
              a[e](t);
            }),
            s(t),
            l(t);
        };
      },
      {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19,
      },
    ],
    18: [
      function (t, e, n) {
        "use strict";
        function r(t) {
          function e() {
            s.add(t, "ps-focus");
          }
          function n() {
            s.remove(t, "ps-focus");
          }
          var r = this;
          (r.settings = a.clone(c)),
            (r.containerWidth = null),
            (r.containerHeight = null),
            (r.contentWidth = null),
            (r.contentHeight = null),
            (r.isRtl = "rtl" === u.css(t, "direction")),
            (r.isNegativeScroll = (function () {
              var e = t.scrollLeft,
                n = null;
              return (
                (t.scrollLeft = -1),
                (n = t.scrollLeft < 0),
                (t.scrollLeft = e),
                n
              );
            })()),
            (r.negativeScrollAdjustment = r.isNegativeScroll
              ? t.scrollWidth - t.clientWidth
              : 0),
            (r.event = new d()),
            (r.ownerDocument = t.ownerDocument || document),
            (r.scrollbarXRail = u.appendTo(
              u.e("div", "ps-scrollbar-x-rail"),
              t
            )),
            (r.scrollbarX = u.appendTo(
              u.e("div", "ps-scrollbar-x"),
              r.scrollbarXRail
            )),
            r.scrollbarX.setAttribute("tabindex", 0),
            r.event.bind(r.scrollbarX, "focus", e),
            r.event.bind(r.scrollbarX, "blur", n),
            (r.scrollbarXActive = null),
            (r.scrollbarXWidth = null),
            (r.scrollbarXLeft = null),
            (r.scrollbarXBottom = a.toInt(u.css(r.scrollbarXRail, "bottom"))),
            (r.isScrollbarXUsingBottom =
              r.scrollbarXBottom === r.scrollbarXBottom),
            (r.scrollbarXTop = r.isScrollbarXUsingBottom
              ? null
              : a.toInt(u.css(r.scrollbarXRail, "top"))),
            (r.railBorderXWidth =
              a.toInt(u.css(r.scrollbarXRail, "borderLeftWidth")) +
              a.toInt(u.css(r.scrollbarXRail, "borderRightWidth"))),
            u.css(r.scrollbarXRail, "display", "block"),
            (r.railXMarginWidth =
              a.toInt(u.css(r.scrollbarXRail, "marginLeft")) +
              a.toInt(u.css(r.scrollbarXRail, "marginRight"))),
            u.css(r.scrollbarXRail, "display", ""),
            (r.railXWidth = null),
            (r.railXRatio = null),
            (r.scrollbarYRail = u.appendTo(
              u.e("div", "ps-scrollbar-y-rail"),
              t
            )),
            (r.scrollbarY = u.appendTo(
              u.e("div", "ps-scrollbar-y"),
              r.scrollbarYRail
            )),
            r.scrollbarY.setAttribute("tabindex", 0),
            r.event.bind(r.scrollbarY, "focus", e),
            r.event.bind(r.scrollbarY, "blur", n),
            (r.scrollbarYActive = null),
            (r.scrollbarYHeight = null),
            (r.scrollbarYTop = null),
            (r.scrollbarYRight = a.toInt(u.css(r.scrollbarYRail, "right"))),
            (r.isScrollbarYUsingRight =
              r.scrollbarYRight === r.scrollbarYRight),
            (r.scrollbarYLeft = r.isScrollbarYUsingRight
              ? null
              : a.toInt(u.css(r.scrollbarYRail, "left"))),
            (r.scrollbarYOuterWidth = r.isRtl
              ? a.outerWidth(r.scrollbarY)
              : null),
            (r.railBorderYWidth =
              a.toInt(u.css(r.scrollbarYRail, "borderTopWidth")) +
              a.toInt(u.css(r.scrollbarYRail, "borderBottomWidth"))),
            u.css(r.scrollbarYRail, "display", "block"),
            (r.railYMarginHeight =
              a.toInt(u.css(r.scrollbarYRail, "marginTop")) +
              a.toInt(u.css(r.scrollbarYRail, "marginBottom"))),
            u.css(r.scrollbarYRail, "display", ""),
            (r.railYHeight = null),
            (r.railYRatio = null);
        }
        function o(t) {
          return t.getAttribute("data-ps-id");
        }
        function i(t, e) {
          t.setAttribute("data-ps-id", e);
        }
        function l(t) {
          t.removeAttribute("data-ps-id");
        }
        var a = t("../lib/helper"),
          s = t("../lib/class"),
          c = t("./default-setting"),
          u = t("../lib/dom"),
          d = t("../lib/event-manager"),
          p = t("../lib/guid"),
          f = {};
        (n.add = function (t) {
          var e = p();
          return i(t, e), (f[e] = new r(t)), f[e];
        }),
          (n.remove = function (t) {
            delete f[o(t)], l(t);
          }),
          (n.get = function (t) {
            return f[o(t)];
          });
      },
      {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8,
      },
    ],
    19: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          return (
            t.settings.minScrollbarLength &&
              (e = Math.max(e, t.settings.minScrollbarLength)),
            t.settings.maxScrollbarLength &&
              (e = Math.min(e, t.settings.maxScrollbarLength)),
            e
          );
        }
        function o(t, e) {
          var n = { width: e.railXWidth };
          e.isRtl
            ? (n.left =
                e.negativeScrollAdjustment +
                t.scrollLeft +
                e.containerWidth -
                e.contentWidth)
            : (n.left = t.scrollLeft),
            e.isScrollbarXUsingBottom
              ? (n.bottom = e.scrollbarXBottom - t.scrollTop)
              : (n.top = e.scrollbarXTop + t.scrollTop),
            a.css(e.scrollbarXRail, n);
          var r = { top: t.scrollTop, height: e.railYHeight };
          e.isScrollbarYUsingRight
            ? e.isRtl
              ? (r.right =
                  e.contentWidth -
                  (e.negativeScrollAdjustment + t.scrollLeft) -
                  e.scrollbarYRight -
                  e.scrollbarYOuterWidth)
              : (r.right = e.scrollbarYRight - t.scrollLeft)
            : e.isRtl
            ? (r.left =
                e.negativeScrollAdjustment +
                t.scrollLeft +
                2 * e.containerWidth -
                e.contentWidth -
                e.scrollbarYLeft -
                e.scrollbarYOuterWidth)
            : (r.left = e.scrollbarYLeft + t.scrollLeft),
            a.css(e.scrollbarYRail, r),
            a.css(e.scrollbarX, {
              left: e.scrollbarXLeft,
              width: e.scrollbarXWidth - e.railBorderXWidth,
            }),
            a.css(e.scrollbarY, {
              top: e.scrollbarYTop,
              height: e.scrollbarYHeight - e.railBorderYWidth,
            });
        }
        var i = t("../lib/helper"),
          l = t("../lib/class"),
          a = t("../lib/dom"),
          s = t("./instances"),
          c = t("./update-scroll");
        e.exports = function (t) {
          var e = s.get(t);
          (e.containerWidth = t.clientWidth),
            (e.containerHeight = t.clientHeight),
            (e.contentWidth = t.scrollWidth),
            (e.contentHeight = t.scrollHeight);
          var n;
          t.contains(e.scrollbarXRail) ||
            ((n = a.queryChildren(t, ".ps-scrollbar-x-rail")),
            n.length > 0 &&
              n.forEach(function (t) {
                a.remove(t);
              }),
            a.appendTo(e.scrollbarXRail, t)),
            t.contains(e.scrollbarYRail) ||
              ((n = a.queryChildren(t, ".ps-scrollbar-y-rail")),
              n.length > 0 &&
                n.forEach(function (t) {
                  a.remove(t);
                }),
              a.appendTo(e.scrollbarYRail, t)),
            !e.settings.suppressScrollX &&
            e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
              ? ((e.scrollbarXActive = !0),
                (e.railXWidth = e.containerWidth - e.railXMarginWidth),
                (e.railXRatio = e.containerWidth / e.railXWidth),
                (e.scrollbarXWidth = r(
                  e,
                  i.toInt((e.railXWidth * e.containerWidth) / e.contentWidth)
                )),
                (e.scrollbarXLeft = i.toInt(
                  ((e.negativeScrollAdjustment + t.scrollLeft) *
                    (e.railXWidth - e.scrollbarXWidth)) /
                    (e.contentWidth - e.containerWidth)
                )))
              : (e.scrollbarXActive = !1),
            !e.settings.suppressScrollY &&
            e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
              ? ((e.scrollbarYActive = !0),
                (e.railYHeight = e.containerHeight - e.railYMarginHeight),
                (e.railYRatio = e.containerHeight / e.railYHeight),
                (e.scrollbarYHeight = r(
                  e,
                  i.toInt((e.railYHeight * e.containerHeight) / e.contentHeight)
                )),
                (e.scrollbarYTop = i.toInt(
                  (t.scrollTop * (e.railYHeight - e.scrollbarYHeight)) /
                    (e.contentHeight - e.containerHeight)
                )))
              : (e.scrollbarYActive = !1),
            e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
              (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
            e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
              (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
            o(t, e),
            e.scrollbarXActive
              ? l.add(t, "ps-active-x")
              : (l.remove(t, "ps-active-x"),
                (e.scrollbarXWidth = 0),
                (e.scrollbarXLeft = 0),
                c(t, "left", 0)),
            e.scrollbarYActive
              ? l.add(t, "ps-active-y")
              : (l.remove(t, "ps-active-y"),
                (e.scrollbarYHeight = 0),
                (e.scrollbarYTop = 0),
                c(t, "top", 0));
        };
      },
      {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-scroll": 20,
      },
    ],
    20: [
      function (t, e, n) {
        "use strict";
        var r,
          o,
          i = t("./instances"),
          l = document.createEvent("Event"),
          a = document.createEvent("Event"),
          s = document.createEvent("Event"),
          c = document.createEvent("Event"),
          u = document.createEvent("Event"),
          d = document.createEvent("Event"),
          p = document.createEvent("Event"),
          f = document.createEvent("Event"),
          h = document.createEvent("Event"),
          b = document.createEvent("Event");
        l.initEvent("ps-scroll-up", !0, !0),
          a.initEvent("ps-scroll-down", !0, !0),
          s.initEvent("ps-scroll-left", !0, !0),
          c.initEvent("ps-scroll-right", !0, !0),
          u.initEvent("ps-scroll-y", !0, !0),
          d.initEvent("ps-scroll-x", !0, !0),
          p.initEvent("ps-x-reach-start", !0, !0),
          f.initEvent("ps-x-reach-end", !0, !0),
          h.initEvent("ps-y-reach-start", !0, !0),
          b.initEvent("ps-y-reach-end", !0, !0),
          (e.exports = function (t, e, n) {
            if ("undefined" == typeof t)
              throw "You must provide an element to the update-scroll function";
            if ("undefined" == typeof e)
              throw "You must provide an axis to the update-scroll function";
            if ("undefined" == typeof n)
              throw "You must provide a value to the update-scroll function";
            "top" === e &&
              0 >= n &&
              ((t.scrollTop = n = 0), t.dispatchEvent(h)),
              "left" === e &&
                0 >= n &&
                ((t.scrollLeft = n = 0), t.dispatchEvent(p));
            var v = i.get(t);
            "top" === e &&
              n >= v.contentHeight - v.containerHeight &&
              ((n = v.contentHeight - v.containerHeight),
              n - t.scrollTop <= 1 ? (n = t.scrollTop) : (t.scrollTop = n),
              t.dispatchEvent(b)),
              "left" === e &&
                n >= v.contentWidth - v.containerWidth &&
                ((n = v.contentWidth - v.containerWidth),
                n - t.scrollLeft <= 1 ? (n = t.scrollLeft) : (t.scrollLeft = n),
                t.dispatchEvent(f)),
              r || (r = t.scrollTop),
              o || (o = t.scrollLeft),
              "top" === e && r > n && t.dispatchEvent(l),
              "top" === e && n > r && t.dispatchEvent(a),
              "left" === e && o > n && t.dispatchEvent(s),
              "left" === e && n > o && t.dispatchEvent(c),
              "top" === e && ((t.scrollTop = r = n), t.dispatchEvent(u)),
              "left" === e && ((t.scrollLeft = o = n), t.dispatchEvent(d));
          });
      },
      { "./instances": 18 },
    ],
    21: [
      function (t, e, n) {
        "use strict";
        var r = t("../lib/helper"),
          o = t("../lib/dom"),
          i = t("./instances"),
          l = t("./update-geometry"),
          a = t("./update-scroll");
        e.exports = function (t) {
          var e = i.get(t);
          e &&
            ((e.negativeScrollAdjustment = e.isNegativeScroll
              ? t.scrollWidth - t.clientWidth
              : 0),
            o.css(e.scrollbarXRail, "display", "block"),
            o.css(e.scrollbarYRail, "display", "block"),
            (e.railXMarginWidth =
              r.toInt(o.css(e.scrollbarXRail, "marginLeft")) +
              r.toInt(o.css(e.scrollbarXRail, "marginRight"))),
            (e.railYMarginHeight =
              r.toInt(o.css(e.scrollbarYRail, "marginTop")) +
              r.toInt(o.css(e.scrollbarYRail, "marginBottom"))),
            o.css(e.scrollbarXRail, "display", "none"),
            o.css(e.scrollbarYRail, "display", "none"),
            l(t),
            a(t, "top", t.scrollTop),
            a(t, "left", t.scrollLeft),
            o.css(e.scrollbarXRail, "display", ""),
            o.css(e.scrollbarYRail, "display", ""));
        };
      },
      {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-geometry": 19,
        "./update-scroll": 20,
      },
    ],
  },
  {},
  [1]
);
("use strict");
var scrollable_custom = {
  init: function () {
    $(".vertical-scroll").perfectScrollbar({
      suppressScrollX: !0,
      wheelPropagation: !0,
    }),
      $(".horizontal-scroll").perfectScrollbar({
        suppressScrollY: !0,
        wheelPropagation: !0,
      }),
      $(".both-side-scroll").perfectScrollbar({ wheelPropagation: !0 }),
      $(".visible-scroll").perfectScrollbar({ wheelPropagation: !0 }),
      $(".scrollbar-margins").perfectScrollbar({ wheelPropagation: !0 }),
      $(".click-drag-handler").perfectScrollbar({
        handlers: ["click-rail", "drag-scrollbar"],
        wheelPropagation: !0,
      });
  },
};
(function ($) {
  "use strict";
  scrollable_custom.init();
})(jQuery);
