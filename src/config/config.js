const pkg = require('../../package.json')

const config = {
  version: pkg.version,
  license: pkg.license || 'MIT',
  author: pkg.author || 'UGA Team'
}

export default config
