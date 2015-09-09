# Compatibility-Grouping

Building an algorithm to group a set of people into groups of 4 (or 3 or 5 as needed) based on technical refusals,
personal refusals, and affinities.

No two people who have technical or person refusals with each other should be added to the same group.

Use a min-cut algorithm to randomly select and merge nodes. First filter out refusals, then group subgraphs 
based on affinities.

Create Person, Node, and Graph classes and use an object-oriented approach.
