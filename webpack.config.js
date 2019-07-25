module.exports = {
  mode: 'production',
  entry: './app.js',
  output: {
    filename: './bundle.js'
  },
  devServer: {
    port: 3000
  }
};
