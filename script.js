function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  
  if (timeElement) {
    // Get current time in milliseconds
    const currentTime = Date.now();
    
    // Update the element with the current timestamp
    timeElement.textContent = currentTime;
  }
}

function initializeTime() {
  // Set initial time immediately
  updateTime();
  
  setInterval(updateTime, 1000);
}

// Run Time immediately
initializeTime();

// Helper function to format timestamp
function formatTimestamp(milliseconds) {
  const date = new Date(milliseconds);
  return {
    readable: date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }),
    milliseconds: milliseconds
  };
}