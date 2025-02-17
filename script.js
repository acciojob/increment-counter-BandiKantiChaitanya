//your JS code here. If required.
let counter = document.getElementById('counter');
let incrementBtn = document.getElementById('incrementBtn');
let body=document.getElementByTag('body')
function increment() {
	let currentCount = parseInt(counter.innerText);
	currentCount=currentCount+1
	alert(`${currentCount}`)
	counter.innerText=currentCount
}
