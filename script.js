const
    form = document.querySelector("form"),
    nameInput = document.getElementById("name-input"),
    emailInput = document.getElementById("email-input"),
    countryInput = document.getElementById("country-input"),
    postcodeInput = document.getElementById("postcode-input"),
    passwordInput = document.getElementById("password-input"),
    confirmPasswordInput = document.getElementById("confirm-password-input"),
    submitBtn = document.getElementById("submit-button"),
    header = document.querySelector("#header h1"),
    checkbx = document.querySelector("#footer input"),
    checkboxText = document.getElementById("checkbox-text"),
    pleaseCheckText = document.querySelector("#checkbox-text span");

passwordInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

passwordInput.onblur = function() {
document.getElementById("message").style.display = "none";
}

passwordInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(passwordInput.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(passwordInput.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(passwordInput.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if(passwordInput.value.length >= 8) {
        wordLength.classList.remove("invalid");
        wordLength.classList.add("valid");
    } else {
        wordLength.classList.remove("valid");
        wordLength.classList.add("invalid");
    }
}

confirmPasswordInput.onkeyup = validate;

submitBtn.addEventListener("click", (e) => {
    // e.preventDefault();

    validate();
    if(checkbx.checked === false) {
        checkboxText.style.color = "red";
        // checkboxText.style.fontWeight = "bold";
        pleaseCheckText.style.display = "inline";
        e.preventDefault();
        return false;
    }

})

function validate() {

    if (nameInput.value === "") {
		nameInput.setCustomValidity("Please enter your full name.");
	} else if (nameInput.validity.patternMismatch) {
		nameInput.setCustomValidity("Name must consist of two words.");
	} else {
		nameInput.setCustomValidity("");
	}

    if (emailInput.value === "") {
		emailInput.setCustomValidity("Please enter a valid email address");
	} else if (emailInput.validity.patternMismatch) {
		emailInput.setCustomValidity("This email format is not valid");
	} else {
		emailInput.setCustomValidity("");
	}

    if (countryInput.value === "") {
		countryInput.setCustomValidity("Please enter your country name.");
	} else if (countryInput.validity.patternMismatch) {
		countryInput.setCustomValidity("Country must be longer than 2 characters.");
	} else {
		countryInput.setCustomValidity("");
	}

    if (postcodeInput.value === "") {
		postcodeInput.setCustomValidity("Please enter your postcode.");
	} else if (postcodeInput.validity.patternMismatch) {
		postcodeInput.setCustomValidity("Postcode must be longer than 2 characters.");
	} else {
		postcodeInput.setCustomValidity("");
	}

    if (passwordInput.value === "") {
		passwordInput.setCustomValidity("Please enter your password.");
	} else if (passwordInput.validity.patternMismatch) {
		passwordInput.setCustomValidity("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.");
	} else {
		passwordInput.setCustomValidity("");
	}

    if(passwordInput.value != confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity("Passwords do not match");
    } else {
        confirmPasswordInput.setCustomValidity('');
    }

}

