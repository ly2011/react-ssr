/**
 * 忽略的文件
 */
const md5File = require('md5-file')
const path = require('path')

const ignoreStyles = require('ignore-styles')
const register = ignoreStyles.default

// Override the default style ignorer, also modifying all image requests
const ignore = () => {
  const extensions = ['.gif', '.jpeg', '.jpg', '.png', '.svg']
  register(ignoreStyles.DEFAULT_EXTENSIONS, (mod, filename) => {
    if (!extensions.find(f => filename.endsWith(f))) {
      // If we find a style
      return ignoreStyles.noOp()
    } else {
      // If we find an image
      const hash = md5File.sync(filename).slice(0, 8)
      const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`)

      mod.exports = `/static/media/${bn}`
    }
  })
}

module.exports = ignore
