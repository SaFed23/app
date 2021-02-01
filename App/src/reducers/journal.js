const Journal = require('../db/model/journal');
const { generateError } = require('../utils');

const journalReducer = {};

journalReducer.create = async (obj) => {
  const result = await Journal.create(obj);
  if (result.insertId) {
    obj.id = result.insertId;
    return obj;
  } else {
    throw generateError('Journal is not created');
  }
};

journalReducer.getAll = async () => {
  return await Journal.getAll();
};

journalReducer.getById = async (id) => {
  const result = await Journal.getById(id);
  if (result.length) {
    return result[0];
  } else {
    throw generateError('Journal not exists', 404);
  }
};

journalReducer.getByGrade = async (grade) => {
  return await Journal.getByGrade(grade);
};

journalReducer.getByLesson = async (lesson_id) => {
  return await Journal.getByLesson(lesson_id);
};

journalReducer.getByPupil = async (pupil_id) => {
  return await Journal.getByPupil(pupil_id);
};

journalReducer.update = async (obj) => {
  const result = await Journal.update(obj);
  if (result.changedRows) {
    return obj;
  } else {
    throw generateError('Journal is not updated');
  }
};

journalReducer.deleteById = async (id) => {
  const result = await Journal.deleteById(id);
  if (!result.affectedRows) {
    throw generateError('Journal not exists', 400);
  }
};

module.exports = journalReducer;