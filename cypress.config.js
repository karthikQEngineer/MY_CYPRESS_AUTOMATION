const { defineConfig } = require("cypress");

module.exports = defineConfig({


 video: true,

  
  reporter:'cypress-mochawesome-reporter',
  overwrite:false,
  e2e: {
     baseUrl:"https://fakestoreapi.com",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
      return config;
     
    }
  }
  
})
