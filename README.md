# Medium clone api

## Description

#### created API for blog create, update, show and index and comment create on blog.


## what all things are done

#### created API for blog create, update, show and index and comment create on blog and written test for all apis


## Improvements/what more could be done

1) authentication (JWT)

2)  We can do performance testing using tools like autocannon, clinic

3) We can cache using Memcache

4) If we have a big team we could do this project in a microservice architecture(for scaling) by splitting our application into feature services like blogs, comments, and likes service since its a blogging website, so the database will be Read Heavy, we can further split services for the read-heavy purpose we can split the database into Master-slave (Master database for write and slave database for reading). we can implement ingress-Nginx for load balancing and caching in the ingress-Nginx is possible, it can cache the page/response for faster response.



## Prerequisite

### If you want to run on docker

1. Docker for Mac/Windows [Docker desktop](https://docs.docker.com/desktop/)

2. Docker engine for linux [Docker Engine](https://docs.docker.com/engine/install/)


### If you don't want to run on docker

1. Install mongo from [here](https://docs.mongodb.com/manual/installation/)

2.change the code from index.ts file line 15 

3.from this `"mongodb://mongo:27017/blog"` to `"mongodb://localhost:27017/blog"` this 


## How to run with docker 

1. Now either fork or download the app and open the folder in the cli

2. Run `docker-compose build`

3. Run `docker-compose up`


## How to run WITHOUT docker

1. Now either fork or download the app and open the folder in the cli

2. Run `npm install`.

3. run mongodb `mongod`.

4. run `npm start`.


## User Stories

- User can create a blog post

- User can update that blog post

- User can request for specific blog post

- User can request for all blog post

- User can create a comment on blog post


## Dependencies & Tools

- Docker

- Typescript

- express

- mongoose

- jest

- express-validator

- @drparadox/common



