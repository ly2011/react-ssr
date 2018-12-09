// Set up babel to do its thing... env for the latest toys, react-app for CRA
// Notice three plugins: the first two allow us to use import rather than require, the third is for code splitting
// Polyfill is required for Babel 7, polyfill includes a custom regenerator runtime and core-js
require('./ignore.js')()
require('@babel/polyfill')
require('@babel/register')({
  ignore: [/\/(build|node_modules)\//],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: 'ie 11'
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    'dynamic-import-node',
    'react-loadable/babel'
  ]
})

// Now that the nonsense is over... load up the server entry point
require('./server')
