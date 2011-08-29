(function(win){
var temp;
win.o = {
    add: function (o, m, v) {
        return (o[m] = v);
    },
    remove: function (o, m) {
        return delete o[m];
    },
    extend: function (parent, child) {
        for (var m in child)
        if (child.hasOwnProperty(m)) parent[m] = child[m];
    },
    cloneAll: function () {
        var T = {};
        var l = arguments.length;
        while (l--) {
            var a = arguments[l];
            for (var i in a)
            if (a.hasOwnProperty(i)) T[i] = a[i];
        }
        return T;
    },
    values: function (o) {
        var a = [];
        for (var i in o)
        if (o.hasOwnProperty(i)) a.push(o[i]);
        return a;
    },
    keys: Object.keys ||
    function (o) {
        var a = [];
        for (var i in o)
        if (o.hasOwnProperty(i)) a.push(i);
        return a;
    },
    len: function (o) {
        return this.keys(o).length;
    },
    isEmpty: function (o) {
        return !this.len(o);
    },
    type: function (o, m) {
        return Object.prototype.toString.call(o[m]);
    },
    has: function (o, m) {
        return o.hasOwnProperty(m);
    },
    toJSON: function (o) {
        return JSON.stringify(o);
    },
    toObject: function (o) {
        return JSON.parse(o);
    }
};
})(this);