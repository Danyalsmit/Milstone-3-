// function that handles the form submission
function handleFormSubmit(event: Event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Collect data from the form inputs
  const name = (document.getElementById("name-input") as HTMLInputElement)
    .value;
  const role = (document.getElementById("role-input") as HTMLInputElement)
    .value;
  const email = (document.getElementById("email-input") as HTMLInputElement)
    .value;
  const location = (
    document.getElementById("location-input") as HTMLInputElement
  ).value;
  const contact = (document.getElementById("phone-input") as HTMLInputElement)
    .value;
  const objective = (
    document.getElementById("objective-input") as HTMLTextAreaElement
  ).value;

  // Parse skills, education, experience, and certifications
  const skills = (
    document.getElementById("skills-input") as HTMLTextAreaElement
  ).value.split(",");
  const education = (
    document.getElementById("education-input") as HTMLTextAreaElement
  ).value.split(",");
  const experience = (
    document.getElementById("experience-input") as HTMLTextAreaElement
  ).value.split(",");
  const certifications = (
    document.getElementById("certifications-input") as HTMLTextAreaElement
  ).value.split(",");

  // Update the resume with the collected data
  document.getElementById("name")!.textContent = name || "Danyal";
  document.getElementById("role")!.textContent = role || "Full Stack Developer";
  document.getElementById(
    "email"
  )!.textContent = `Email: ${email} | Phone: ${contact}`;
  document.getElementById(
    "location"
  )!.textContent = `Location: ${location} | LinkedIn: linkedin.com/`;
  document.getElementById("objective")!.textContent =
    objective || "A highly skilled and motivated full-stack developer...";

  // Update the skills list
  const skillsList = document.getElementById("skills-list")!;
  skillsList.innerHTML = skills.map((s) => `<li>${s}</li>`).join("");

  // Update the education list
  const educationList = document.getElementById("education-list")!;
  educationList.innerHTML = education.map((e) => `<li>${e}</li>`).join("");

  // Update the experience list
  const experienceList = document.getElementById("experience-list")!;
  experienceList.innerHTML = experience
    .map((exp) => `<li>${exp}</li>`)
    .join("");

  // Update the certifications list
  const certificationsList = document.getElementById("certifications-list")!;
  certificationsList.innerHTML = certifications
    .map((cert) => `<li>${cert}</li>`)
    .join("");

  // Show the resume section and hide the form
  document.getElementById("form-section")!.style.display = "none";
  document.getElementById("resume-section")!.style.display = "block";

  // Update the last updated timestamp
  const lastUpdated = new Date().toLocaleString();
  document.getElementById("last-updated")!.textContent = lastUpdated;
}

// Attach event listener to the form submit
document
  .getElementById("resume-form")!
  .addEventListener("submit", handleFormSubmit);
