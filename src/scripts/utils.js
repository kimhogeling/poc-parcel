/**
 * Take a given string and return the first word of it.
 *
 * @param {string} s
 *
 * @return {string | string}
 */
const firstWord =
    (s = '') =>
        // @babel/plugin-proposal-nullish-coalescing-operator brings us the ?? operator, which we know from PHP 7!
        s.split(' ')[0] ?? '¯\\_(ツ)_/¯'

/**
 * First partial apply the key to pluck from an object.
 * The actual object needs to be applied to the returned function.
 *
 * @param {string} key
 *
 * @return {function(*=): (*|string)}
 */
const pluck =
    (key = '') =>
        /**
         * With the key already applied inside of the closure, the object can be passed in later
         *
         * @param {Object} obj
         *
         * @returns {*|string}
         */
        (obj = {}) =>
            // @babel/plugin-proposal-optional-chaining enables us to chain with ?. instead of interrupting with ||
            obj?.[key] ?? '¯\\_(ツ)_/¯'

export { firstWord, pluck }
