(function() {
  'use strict';

  app.constant('URL', url());
  function url() {
    let key = 'AIzaSyAsWN_ILgz1OFey1mlOaiSoRlyUq04y1x0';
    let url_youtube = 'https://www.googleapis.com/youtube/v3/';
    let url = {
      search: `${url_youtube}search?key=${key}&part=snippet&type=video&q=`,
      get: `${url_youtube}videos?key=${key}&part=snippet,statistics&type=video&id=`,
      reco: `${url_youtube}search?key=${key}&part=snippet&type=video&relatedToVideoId=`
    };
    return url;
  }
})();
