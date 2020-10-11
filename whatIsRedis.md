### What is Redis?

-  open source - in-memory data structure store
-  used as deatabase, cache, and message broker
-  NoSQL key/value store

##### Is it like MongoDB?

-  yes because it's NoSQL and uses key/val cases
-  different because MongoDB is disk-based while Redis is memory-based
-  Redis is used for caching

#### Is it like Memcached?

-  It is because it uses memory
-  But it is different because the memory persists

### Scaling & Partitioning

-  Not the easierst thing to do
-  has gotten better
-  depends on using Redis as cache or data store
-  partitioning: split data among multiple Redis instances

### Security

-  designed to be accessed by trusted clients inside trusted environments
-  not usually a good one to expose to the internet

### Data-Structure Server

-  doesn't serve raw data
-  no schemas & column names
-  how will data be represented?
-  take advantage of speed

## What is different about Redis?

-  traditional dbs - scan entire table or scan entire index
-  redis, direct data retrieval commands
-  no internal query engine
-  you decide how to store and retrieve data

### Data Retrieval

-  Do values need keys
-  multiple fields to one key?
-  counts of elements under one collection?
-  storing objects?
-  increasing/decreasing order needed?
-  unique values?
-  testing if values exist?
-  Strings, Sets, Stored Sets, Hashes, & Lists/Arrays

#### Custom indexing

-  Reading data by more than one retrieval key
-  User:[UserId] User:[Name]

-  GET UserName: [Name]

#### Data Storage

-  Different than SQL
-  Only store data that you KNOW you'll use
