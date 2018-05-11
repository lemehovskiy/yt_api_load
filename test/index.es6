require("./sass/style.scss");

let yt_api_ready = require('../build/yt_api_load');


yt_api_ready().then(
    function () {
        console.log('ready');
    }
).catch(function (error) {
    console.log(error)
});