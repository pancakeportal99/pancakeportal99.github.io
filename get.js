startAll();
function startAll() {
    var answer = prompt('YouTube ID');
    var id = answer;
    YoutubeVideo(id);
};
var parseQueryString = function(queryString) {
    var params = {},
        queries, temp, i, l;
    queries = queryString.split("&");
    for (i = 0, l = queries.length; i < l; i++) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
    return params;
};
function getWebsite(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    return xhr.responseText;
};

function decodeQueryString(queryString) {
    var key, keyValPair, keyValPairs, r, val, _i, _len;
    r = {};
    keyValPairs = queryString.split("&");
    for (_i = 0, _len = keyValPairs.length; _i < _len; _i++) {
        keyValPair = keyValPairs[_i];
        key = decodeURIComponent(keyValPair.split("=")[0]);
        val = decodeURIComponent(keyValPair.split("=")[1] || "");
        r[key] = val;
    }
    return r;
};

function decodeStreamMap(url_encoded_fmt_stream_map) {
    var quality, sources, stream, type, urlEncodedStream, _i, _len, _ref;
    sources = {};
    _ref = url_encoded_fmt_stream_map.split(",");
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        urlEncodedStream = _ref[_i];
        stream = decodeQueryString(urlEncodedStream);
        type = stream.type.split(";")[0];
        quality = stream.quality.split(",")[0];
        stream.original_url = stream.url;
        stream.url = "" + stream.url + "&signature=" + stream.sig;
        sources["" + type + " " + quality] = stream;
    }
    return sources;
};

function YoutubeVideo(youtubeId) {
    var videoInfo = getWebsite('https://jsonp.afeld.me/?url=http://www.youtube.com/get_video_info?video_id=' + youtubeId);
    var video = decodeQueryString(videoInfo);
    var videoSources = decodeStreamMap(video.url_encoded_fmt_stream_map);
    var key, source, _ref;
    _ref = videoSources;
    var VideoURL = [{}];
    for (key in _ref) {
        source = _ref[key];
        if (source.type.match('video/mp4')) {
            VideoURL.push(source);
        }
    }
    window.open(VideoURL[1].url)
}
