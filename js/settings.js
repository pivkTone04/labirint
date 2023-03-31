document.getElementById("game").classList.replace("show", "hide")
document.getElementById('game_level').classList.replace("hide","show")

let x=1;
function openInfo(game, second_display, cInfo){
	

		if(x==0){
			clear_all();
			x=1;
		}
	
	
	 if(x==1){
		clear_all();
		document.getElementById(game).classList.replace("show", "hide")
		document.getElementById(second_display).classList.replace("hide","show")
		x=0
	}
	
		clear_all_side_tabs();
		document.getElementById(cInfo).classList.toggle("c_stay_there")
	
}


function clear_all(){
	document.getElementById('game').classList.replace("hide","show")
	document.getElementById('game_info').classList.replace("show","hide")
	document.getElementById('game_exit').classList.replace("show","hide")
	document.getElementById('game_setting').classList.replace("show","hide")
	document.getElementById('game_level').classList.replace("show","hide")
	document.getElementById('game_menu').classList.replace("show","hide")
}

function clear_all_side_tabs(){
	document.getElementById('cMenu').classList.remove("c_stay_there")
	document.getElementById('cLevel').classList.remove("c_stay_there")
	document.getElementById('cSetting').classList.remove("c_stay_there")
	document.getElementById('cInfo').classList.remove("c_stay_there")
	document.getElementById('cExit').classList.remove("c_stay_there")
}

function close_setting(){
	clear_all();
	clear_all_side_tabs();
}
let c=0;
let a=0;
let b=0;
let d=0;
function open_sound(e){
	document.getElementById(e).classList.toggle("sound_open")
	
	arrow_switchS();
}

function open_keybinds(e){	
	document.getElementById(e).classList.toggle("keybinds_open")
	
	arrow_switchK();
}

function open_level(e){
	document.getElementById(e).classList.toggle("level_open")
	
	arrow_switchL();
}

function open_comming(e){
	document.getElementById(e).classList.toggle("level_open")
	
	arrow_switchC();
}



function arrow_switchC(){
	if(d==0){
		document.getElementById("iArrowComming").classList.replace("arrow_down","arrow_up")
		d=1
	}
	else{
		document.getElementById("iArrowComming").classList.replace("arrow_up","arrow_down")
		d=0
	}
}


function arrow_switchL(){
	if(c==0){
		document.getElementById("iArrowLevel").classList.replace("arrow_down","arrow_up")
		c=1
	}
	else{
		document.getElementById("iArrowLevel").classList.replace("arrow_up","arrow_down")
		c=0
	}
}






function arrow_switchS(){
	if(a==0){
		document.getElementById("iArrowSound").classList.replace("arrow_down","arrow_up")
		a=1
	}
	else{
		document.getElementById("iArrowSound").classList.replace("arrow_up","arrow_down")
		a=0
	}
}


function arrow_switchK(){
	if(b==0){
		document.getElementById("iArrowKeybinds").classList.replace("arrow_down","arrow_up")
		b=1
	}
	else{
		document.getElementById("iArrowKeybinds").classList.replace("arrow_up","arrow_down")
		b=0
	}
}





