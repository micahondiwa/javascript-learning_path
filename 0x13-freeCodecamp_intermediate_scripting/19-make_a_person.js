/*
Make an object person.
*/

const Person = function (first, last) {
  let firstName = first;
  let lastName = last;

  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFullName = function () {
    return this.getFirstName.getFirstName() + " " + this.getLastName();
  };

  this.setFirstName = function (first) {
    return (firstName = first);
  };

  this.setLastName = function (first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};
