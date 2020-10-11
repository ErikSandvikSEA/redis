## AOF - Append Only File

-  main persistence option
-  every operation gets logged
-  log is the same format used by clients
-  can be piped to another instance
-  dataset can be reconstructed

### AOF Rewrite

-  used when AOF file gets too big
-  rewrite database from scratch
-  directly access data in memory
-  no need for disk access

### fsync Policies

-  no fsync --- done by OS, usually 30 seconds or so
-  fsync every second --- default
-  fsync at every query --- slow

### Advantages

-  much more durable
-  single file w/no corruption
-  automatically rewrites in the background if it gets too big
-  easy to understand log / instructions

### Disadvantages

-  takes longer to load in memory on server restart
-  usually bigger than the equivalent RDB files
-  can be slower than RDB depending on fsync policy
-  more possible bugs
