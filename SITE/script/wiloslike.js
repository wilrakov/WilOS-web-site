let comptLike = 0;
let comptDislike = 0;

function like() {
	comptLike++;
	document.getElementById("likes").textContent = comptLike;
	console.log("Like : " + comptLike);
	return 0;
}
function dislike() {
	comptDislike++;
	document.getElementById("dislikes").textContent = comptDislike;
	console.log("Dislike : " + comptDislike);
	return 0;
}