(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,a){},156:function(e,t,a){e.exports=a.p+"static/media/mark.d73d5003.png"},194:function(e,t,a){e.exports=a(409)},199:function(e,t,a){},200:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},404:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){},407:function(e,t,a){},408:function(e,t,a){},409:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(61),s=a.n(o),l=(a(199),a(7)),i=a(8),c=a(10),m=a(9),u=a(11),d=a(29),p=a(30),v=a(154),b=a(62),g=a(155),h=a.n(g),f=a(42),y=a.n(f),E=a(156),k=a.n(E),C=(a(200),[{title:"Mark",backside:"Mark is Manufacturing Line Manager ",post:"Manufacturing Line Manager",tool:"Predictive Maintanance",imgurl:k.a,redirect:"/pm",redirectText:"Run Demo"},{title:"Carla",backside:"Carla is Quality Assurance Inspector",post:"Quality Assurance Inspector",tool:"Visual Insights",imgurl:y.a,redirect:"/vi",redirectText:"Run Demo"},{title:"Carla",backside:"Carla is Quality Assurance Inspector",post:"Quality Assurance Inspector",tool:"Visual Insights",imgurl:y.a,redirect:"/vi",redirectText:"Run Demo"},{title:"Carla",backside:"Carla is Quality Assurance Inspector",post:"Quality Assurance Inspector",tool:"Visual Insights",imgurl:y.a,redirect:"/vi",redirectText:"Run Demo"},{title:"Carla",backside:"Carla is Quality Assurance Inspector",post:"Quality Assurance Inspector",tool:"Visual Insights",imgurl:y.a,redirect:"/vi",redirectText:"Run Demo"},{title:"Carla",backside:"Carla is Quality Assurance Inspector",post:"Quality Assurance Inspector",tool:"Visual Insights",imgurl:y.a,redirect:"/vi",redirectText:"Run Demo"}]),w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).handleClick=function(t){return function(){var a="isFlipped".concat(t);e.setState(Object(v.a)({},a,!e.state[a]))}},e.state={isFlipped0:!1,isFlipped1:!1,isFlipped2:!1,personas:C},e.handleClick=e.handleClick.bind(Object(b.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"cards"},this.state.personas.map(function(t,a){console.log(a);var n="isFlipped".concat(a);return r.a.createElement("div",{className:"card"},r.a.createElement(h.a,{isFlipped:e.state[n]},r.a.createElement("div",{key:"front",className:"mycard"},r.a.createElement("img",{src:t.imgurl,onClick:e.handleClick(a)}),r.a.createElement("div",{className:"frontText"},r.a.createElement("div",{className:"frontTitle"}," ",t.title),t.post),r.a.createElement("div",{className:"frontText"},r.a.createElement("br",null),t.tool)),r.a.createElement("div",{onClick:e.handleClick(a),key:"back",className:"mycard"},r.a.createElement("div",{className:"text"},t.backside))),r.a.createElement(d.b,{to:t.redirect},r.a.createElement("div",{className:"frontText2"},r.a.createElement("br",null),t.redirectText," ",r.a.createElement("span",null,"\u2192"))))}))}}]),t}(n.Component),j=(a(209),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"parent"},r.a.createElement("div",{className:"P1"},r.a.createElement("h1",null,"AI Powered Manufacturing with Watson IoT")),r.a.createElement("div",{className:"P2"},r.a.createElement(w,null)),r.a.createElement("div",{className:"P3"},r.a.createElement("h1",null,"Watson IoT")))}}]),t}(n.Component)),O=(a(210),function(e){return r.a.createElement("div",{className:"Header"},r.a.createElement(d.b,{to:"/"},r.a.createElement("div",null,r.a.createElement("button",null,"arrow"))),r.a.createElement("div",null,e.role))}),N=(a(211),function(e){return r.a.createElement("div",{className:"Persona-time"},r.a.createElement("div",null,"Good-morning ",e.name),r.a.createElement("div",null,"Local Time, Date"),r.a.createElement("div",null,"Weather and Weather Event"))}),D=(a(212),function(e){var t=[{device:"yaskawa",overview:" Yaskawa Overview"},{device:"kuka",overview:" Kuka Overview"},{device:"replay",overview:" Replay Overview"}].map(function(t){return r.a.createElement("div",{className:"Robot",key:t.device},r.a.createElement("div",null,t.device),r.a.createElement("div",null,t.overview),r.a.createElement("button",{value:t.device,onClick:e.clickHandler},"Details"))});return r.a.createElement("div",{className:"Robot-list"},t)}),S=function(e){return e.children},q=(a(213),a(66)),x=a.n(q),M=a(27),I=a(167),T=a.n(I),A=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.a.get("http://aipm-gsc-nodered.mybluemix.net/yaskawaHistory").then(function(t){e.setState({robotData:t.data.yaskawaHistory})})}},{key:"render",value:function(){if(void 0===this.state.robotData)return r.a.createElement("div",null);this.state.robotData.map(function(e){var t=JSON.parse(e);return{temp:t.bTemp,tempValue:Number(t.bTemp)}});return r.a.createElement(M.d,{width:300,height:200,data:A,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(M.a,{strokeDasharray:"3 3"}),r.a.createElement(M.f,{dataKey:"name"}),r.a.createElement(M.g,null),r.a.createElement(M.e,null),r.a.createElement(M.b,null),r.a.createElement(M.c,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}))}}]),t}(n.PureComponent),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={pmData:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=r.a.createElement("p",null,"No Data ");return this.state.pmData&&(e=r.a.createElement("div",null,r.a.createElement("div",{className:"pmContainer"},r.a.createElement("div",{className:"pmDetails"},r.a.createElement(x.a,{value:this.state.pmData.bTemp,width:300,height:200,color:"#959DFF",label:"Temperature"})),r.a.createElement("div",{className:"pmDetails"},r.a.createElement("h1",null,this.state.pmData.bTemp)),r.a.createElement("div",{className:"pmDetails"},r.a.createElement(F,null))),r.a.createElement("div",{className:"pmContainer"},r.a.createElement("div",{className:"pmDetails"},r.a.createElement(x.a,{value:this.state.pmData.lTemp,width:300,height:200,color:"#959DFF",label:"Temperature"})),r.a.createElement("div",{className:"pmDetails"},r.a.createElement("h1",null,this.state.pmData.lTemp)),r.a.createElement("div",{className:"pmDetails"},r.a.createElement(F,null))),r.a.createElement("div",{className:"pmContainer"},r.a.createElement("div",{className:"pmDetails"},r.a.createElement(x.a,{value:this.state.pmData.rTemp,width:300,height:200,color:"#959DFF",label:"Temperature"})),r.a.createElement("div",{className:"pmDetails"},r.a.createElement("h1",null,this.state.pmData.rTemp)),r.a.createElement("div",{className:"pmDetails"},r.a.createElement(F,null))))),r.a.createElement("div",null,e)}}]),t}(n.PureComponent);P.getDerivedStateFromProps=function(e,t){return{pmData:e.pmData}};var H=P,R=a(65),L=(a(404),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={mqttClient:null},a.mqttCredentials=[{clientId:"a:qjue4x:"+Math.random().toString(16).substr(2,8),broker:"qjue4x.messaging.internetofthings.ibmcloud.com",subscribe:"iot-2/type/+/id/+/evt/+/fmt/json",username:"a-qjue4x-al7mm3hvo4",password:"+4B0N)ZGk@BVH1BFy9"},{clientId:"a:xbyrsp:"+Math.random().toString(16).substr(2,8),broker:"xbyrsp.messaging.internetofthings.ibmcloud.com",subscribe:"iot-2/type/+/id/+/evt/+/fmt/json",username:"a-xbyrsp-0rf3yixsqn",password:"2I+?sdkfxml_OR8SMR"}],a.wsCredentials={yaskawa:"wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc/yaskawa",kuka:"wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc/kuka",replay:"wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc"},a.ws=null,a.webSocketHandler=function(){var e,t=a.wsCredentials[a.props.robot];e=new WebSocket(t),a.ws=e,e.onmessage=function(e){var t=JSON.parse(e.data);if("yaskawaTorqueTemp"!=t.msgType&&"yaskawaRobotHealth"!=t.msgType){var n=t.payload.slot;if(a.props.robot===t.payload.robotEnvironment&&"image"===t.payload.type){console.log("ws image msg.payload.robotEnvironment="+t.payload.robotEnvironment);var r=t.payload.image.toString(),o=a.state.imgdata;o[n-1].slot=n,o[n-1].img=r,a.setState({imgdata:o},function(){console.log("pmIMAGE - Parent"),console.log(a.state)})}}},e.onopen=function(){console.log("connected")},e.onclose=function(){setTimeout(a.webSocketHandler,3e3)}},a.mqttHandler=function(e){var t=null,n=null,r=null,o=null;switch(e){case"yaskawa":t=a.mqttCredentials[0].clientId,n=a.mqttCredentials[0].broker,r=a.mqttCredentials[0].username,o=a.mqttCredentials[0].password;break;case"kukas":t=a.mqttCredentials[1].clientId,n=a.mqttCredentials[1].broker,r=a.mqttCredentials[1].username,o=a.mqttCredentials[1].password,console.log("switch - device -"+e);break;case"replay":t=a.mqttCredentials[0].clientId,n=a.mqttCredentials[0].broker,r=a.mqttCredentials[0].username,o=a.mqttCredentials[0].password,console.log("switch - device -"+e)}var s=new R.Client(n,1883,t);s.onConnectionLost=a.onConnectionLost,s.onMessageArrived=a.onMessageArrived,a.setState({mqttClient:s},function(){a.state.mqttClient.connect({onSuccess:a.onConnect,onFailure:a.onFailure,userName:r,password:o})})},a.onConnectionLost=function(e){0!==e.errorCode&&console.log("onConnectionLost:"+e.errorMessage)},a.onMessageArrived=function(e){console.log("inside onMessage 2"),a.onMessageArrivedCommon(e)},a.onConnect=function(e){var t=null;switch(a.props.robot){case"yaskawa":case"kuka":case"replay":t=a.mqttCredentials[0].subscribe,console.log("switch - subscribe -"+a.props.robot)}console.log("onConnect"),a.state.mqttClient.subscribe(t)},a.onFailure=function(e){console.log("onFailure"+JSON.stringify(e))},a.onMessageArrivedCommon=function(e){var t=e.destinationName.split("/"),n=(t[4],t[6]);if("json"===t[8]){var r=JSON.parse(e.payloadString);"torque"!==n&&"update"!==n||a.setState({pmData:r})}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.webSocketHandler(),this.mqttHandler(this.props.robot)}},{key:"componentWillUnmount",value:function(){this.ws&&this.ws.close()}},{key:"render",value:function(e){var t=r.a.createElement(H,{pmData:this.state.pmData});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",null,this.props.robot),r.a.createElement("div",{className:"pmDataContainer"}),r.a.createElement("div",{className:"pmDataContainer"},t)))}}]),t}(n.Component)),W=(a(405),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={pmDashboard:!1,robotEnvironment:null},a.robotClickHandler=function(e){a.setState({pmDashboard:!0,robotEnvironment:e.target.value}),console.log(e.target.value)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e="";return e=this.state.pmDashboard?r.a.createElement(L,{robot:this.state.robotEnvironment}):r.a.createElement(S,null,r.a.createElement("div",{className:"persona-section"},r.a.createElement(N,{name:"Carla"}),r.a.createElement("div",{style:{border:"1px solid green",padding:"10px",margin:"10px"}}," Assigned to line 3 today")),r.a.createElement(D,{clickHandler:this.robotClickHandler})),r.a.createElement("div",{className:"PredicitiveMaintenance"},r.a.createElement(O,{role:"Line Manager Dashboard"}),e)}}]),t}(n.Component)),Q=(a(153),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={slot:null,img:null},a.renderImage=function(){var e=r.a.createElement("p",null,"No image "),t=null;a.state.img&&(t={backgroundImage:"url(data:image/jpeg;base64,"+a.state.img+")",backgroundRepeat:"no-repeat",width:"100%",height:"100%",backgroundSize:"contain",backgroundPosition:"center"},e=r.a.createElement("div",{style:t},"image: "));return e},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"imgContainer"},this.renderImage())}}]),t}(n.PureComponent));Q.getDerivedStateFromProps=function(e,t){return{slot:e.slot,img:e.img}};var B=Q,J=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={slot:null,score:null},a.renderScore=function(){var e=r.a.createElement("p",null,"No score ");return a.state.score&&(e=r.a.createElement("div",null,"Score:",r.a.createElement("div",null,"iotTopic:  ",a.state.score[0]),r.a.createElement("div",null,"robotEnvironment:  ",a.state.score[0]),r.a.createElement("div",null,"mySpeakingClassification:  ",a.state.score[1]),r.a.createElement("div",null,"myConfidence:  ",a.state.score[2]),r.a.createElement("div",null,"mySlot:  ",a.state.score[3]))),e},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"scoreContainer"},this.renderScore())}}]),t}(n.PureComponent);J.getDerivedStateFromProps=function(e,t){return{slot:e.slot,score:e.score}};var V=J,G=(a(406),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={mqttClient:null,imgdata:[{slot:null,img:null},{slot:null,img:null},{slot:null,img:null},{slot:null,img:null}],scoredata:[{slot:null,score:null},{slot:null,score:null},{slot:null,score:null},{slot:null,score:null}]},a.mqttCredentials=[{clientId:"a:qjue4x:"+Math.random().toString(16).substr(2,8),broker:"qjue4x.messaging.internetofthings.ibmcloud.com",subscribe:"iot-2/type/+/id/+/evt/+/fmt/json",username:"a-qjue4x-al7mm3hvo4",password:"+4B0N)ZGk@BVH1BFy9"},{clientId:"a:xbyrsp:"+Math.random().toString(16).substr(2,8),broker:"xbyrsp.messaging.internetofthings.ibmcloud.com",subscribe:"iot-2/type/+/id/+/evt/+/fmt/json",username:"a-xbyrsp-0rf3yixsqn",password:"2I+?sdkfxml_OR8SMR"}],a.wsCredentials={yaskawa:"wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc/yaskawa",kuka:"wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc/kuka",replay:"wss://aipm-gsc-nodered.mybluemix.net/ws/aipm-gsc"},a.ws=null,a.webSocketHandler=function(){var e,t=a.wsCredentials[a.props.robot];e=new WebSocket(t),a.ws=e,e.onmessage=function(e){var t=JSON.parse(e.data);if(console.log("MSG"),console.log(t),"yaskawaTorqueTemp"!==t.msgType&&"yaskawaRobotHealth"!==t.msgType)if("image"===t.payload.msgType&&t.payload.robotSource===a.props.robot){var n=t.payload.slot;console.log("ws image msg.payload.robotEnvironment="+t.payload.robotEnvironment);var r=t.payload.image.toString(),o=a.state.imgdata;o[n-1].slot=n,o[n-1].img=r,a.setState({imgdata:o},function(){console.log("viIMAGE - Parent"),console.log(a.state)})}else if("scoring"===t.payload.type&&t.payload.robotSource===a.props.robot){console.log("Score MSG"),console.log(t);var s=[t.payload.robotSource,t.payload.speakingClassification,t.payload.confidence,t.payload.slot],l=a.state.scoredata;l[t.payload.slot-1].score=s,l[t.payload.slot-1].slot=t.payload.slot,a.setState({scoredata:l})}},e.onopen=function(){console.log("connected")}},a.mqttHandler=function(e){var t=null,n=null,r=null,o=null;switch(e){case"yaskawa001":t=a.mqttCredentials[0].clientId,n=a.mqttCredentials[0].broker,r=a.mqttCredentials[0].username,o=a.mqttCredentials[0].password;break;case"kuka001":t=a.mqttCredentials[1].clientId,n=a.mqttCredentials[1].broker,r=a.mqttCredentials[1].username,o=a.mqttCredentials[1].password;break;case"replay":t=a.mqttCredentials[0].clientId,n=a.mqttCredentials[0].broker,r=a.mqttCredentials[0].username,o=a.mqttCredentials[0].password}var s=new R.Client(n,1883,t);s.onConnectionLost=a.onConnectionLost,s.onMessageArrived=a.onMessageArrived,a.setState({mqttClient:s},function(){a.state.mqttClient.connect({onSuccess:a.onConnect,onFailure:a.onFailure,userName:r,password:o})})},a.onConnectionLost=function(e){0!==e.errorCode&&console.log("onConnectionLost:"+e.errorMessage)},a.onMessageArrived=function(e){console.log("inside onMessage 2"),a.onMessageArrivedCommon(e)},a.onConnect=function(e){var t=null;switch(a.props.robot){case"yaskawa001":case"kuka001":case"replay":t=a.mqttCredentials[0].subscribe,console.log("switch - subscribe -"+a.props.robot)}console.log("onConnect"),a.state.mqttClient.subscribe(t)},a.onFailure=function(e){console.log("onFailure"+JSON.stringify(e))},a.onMessageArrivedCommon=function(e){var t=e.destinationName.split("/"),n=t[4],r=t[6];if("json"===t[8]){var o=JSON.parse(e.payloadString);if(console.log("wholedata",r,o),"score"===r){var s=[n,o.speakingClassification,o.confidence,o.slot],l=a.state.scoredata;l[o.slot-1].score=s,l[o.slot-1].slot=o.slot,a.setState({scoredata:l})}}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.webSocketHandler()}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount"),this.ws&&(this.ws.close(),console.log("YES! - componentWillUnmount"))}},{key:"render",value:function(e){var t=this.state.imgdata.map(function(e,t){return r.a.createElement(B,{img:e.img,slot:e.slot,key:t})}),a=this.state.scoredata.map(function(e,t){return r.a.createElement(V,{slot:e.slot,score:e.score,key:t})});return r.a.createElement("div",{className:"dashboardContainer"},r.a.createElement("div",null,this.props.robot),r.a.createElement("div",{className:"imgScoreContainer"},t),r.a.createElement("div",{className:"imgScoreContainer"},a))}}]),t}(n.Component)),U=(a(407),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={viDashboard:!1,robotEnvironment:null},a.robotClickHandler=function(e){a.setState({viDashboard:!0,robotEnvironment:e.target.value}),console.log(e.target.value)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e="";return e=this.state.viDashboard?r.a.createElement(G,{robot:this.state.robotEnvironment}):r.a.createElement(S,null,r.a.createElement("div",{className:"persona-section"},r.a.createElement(N,{name:"Carla"}),r.a.createElement("div",{style:{border:"1px solid green",padding:"10px",margin:"10px"}}," Assigned to line 3 today")),r.a.createElement(D,{clickHandler:this.robotClickHandler})),r.a.createElement("div",{className:"VisualInsights"},r.a.createElement(O,{role:"Line Manager Dashboard"}),e)}}]),t}(n.Component)),K=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:j}),r.a.createElement(p.a,{path:"/pm",component:W}),r.a.createElement(p.a,{path:"/vi",component:U})))}}]),t}(n.Component);a(408);var Y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,a){e.exports=a.p+"static/media/carla.122e76ac.png"}},[[194,1,2]]]);
//# sourceMappingURL=main.9bea1af8.chunk.js.map