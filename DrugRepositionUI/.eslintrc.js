module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  rules: {
    'jsx-a11y/anchor-is-valid': 0,
    'react/self-closing-comp': 2,
    'react-hooks/exhaustive-deps': 2,
  },
};
