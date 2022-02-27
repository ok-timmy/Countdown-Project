const form = document.getElementById('form');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const input = document.getElementById('date');
const submit = document.getElementById('submit');
const celeb = document.getElementById('celeb');
const text = document.getElementById('text');


form.addEventListener('submit', (e)=> {
    e.preventDefault();
    var myEvent = new Date(input.value);

    celeb.innerText = text.value; 

    console.log(input.value);
    Difference();
});



function Difference() {
    var myEvent = new Date(input.value);
    var today = new Date();

    const quotient1 = 1000*60*60*24;
    const diff = myEvent - today;

const daysValue = Math.floor(((((diff/1000)/60)/60)/24));
const hoursValue = Math.floor((diff%quotient1)/(1000*60*60));
const minutesValue = Math.floor((diff%quotient1)%(1000*60*60)/(1000*60));
const secondsValue =  Math.floor((diff%quotient1)%(1000*60*60)%(1000*60)/(1000));

  
  days.innerHTML = addZeros(daysValue) + "<br/> Days";
  hours.innerHTML = addZeros(hoursValue) + "<br/> Hours";
  minutes.innerHTML = addZeros(minutesValue) + "<br/> Minutes";
  seconds.innerHTML = addZeros(secondsValue) + "<br/> Seconds";
  
 // console.log(daysValue, hoursValue,addZeros(minutesValue), addZeros(secondsValue));
  setInterval(Difference, 1000);
}

function addZeros(time) {
    if(time<10)
    {
        return '0'+ time;
    }

    else {
        return time;
    }
}

//Difference();

/* 
More Work:

1, Style it with random images to make it look beautiful.
2, Style the form too.
3, Make the countdown begin only when the submit button is clicked.
4, Once the countdown begins, replace the form wjth another button that says "Create a new countdown"
*/






