const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {    
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: 'cypress/fixtures',
  video: true,
  videoCompression: true,
  videosFolder: 'cypress/reports/videos',
  embeddedScreenshots: true,
  screenshotsFolder: 'cypress/reports/screenshots',
})