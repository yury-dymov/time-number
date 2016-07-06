'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var timeFromInt = exports.timeFromInt = function timeFromInt(val) {
  if (val < 0) {
    return val;
  }

  var ihours = parseInt(val / 3600, 10);
  var hours = ihours.toString();
  var iminutes = parseInt((val - ihours * 3600) / 60, 10);
  var minutes = iminutes.toString();
  var iseconds = parseInt(val - ihours * 3600 - iminutes * 60, 10);
  var seconds = iseconds.toString();

  var ret = '';

  if (hours.length === 1) {
    ret += '0';
  }

  ret += hours;
  ret += ':';

  if (minutes.length === 1) {
    ret += '0';
  }

  ret += minutes;

  if (iseconds !== 0) {
    ret += ':';

    if (seconds.length === 1) {
      ret += '0';
    }

    ret += seconds;
  }

  return ret;
};

var timeToInt = exports.timeToInt = function timeToInt(val) {
  if (val < 0) {
    return val;
  }

  var times = val.split(':');

  while (times.length < 3) {
    times.push('0');
  }

  return parseInt(times[0], 10) * 3600 + parseInt(times[1], 10) * 60 + parseInt(times[2], 10);
};