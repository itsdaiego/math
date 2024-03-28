// reference: https://andymath.com/unit-circle
const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

function drawPointAtAngle(angle) {
  const x = Math.cos(angle) * 400
  const y = Math.sin(angle) * 400

  // Draw a line from the center to the point on the circle
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(x, y)
  ctx.stroke()

  // Draw a point on the circle
  ctx.beginPath()
  ctx.arc(x, y, 3, 0, 2 * Math.PI)
  ctx.fill()
}

function drawTriangleInUnitCircle() {
  // cos function: x = cos(angle) * radius
  // sin function: y = sin(angle) * radius
  // tan function: tan(angle) = y / x
  const width = canvas.width
  const height = canvas.height

  ctx.translate(width / 2, height / 2)

  ctx.beginPath()
  ctx.arc(0, 0, 400, 0, 2 * Math.PI)
  ctx.strokeStyle = 'white'
  ctx.stroke()

  const totalRadians = 2 * Math.PI
  const increment = Math.PI / 6

  for (let angle = 0; angle <= totalRadians; angle += increment) {
    setTimeout(() => drawPointAtAngle(angle), angle * 500 / increment)
  }
}

// Call the function to draw
drawTriangleInUnitCircle()

