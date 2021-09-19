createdb:
	createdb --username=root --owner=root denshi-store

dropdb: 
	dropdb denshi-store

.PHONY: createdb dropdb