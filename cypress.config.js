const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4vcnmo",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportPageTitle: 'Your Custom Report Title',
    reportFilename: '[status]_[datetime]-[name]-report',
    reportDir: "cypress/reports/html",
    overwrite: false,
    html: true,
    json: true,
    embeddedVideos: true,  // Changed from video to embeddedVideos
    inlineAssets: true  ,   // This is crucial for embedding assets
    charts: true,
  },
  env: {
    base_url: "https://www.saucedemo.com/",
    products_url: "https://www.saucedemo.com/inventory.html",
    cart_url: "https://www.saucedemo.com/cart.html",
    checkout_url: "https://www.saucedemo.com/checkout-step-one.html",
    overview_url: "https://www.saucedemo.com/checkout-step-two.html",
    checkout_complete_url: "https://www.saucedemo.com/checkout-complete.html",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    specPattern: 'cypress/integration/examples/*.js',
    supportFile: 'cypress/support/e2e.js',
    video: true,  // Enable video recording
    videosFolder: 'cypress/videos'  // Use default Cypress videos folder
  },
  videoCompression: false  // Disable compression for better reliability

});
