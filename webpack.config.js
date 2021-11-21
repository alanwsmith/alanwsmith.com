module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts', // Or 'ts' if you don't need tsx
          target: 'es2015',
        },
      },
    ],
  },
}
