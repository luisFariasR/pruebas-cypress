const { defineConfig } = require("cypress");

module.exports = defineConfig({
 projectID: "VISITA",
  screenshotOnRunFailure: false,

  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
