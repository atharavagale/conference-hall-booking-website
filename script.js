const form = document.querySelector('form');
const bookingCalendar = document.getElementById('booking-calendar');
let appointments = [];


/*function createCalendar() {
  for (let i = 1; i <= 35; i++) {
    const date = new Date();
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    date.setDate(i - date.getDay());
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const dateStr = `${day} ${month} ${year}`;
    const cell = document.createElement('div');
    cell.dataset.date = dateStr;
    cell.innerText = dateStr;
    bookingCalendar.appendChild(cell);
  }
}

function checkAvailability()*/
