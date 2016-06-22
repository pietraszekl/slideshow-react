import mocha from 'mocha';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {render, mount, shallow } from 'enzyme';

import React from 'react';
import Slides from '../components/Slideshow/Slides';
import * as SlideshowActions from "../components/Slideshow/SlideshowActions";
import SlideshowStore from "../components/Slideshow/SlideshowStore";


chai.use(chaiEnzyme())

describe('<Slides />',() => {
  const data = [{id:1},{id:2}];
  const wrapper = shallow(<Slides data={data}/>);
  const currentSlide = data[0].id;
  const slide = 1;
  const isActive = true ? slide==currentSlide : false;
  beforeEach(() => {
    wrapper.setState({
      currentSlide: currentSlide
    })
  });
  it('state of currentSlide should be equal current slide prop', () => {
    expect(wrapper.state().currentSlide).to.equal(1);
  });
  describe('{SlidesList}', () => {
    it('should have `.slideshow__slides` class ', () => {
      expect(wrapper.find('div')).to.have.className('slideshow__slides')
    });
  })

});
