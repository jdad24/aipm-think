// // import axios from 'axios';
// //import * as pm from './index';
//  placeOrder = (orderObj, masterOrderId) => {
//     const url = '/api/PlaceOrder'
//     let orderId = Math.random().toString(36).substr(2, 7);

//     const newOrder = JSON.parse(JSON.stringify(orderObj));

//     newOrder.orderId = orderId;
//     if (masterOrderId) {
//         newOrder.masterOrderId = masterOrderId;
//     } else {
//         delete newOrder.masterOrderId;
//     }

//     let result;
//     axios.post(url, {
//         'obj': JSON.stringify(newOrder)
//     },
//         function (data, status, xhr) {
//             logStatus(data, status, xhr);
//         }).then(res => {
//             console.log(res.data);
//             result = res.data
//             console.log(result);
//             return result;
//         });

//     return orderId;
// }

//  PO_acknowledgement = (oid) => {

//     // const url = "https://sinv-copilot.isl.edst.ibm.com:44390/sap/opu/odata/sap/ZDSS_PO_CONFIRMATION_SRV/POSet(Po='"+oid+"')?$format=json";
//     // const url = "/PO_Acknowledgement?Po='" + oid + "'";4500001585



//    const url = "/PO_Acknowledgement?Po="+oid;
//    axios.get(url);
//     // $.ajax({
//     //     async: false,
//     //     url: url,
//     //     type: "GET",
//     //     //beforeSend: function(xhr){xhr.setRequestHeader("Authorization", "Basic SFRfREVNTzppYm1nc2M=")},
//     //     //headers: { 'Authorization': 'Basic SFRfREVNTzppYm1nc2M=' },
//     //     success: function (response) {
//     //         console.log(response);
//     //         myvidata = response;
//     //         return response;
//     //     }
//     // });

    
// }

//  send_VIdata = (data) => {
//     //const url = "/send_VIdata";
//     // console.log("vidata from rest util",data);
//     const vidata = JSON.stringify(data);

//     //UNCOMMENT
//     // $.post(url,vidata).done(function(response) {
//     //     console.log(response);
//     //    routeLot(sessionStorage.getItem('lid'), response);
//     //   });
//     //UNCOMMENT

//       //adding for demo!!
//       var resp = ['wait', 'accepted', 'rejected'];
//       var dindex= Math.floor(Math.random() * 3);
//       routeLot(sessionStorage.getItem('lid'), resp[dindex]);
//     // $.ajax({
//     //     type: 'POST',
//     //     url: url,
//     //     data: myvidata
//     // })
// }

// // function getLID(decision){

// //     routeLot(sessionStorage.getItem('lid'), decision);
// // }


//  getVIdata = (dataQuality, dataIndex, masteroid) => {
//     const url = "https://aipm-gsc-nodered.mybluemix.net/vidata?dataQuality=notSet&dataIndex=-1";

//     axios.ajax({
//         url: url,
//         type: "GET",
//         success: function (response) { 
//             const vidata = response.vidata;
//             package_and_send_VIdata(vidata, masteroid);
//             // send_VIdata(vidata);
//             console.log(vidata); 
//             //buildView(vidata);
//             return response;
//         }
//     });
// }

//  package_and_send_VIdata = (data,masteroid) => {
//     //const moid = getSessionId();
//     const moid = "4500001622";
//     console.log(masteroid.toString());
//     //const moid = masteroid;
    
//     // let vidata = {
//     //     "record": [
//     //         {
//     //             "purchaseOrder": moid,
//     //             "sampleId": "1",
//     //             "result": "GOOD"
//     //         },
//     //         {
//     //             "purchaseOrder": moid,
//     //             "sampleId": "2",
//     //             "result": "GOOD"
//     //         }
//     //     ]
//     // }

//     let vidata = {
//         "record": []
//     }

//     for(let i=0;i<data.length;i++){
//         let confidence=[];
//         let type=[];
//         let max_confidence;
//         let max_type;
//         let board_classifications = {};
//         for(let j=0;j<data[i]['detections'][0]['probableTypes'].length; j++){
//             // console.log(data[i]['detections'][0]['probableTypes'][j]['confidence']);
//             // console.log(data[i]['detections'][0]['probableTypes'][j]['type']);
//             confidence.push(parseInt(data[i]['detections'][0]['probableTypes'][j]['confidence']));
//             type.push(data[i]['detections'][0]['probableTypes'][j]['type']);
//             //board_classifications[data[i]['detections'][0]['probableTypes'][j]['type']] = data[i]['detections'][0]['probableTypes'][j]['confidence'];

//         }
//         // console.log("confidence", confidence);
//         max_confidence = Math.max.apply(null,confidence);
//         // console.log("max_confidence", max_confidence);
//         max_type = type[confidence.indexOf(max_confidence)].toString().toUpperCase();
//         // console.log("max_type", max_type);
//         vidata["record"].push({
//             "purchaseOrder": moid.toString(),
//             "sampleId": (i+1).toString(),
//             "result": max_type
//         });
//     }
//     console.log(vidata);
//     send_VIdata(vidata);
// }

