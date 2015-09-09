var Person = function(name, affinities, tRefusals, pRefusals) {
  this.name = name;
  this.affinities = affinities;
  this.tRefusals = tRefusals;
  this.pRefusals = pRefusals;
};

Person.prototype.hasPRefusal = function(person) {
  return _.some(this.pRefusals, person);
};

Person.prototype.hasTRefusal = function(person) {
  return _.some(this.tRefusals, person);
};

Person.prototype.hasRecipAffinity = function(person) {
  return _.some(this.affinities);
};