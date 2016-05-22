# slideshow-react
Slideshow/Carousel plugin for ReactJS web apps.

## Install
To include it in to your project copy 'Slideshow' component directory to the source location of your app under components directory and 'dispatcher.js' (if not exiting already) to the same location as your main JS file.

Slideshow makes certain assumptions regarding it's location within the project however these can be easily changed to adopt to the project's structure.


## Usage
```
[...]
slideshowConfig = {
  data: [{slide1}, {slide2},{slide3}],
  pagination: true,
  controls: false,
  autorotate : 5000
}
[...]
render() {
  return (
    <Slideshow config={this.slideshowConfig}/>
  )
}
```
## Details
`<Slideshow>` component is combined out of 3 main components:
1. `<Slides>`: It's important that each slide to have `id` key
  - Child component: `<Slide>`
2. `<Controls>`: are visible on the edges of the Slideshow.
  - Active class name:  `pagination__item--active`
3. `<Pagination>`: visible at the bottom of the Slideshow.
  - Child component: `<Pager>`

and uses `config` property to rule them all ;)

### Slides
accepts 2 props: data - which is an array of slides, and currentSlide - which on load is set to first slide in the array and updated accordingly when slides being changed

### Controls
Navigate between next and previous slides. Can we switched ON/OFF from slideshowConfig object

### Pagination
Toggle between all slides. It's important that each slide is described by `id` key which is used to determine unique key as well as an index of current slide in the array

### Config property
Config property is an object with following keys:
- `data` - an array of slides as objects.
- `pagination` - boolean by default set to `true`.
- `controls` - boolean by default set to `true`
- `autorotate` - number - time in mili seconds to set interval between current and next slide; if not present interval is set to false.

### Store - Flux
This is where all the `<Slideshow>` actions are handled. This inlcudes: getAll, nextSlide, prevtSlide and toggleSlide


## Requires:
- React       @0.14.6
- Flux        @2.1.1
- sass-loader @3.1.2 for Babel
- WebPack     @1.12.9

## Example
Working example is implemented on my personal website http://looca.co.uk for testimonials component. Source code https://github.com/pietraszekl/looca-reactjs
