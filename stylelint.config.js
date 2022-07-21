module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard',
    // 规范 css 属性的书写顺序
    'stylelint-config-recess-order',
    'stylelint-config-recommended-vue',
  ],
  /**
   * I need to standardize both the LESS syntax of the vUE file and the LESS file
   */
  overrides: [
    {
      // less 的语法解析器
      files: '**/*.less',
      customSyntax: 'postcss-less',
    },
    {
      // 结合 stylelint-config-recommended-vue 修复在 .vue 中无法识别模板的报错
      files: '**/*.vue',
      customSyntax: 'postcss-html',
    },
  ],

  // customSyntax:'postcss-less',
  rules: {
  },
};
