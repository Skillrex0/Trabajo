document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'es',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek'
    },
    events: [
      { title: 'Evento 1', date: '2025-07-15' },
      { title: 'Evento 2', date: '2025-07-20' },
      { title: 'Transmisión especial', date: '2025-08-01' }
    ]
  });

  calendar.render();
});