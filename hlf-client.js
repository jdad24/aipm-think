const bodyParser = require('body-parser');
const logger = require('../../hlf/logger');
const transactions = require('../../hlf/transactions');

const app = (module.exports.app = module.parent.exports.app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/PlaceOrder', async (req, res) => {
  let obj;

  if (typeof req.body.obj !== 'string') {
    obj = req.body.obj;
  } else {
    obj = JSON.parse(req.body.obj);
  }

  //   logger.info('[PlaceOrder]', obj);

  const order = await transactions.placeOrder(obj);

  if (order) {
    return res.status(200).json(order);
  } else {
    return res.status(500).json({
      status: 'error',
      reason: 'create order failed'
    });
  }
});

app.post('/api/CreateLot', async (req, res) => {
  let obj;

  if (typeof req.body.obj !== 'string') {
    obj = req.body.obj;
  } else {
    obj = JSON.parse(req.body.obj);
  }

  //   logger.info('[CreateLot]', obj);

  const lot = await transactions.createLot(obj);

  if (lot) {
    return res.status(200).json(lot);
  } else {
    return res.status(500).json({
      status: 'error',
      reason: 'create lot failed'
    });
  }
});

app.post('/api/Inspect', async (req, res) => {
  let obj;

  if (typeof req.body.obj !== 'string') {
    obj = req.body.obj;
  } else {
    obj = JSON.parse(req.body.obj);
  }

  //   logger.info('[Inspect]', obj);

  const inspection = await transactions.inspect(obj);

  if (inspection) {
    return res.status(200).json(inspection);
  } else {
    return res.status(500).json({
      status: 'error',
      reason: 'create inspection failed'
    });
  }
});

app.post('/api/Ship', async (req, res) => {
  let obj;

  if (typeof req.body.obj !== 'string') {
    obj = req.body.obj;
  } else {
    obj = JSON.parse(req.body.obj);
  }

  //   logger.info('[Ship]', obj);

  const shipment = await transactions.ship(obj);

  if (shipment) {
    return res.status(200).json(shipment);
  } else {
    return res.status(500).json({
      status: 'error',
      reason: 'create shipment failed'
    });
  }
});

app.post('/api/RouteLot', async (req, res) => {
  let obj;

  if (typeof req.body.obj !== 'string') {
    obj = req.body.obj;
  } else {
    obj = JSON.parse(req.body.obj);
  }

  const lot = await transactions.routeLot(obj);

  if (lot) {
    return res.status(200).json(lot);
  } else {
    return res.status(500).json({
      status: 'error',
      reason: 'route lot failed'
    });
  }
});

app.post('/api/CompleteOrder', async (req, res) => {
  let obj;

  if (typeof req.body.obj !== 'string') {
    obj = req.body.obj;
  } else {
    obj = JSON.parse(req.body.obj);
  }

  const order = await transactions.completeOrder(obj.orderId);

  if (order) {
    return res.status(200).json(order);
  } else {
    return res.status(500).json({
      status: 'error',
      reason: 'complete order failed'
    });
  }
});

app.get('/api/queries/OrderByMasterOrderId', async (req, res) => {
  if (req.query && req.query.orderId) {
    const orderByMasterOrderId = {
      selector: {
        class: 'org.aim.order',
        orderDate: { $gte: null },
        masterOrderId: req.query.orderId
      },
      limit: 10,
      sort: [{ orderDate: 'desc' }]
    };
    const queryRes = await transactions.queryOrderSorted(orderByMasterOrderId);

    if (queryRes) {
      const arr = Object.values(queryRes)
        .filter(e => e && e['Key'])
        .map(e => e['Record']);

      if (arr.length !== 0) {
        return res.status(200).json(arr);
      }
    }
    return res.status(500).json({
      status: 'error',
      reason: 'orders does not exist'
    });
  } else {
    return res.status(500).json({
      status: 'error',
      reason: 'req.query.orderId does not exist'
    });
  }
});

app.get('/api/queries/LotByOrderId', async (req, res) => {
  if (req.query && req.query.orderId) {
    const lotByOrderId = {
      selector: {
        class: 'org.aim.lot',
        orderId: req.query.orderId
      }
    };
    const queryRes = await transactions.queryLot(lotByOrderId);

    if (queryRes) {
      const arr = Object.values(queryRes)
        .filter(e => e && e['Key'])
        .map(e => e['Record']);
      if (arr.length !== 0) {
        return res.status(200).json(arr);
      }
    }
    return res.status(500).json({
      status: 'error',
      reason: 'lots does not exist'
    });
  } else {
    return res.status(500).json({
      status: 'error',
      reason: 'req.query.orderId does not exist'
    });
  }
});

app.get('/api/queries/InspectionByOrderId', async (req, res) => {
  if (req.query && req.query.orderId) {
    const inspectionByOrderId = {
      selector: {
        class: 'org.aim.inspection',
        orderId: req.query.orderId
      }
    };
    const queryRes = await transactions.queryInspection(inspectionByOrderId);

    if (queryRes) {
      const arr = Object.values(queryRes)
        .filter(e => e && e['Key'])
        .map(e => e['Record']);
      if (arr.length !== 0) {
        return res.status(200).json(arr);
      }
    }
    return res.status(500).json({
      status: 'error',
      reason: 'inspections does not exist'
    });
  } else {
    return res.status(500).json({
      status: 'error',
      reason: 'req.query.orderId does not exist'
    });
  }
});

app.get('/api/queries/ShipmentByOrderId', async (req, res) => {
  if (req.query && req.query.orderId) {
    const shipmentByOrderId = {
      selector: {
        class: 'org.aim.shipment',
        orderId: req.query.orderId
      }
    };
    const queryRes = await transactions.queryShipment(shipmentByOrderId);

    if (queryRes) {
      const arr = Object.values(queryRes)
        .filter(e => e && e['Key'])
        .map(e => e['Record']);
      if (arr.length !== 0) {
        return res.status(200).json(arr);
      }
    }
    return res.status(500).json({
      status: 'error',
      reason: 'shipments does not exist'
    });
  } else {
    return res.status(500).json({
      status: 'error',
      reason: 'req.query.orderId does not exist'
    });
  }
});

app.get('/api/queries/OrderById', async (req, res) => {
  if (req.query && req.query.orderId) {
    const order = await transactions.getOrderByOrderId(req.query.orderId);

    if (order) {
      return res.status(200).json(order);
    } else {
      return res.status(500).json({
        status: 'error',
        reason: 'order does not exist'
      });
    }
  } else {
    return res.status(500).json({
      status: 'error',
      reason: 'req.query.orderId does not exist'
    });
  }
});

app.get('/api/queries/OemOrderSorted', async (req, res) => {
  const oemOrderSorted = {
    selector: {
      class: 'org.aim.order',
      orderDate: { $gte: null },
      masterOrderId: { $exists: false }
    },
    limit: 5,
    sort: [{ orderDate: 'desc' }]
  };
  const queryRes = await transactions.queryOrderSorted(oemOrderSorted);

  if (queryRes) {
    const arr = Object.values(queryRes)
      .filter(e => e && e['Key'])
      .map(e => e['Record']);

    if (arr.length !== 0) {
      return res.status(200).json(arr);
    }
  }
  return res.status(500).json({
    status: 'error',
    reason: 'orders does not exist'
  });
});
