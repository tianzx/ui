// /**
//  * Created by tianzx on 2016/10/17.
//  */
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import nock from 'nock';
// import { expect } from 'chai';
// import {
//   GET_ALL_MENU,GET_ALL_MENU_SUCCESS,getAllMenu
// } from './menu';
// import { API_CONFIG } from '../api/index';
//
// const middlewares = [ thunk ];
// const mockStore = configureMockStore(middlewares);
// const db = require('./../data/db.json');
//
// describe('Users actions', function() {
//   afterEach(() => {
//     nock.cleanAll();
//   });
//   it('should create MENUS_SUCCESS when fetching menus has been done', () => {
//     nock(API_CONFIG.host)
//       .get((uri) => {
//         return uri.indexOf(API_CONFIG.users) >= 0;
//       })
//       .reply(200, db.users);
//     const expectedActions = [
//       { type: USERS_QERUEST, isFetching: true },
//       { type: USERS_SUCCESS, isFetching: false, users: db.users }
//     ];
//     const store = mockStore();
//
//     return store.dispatch(fetchUsers())
//       .then(() => {
//         expect(store.getActions()).to.deep.equal(expectedActions);
//       });
//   });
// });
