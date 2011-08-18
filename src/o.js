var o = {
    add: function (o, m, v) {
        return (o[m] = v);
    },
    remove: function (o, m) {
        return delete o[m];
    },
    extend: function (parent, child) {
        for (var m in child) {
            if (child.hasOwnProperty(m)) {
                parent[m] = child[m];
            }
        }
    },
    cloneAll: function () {
        var ar = arguments.length;
        var T = {};
        while (ar--) {
            for (var i in arguments[ar]) {
                if (arguments[ar].hasOwnProperty(i)) {
                    T[i] = arguments[ar][i];
                }
            }
        }
        return T;
    },
    values: function (o) {
        var a = [];
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                a.push(o[i]);
            }
        }
        return a;
    },
    keys: Object.keys || function (o) {
        var a = [];
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                a.push(i);
            }
        }
        return a;
    },
    len: function (o) {
        var a = 0;
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                a = a + 1;
            }
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