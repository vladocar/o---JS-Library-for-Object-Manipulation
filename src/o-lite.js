(function (global, undefined) {
    var obj_proto = Object.prototype,
        LIB = {
            add: function (o, m, v) {
                return (o[m] = v);
            },
            remove: function (o, m) {
                return delete o[m];
            },
            key: function (o, m) {
                return o[m];
            },
            extend: function (parent, child) {
                for (var m in child) {
                    if (child.hasOwnProperty(m)) {
                        parent[m] = child[m];
                    }
                }
            },
            cloneAll: function () {
                var T = {};
                var l = arguments.length;
                while (l--) {
                    var a = arguments[l];
                    for (var i in a) {
                        if (a.hasOwnProperty(i)) {
                            T[i] = a[i];
                        }
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
                return this.keys(o).length;
            },
            has: function (o, m) {
                return o.hasOwnProperty(m);
            },
            isEmpty: function (o) {
                return !this.len(o);
            },
            type: function (o, m) {
                if (!m) {
                    return Object.prototype.toString.call(o);
                } else {
                    return Object.prototype.toString.call(o[m]);
                }
            },
            is: function (o, t) {
                return LIB.type(o) === '[object ' + t + ']';
            },
            isArray: function (o) {
                return LIB.is(o, 'Array');
            },
            isObject: function (o) {
                return LIB.is(o, 'Object');
            },
            isRegExp: function (o) {
                return LIB.is(o, 'RegExp');
            },
            isFunction: function (o) {
                return LIB.is(o, 'Function');
            },
            isNumber: function (o) {
                return LIB.is(o, 'Number');
            },
            isString: function (o) {
                return LIB.is(o, 'String');
            },
            isBoolean: function (o) {
                return LIB.is(o, 'Boolean');
            },
            isNull: function (o) {
                return LIB.is(o, 'Null');
            },
            isUndefined: function (o) {
                return LIB.is(o, 'Undefined');
            },
            toJSON: function (o) {
                return JSON.stringify(o);
            },
            toObject: function (o) {
                return JSON.parse(o);
            },
            setStorage: function (n, o) {
                return localStorage.setItem(n, JSON.stringify(o));
            },
            getStorage: function (n) {
                return JSON.parse(localStorage.getItem(n));
            },
            removeStorage: function (n) {
                return localStorage.removeItem(n);
            }
        };
    global.o = LIB;
}(window));