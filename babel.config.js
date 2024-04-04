module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js','.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components':'./src/components',
          '@constants':'./src/constants',
          '@hooks':'./src/hooks',
          '@navigation':'./src/navigation',
          '@screens':'./src/screens',
          '@store':'./src/stores',
          '@utils':'./src/utils'
        },
      },
    ],
  ],
};
