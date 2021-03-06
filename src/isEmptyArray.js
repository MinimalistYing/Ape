/**
 * Determine whether input is an empty array
 * 
 * @param {*} input 
 */
export default function isEmptyArray (input) {
  if (!Array.isArray(input)) return true

  return input.length === 0
}
