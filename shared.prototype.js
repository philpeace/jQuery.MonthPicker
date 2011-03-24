// String

String.prototype.padLeft = function (n, pad) {
    var t = '';
    if (n > this.length) {
        for (var i = 0; i < n - this.length; i++) {
            t += pad;
        }
    }
    return t + this;
}

String.prototype.padRight = function (n, pad) {
    var t = this;
    if (n > this.length) {
        for (var i = 0; i < n - this.length; i++) {
            t += pad;
        }
    }
    return t;
}

// Number

Number.prototype.padLeft = function (n, pad) {
    return (this + '').padLeft(n, pad);
}

Number.prototype.padRight = function (n, pad) {
    return (this + '').padRight(n, pad);
}

// Date

// For Crockford's json2.js
Date.prototype.toJSON = function (key) {
    var j = '/Date(' + this.getTime() + ')/'
    return j;
};

// Array

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /*, from*/) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
          this[from] === elt)
                return from;
        }
        return -1;
    };
}
if (!Array.prototype.contains) {
	Array.prototype.contains = function (key) {
		return this.indexOf(key) > -1;
	}
}