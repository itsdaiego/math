// reference: https://andymath.com/unit-circle
const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

// UNIT CIRCLE

// function drawPointAtAngle(angle) {
//   console.log('drawing')
//   const x = Math.cos(angle) * 400
//   const y = Math.sin(angle) * 400
//
//   // Draw a line from the center to the point on the circle
//   ctx.beginPath()
//   ctx.moveTo(0, 0)
//   ctx.lineTo(x, y)
//   ctx.stroke()
// }
//
//
// function drawUnitCircle() {
//   // cos function: x = cos(angle) * radius
//   // sin function: y = sin(angle) * radius
//   // tan function: tan(angle) = y / x
//   const width = canvas.width
//   const height = canvas.height
//
//   ctx.translate(width / 2, height / 2)
//
//   ctx.beginPath()
//   ctx.arc(0, 0, 400, 0, 2 * Math.PI)
//   ctx.strokeStyle = 'white'
//   ctx.stroke()
//
//   const totalRadians = 2 * Math.PI
//   const increment = Math.PI / 6
//
//   let timeout = 500
//
//   for (let angle = 0; angle <= totalRadians; angle += increment) {
//     console.log('timeout', angle * 500 / increment)
//     setTimeout(() => drawPointAtAngle(angle), timeout)
//
//     timeout += 500
//   }
// }

// drawUnitCircle()

// SIN AND COSINE FUNCTIONS

function drawSineCosFunction() {
  const width = canvas.width
  const height = canvas.height

  ctx.translate(width / 2, height / 2)

  ctx.beginPath()
  ctx.moveTo(-width / 2, 0)
  ctx.lineTo(width / 2, 0)
  ctx.strokeStyle = 'white'
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(0, -height / 2)
  ctx.lineTo(0, height / 2)
  ctx.strokeStyle = 'white'
  ctx.stroke()


  ctx.beginPath()

  for (let x = -width / 2; x <= width / 2; x += 50) {
    const y = Math.sin(x) * 100
    ctx.lineTo(x, y)
  }

  ctx.strokeStyle = 'blue'
  ctx.stroke()

  

  ctx.beginPath()

  for (let x = -width / 2; x <= width / 2; x+= 50) {
    const y = Math.cos(x) * 100
    ctx.lineTo(x,y)
  }

  ctx.strokeStyle = 'red'
  ctx.stroke()
}

drawSineCosFunction()
