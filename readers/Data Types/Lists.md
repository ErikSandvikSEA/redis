## What is a list?

-  groups of strings
-  sorted by insertion order
-  can be inserted at the beginning/end
-  often used as producer/consumer queries

### Inserting Elements

#### LPUSH

-  Inserts a new element on the head (left)
-  LPUSH mylist a // returns "a"
-  LPUSH mylist b // now returns "b", "a"

#### RPUSH

-  inserts a new element on the tail (right)
-  RPUSH mylist c // now returns "b", "a", "c"

-  A new list is created when LPUSH or RPUSH is ran agains an empty key
-  the key is removed from a keyspace if a list operation will empty the list

#### LRANGE

-  returns specified elements of the list
-  offsets are zero-based indexes
-  offsets can be negative indicating offsets starting from the end of the list

###### Example

##### friends:["Eric", "Shawn", "Jose"]

-  LRANGE friends 0 -1 // returns the entire list in order
-  LRANGE friends 1 2 // returns only Shawn & Jose

#### LLEN

-  returns length of the list

#### LPOP

-  removes and returns the first element of a list

#### RPOP

-  removes and returns the last element of a list

#### LINSERT

-  inserts an element into a list at a specific place
-  LINSERT friends BEFORE "Shawn" "Denise" // adds Denise in between Eric &
   Shawn in the list
