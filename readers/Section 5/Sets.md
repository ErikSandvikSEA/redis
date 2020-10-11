## What is a Redis Set?

-  Unordered collections of strings
-  can add, remove, and test for existence
-  do not allow repeating members
-  support server side commands to compute sets starting from existing sets

### SADD & SREM

#### SADD

-  Adds given values to a set
-  values that already exist will be ignored

#### SREM

-  removes values from a set

##### example

-  SADD carmakes "Toyota" // adds Toyota to the carmakes set
-  SREM carmakes "Honda" // removes Honda from the carmakes set
