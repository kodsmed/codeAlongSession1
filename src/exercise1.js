/**
 * Return the last character of the string.
 *
 * @param {string} stringOfCharacters - The string to get the last character of.
 * @returns {string} The last character of the string.
 */
export function getLastCharacter (stringOfCharacters) {
  const lastCharIndex = stringOfCharacters.length - 1 // hello - > 5
  const lastChar = stringOfCharacters.charAt(lastCharIndex) // h 0, e 1, l 2,, l 3, o 4
  return lastChar
}

/**
 * Join two strings together as a single string.
 *
 * @param {string} stringA - The first string.
 * @param {string} stringB - The second string.
 * @returns {string} The two strings joined together.
 */
export function stringConcatenate (stringA, stringB) {
  const result = stringA + stringB
  return result
}

/**
 * Return the square root of a number.
 *
 * @param {number} aNumber - The number to get the square root of.
 * @returns {number} The square root of the number.
 */
export function calculateSquareRoot (aNumber) {
  const theSquareRoot = Math.sqrt(aNumber)
  return theSquareRoot
}

/**
 * Return the square of a number.
 *
 * @param {number} aNumber - The number to square.
 * @returns {number} The square of the number.
 */
export function calculateSquare (aNumber) {
  const theSquare = aNumber * aNumber
  return theSquare
}

/**
 * Return the maximum of the two numbers.
 *
 * @param {number} numberA - The first number.
 * @param {number} numberB - The second number.
 * @returns {number} The maximum of the two numbers.
 */
export function findMax (numberA, numberB) {
  const maxNumber = Math.max(numberA, numberB)
  return maxNumber
}

/**
 * Replace all the vowels in a string with an asterix. *.
 *
 * @param {string} stringWithVowels - The string to replace the vowels in.
 * @returns {string} The string with the vowels replaced with asterix.
 * @example replaceVowelsWithAsterix('hello') // returns 'h*ll*'
 * @example replaceVowelsWithAsterix('world') // returns 'w*rld'
 */
export function replaceVowelsWithAsterix (stringWithVowels) {
  const A = stringWithVowels.replace('a', '*')
  const B = A.replace('o', '*')
  const C = B.replace('u', '*')
  const D = C.replace('i', '*')
  const E = D.replace('e', '*')
  return E
}

/**
 * Return the number of vowels in a string.
 *
 * @param {*} stringToCountVowelsIn - The string to count the vowels in.
 * @returns {number} The number of vowels in the string.
 */
export function countVowels (stringToCountVowelsIn) {
  const wholeStringLength = stringToCountVowelsIn.length
  const stingWithAsterix = replaceVowelsWithAsterix(stringToCountVowelsIn)
  const stringWithDeletedAsterix = stingWithAsterix.replaceAll('*', '')
  const stringWithoutVowelsLength = stringWithDeletedAsterix.length
  const numberOfVowel = wholeStringLength - stringWithoutVowelsLength
  return numberOfVowel
}

/**
 * Return the number of consonants in a string.
 *
 * @param {string} stingToCountConsonantsIn - The string to count the consonants in.
 * @returns {number} The number of consonants in the string.
 */
export function countConsonants (stingToCountConsonantsIn) {
  const originalLength = stingToCountConsonantsIn.length
  const vowelsInString = countVowels(stingToCountConsonantsIn)
  const numberOfConsonants = originalLength - vowelsInString
  return numberOfConsonants
}

/**
 * Round to the nearest tenth.
 *
 * @param {*} numberToRound - The number to round to the nearest tenth.
 * @returns {number} The number rounded to the nearest tenth.
 * @example roundToNearestTenth(1.1) // returns 1.1
 * @example roundToNearestTenth(1.113) // returns 1.1
 * @example roundToNearestTenth(1.87) // returns 1.9
 */
export function roundToNearestTenth (numberToRound) { // 1.14
  const biggerNumer = numberToRound * 10 // 11.4
  const rounded = Math.round(biggerNumer) // 11
  const numberRoundedToTenth = rounded / 10 // 1.1
  return numberRoundedToTenth
}

// Here we run some function calls to test the functions.

// // getLastCharacter
console.log('getLastCharacter')
console.log(getLastCharacter('hello')) // should return 'o'
console.log(getLastCharacter('world')) // should return 'd'

// stringConcatenate
console.log('stringConcatenate')
console.log(stringConcatenate('hello', ' world')) // should return 'hello world'

// // calculateSquareRoot
console.log('calculateSquareRoot')
console.log(calculateSquareRoot(4)) // should return 2
console.log(calculateSquareRoot(9)) // should return 3

// // calculateSquare
console.log('calculateSquare')
console.log(calculateSquare(2)) // should return 4
console.log(calculateSquare(3)) // should return 9

// findMax
console.log('findMax')
console.log(findMax(1, 2)) // should return 2
console.log(findMax(3, 2)) // should return 3

// // replaceVowelsWithAsterix
console.log('replaceVowelsWithAsterix')
console.log(replaceVowelsWithAsterix('hello')) // should return 'h*ll*'
console.log(replaceVowelsWithAsterix('world')) // should return 'w*rld'

// // countVowels
console.log('countVowels')
console.log(countVowels('hello')) // should return 2
console.log(countVowels('world')) // should return 1

// countConsonants
console.log('countConsonants')
console.log(countConsonants('hello')) // should return 3
console.log(countConsonants('world')) // should return 4

// roundToNearestTenth
console.log('roundToNearestTenth')
console.log(roundToNearestTenth(1.1)) // should return 1.1
console.log(roundToNearestTenth(1.113)) // should return 1.1
console.log(roundToNearestTenth(1.87)) // should return 1.9

// function a (string) {
//   console.log('början på a')
//   b()
//   console.log('slutet på a')
// }

// function b (string) {
//   console.log('början på b')
//   c()
//   console.log('slutet på b')
// }

// function c (string) {
//   console.log('början på c')
//   console.log('slutet på c')
// }

// a()
