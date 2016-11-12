/**
 * Created by gabak on 11/11/2016.
 */
var express = require('express'),
    app = express();
app.use(express.static('www'));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
