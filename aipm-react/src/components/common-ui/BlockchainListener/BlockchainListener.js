import React from 'react'
import "./BlockchainListener.css"

class BlockchainListener extends React.Component {

    render() {
        return (
            <div className = "Blockchain">
                <div className="title">
                    Blockchain Listener
                </div>
                <table>
                    <tr>
                        <th>Column header</th>
                    </tr>
                    <tr>
                        <td>cell text</td>
                    </tr>
                </table>

            </div>
        )
    }
}

export default BlockchainListener