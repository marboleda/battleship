(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{21:function(e,t,r){},22:function(e,t,r){},28:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(0),i=r.n(a),o=r(12),c=r.n(o),u=(r(21),r(2)),s=r(5),l=r(3),d=(r(22),r(4));function h(){var e=Object(l.a)(["\n    border-style: solid;\n    border-width: 0.5px;\n    background-color: ","; \n    :hover {\n        background-color: ","\n    }\n"]);return h=function(){return e},e}function p(){var e=Object(l.a)(["\n    display: grid;\n    width: 30vw;\n    height: 30vh;\n    border-style: solid;\n    border-width: 2px;\n    grid-template-columns: auto auto auto auto auto auto auto auto auto auto;\n    grid-template-rows: auto auto auto auto auto auto auto auto auto auto;\n"]);return p=function(){return e},e}var b=d.a.div(p()),f=d.a.div(h(),(function(e){return e.color}),(function(e){return!0===e.isPlayerTurn&&"c"===e.playerType&&!1===e.isGameOver?"#D3D3D3":e.color})),g=function(e,t,r,n){return 1===e[n][r]&&"h"===t?"black":2===e[n][r]?"green":3===e[n][r]?"red":"white"},j=function(e){var t=e.playerType,r=e.drop,a=e.gameboard,i=e.currentShipId,o=e.isPlayerTurn,c=e.isGameOver,u=e.clickEnemyGrid;return Object(n.jsxs)("div",{className:"grid",children:[Object(n.jsx)("h2",{children:"h"===t?"You":"Enemy"}),Object(n.jsx)(b,{children:Object(s.a)(Array(100).keys()).map((function(e){var s=e%10,l=e<10?0:Number(e.toString().substring(0,1));return Object(n.jsx)(f,{id:"".concat(t).concat(e),onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault(),r(t,[s,l],i)},color:g(a,t,s,l),isPlayerTurn:o,isGameOver:c,playerType:t,onClick:function(e){return u([s,l],t,o)}})}))})]})};function O(){var e=Object(l.a)(["\n    width: 3vw;\n    height: 3vh;\n    background-color: black;\n    border-style: solid;\n    border-color: white;\n    border-width: 0.5px;\n"]);return O=function(){return e},e}function v(){var e=Object(l.a)(["\n    display: ",";\n    flex-direction: ",";\n    margin-top: 10px;\n    margin-bottom: 10px;\n"]);return v=function(){return e},e}var m=d.a.div(v(),(function(e){return!1===e.onBoard?"flex":"none"}),(function(e){return 0===e.orientation?"row":"column"})),y=d.a.div(O()),S=function(e){var t=e.drag,r=e.shipType,a=e.shipId,i=e.orientation,o=e.click,c=e.onBoard;return Object(n.jsx)(m,{draggable:!0,onDrag:function(){t(r,a)},orientation:i,onBoard:c,onClick:function(){o(a,1===i?0:1)},className:"shipDisplay",children:function(e){var t,r=[];switch(e){case"carrier":t=5;break;case"battleship":t=4;break;case"cruiser":case"submarine":t=3;break;case"destroyer":t=2}for(var a=0;a<t;a++)r.push(Object(n.jsx)(y,{className:"ship-cell"}));return r}(r)})},k=function(e){var t=e.drag,r=e.orientations,a=e.clickShip,i=e.shipOnPlayerBoard;return Object(n.jsxs)("div",{className:"menu",children:[Object(n.jsx)(S,{drag:t,click:a,shipId:"0",orientation:r[0],onBoard:i[0],shipType:"carrier"}),Object(n.jsx)(S,{drag:t,click:a,shipId:"1",orientation:r[1],onBoard:i[1],shipType:"battleship"}),Object(n.jsx)(S,{drag:t,click:a,shipId:"2",orientation:r[2],onBoard:i[2],shipType:"cruiser"}),Object(n.jsx)(S,{drag:t,click:a,shipId:"3",orientation:r[3],onBoard:i[3],shipType:"submarine"}),Object(n.jsx)(S,{drag:t,click:a,shipId:"4",orientation:r[4],onBoard:i[4],shipType:"destroyer"})]})},x=function(){var e=Object(s.a)(Array(10)).map((function(){return Array(10).fill(0)})),t=[];return{getGameboardState:function(){return e},placeShip:function(r){var n=r.getPlacementCoordinates()[0],a=r.getPlacementCoordinates()[1],i=r.getOrientation();if(0===i){if(r.getLength()+n>10)return console.log("Ship goes off the grid"),null;for(var o=0;o<r.getLength();o++)if(1===e[a][n+o])return console.log("Something is in the way of the ship"),null}else{if(r.getLength()+a>10)return console.log("Ship goes off the grid"),null;for(var c=0;c<r.getLength();c++)if(1===e[a+c][n])return console.log("Something is in the way of the ship"),null}var u=[];if(0===i)for(var s=0;s<r.getLength();s++)e[a][n+s]=1,u.push([n+s,a]);else for(var l=0;l<r.getLength();l++)e[a+l][n]=1,u.push([n,a+l]);r.setCoordinatesOccupied(u),t.push(r)},getShips:function(){return t},receiveAttack:function(r){if(2===e[r[1]][r[0]]||3===e[r[1]][r[0]])return!1;var n=!1;return t.forEach((function(t){t.getCoordinatesOccupied().forEach((function(a){a[0]===r[0]&&a[1]===r[1]&&(e[r[1]][r[0]]=2,t.hit(),n=!0)}))})),n||(e[r[1]][r[0]]=3),!0},allShipsAreSunk:function(){var e=!0;return t.forEach((function(t){t.isSunk()||(e=!1)})),e}}},w=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=0,i=[];switch(e){case"carrier":t=5;break;case"battleship":t=4;break;case"cruiser":case"submarine":t=3;break;case"destroyer":t=2}var o=function(){return t},c=function(){return n},u=function(){return r},s=function(){return i},l=function(e){i=e},d=function(){a++},h=function(){return a},p=function(){return t===a};return{getLength:o,getOrientation:c,getPlacementCoordinates:u,getCoordinatesOccupied:s,setCoordinatesOccupied:l,hit:d,getTimesHit:h,isSunk:p}};function T(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 90vw;\n  justify-content: space-between;\n  margin: 0 auto;\n"]);return T=function(){return e},e}var A=r(25),G=d.a.div(T()),B=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),r=t[0],i=t[1],o=Object(a.useState)(0),c=Object(u.a)(o,2),l=c[0],d=c[1],h=Object(a.useState)(Array(5).fill(0)),p=Object(u.a)(h,2),b=p[0],f=p[1],g=Object(a.useState)(Array(5).fill(!1)),O=Object(u.a)(g,2),v=O[0],m=O[1],y=Object(a.useState)(x()),S=Object(u.a)(y,2),T=S[0],B=S[1],D=Object(a.useState)(T.getGameboardState()),M=Object(u.a)(D,2),I=M[0],P=M[1],C=Object(a.useState)(function(){var e=x(),t=[0,0],r=0,n=!1;return Object(s.a)(Array(5).keys()).forEach((function(a){for(;!n;)t=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],r=Math.round(Math.random()),0===a?null!==e.placeShip(w("carrier",t,r))&&(n=!0):1===a?null!==e.placeShip(w("battleship",t,r))&&(n=!0):2===a?null!==e.placeShip(w("cruiser",t,r))&&(n=!0):3===a?null!==e.placeShip(w("submarine",t,r))&&(n=!0):null!==e.placeShip(w("destroyer",t,r))&&(n=!0);n=!1})),e}()),E=Object(u.a)(C,2),N=E[0],L=E[1],J=Object(a.useState)(N.getGameboardState()),H=Object(u.a)(J,2),Y=H[0],q=H[1],z=Object(a.useState)(!1),F=Object(u.a)(z,2),K=F[0],Q=F[1],R=Object(a.useState)(!1),U=Object(u.a)(R,2),V=U[0],W=U[1],X=function(e,t,n){var a,o,c=w(r,t,b[n]);"h"===e&&!1===v[n]&&(a=A.cloneDeep(T),o=Object(s.a)(v),a.placeShip(c),o[n]=!0,B(a),P(T.getGameboardState()),m(o),Q(o.every((function(e){return!0===e})))),i("")},Z=function(e,t,r){if(r&&"c"===t){var n=A.cloneDeep(N);n.receiveAttack(e)&&(L(n),q(n.getGameboardState()),Q(!1),n.allShipsAreSunk()?W(!0):function(){for(var e=Math.floor(100*Math.random()),t=e%10,r=e<10?0:Number(e.toString().substring(0,1)),n=A.cloneDeep(T),a=n.receiveAttack([t,r]);!a;)t=(e=Math.floor(100*Math.random()))%10,r=e<10?0:Number(e.toString().substring(0,1)),a=n.receiveAttack([t,r]);n.allShipsAreSunk()?W(!0):Q(!0)}())}};return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Battleship"}),Object(n.jsxs)(G,{id:"game",children:[Object(n.jsx)(j,{playerType:"h",drop:X,gameboard:I,currentShipId:l,isPlayerTurn:K,isGameOver:V,clickEnemyGrid:Z}),Object(n.jsx)(k,{drag:function(e,t){i(e),d(t)},orientations:b,clickShip:function(e,t){var r=Object(s.a)(b);r[e]=t,f(r)},shipOnPlayerBoard:v}),Object(n.jsx)(j,{playerType:"c",drop:X,gameboard:Y,currentShipId:l,isPlayerTurn:K,isGameOver:V,clickEnemyGrid:Z})]})]})};c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.660b486f.chunk.js.map