const timeFromInt = require('../dist/time-number').timeFromInt;
const timeToInt = require('../dist/time-number').timeToInt;

describe('timeToInt: normal cases, validate: true', () => {
  test('10 -> 10 * 3600', () => {
    expect(timeToInt('10')).toBe(10 * 3600);
  });

  test('10:05 -> 10 * 3600 + 5 * 60', () => {
    expect(timeToInt('10:05')).toBe(10 * 3600 + 5 * 60);
  });

  test('10:05:30 -> 10 * 3600 + 5 * 60 + 30', () => {
    expect(timeToInt('10:05:30')).toBe(10 * 3600 + 5 * 60 + 30);
  });

  test('18 -> 18 * 3600', () => {
    expect(timeToInt('18')).toBe(18 * 3600);
  });

  test('18:05 -> 18 * 3600 + 5 * 60', () => {
    expect(timeToInt('18:05')).toBe(18 * 3600 + 5 * 60);
  });

  test('18:05:30 -> 18 * 3600 + 5 * 60 + 30', () => {
    expect(timeToInt('18:05:30')).toBe(18 * 3600 + 5 * 60 + 30);
  });

  test('11:30 AM -> 11 * 3600 + 30 * 60', () => {
    expect(timeToInt('11:30 AM')).toBe(11 * 3600 + 30 * 60);
  });

  test('11:30 PM -> 23 * 3600 + 30 * 60', () => {
    expect(timeToInt('11:30 PM')).toBe(23 * 3600 + 30 * 60);
  });

  test('12:30 AM -> 30 * 60', () => {
    expect(timeToInt('12:30 AM')).toBe(30 * 60);
  });    
});

describe('timeToInt: normal cases, validate: false', () => {
  test('10 -> 10 * 3600', () => {
    expect(timeToInt('10', { validate: false })).toBe(10 * 3600);
  });

  test('10:05 -> 10 * 3600 + 5 * 60', () => {
    expect(timeToInt('10:05', { validate: false })).toBe(10 * 3600 + 5 * 60);
  });

  test('10:05:30 -> 10 * 3600 + 5 * 60 + 30', () => {
    expect(timeToInt('10:05:30', { validate: false })).toBe(10 * 3600 + 5 * 60 + 30);
  });

  test('18 -> 18 * 3600', () => {
    expect(timeToInt('18', { validate: false })).toBe(18 * 3600);
  });

  test('18:05 -> 18 * 3600 + 5 * 60', () => {
    expect(timeToInt('18:05', { validate: false })).toBe(18 * 3600 + 5 * 60);
  });

  test('18:05:30 -> 18 * 3600 + 5 * 60 + 30', () => {
    expect(timeToInt('18:05:30', { validate: false })).toBe(18 * 3600 + 5 * 60 + 30);
  });

  test('11:30 AM -> 11 * 3600 + 30 * 60', () => {
    expect(timeToInt('11:30 AM', { validate: false })).toBe(11 * 3600 + 30 * 60);
  });

  test('11:30 PM -> 23 * 3600 + 30 * 60', () => {
    expect(timeToInt('11:30 PM', { validate: false })).toBe(23 * 3600 + 30 * 60);
  });

  test('12:30 AM -> 30 * 60', () => {
    expect(timeToInt('12:30 AM', { validate: false })).toBe(30 * 60);
  });  
});


describe('timeFromInt: normal cases, validate: true', () => {
  test('10 * 3600 + 5 * 60 -> 10:05', () => {
    expect(timeFromInt(10 * 3600 + 5 * 60, { format: 12 })).toBe('10:05 AM');
    expect(timeFromInt(10 * 3600 + 5 * 60)).toBe('10:05');
  });

  test('10 * 3600 + 5 * 60 + 30 -> 10:05:30', () => {
    expect(timeFromInt(10 * 3600 + 5 * 60 + 30)).toBe('10:05:30');
    expect(timeFromInt(10 * 3600 + 5 * 60 + 30, { format: 12 })).toBe('10:05:30 AM');
  });

  test('18:05 -> 18 * 3600 + 5 * 60', () => {
    expect(timeFromInt(18 * 3600 + 5 * 60)).toBe('18:05');
    expect(timeFromInt(18 * 3600 + 5 * 60, { format: 12, leadingZero: false })).toBe('6:05 PM');
    expect(timeFromInt(18 * 3600 + 5 * 60, { format: 12, leadingZero: true })).toBe('06:05 PM');
  });

  test('18 * 3600 + 5 * 60 + 30 -> 18:05:30', () => {
    expect(timeFromInt(18 * 3600 + 5 * 60 + 30)).toBe('18:05:30');
    expect(timeFromInt(18 * 3600 + 5 * 60 + 30, { format: 12, leadingZero: false })).toBe('6:05:30 PM');
    expect(timeFromInt(18 * 3600 + 5 * 60 + 30, { format: 12, leadingZero: true })).toBe('06:05:30 PM');
  });
});

