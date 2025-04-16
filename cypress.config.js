const { defineConfig } = require("cypress");

module.exports = defineConfig({
 projectId: "5cxxna",
  screenshotOnRunFailure: false,

  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
