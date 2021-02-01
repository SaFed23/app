const pupilReducer = require('../reducers/pupil');

const pupilController = {};

pupilController.create = async (ctx) => {
  ctx.body = await pupilReducer.create(ctx.request.body);
  ctx.status = 201;
};

pupilController.getAll = async (ctx) => {
  ctx.body = await pupilReducer.getAll();
  ctx.status = 200;
};

pupilController.getById = async (ctx) => {
  ctx.body = await pupilReducer.getById(ctx.params.id);
  ctx.status = 200;
};

pupilController.update = async (ctx) => {
  ctx.body = await pupilReducer.update(ctx.request.body);
  ctx.status = 201;
};

pupilController.deleteById = async (ctx) => {
  ctx.body = await pupilReducer.deleteById(ctx.params.id);
  ctx.status = 204;
}

pupilController

module.exports = pupilController;