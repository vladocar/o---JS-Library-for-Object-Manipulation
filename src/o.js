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
        var l = arguments.length;
        var T = {};
        while (l) {
    		var ar = arguments[--l];
            for (var i in ar) {
                if (ar.hasOwnProperty(i)) {
                    T[i] = ar[i];
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
        return keys(o).length;    
    },
    isEmpty: function (o) {
        return !this.len(o);
    },
    type: function (o, m) {
        return typeof o[m];
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