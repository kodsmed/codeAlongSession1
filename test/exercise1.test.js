import * as exercise1 from '../src/exercise1.js'

describe('Sting and Math functions', () => {
  test('getLastCharacter', () => {
    expect(exercise1.getLastCharacter('hello')).toBe('o')
  })

  test('stringConcatenate', () => {
    expect(exercise1.stringConcatenate('hello', ' world')).toBe('hello world')
  })

  test('calculateSquareRoot', () => {
    expect(exercise1.calculateSquareRoot(4)).toBe(2)
  })

  test('calculateSquare', () => {
    expect(exercise1.calculateSquare(2)).toBe(4)
  })

  test('findMax', () => {
    expect(exercise1.findMax(1, 2)).toBe(2)
  })

  test('replaceVowelsWithAsterix', () => {
    expect(exercise1.replaceVowelsWithAsterix('hello')).toBe('h*ll*')
  })

  test('countVowels', () => {
    expect(exercise1.countVowels('hello')).toBe(2)
  })

  test('countConsonants', () => {
    expect(exercise1.countConsonants('hello')).toBe(3)
  })

  test('roundToNearestTenth', () => {
    expect(exercise1.roundToNearestTenth(1.113)).toBe(1.1)
  })
})
