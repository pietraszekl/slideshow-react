import mocha from 'mocha';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {render, mount, shallow } from 'enzyme';

import React from 'react';
import Pagination from '../components/Slideshow/Pagination';

chai.use(chaiEnzyme())


describe('<Pagination />',() => {
  const data = [{id:1},{id:2},{id:3}]
  const slide = 1;
  const pagination = shallow(<Pagination isVisible={true} data={data}/>);

  pagination.setState({
    currentSlide: slide
  });

  it('state of currentSlide should be equal current slide prop', () =>{
    expect(pagination.state().currentSlide).to.equal(slide);
  });

  describe('{PaginationList}', () => {
    it('should have `.pagination` class ', () => {
      expect(pagination.find('div')).to.have.className('pagination')
    });

    it('should check that the <Pager /> renders', () => {
      expect(pagination.children()).to.have.length(3);
    });
  });

});
