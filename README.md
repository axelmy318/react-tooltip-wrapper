# react-tooltip-wrapper 👋
Provides a components to create tooltips


## Installation 
`npm i react-tooltip-wrapper`


## Demo and API 👀

[https://axelmry.com/react-tooltip-wrapper](https://axelmry.com/react-tooltip-wrapper) (...with code 😉)


## Usage 💻

```javascript
import React from 'react'
import { TooltipWrapper } from 'react-tooltip-wrapper'

const Example = () => {
    return (
        <TooltipWrapper 
        tooltip={<><h1>Tooltip</h1><p>Hi, I'm a tooltip 🙂</p></>} 
        >
            Hover me to see who I am...
        </TooltipWarrper>
    )
    
}

export default Example
```
If `tooltip` is set to `null`, an empty string or `undefined` : the tooltip won't show at all.


## Dependencies

This project relies on [react-popper](https://www.npmjs.com/package/react-popper)


## API ✔

| Properties | type | default | description |
|--|--|--|--|
| tooltip | any | "" | The element to be displayed inside the tooltip |
| tooltipStyle | object | {} | The CSS styling of the tooltip |
| placement | string | "bottom" | The placement of the tooltip. See [react-popper](https://www.npmjs.com/package/react-popper) documentation |
| onShow | function | null | A callback function for when the tooltip is shown |
| onHide | function | null | A callback function for when the tooltip is hidden |
| offset | int | 10 | The offset of the tooltip from the element (higher = further) |