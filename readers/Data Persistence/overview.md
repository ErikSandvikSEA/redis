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

### Pools

#### Multiple Redis servers running on the same machine using different ports

-  efficient memory usage
-  more CPUs
-  better fine-tuning

### Replication

#### Simple master-slave replication allows slavve Redis servers to be copies of master servers

-  asynchronous replication
-  multiple slaves
-  connections from other slaves
-  non blocking on slave side
-  scalability & data redundancy
-  slave read-only

#### Replication Process

1. Master starts saving in the background and starts buffering all new commands
   that will modify the dataset
2. after background saving, the master transfers the database file to the slave
3. the slave saves the files to the disk and loads it into memory
4. the master sends all buffered commands to the slave
