import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import Header from '../src/components/Header/index';

// const React = require('react');
// const {expect} = require('chai');
// const {shallow, mount, render} = require('enzyme');
//  Header = require('../src/components/Header/index');
describe("<Header />", function () {
  it("shallow", function () {
    expect(shallow(<Header />).is('.ant-layout-header')).to.equal(true);
  });

  it("mount", function () {
    expect(mount(<Header />).find('.ant-layout-header').length).to.equal(1);
  });
});
