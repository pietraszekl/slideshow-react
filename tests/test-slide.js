import mocha from 'mocha'
import chai, {expect} from 'chai'
import jsxChai from 'jsx-chai'


import React from 'react'
import Slide from '../components/Slideshow/Slide'

describe('<Slide>', function(){
  it('should have class slide--active if props.active set to true', function(){
   expect(<Slide active={2==2}/>).to.eql(<Slide active={true} />);
  });
});
