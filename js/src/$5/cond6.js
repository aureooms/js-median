const cond6 = function ( compare , A , i ) {

	const _a = i ; const _b = ++i ; const _c = ++i ;
	const _d = ++i ; const _e = ++i ;

	const a = A[_a] ; const b = A[_b] ; const c = A[_c] ;
	const d = A[_d] ; const e = A[_e] ;

    return compare( b , a ) < 0 ?
		   compare( d , c ) < 0 ?
		   compare( b , d ) < 0 ?
		   compare( a , e ) < 0 ?
		   compare( a , d ) < 0 ?
		   compare( e , d ) < 0 ? _e : _d
		 : compare( c , a ) < 0 ? _c : _a
		 : compare( e , d ) < 0 ? compare( a , d ) < 0 ? _a : _d
		 : compare( c , e ) < 0 ? _c : _e
		 : compare( c , e ) < 0 ? compare( b , c ) < 0 ? compare( a , c ) < 0 ? _a : _c
		 : compare( e , b ) < 0 ? _e : _b
		 : compare( b , e ) < 0 ? compare( a , e ) < 0 ? _a : _e
		 : compare( c , b ) < 0 ? _c : _b
		 : compare( b , c ) < 0 ? compare( a , e ) < 0 ? compare( a , c ) < 0 ? compare( e , c ) < 0 ? _e : _c
		 : compare( d , a ) < 0 ? _d : _a
		 : compare( e , c ) < 0 ? compare( a , c ) < 0 ? _a : _c
		 : compare( d , e ) < 0 ? _d : _e
		 : compare( d , e ) < 0 ? compare( b , d ) < 0 ? compare( a , d ) < 0 ? _a : _d
		 : compare( e , b ) < 0 ? _e : _b
		 : compare( b , e ) < 0 ? compare( a , e ) < 0 ? _a : _e
		 : compare( d , b ) < 0 ? _d : _b
		 : compare( d , c ) < 0 ? compare( a , d ) < 0 ? compare( b , e ) < 0 ? compare( b , d ) < 0 ? compare( e , d ) < 0 ? _e : _d
		 : compare( c , b ) < 0 ? _c : _b
		 : compare( e , d ) < 0 ? compare( b , d ) < 0 ? _b : _d
		 : compare( c , e ) < 0 ? _c : _e
		 : compare( c , e ) < 0 ? compare( a , c ) < 0 ? compare( b , c ) < 0 ? _b : _c
		 : compare( e , a ) < 0 ? _e : _a
		 : compare( a , e ) < 0 ? compare( b , e ) < 0 ? _b : _e
		 : compare( c , a ) < 0 ? _c : _a
		 : compare( a , c ) < 0 ? compare( b , e ) < 0 ? compare( b , c ) < 0 ? compare( e , c ) < 0 ? _e : _c
		 : compare( d , b ) < 0 ? _d : _b
		 : compare( e , c ) < 0 ? compare( b , c ) < 0 ? _b : _c
		 : compare( d , e ) < 0 ? _d : _e
		 : compare( d , e ) < 0 ? compare( a , d ) < 0 ? compare( b , d ) < 0 ? _b : _d
		 : compare( e , a ) < 0 ? _e : _a
		 : compare( a , e ) < 0 ? compare( b , e ) < 0 ? _b : _e
		 : compare( d , a ) < 0 ? _d : _a ;
} ;

exports.cond6 = cond6 ;
