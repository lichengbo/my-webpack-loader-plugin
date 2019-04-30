var babel = require('babel-core')

module.exports = function(source, inputSourceMap) {
  var babelOptions = {
    presets: ['env'],
    inputSourceMap: inputSourceMap,
    sourceMaps: true
  }

  var result = babel.transform(source, babelOptions)
  this.callback(null, result.code, result.map)
}
