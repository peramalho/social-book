const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Post = require('../models/post');
const Comment = require('../models/comment');

describe('Routes', () => {
  beforeEach(async () => {
    await Post.deleteMany({});
    await Comment.deleteMany({});
  });

  describe('GET /api/posts', () => {
    it('returns a success code', async (done) => {
      const res = await request(app).get('/api/posts');
      expect(res.statusCode).toEqual(200);
      done();
    });

    it('returns an empty array if there are no posts ', async (done) => {
      const res = await request(app).get('/api/posts');
      expect(res.body).toEqual([]);
      done();
    });

    it('returns an array containing posts objects', async (done) => {
      const newPost = { message: 'Message sample' };
      await Post.create(newPost);

      const res = await request(app).get('/api/posts');
      expect(res.body[0]).toHaveProperty('message');
      done();
    });
  });

  describe('GET /api/posts/:id', () => {
    it('returns a 404 error code if post does not exist', async (done) => {
      const id = mongoose.Types.ObjectId();
      const res = await request(app).get(`/api/posts/${id}`);
      expect(res.statusCode).toEqual(404);
      done();
    });

    it('returns a success code if post exists', async (done) => {
      const newPost = { message: 'Message sample' };
      const post = await Post.create(newPost);
      const id = post._id;

      const res = await request(app).get(`/api/posts/${id}`);
      expect(res.statusCode).toEqual(200);
      done();
    });
  });

  describe('POST /api/posts', () => {
    let res;
    beforeAll(async () => {
      const post = { message: 'message' };
      res = await request(app).post(`/api/posts/`).send(post);
    });

    it('returns a 201 create success code', () => {
      expect(res.statusCode).toEqual(201);
    });

    it('returns an object containing an id property', () => {
      expect(res.body).toHaveProperty('_id');
    });
  });

  describe('DELETE /api/posts/:id', () => {
    let post;
    beforeAll(async () => {
      post = await Post.create({ message: 'Message sample' });
    });

    it('returns a 200 success code', async (done) => {
      const res = await request(app).delete(`/api/posts/${post._id}`);
      expect(res.statusCode).toEqual(200);
      done();
    });

    it('does not return the deleted object', async (done) => {
      const res = await request(app).get(`/api/posts/${post._id}`);
      expect(res.statusCode).toEqual(404);
      done();
    });
  });

  describe('GET /api/posts/:id/comments', () => {
    it('returns a 404 error code if post does not exist', async (done) => {
      const id = mongoose.Types.ObjectId();
      const res = await request(app).get(`/api/posts/${id}`);
      expect(res.statusCode).toEqual(404);
      done();
    });

    // it('returns a comment with success', async (done) => {
    //   const post = await Post.create({ message: 'Message sample' });
    //   const comment = await Comment.create({
    //     comment: 'Comment sample',
    //     post: post._id,
    //   });
    //   await post.comments.push(comment);
    //   await post.save();
    //   const res = await request(app).get(`/api/posts/:${post._id}/comments`);
    //   expect(res.statusCode).toEqual(200);
    //   done();
    // });
  });

  describe('POST /api/posts/:id/comments', () => {
    it('returns a 201 create success code', async (done) => {
      const post = await Post.create({ message: 'Message sample' });
      const res = await request(app)
        .post(`/api/posts/:${post._id}/comments`)
        .send({ comment: 'Comment sample' });
      console.log(res.body);
      expect(res.statusCode).toEqual(201);
      done();
    });
  });

  describe('Unknown route', () => {
    it('returns a 404 error code', async (done) => {
      const res = await request(app).get('/api/unknown-route-123');
      expect(res.statusCode).toEqual(404);
      done();
    });
  });
});
