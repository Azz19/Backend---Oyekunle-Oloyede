const db = require('../database/dbConfig');

const insertImage = image => db('images').insert(image, ['url']);

const getById = entry_id =>
  db('images')
    .where({ entry_id })
    .select('url')
    .first();

module.exports = {
  insertImage,
  getById,
};