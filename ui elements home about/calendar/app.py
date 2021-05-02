from flask import Flask, render_template

app = Flask('FullCalendar Demo')

events = [
  {
    'todo' : 'Id-Ul-Fitr (Ramzan Id)',
    'date' : '2021-05-13',
  },
  {
    'todo' : 'Republic Day',
    'date' : '2021-01-26',
  },
   {
    'todo' : 'Mahashivratri',
    'date' : '2021-03-11',
  },
   {
    'todo' : 'Holi',
    'date' : '2021-03-29',
  },
   {
    'todo' : 'Good Friday',
    'date' : '2021-04-02',
  },
   {
    'todo' : 'Dr.Baba Saheb Ambedkar Jayanti',
    'date' : '2021-04-14',
  },
   {
    'todo' : 'Ram Navami',
    'date' : '2021-04-21',
  },
   {
    'todo' : 'Bakri Id',
    'date' : '2021-07-21',
  },
   {
    'todo' : 'Muharram',
    'date' : '2021-08-19',
  },
   {
    'todo' : 'Ganesh Chaturthi',
    'date' : '2021-09-10',
  },
   {
    'todo' : 'Dussehra',
    'date' : '2021-10-15',
  },
   {
    'todo' : 'Diwali Balipratipada',
    'date' : '2021-11-05',
  },
   {
    'todo' : 'Christmas',
    'date' : '2021-12-26',
  },
   {
    'todo' : 'Gurunanak Jayanti',
    'date' : '2021-11-19',
  },
   {
    'todo' : 'Independence Day',
    'date' : '2021-08-15',
  },
]

@app.route('/')
def home():
  return render_template('index.html')

@app.route('/calendar')
def calendar():
  return render_template('calendar.html', events = events)
