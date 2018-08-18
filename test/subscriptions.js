import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('subscriptions', () => {
  it('should be created', done => {
    nock('https://api.intercom.io').post('/subscriptions', { url: 'https://example.org/hooks/1', topics: ['user.created'] }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.subscriptions.create({ url: 'https://example.org/hooks/1', topics: ['user.created'] }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should be updated', done => {
    nock('https://api.intercom.io').post('/subscriptions/baz', { url: 'https://example.org/hooks/1', topics: ['user.created'] }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.subscriptions.update('baz', { url: 'https://example.org/hooks/1', topics: ['user.created'] }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should list', done => {
    nock('https://api.intercom.io').get('/subscriptions').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.subscriptions.list().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should find subscriptions by id', done => {
    nock('https://api.intercom.io').get('/subscriptions/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.subscriptions.find('baz').then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should delete subscriptions by ID', done => {
    nock('https://api.intercom.io').delete('/subscriptions/baz').reply(200);
    const client = new Client('foo', 'bar').usePromises();
    client.subscriptions.delete('baz').then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
