#!/bin/bash

# Database credentials
DBNAME="wt"
HOST="localhost"
PORT="5432"

# SQL files containing table creation commands
createUsers_FILE="createUsers.sql"
createWeightrecords_FILE="createWeightrecords.sql"

# Create the users table
echo "Creating users table in the database..."
psql -d "$DBNAME" -h "$HOST" -p "$PORT" -f "$createUsers_FILE" 2> error.log

if [ $? -eq 0 ]; then
  echo "Users table created successfully."
else
  echo "Error creating users table. Check error.log for details."
  exit 1
fi

# Create the weightrecords table
echo "Creating weightrecords table in the database..."
psql -d "$DBNAME" -h "$HOST" -p "$PORT" -f "$createWeightrecords_FILE" 2>> error.log

if [ $? -eq 0 ]; then
  echo "Weightrecords table created successfully."
else
  echo "Error creating weightrecords table. Check error.log for details."
  exit 1
fi
