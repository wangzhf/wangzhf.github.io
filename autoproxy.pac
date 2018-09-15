/**
 * genpac 2.0.1 https://github.com/JinnLynn/genpac
 * Generated: Sat, 15 Sep 2018 11:09:48 +0000
 * GFWList Last-Modified: -
 * GFWList From: -
 */

var proxy = 'SOCKS5 127.0.0.1:1080';
var rules = [
    [
        [], 
        [
            "google.com", 
            "twitter.com", 
            "wikipedia.org", 
            "youtube.com"
        ]
    ], 
    [
        [], 
        []
    ]
];

var lastRule = '';

function FindProxyForURL(url, host) {
    for (var i = 0; i < rules.length; i++) {
        ret = testHost(host, i);
        if (ret != undefined)
            return ret;
    }
    return 'DIRECT';
}

function testHost(host, index) {
    for (var i = 0; i < rules[index].length; i++) {
        for (var j = 0; j < rules[index][i].length; j++) {
            lastRule = rules[index][i][j]
            if (host == lastRule || host.endsWith('.' + lastRule))
                return i % 2 == 0 ? 'DIRECT' : proxy;
        }
    }
    lastRule = '';
}

// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
  };
}
