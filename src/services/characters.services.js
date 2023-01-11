import axios from "axios";

const allCharactersService = () => {
  return axios.get('http://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=100&ts=1&apikey=ad722abcf3a3e69d47852911759f0d6f&hash=9ce4cb5ecb6b7534f6a4cd9a7d358c15')
}

const charDetailsService = (id) => {
  return axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=ad722abcf3a3e69d47852911759f0d6f&hash=9ce4cb5ecb6b7534f6a4cd9a7d358c15`)
}

export {
  allCharactersService,
  charDetailsService
}