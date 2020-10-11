##### MSET

-  sets multiple keys to respective values
-  replaces existing values with new ones
-  MSET key1 "val1" key2 "val2"

##### MSETNX

-  sets multiple keys to respective values as long as none of the keys exist
-  will not overwrite values
-  MSETNX key1 "val1" key2 "val2" // only works if the keys don't exist already

##### MGET

-  returns values of all specified keys
-  Nill is returned if the key doesn't hold a value
-  MGET key1 key2

##### APPEND

-  if key already exists and is a string, the values will be appended at the end
   of the string
-  If the key does not exist. It works as SET
-  APPEND mykey "stringtoappend"

##### GETRANCE

-  returns substring of a string value
-  determined by offsets start and end
-  Negative offsets can be used to start from the end of the string
-  GETRANGE mykey 0 -1

##### RENAME

-  renames a key
-  returns error if key doesn't exist
-  RENAME mykey myrendamedkey

##### RENAMENX

-  renames key to newkey if only if newkey does not exist

##### GETSET

-  automatically sets key to value and returns the old value
-  returns an error if key exists
-  can be used with INCR for counting with automatic reset
-  GETSET mykey "myval"

##### SETEX

-  sets key to hold a string value and timeout after given amount of seconds
-  SETEX mykey 10 "hello"

##### PSETEX

-  same as SETEX but in milliseconds

##### PERSIST

-  removes an existing timeout on a key

##### SETNX

-  works like set if the key doesn't already exists
