/**
 * Let's see what some of our newer array methods are...
 */

/**
 * Find Method:
 */
var myArray = [ 'Hello, World!', 2, 3, true, 5, null, 38 ];
var myValue = myArray.find( function ( element ) { return element > 4; } );
console.log( myValue ); // Returns 5, an element from our array! Only gives us one item back.

// For checking if an element exists in the array.
var isMyStringInside = myArray.find( function ( element ) { return element === 'Hello, World!'; } );
console.log( isMyStringInside ); // We would get the matching element.

// Find is helpful for checking if an element exists in an array!
var isMyStringInside = myArray.find( function ( element ) { return element === 'Goodbye, Everyone :('; } );
console.log( isMyStringInside ); // Not found :(

/**
 * .findIndex()
 */

// Still searching for an element!
var findAnIndex = myArray.findIndex( function ( element ) { return element === 2; } );
console.log( findAnIndex ); // But this time, it returned the value's INDEX.

/**
 * .entries()
 */

var pairing = myArray.entries();
console.log( pairing ); // Returns an iterator.
console.log( pairing.next().value ); // We can keep bumping to the next item, getting a nice key/value array to let us know what's inside!
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );

/**
 * .from() method:
 */

// We can pass a string to Array's "from" method, and break each character out into an array!
var fromArray = Array.from( 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' );
console.log( fromArray ); // Oh geeze, that's a 26-element array now.
var fromArray2 = Array.from( 'Hello, World!' );
console.log( fromArray2 ); // Even spaces and special characters will be captured as elements!

/**
 * .filter() method:
 * Returns array of all matches.
 */

var filtered = myArray.filter( function ( element ) { return element > 4; } );
console.log( filtered ); // ALL matches returned! 5 and 38!

/**
 * .reduce() method:
 * We can add on to a value, returns only a single.
 */

var reduceResult = myArray.reduce( function ( accumulator, currentVal ) {
    return accumulator + currentVal;
} );
console.log( reduceResult ); // Because we have strings in here, they are getting concatenated.

console.log( [ 1, 2, 3, 4 ].reduce( ( a, v ) => a + v ) ); // Because we have numbers in here, they are being added (mathematically.)

/**
 * Let and Const
 */

var x = 3; // Standard variable declaration. Function-scoped.
// let x = 4; // CANNOT redeclare as let/const if it is already declared.
let y = 7; // Let is block-scoped.
const z = 36; // Const is block-scoped, but re-assignment is not allowed.

// z = 16; Not allowed! Const must remain with its original assignment.
console.log( z );

y = 13; // Allowed! var and let allow re-assignment.
console.log( y );

// Var is function-scoped, it will persist beyong the for loop!?
for ( var myVar = 0; myVar < 10; myVar++ ) {
    console.log( 'For loop iteration...' );
}
console.log( 'myVar = '+myVar );

// Let is BLOCK scoped... it lives and dies in ANY block (like an if, or a loop!)
for ( let myNewVar = 0; myNewVar < 10; myNewVar++ ) {
    console.log( 'For loop iteration...' );
    console.log( 'myNewVar = '+myNewVar );
}
// console.log( 'myNewVar = '+myNewVar ); // We can't access it outside of the block.

/**
 * Const can't be re-assigned... but its insides can be manipulated!?
 */

const myObj = {
    name: 'Henry',
    age:  18
}

myObj.name = 'Sandy'; // Can we update PROPERTIES or array ELEMENTS inside of a const-declared variable?
myObj.hobbies = [];
myObj.hobbies.push( 'Mountain Climbing' );
console.log( myObj );

// myObj = {} // THIS WOULD STILL ERROR. Only insides for a const can be manipulated.

/**
 * Let's shake things up with: FUNCTIONS
 * New syntax...
 */

// Classic function declaration...
function myFunction ( a, b ) {
    return Number( a ) + Number( b );
}
console.log( myFunction( 3, 7 ) );

// ES6 style:
myFunction = ( a, b ) => Number( a ) + Number( b ); // Instant return with no curly braces.
console.log( myFunction( 3, 8 ) );

// Bigger function (ES6)
myOtherFunction = ( a, b ) => { // Use curly braces for larger, more complex operations.
    const myAnswer = Number( a ) + Number( b );
    return myAnswer;
}
console.log( myOtherFunction( 34, 6 ) );