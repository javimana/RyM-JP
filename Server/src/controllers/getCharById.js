const axios = require("axios");
// const errorHandler = require("../utils/errors");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    // throw new Error('Error interno del servidor papá!')
    const { data } = await axios(`${URL}/${id}`)
    const { name, status, species, origin, image, gender } = data
    const character = { id, name, status, species, origin, image, gender }
    res.status(200).json(character);
  } catch (error) {
    errorHandler(res, error)
  }
}

module.exports = getCharById;