//  placeOemOrder = () => {
//     return placeOrder(oemOrderObj);
// }

//  placeEmsOrder = (order, masterOrderId) => {
//     return placeOrder(order, masterOrderId);
// }

//  createLot = (orderId) => {
//     const url = '/api/CreateLot'
//     let lotId = Math.random().toString(36).substr(2, 8);

//     lotObj.lotId = lotId;
//     lotObj.orderId = orderId;
//     lotObj.quantity = 100;

//     axios.post(url, {
//         'obj': JSON.stringify(lotObj)
//     }, function (data, status, xhr) {
//         logStatus(data, status, xhr);
//     })
//         .done(function () { })
//         .fail(function () { })
//         .always(function () { });

//     return lotId;
// }

//  inspect = (lotId, orderId) => {
//     const url = '/api/Inspect'
//     let inspectionId = Math.random().toString(36).substr(2, 9);

//     inspectionObj.inspectionId = inspectionId;
//     inspectionObj.lotId = lotId;
//     inspectionObj.orderId = orderId;
//     inspectionObj.inspectionData = `Inspection data for lot: ${lotId}, the result is xxx`;

//     axios.post(url, {
//         'obj': JSON.stringify(inspectionObj)
//     }, function (data, status, xhr) {
//         logStatus(data, status, xhr);
//     })
//         .done(function () { })
//         .fail(function () { })
//         .always(function () { });

//     return inspectionId;
// }

//  ship = (lotId, orderId, shipFrom, shipTo, item) =>{
//     const url = '/api/Ship'
//     let shipmentId = Math.random().toString(36).substr(2, 8);

//     shipmentObj.shipmentId = shipmentId;
//     shipmentObj.lotId = lotId;
//     shipmentObj.orderId = orderId;
//     shipmentObj.shipDate = Date();

//     shipmentObj.shipFrom = shipFrom;
//     shipmentObj.shipTo = shipTo;
//     shipmentObj.item = item;

//     axios.post(url, {
//         'obj': JSON.stringify(shipmentObj)
//     }, function (data, status, xhr) {
//         logStatus(data, status, xhr);
//     })
//         .done(function () { })
//         .fail(function () { })
//         .always(function () { });

//     return shipmentId;
// }

//  routeLot = (lotId, decision) =>{
//     const url = '/api/RouteLot';

//     routeObj.lotId = lotId;
//     // routeObj.lotId = "4500001622";

//     switch (decision) {
//         case 'accepted':
//             routeObj.disposition = 'ACCEPTED';
//             break;
//         case 'wait':
//             routeObj.disposition = 'PENDING';
//             break;
//         case 'rejected':
//             routeObj.disposition = 'REJECTED';
//             break;
//         default:
//             console.error('[rest-util]', 'Invalid decision, please use "ACCEPTED", "PENDING" or "REJECTED"');
//             return;
//     }

//     axios.post(url, {
//         'obj': JSON.stringify(routeObj)
//     }, function (data, status, xhr) {
//         logStatus(data, status, xhr);
//     })
//         .done(function (response) {
//             console.log(response);
//          })
//         .fail(function () { })
//         .always(function () { });
// }

//  CompleteOrder = (orderId) =>{
//     const url = '/api/CompleteOrder'

//     const orderObj = {
//         "$class": "org.aim.operation.CompleteOrder",
//         "orderId": orderId
//     }

//     axios.post(url, {
//         'obj': JSON.stringify(orderObj)
//     }, function (data, status, xhr) {
//         logStatus(data, status, xhr);
//     })
//         .done(function () { })
//         .fail(function () { })
//         .always(function () { });

// }

//  failed = (message, body) =>{
//     console.log('error: ', message, ' body: ', body);
// }

//  logStatus = (data, status, xhr) =>{
//     console.log('[rest-util]', '[placeOrder]', 'data:', data);
//     console.log('[rest-util]', '[placeOrder]', 'status:', status);
//     console.log('[rest-util]', '[placeOrder]', 'xhr:', xhr);
// }


//  oemAddress = {
//     "$class": "org.aim.operation.Address",
//     "name": "Penelope M",
//     "street1": "1177 S Belt Line Rd",
//     "city": "COPPELL",
//     "state": "TX",
//     "country": "US",
//     "postcode": "75019-4652"
// }

//  oemBillingAddress = {
//     "$class": "org.aim.operation.Address",
//     "name": "Audrey P",
//     "street1": "1000 BELLEVIEW ST",
//     "city": "DALLAS",
//     "state": "TX",
//     "country": "US",
//     "postcode": "75215-1833"
// }

//  oemShippingAddress = {
//     "$class": "org.aim.operation.Address",
//     "name": "Receiving",
//     "street1": "4849 ALPHA RD",
//     "city": "DALLAS",
//     "state": "TX",
//     "country": "US",
//     "postcode": "75244-4608"
// }

//  emsAddress = {
//     "$class": "org.aim.operation.Address",
//     "name": "Sam S",
//     "street1": "343 HILTON AVE",
//     "city": "BILOXI",
//     "state": "MS",
//     "country": "US",
//     "postcode": "39531-2103"
// }

