(this["webpackJsonpprueba-cumplo"]=this["webpackJsonpprueba-cumplo"]||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),u=(n(27),n(13)),i=n(5),s=n(7),l=n(8),h=n(10),m=n(9),p=n(11);var b=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Banco: ",e.name),r.a.createElement(u.b,{to:"/branches"}))},f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={banks:[],isFetched:!0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://tryouts-cumplo.herokuapp.com/banks/").then((function(e){return e.json()})).then((function(t){return e.setState({banks:t,isFetched:!1})}))}},{key:"render",value:function(){return this.state.isFetched?"Loading...":this.state.banks.map((function(e){return r.a.createElement(b,{name:e.name,key:e.pk})}))}}]),t}(a.Component);var d=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Branch:"),r.a.createElement("p",null,e.name),r.a.createElement("p",null,"Bank: ",e.bank))},k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={branches:[],path:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://tryouts-cumplo.herokuapp.com/branches/").then((function(e){return e.json()})).then((function(t){return e.setState({branches:t.results})}))}},{key:"render",value:function(){return console.log(this.state),this.state.isFetched?"Loading...":this.state.branches.map((function(e){return r.a.createElement(d,{name:e.name,key:e.id,bank:e.bank})}))}}]),t}(a.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Empleados"))}}]),t}(a.Component);n(33);var E=function(){return r.a.createElement(u.a,{basename:"/Cumplo-Test"},r.a.createElement(i.a,{exact:!0,path:"/",component:f}),r.a.createElement(i.a,{path:"/branches",component:k}),r.a.createElement(i.a,{path:"/employees",component:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.04113b38.chunk.js.map