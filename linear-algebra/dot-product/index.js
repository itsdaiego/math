const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

function drawVector(origin, vector, color) {
    ctx.beginPath()
    ctx.moveTo(origin.x, origin.y)
    ctx.lineTo(origin.x + vector.x, origin.y + vector.y)
    ctx.strokeStyle = color

    ctx.stroke()
}

function dotProduct(a, b) {
    return a.x * b.x + a.y * b.y
}

function projectorVectorUsingUnitVectorStrategy(vectorB, vectorA) {
  const magnitudeA = Math.sqrt(vectorA.x**2 + vectorA.y**2)

  const unitVectorA = {
    x: vectorA.x / magnitudeA,
    y: vectorA.y / magnitudeA
  }

  const projectionLength = dotProduct(vectorB, unitVectorA)

  const projection = {
    x: unitVectorA.x * projectionLength,
    y: unitVectorA.y * projectionLength
  }

  drawVector(origin, projection, 'green')
}

function projectVectorUsingProjectionFormula(vectorB, vectorA) {
  const magnitudeA = Math.sqrt(vectorA.x**2 + vectorA.y**2)

  const projectionLength = dotProduct(vectorB, vectorA) / Math.pow(magnitudeA, 2)

  
  const projection = {
    x: vectorA.x * projectionLength,
    y: vectorA.y * projectionLength
  }

  drawVector(origin, projection, 'green')
}

const width = canvas.width
const height = canvas.height

ctx.beginPath()
ctx.fillStyle = 'white'

ctx.translate(width / 2, height / 2)

ctx.lineWidth = 2

ctx.moveTo(-width / 2, 0)
ctx.lineTo(width / 2, 0)

ctx.strokeStyle = 'white'
ctx.stroke()

ctx.beginPath()
ctx.fillStyle = 'white'

ctx.moveTo(0, -height / 2)
ctx.lineTo(0, height / 2)

ctx.strokeStyle = 'white'
ctx.stroke()


const origin = { x: 0, y: 0 }

// projecting vectors in same direction
// const vectorA = { x: 100, y: 50 }
// const vectorB = { x: 150, y: 200 }
// drawVector(origin, vectorA, 'red')
// drawVector(origin, vectorB, 'blue')
// projectorVectorUsingUnitVectorStrategy(vectorB, vectorA)


// draw two non-projected vectors
// const mirroredA = { x: 100, y: -50 }
// const mirroredB = { x: 150, y: -200 }
// drawVector(origin, mirroredA, 'red')
// drawVector(origin, mirroredB, 'blue')


// projecting vectors in opposite direction
const vectorC = { x: 100, y: 200 }
const vectorD = { x: -100, y: 100 }

drawVector(origin, vectorC, 'red')
drawVector(origin, vectorD, 'blue')

// projectorVectorUsingUnitVectorStrategy(vectorD, vectorC)
projectVectorUsingProjectionFormula(vectorD, vectorC)
