var people = _.map(affinities, function(affs, name) {
  return new Person(name, affs, tRefusals[name], pRefusals[name]);
});