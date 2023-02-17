import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types'
import { OutsideClickWrapper } from 'outside-click-wrapper'
import './TooltipWrapper.css'
import { usePopper } from 'react-popper';
import { createPortal } from 'react-dom';

const TooltipWrapper = ({ children, tooltip, placement, popperOptions }) => {
    const [referenceElement, setReferenceElement] = useState()
    const [popperElement, setPopperElement] = useState()

    const [showPopper, setShowPopper] = useState(false)

    let { styles, attributes } = usePopper(referenceElement, popperElement, { placement: 'bottom-start' }, )

    return (<>
        { /* Content */ }
        <div style={{position: 'relative'}} ref={setReferenceElement} onMouseEnter={() => setShowPopper(true)} onMouseLeave={() => setShowPopper(false)}>
            {children}
        </div>

        { /* Tooltip */ }
        <Portal>
            <div 
            className={ showPopper ? "tooltip" : "tooltip tooltip-hidden" }
            ref={setPopperElement}
            style={{...styles.popper}}
            {...attributes.popper}
            >
                {tooltip}
            </div>
        </Portal>
    </>)
};


const Portal = ({ children }) => {
    return createPortal(children, document.body)
}

TooltipWrapper.propTypes = {
    tooltip: PropTypes.any
}

TooltipWrapper.defaultProps = {
    tooltip: ""
}

export default TooltipWrapper;
