/******************
 * YOUR CODE HERE *
 ******************/
const Grade = function (assignment, score) {
  return {
    assignment: assignment,
    score: score,
  };
};

const Term = function (hours) {
  return {
    hours: hours,
    grades: [],
    addGrade: function (assignment, score) {
      this.grades.push(Grade(assignment, score));
    }
  };
};

const Course = function (name) {
  return {
    name: name,
    terms: [],
    addTerm: function (hours) {
      this.terms.push(Term(hours));
    }
  };
};

const Student = function (name, course, term = 1) {
  return {
    name: name,
    course: course,
    term: term,
    courses: [],
    addCourse: function (name) {
      this.courses.push(Course(name));
    },

    getAverage: function (courseName = this.course, termIndex = (this.term - 1)) {
      for (let i = 0; i < this.courses.length; i++) {
        if (this.courses[i].name === courseName) {
          let total = 0;
          for (let k = 0; k < this.courses[i].terms[termIndex].grades.length; k++) {
            total += this.courses[i].terms[termIndex].grades[k].score;
          }
          return total / this.courses[i].terms[termIndex].grades.length;
        } 
      }
    }
  };
};

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof Grade === 'undefined') {
  Grade = undefined;
}

if (typeof Term === 'undefined') {
  Term = undefined;
}

if (typeof Course === 'undefined') {
  Course = undefined;
}

if (typeof Student === 'undefined') {
  Student = undefined;
}


module.exports = {
  Grade,
  Term,
  Course,
  Student,
};