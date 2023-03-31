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


const map1=[
    ['#', '#', '#', '#', '#', '#', '#', '#', '#','#', '#', '#', '#', '#', '#', '#', '#', '#','#', '#', '#', '#', '#', '#', '#'],
	['#', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ',' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ','#', ' ', '#', ' ', '#', ' ', '#'],
	['#', '#', '#', '#', ' ', '#', ' ', '#', ' ','#', '#', '#', '#', ' ', '#', ' ', '#', ' ','#', ' ', '#', ' ', '#', ' ', '#'],
	['#', ' ', ' ', '#', ' ', '#', ' ', '#', ' ',' ', ' ', '#', ' ', ' ', '#', ' ', '#', ' ','#', ' ', ' ', ' ', '#', ' ', '#'],
	['#', ' ', '#', '#', '#', '#', ' ', '#', ' ','#', ' ', '#', ' ', '#', '#', ' ', '#', ' ','#', ' ', '#', ' ', '#', ' ', '#'],
	['#', ' ', '#', '#', ' ', '#', ' ', '#', '#','#', ' ', '#', ' ', '#', '#', ' ', '#', ' ',' ', ' ', '#', ' ', '#', ' ', '#'],
	['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ','#', ' ', '#', ' ', ' ', '#', ' ', '#', '#','#', '#', '#', '#', '#', ' ', '#'],
	['#', ' ', '#', ' ', '#', '#', '#', '#', ' ','#', ' ', '#', '#', ' ', '#', ' ', ' ', ' ','#', ' ', ' ', '#', '#', ' ', '#'],
	['#', ' ', '#', ' ', ' ', ' ', ' ', '#', ' ','#', ' ', ' ', '#', ' ', '#', ' ', '#', '#','#', '#', ' ', ' ', '#', ' ', '#'],
	['#', ' ', '#', ' ', '#', '#', ' ', '#', ' ','#', '#', '#', '#', ' ', '#', ' ', '#', ' ',' ', ' ', ' ', '#', '#', ' ', '#'],
	['#', ' ', ' ', ' ', ' ', '#', ' ', '#', ' ',' ', '#', ' ', ' ', ' ', '#', ' ', '#', ' ','#', '#', ' ', ' ', ' ', ' ', '#'],
	['#', '#', '#', '#', '#', '#', ' ', '#', ' ','#', '#', ' ', '#', ' ', '#', ' ', '#', ' ',' ', ' ', ' ', '#', '#', ' ', '#'],
	['#', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ',' ', '#', ' ', ' ', ' ', '#', ' ', '#', '#',' ', '#', '#', '#', ' ', ' ', '#'],
	['#', ' ', '#', '#', '#', '#', '#', '#', '#',' ', '#', ' ', '#', '#', '#', ' ', ' ', '#',' ', ' ', ' ', '#', ' ', '#', '#'],
	['#', ' ', '#', ' ', ' ', ' ', ' ', ' ', '#',' ', '#', ' ', '#', ' ', '#', '#', ' ', '#','#', '#', ' ', '#', ' ', ' ', '#'],
	['#', ' ', '#', ' ', '#', '#', '#', ' ', '#',' ', '#', ' ', '#', ' ', ' ', ' ', ' ', '#',' ', ' ', ' ', '#', '#', ' ', '#'],
	['#', ' ', '#', ' ', '#', ' ', '#', ' ', '#',' ', '#', ' ', '#', ' ', '#', '#', ' ', '#','#', '#', ' ', '#', ' ', ' ', '#'],
	['#', ' ', '#', ' ', '#', ' ', '#', ' ', '#',' ', '#', ' ', '#', ' ', ' ', '#', ' ', ' ',' ', ' ', ' ', '#', ' ', '#', '#'],
	['#', ' ', '#', ' ', ' ', ' ', '#', ' ', '#',' ', ' ', ' ', '#', '#', ' ', '#', '#', '#','#', '#', '#', '#', ' ', ' ', '#'],
	['#', ' ', '#', '#', '#', '#', '#', ' ', '#','#', '#', ' ', '#', ' ', ' ', ' ', ' ', '#',' ', ' ', ' ', '#', '#', ' ', '#'],
	['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', '#', ' ', '#', ' ', '#', '#', ' ', '#',' ', '#', ' ', '#', ' ', ' ', '#'],
	['#', '#', '#', '#', '#', '#', '#', '#', '#',' ', '#', ' ', '#', ' ', ' ', '#', ' ', '#',' ', '#', ' ', '#', ' ', '#', '#'],
	['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', '#',' ', '#', '#', '#', '#', ' ', '#', ' ', '#',' ', '#', ' ', '#', ' ', ' ', '#'],
	['#', ' ', '#', ' ', ' ', ' ', '#', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ',' ', '#', ' ', '#', '#', ' ', '#'],
	['#', '#', '#', '#', '#', '#', '#', '#', '#','#', '#', '#', '#', '#', '#', '#', '#', '#','#', '#', '#', '#', '#', '#', '#'],
]


const level=map1;