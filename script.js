// Taking elements from HTML
var inputField = document.querySelector(".inputField");
var main = document.querySelector(".resume-builder");
var outputContainer = document.querySelector(".output_container");
var isHidden = true;
// Function to toggle between input form and resume preview
function hide() {
    var _a;
    if (isHidden) {
        // Hide the input form and show the resume preview
        main.style.display = "none";
        isHidden = false;
        var profilePictureInput = inputField.querySelector("#profilePicture");
        var profilePictureFile = (_a = profilePictureInput === null || profilePictureInput === void 0 ? void 0 : profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = "";
        if (profilePictureFile) {
            profilePictureURL = URL.createObjectURL(profilePictureFile);
        }
        outputContainer.style.display = "block";
        outputContainer.innerHTML = "\n            <div class=\"output\">\n                <div class=\"heading\">\n                ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Image\" class=\"profile-pic\">") : "", "\n                    <h1>").concat(inputField["name"].value, "</h1>\n                    <h4>").concat(inputField["title"].value, "</h4>\n                    \n                </div>\n                <div class=\"info\">\n                    <div class=\"left\">\n                        <div class=\"box\">\n                            <h2>Objective</h2>\n                            <p>").concat(inputField["objective"].value, "</p>\n                        </div>\n                        <div class=\"box\">\n                            <h2>Skills</h2>\n                            <p>\n                            ").concat(inputField["skills"].value, "</p>\n                        </div>\n                        <div class=\"box\">\n                            <h2>Academic Details</h2>\n                            <p>").concat(inputField["academic_details"].value, "</p>\n                        </div>\n                        <div class=\"box\">\n                            <h2>Contact</h2>\n                            <p>").concat(inputField["contact"].value, "</p>\n                        </div>\n                    </div>\n                    <div class=\"right\">\n                        <div class=\"box\">\n                            <h2>Work Experience</h2>\n                            <p>").concat(inputField["work_experience"].value, "</p>\n                        </div>\n                        <div class=\"box\">\n                            <h2>Achievements</h2>\n                            <p>").concat(inputField["achievements"].value, "</p>\n                        </div>\n                        <div class=\"box\">\n                            <h2>Projects</h2>\n                            <p>").concat(inputField["projects"].value, "</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <button onclick=\"print()\">Print Resume</button>\n        ");
    }
    else {
        // Show the input form and hide the resume preview
        main.style.display = "block";
        isHidden = true;
        outputContainer.style.display = "none";
        outputContainer.innerHTML = "";
    }
}
