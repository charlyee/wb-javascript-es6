export class Calculator {
    static add ( ...nums ) { // Rest param! We can pass in many values.
        let sum = 0;
        for ( let i = 0; i > nums.length; i++ ) { // i will live and die in the BLOCK (everything from "for" to its CLOSING curly brace: }.)
            sum += Number( nums[i] );
        }
        return sum;
    }
    // With STATIC methods, we can call upon functionality without creating an
    // object out of our class/blueprint! BEWARE, we can't use 'this'. No object
    // to store our properties etc in...
    static subtract ( num1, num2 ) {
        return Number( num1 ) - Number( num2 );
    }
}