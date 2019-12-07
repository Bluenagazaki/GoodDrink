const path = require('path');
module.exports = {
    publicPath: '',
    css: {
      loaderOptions: {
        scss: {
          includePath: [
            path.resolve(__dirname, '@/scss/_classes.scss'),
          ]
        },
      }
    }
  }
