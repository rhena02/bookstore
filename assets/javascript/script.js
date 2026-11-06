//HAMBURGER MENU
const menuButton = document.getElementById("menuButton");
const hamburger = document.getElementById("hamburger");

if (menuButton && hamburger) {

    menuButton.addEventListener("click", function() {

        if (hamburger.style.display === "block") {
            hamburger.style.display = "none";
        } else {
            hamburger.style.display = "block";
        }
    });
}
//BOOK SEARCH

const bookSearch = document.getElementById("bookSearch");
const books = document.querySelectorAll(".book");

if (bookSearch) {

    bookSearch.addEventListener("input", function() {

        const searchValue = bookSearch.value.toLowerCase();

        books.forEach(function(book) {

            const bookDetails = book.textContent.toLowerCase();

            if (bookDetails.includes(searchValue)) {
                book.style.display = "";
            } else {
                book.style.display = "none";
            }
        });
    });
}
//BOOK DETAILS MODAL
const modal = document.createElement("div");
modal.id = "bookModal";
modal.className = "book-modal";

const modalContent = document.createElement("div");
modalContent.className = "modal-content";

const closeButton = document.createElement("button");
closeButton.textContent = "×";
closeButton.type = "button";
closeButton.className = "close-modal";

const modalImage = document.createElement("img");
modalImage.className = "modal-image";
modalImage.alt = "Book cover";

const modalTitle = document.createElement("h2");
const modalDetails = document.createElement("div");

modalContent.append(
    closeButton,
    modalImage,
    modalTitle,
    modalDetails
);

modal.appendChild(modalContent);
document.body.appendChild(modal);


// Open modal when View Book is clicked
books.forEach(function(book) {

    const viewLink = Array.from(book.querySelectorAll("a")).find(
        function(link) {
            return link.textContent.trim().toLowerCase() === "view book";
        }
    );

    if (viewLink) {

        viewLink.addEventListener("click", function(e) {

            e.preventDefault();

            const image = book.querySelector("img");
            const title = book.querySelector("h2, h3, h4");

            modalImage.src = image ? image.src : "";
            modalTitle.textContent = title
                ? title.textContent
                : "Book Details";

            modalDetails.textContent = "";

            const paragraphs = book.querySelectorAll("p");

            paragraphs.forEach(function(paragraph) {

                const detail = document.createElement("p");
                detail.textContent = paragraph.textContent;

                modalDetails.appendChild(detail);

            });

            modal.style.display = "flex";

        });

    }

});


// Close modal

closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(e) {

    if (e.target === modal) {
        modal.style.display = "none";
    }

});

document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {
        modal.style.display = "none";
    }

});


//REGISTRATION FORM

const registerForm = document.getElementById("registerForm");

const fullName = document.getElementById("fullName");
const username = document.getElementById("username");
const registerEmail = document.getElementById("email");
const registerPassword = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const userError = document.getElementById("userError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const confirmError = document.getElementById("confirmError");

if (registerForm) {

    registerForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let isValid = true;

        if (fullName.value.trim() === "") {
            nameError.textContent = "Full name is required";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        if (username.value.trim() === "") {
            userError.textContent = "Username is required";
            isValid = false;
        } else {
            userError.textContent = "";
        }

        if (registerEmail.value.trim() === "") {
            emailError.textContent = "Email is required";
            isValid = false;
        } else if (!registerEmail.validity.valid) {
            emailError.textContent = "Enter a valid email address";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        if (registerPassword.value.trim() === "") {
            passError.textContent = "Password is required";
            isValid = false;
        } else {
            passError.textContent = "";
        }

        if (confirmPassword.value.trim() === "") {
            confirmError.textContent = "Confirm your password";
            isValid = false;
        } else if (registerPassword.value !== confirmPassword.value) {
            confirmError.textContent = "Passwords do not match";
            isValid = false;
        } else {
            confirmError.textContent = "";
        }

        if (isValid) {
            alert("Registration form validated successfully!");
        }
    });
}
// ACCOUNT / SIGN-IN FORM

const accountForm = document.getElementById("accountForm");

const accountEmail = document.getElementById("accountEmail");
const accountPassword = document.getElementById("accountPassword");

const accountEmailError = document.getElementById("accountEmailError");
const accountPassError = document.getElementById("accountPassError");

if (accountForm) {

    accountForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let isValid = true;

        if (accountEmail.value.trim() === "") {
            accountEmailError.textContent = "Email is required";
            isValid = false;
        } else if (!accountEmail.validity.valid) {
            accountEmailError.textContent = "Enter a valid email";
            isValid = false;
        } else {
            accountEmailError.textContent = "";
        }

        if (accountPassword.value.trim() === "") {
            accountPassError.textContent = "Password is required";
            isValid = false;
        } else {
            accountPassError.textContent = "";
        }

        if (isValid) {
            alert("Sign-in form validated successfully!");
        }
    });
}
//CONTACT FORM

