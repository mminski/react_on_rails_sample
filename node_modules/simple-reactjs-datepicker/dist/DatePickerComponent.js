'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('/home/kiran/codehome/git-project/simple-reactjs-datepicker/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/home/kiran/codehome/git-project/simple-reactjs-datepicker/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/home/kiran/codehome/git-project/simple-reactjs-datepicker/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _DatePickerUtil = require('./DatePickerUtil');

var _DatePickerUtil2 = _interopRequireDefault(_DatePickerUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  DatePickerComponent: {
    displayName: 'DatePickerComponent'
  }
};

var _homeKiranCodehomeGitProjectSimpleReactjsDatepickerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/DatePickerComponent.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _homeKiranCodehomeGitProjectSimpleReactjsDatepickerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/DatePickerComponent.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _homeKiranCodehomeGitProjectSimpleReactjsDatepickerNode_modulesReactTransformHmrLibIndexJs2(_homeKiranCodehomeGitProjectSimpleReactjsDatepickerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
} //React Dependencies


//Libraries


//Utils


var DatePickerComponent = _wrapComponent('DatePickerComponent')(function (_React$Component) {
  _inherits(DatePickerComponent, _React$Component);

  function DatePickerComponent(props) {
    _classCallCheck(this, DatePickerComponent);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DatePickerComponent).call(this, props));

    _this.renderDay = _this.renderDay.bind(_this);
    _this.renderMonth = _this.renderMonth.bind(_this);
    _this.renderYear = _this.renderYear.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleDayChange = _this.handleDayChange.bind(_this);
    _this.handleMonthChange = _this.handleMonthChange.bind(_this);
    _this.handleYearChange = _this.handleYearChange.bind(_this);
    _this.calculateDate = _this.calculateDate.bind(_this);
    _this.displayErrorMessage = _this.displayErrorMessage.bind(_this);
    _this.setInitialDate = _this.setInitialDate.bind(_this);
    _this.state = {
      noOfDay: 31,
      year: '0',
      month: '0',
      day: '0',
      yearChanged: false,
      monthChanged: false,
      errorMessage: ''
    };
    return _this;
  }

  _createClass(DatePickerComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setInitialDate(this.props.date);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var date = nextProps.date;
      this.setInitialDate(date);
    }
  }, {
    key: 'setInitialDate',
    value: function setInitialDate(date) {
      if (date != null || date != undefined) {
        var year = date.format('YYYY');
        var month = date.format('M');
        var day = date.format('D');
        this.setState({
          noOfDay: _DatePickerUtil2.default.calculateDaysInMonth(year, month),
          year: year,
          month: month,
          day: day,
          yearChanged: true,
          monthChanged: true
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var name = event.target.name;
      var value = event.target.value;
      switch (name) {
        case 'day':
          this.handleDayChange(value);
          break;

        case 'month':
          this.handleMonthChange(value);
          break;

        case 'year':
          this.handleYearChange(value);
          break;

        default:
          return;
      }
    }
  }, {
    key: 'handleDayChange',
    value: function handleDayChange(value) {
      this.state.day = value;
      this.setState({ day: this.state.day });
      this.calculateDate();
    }
  }, {
    key: 'handleMonthChange',
    value: function handleMonthChange(value) {
      this.state.month = value;
      this.setState({ month: this.state.month });

      if (this.state.month != '0' && !this.state.yearChanged) {
        this.setState({ monthChanged: true });
      } else if (this.state.month != '0' && this.state.yearChanged) {
        this.setState({ monthChanged: true });
        this.state.noOfDay = _DatePickerUtil2.default.calculateDaysInMonth(this.state.year, this.state.month);

        if (this.state.noOfDay < this.state.day) {
          this.state.day = '0';
        }

        this.setState({ noOfDay: this.state.noOfDay, day: this.state.day });
      } else if (this.state.month == '0') {
        this.setState({ monthChanged: false });
      }

      this.calculateDate();
    }
  }, {
    key: 'handleYearChange',
    value: function handleYearChange(value) {
      this.state.year = value;
      this.setState({ year: this.state.year });

      if (this.state.year != '0' && !this.state.monthChanged) {
        this.setState({ yearChanged: true });
      } else if (this.state.year != '0' && this.state.monthChanged) {
        this.setState({ yearChanged: true });
        this.state.noOfDay = _DatePickerUtil2.default.calculateDaysInMonth(this.state.year, this.state.month);

        if (this.state.noOfDay < this.state.day) {
          this.state.day = '0';
        }

        this.setState({ noOfDay: this.state.noOfDay, day: this.state.day });
      } else {
        this.setState({ yearChanged: false });
      }

      this.calculateDate();
    }
  }, {
    key: 'calculateDate',
    value: function calculateDate() {
      if (this.state.day != '0' && this.state.month != '0' && this.state.year != '0') {
        var date = this.state.year + '-' + this.state.month + '-' + this.state.day;
        var formatedDate = (0, _moment2.default)(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
        if (formatedDate == 'Invalid date') {
          this.displayErrorMessage(formatedDate);
          this.props.onChange(null);
        } else {
          this.displayErrorMessage();
          this.props.onChange((0, _moment2.default)(date, 'YYYY-MM-DD'));
        }
      } else {
        this.props.onChange(null);
        this.displayErrorMessage();
      }
    }
  }, {
    key: 'displayErrorMessage',
    value: function displayErrorMessage(error) {
      if (error) {
        this.state.errorMessage = 'The date is invalid. Please select a valid date.';
        this.setState({ errorMessage: this.state.errorMessage });
      } else {
        this.state.errorMessage = '';
        this.setState({ errorMessage: this.state.errorMessage });
      }
    }
  }, {
    key: 'renderDay',
    value: function renderDay(key) {
      return _react3.default.createElement(
        'option',
        { key: key, value: key },
        key
      );
    }
  }, {
    key: 'renderMonth',
    value: function renderMonth() {
      return _react3.default.createElement(
        'select',
        { className: 'form-control',
          name: 'month',
          onChange: this.handleChange,
          value: this.state.month },
        _react3.default.createElement(
          'option',
          { value: '0' },
          'month'
        ),
        _react3.default.createElement(
          'option',
          { value: '1' },
          'Jan'
        ),
        _react3.default.createElement(
          'option',
          { value: '2' },
          'Feb'
        ),
        _react3.default.createElement(
          'option',
          { value: '3' },
          'Mar'
        ),
        _react3.default.createElement(
          'option',
          { value: '4' },
          'Apr'
        ),
        _react3.default.createElement(
          'option',
          { value: '5' },
          'May'
        ),
        _react3.default.createElement(
          'option',
          { value: '6' },
          'Jun'
        ),
        _react3.default.createElement(
          'option',
          { value: '7' },
          'Jul'
        ),
        _react3.default.createElement(
          'option',
          { value: '8' },
          'Aug'
        ),
        _react3.default.createElement(
          'option',
          { value: '9' },
          'Sep'
        ),
        _react3.default.createElement(
          'option',
          { value: '10' },
          'Oct'
        ),
        _react3.default.createElement(
          'option',
          { value: '11' },
          'Nov'
        ),
        _react3.default.createElement(
          'option',
          { value: '12' },
          'Dec'
        )
      );
    }
  }, {
    key: 'renderYear',
    value: function renderYear(key) {
      return _react3.default.createElement(
        'option',
        { key: key, value: key },
        key
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { className: 'form-inline date' },
        _react3.default.createElement(
          'div',
          { className: 'form-group' },
          _react3.default.createElement(
            'select',
            { className: 'form-control',
              name: 'year',
              onChange: this.handleChange,
              value: this.state.year },
            _react3.default.createElement(
              'option',
              { value: '0' },
              'year'
            ),
            _DatePickerUtil2.default.generateYear(new Date().getFullYear(), this.props.noOfYear).map(this.renderYear)
          )
        ),
        _react3.default.createElement(
          'div',
          { className: 'form-group' },
          this.renderMonth()
        ),
        _react3.default.createElement(
          'div',
          { className: 'form-group' },
          _react3.default.createElement(
            'select',
            { className: 'form-control',
              name: 'day',
              onChange: this.handleChange,
              value: this.state.day },
            _react3.default.createElement(
              'option',
              { value: '0' },
              'day'
            ),
            _DatePickerUtil2.default.generateDay(this.state.noOfDay).map(this.renderDay)
          )
        ),
        _react3.default.createElement(
          'span',
          { className: 'date-error' },
          this.state.errorMessage
        )
      );
    }
  }]);

  return DatePickerComponent;
}(_react3.default.Component));

DatePickerComponent.defaultProps = {
  dateFormat: 'YYYY-MM-DD',
  noOfYear: 70
};

DatePickerComponent.propTypes = {
  dateFormat: _react3.default.PropTypes.string,
  noOfYear: _react3.default.PropTypes.number,
  date: _react3.default.PropTypes.object.isRequired,
  onChange: _react3.default.PropTypes.func.isRequired
};

exports.default = DatePickerComponent;