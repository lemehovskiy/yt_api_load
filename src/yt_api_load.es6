/*
 Version: 0.1.0
 Author: lemehovskiy
 Website: http://lemehovskiy.github.io
 Repo: https://github.com/lemehovskiy/yt_api_load
 */

'use strict';

module.exports = function () {
    return new Promise(function (resolve, reject) {
        if (window.YT) {
            return resolve(window.YT)
        }

        let timeout_id = setTimeout(function () {
            window.onYouTubePlayerAPIReady = function () {
            }
            reject(new Error('Could not load the Google Youtube Player API'))
        }, 5000)

        window.onYouTubePlayerAPIReady = function () {
            if (timeout_id !== null) {
                clearTimeout(timeout_id)
            }
            resolve(window.YT)
            delete window.onYouTubePlayerAPIReady
        }


        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";

        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    })
}