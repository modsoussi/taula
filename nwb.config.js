const path = require('path');

module.exports = {
  type: 'react-app',
  webpack: {
    aliases: {
      'components': path.resolve('src/components'),
      'src': path.resolve('src')
    }
  }
}
