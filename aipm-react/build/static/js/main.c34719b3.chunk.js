(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,a){},157:function(e,t,a){e.exports=a.p+"static/media/carla.122e76ac.png"},158:function(e,t,a){e.exports=a.p+"static/media/mark.d73d5003.png"},159:function(e,t,a){e.exports=a.p+"static/media/Paul.fe133dcc.png"},160:function(e,t,a){e.exports=a.p+"static/media/Rhonda.c7170264.png"},161:function(e,t,a){e.exports=a.p+"static/media/Joe.ef8adf14.png"},162:function(e,t,a){e.exports=a.p+"static/media/pene.6e31cf52.png"},199:function(e,t,a){e.exports=a(420)},204:function(e,t,a){},205:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},408:function(e,t,a){},409:function(e,t,a){},410:function(e,t,a){},411:function(e,t,a){},412:function(e,t,a){},413:function(e,t,a){},414:function(e,t,a){},415:function(e,t,a){},417:function(e,t,a){},418:function(e,t,a){},419:function(e,t,a){},420:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(60),l=a.n(o),c=(a(204),a(7)),i=a(8),s=a(11),m=a(9),u=a(10),p=a(28),d=a(29),v=a(155),h=a(61),g=a(156),b=a.n(g),E=a(157),f=a.n(E),y=a(158),k=a.n(y),w=a(159),D=a.n(w),O=a(160),N=a.n(O),j=a(161),C=a.n(j),T=a(162),P=a.n(T),S=(a(205),[{title:"Mark",backside:"Mark is Manufacturing Line Manager ",post:"Manufacturing Line Manager",tool:"Predictive Maintanance",imgurl:k.a,redirect:"/pm",redirectText:"Run Demo"},{title:"Carla",backside:"Carla is Quality Assurance Inspector",post:"Quality Assurance Inspector",tool:"Visual Insights",imgurl:f.a,redirect:"/vi",redirectText:"Run Demo"},{title:"Paul",backside:"Paul is Equipment Maintenance Assistant",post:"Plant Manager",tool:"Equipment Maintenance Advisor",imgurl:D.a,redirect:"/vi",redirectText:"Run Demo"},{title:"Joe",backside:"Joe is Plant Technician",post:"Plant Technician",tool:"Procurement Manager",imgurl:C.a,redirect:"/vi",redirectText:"Run Demo"},{title:"Rhonda",backside:"Rhonda is Operations Manager",post:"Operations Manager",tool:"Net App",imgurl:N.a,redirect:"/vi",redirectText:"Run Demo"},{title:"Penelope",backside:"Penelope is Procurement Manager",post:"Procurement Manager",tool:"SAP, Blockchain",imgurl:P.a,redirect:"/vi",redirectText:"Run Demo"}]),x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleClick=function(t){return function(){var a="isFlipped".concat(t);e.setState(Object(v.a)({},a,!e.state[a]))}},e.state={isFlipped0:!1,isFlipped1:!1,isFlipped2:!1,personas:S},e.handleClick=e.handleClick.bind(Object(h.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"cards"},this.state.personas.map(function(t,a){console.log(a);var n="isFlipped".concat(a);return r.a.createElement("div",{className:"card",key:t.title},r.a.createElement(b.a,{isFlipped:e.state[n]},r.a.createElement("div",{key:"front",className:"mycard"},r.a.createElement("img",{src:t.imgurl,onClick:e.handleClick(a)}),r.a.createElement("div",{className:"frontText"},r.a.createElement("div",{className:"frontTitle"}," ",t.title),t.post),r.a.createElement("div",{className:"frontText"},r.a.createElement("br",null),t.tool)),r.a.createElement("div",{onClick:e.handleClick(a),key:"back"},r.a.createElement("div",{className:"text"},t.backside))),r.a.createElement(p.b,{to:t.redirect},r.a.createElement("div",{className:"frontText2"},r.a.createElement("br",null),t.redirectText," ",r.a.createElement("span",null,"\u2192"))))}))}}]),t}(n.Component),M=(a(214),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"parent"},r.a.createElement("div",{className:"P1"},r.a.createElement("h1",null,"AI Powered Manufacturing with Watson IoT")),r.a.createElement("div",{className:"P2"},r.a.createElement(x,null)),r.a.createElement("div",{className:"P3"},r.a.createElement("h1",null,"Watson IoT")))}}]),t}(n.Component)),H=(a(215),function(e){return e.children}),F=function(e){var t=function(){var e=new Date;return["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+" "+e.getDate()+"th, "+e.getFullYear()}(),a=null;return"Carla"===e.name&&(a=r.a.createElement(H,null,r.a.createElement("div",{className:"topBottom"},r.a.createElement("div",null,"Your Average Accuracy"),r.a.createElement("div",null,"98%")),r.a.createElement("div",{className:"topBottom"},r.a.createElement("div",null,"Your Average Speed"),r.a.createElement("div",null,"34/min")))),r.a.createElement("div",{className:"personaEnv"},r.a.createElement("div",{className:"topBottom"},r.a.createElement("div",null,"Good-morning ",e.name),r.a.createElement("div",null,t)),r.a.createElement("div",{className:"personaWeather"},r.a.createElement("div",null,r.a.createElement("span",null,"Thunderstorm")),r.a.createElement("div",null,"Temperature 27"),r.a.createElement("div",null,"Humidity 97%")),a)},A=(a(216),a(217),function(e){var t=e.classname+" basicCard";return r.a.createElement("div",{className:t},e.children)}),R=function(e){var t=[{device:"yaskawa",overview:" Yaskawa Overview"},{device:"kuka",overview:" Kuka Overview"},{device:"replay",overview:" Replay Overview"}].map(function(t){return r.a.createElement(A,{key:t.device},r.a.createElement("div",{className:"Robot"},r.a.createElement("div",null,t.device),r.a.createElement("div",null,t.overview),r.a.createElement("button",{value:t.device,onClick:e.clickHandler},"Details")))});return r.a.createElement("div",{className:"Robot-list"},t)},q=a(93),I=(a(97),a(62)),L=a.n(I),J=a(30),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(void 0===this.props.data)return r.a.createElement("div",null);var e,t,a;switch(this.props.type){case"tempUpper":t="temp",a="Temperatue",e=this.props.data.slice(0,10).map(function(e){return{temp:e.tempUpper,Temperatue:e.tempUpper}});break;case"tempMiddle":t="temp",a="Temperatue",e=this.props.data.slice(0,10).map(function(e){return{temp:e.tempMiddle,Temperatue:e.tempMiddle}});break;case"tempLower":t="temp",a="Temperatue",e=this.props.data.slice(0,10).map(function(e){return{temp:e.tempLower,Temperatue:e.tempLower}});break;case"xPos":t="xPos",a="X-Position",e=this.props.data.slice(0,10).map(function(e){return{xPos:e.posUpper.toFixed(2),"X-Position":e.posUpper.toFixed(2)}});break;case"yPos":t="yPos",a="Y-Position",e=this.props.data.slice(0,10).map(function(e){return{yPos:e.posMiddle.toFixed(2),"Y-Position":e.posMiddle.toFixed(2)}});break;case"zPos":t="zPos",a="Z-Position",e=this.props.data.slice(0,10).map(function(e){return{zPos:e.posLower.toFixed(2),"Z-Position":e.posLower.toFixed(2)}})}return r.a.createElement(J.d,{width:400,height:200,data:e,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(J.a,{strokeDasharray:"3 3"}),r.a.createElement(J.f,{dataKey:t}),r.a.createElement(J.e,null),r.a.createElement(J.b,null),r.a.createElement(J.c,{type:"monotone",dataKey:a,stroke:"#8884d8",activeDot:{r:8}}))}}]),t}(n.PureComponent),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={pmData:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pmContainerRight"},r.a.createElement("div",{className:"pmDetails"},r.a.createElement(L.a,{value:this.props.pmData[this.props.pmData.length-1][this.props.torqueType].toFixed(0),width:300,height:200,min:0,max:1e4,color:"#959DFF",label:"Torque"})),r.a.createElement("div",{className:"pmDetails"},r.a.createElement("h1",null,Math.floor(this.props.pmData[this.props.pmData.length-1][this.props.torqueType])),"Units"),r.a.createElement("div",{className:"pmDetails"},r.a.createElement(U,{type:this.props.tempType,data:this.props.pmData})),r.a.createElement("div",{className:"pmDetails"},r.a.createElement(U,{type:this.props.posDirection,data:this.props.pmData})))}}]),t}(n.PureComponent);W.getDerivedStateFromProps=function(e,t){return{pmData:e.pmData}};var B=W,Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={pmData:null,pmHealthData:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=r.a.createElement("p",null,"No Data ");return console.log(this.props),this.props.pmData&&this.props.pmHealthData&&(console.log(this.props.pmHealthData),e=r.a.createElement("div",{className:"pmContainer"},r.a.createElement("div",{className:"pmContainerLeft"},r.a.createElement("div",{className:"pmContainerRight"},r.a.createElement(L.a,{value:this.props.pmHealthData[this.props.pmHealthData.length-1].toFixed(2),width:300,height:200,color:"#959DFF",label:"Health"})),r.a.createElement("div",{className:"pmContainerRight"},"Details"),r.a.createElement("div",{className:"pmContainerRight"},"Details")),r.a.createElement("div",null,r.a.createElement(B,{pmData:this.props.pmData,torqueType:"torqueUpper",tempType:"tempUpper",posDirection:"xPos"}),r.a.createElement(B,{pmData:this.props.pmData,torqueType:"torqueMiddle",tempType:"tempMiddle",posDirection:"yPos"}),r.a.createElement(B,{pmData:this.props.pmData,torqueType:"torqueLower",tempType:"tempLower",posDirection:"zPos"})))),r.a.createElement("div",null,e)}}]),t}(n.PureComponent);Y.getDerivedStateFromProps=function(e,t){return{pmData:e.pmData,pmHealthData:e.pmHealthData}};var z=Y,G=a(66),K=a.n(G),Q=(a(408),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={pmHealthData:[0]},a.wsCredentials={yaskawa:"wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc/yaskawa",kuka:"wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc/kuka",replay:"wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc"},a.ws=null,a.webSocketHandler=function(){var e,t=a.wsCredentials[a.props.robot];e=new WebSocket(t),a.ws=e,e.onmessage=function(e){var t=JSON.parse(e.data);switch(t=void 0===t.payload?t:t.payload,console.log(t),t.msgType){case"yaskawaTorqueTemp":case"kukaTorqueTemp":case"kukaTorque":console.log(t),a.setState({pmData:[].concat(Object(q.a)(a.state.pmData),[t])});break;case"yaskawaRobotHealth":case"kukaRobotHealth":a.setState({pmHealthData:[].concat(Object(q.a)(a.state.pmHealthData),[t.overallHealth])})}},e.onopen=function(){console.log("connected")},e.onclose=function(){setTimeout(a.webSocketHandler,3e3)}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;switch(this.webSocketHandler(),this.props.robot){case"yaskawa":K.a.get("http://aipm-gsc-nodered.mybluemix.net/yaskawaHistory").then(function(t){var a=t.data.yaskawaHistory.map(function(e){return JSON.parse(e)});e.setState({pmData:a})});break;case"kuka":K.a.get("http://aipm-gsc-nodered.mybluemix.net/kukaHistory").then(function(t){var a=t.data.kukaHistory.map(function(e){return JSON.parse(e)});e.setState({pmData:a})});break;case"replay":K.a.get("http://aipm-gsc-nodered.mybluemix.net/replayHistory").then(function(t){var a=t.data.replayHistory.map(function(e){return JSON.parse(e)});e.setState({pmData:a})})}}},{key:"componentWillUnmount",value:function(){this.ws&&this.ws.close()}},{key:"render",value:function(){var e=r.a.createElement(z,{pmData:this.state.pmData,pmHealthData:this.state.pmHealthData});return r.a.createElement(A,null,r.a.createElement("div",null,r.a.createElement("h1",null,this.props.robot)),r.a.createElement("div",{className:"pmDataContainer"},e))}}]),t}(n.Component)),_=(a(409),a(410),function(e){return r.a.createElement("div",{className:"Header"},r.a.createElement(p.b,{to:"/"},r.a.createElement("div",null,r.a.createElement("button",null,"arrow"))),r.a.createElement("div",null,e.role))}),V=(a(411),function(){return r.a.createElement("div",{className:"sideBar"})}),X=(a(412),function(e){return r.a.createElement("div",{className:"screenContents"},e.children)}),Z=(a(413),function(e){return r.a.createElement("div",{className:"screenTop"},e.children)}),$=function(e){return r.a.createElement("div",{className:"layout"},r.a.createElement(_,{role:e.role}),r.a.createElement(V,null),r.a.createElement(Z,null,e.screenTop),r.a.createElement(X,null,e.content),r.a.createElement("div",{className:"rightBar"}),r.a.createElement("div",{className:"footer"},"Watson IoT"))},ee=(a(414),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={pmDashboard:!1,robotEnvironment:null},a.robotClickHandler=function(e){a.setState({pmDashboard:!0,robotEnvironment:e.target.value})},a.getMainContent=function(){var e="";return e=a.state.pmDashboard?r.a.createElement(Q,{robot:a.state.robotEnvironment}):r.a.createElement(R,{clickHandler:a.robotClickHandler}),r.a.createElement("div",{className:"PredicitiveMaintenance"},e)},a.getPersonaEnv=function(){return a.state.pmDashboard?r.a.createElement("div",null,"Dashboard > ",a.state.robotEnvironment):r.a.createElement(F,{name:"Mark"})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.getMainContent(),t=this.getPersonaEnv();return r.a.createElement($,{role:"Manufacturing Line Manager",screenTop:t,content:e})}}]),t}(n.Component)),te=(a(415),function(e){var t=[{line:3,name:"kuka",imgSrc:"img",imgNum:138},{line:7,name:"yaskawa",imgSrc:"img",imgNum:76},{line:2,name:"replay",imgSrc:"img",imgNum:1982}].map(function(t){return r.a.createElement(A,{classname:"lineList-BasicCard"},r.a.createElement("div",{className:"line_contents"},r.a.createElement("div",null,"Re-Inspection"),r.a.createElement("div",{className:"line"},"Line"," "+t.line),r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.imgSrc),r.a.createElement("div",{className:"spanStyle"},r.a.createElement("span",null,t.imgNum+" "," Images"),r.a.createElement("span",null,r.a.createElement("button",{value:t.name,onClick:e.clickHandler},"arrow")))))});return r.a.createElement("div",{className:"lineList"},t)}),ae=(a(154),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={slot:null,img:null},a.renderImage=function(){var e=r.a.createElement("p",null,"No image "),t=null;a.state.img&&(t={backgroundImage:"url(data:image/jpeg;base64,"+a.state.img+")",backgroundRepeat:"no-repeat",width:"100%",height:"100%",backgroundSize:"cover",backgroundPosition:"center"},e=r.a.createElement("div",{style:t}));return e},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(A,{classname:"img-BasicCard"},r.a.createElement("div",{className:"imgContainer background"},this.renderImage()))}}]),t}(n.PureComponent));ae.getDerivedStateFromProps=function(e,t){return{slot:e.slot,img:e.img}};var ne=ae,re=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={slot:null,score:null},a.renderScore=function(){var e=r.a.createElement("p",null,"No score ");return a.state.score&&(e=r.a.createElement("div",{className:"scoreContents"},r.a.createElement("div",null,"Environment:  ",a.state.score[0]),r.a.createElement("div",null,"Classification:  ",a.state.score[1]),r.a.createElement("div",null,"Confidence:  ",a.state.score[2]),r.a.createElement("div",null,"Slot:  ",a.state.score[3]))),e},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(A,{classname:"score-BasicCard"},r.a.createElement("div",{className:"scoreContainer"},this.renderScore()))}}]),t}(n.PureComponent);re.getDerivedStateFromProps=function(e,t){return{slot:e.slot,score:e.score}};var oe=re,le=(a(416),a(417),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={mqttClient:null,imgdata:[{slot:null,img:null},{slot:null,img:null},{slot:null,img:null},{slot:null,img:null}],scoredata:[{slot:null,score:null},{slot:null,score:null},{slot:null,score:null},{slot:null,score:null}]},a.wsCredentials={yaskawa:"wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc/yaskawa",kuka:"wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc/kuka",replay:"wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc"},a.ws=null,a.webSocketHandler=function(){var e,t=a.wsCredentials[a.props.robot];e=new WebSocket(t),a.ws=e,e.onmessage=function(e){var t=JSON.parse(e.data);if(void 0===t.msgType?(t=t.payload,console.log("msg.msgType undefined")):console.log("msg.msgType: "+t.msgType),console.log("props: "+a.props.robot+" msg: "),console.log(t),"yaskawaTorqueTemp"!==t.msgType&&"yaskawaRobotHealth"!==t.msgType)if("image"===t.msgType&&t.robotSource===a.props.robot){var n=t.slot;console.log("ws image msg.payload.robotEnvironment="+t.robotSource);var r=t.image.toString(),o=a.state.imgdata;o[n-1].slot=n,o[n-1].img=r,a.setState({imgdata:o},function(){console.log("viIMAGE - Parent"),console.log(a.state)})}else if("scoring"===t.type&&t.robotSource===a.props.robot){console.log("Score MSG"),console.log(t);var l=[t.robotSource,t.speakingClassification,t.confidence,t.slot],c=a.state.scoredata;c[t.slot-1].score=l,c[t.slot-1].slot=t.slot,a.setState({scoredata:c})}},e.onopen=function(){console.log("connected")}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.webSocketHandler()}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount"),this.ws&&(this.ws.close(),console.log("YES! - componentWillUnmount"))}},{key:"render",value:function(e){var t=this.state.imgdata.map(function(e,t){return r.a.createElement(ne,{img:e.img,slot:e.slot,key:t})}),a=this.state.scoredata.map(function(e,t){return r.a.createElement(oe,{slot:e.slot,score:e.score,key:t})});return r.a.createElement("div",{className:"dashboardContainer"},r.a.createElement("div",{className:"imgScoreContainer"},t),r.a.createElement("div",{className:"imgScoreContainer"},a))}}]),t}(n.Component)),ce=(a(418),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={viDashboard:!1,robotEnvironment:null},a.robotClickHandler=function(e){a.setState({viDashboard:!0,robotEnvironment:e.target.value}),console.log(e.target.value)},a.getMainContent=function(){var e="";return e=a.state.viDashboard?r.a.createElement(le,{robot:a.state.robotEnvironment}):r.a.createElement(H,null,r.a.createElement("div",{className:"tabs"},r.a.createElement("div",{className:"cur_assignment"},"Current Assignments"),r.a.createElement("div",{className:"past_assignment"},"Past Assignments")),r.a.createElement(te,{clickHandler:a.robotClickHandler})),r.a.createElement("div",{className:"VisualInsights"},e)},a.getPersonaEnv=function(){return a.state.viDashboard?r.a.createElement("div",null,"Dashboard > ",a.state.robotEnvironment):r.a.createElement(F,{name:"Carla"})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.getMainContent(),t=this.getPersonaEnv();return r.a.createElement($,{role:"Quality Assurance",screenTop:t,content:e})}}]),t}(n.Component)),ie=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:M}),r.a.createElement(d.a,{path:"/pm",component:ee}),r.a.createElement(d.a,{path:"/vi",component:ce})))}}]),t}(n.Component);a(419);var se=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ie,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},97:function(e,t,a){}},[[199,1,2]]]);
//# sourceMappingURL=main.c34719b3.chunk.js.map