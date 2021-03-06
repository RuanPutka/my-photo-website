var num_of_photos = 38;
// for random
// var backup_photos = Array.from({length: num_of_photos}, (x, i) => i+1);
var backup_photos = [
	1, 6, 33,
    2, 30, 31, 10,
	15, 16, 17,
	39, 42, 43, 44,
	24, 27, 23, 12, 19,
	45, 46].reverse();
var photos =  [].concat(backup_photos);
var round = 1;
removeElement(photos, 1); // remove cover photo from first round

function removeElement(array, value) {
	const index = array.indexOf(value);
	array.splice(index, 1);
};

function changeImage(mode, element_id) {
	document.getElementById(element_id).src = ``;

	if (photos.length == 0) {
		photos = [].concat(backup_photos);
		round += 1;
	};

	if (mode == "random") {
		var photo_number = photos[Math.floor(Math.random()*photos.length)];
		removeElement(photos, photo_number);
	} else if (mode == "normal") {
		var photo_number = photos.pop();
	}

	document.getElementById(element_id).src = `photos/${photo_number}.jpg`;
};

function stopAnimation() {
	var element = document.getElementById("aboutHeader");
	if (!element.classList.contains('paused'))
    {
        element.classList.add('paused');
        // element.style.property.animationPlayState = "paused";
    }
};