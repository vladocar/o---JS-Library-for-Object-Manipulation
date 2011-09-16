(function(global, undefined){

var 

// var-shortcuts (access to local vars is faster)
JSON = JSON,
obj_proto = Object.prototype,

// some helper vars may be
// foo = 'something',
// bar = { any: 'thing' },

// the Library
LIB = {
        
        
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
        return Object.keys ? Object.keys(o).length : (function() {
                    var a = 0;
                    for (var i in o) {
                        if (o.hasOwnProperty(i)) {
                            a++;
                        }
                    }
                    return a;
                })();    
    },
    type: function (o, m) {
        if (!m) return obj_proto.toString.call( o );
        return obj_proto.toString.call( o[m] );
    },
    is: function(o, t){
        return LIB.type(o) === '[object '+t+']';
    },
    isEmpty: function (o) {
        if (LIB.len(o) === 0) {
            return true;
        } else {
            return false;
        }
    },
    isArray: function(o) {
        return LIB.is(o, 'Array');
    },
    isObject: function(o) {
        return LIB.is(o, 'Object');
    },
    isRegExp: function(o) {
        return LIB.is(o, 'RegExp');
    },
    isFunction: function(o) {
        return LIB.is(o, 'Function');
    },
    isNumber: function(o) {
        return LIB.is(o, 'Number');
    },
    isString: function(o) {
        return LIB.is(o, 'String');
    },
    isBoolean: function(o) {
        return LIB.is(o, 'Boolean');
    },
    isNull: function(o) {
        return LIB.is(o, 'Null');
    },
    isUndefined: function(o) {
        return LIB.is(o, 'Undefined');
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


// Sharing to global scope
global.o = LIB;

}(window));