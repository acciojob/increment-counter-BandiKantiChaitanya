//your JS code here. If required.
let counter = document.getElementById('counter');
let incrementBtn = document.getElementById('incrementBtn');
// let body=document.getElementByTag('body')
function increment() {
    let currentCount = parseInt(counter.innerText);
    counter.innerText = currentCount + 1;
    displayCount.innerText = `Current count: ${counter.innerText}`;
}

incrementBtn.addEventListener('click', increment);
