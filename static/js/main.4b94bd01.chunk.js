(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),l=(a(14),a(3)),s=a(4),i=a(6),u=a(5),h=a(7),m=function(e){var t=e.id,a=e.name,n=e.username,o=e.email;return r.a.createElement("div",{className:" tc bg-green dib br3 pa3 ma2 grow bw2 shadow-5 mature"},r.a.createElement("img",{src:"https://robohash.org/".concat(t),alt:"robot",className:"me"}),r.a.createElement("div",null,r.a.createElement("h1",null,n),r.a.createElement("h2",null,a),r.a.createElement("h3",null,t),r.a.createElement("p",null,o)))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,a){return r.a.createElement(m,{key:a,id:t[a].id,name:t[a].name,email:[a].email,username:[a].username})}))},f=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",className:"pa3 b--green  ba bg-lightest-blue",placeholder:"Search Here",onChange:t}))},b=(a(15),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={searchfield:"",robots:[]},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this,t=this.state.robots.filter(function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return 0===this.state.robots.length?r.a.createElement("h1",{style:{fontSize:"2em"}},"Loading  Please  wait ..."):r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"JUMAGIT"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(d,{robots:t}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.4b94bd01.chunk.js.map