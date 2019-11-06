import React from 'react'
import "./LiveVideoText.css"

const LiveVideoText = (props) => {
    const text = {
        "Order": "An OEM initiates a purchase order via SAP for printed circuit boards coming from an assembler.",
        "Confirm": "The assembler places its own purchase orders with its suppliers for electronic components.",
        "Source": "The assember receives component shipments from its suppliers.",
        "Assemble": "The assembler creates a 'lot' of printed circuit boards, associating it with the OEM purchase order.",
        "Inspect": "The assembler routes the finished lot of boards through Visual Insights, producing inspection results specific to it.",
        "Ship": "The assembler forwards an Advance Ship Notification to the OEM's SAP system, along with shipment id and lot id information.",
        "Grade": "The OEM is notified of Visual Insights data avaiable for the shipped lot, and views the results via SAP Quality Management.",
        "Accept": "Based on the inspection results, the OEM approves the in-transit lot, rejects it, or designates it for additional inspection.",
        "Delivery": "When the expected lot arrives, it is routed per the OEM's already-made decision for acceptance, rejection, or additional inspection."
    }

    return (
        <div className="videoText">{text[props.currStep]}</div>
    )
}

export default LiveVideoText;