## This repo contains the frontend and backend code for meme store
## Tech Stack used : 
### Frontend : React, Materialize Css
### Backend: Node, Express
### Deployment: Heroku for both frontend and backend
### Database: MongoDb for local and mongoDb cloud for deployed version
### Frontend Deployed website : https://memestore1234.herokuapp.com/
### Backend Deployed website : https://crionodejs.herokuapp.com/memes

## Api and extra features implemented
#### /memes (get request)
##### it is optimised for more than 100 memes in the database to reduce the request time
#### /memes (post request)
#### /memes/:id (get request to find a meme of a particular id)
#### /memes/:id (patch request to update a particular meme of a particular id) (extra)
#### covered most of the boundry cases including "no fields error, duplicate error, id not found error" along with proper status codes
 