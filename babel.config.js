module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['@babel/plugin-proposal-class-properties']],
  assumptions: {
    setPublicClassFields: false,
  },
  overrides: [
    {
      test: fileName => !fileName.includes('node_modules'),
      plugins: [
        [require('@babel/plugin-proposal-class-properties'), { loose: false }],
      ],
    },
  ],
};
