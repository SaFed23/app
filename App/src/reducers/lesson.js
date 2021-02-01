const Lesson = require('../db/model/lesson');
const { generateError } = require('../utils');

const lessonReducer = {};

lessonReducer.create = async (obj) => {
  const result = await Lesson.create(obj);
  if (result.insertId) {
    obj.id = result.insertId;
    return obj;
  } else {
    throw generateError('Lesson is not created');
  }
};

lessonReducer.getAll = async () => {
  return await Lesson.getAll();
};

lessonReducer.getById = async (id) => {
  const result = await Lesson.getById(id);
  if (result.length) {
    return result[0];
  } else {
    throw generateError('Lesson not exists', 404);
  }
};

lessonReducer.update = async (obj) => {
  const result = await Lesson.update(obj);
  if (result.changedRows) {
    return obj;
  } else {
    throw generateError('Lesson is not updated');
  }
};

lessonReducer.deleteById = async (id) => {
  const result = await Lesson.deleteById(id);
  if (!result.affectedRows) {
    throw generateError('Lesson not exists', 400);
  }
};

module.exports = lessonReducer;