// js modules
import { firstWord as firstName, pluck } from './utils'

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
 * @return {{dude: string, city: string, street: string, postalCode: string}}
 */
const format = ({ name = '', address }) => ({
    // @babel/plugin-proposal-pipeline-operator enables us to experiment with pipelines
    dude: name |> firstName,
    city: address |> ('city' |> pluck),
    street: address |> ('street' |> pluck),
    postalCode: address |> ('postalCode' |> pluck)
})

// Business logic
format
|> coolDudes.map
|> console.table
