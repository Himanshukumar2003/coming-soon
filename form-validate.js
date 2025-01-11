// Select the form and all inputs
const form = document.getElementById('myForm');
const inputs = [
    {
        element: document.getElementById('fullName'),
        errorElement: document.getElementById('fullNameError'),
        errorMessage: 'Name must be at least 3 characters.',
        validate: (input) => input.value.trim().length >= 3,
    },
    {
        element: document.getElementById('email'),
        errorElement: document.getElementById('emailError'),
        errorMessage: 'Email must be at least 8 characters.',
        validate: (input) => input.value.trim().length >= 8,
    },
    {
        element: document.getElementById('phoneNumber'),
        errorElement: document.getElementById('phoneNumberError'),
        errorMessage: 'Phone must be at least 6 digits.',
        validate: (input) =>
            input.value.trim().length >= 6 && /^[0-9]+$/.test(input.value),
    },
];

// Real-time validation
inputs.forEach(({ element, errorElement, errorMessage, validate }) => {
    element.addEventListener('input', () => {
        if (validate(element)) {
            errorElement.textContent = '';
            element.classList.remove('is-invalid');
        } else {
            errorElement.textContent = errorMessage;
            element.classList.add('is-invalid');
        }
    });
});

// Validate all inputs on form submission
form.addEventListener('submit', (event) => {
    let isValid = true;

    inputs.forEach(({ element, errorElement, errorMessage, validate }) => {
        if (!validate(element)) {
            errorElement.textContent = errorMessage;
            element.classList.add('is-invalid');
            isValid = false;
        } else {
            errorElement.textContent = '';
            element.classList.remove('is-invalid');
        }
    });

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if invalid
    }
});
