(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{SDT0:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),a=(u("OO+k"),u("tBOM")),e=function(l,n,u,t){return new(u||(u=Promise))(function(a,e){function o(l){try{i(t.next(l))}catch(l){e(l)}}function r(l){try{i(t.throw(l))}catch(l){e(l)}}function i(l){l.done?a(l.value):new u(function(n){n(l.value)}).then(o,r)}i((t=t.apply(l,n||[])).next())})},o=function(l,n){var u,t,a,e,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function r(e){return function(r){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;o;)try{if(u=1,t&&(a=t[2&e[0]?"return":e[0]?"throw":"next"])&&!(a=a.call(t,e[1])).done)return a;switch(t=0,a&&(e=[0,a.value]),e[0]){case 0:case 1:a=e;break;case 4:return o.label++,{value:e[1],done:!1};case 5:o.label++,t=e[1],e=[0];continue;case 7:e=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===e[0]||2===e[0])){o=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){o.label=e[1];break}if(6===e[0]&&o.label<a[1]){o.label=a[1],a=e;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(e);break}a[2]&&o.ops.pop(),o.trys.pop();continue}e=n.call(l,o)}catch(l){e=[6,l],t=0}finally{u=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,r])}}},r=function(){function l(l,n){this.loadingCtrl=l,this.platform=n}return l.prototype.ngOnInit=function(){return e(this,void 0,void 0,function(){return o(this,function(l){switch(l.label){case 0:return[4,this.platform.ready()];case 1:return l.sent(),[4,this.loadMap()];case 2:return l.sent(),[2]}})})},l.prototype.loadMap=function(){return e(this,void 0,void 0,function(){var l,n;return o(this,function(u){switch(u.label){case 0:return l=this,[4,this.loadingCtrl.create({content:"Please wait..."})];case 1:return l.loading=u.sent(),[4,this.loading.present()];case 2:return u.sent(),this.map=a.c.create("map_canvas"),[4,this.map.addKmlOverlay({url:"assets/kmloverlay/polygon.kml",icon:"green"})];case 3:return n=u.sent(),this.loading.dismiss(),console.log(n),this.map.moveCamera(n.getDefaultViewport()),n.on(a.e.KML_CLICK).subscribe(function(l){console.log(l[0],l[1])}),[2]}})})},l}(),i=function(){},c=u("pMnS"),s=u("ntG5"),p=u("Eq7r"),f=u("YxxD"),h=t.Ja({encapsulation:0,styles:[["#map_canvas[_ngcontent-%COMP%]{width:100%;height:90%}"]],data:{}});function d(l){return t.Za(0,[(l()(),t.La(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),t.Ka(1,16384,null,0,s.x,[t.k],null,null),(l()(),t.La(2,0,null,null,8,"ion-toolbar",[],null,null,null,null,null)),t.Ka(3,16384,null,0,s.Xa,[t.k],null,null),(l()(),t.La(4,0,null,null,3,"ion-buttons",[["slot","start"]],null,null,null,null,null)),t.Ka(5,16384,null,0,s.f,[],null,null),(l()(),t.La(6,0,null,null,1,"ion-menu-button",[],null,null,null,null,null)),t.Ka(7,16384,null,0,s.O,[t.k],null,null),(l()(),t.La(8,0,null,null,2,"ion-title",[],null,null,null,null,null)),t.Ka(9,16384,null,0,s.Ya,[t.k],null,null),(l()(),t.Ya(-1,null,[" KmlOverlay "])),(l()(),t.La(11,0,null,null,6,"ion-content",[["padding",""]],null,null,null,null,null)),t.Ka(12,16384,null,0,s.q,[t.k],null,null),(l()(),t.La(13,0,null,null,1,"a",[["class","sourcecode"],["href","https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/src/app/kml-overlay/kml-overlay.page.ts"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Ya(-1,null,["[source code]"])),(l()(),t.La(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ya(-1,null,["Click on the one of States!"])),(l()(),t.La(17,0,null,null,0,"div",[["id","map_canvas"]],null,null,null,null,null))],null,null)}var v=t.Ha("app-kml-overlay",r,function(l){return t.Za(0,[(l()(),t.La(0,0,null,null,1,"app-kml-overlay",[],null,null,null,d,h)),t.Ka(1,114688,null,0,r,[p.a,f.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),b=u("Ip0R"),m=u("gIcY"),y=u("95zI"),g=u("9opb"),k=u("apKv"),w=u("B4/3"),S=u("ZYCi");u.d(n,"KmlOverlayPageModuleNgFactory",function(){return K});var K=t.Ia(i,[],function(l){return t.Ra([t.Sa(512,t.j,t.X,[[8,[c.a,v]],[3,t.j],t.v]),t.Sa(4608,b.k,b.j,[t.s,[2,b.p]]),t.Sa(4608,m.d,m.d,[]),t.Sa(4608,y.a,y.a,[t.x,t.g]),t.Sa(4608,g.a,g.a,[y.a,t.j,t.p]),t.Sa(4608,k.a,k.a,[y.a,t.j,t.p]),t.Sa(1073742336,b.b,b.b,[]),t.Sa(1073742336,m.c,m.c,[]),t.Sa(1073742336,m.a,m.a,[]),t.Sa(1073742336,w.a,w.a,[]),t.Sa(1073742336,S.n,S.n,[[2,S.t],[2,S.l]]),t.Sa(1073742336,i,i,[]),t.Sa(1024,S.j,function(){return[[{path:"",component:r}]]},[])])})}}]);