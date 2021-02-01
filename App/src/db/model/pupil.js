const connection = require("../connection");

const Pupil = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      connection.query("select * from pupil", 
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
      connection.query("select * from pupil where id=?", 
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
      connection.query("insert into pupil(first_name, last_name, age, grade) values(?, ?, ?, ?)", 
      [obj.first_name, obj.last_name, obj.age, obj.grade],
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
      connection.query("update pupil set first_name=?, last_name=?, age=?, grade=? where id=?", 
      [obj.first_name, obj.last_name, obj.age, obj.id],
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
      connection.query("delete from pupil where id=?", 
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

module.exports = Pupil;