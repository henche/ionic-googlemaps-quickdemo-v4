(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{kEHw:function(n,l,a){"use strict";a.r(l);var u=a("CcnG"),t=a("tBOM"),e=(a("OO+k"),function(n,l,a,u){return new(a||(a=Promise))(function(t,e){function o(n){try{i(u.next(n))}catch(n){e(n)}}function r(n){try{i(u.throw(n))}catch(n){e(n)}}function i(n){n.done?t(n.value):new a(function(l){l(n.value)}).then(o,r)}i((u=u.apply(n,l||[])).next())})}),o=function(){function n(n){this.platform=n}return n.prototype.ngOnInit=function(){return e(this,void 0,void 0,function(){return function(n,l){var a,u,t,e,o={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return e={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function r(e){return function(r){return function(e){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,u&&(t=u[2&e[0]?"return":e[0]?"throw":"next"])&&!(t=t.call(u,e[1])).done)return t;switch(u=0,t&&(e=[0,t.value]),e[0]){case 0:case 1:t=e;break;case 4:return o.label++,{value:e[1],done:!1};case 5:o.label++,u=e[1],e=[0];continue;case 7:e=o.ops.pop(),o.trys.pop();continue;default:if(!(t=(t=o.trys).length>0&&t[t.length-1])&&(6===e[0]||2===e[0])){o=0;continue}if(3===e[0]&&(!t||e[1]>t[0]&&e[1]<t[3])){o.label=e[1];break}if(6===e[0]&&o.label<t[1]){o.label=t[1],t=e;break}if(t&&o.label<t[2]){o.label=t[2],o.ops.push(e);break}t[2]&&o.ops.pop(),o.trys.pop();continue}e=l.call(n,o)}catch(n){e=[6,n],u=0}finally{a=t=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,r])}}}(this,function(n){switch(n.label){case 0:return[4,this.platform.ready()];case 1:return n.sent(),[4,this.loadMap()];case 2:return n.sent(),[2]}})})},n.prototype.loadMap=function(){var n=this,l=new t.a([{position:{lat:41.79883,lng:140.75675},iconData:"./assets/imgs/Number-1-icon.png"},{position:{lat:41.799240000000005,lng:140.75875000000002},iconData:"https://mapsplugin.github.io/ionic-googlemaps-quickdemo-v4/assets/imgs/Number-2-icon.png"},{position:{lat:41.797650000000004,lng:140.75905},iconData:{url:"https://mapsplugin.github.io/ionic-googlemaps-quickdemo-v4/assets/imgs/Number-3-icon.png",size:{width:24,height:24}}},{position:{lat:41.79637,lng:140.76018000000002},title:"4",iconData:"blue"},{position:{lat:41.79567,lng:140.75845},title:"5",iconData:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACVUlEQVRIS8WWjVXCMBRGwwTqBMIEuAG4ARuIE6gTKBOgEyAT4AbABjKBMIE/C+h3m6S2pWlJ8BzfOTkpad6770teEzom3bZy/VbrpYTopDjJZ6w2c77X6p9j46SCUXvuYDxHq04BZ2rPHXa3y/DRqlPAmdqZW+hrkMZEq44F52q3oGTdrjEpqmPBudoxKVBVKqsU1THgPbW+klNUt4GHCn6idqEGuMveerUeXFGtNTCvah9qaz+n2gMmKMGBnLrfjPFcMirZ7231XUF19RUJkIhPZqXnT8AM9Osy62v0VPihUqIfjWwx1RkJvbxIpjArhabfbEJ6zQYwysiiT3CW8kJ6Q4BgqMALEnqVNAqQZGSkM/R7nMOBLhZ/B/ZQeg9V/1EsrpLy5dIqP8aAXV6WlQIlZrWq/wzeBK0DM3Y0vA0aAh8FPwTaBC7B2W8+qUOMT4l9dYUUrJK2k4tCOHl7O7zK+Xx69nbWU/iebgKz1+9E+OYPToR1fqOe+SquujeBWdzlYGBPohhjW9b2lGbRa72bwLdyml5d2auvaPyeTOzIw4MxzCkal8h8no3cqT3WJd0ExuFmOjXmlhRIXbnfKZQ7hfJ4HDTM8wVIMi6xJ01y3mV8E5glGlDRGIEKS75DrAtFn/0DA3x/b0ddZbPgGt23JnBW0agpKPzUGCvhoT4iv1HG9Zodtc6HGBTYnoXAXc3UR5SbBwK1d8y+8RUAzxNwU2orOwQeyolF/lLT7mUqQ8BqCj4Bt+j1lR0Cs3Sopt8GFLYNF/2JU7K2k6stePL7fwP/AER2xy+mY1/QAAAAAElFTkSuQmCC"}]),a=l.map(function(n,l){return console.log(n),n.position});this.map=t.c.create("map_canvas",{camera:{target:a}}),l.forEach(function(l){l.disableAutoPan=!0;var a=n.map.addMarkerSync(l);a.on(t.e.MARKER_CLICK).subscribe(n.onMarkerClick),a.on(t.e.INFO_CLICK).subscribe(n.onMarkerClick)})},n.prototype.onMarkerClick=function(n){var l=n[1],a=l.get("iconData");l.setIcon(a)},n}(),r=function(){},i=a("pMnS"),c=a("ntG5"),s=a("YxxD"),p=u.Ja({encapsulation:0,styles:[["#map_canvas[_ngcontent-%COMP%]{width:100%;height:90%}"]],data:{}});function b(n){return u.Za(0,[(n()(),u.La(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),u.Ka(1,16384,null,0,c.x,[u.k],null,null),(n()(),u.La(2,0,null,null,8,"ion-toolbar",[],null,null,null,null,null)),u.Ka(3,16384,null,0,c.Xa,[u.k],null,null),(n()(),u.La(4,0,null,null,3,"ion-buttons",[["slot","start"]],null,null,null,null,null)),u.Ka(5,16384,null,0,c.f,[],null,null),(n()(),u.La(6,0,null,null,1,"ion-menu-button",[],null,null,null,null,null)),u.Ka(7,16384,null,0,c.O,[u.k],null,null),(n()(),u.La(8,0,null,null,2,"ion-title",[],null,null,null,null,null)),u.Ka(9,16384,null,0,c.Ya,[u.k],null,null),(n()(),u.Ya(-1,null,[" marker "])),(n()(),u.La(11,0,null,null,6,"ion-content",[["padding",""]],null,null,null,null,null)),u.Ka(12,16384,null,0,c.q,[u.k],null,null),(n()(),u.La(13,0,null,null,1,"a",[["class","sourcecode"],["href","https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/src/app/marker/marker.page.ts"],["target","_blank"]],null,null,null,null,null)),(n()(),u.Ya(-1,null,["[source code]"])),(n()(),u.La(15,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Ya(-1,null,["Click on markers!"])),(n()(),u.La(17,0,null,null,0,"div",[["id","map_canvas"]],null,null,null,null,null))],null,null)}var f=u.Ha("app-marker",o,function(n){return u.Za(0,[(n()(),u.La(0,0,null,null,1,"app-marker",[],null,null,null,b,p)),u.Ka(1,114688,null,0,o,[s.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),h=a("Ip0R"),g=a("gIcY"),d=a("95zI"),m=a("9opb"),k=a("apKv"),A=a("B4/3"),w=a("ZYCi");a.d(l,"MarkerPageModuleNgFactory",function(){return v});var v=u.Ia(r,[],function(n){return u.Ra([u.Sa(512,u.j,u.X,[[8,[i.a,f]],[3,u.j],u.v]),u.Sa(4608,h.k,h.j,[u.s,[2,h.p]]),u.Sa(4608,g.d,g.d,[]),u.Sa(4608,d.a,d.a,[u.x,u.g]),u.Sa(4608,m.a,m.a,[d.a,u.j,u.p]),u.Sa(4608,k.a,k.a,[d.a,u.j,u.p]),u.Sa(1073742336,h.b,h.b,[]),u.Sa(1073742336,g.c,g.c,[]),u.Sa(1073742336,g.a,g.a,[]),u.Sa(1073742336,A.a,A.a,[]),u.Sa(1073742336,w.n,w.n,[[2,w.t],[2,w.l]]),u.Sa(1073742336,r,r,[]),u.Sa(1024,w.j,function(){return[[{path:"",component:o}]]},[])])})}}]);