const plotQuadraticFunction = () => {
  const canvas = document.getElementById('myCanvas')
  const ctx = canvas.getContext('2d')

  function quadraticFunction(x) {
    const a = Number(document.getElementById('a').value)
    const b = Number(document.getElementById('b').value)
    const c = Number(document.getElementById('c').value)

    return a * Math.pow(x, 2) + b * x + c;
  }

  const width = canvas.width;
  const height = canvas.height;
  const scale = 20;


  ctx.clearRect(0, 0, canvas.width, canvas.height)


  ctx.strokeStyle = 'white';
  ctx.beginPath()
  ctx.moveTo(0, height / 2)
  ctx.lineTo(width, height / 2)
  ctx.moveTo(width / 2, 0)
  ctx.lineTo(width / 2, height)
  ctx.strokeStyle = 'white';
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(0, height / 2)

  for (let x = 0; x < width; x +=scale) {
    ctx.beginPath()
    ctx.fillStyle = 'white';
    ctx.fillText(x / scale, width / 2 + x, height / 2 + 20)
    ctx.fillText(-x / scale, width / 2 - x, height / 2 + 20)
  }

  for (let y = 0; y < height; y += scale) {
    ctx.beginPath()
    ctx.fillStyle = 'white';
    ctx.fillText(-y / scale, width / 2 + 10, height / 2 + y)
    ctx.fillText(y / scale, width / 2 + 10, height / 2 - y)
  }

  const minX = -width / 2;
  const maxX = width / 2;

  for (let x = minX; x < maxX; x++) {
    let y = quadraticFunction(x / scale)
    ctx.lineTo(width / 2 + x * scale, height / 2 - y * scale)
  }
  ctx.strokeStyle = 'blue';
  ctx.stroke()
}

document.addEventListener("DOMContentLoaded", plotQuadraticFunction)

const inputA = document.getElementById('a') 
inputA.addEventListener('input', plotQuadraticFunction)

const inputB = document.getElementById('b')
inputB.addEventListener('input', plotQuadraticFunction)

const inputC = document.getElementById('c')
inputC.addEventListener('input', plotQuadraticFunction)
