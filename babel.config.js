const path = require('path')

const resolvePath = (sourcePath, currentFile, otherparams) => {
  console.log('hello', sourcePath.includes('../../Utilities/Plaform'))
  if(sourcePath.includes('../../Utilities/Plaform'))
    return path.join(__dirname, './node_modules/react-native/Librairies/Utilities/Plaform')
  else
    return undefined
}

module.exports = function(api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx'
        ],
        root: ["./"],
        resolvePath(sourcePath, currentFile, ...otherparams /* opts */) {
          return resolvePath(sourcePath, currentFile, otherparams);
        },
        alias: {
          "@": "./",
        }
      }]
    ]
  };
};
