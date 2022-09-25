const houre = document.querySelector(".hour")
const minutee = document.querySelector(".minutes")
const seconde = document.querySelector(".second")

const updateTime = () => {
    setTimeout(updateTime, 1000)
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second  = date.getSeconds()

const currentHour = (hour / 12) * 360;
houre.style.transform = `rotate(${currentHour}deg)`

const currentMinute = (minute / 60) * 360;
minutee.style.transform = `rotate(${currentMinute}deg)`

const currentSecond = (second / 60) * 360;
seconde.style.transform = `rotate(${currentSecond}deg)`

console.log(currentSecond );

}

 
updateTime()