const contactForm = document.getElementById("contactForm");

const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactSubject = document.getElementById("contactSubject");
const contactMessage = document.getElementById("contactMessage");

const contactNameError = document.getElementById("contactNameError");
const contactEmailError = document.getElementById("contactEmailError");
const contactSubjectError = document.getElementById("contactSubjectError");
const contactMessageError = document.getElementById("contactMessageError");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        let isValid = true;

        if (contactName.value.trim() === "") {
            contactNameError.textContent = "Name is required";
            isValid = false;
        } else {
            contactNameError.textContent = "";
        }

        if (contactEmail.value.trim() === "") {
            contactEmailError.textContent = "Email is required";
            isValid = false;
        } else if (!contactEmail.validity.valid) {
            contactEmailError.textContent = "Enter a valid email";
            isValid = false;
        } else {
            contactEmailError.textContent = "";
        }

        if (contactSubject.value.trim() === "") {
            contactSubjectError.textContent = "Subject is required";
            isValid = false;
        } else {
            contactSubjectError.textContent = "";
        }

        if (contactMessage.value.trim() === "") {
            contactMessageError.textContent = "Message is required";
            isValid = false;
        } else {
            contactMessageError.textContent = "";
        }

        if (!isValid) {
            e.preventDefault();
        }

    });

}
//BOOK REQUEST FORM
const requestForm = document.getElementById("requestForm");

const requestName = document.getElementById("requestName");
const requestEmail = document.getElementById("requestEmail");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const requestMessage = document.getElementById("requestMessage");

const requestNameError = document.getElementById("requestNameError");
const requestEmailError = document.getElementById("requestEmailError");
const bookTitleError = document.getElementById("bookTitleError");

if (requestForm) {

    requestForm.addEventListener("submit", function(e) {

        let isValid = true;

        if (requestName.value.trim() === "") {
            requestNameError.textContent = "Name is required";
            isValid = false;
        } else {
            requestNameError.textContent = "";
        }

        if (requestEmail.value.trim() === "") {
            requestEmailError.textContent = "Email is required";
            isValid = false;
        } else if (!requestEmail.validity.valid) {
            requestEmailError.textContent = "Enter a valid email";
            isValid = false;
        } else {
            requestEmailError.textContent = "";
        }

        if (bookTitle.value.trim() === "") {
            bookTitleError.textContent = "Enter the book title";
            isValid = false;
        } else {
            bookTitleError.textContent = "";
        }

        if (!isValid) {
            e.preventDefault();
        }

    });

}


//RESET FORM ERROR MESSAGES

const resetButtons = document.querySelectorAll(
    'button[type="reset"], input[type="reset"]'
);

resetButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const form = button.closest("form");

        if (form) {

            const errors = form.querySelectorAll(".error-message");

            errors.forEach(function(error) {
                error.textContent = "";
            });

        }

    });

});