## Data Persistence Features

-  datasets are all stored in memory
-  can be saved to disk
-  fork --- creating child processes which are an exact copy of the parent
-  copy-on-write snapshot

### Persistance Process

1. client sends write command to database (client memory)
2. database receives the write (server memory)
3. database calls system call that writes data on disk (Kernel buffer)
4. the OS transfers the write buffer to the disk controller (Disk cache)
5. disk controller writes to physical media (Physical disk)
