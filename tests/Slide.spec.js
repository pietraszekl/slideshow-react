import mocha from 'mocha'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { mount, shallow } from 'enzyme'

import React from 'react'
import Slide from '../components/Slideshow/Slide'

chai.use(chaiEnzyme())

describe('<Slide />', () => {
  const slide = shallow(<Slide active={true}/>);

  it('should have class slide', () => {
    expect(slide).to.have.className('slide')
  });

  it('should have class .slide--active if this.props.active set to true', () => {
    expect(slide).to.have.className('slide--active')
  });

  it('should have exactly one .slide__text node', () => {
    expect(slide).to.have.exactly(1).descendants('.slide__text')
  })
  it('should have exactly one .slide__caption node', () => {
    expect(slide).to.have.exactly(1).descendants('.slide__caption')
  })
});
