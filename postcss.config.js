module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: {
    'postcss-preset-env': {
      stage: 2,
      features: {
        'nesting-rules': true,
      }
    },
    autoprefixer: {
      cascade: false,
      grid: 'autoplace',
    },
    'postcss-flexbugs-fixes': {},
    'postcss-sorting': {
      'order': [
        'custom-properties',
        'dollar-variables',
        'declarations',
        'at-rules',
        'rules'
      ],
      'properties-order': 'alphabetical',
      'unspecified-properties-position': 'bottom',
    },
  }
})