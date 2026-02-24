const jobPostingForm = document.getElementById("jobPostingForm");
const jobCardsContainer = document.getElementById("jobCardsContainer");
const emptyState = document.getElementById("emptyState");

jobPostingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(jobPostingForm);

    const jobData = {
        jobTitle: formData.get("jobTitle"),
        companyName: formData.get("companyName"),
        location: formData.get("location"),
        jobType: formData.get("jobType"),
        salary: formData.get("salary"),
        experience: formData.get("experience"),
        description: formData.get("description")
    };

    if (emptyState) {
        emptyState.remove();
    }

    const jobCard = document.createElement("article");
    jobCard.className = "job-card";

    jobCard.innerHTML = `
        <h3>${jobData.jobTitle}</h3>
        <p class="job-company">${jobData.companyName}</p>
        <p class="job-meta"><strong>Location:</strong> ${jobData.location}</p>
        <p class="job-meta"><strong>Job Type:</strong> ${jobData.jobType}</p>
        <p class="job-meta"><strong>Salary:</strong> ${jobData.salary}</p>
        <p class="job-meta"><strong>Experience:</strong> ${jobData.experience}</p>
        <p class="job-description">${jobData.description}</p>
    `;

    jobCardsContainer.prepend(jobCard);
    jobPostingForm.reset();
});
