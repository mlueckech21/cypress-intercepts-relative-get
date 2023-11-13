import { mount } from 'cypress/vue'
import { createPinia, setActivePinia } from 'pinia'

import "../../src/index.css"

Cypress.Commands.add('mount', (component, options = {}) => {
  // Setup options object
  options.global = options.global || {}
  options.global.stubs = options.global.stubs || {}
  options.global.stubs['transition'] = false
  options.global.components = options.global.components || {}
  options.global.plugins = options.global.plugins || []

  /* Add any global plugins */
  options.global.plugins.push({
    install(app) {
      const pinia = createPinia()
      setActivePinia(pinia)
      app.use(pinia)
    }
  })

  /* Add any global components */
  // options.global.components['Button'] = Button;

  return mount(component, options)
})
