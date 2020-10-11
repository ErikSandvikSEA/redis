## What is a Redis Set?

-  Unordered collections of strings
-  can add, remove, and test for existence
-  do not allow repeating members
-  support server side commands to compute sets starting from existing sets

## SADD & SREM

### SADD

-  Adds given values to a set
-  values that already exist will be ignored

### SREM

-  removes values from a set

###### example

-  SADD carmakes "Toyota" // adds Toyota to the carmakes set
-  SREM carmakes "Honda" // removes Honda from the carmakes set

### SISMEMBER

-  tests if the given value is in a set

### SMEMBERS

-  returns a list of all the members of a set

### SCARD

-  returns the count of members/elements in a set

### SMOVE

-  moves members from one set to another

### SUNION

-  combines two or more sets and returns a list of members

### SDIFF

-  returns the members of the set resulting from teh difference between the
   first and all successive sets

### SRANDMEMBER

-  returns a random member of a set
-  optional parameter to return a specific count

### SPOP

-  removes and returns a random member from a set
-  optional parameter to remove and return a specific count
