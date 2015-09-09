
var names = _.map(affs, function(obj, name) {
  return name;
});

var pickNode = function(person) {
  var name = names[Math.floor(Math.random()*40)];
  while(name === person) {
    name = names[Math.floor(Math.random()*40)];
  }
  return name;
};

var minCut = function(graph) {

  graph = _.clone(graph);
  var newGraph = {};

  //merge function for each node
  var mergeNodes = function() {

    var personA = pickNode();
    var personB = pickNode(personA);

    var hasTechRef = _.some(techRefs[personA], personB);
    var hasPersRef = _.some(ipRefs[personA], personB);
    //check if there are technical or personal refusals
    if(hasTechRef || hasPersRef) {
      //assign personB to a new random person
      personB = pickNode(personA);
      //make recursive call until we satisfy the condition.
      mergeNodes(personA, personB);
    }

    var key = personA + " " + personB;
    // debugger;
    newGraph[key] = graph[personA].concat(graph[personB]);
    delete graph[personA];
    delete graph[personB];

  };

  while(Object.keys(graph).length > 3) {

    mergeNodes();

  }

  return graph;

};