The '_to_delete' directory contains files used
during the migration. 

The `_redirects` file is generated from the 
`scripts/deployer/deploy.mjs` script. 

The `redirects_storage.json` is used to 
maintain the redirects. It's updated by the 
deploy.mjs script, but it can also be updated
manually for adding redirects as necessary. 

Right now, the only redirects that are made
are in the `ksuid_redirects` section. If you
need other things, the deploy script will
need to be udpated. 

