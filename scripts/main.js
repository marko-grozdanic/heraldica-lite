const canvas = SVG().addTo('.canvasSpace').addClass('canvas')

var charge = canvas.nested()

var shield = charge.image('../resources/shields/shieldPlain.svg', function (event) {
  shield.x('12%')
  shield.y('12%')
  shield.size('80%', '80%')
  shield.attr('fill', '#555')
})

var lion = charge.image('../resources/charges/lionRampant.svg', function (event) {
  lion.x('22%')
  lion.y('22%')
  lion.size('60%', '60%')
})


