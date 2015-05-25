function extend(a, b) {
    for(var k in b) {
        if(!b.hasOwnProperty(k)) continue;
        if(typeof a[k] === 'object') {
            a[k] = extend(a[k], b[k]);
        } else {
            a[k] = b[k];
        }
    }
    return a;
}

function mix() {
    var objects = Array.prototype.slice.call(arguments, 0),
        result = {};

    objects.forEach(function(object) {
        result = extend(result, object);
    });

    return result;
}

module.exports = mix;