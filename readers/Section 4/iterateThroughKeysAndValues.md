## SCAN

-  iterates the set of keys in the database
-  returns only a small amount per call
-  can be used in production
-  takes cursor / position as a parameter

###### Cursor Based Iterator

-  server returns an updated cursor with every call of the command
-  this can be used in the argument of the next call
-  iteration starts when cursor is set to 0
-  terminates when cursor returned from the server is 0

###### Guarantees

-  full iterations will retrieve all elements that were present in the
   collection from the start to the end
-  never returns any element that was NOT present in the collection from the
   start to finish

##### COUNT option

-  can be defined in a SCAN command to overwrite the default returned per
   iteration
-  user can specify the amount of work done at every call
-  default COUNT is 10
-  COUNT can be changed from one iteration to the next
-  SCAN COUNT 20

##### MATCH option

-  iterate elements that match a pattern specified
-  SCAN 0 MATCH something
-  SCAN 0 Match k\*

## KEYS

-  returns all keys that match a specific pattern
-  should be avoided in production, great for development

##### RANDOMKEY

-  returns a random key from the database
