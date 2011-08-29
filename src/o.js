(function(global, undefined){


var JSON = JSON, 
    obj_proto = Object.prototype,

    o = {
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
            return this.keys(o).length;   
        },
        isEmpty: function (o) {
            return (this.len(o) === 0);
        },
        type: function (o, m) {
            if (!m) return obj_proto.toString.call( o );
            return obj_proto.toString.call( o[m] );
        },
        isArray: function(o) {
            return this.is(o, 'Array');
        },  
        isObject: function(o) {
            return this.is(o, 'Object');
        },
        isRegExp: function(o) {
            return this.is(o, 'RegExp');
        },
        isFunction: function(o) {
            return this.is(o, 'Function');
        },
        isNumber: function(o) {
            return this.is(o, 'Number');
        },
        isString: function(o) {
            return this.is(o, 'String');
        }
        isBoolean: function(o) {
            return this.is(o, 'Boolean');
        },
        isNull: function(o) {
            return this.is(o, 'Null');
        },
        isUndefined: function(o) {
            return this.is(o, 'Undefined');
        },
        is: function(o, t){
            return this.type(o) === '[object '+t+']';
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
    
    global.o = o;
    
}(window));