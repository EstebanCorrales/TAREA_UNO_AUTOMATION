const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Propiedades y Configuraciones del Proyecti
      baseurl: "www.google.com"
    },
  },
});
