const jobSearchForm = document.getElementById("jobSearchForm");
const profileCard = document.getElementById("profileCard");

jobSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(jobSearchForm);

    const profileData = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        jobRole: formData.get("jobRole"),
        location: formData.get("location"),
        experience: formData.get("experience"),
        skills: formData.get("skills"),
        jobType: formData.get("jobType")
    };

    profileCard.classList.remove("empty-state");

    profileCard.innerHTML = `
        <h3>${profileData.fullName}</h3>
        <p class="profile-item"><strong>Email:</strong> ${profileData.email}</p>
        <p class="profile-item"><strong>Phone:</strong> ${profileData.phone}</p>
        <p class="profile-item"><strong>Preferred Role:</strong> ${profileData.jobRole}</p>
        <p class="profile-item"><strong>Preferred Location:</strong> ${profileData.location}</p>
        <p class="profile-item"><strong>Experience:</strong> ${profileData.experience}</p>
        <p class="profile-item"><strong>Key Skills:</strong> ${profileData.skills}</p>
        <p class="profile-item"><strong>Job Type:</strong> ${profileData.jobType}</p>
    `;
});
