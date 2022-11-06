let hour = 0;
let minute = 0;
let second = 0;
let play = 0;

const appendHour = document.getElementById('hour')
const appendMinute = document.getElementById('minute')
const appendSecond = document.getElementById('second')
const buttonp_p = document.getElementById('b1')

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
}