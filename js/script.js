let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow =   document.querySelector('.h'),
    hoursBox =    document.querySelector('.hours'),
    minutesBox =  document.querySelector('.minutes');
    

// new Date() - отдает всю информацию о дате и времени
    
function start() {
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours();
        
        secondArrow.style = `transform: rotate(${seconds * 6}deg)`
        minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
        hourArrow.style = `transform: rotate(${hours * 30}deg)`
        
        
        hoursBox.innerHTML = hours < 10 ? '0' + hours : hours
        minutesBox.innerHTML = minutes < 10 ? '0' + minutes : minutes
        
        setTimeout(() => start(), 1000)
        
}

start()


// рекурсия - это когда функция запускает саму себя




// let i = 1

// function loop() {
//     if(i < 100) {
//         console.log(i);
//         i++
//         setTimeout(() => loop(), 1000)
//     } 
// }

// loop()




let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');
    
links.forEach((el,i) => {
    el.addEventListener('click', () => {
        removeActive()
        el.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive () {
    links.forEach((el,i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}



let stopSeconds = document.querySelector('.stopwatch__seconds'),
    stopMinutes = document.querySelector('.stopwatch__minutes'),
    stopHours = document.querySelector('.stopwatch__hours'),
    btn = document.querySelector('.stopwatch__btn'),
    span = document.querySelector('.tabsLink__span');
    
let i = 0;  
    
btn.addEventListener('click', () => {
    if(btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        span.classList.add('active')
        setTimeout(() => secundomer(btn, i), 1000)
    }else if(btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
        span.classList.remove('active')
        span.classList.add('active_clear')
    }else {
        btn.innerHTML = 'start'
        span.classList.remove('active_clear')
        stopSeconds.innerHTML = 0
        stopMinutes.innerHTML = 0
        stopHours.innerHTML = 0
    }
})


function secundomer(button, i) {
    if(button.innerHTML == 'stop') {
       if(i == 59) {
            i = 0
            stopSeconds.innerHTML = i
            if(stopMinutes.innerHTML == 59) {
                stopMinutes.innerHTML = 0;
                stopHours.innerHTML++
            }else {
                stopMinutes.innerHTML++
            }
       }else {
            i++
            stopSeconds.innerHTML = i
       }
       
       setTimeout(() => secundomer(button,i), 1000)
       
    }
}