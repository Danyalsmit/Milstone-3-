// Define the function that handles the form submission and updates the resume
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    // Collect data from the form inputs
    var name = document.getElementById("name-input")
        .value;
    var role = document.getElementById("role-input")
        .value;
    var email = document.getElementById("email-input")
        .value;
    var location = document.getElementById("location-input").value;
    var contact = document.getElementById("phone-input")
        .value;
    var objective = document.getElementById("objective-input").value;
    // Parse skills, education, experience, and certifications
    var skills = document.getElementById("skills-input").value.split(",");
    var education = document.getElementById("education-input").value.split(",");
    var experience = document.getElementById("experience-input").value.split(",");
    var certifications = document.getElementById("certifications-input").value.split(",");
    // Update the resume with the collected data
    document.getElementById("name").textContent = name || "John Doe";
    document.getElementById("role").textContent = role || "Full Stack Developer";
    document.getElementById("email").textContent = "Email: ".concat(email, " | Phone: ").concat(contact);
    document.getElementById("location").textContent = "Location: ".concat(location, " | LinkedIn: linkedin.com/in/johndoe");
    document.getElementById("objective").textContent =
        objective || "A highly skilled and motivated full-stack developer...";
    // Update the skills list
    var skillsList = document.getElementById("skills-list");
    skillsList.innerHTML = skills.map(function (s) { return "<li>".concat(s, "</li>"); }).join("");
    // Update the education list
    var educationList = document.getElementById("education-list");
    educationList.innerHTML = education.map(function (e) { return "<li>".concat(e, "</li>"); }).join("");
    // Update the experience list
    var experienceList = document.getElementById("experience-list");
    experienceList.innerHTML = experience
        .map(function (exp) { return "<li>".concat(exp, "</li>"); })
        .join("");
    // Update the certifications list
    var certificationsList = document.getElementById("certifications-list");
    certificationsList.innerHTML = certifications
        .map(function (cert) { return "<li>".concat(cert, "</li>"); })
        .join("");
    // Show the resume section and hide the form
    document.getElementById("form-section").style.display = "none";
    document.getElementById("resume-section").style.display = "block";
    // Update the last updated timestamp
    var lastUpdated = new Date().toLocaleString();
    document.getElementById("last-updated").textContent = lastUpdated;
}
// Attach event listener to the form submit
document
    .getElementById("resume-form")
    .addEventListener("submit", handleFormSubmit);
