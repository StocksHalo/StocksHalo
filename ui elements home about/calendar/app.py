from flask import Flask, render_template

app = Flask("Calendar")



@app.route('/calendar')
def calendar():
    return render_template('calendar.html', events=events)

if __name__ == '__main__':
    app.run(debug = True)