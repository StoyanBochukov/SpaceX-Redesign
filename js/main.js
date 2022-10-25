const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const mobile = document.getElementById('mobile-menu')
const counters = document.querySelectorAll('.counter')
const li1 = document.querySelector('.li1')
const li2 = document.querySelector('.li2')
const li3 = document.querySelector('.li3')
const li4 = document.querySelector('.li4')
const li5 = document.querySelector('.li5')
const li6 = document.querySelector('.li6')
const li7 = document.querySelector('.li7')
const li8 = document.querySelector('.li8')
const li9 = document.querySelector('.li9')
const li10 = document.querySelector('.li10')
const li11 = document.querySelector('.li11')
const li12 = document.querySelector('.li12')
let scrollStarted = false

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    overlay.classList.toggle('overlay-show')
    document.body.classList.toggle('stop-scrolling')
    mobile.classList.toggle('menu-open')
    li1.classList.toggle('li-1')
    li2.classList.toggle('li-2')
    li3.classList.toggle('li-3')
    li4.classList.toggle('li-4')
    li5.classList.toggle('li-5')
    li6.classList.toggle('li-6')
    li7.classList.toggle('li-7')
    li8.classList.toggle('li-8')
    li9.classList.toggle('li-9')
    li10.classList.toggle('li-10')
    li11.classList.toggle('li-11')
    li12.classList.toggle('li-12')
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


