const clear = function ( compare , A , i ) {

	let _a = i ; let _b = ++i ; let _c = ++i ;
	let _d = ++i ; const _e = ++i ;

	let a = A[_a] ; let b = A[_b] ; let c = A[_c] ;
	let d = A[_d] ; const e = A[_e] ;

	// makes a < b and c < d
	if ( compare( a , b ) > 0 ) [ a , b , _a , _b ] = [ b , a , _b , _a ] ;
	if ( compare( c , d ) > 0 ) [ c , d , _c , _d ] = [ d , c , _d , _c ] ;

	// eliminate the lowest
	if ( compare( c , a ) < 0 ) {
		[ b , d , _b , _d ] = [ d , b , _d , _b ] ;
		c = a ; _c = _a ;
	}

	// gets e in
	a = e ; _a = _e ;

	// makes a < b
	if ( compare( a , b ) > 0 ) [ a , b , _a , _b ] = [ b , a , _b , _a ] ;

	// eliminate another lowest
	// remaining: a,b,d
	if ( compare( a , c ) < 0 ) {
		[ b , d , _b , _d ] = [ d , b , _d , _b ] ;
		a = c ; _a = _c ;
	}

	return compare( a , d ) > 0 ? _d : _a ;

} ;

exports.clear = clear ;
