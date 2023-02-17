# react-tooltip-wrapper 👋
Inclut un composant pour créer des tooltips


## Installation 
`npm i react-tooltip-wrapper`


## Démo et API 👀

[https://axelmry.com/react-tooltip-wrapper](https://axelmry.com/react-tooltip-wrapper) (...avec du code 😉)


## Utilisation 💻

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


## Dépendances

Ce projet s'appuie sur [react-popper](https://www.npmjs.com/package/react-popper)


## API ✔

| Propriétés | type | défaut | description |
|--|--|--|--|
| tooltip | any | "" | L'élément à montrer dans le tooltip |
| tooltipStyle | object | {} | Le style CSS du tooltip |
| placement | string | "bottom" | Le placement du tooltip. Voir la documentation de [react-popper](https://www.npmjs.com/package/react-popper) |
| onShow | function | null | Une fonction appelée quand le tooltip est affiché |
| onHide | function | null | Une fonction appelée quand le tooltip est caché |
| offset | int | 10 | L'offset du tooltip par rapport à son parent (plus grand = plus loin) |