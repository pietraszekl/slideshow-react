import mocha from 'mocha'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { mount, shallow } from 'enzyme'

import React from 'react'
import Pager from '../components/Slideshow/Pager'

chai.use(chaiEnzyme())

describe('<Pager />',() => {
  const pager = shallow(<Pager active={true} id="1"/>);

  it('should always have class pagination__item', () =>{
    expect(pager).to.have.className('pagination__item')
  });

  it('should have class pagination__item--active if this.props.active set to true', ()=>{
    expect(pager).to.have.className('pagination__item--active')
  });
 it('should have property id equal to 1', () => {
   expect(pager.props().children[0]).to.equal('1')
 })

});
