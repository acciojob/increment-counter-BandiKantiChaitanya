//your JS code here. If required.
let counter = document.getElementById('counter');
let incrementBtn = document.getElementById('incrementBtn');
// let body=document.getElementByTag('body')
incrementBtn.addEventListener('click',function() {
    let currentCount = parseInt(counter.innerText);
    alert(currentCount)
    counter.innerText = currentCount + 1;
})


