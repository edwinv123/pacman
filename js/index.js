const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
// window.onresize = function(){
//     canvas.width = innerWidth;
//     canvas.height = innerHeight
// }
class Boundary {
    static width = 40;
    static height = 40;
    constructor({ position }) {
        this.position = position
        this.width = 40
        this.height = 40
    }
    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, 
            this.width, this.height)
    }
}
class Player {
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity
        this.radius = 15
    }

    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = 'yellow'
        c.fill()
        c.closePath()
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

const map = [
    ['-', '-', '-', '-', '-', '-'],
    ['-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-']
]
const boundaries = []
const player = new Player({
    position: {
        x: Boundary.width + Boundary.width / 2,
        y: Boundary.height + Boundary.height / 2
    },
    velocity: {
      x: 0,
      y:0  
    }
})

map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        switch (symbol) {
            case '-':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        }
                    })
                )
            break
        }
    })
})

function animate() {
    requestAnimationFrame(animate)
    boundaries.forEach((boundary) => {
    boundary.draw()
    })

    player.update()
}

animate()

// boundaries.forEach((boundary) => {
//     boundary.draw()
// })

// player.update()

addEventListener('keydown', ({ key }) => {
    // console.log(key)
    switch (key) {
        case 'w':
        play.velocity.y = -5
        break
        case 'a':
        play.velocity.y = -5
        break
        case 's':
        play.velocity.y = -5
        break
        case 'd':
        play.velocity.y = -5
        break
    }

    console.log(player.velocity)
})

addEventListener('keyup', ({ key }) => {
    // console.log(key)
    switch (key) {
        case 'w':
        play.velocity.y = -5
        break
        case 'a':
        play.velocity.y = -5
        break
        case 's':
        play.velocity.y = -5
        break
        case 'd':
        play.velocity.y = -5
        break
    }

    console.log(player.velocity)
})

// class Boundary {
//     constructor({ position }) {
//         this.position = position
//         this.width = 40
//         this.height = 40
//     }
//     draw() {
//         c.fillStyle = 'blue'
//         c.fillRect(this.position.x, this.position.y, 
//             this.width, this.height)
//     }
// }
// const boundaries = [
//    new Boundary({
//     position: {
//         x: 0,
//         y: 0
//     }
// })
// new Boundary({
//     position: {
//         x: 41,
//         y: 0
//     }
// })
// ]

// boundaries.forEach((boundary) => {
//     boundary.draw()
// })