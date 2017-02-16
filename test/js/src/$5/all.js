
var compare = require( "@aureooms/js-compare" ) ;
var itertools = require( "@aureooms/js-itertools" ) ;
var starmap = itertools.starmap ;
var permutations = itertools.permutations ;
var product = itertools.product ;
var exhaust = itertools.exhaust ;

var listof5 = [ 1 , 2 , 3 , 4 , 5 ] ;

var one = function ( method , compare , list ) {

	var T = method.name + " ( " + compare.name + " , " + list + " ) : " ;

	deepEqual( list.length , 5 , T + "length is 5" ) ;

	// compute median using a sorting algorithm
	// for later verification
	var b = list.slice( ) ;
	b.sort( compare ) ;
	var m = b[2] ;

	// add random elements to make sure that
	// the method has no effect outside the range
	// [i,i+5[
	var r = m - 0.5 + Math.random( ) ;
	list = [ r ].concat( list ).concat( [ r ] ) ;

	// compute median using provided method
	var i = method( compare , list , 1 ) ;

	// check that random elements did not get carried around
	deepEqual( list[0] , r , T + "first random element stayed in place" ) ;
	deepEqual( list[6] , r , T + "last random element stayed in place" ) ;

	// remove random elements
	list = list.slice( 1 , 6 ) ;
	--i ;

	// check that the computed median is the correct one
	deepEqual( list[i] , m , T + "median is " + m ) ;

	// check that elements in the list did not change
	deepEqual( list.sort( compare ) , b , T + "the contents of the list stayed unchanged" ) ;

} ;

test( "median of 5" , function ( ) {

	exhaust(
		starmap(
			one ,
			product( [
				[ median.$5.cond6 , median.$5.clear ] ,
				[ compare.increasing , compare.decreasing ] ,
				permutations( listof5 , 5 )
			] , 1 )
		)
	) ;

} ) ;
