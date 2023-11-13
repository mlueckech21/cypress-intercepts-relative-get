const { defineConfig } = require('cypress')

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: true
  },
})