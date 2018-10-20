// js modules
import {firstWord as firstName, pluck} from './utils.js'

// data
import coolDudes from '../data/people.json'

// styles
import '../styles/index.scss'

/**
 * Simple function to take a person and format it into a flattened new object.
 *
 * @param {string} name
 * @param {Object} address
 *
 * @return {{dude: number, city: number, street: number, postalCode: number}}
 */
const format = ({name = '', address}) => ({
    // @babel/plugin-proposal-pipeline-operator enables us to experiment with pipelines
    dude: firstName(name),
    city: pluck('city')(address),
    street: pluck('street')(address),
    postalCode: pluck('postalCode')(address)
})

// Business logic
console.table(coolDudes.map(format))
