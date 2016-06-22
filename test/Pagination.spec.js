import mocha from 'mocha';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {render, mount, shallow } from 'enzyme';

import React from 'react';
import Pagination from '../components/Slideshow/Pagination';

chai.use(chaiEnzyme())


describe('<Pagination />',() => {
  const pagination = shallow(<Pagination />);
  const slide = 1;
  beforeEach(() => {
    pagination.setState({
      currentSlide: slide
    })
  });
  it('state of currentSlide should be equal current slide prop', () =>{
    expect(pagination.state().currentSlide).to.equal(slide);
  });

  describe('{PaginationList}', () => {
    it('should have `.pagination` class ', () => {
      expect(pagination.find('div')).to.have.className('pagination')
    });
  })

});
