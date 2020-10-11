## Config

### CONFIG GET

-  used to read the configuration parameters of a running Redix server
-  since Redis 2.6, all configuration parameters are supported
-  takes a single agrument

##### CONFIG GET port - gets the port configuration value

##### CONFIG GET \* - list of all supported config params

##### CONFIG GET \*max-\*-entries\* - hash-max-zipmap-entries, list-max-ziplist-entries, etc

### CONFIG SET

-  used to reconfigure server at runtime

### INFO

-  returns info & stats about a server
-  optional parameter to select specific info
-  server | clients | memory | persistence | stats | replication | cpu |
   commandstats | cluster | keyspace | all | default

### CONFIG RESETSTAT

-  resets statistics reported using the INFO commant

## Command

-  returns details about all Redis commands

### COMMAND INFO

-  returns details for a specific commands

### COMMAND COUNT

-  returns number of available commands on the server

### CLIENT LIST

-  returns info and stats on clients connected to a server
