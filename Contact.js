document.addEventListener('DOMContentLoaded', function() {
  console.log('Contact form script loaded');

  // Get form and input elements
  const form = document.getElementById('contactForm');
  const nameInput = document.querySelector('[data-testid="test-contact-name"]');
  const emailInput = document.querySelector('[data-testid="test-contact-email"]');
  const subjectInput = document.querySelector('[data-testid="test-contact-subject"]');
  const messageInput = document.querySelector('[data-testid="test-contact-message"]');
  const successMessage = document.querySelector('[data-testid="test-contact-success"]');
  const submitButton = document.querySelector('[data-testid="test-contact-submit"]');

  // Get error message elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  // Check if all elements exist
  if (!form || !nameInput || !emailInput || !subjectInput || !messageInput) {
    console.error('Form elements not found!');
    return;
  }

  console.log('All form elements found successfully');

  // Check if we returned from a successful Formspree submission
  if (window.location.hash === '#success') {
    console.log('Detected successful form submission from hash');
    
    // Clear the form immediately
    form.reset();
    
    // Clear all error messages
    clearError(nameError, nameInput);
    clearError(emailError, emailInput);
    clearError(subjectError, subjectInput);
    clearError(messageError, messageInput);
    
    // Show success message
    showSuccessMessage();
    
    // Clean up the URL hash without reloading the page
    window.history.replaceState({}, document.title, window.location.pathname);
    
    // Reset everything after 5 seconds (hide success, show form again)
    setTimeout(function() {
      if (successMessage) {
        successMessage.style.display = 'none';
      }
      if (form) {
        form.style.display = 'block';
      }
    }, 50);
  }

  /**
   * Validates full name field
   */
  function validateName(name) {
    if (!name || name.trim() === '') {
      return {
        isValid: false,
        message: 'Full name is required'
      };
    }
    
    if (name.trim().length < 2) {
      return {
        isValid: false,
        message: 'Name must be at least 2 characters long'
      };
    }
    
    return { isValid: true, message: '' };
  }

  /**
   * Validates email field
   */
  function validateEmail(email) {
    if (!email || email.trim() === '') {
      return {
        isValid: false,
        message: 'Email address is required'
      };
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
      return {
        isValid: false,
        message: 'Please enter a valid email address (e.g., name@example.com)'
      };
    }
    
    return { isValid: true, message: '' };
  }

  /**
   * Validates subject field
   */
  function validateSubject(subject) {
    if (!subject || subject.trim() === '') {
      return {
        isValid: false,
        message: 'Subject is required'
      };
    }
    
    if (subject.trim().length < 3) {
      return {
        isValid: false,
        message: 'Subject must be at least 3 characters long'
      };
    }
    
    return { isValid: true, message: '' };
  }

  /**
   * Validates message field
   */
  function validateMessage(message) {
    if (!message || message.trim() === '') {
      return {
        isValid: false,
        message: 'Message is required'
      };
    }
    
    if (message.trim().length < 10) {
      return {
        isValid: false,
        message: `Message must be at least 10 characters long (current: ${message.trim().length})`
      };
    }
    
    return { isValid: true, message: '' };
  }

  /**
   * Displays error message for a field
   */
  function showError(errorElement, inputElement, message) {
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
    inputElement.classList.add('input-error');
    inputElement.setAttribute('aria-invalid', 'true');
  }

  /**
   * Clears error message for a field
   */
  function clearError(errorElement, inputElement) {
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    }
    inputElement.classList.remove('input-error');
    inputElement.setAttribute('aria-invalid', 'false');
  }

  /**
   * Validates a single field
   */
  function validateField(input, errorElement, validationFunction) {
    const result = validationFunction(input.value);
    
    if (!result.isValid) {
      showError(errorElement, input, result.message);
      return false;
    }
    
    clearError(errorElement, input);
    return true;
  }

  /**
   * Shows the success message and hides the form
   */
  function showSuccessMessage() {
    console.log('Showing success message');
    
    // Hide form
    if (form) {
      form.style.display = 'none';
    }
    
    // Show success message
    if (successMessage) {
      successMessage.style.display = 'block';
      successMessage.setAttribute('tabindex', '-1');
      successMessage.focus();
      
      // Scroll to success message
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  /**
   * Resets the form and hides success message
   */
  function resetForm() {
    console.log('Resetting form');
    
    form.reset();
    form.style.display = 'block';
    
    if (successMessage) {
      successMessage.style.display = 'none';
    }
    
    // Clear all error messages
    clearError(nameError, nameInput);
    clearError(emailError, emailInput);
    clearError(subjectError, subjectInput);
    clearError(messageError, messageInput);
  }

  // Real-time validation on blur
  nameInput.addEventListener('blur', function() {
    validateField(nameInput, nameError, validateName);
  });

  emailInput.addEventListener('blur', function() {
    validateField(emailInput, emailError, validateEmail);
  });

  subjectInput.addEventListener('blur', function() {
    validateField(subjectInput, subjectError, validateSubject);
  });

  messageInput.addEventListener('blur', function() {
    validateField(messageInput, messageError, validateMessage);
  });

  // Clear error on input
  nameInput.addEventListener('input', function() {
    if (nameError && nameError.textContent) {
      clearError(nameError, nameInput);
    }
  });

  emailInput.addEventListener('input', function() {
    if (emailError && emailError.textContent) {
      clearError(emailError, emailInput);
    }
  });

  subjectInput.addEventListener('input', function() {
    if (subjectError && subjectError.textContent) {
      clearError(subjectError, subjectInput);
    }
  });

  messageInput.addEventListener('input', function() {
    if (messageError && messageError.textContent) {
      clearError(messageError, messageInput);
    }
  });

  // Form submission handler
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form submitted');
    
    // Validate all fields
    const isNameValid = validateField(nameInput, nameError, validateName);
    const isEmailValid = validateField(emailInput, emailError, validateEmail);
    const isSubjectValid = validateField(subjectInput, subjectError, validateSubject);
    const isMessageValid = validateField(messageInput, messageError, validateMessage);
    
    console.log('Validation results:', {
      name: isNameValid,
      email: isEmailValid,
      subject: isSubjectValid,
      message: isMessageValid
    });
    
    // Check if all fields are valid
    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      console.log('Validation failed');
      
      // Focus on first invalid field
      if (!isNameValid) {
        nameInput.focus();
      } else if (!isEmailValid) {
        emailInput.focus();
      } else if (!isSubjectValid) {
        subjectInput.focus();
      } else if (!isMessageValid) {
        messageInput.focus();
      }
      return;
    }

    // All validations passed - let Formspree handle the submission naturally
    console.log('All validations passed! Submitting to Formspree...');
    
    // Let the form submit normally (with reCAPTCHA)
    form.submit();
  });

  console.log('Form event listeners attached successfully');
});