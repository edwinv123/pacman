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
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

let lastKey = ''

const map = [
    ['-', '-', '-', '-', '-', '-','-'],
    ['-', ' ', ' ', ' ', ' ', ' ','-'],
    ['-', ' ', '-', ' ', '-', ' ','-'],
    ['-', ' ', ' ', ' ', ' ', ' ','-'],
    ['-', '-', '-', '-', '-', '-','-']
]

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

function circleCollidesWithRectangle({
    circle,
    rectangle
}) {
    return ( player.position.x - player.radius + player.velocity.y <= 
        boundary.position.y + boundary.height && 
        player.position.x + player.radius + player.velocity.x >= boundary.position.
        x && 
        player.position.y + player.radius + player.velocity.y >= boundary.position.
        y && 
        player.position.x - player.radius + player.velocity.x<= boundary.position.
        x + boundary.width)
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    if (keys.w.pressed && lastKey === 'w') {
        player.velocity.y = -5
    } else if (keys.a.pressed && lastKey === 'a') {
        player.velocity.x = -5
    } else if (keys.s.pressed && lastKey === 's') {
        player.velocity.y = 5
    } else if (keys.d.pressed && lastKey === 'd') {
        player.velocity.x = 5
    }

    boundaries.forEach((boundary) => {
    boundary.draw()
    
       if (
        player.position.x - player.radius + player.velocity.y <= 
        boundary.position.y + boundary.height && 
        player.position.x + player.radius + player.velocity.x >= boundary.position.
        x && 
        player.position.y + player.radius + player.velocity.y >= boundary.position.
        y && 
        player.position.x - player.radius + player.velocity.x<= boundary.position.
        x + boundary.width
        ) {
        player.velocity.x = 0
        player.velocity.y = 0
     }
    })

    player.update()
    player.velocity.x = 0
    player.velocity.y = 0
}

animate()

addEventListener('keydown', ({ key }) => {
    switch (key) {
        case 'w':
        keys.w.pressed = true
        lastKey = 'w'
        break
        case 'a':
        keys.a.pressed = true
        lastKey = 'a'

        break
        case 's':
        keys.s.pressed = true
        lastKey = 's'

        break
        case 'd':
        keys.d.pressed = true
        lastKey = 'd'

        break
    }
})

addEventListener('keyup', ({ key }) => {
    // console.log(key)
    switch (key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
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