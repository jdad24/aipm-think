import React from 'react';
import Checkbox from '../../../common-ui/Checkbox/checkbox';
import './itDasboardComponents.css';

const rollbackPopup = (props) => {
    let line_names = ["DA1", "DA2", "DA3"];
    let lines = line_names.map(l => {
        return (
            <div key={l} className='rb_line'>
                <div>{l}</div>
                <Checkbox value={l} />
            </div>
        );
    });
    return (
        <div>
            <div>Rollback</div>
            <div className='select_line_container'>
                <p>select line</p>
                <div className="lines_rb_container">
                    {lines}
                </div>
            </div>
            <div className='target_watson_container'>
                <div className='target_conatiner'>
                    <div>
                        <div>Target Date</div>
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />
                    </div>
                    <div>
                        <div>Target Time</div>
                        <input type='text' />
                    </div>
                </div>
                <div>Watson Suggests</div>
            </div>

            <button>Initiate Rollback</button>
            {/* <Checkbox /> */}
        </div>
    );
}

export default rollbackPopup;