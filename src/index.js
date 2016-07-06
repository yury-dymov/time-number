'use strict';

export const timeFromInt = (val) => {
  if (val < 0) {
    return val;
  }

  const ihours    = parseInt(val / 3600, 10);
  const hours     = ihours.toString();
  const iminutes  = parseInt((val - ihours * 3600) / 60, 10);
  const minutes   = iminutes.toString();
  const iseconds  = parseInt(val - ihours * 3600 - iminutes * 60, 10);
  const seconds   = iseconds.toString();

  let ret = '';

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
  
export const timeToInt = (val) => {
  if (val < 0) {
    return val;
  }

  const times = val.split(':');

  while (times.length < 3) {
    times.push('0');
  }

  return parseInt(times[0], 10) * 3600 + parseInt(times[1], 10) * 60 + parseInt(times[2], 10);
};
