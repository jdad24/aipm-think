import React, { Component } from 'react';

import axios from 'axios';

import './em.css';

import EmaWorkOrderList from './EmaWorkOrderList';
import { notEqual } from 'assert';


class EquipmentMaintenance extends Component {

    state = {
        workOrders: null
    }

    render() {

        let emaComponent = <EmaWorkOrderList />;

        return (

            <div>
                    <p>some text here</p>
                    <div>{emaComponent}</div>
            </div>

        );
    }
}

export default EquipmentMaintenance;