const connection = require("../connection");

const Lesson = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      connection.query("select * from lesson", 
      [],
      (err, result) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(result);
        }
      })
    });
  },

  getById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("select * from lesson where id=?", 
      [id],
      (err, result) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(result);
        }
      })
    });
  },

  create: (obj) => {
    return new Promise((resolve, reject) => {
      connection.query("insert into lesson(title, teacher_id) values(?, ?)", 
      [obj.title, obj.teacher_id],
      (err, result) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(result);
        }
      })
    });
  },

  update: (obj) => {
    return new Promise((resolve, reject) => {
      connection.query("update lesson set title=?, teacher_id=? where id=?", 
      [obj.title, obj.teacher_id, obj.id],
      (err, result) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(result);
        }
      })
    });
  },

  deleteById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("delete from lesson where id=?", 
      [id],
      (err, result) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(result);
        }
      })
    });
  }
};

module.exports = Lesson;