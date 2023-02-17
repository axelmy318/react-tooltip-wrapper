# react-tooltip-wrapper 👋
Provides a components to create tooltips


## Installation 
`npm i react-tooltip-wrapper`


## Demo and API 👀

[https://axelmry.com/react-tooltip-wrapper](https://axelmry.com/react-tooltip-wrapper) (...with code 😉)


## Usage 💻

```javascript
import React from 'react'
import { Tooltip } from 'react-readme-printer'

const Example = () => {
    return (
        <MarkdownPrinter
            username='axelmy318'
            repository='react-readme-printer'
            branch='master'
            file='custom_readme_name'
        />
    )
    
}

export default Example
```


## Dependencies

This project relies on [react-popper](https://www.npmjs.com/package/react-popper)


## API ✔

| Properties | type | default | description |
|--|--|--|--|
| tooltip | any | "" | The element to be displayed inside the tooltip |
| tooltipStyle | object | {} | The CSS styling of the tooltip |
| placement | string | "bottom" | The placement of the tooltip. See [react-popper](https://www.npmjs.com/package/react-popper) documentation |