// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("karma-junit-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage"),
      subdir: ".",
      reporters: [
        { type: "html" },
        { type: "lcovonly" },
        { type: "text-summary" },
      ],
    },
    junitReporter: {
      outputDir: "test-reports",
      outputFile: "junit-report.xml",
      suite: "",
      useBrowserName: false,
    },
    reporters: ["progress", "kjhtml", "junit"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browserConsoleLogOptions: {
      terminal: false,
    },
    autoWatch: true,
    browsers: ["Chrome"],
    captureTimeout: 200000,
    browserDisconnectTolerance: 3,
    browserDisconnectTimeout: 200000,
    browserNoActivityTimeout: 200000,
    singleRun: true,
  });
};
