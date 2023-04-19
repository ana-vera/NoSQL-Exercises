import app from './server.js'

function runserver(){
    app.listen(app.get('port'))
    console.log('server ready', app.get('port'))
}

runserver()