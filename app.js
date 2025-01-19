const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});

document.getElementById("quizForm").addEventListener("submit", function (event) {
	event.preventDefault(); // Prevent form submission from refreshing the page
  
	// Get all answers
	const q1 = document.querySelector('input[name="q1"]:checked');
	const q2 = document.querySelector('input[name="q2"]:checked');
	const q3 = document.querySelector('input[name="q3"]:checked');
  
	// Check if all questions are answered
	if (!q1 || !q2 || !q3) {
		alert("Please answer all the questions.");
		return;
	}
  
	// Calculate the result based on selected answers
	let score = 0;
  
	// Add points based on answers
	if (q1.value === "good") score++;
	if (q1.value === "average") score;
	if (q1.value === "bad") score--;
  
	if (q2.value === "good") score++;
	if (q2.value === "average") score;
	if (q2.value === "bad") score--;
  
	if (q3.value === "good") score++;
	if (q3.value === "average") score;
	if (q3.value === "bad") score--;
  
	// Determine the result
	let result = "";
	if (score >= 2) {
		result = "You have excellent awareness about ecosystems!";
	} else if (score === 1) {
		result = "Your ecosystem knowledge is average. Keep learning!";
	} else {
		result = "Your ecosystem knowledge needs improvement. Consider exploring resources to learn more.";
	}
  
	// Show the result in the modal
	document.getElementById("result-text").textContent = result;
  
	// Display the modal
	const modal = document.getElementById("resultModal");
	modal.style.display = "block";
});

// Close the modal when the user clicks the close button
document.getElementById("closeModal").addEventListener("click", function() {
	const modal = document.getElementById("resultModal");
	modal.style.display = "none";
});

// Close the modal if the user clicks anywhere outside the modal content
window.addEventListener("click", function(event) {
	const modal = document.getElementById("resultModal");
	if (event.target === modal) {
		modal.style.display = "none";
	}
});

// Get the close button element
const closeButton = document.getElementById('close-btn');
const resultModal = document.getElementById('result');

// Add event listener to close button
closeButton.addEventListener('click', function (event) {	
	event.preventDefault(); // Prevent page refresh
	resultModal.style.display = 'none'; // Hide the modal
	window.location.reload(true);
});
