var numcap = require('./index.js');

var finder = new numcap();

finder.getData("79534811406", function (err, data) {
    console.log(err, data);
});
