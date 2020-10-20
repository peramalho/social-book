const request = require('supertest');
const app = require('../app');
const Post = require('../models/post');
const Comment = require('../models/comment');

describe('Routes', () => {
  beforeEach(async () => {
    await Post.deleteMany({});
    await Comment.deleteMany({});
  });

  describe('GET /posts', () => {
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

  describe('GET /posts/:id', () => {
    it('returns a 404 error code if post does not exist', async (done) => {
      const id = 123456789;
      const res = await request(app).get(`/api/posts/${id}`);
      expect(res.statusCode).toEqual(404);
      done();
    });
  });

  describe('POST /posts', () => {
    let post;
    let res;
    beforeAll(async () => {
      post = { message: 'message' };
      res = await request(app).post(`/api/posts/`).send(post);
    });

    it('returns a 201 create success code', () => {
      expect(res.statusCode).toEqual(201);
    });

    it('returns an object containing an id property', () => {
      expect(res.body).toHaveProperty('_id');
    });
  });

  describe('GET /posts/:id/comments', () => {});
  describe('POST /posts/:id/comments', () => {});

  describe('Unknown route', () => {
    it('returns a 404 error code', async (done) => {
      const res = await request(app).get('/api/unknown-route-123');
      expect(res.statusCode).toEqual(404);
      done();
    });
  });
});
