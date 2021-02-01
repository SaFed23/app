const teacherReducer = require('../reducers/teacher');

const teacherController = {};

teacherController.create = async (ctx) => {
  ctx.body = await teacherReducer.create(ctx.request.body);
  ctx.status = 201;
};

teacherController.getAll = async (ctx) => {
  ctx.body = await teacherReducer.getAll();
  ctx.status = 200;
};

teacherController.getById = async (ctx) => {
  ctx.body = await teacherReducer.getById(ctx.params.id);
  ctx.status = 200;
};

teacherController.update = async (ctx) => {
  ctx.body = await teacherReducer.update(ctx.request.body);
  ctx.status = 201;
};

teacherController.deleteById = async (ctx) => {
  ctx.body = await teacherReducer.deleteById(ctx.params.id);
  ctx.status = 204;
}

teacherController

module.exports = teacherController;