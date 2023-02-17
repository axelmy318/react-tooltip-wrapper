import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types'
import './TooltipWrapper.css'
import { usePopper } from 'react-popper';
import { createPortal } from 'react-dom';

const TooltipWrapper = ({ children, tooltip, tooltipStyle, placement, onShow, onHide }) => {
    const [referenceElement, setReferenceElement] = useState()
    const [popperElement, setPopperElement] = useState()

    const [showPopper, setShowPopper] = useState(false)

    let { styles, attributes } = usePopper(referenceElement, popperElement, { placement: placement }, )

    useLayoutEffect(() => {
        if(!showPopper && popperElement) {
            popperElement.className = 'hide-init'
        }
    }, [popperElement])

    const showTooltip = state => {
        setShowPopper(state)

        if(state)
            onShow()
        else
            onHide()
    }

    return (<>
        { /* Content */ }
        <span style={{position: 'relative'}} ref={setReferenceElement} onMouseEnter={() => showTooltip(true)} onMouseLeave={() => showTooltip(false)}>
            {children}
        </span>

        { /* Tooltip */ }
        <Portal>
            <div 
            className={ showPopper ? "react-tooltip-wrapper hide-init tooltip-visible" : "react-tooltip-wrapper tooltip-hidden" }
            ref={setPopperElement}
            style={{...tooltipStyle, ...styles.popper}}
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
    onShow: PropTypes.func,
    onHide: PropTypes.func,
}

TooltipWrapper.defaultProps = {
    tooltip: "",
    placement: 'top',
    tooltipStyle: {},
    onShow: () => {},
    onHide: () => {},
}

export default TooltipWrapper;
