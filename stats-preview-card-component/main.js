const imageElement = document.getElementById('image');

const chooseImage = () => {
	if (window.innerWidth < 400) imageElement.src = './images/image-header-mobile.jpg';
	else imageElement.src = './images/image-header-desktop.jpg';
};

window.onload = chooseImage;
window.onresize = chooseImage;