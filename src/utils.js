const utils = {
  isNumber(number) {
    return typeof number === 'number' && isFinite(number);
  },
  parseUrl(val) {
    let result;

    if (typeof window === 'undefined') {
      return '';
    }

    window.location.search
      .replace('?', '')
      .split('&')
      .forEach((item) => {
        const tmp = item.split('=');
        if (tmp[0] === val) {
          result = decodeURIComponent(tmp[1]);
        }
      });

    return result;
  },
};

export default utils;
