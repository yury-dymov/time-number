'use strict';

function timeFromInt(val) {
  if (val < 0) {
    return val;
  }

  var hours = parseInt(val / 3600, 10).toString();
  var minutes = parseInt(val % 3600, 10).toString();

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

  return ret;
};

function timeToInt(val) {
  if (val < 0) {
    return val;
  }

  var times = val.split(':');

  return parseInt(times[0], 10) * 3600 + parseInt(times[1], 10);
};

module.exports = { timeToInt: timeToInt, timeFromInt: timeFromInt };