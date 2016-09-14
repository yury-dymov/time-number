function isOwnException(ex) {
  return ex.message.substring(0, 11) === 'time-number';
}

function leftPadding(value, len = 2) {
  const sValue = value.toString();
  const lLen = len - sValue.length;

  let l = '';

  while (l.length < lLen) {
    l += '0';
  }

  return `${l}${sValue}`;
}

function internalTimeFromInt(val, isValidationEnabled) {
  const value = parseInt(val, 10);

  if (isValidationEnabled && (value < 0 || value >= 24 * 3600)) {
    throw new RangeError('time-number, timeFromInt(): rangeError, value supposed to be between 0 and 86399');
  }

  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value - (hours * 3600)) / 60);
  const seconds = value - (hours * 3600) - (minutes * 60);

  const ret = [leftPadding(hours), leftPadding(minutes)];

  if (seconds) {
    ret.push(leftPadding(seconds));
  }

  return ret.join(':');
}


export function timeFromInt(val, isValidationEnabled = true) {
  if (!isValidationEnabled) {
    return internalTimeFromInt(val, isValidationEnabled);
  }

  try {
    if (((val - parseFloat(val, 10)) + 1) >= 0) {
      return internalTimeFromInt(val, isValidationEnabled);
    }

    throw new Error();
  } catch (ex) {
    if (isOwnException(ex)) {
      throw ex;
    }

    throw new Error(`time-number, timeFromInt(): invalud value: '${val}', supposed to be number`);
  }
}

function internalTimeToInt(val, isValidationEnabled) {
  const times = val.split(':');
  const len = times.length;

  while (times.length < 3) {
    times.push('0');
  }

  const iTimes = times.map(i => parseInt(i, 10));

  if (isValidationEnabled) {
    const hours = iTimes[0];

    if (hours < 0 || hours > 23) {
      throw new RangeError(`time-number, timeToInt(): hours must be between 0 and 23, provided value: '${val}'`);
    }

    if (len > 1) {
      const minutes = iTimes[1];

      if (minutes < 0 || minutes > 59) {
        throw new RangeError(`time-number, timeToInt(): minutes must be between 0 and 59, provided value: '${val}'`);
      }
    }

    if (len > 2) {
      const seconds = iTimes[2];

      if (seconds < 0 || seconds > 59) {
        throw new RangeError(`time-number, timeToInt(): seconds must be between 0 and 59, provided value: '${val}'`);
      }
    }
  }

  return (iTimes[0] * 3600) + (iTimes[1] * 60) + iTimes[2];
}

export function timeToInt(val, isValidationEnabled = true) {
  if (!isValidationEnabled) {
    return internalTimeToInt(val, isValidationEnabled);
  }

  try {
    if (!val.match(/^\d+(:\d+(:\d+)?)?$/)) {
      throw new Error();
    }

    return internalTimeToInt(val, isValidationEnabled);
  } catch (ex) {
    if (isOwnException(ex)) {
      throw ex;
    }

    throw new Error(`time-number, timeToInt(): supported formats are 'HH', 'HH:mm', 'HH:mm:ss', provided value: '${val}' doesn't match any of them`);
  }
}
