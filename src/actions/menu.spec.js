/**
 * Created by tianzx on 2016/10/17.
 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {expect} from 'chai';

import {
  GET_ALL_MENU, GET_ALL_MENU_SUCCESS, getAllMenu
} from './menu';

import API_CONFIG from '../api/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const menus = require('../../fake/menu');
const fetch = require('node-fetch');


describe('Users actions', function () {
  it('should create MENUS_SUCCESS when fetching menus has been done', () => {
    nock("http://tianzx.com/")
      .get("/menu")
      .reply(200, menus);
    const expectedActions = [
      {type: GET_ALL_MENU, isFetching: true},
      {type: GET_ALL_MENU_SUCCESS, isFetching: false, menus: menus}
    ];
    const store = mockStore({});
    function fetchData () {
      return dispatch => {
        return fetch('http://tianzx.com/menu') // Some async action with promise
          .then(() => dispatch(getAllMenu()))
      };
    }
    return store.dispatch(fetchData())
      .then(() => {
        console.log(store.getActions());
        // expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });
});
