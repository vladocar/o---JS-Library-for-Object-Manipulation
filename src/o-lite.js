var o = {
    add: function (o, m, v) {
        return (o[m] = v);
    },
    remove: function (o, m) {
        return delete o[m];
    },
    extend: function (parent, child) {
        for (var m in child) {
            parent[m] = child[m];
        }
    },
    clone: function (o) {
        var T = {};
        for (var i in o) {
            T[i] = o[i];
        }
        return T;
    },
    cloneAll: function () {
        var ar = arguments.length;
        var T = {};
        while (ar--) {
            for (var i in arguments[ar]) {
                T[i] = arguments[ar][i];
            }
        }
        return T;
    },
    values: function (o) {
        var a = [];
        for (var i in o) {
            a.push(o[i]);
        }
        return a;
    },
    keys: function (o) {
        var a = [];
        for (var i in o) {
            a.push(i);
        }
        return a;
    },
    len: function (o) {
        var a = 0;
        for (var i in o) {
            a = a + 1;
        }
        return a;
    },
    isEmpty: function (o) {
        if (this.len(o) === 0) {
            return true;
        } else {
            return false;
        }
    },
    type: function (o, m) {
        return typeof o[m];
    },
    has: function (o, m) {
        if (o.hasOwnProperty(m)) {
            return true;
        } else {
            return false;
        }
    },
    toJSON: function (o) {
        return JSON.stringify(o);
    },
    toObject: function (o) {
        return JSON.parse(o);
    }
};