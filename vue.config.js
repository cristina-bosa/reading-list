const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        addtionalData: `@import "@/assets/all.less";`
      }
    }
  },
});
