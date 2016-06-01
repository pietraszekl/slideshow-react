import mocha from 'mocha'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { mount, shallow } from 'enzyme'

import React from 'react'
import Slide from '../components/Slideshow/Slide'

chai.use(chaiEnzyme())

describe('<Slide />', function(){
  const wrapper = shallow(<Slide />);

  it('should have class slide', function(){
    expect(wrapper).to.have.className('slide')
  });

  it('should have exactly 1 .slide__text node', function(){
    expect(wrapper).to.have.exactly(1).descendants('.slide__text')
  })
  it('should have exactly 1 .slide__caption node', function(){
    expect(wrapper).to.have.exactly(1).descendants('.slide__caption')
  })
});
