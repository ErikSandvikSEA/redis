## RDB - Redis Database File

-  simplest persistence mode
-  enabled by default
-  single-file point-in-time representation
-  uses snapshots

### Advantages

-  easy to use
-  compact
-  good for backup/recovery
-  maximizes Redis performance
-  allows for faster restarts with big datasets

## Snapshotting

-  controlled by the user
-  can be modified at runtime
-  snapshots are produces as .rdb files
-  SAVE & BGSAVE commands

### SAVE

-  performs a synchronouse save in a .rdb file
-  should rarely be used in production

### Disadvantages

-  Limited to save points
-  not good if you want to minimize the chance of data loss
-  needs to fork() often which can be time consuming and wear on the system
