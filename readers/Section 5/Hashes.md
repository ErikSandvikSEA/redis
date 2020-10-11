## Hashes

-  maps between string fields and string values
-  perfect for representing objects
-  very compact

### HSET

-  sets a field in the has
-  if a key does not exist, a new key holding a hash is created
-  if field exists in the hash, it is overwritten
-  1 is returned if field is a new field in the hash and value was set
-  0 is returned if the fied already exists in the hash and the value was
   updated
-  HSET user1 name "John"

### HMSET

-  sets multiple fields to their respective values
-  overwrites any existing fields in the hash

### HGET

-  gets a value associated with a field in a hash

### HMGET

-  gets multiple values

### HGETALL

-  gets all fiends and values in a hash

### HDEL

-  removes a specified field from the hash
-  returns the number of fields that were removed

### HEXISTS

-  returns 1 if the field exists, 0 if no

### HINCRBY

-  increments the number sorted in the hash

### HKEYS

-  returns the field names

### HLEN

-  returns length of the hash
