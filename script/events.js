// Fetch events data from JSON file
let eventsData = {};

// Load events from JSON
fetch('../script/events-data.json')
  .then(response => response.json())
  .then(data => {
    eventsData = data.events;
    initializeEvents();
  })
  .catch(error => console.error('Error loading events:', error));

// Initialize events on page load
function initializeEvents() {
  const months = Object.keys(eventsData);
  
  months.forEach(month => {
    const monthId = month.toLowerCase();
    const monthElement = document.getElementById(monthId);
    
    if (monthElement) {
      // Clear existing content
      monthElement.innerHTML = '';
      
      // Add month heading
      const heading = document.createElement('h2');
      heading.textContent = month;
      monthElement.appendChild(heading);
      
      // Add events
      eventsData[month].forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event-item';
        eventDiv.innerHTML = `<strong>${event.date}:</strong> ${event.description}`;
        monthElement.appendChild(eventDiv);
      });
    }
  });
}

// Month display functions
function octoberDisplay() {
  toggleMonth('october');
}

function septemberDisplay() {
  toggleMonth('september');
}

function augustDisplay() {
  toggleMonth('august');
}

function julyDisplay() {
  toggleMonth('july');
}

function juneDisplay() {
  toggleMonth('june');
}

function mayDisplay() {
  toggleMonth('may');
}

function aprilDisplay() {
  toggleMonth('april');
}

function marchDisplay() {
  toggleMonth('march');
}

function februaryDisplay() {
  toggleMonth('february');
}

function decemberDisplay() {
  toggleMonth('december');
}

function novemberDisplay() {
  toggleMonth('november');
}

// Toggle month visibility
function toggleMonth(monthId) {
  // Hide all months
  const allMonths = document.querySelectorAll('.buttonContents');
  allMonths.forEach(month => {
    month.style.display = 'none';
  });

  // Remove active class from all buttons
  const allBtns = document.querySelectorAll('.month-btn');
  allBtns.forEach(btn => btn.classList.remove('active'));

  // Show selected month
  const selectedMonth = document.getElementById(monthId);
  if (selectedMonth) {
    selectedMonth.style.display = 'block';
  }

  // Add active class to clicked button
  if (event && event.target) {
    event.target.classList.add('active');
  }
}

// Add CSS for event items
const style = document.createElement('style');
style.textContent = `
  .event-item {
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .event-item:last-child {
    border-bottom: none;
  }
  
  .event-item strong {
    color: var(--color-accent, #0044cc);
    font-weight: 600;
  }
`;
document.head.appendChild(style);