//  supplierAddress1 = {
//     "$class": "org.aim.operation.Address",
//     "name": "Supplier1",
//     "street1": "1138 PERRY HILL RD",
//     "city": "MONTGOMERY",
//     "state": "AL",
//     "country": "US",
//     "postcode": "36109-5221"
// }

//  supplierAddress2 = {
//     "$class": "org.aim.operation.Address",
//     "name": "Supplier2",
//     "street1": "10110 CEDAREDGE DR",
//     "city": "HOUSTON",
//     "state": "TX",
//     "country": "US",
//     "postcode": "77064-5461"
// }

//  supplierAddress3 = {
//     "$class": "org.aim.operation.Address",
//     "name": "Supplier3",
//     "street1": "9835 VALLEY RANCH PKWY W",
//     "city": "IRVING",
//     "state": "TX",
//     "country": "US",
//     "postcode": "75063-4679"
// }

//  supplierAddress4 = {
//     "$class": "org.aim.operation.Address",
//     "name": "Supplier4",
//     "street1": "6330 WEST LOOP S",
//     "city": "BELLAIRE",
//     "state": "TX",
//     "country": "US",
//     "postcode": "77401-2928"
// }

//  atx2920Item = {
//     "$class": "org.aim.operation.Item",
//     "model": "ATX2920",
//     "description": "TurboJet Motherboard",
//     "quantity": "100",
//     "unitPrice": 970,
//     "currency": "USD"
// };

//  cpuItem = {
//     "$class": "org.aim.operation.Item",
//     "model": "CPU",
//     "description": "Central Processing Unit",
//     "quantity": "100",
//     "unitPrice": 188,
//     "currency": "USD"
// };

//  gpuItem = {
//     "$class": "org.aim.operation.Item",
//     "model": "GPU",
//     "description": "Graphics Processing Unit",
//     "quantity": "100",
//     "unitPrice": 249,
//     "currency": "USD"
// };

//  northbridgeItem = {
//     "$class": "org.aim.operation.Item",
//     "model": "NORTHBRIDGE",
//     "description": "One of the two chips in the core logic chipset architecture on a PC motherboard",
//     "quantity": "100",
//     "unitPrice": 16.89,
//     "currency": "USD"
// };

//  southbridgeItem = {
//     "$class": "org.aim.operation.Item",
//     "model": "SOUTHBRIDGE",
//     "description": "One of the two chips in the core logic chipset architecture on a PC motherboard",
//     "quantity": "100",
//     "unitPrice": 26.03,
//     "currency": "USD"
// };

//  oemOrderObj = {
//     "$class": "org.aim.operation.PlaceOrder",
//     "orderId": "AEIO-09-24-18",
//     "item": atx2920Item,
//     "supplierAddress": emsAddress,
//     "billTo": oemBillingAddress,
//     "shipTo": oemShippingAddress
// };

//  emsOrderObj1 = {
//     "$class": "org.aim.operation.PlaceOrder",
//     "orderId": "SUB1-09-24-18",
//     "item": cpuItem,
//     "supplierAddress": supplierAddress1,
//     "billTo": emsAddress,
//     "shipTo": emsAddress
// };

//  emsOrderObj2 = {
//     "$class": "org.aim.operation.PlaceOrder",
//     "orderId": "SUB2-09-24-18",
//     "item": gpuItem,
//     "supplierAddress": supplierAddress2,
//     "billTo": emsAddress,
//     "shipTo": emsAddress
// };

//  emsOrderObj3 = {
//     "$class": "org.aim.operation.PlaceOrder",
//     "orderId": "SUB3-09-24-18",
//     "item": northbridgeItem,
//     "supplierAddress": supplierAddress3,
//     "billTo": emsAddress,
//     "shipTo": emsAddress
// };

//  emsOrderObj4 = {
//     "$class": "org.aim.operation.PlaceOrder",
//     "orderId": "SUB4-09-24-18",
//     "item": southbridgeItem,
//     "supplierAddress": supplierAddress4,
//     "billTo": emsAddress,
//     "shipTo": emsAddress
// };

//  lotObj = {
//     "$class": "org.aim.operation.CreateLot",
//     "lotId": "081402",
//     "orderId": "AEIO-09-24-18",
//     "quantity": 100
// };

//  inspectionObj = {
//     "$class": "org.aim.operation.Inspect",
//     "inspectionId": "Est cupidatat non.",
//     "lotId": "081402",
//     "orderId": "AEIO-09-24-18",
//     "inspectionData": "In quis ex voluptate."
// };

//  shipmentObj = {
//     "$class": "org.aim.operation.Ship",
//     "shipmentId": "0767292973",
//     "orderId": "AEIO-09-24-18",
//     "lotId": "081402",
//     "shipDate": "2018-09-25T22:44:07.171Z",
//     "shipFrom": emsAddress,
//     "shipTo": oemAddress,
//     "item": atx2920Item
// };

//  routeObj = {
//     "$class": "org.aim.operation.RouteLot",
//     "lotId": "someLotId",
//     "disposition": "ACCEPTED",
// }