/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const { resolver: { assetExts = [] } } = await getDefaultConfig()

  return {
    transformer: {
      // getTransformOptions: async () => ({
      //   transform: {
      //     experimentalImportSupport: false,
      //     inlineRequires: false,
      //   },
      // }),
      // use react-native-svg-transformer to handle svg properly.
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(x => x !== 'svg'),
      sourceExts: ['jsx', 'js', 'ts', 'tsx', 'svg']
    }
  }
})()
