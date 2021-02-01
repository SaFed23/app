const Teacher = require('../db/model/teacher');
const { generateError } = require('../utils');

const teacherReducer = {};

teacherReducer.create = async (obj) => {
  const result = await Teacher.create(obj);
  if (result.insertId) {
    obj.id = result.insertId;
    return obj;
  } else {
    throw generateError('Teacher is not created');
  }
};

teacherReducer.getAll = async () => {
  return await Teacher.getAll();
};

teacherReducer.getById = async (id) => {
  const result = await Teacher.getById(id);
  if (result.length) {
    return result[0];
  } else {
    throw generateError('Teacher not exists', 404);
  }
};

teacherReducer.update = async (obj) => {
  const result = await Teacher.update(obj);
  if (result.changedRows) {
    return obj;
  } else {
    throw generateError('Teacher is not updated');
  }
};

teacherReducer.deleteById = async (id) => {
  const result = await Teacher.deleteById(id);
  if (!result.affectedRows) {
    throw generateError('Teacher not exists', 404);
  }
};

module.exports = teacherReducer;