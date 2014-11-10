// Karma configuration
// Generated on Mon Feb 03 2014 16:16:15 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path, based on tmp/ folder
    basePath: '..',

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      APPLICATION_SPEC,
      '**/base/app/assets/templates/*.html',
      'app/assets/javascripts/ng-app/*/*.{coffee,js}',
      'spec/**/*_spec.{coffee,js}'
    ],

    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    //colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    // Preprocessors
    preprocessors: {
        '/**/*.coffee':'coffee',
        '/**/*.html.erb': 'ng-html2js'
    },

    ngHtml2JsPreprocessor: {
          // strip this from the file path
          //stripPrefix: 'public/',
          stripPrefix: '/app/assets/templates/',
          //stripPrefix: '/home/thomas/www/booster/',
          //stripSufix: '.ext',
          // prepend this to the
          prependPrefix: 'assets/',
          // or define a custom transform function
          //cacheIdFromPath: function(filepath) {
          //  return cacheId;
          //},
          moduleName: 'templates'
          },

  });
};
