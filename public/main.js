var $vkBtn = document.querySelector('.vkBtn')

var $origBtn = document.querySelector('.origBtn')

var origDrawing = anime({
  targets: '.origin',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInQuint',
  duration: 500,
  delay: function(el, i) { return i * 10 },
  direction: 'alternate',
  elasticity: 200,
  loop: false,
  autoplay: false
})

var vkDrawing = anime({
  targets: '.spinner',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInQuint',
  duration: 500,
  delay: function(el, i) { return i * 10 },
  direction: 'alternate',
  elasticity: 200,
  loop: false,
  autoplay: false
})

$origBtn.addEventListener('click', function() { origDrawing.play(); });
$vkBtn.addEventListener('click', function() { vkDrawing.play(); });

// var lineDrawingVk = anime({
//   targets: '#vk-svg .lines path',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInQuint',
//   duration: 500,
//   delay: function(el, i) { return i * 10 },
//   direction: 'alternate',
//   elasticity: function(el, i, l) {
//     return (200 + i * 200);
//   },
//   loop: true,
//   // autoplay: false
// })
//
// var lineDrawingOrig = anime({
//   targets: '#orig line, path, polyline, rect',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInQuint',
//   duration: 500,
//   delay: function(el, i) { return i * 50 },
//   direction: 'alternate',
//   elasticity: function(el, i, l) {
//     return (200 + i * 200);
//   },
//   loop: true,
//   // autoplay: false
// })

// var morphing = anime({
//   targets: '#vk-svg path',
//   points: [
//     { value: '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369' },
//     { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
//     { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
//     { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
//   ],
//   easing: 'easeOutQuad',
//   duration: 2000,
//   loop: true
// });
