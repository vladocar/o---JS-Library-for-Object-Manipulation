(function(e){e.o={add:function(a,b,c){return a[b]=c},remove:function(a,b){return delete a[b]},key:function(a,b){return a[b]},extend:function(a,b){for(var c in b)a[c]=b[c]},cloneAll:function(){for(var a={},b=arguments.length;b--;){var c=arguments[b],d;for(d in c)c.hasOwnProperty(d)&&(a[d]=c[d])}return a},values:function(a){var b=[],c;for(c in a)b.push(a[c]);return b},keys:function(a){var b=[],c;for(c in a)b.push(c);return b},len:function(a){return this.keys(a).length},isEmpty:function(a){return!this.len(a)}, type:function(a,b){return Object.prototype.toString.call(a[b])},has:function(a,b){return a.hasOwnProperty(b)},toJSON:function(a){return JSON.stringify(a)},toObject:function(a){return JSON.parse(a)},setStorage:function(a,b){return localStorage.setItem(a,JSON.stringify(b))},getStorage:function(a){return JSON.parse(localStorage.getItem(a))},removeStorage:function(a){return localStorage.removeItem(a)}}})(this);