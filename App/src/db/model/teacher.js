const connection = require("../connection");

const Teacher = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      connection.query("select * from teacher", 
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
      connection.query("select * from teacher where id=?", 
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
      connection.query("insert into teacher(first_name, last_name) values(?, ?)", 
      [obj.first_name, obj.last_name],
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
      connection.query("update teacher set first_name=?, last_name=? where id=?", 
      [obj.first_name, obj.last_name],
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
      connection.query("delete from teacher where id=?", 
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

module.exports = Teacher;