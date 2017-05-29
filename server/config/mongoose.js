var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/portfolio');
mongoose.connect('mongodb://localhost/portfolio');

var	fs = require('fs');
		path = require('path');
		models_path = path.join(__dirname, './../models');
reg = new RegExp( ".js$", "i" ),

fs.readdirSync( models_path ).forEach( function( file ) {
  if( reg.test( file ) ) {
    require( path.join( models_path, file ) );
  }
});
// mongoose.connection.on( 'connected', function () {
//   console.log( `Mongoose default connection open to ${ dbURI }` );
// });
// mongoose.connection.on( 'error', function ( err ) {
//   console.error( `Mongoose default connection error: ${ err }` );
// });
// mongoose.connection.on( 'disconnected', function () {
//   console.log( 'Mongoose default connection disconnected' );
// });
// process.on( 'SIGINT', function() {
//   mongoose.connection.close( function () {
//     console.log( 'Mongoose default connection disconnected through app termination' );
//     process.exit( 0 );
//   });
// });