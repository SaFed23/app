const Pupil = require('../db/model/pupil');
const { generateError } = require('../utils');

const pupilReducer = {};

pupilReducer.create = async (obj) => {
  const result = await Pupil.create(obj);
  if (result.insertId) {
    obj.id = result.insertId;
    return obj;
  } else {
    throw generateError('Pupil is not created');
  }
};

pupilReducer.getAll = async () => {
  return await Pupil.getAll();
};

pupilReducer.getById = async (id) => {
  const result = await Pupil.getById(id);
  if (result.length) {
    return result[0];
  } else {
    throw generateError('Pupil not exists', 404);
  }
};

pupilReducer.update = async (obj) => {
  const result = await Pupil.update(obj);
  if (result.changedRows) {
    return obj;
  } else {
    throw generateError('Pupil is not updated');
  }
};

pupilReducer.deleteById = async (id) => {
  const result = await Pupil.deleteById(id);
  if (!result.affectedRows) {
    throw generateError('Pupil not exists', 400);
  }
};

module.exports = pupilReducer;