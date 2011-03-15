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

Number.prototype.padLeft = function (n, pad) {
    return (this + '').padLeft(n, pad);
}

Number.prototype.padRight = function (n, pad) {
    return (this + '').padRight(n, pad);
}


