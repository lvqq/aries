module.exports = {
  '**/*.{js,ts}': (filenames) => {
    return [
      `eslint --fix ${filenames.join(' ')}`,
    ];
  },
};
