let hour = 0;
let minute = 0;
let second = 0;
let play = 0;
let study = 1; //if study is 0; the person will be studying, 1, will rest

const appendHour = document.getElementById('hour')
const appendMinute = document.getElementById('minute')
const appendSecond = document.getElementById('second')
const buttonp_p = document.getElementById('b1')
const nextToDo = document.getElementById('studyRest')
const nextMinute = document.getElementById('srTime')

buttonp_p.onclick = function(){
	if (play == 0){
		play ++;
		buttonp_p.textContent = 'Pause'
		intervalId = setInterval(operateTimer, 1000)
	}
	
	else{
		play --;
		buttonp_p.textContent = 'Resume'
		clearInterval(intervalId)
	}
}

function operateTimer(){
	second ++;
	appendSecond.textContent = second > 9 ? second : '0' + second

	if (second > 59){
		minute ++;
		appendMinute.textContent = minute > 9 ? minute : '0' + minute
		second = 0
		appendSecond.textContent = '00'
	}

	if (minute > 59){
		hour ++;
		appendHour.textContent = hour > 9 ? hour : '0' + hour
		minute = 0
		appendMinute.textContent = '00'
	}

	if (((minute == 25) && (study == 1)) || ((minute == 5) && (study == 0))){
		minute = 0
		second = 0
		appendSecond.textContent = '00'
		appendMinute.textContent = '00'
		nextWhatToDo()
	}
}

function nextWhatToDo(){
	if (study == 0){ //will study
		nextToDo.textContent = 'rest'
		nextMinute.textContent = '5'
		study ++;
	}
		
	else{
		nextToDo.textContent = 'study'
		nextMinute.textContent = '25'
		study --;
	}
}