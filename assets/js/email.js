// Add event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            sendMail();
        });
    }
});

function sendMail(){
    // Get form elements
    const sendBtn = document.getElementById("sendMessageBtn");
    const originalText = sendBtn.innerHTML;
    
    // Show loading state
    sendBtn.innerHTML = '<i class="ri-loader-4-line animate-spin mr-2"></i>Sending...';
    sendBtn.disabled = true;
    sendBtn.classList.add('opacity-75', 'cursor-not-allowed');

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    emailjs.send('service_me06enf', 'template_9mxscgc', parms).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          
          // Reset button state
          sendBtn.innerHTML = originalText;
          sendBtn.disabled = false;
          sendBtn.classList.remove('opacity-75', 'cursor-not-allowed');
          
          // Show success modal
          showSuccessModal();
          
          // Clear form input fields
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
        },
        (error) => {
          console.log('FAILED...', error);
          
          // Reset button state
          sendBtn.innerHTML = originalText;
          sendBtn.disabled = false;
          sendBtn.classList.remove('opacity-75', 'cursor-not-allowed');
          
          // Show error message (you can customize this)
          alert('Failed to send message. Please try again.');
        },
      );
}

function showSuccessModal() {
    const modal = document.getElementById("successModal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeSuccessModal() {
    const modal = document.getElementById("successModal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}