// Karma configuration
// Generated on Sat Oct 20 2018 21:13:38 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai', 'sinon-chrome'],


    // list of files / patterns to load in the browser
    files: [
      './src/**',
      "js/jsqrcode/grid.js",
      "js/jsqrcode/version.js",
      "js/jsqrcode/detector.js",
      "js/jsqrcode/formatinf.js",
      "js/jsqrcode/errorlevel.js",
      "js/jsqrcode/bitmat.js",
      "js/jsqrcode/datablock.js",
      "js/jsqrcode/bmparser.js",
      "js/jsqrcode/datamask.js",
      "js/jsqrcode/rsdecoder.js",
      "js/jsqrcode/gf256poly.js",
      "js/jsqrcode/gf256.js",
      "js/jsqrcode/decoder.js",
      "js/jsqrcode/qrcode.js",
      "js/jsqrcode/findpat.js",
      "js/jsqrcode/alignpat.js",
      "js/jsqrcode/databr.js",
      "js/md5.js",
      "js/aes.js",
      "js/sha.js",
      "js/qrcode.js"
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.ts': ['typescript']
    },

    typescriptPreprocessor: {
      "extends": "./tsconfig.json"
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
