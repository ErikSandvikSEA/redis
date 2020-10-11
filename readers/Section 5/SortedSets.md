## Sorted Sets

-  since sets are unsorted, they can pose problems for some projects
-  sorted sets were created to solve that issue
-  every member is associated with a "score"
-  can access data very quickly
-  like sets, elements can only appear once

### Score Properties

-  score is required
-  must be a float/number
-  score of 500 = 500.0 (formatted as floats)
-  score is NOT unique, values are

### ZADD & ZREM

-  work the same as SADD and SREM from unordered sets

###### example

-  ZADD people 1960 "John Doe" // adds "John Doe" to the people set, with a
   score of 1960
-  ZREM people "John Doe" // removes from set
