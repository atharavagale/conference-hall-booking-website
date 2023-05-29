$(document).ready(function() {
  var events = [];
  var calendar = $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    defaultView: 'month',
    editable: false,
    events: events,
    timeFormat: 'h:mm a',
    eventClick: function(event) {
      $('#booking-date').text(moment(event.start).format('MMMM Do YYYY'));
      $('#booking-time').text(moment(event.start).format('h:mm a') + ' - ' + moment(event.end).format('h:mm a'));
      $('#booking-description').text(event.title);
      $('#booking-modal').modal('show');
    }

  });

  $('#booking-form').submit(function(event) {
    event.preventDefault();
    var eventData = {
      title: $('#event-description').val(),
      start: moment($('#event-date').val() + ' ' + $('#start-time').val()).format('YYYY-MM-DD HH:mm:ss'),
      end: moment($('#event-date').val() + ' ' + $('#end-time').val()).format('YYYY-MM-DD HH:mm:ss')
    };

    var overlappingEvents = events.filter(function(event) {
      return (
        (event.start <= eventData.start && event.end >= eventData.start) ||
        (event.start <= eventData.end && event.end >= eventData.end) ||
        (event.start >= eventData.start && event.end <= eventData.end)
      );
    });

    if (overlappingEvents.length === 0) {
      events.push(eventData);
      calendar.fullCalendar('renderEvent', eventData, true);
      $('#booking-modal').modal('hide');
      $('#booking-form')[0].reset();
    } else {
      alert('The selected time slot is already booked. Please choose another slot.');
    }
  });
});
