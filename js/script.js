//console.log("js loaded")
//const canvas = document.getElementById('canvas');

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');



//canvas.width = innerWidth
//canvas.height = innerHeight



class Player {
	constructor({ position, velocity}){
		this.position = position
		this.velocity = velocity
		this.radius = 20
		//this.width = 30
		//this.height = 30

	}
	draw(){
		ctx.beginPath()
		ctx.rect(this.position.x, this.position.y, this.radius, this.radius)
		//ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
		ctx.fillStyle = 'red'
		ctx.fill()
		ctx.closePath()
	}

	update() {
		this.draw()
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y
	}
}





class Boundary{
	static width=20
	static height=20
	constructor({ position, image }){
		this.position = position
		this.width = 20
		this.height= 20
		this.image = image
	}

	draw() {
		ctx.fillStyle = 'blue'
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

		//ctx.drawImage(this.image, this.position.x, this.position.y)
	}
}

const player = new Player({
	position: {
		x: Boundary.width,
		y: Boundary.height 
		//x: 40,
		//y: 40
	},
	velocity: {
		x: 0,
		y: 0
	}
})

const map=[
	['#', '#', '#', '#', '#', '#', '#', '#', '#','#', '#', '#', '#', '#', '#', '#', '#', '#','#', '#', '#', '#', '#', '#', '#'],
	['#', ' ', '#', ' ', ' ', ' ', ' ', '#', ' ',' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' ','#', ' ', ' ', ' ', '#', ' ', '#'],
	['#', ' ', '#', ' ', '#', '#', ' ', '#', ' ','#', ' ', '#', ' ', '#', ' ', '#', '#', '#','#', ' ', '#', ' ', ' ', ' ', '#'],
	['#', ' ', '#', ' ', ' ', '#', '#', '#', ' ','#', ' ', '#', ' ', '#', ' ', ' ', ' ', ' ',' ', ' ', '#', '#', '#', ' ', '#'],
	['#', ' ', '#', ' ', '#', '#', ' ', '#', ' ','#', ' ', '#', ' ', '#', '#', ' ', '#', '#','#', ' ', ' ', ' ', ' ', ' ', '#'],
	['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ','#', ' ', '#', ' ', '#', ' ', ' ', '#', ' ','#', ' ', '#', '#', ' ', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#', '#', '#','#', ' ', ' ', ' ', '#', ' ', '#', '#', ' ','#', ' ', '#', ' ', ' ', ' ', '#'],
	['#', ' ', ' ', ' ', '#', ' ', '#', ' ', ' ','#', '#', '#', '#', '#', ' ', ' ', ' ', ' ','#', ' ', '#', '#', '#', ' ', '#'],
	['#', ' ', '#', ' ', '#', ' ', ' ', ' ', '#','#', ' ', '#', ' ', '#', '#', ' ', '#', ' ','#', ' ', '#', ' ', ' ', ' ', '#'],
	['#', ' ', '#', ' ', ' ', ' ', '#', ' ', '#',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', '#', '#', '#', '#', '#'],
	['#', ' ', '#', ' ', '#', ' ', '#', ' ', ' ',' ', '#', ' ', '#', '#', '#', '#', '#', '#','#', ' ', ' ', ' ', ' ', ' ', '#'],
	['#', ' ', '#', ' ', ' ', ' ', '#', ' ', '#','#', '#', ' ', '#', ' ', ' ', ' ', ' ', ' ','#', '#', '#', ' ', '#', ' ', '#'],
	['#', ' ', '#', ' ', '#', ' ', '#', ' ', ' ',' ', ' ', ' ', '#', ' ', '#', '#', '#', ' ',' ', ' ', '#', ' ', '#', ' ', '#'],
	['#', ' ', '#', '#', '#', ' ', '#', '#', '#',' ', '#', ' ', '#', ' ', '#', ' ', '#', ' ','#', ' ', ' ', ' ', '#', ' ', '#'],
	['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ',' ', '#', ' ', ' ', ' ', '#', ' ', ' ', ' ','#', ' ', '#', '#', '#', ' ', '#'],
	['#', '#', '#', ' ', '#', '#', '#', ' ', '#',' ', '#', ' ', '#', ' ', '#', '#', '#', ' ','#', ' ', ' ', ' ', ' ', ' ', '#'],
	['#', ' ', '#', ' ', '#', ' ', ' ', ' ', '#',' ', '#', ' ', ' ', ' ', '#', ' ', ' ', ' ',' ', ' ', '#', '#', '#', '#', '#'],
	['#', ' ', '#', ' ', ' ', ' ', '#', ' ', '#','#', '#', '#', '#', '#', '#', ' ', '#', ' ','#', ' ', ' ', '#', ' ', ' ', '#'],
	['#', ' ', '#', '#', '#', '#', '#', ' ', '#',' ', ' ', ' ', ' ', ' ', '#', ' ', '#', ' ','#', '#', '#', '#', '#', ' ', '#'],
	['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', '#', '#', '#', '#', '#', ' ', '#', ' ',' ', ' ', ' ', ' ', '#', ' ', '#'],
	['#', ' ', '#', '#', '#', '#', '#', '#', '#',' ', '#', ' ', ' ', ' ', '#', ' ', '#', '#','#', ' ', '#', '#', '#', ' ', '#'],
	['#', ' ', '#', ' ', ' ', ' ', '#', ' ', ' ',' ', '#', ' ', '#', ' ', '#', ' ', ' ', ' ','#', ' ', '#', ' ', ' ', ' ', '#'],
	['#', ' ', '#', ' ', '#', ' ', '#', ' ', '#',' ', '#', ' ', '#', ' ', '#', ' ', '#', ' ','#', ' ', '#', ' ', '#', ' ', '#'],
	['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', '#',' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ','#', ' ', ' ', ' ', '#', ' ', ' '],
	['#', '#', '#', '#', '#', '#', '#', '#', '#','#', '#', '#', '#', '#', '#', '#', '#', '#','#', '#', '#', '#', '#', '#', '#'],
]




/*const map=[
	['-', '-', '-', '-', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', '-', ' '],
	[' ', ' ', ' ', ' ', ' ', ' '],
	['-', '-', '-', '-', ' ', '-']
]*/

const boundaries = []

const image = new Image()
image.src = './img/textures/brick.jpg'


map.forEach((row, i) => {
	row.forEach((symbol, j) =>{
		switch (symbol) {
			case '#':
				boundaries.push(
					new Boundary({
							position: {
								x: Boundary.width * j,
								y: Boundary.height * i
							},
							//image: image
					})
				)
				break
		}
	})
})


const keys ={
	up: {
		pressed: false
	},
	down: {
		pressed: false
	},
	right: {
		pressed: false
	},
	left: {
		pressed: false
	}
}

let lastKey = ''



function collisionWithBorder({
	character,
	border
}){
	return(
		character.position.y - character.radius + character.velocity.y+1 <= border.position.y +border.height-character.radius &&
			
		character.position.x + character.radius + character.velocity.x-1 >= border.position.x &&

		character.position.y + character.radius + character.velocity.y-1 >= border.position.y &&

		character.position.x - character.radius + character.velocity.x+1 <= border.position.x + border.height-character.radius
	)
}





function animate(){
	
	let speed=1
	
	requestAnimationFrame(animate)
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	
	if(keys.up.pressed && lastKey === 'up'){
		for (let i = 0; i < boundaries.length; i++){
			const boundary = boundaries[i]
			if(
				collisionWithBorder({
					character: {...player, velocity: {
						x: 0,
						y: -speed
					}},
					border: boundary
				})
			) {
				player.velocity.y = 0
				break
			}
			else{
				player.velocity.y =- speed
			}
		}
	}
	else if (keys.right.pressed && lastKey === 'right'){
		for (let i = 0; i < boundaries.length; i++){
			const boundary = boundaries[i]
			if(
				collisionWithBorder({
					character: {...player, velocity: {
						x: +speed,
						y: 0
					}},
					border: boundary
				})
			) {
				player.velocity.x = 0
				break
			}
			else{
				player.velocity.x =+ speed
			}
		}
	}
	else if (keys.down.pressed && lastKey === 'down'){
		for (let i = 0; i < boundaries.length; i++){
			const boundary = boundaries[i]
			if(
				collisionWithBorder({
					character: {...player, velocity: {
						x: 0,
						y: +speed
					}},
					border: boundary
				})
			) {
				player.velocity.y = 0
				break
			}
			else{
				player.velocity.y =+ speed
			}
		}
	}
	else if (keys.left.pressed && lastKey === 'left'){
		for (let i = 0; i < boundaries.length; i++){
			const boundary = boundaries[i]
			if(
				collisionWithBorder({
					character: {...player, velocity: {
						x: -speed,
						y: 0
					}},
					border: boundary
				})
			) {
				player.velocity.x = 0
				break
			}
			else{
				player.velocity.x =- speed
			}
		}
	}
	
	
	boundaries.forEach((boundary) => {
		boundary.draw()

		if(
			collisionWithBorder({
				character: player,
				border: boundary
			})
		){
			//console.log('ces si sol pizda ti materina')
			player.velocity.x = 0
			player.velocity.y = 0
		}
	})
	player.update()
	
	
	
	if(keys.down.pressed == false && keys.right.pressed == false && keys.up.pressed == false && keys.left.pressed == false){
		player.velocity.y = 0
		player.velocity.x = 0
	}
	

	
} 
animate()



player.draw()

/*const boundary = new Boundary({
	position:{
		x: 0,
		y: 0
	}
})*/

