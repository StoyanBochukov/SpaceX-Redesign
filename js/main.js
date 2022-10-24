const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const mobile = document.getElementById('mobile-menu')
const counters = document.querySelectorAll('.counter')
let scrollStarted = false

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    overlay.classList.toggle('overlay-show')
    document.body.classList.toggle('stop-scrolling')
    mobile.classList.toggle('hamburger-open')
});

document.addEventListener('scroll', scrollPage)


function scrollPage() {
    const scrollPossition = window.scrollY;
    if(scrollPossition > 100 && !scrollStarted){
        countUp()
        scrollStarted = true
    }else if(scrollPossition < 100 && scrollStarted){
        resetCounter()
        scrollStarted = false
    }
}


function countUp(){
    counters.forEach((counter) => {
        counter.innerHTML = '0'

        const updateCounter = () => {
            const target = Number(counter.getAttribute('data-target'))
            //Get current counter value (number)
            const c = +counter.innerHTML;
            //Create an increment
            const increment = target / 100;
            //If counter is less than target then add the increment
            if(c < target){
                counter.innerHTML = `${Math.ceil(c + increment)}`
                setTimeout(updateCounter, 75);
            }else{
                counter.innerHTML = target
            }
        }

        updateCounter()
    })
}

function resetCounter(){
    counters.forEach((counter) => counter.innerHTML = 0)
}


