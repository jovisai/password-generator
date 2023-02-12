var compressor = require('node-minify');
 
// Using UglifyJS with wildcards
compressor.minify({
  compressor: 'uglifyjs',
  input: './**/*.js',
  output: 'dist/main.js',
  callback: function(err, min) {}
});