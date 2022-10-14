console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted. Thanks!')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


const catphoto = document.querySelector("#cat-image")

function photo (event) {
		alert('Looking good!')
}

catphoto.addEventListener('mouseover', photo) 