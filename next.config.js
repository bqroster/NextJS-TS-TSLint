const withTypescript = require('@zeit/next-typescript');

const nextjsExports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
};

module.exports = withTypescript(nextjsExports);
