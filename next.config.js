const path = require('path')

module.exports = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "variables.module.scss";`
  }
}