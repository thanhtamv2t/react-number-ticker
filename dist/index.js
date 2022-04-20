function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactSpring = require('react-spring');

var TickerNumber = function TickerNumber(_ref) {
  var num = _ref.num,
      index = _ref.index;

  var _useState = React.useState(0),
      ticker = _useState[0],
      setTicker = _useState[1];

  var _useState2 = React.useState(0),
      height = _useState2[0],
      setHeight = _useState2[1];

  var heightRef = React.useRef(null);
  var arrNumber = React.useMemo(function () {
    return [].concat(Array(10).fill(1)).map(function (_it, index) {
      return index;
    });
  }, []);
  var props = reactSpring.useSpring({
    transform: "translateY(-" + Number(ticker) * 10 + "%)",
    delay: index * 100
  });
  React.useEffect(function () {
    if (height) {
      setTicker(num);
    } else if (heightRef.current) {
      setHeight(heightRef.current.clientHeight);
    }
  }, [heightRef, height, num]);
  return React__default.createElement("div", {
    className: 'ticker-container',
    style: {
      overflow: 'hidden',
      width: '100%',
      height: height || undefined
    }
  }, !height ? React__default.createElement("div", {
    className: 'num',
    ref: heightRef
  }, "-") : React__default.createElement(reactSpring.animated.div, {
    style: props
  }, arrNumber.map(function (it) {
    return React__default.createElement("div", {
      className: 'num',
      key: Math.random()
    }, it);
  })));
};

var styles = {"reactNumberTicker":"_37H-w","num":"_1H33u"};

var ReactNumberTicker = function ReactNumberTicker(_ref) {
  var number = _ref.number,
      className = _ref.className;
  if (!number) return null;
  var stringifyNumber = number === null || number === void 0 ? void 0 : number.toString();
  var splitText = stringifyNumber.split('');
  var containerClassName = [className, styles.reactNumberTicker].filter(function (it) {
    return it;
  }).join(' ');
  return React.createElement("div", {
    className: containerClassName
  }, splitText.map(function (it, index) {
    var castItem = Number(it);

    if (isNaN(castItem)) {
      return React.createElement(React.Fragment, {
        key: "text-" + index
      }, it);
    }

    return React.createElement(TickerNumber, {
      key: "text-" + index + "-time",
      num: parseInt(it),
      index: index
    });
  }));
};

module.exports = ReactNumberTicker;
//# sourceMappingURL=index.js.map
