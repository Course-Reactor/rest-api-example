# rest-api-example

## Prerequisites

Before you run any of these commands, please make sure you have Node and Docker installed. Please contact your instructor if you don't know what these are and they will help you install them.

## Installation

To install dependencies, run `npm i`

## Database Setup

1. To set up your database, run `docker-compose up -d` to start the docker container with the mongodb UI.
2. Visit http://localhost:8081 in your browser. On the main page in the top right hand corner, create a database called "movies" (lowercase, this is important).
3. Once you've created your movies database, click on its title in the table and in the top right hand corner, create a collection called "movies" (again, lowercase, this is important).
4. Create a document with a `{ "title": "Polar Express" }` just to test and make sure the API is working.

## Running the API

To run the API, run `npm start` in your terminal. The app should start on port 3000 which you can view in your browser at: http://localhost:3000

Navigate to the `/movies/list` route to see if it works!

## Getting Help

Please contact your instructor if you experience any trouble setting this up.
