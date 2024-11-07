// Taking elements from HTML
const inputField = document.querySelector(".inputField") as HTMLFormElement;
const main = document.querySelector(".resume-builder") as HTMLDivElement;
const outputContainer = document.querySelector(".output_container") as HTMLDivElement;

let isHidden = true;

// Function to toggle between input form and resume preview
function hide() {
    if (isHidden) {
        // Hide the input form and show the resume preview
        main.style.display = "none";
        isHidden = false;

        const profilePictureInput = inputField.querySelector("#profilePicture") as HTMLInputElement;
        const profilePictureFile = profilePictureInput?.files?.[0];
        let profilePictureURL = "";

        if (profilePictureFile) {
            profilePictureURL = URL.createObjectURL(profilePictureFile);
        }

        outputContainer.style.display = "block";
        outputContainer.innerHTML = `
            <div class="output">
                <div class="heading">
                ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Image" class="profile-pic">` : ""}
                    <h1>${(inputField["name"] as unknown as HTMLInputElement).value}</h1>
                    <h4>${(inputField["title"] as unknown as HTMLInputElement).value}</h4>
                    
                </div>
                <div class="info">
                    <div class="left">
                        <div class="box">
                            <h2>Objective</h2>
                            <p>${(inputField["objective"] as unknown as HTMLTextAreaElement).value}</p>
                        </div>
                        <div class="box">
                            <h2>Skills</h2>
                            <p>
                            ${(inputField["skills"] as unknown as HTMLTextAreaElement).value}</p>
                        </div>
                        <div class="box">
                            <h2>Academic Details</h2>
                            <p>${(inputField["academic_details"] as unknown as HTMLTextAreaElement).value}</p>
                        </div>
                        <div class="box">
                            <h2>Contact</h2>
                            <p>${(inputField["contact"] as unknown as HTMLInputElement).value}</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="box">
                            <h2>Work Experience</h2>
                            <p>${(inputField["work_experience"] as unknown as HTMLTextAreaElement).value}</p>
                        </div>
                        <div class="box">
                            <h2>Achievements</h2>
                            <p>${(inputField["achievements"] as unknown as HTMLTextAreaElement).value}</p>
                        </div>
                        <div class="box">
                            <h2>Projects</h2>
                            <p>${(inputField["projects"] as unknown as HTMLTextAreaElement).value}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onclick="print()">Print Resume</button>
        `;
    } else {
        // Show the input form and hide the resume preview
        main.style.display = "block";
        isHidden = true;

        outputContainer.style.display = "none";
        outputContainer.innerHTML = "";
    }
}
