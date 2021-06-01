// Write a function that, given a list of strings, returns the string which has the greatest character count (including duplicates).
'use strict'
// When there are multiple string which are tied for largest character count, return the string that occurs earliest in the list.

// You may assume that each string in the list is a single word.
// You may assume that there are always at least two strings in the list.

// function:
// =========
// name: longestInList

// parameter: words: list of strings

// return type: string

// pseudo code:
// ============
function longestInList(listOfStrings){
    // set longest to first string in words
    let longest = listOfStrings[1]
// for each string word in words
    for (let word of listOfStrings){
// 	if word has more characters than longest
        if (word.length > longest.length ){
// 		set longest to word
            longest = word}
    }
    return longest
}
// return longest

// test cases:
// ===========
// longestInList(["England", "Wales", "Scotland", "Northern Ireland"]) should be "Northern Ireland"
console.log("longestInList([England, Wales, Scotland, Northern Ireland])", longestInList(["England", "Wales", "Scotland", "Northern Ireland"]),"should be Northern Ireland")
// longestInList(["the", "quick", "brown", "fox"]) should be "quick"
console.log("longestInList([the, quick, brown, fox])," , longestInList(["the", "quick","brown", "fox"]),"should be quick")
// longestInList(["hello", "hi", "greetings", "hey"]) should be "greetings"
console.log("longestInList([hello, hi, greetings, hey]),", longestInList(["hello", "hi", "greetings", "hey"]), "should be greetings")