"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by kiran
 * Kiran Pariyar <kiranpariyar@lftechnology.com>
 * on 7/22/16.
 */

var DatePickerUtil = function () {
  function DatePickerUtil() {
    _classCallCheck(this, DatePickerUtil);
  }

  _createClass(DatePickerUtil, null, [{
    key: "generateYear",
    value: function generateYear(currentYear, noOfYearToGenerate) {
      var years = [];
      var startingYear = currentYear - noOfYearToGenerate;
      for (var i = currentYear; i > startingYear; i--) {
        years.push(i);
      }
      return years;
    }
  }, {
    key: "generateDay",
    value: function generateDay(noOfDayToGenerate) {
      var days = [];
      for (var i = 1; i <= noOfDayToGenerate; i++) {
        days.push(i);
      }
      return days;
    }
  }, {
    key: "calculateDaysInMonth",
    value: function calculateDaysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    }
  }]);

  return DatePickerUtil;
}();

exports.default = DatePickerUtil;