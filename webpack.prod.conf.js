'use strict'

const base = require('./webpack.base.conf')
const merge = require('webpack-merge')

module.exports = merge(base, {
  devtool: 'eval-source-map'
})
