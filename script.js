document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    // Simulate subscription success
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Thank you, ${name}! You've successfully subscribed with the email: ${email}.`;
  });
  