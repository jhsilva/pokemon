import axios from 'axios';

export default (endpoint = 'https://pokeapi.co/api/v2/pokemon') => axios.get(endpoint);
