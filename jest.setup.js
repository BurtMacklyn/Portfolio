import '@testing-library/jest-dom';

const isUrl = require('is-url');

expect.extend({
  toBeValidPath: function (u) {
    let result = isUrl(u);
    if (!result && u.startsWith('/')) {
      u = 'https://a.b' + u;
      result = isUrl(u);
    }

    if (result || u.startsWith('mailto:'))
      return {
        message: () =>
          `expected ${this.utils.printReceived(u)} to be a valid path`,
        pass: true,
      };

    return {
      message: () =>
        `expected ${this.utils.printReceived(u)} to be a valid path`,
      pass: false,
    };
  },
});

export {};
