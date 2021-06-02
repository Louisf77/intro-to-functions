"use strict"
// Write a function that, given two numbers, returns a boolean representing whether or not the two numbers are equal.

// You may assume that the numbers are always integers (i.e. whole numbers).

// function:
// =========
// name: isEqual

// parameter a: number

// parameter b: number

// return: boolean

// pseudo code:
// ============
/**
 * Given two numbers, return a boolean to state whether they are equal
 * @param {number} a - First number
 * @param {number} b - Second Number
 * @returns {boolean} - Returns a boolean stating whether a = b
 */
function isEqual(a,b){
    if (a === b) {
        return 'True'
    }
    else {
        return 'False'
    }
}
// if a is equal to b
// 	return True
// else
// 	return False

// test cases:
// ===========
// isEqual(4, 4) should be True
// isEqual(0, 0) should be True
// isEqual(-4, -4) should be True
// isEqual(4, -4) should be False
// isEqual(0, 1) should be False
console.log("isEqual(4, 4)",isEqual(4,4), "should be True")
console.log("isEqual(0, 0)",isEqual(0,0), "should be True")
console.log("isEqual(-4, -4)",isEqual(-4,-4), "should be True")
console.log("isEqual(4, -4)",isEqual(4,-4), "should be False")
console.log("isEqual(0, 1)",isEqual(0,1), "should be False")
