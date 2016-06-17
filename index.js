export function timeFromInt(val) {
  if (val < 0) {
    return val;
  }

  const hours = parseInt(val / 3600, 10).toString();
  const minutes = parseInt(val % 3600, 10).toString();

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

  return ret;
}

export function timeToInt(val)  {
  if (val < 0) {
    return val;
  }

  const times = val.split(':');

  return parseInt(times[0], 10) * 3600 + parseInt(times[1], 10);
}