describe('timeFromInt: normal cases, validate: false', () => {
  test('10 * 3600 + 5 * 60 -> 10:05', () => {
    expect(timeFromInt(10 * 3600 + 5 * 60, { validate: false })).toBe('10:05');
  });

  test('10 * 3600 + 5 * 60 + 30 -> 10:05:30', () => {
    expect(timeFromInt(10 * 3600 + 5 * 60 + 30, { validate: false })).toBe('10:05:30');
  });

  test('18:05 -> 18 * 3600 + 5 * 60', () => {
    expect(timeFromInt(18 * 3600 + 5 * 60, { validate: false })).toBe('18:05');
  });

  test('18 * 3600 + 5 * 60 + 30 -> 18:05:30', () => {
    expect(timeFromInt(18 * 3600 + 5 * 60 + 30, { validate: false })).toBe('18:05:30');
  });
});


describe('timeToInt: invalid cases', () => {
  test('00:30 AM', () => {
    var error = null;

    try {
      timeToInt('00:30 AM');
    } catch (ex){
      error = ex.message;
    }
    expect(error).not.toBeNull();
  });

  test('13:30 PM', () => {
    var error = null;

    try {
      timeToInt('13:30 PM');
    } catch (ex){
      error = ex.message;
    }
    expect(error).not.toBeNull();
  });  

  test('24', () => {
    var error = '';

    try {
      timeToInt('24');
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): hours must be between 0 and 23, provided value: '24'");
  });

  test('-1', () => {
    var error = '';

    try {
      timeToInt('-1');
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): supported formats are 'HH', 'HH:mm', 'HH:mm:ss', provided value: '-1' doesn't match any of them");
  });

  test('a', () => {
    var error = '';

    try {
      timeToInt('a');
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): supported formats are 'HH', 'HH:mm', 'HH:mm:ss', provided value: 'a' doesn't match any of them");
  });


  test('23:60', () => {
    var error = '';

    try {
      timeToInt('23:60');
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): minutes must be between 0 and 59, provided value: '23:60'");
  });

  test('23:-1', () => {
    var error = '';

    try {
      timeToInt('23:-1');
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): supported formats are 'HH', 'HH:mm', 'HH:mm:ss', provided value: '23:-1' doesn't match any of them");
  });

  test('23:a', () => {
    var error = '';

    try {
      timeToInt('23:a');
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): supported formats are 'HH', 'HH:mm', 'HH:mm:ss', provided value: '23:a' doesn't match any of them");
  });

  test('23:59:60', () => {
    var error = '';

    try {
      timeToInt('23:59:60');
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): seconds must be between 0 and 59, provided value: '23:59:60'");
  });

  test('23:59:-1', () => {
    var error = '';

    try {
      timeToInt('23:59:-1');
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): supported formats are 'HH', 'HH:mm', 'HH:mm:ss', provided value: '23:59:-1' doesn't match any of them");
  });

  test('23:30:a', () => {
    var error = '';

    try {
      timeToInt('23:30:a');
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): supported formats are 'HH', 'HH:mm', 'HH:mm:ss', provided value: '23:30:a' doesn't match any of them");
  });

  test('23:30:55:1000', () => {
    var error = '';

    try {
      timeToInt('23:30:55:1000');
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): supported formats are 'HH', 'HH:mm', 'HH:mm:ss', provided value: '23:30:55:1000' doesn't match any of them");
  });

  test('undefined', () => {
    var error = '';

    try {
      timeToInt();
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): supported formats are 'HH', 'HH:mm', 'HH:mm:ss', provided value: 'undefined' doesn't match any of them");
  });

  test('null', () => {
    var error = '';

    try {
      timeToInt(null);
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): supported formats are 'HH', 'HH:mm', 'HH:mm:ss', provided value: 'null' doesn't match any of them");
  });

  test('lalala', () => {
    var error = '';

    try {
      timeToInt('lalala');
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): supported formats are 'HH', 'HH:mm', 'HH:mm:ss', provided value: 'lalala' doesn't match any of them");
  });

  test('10', () => {
    var error = '';

    try {
      timeToInt(10);
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): supported formats are 'HH', 'HH:mm', 'HH:mm:ss', provided value: '10' doesn't match any of them");
  });

  test('[empty]', () => {
    var error = '';

    try {
      timeToInt('');
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): supported formats are 'HH', 'HH:mm', 'HH:mm:ss', provided value: '' doesn't match any of them");
  });

  test('array', () => {
    var error = '';

    try {
      timeToInt([0, 1]);
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): supported formats are 'HH', 'HH:mm', 'HH:mm:ss', provided value: '0,1' doesn't match any of them");
  });

  test('object', () => {
    var error = '';

    try {
      timeToInt({ a: "1" });
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeToInt(): supported formats are 'HH', 'HH:mm', 'HH:mm:ss', provided value: '[object Object]' doesn't match any of them");
  });

  test('function', () => {
    var error = '';

    try {
      timeToInt(function() { return ''; });
    } catch (ex){
      error = ex.message.replace("{ return ''; }", "{return '';}");
    }
    expect(error).toBe("time-number, timeToInt(): supported formats are 'HH', 'HH:mm', 'HH:mm:ss', provided value: 'function () {return '';}' doesn't match any of them");
  });
});

describe('timeFromInt: invalid cases', () => {
  test('-1', () => {
    var error = '';

    try {
      timeFromInt(-1);
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe(`time-number, timeFromInt(): rangeError, value supposed to be between 0 and ${24 * 3600 - 1}`);
  });

  test('24 * 3600', () => {
    var error = '';

    try {
      timeFromInt(24 * 3600);
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe(`time-number, timeFromInt(): rangeError, value supposed to be between 0 and ${24 * 3600 - 1}`);
  });

  test('undefined', () => {
    var error = '';

    try {
      timeFromInt();
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeFromInt(): invalud value: 'undefined', supposed to be number");
  });

  test('null', () => {
    var error = '';

    try {
      timeFromInt(null);
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeFromInt(): invalud value: 'null', supposed to be number");
  });

  test('lalala', () => {
    var error = '';

    try {
      timeFromInt('lalala');
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeFromInt(): invalud value: 'lalala', supposed to be number");
  });

  test('[empty]', () => {
    var error = '';

    try {
      timeFromInt('');
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeFromInt(): invalud value: '', supposed to be number");
  });

  test('array', () => {
    var error = '';

    try {
      timeFromInt([0, 1]);
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeFromInt(): invalud value: '0,1', supposed to be number");
  });

  test('object', () => {
    var error = '';

    try {
      timeFromInt({ a: "1" });
    } catch (ex){
      error = ex.message;
    }
    expect(error).toBe("time-number, timeFromInt(): invalud value: '[object Object]', supposed to be number");
  });

  test('function', () => {
    var error = '';

    try {
      timeFromInt(function() { return ''; });
    } catch (ex){
      error = ex.message.replace("{ return ''; }", "{return '';}");
    }
    expect(error).toBe("time-number, timeFromInt(): invalud value: 'function () {return '';}', supposed to be number");
  });
});

describe('backward compatibility with v1.0', () => {
  test('00:30 AM', () => {
    var error = null;

    try {
      timeToInt('00:30 AM', true);
    } catch (ex){
      error = ex.message;
    }
    expect(error).not.toBeNull();
  });
  
  test('10 -> 10 * 3600', () => {
    expect(timeToInt('30', false)).toBe(30 * 3600);
  });  
});
