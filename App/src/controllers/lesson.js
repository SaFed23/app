const lessonReducer = require('../reducers/lesson');

const lessonController = {};

lessonController.create = async (ctx) => {
  ctx.body = await lessonReducer.create(ctx.request.body);
  ctx.status = 201;
};

lessonController.getAll = async (ctx) => {
  ctx.body = await lessonReducer.getAll();
  ctx.status = 200;
};

lessonController.getById = async (ctx) => {
  ctx.body = await lessonReducer.getById(ctx.params.id);
  ctx.status = 200;
};

lessonController.update = async (ctx) => {
  ctx.body = await lessonReducer.update(ctx.request.body);
  ctx.status = 201;
};

lessonController.deleteById = async (ctx) => {
  ctx.body = await lessonReducer.deleteById(ctx.params.id);
  ctx.status = 204;
}

lessonController

module.exports = lessonController;