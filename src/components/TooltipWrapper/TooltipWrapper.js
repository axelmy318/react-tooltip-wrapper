import React, { useState } from 'react';
import PropTypes from 'prop-types'
import './TooltipWrapper.css'
import { usePopper } from 'react-popper';
import { createPortal } from 'react-dom';

const TooltipWrapper = ({ children, tooltip, placement }) => {
    const [referenceElement, setReferenceElement] = useState()
    const [popperElement, setPopperElement] = useState()

    const [showPopper, setShowPopper] = useState(false)

    let { styles, attributes } = usePopper(referenceElement, popperElement, { placement: placement }, )

    return (<>
        { /* Content */ }
        <span style={{position: 'relative'}} ref={setReferenceElement} onMouseEnter={() => setShowPopper(true)} onMouseLeave={() => setShowPopper(false)}>
            {children}
        </span>

        { /* Tooltip */ }
        <Portal>
            <div 
            className={ showPopper ? "react-tooltip-wrapper tooltip-visible" : "react-tooltip-wrapper tooltip-hidden" }
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
    tooltip: PropTypes.any,
    placement: PropTypes.string,
    tooltipStyle: PropTypes.object,
}

TooltipWrapper.defaultProps = {
    tooltip: "",
    placement: 'top',
    tooltipStyle: {},
}

export default TooltipWrapper;
