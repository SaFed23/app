const journalReducer = require('../reducers/journal');

const journalController = {};

journalController.create = async (ctx) => {
  ctx.body = await journalReducer.create(ctx.request.body);
  ctx.status = 201;
};

journalController.getAll = async (ctx) => {
  ctx.body = await journalReducer.getAll();
  ctx.status = 200;
};

journalController.getById = async (ctx) => {
  ctx.body = await journalReducer.getById(ctx.params.id);
  ctx.status = 200;
};

journalController.getByGrade = async (ctx) => {
  ctx.body = await journalReducer.getByGrade(ctx.params.grade);
  ctx.status = 200;
};

journalController.getByLesson = async (ctx) => {
  ctx.body = await journalReducer.getByLesson(ctx.params.lesson_id);
  ctx.status = 200;
};

journalController.getByPupil = async (ctx) => {
  ctx.body = await journalReducer.getByPupil(ctx.params.pupil_id);
  ctx.status = 200;
};

journalController.update = async (ctx) => {
  ctx.body = await journalReducer.update(ctx.request.body);
  ctx.status = 201;
};

journalController.deleteById = async (ctx) => {
  ctx.body = await journalReducer.deleteById(ctx.params.id);
  ctx.status = 204;
}

journalController

module.exports = journalController;