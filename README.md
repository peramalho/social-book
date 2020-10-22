# Social Book App

## Introduction

Social Book is a social media prototype where users can share their posts. They can comment and discuss on the others' posts too. The frontend is made in React and the backend in Node.js.
The web app is responsive, so it is easily adapted for mobiles.

## Install

The frontend and the backend servers are separated from each other, granting more scalability. You'll need to install and run each one separately, so they can comunicate with each other.

### Frontend

```sh
cd frontend/
npm install
```

### Backend

```sh
cd backend/
npm install
```

If you want to host your own MongoDB database, you'll need to change the environment variables.

## Starting the project

### Frontend

```sh
cd frontend/
npm start
```

Frontend runs on port 3000.

### Backend

```sh
cd backend/
npm start
```

Backend runs on port 5000.

## Testing

Unit tests are implemented, so you can test your software.

### Frontend

```sh
cd frontend/
npm test
```

### Backend

```sh
cd backend/
npm test
```

The tests run in a testing database. It does not interfere with production and development databases.

## Pages

The pages are locally routed with the aid of react-router.

* Posts Page: `/`

This page contains all the posts created. The user can tap the post to go into details and comment, or delete the post through the trash icon.

* New Post Page: `/new-post`

This page contains the form for creating a new post.

* Experience Page: `/post/:id`

This page contains the full selected post. The user can comment the posts, or delete it.

## API's Endpoints

* Get all the posts: `GET /api/posts`

* Get the post specified by the id param: `GET /api/posts/:id`

* Create a new post: `POST /api/posts`

```js
body: {
  message: String,
}
```

* Delete the post specified by the id param: `DELETE /api/posts/:id`

* Get all the comments of the post specified by the id param: `GET /api/posts/:id/comments`

* Create a comment for the post specified by the id param: `POST /api/posts/:id/comments`

```js
body: {
  comment: String,
}
```

## Development Backend

```sh
cd backend/
npm run dev
```

The development backend runs in a development database. It does not interfere with production and testing databases.