/*
This one can be solved without code, using combinatorics.

Starting from the top left corner of a n x n board, to get to the bottom right corner, we need to take n steps right and n steps down.

We can construct an element of the set of all possible lattice paths via the following multi-step procedure, 
such that the number of ways in which a choice can be made is not affected by how a prior choice was made, 
and each possible lattice path arises in exactly one way by this process:

1. Choose positions in the path (n + n steps long) where we're going to be going right: 2n choose n
2. Choose positions in the path (n more steps left) where we're going to be going down: n choose n

By the Rule of Product, the cardinality of the set of all possible lattice paths is equal to (2n choose n) * (n choose n) = (2n choose n)

Thus, for a 20 x 20 board (n = 20), 2*20 choose 20 = 40 choose 20 = 40!/((20!)(40-20)!) = 40!/(20!20!) = 137846528820 = our answer
*/