module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel', // Enables Tailwind CSS (nativewind) for React Native
    ],
  };
};
