const connection = require("../connection");

const Journal = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      connection.query("select * from journal", 
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
      connection.query("select * from journal where id=?", 
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

  getByGrade: (grade) => {
    return new Promise((resolve, reject) => {
      connection.query("select * from journal where grade=?", 
      [grade],
      (err, result) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(result);
        }
      })
    });
  },

  getByLesson: (lesson_id) => {
    return new Promise((resolve, reject) => {
      connection.query("select * from journal where lesson_id=?", 
      [lesson_id],
      (err, result) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(result);
        }
      })
    });
  },

  getByPupil: (pupil_id) => {
    return new Promise((resolve, reject) => {
      connection.query("select * from journal where pupil_id=?", 
      [pupil_id],
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
      connection.query("insert into journal(pupil_id, mark, lesson_id, grade, date_of_note, is_exam) values(?, ?, ?, ?, ?, ?)", 
      [obj.pupil_id, obj.mark, obj.lesson_id, obj.grade, obj.date_of_note, obj.is_exam],
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
      connection.query("update journal set pupil_id=?, mark=?, lesson_id=?, grade=?, date_of_note=?, is_exam=? where id=?", 
      [obj.pupil_id, obj.mark, obj.lesson_id, obj.grade, obj.date_of_note, obj.is_exam, obj.id],
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
      connection.query("delete from journal where id=?", 
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

module.exports = Journal;