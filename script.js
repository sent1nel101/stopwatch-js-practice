// Factory function using a standard function to return an object
function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw')
        }
    }
}


const circle = createCircle(1)
circle.draw()

// Constructor function using constructor naming convention and 'this' keyword
function Circle(radius){
    radius
    this.draw = function(){
        console.log('drawn again')
    }
}


const circle2 = new Circle(1)
circle2.draw()



// Stopwatch wuth console and onscreen display

// global variables for DOM manipulation
var clock = document.querySelector('#clock')
var item1 = document.querySelector('#item1')
var item2 = document.querySelector('#item2')
var item3 = document.querySelector('#item3')

// Initialize and start the clock on the page
setInterval(()=> clock.textContent = new Date().toTimeString().slice(0, 8), 1000)
item3.innerHTML = "00:00:00"

// Stopwatch Object using constructor function and 'this' keyword
function Stopwatch(){
    let startTime, stopTime, sec, min, hrs, duration, running = 0

    // start the stopwatch and set variable values
    this.start = function(){
        if(running){
            console.log('Stopwatch is already running.')
        } else{
        console.log('Stopwatch has been started')
        item1.innerHTML = "The stopwatch has been started."
        running = true
        startTime = new Date()
        sec = startTime.getSeconds()
        min = startTime.getMinutes()
        hrs = startTime.getHours()      
        }
    }

    // stop the stopwatch and calculate the duration it ran then output the results to console and the DOM
    this.stop = function(){
          if(!running){
            console.log('Stopwatch is not running.')
        } else{
        console.log('Stopwatch has been stopped')
        item2.innerHTML = "The stopwatch has been stopped."
        running = false
        stopTime = new Date()
        sec -= stopTime.getSeconds()
        sec *= -1
        min -= stopTime.getMinutes()
        min *= -1
        hrs -= stopTime.getHours()
        hrs *= -1
            console.log(`
Start time was: ${startTime.toTimeString().slice(0,8)}
Stop time was: ${stopTime.toTimeString().slice(0,8)}

                     hh:mm:ss
The clock ran for    ${hrs.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`)

duration = `${hrs.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
            
            // Short timeout for the stop message to display for showing the results
            setTimeout(() => {
            item1.innerHTML = `The start time was ${startTime.toTimeString().slice(0,8)}.`
            item2.innerHTML = `The stop time was ${stopTime.toTimeString().slice(0,8)}.`
            item3.innerHTML = `The timer ran for ${duration}.`
            }, 1000)
        }
}

    // Reset the variables for the stopwatch
    this.reset = function(){
        running = false
        sec = 0
        min = 0
        hrs = 0
        item1.innerHTML = "Stopwatch has been stopped and reset."
        item2.innerHTML = ""
        item3.innerHTML = '00:00:00'
        console.log('Stopwatch has been stopped and reset.')
    }
}

const sw = new Stopwatch()