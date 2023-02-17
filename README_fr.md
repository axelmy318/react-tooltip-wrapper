# react-tooltip-wrapper 👋
Inclut un composant pour créer des tooltips


## Installation 
`npm i react-tooltip-wrapper`


## Démo et API 👀

[https://axelmry.com/react-tooltip-wrapper](https://axelmry.com/react-tooltip-wrapper) (...avec du code 😉)


## Utilisation 💻

```javascript
import React from 'react'
import { MarkdownPrinter } from 'react-readme-printer'

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


## Dépendances

Ce projet s'appuie sur [react-popper](https://www.npmjs.com/package/react-popper)


## API ✔

| Propriétés | type | défaut | description |
|--|--|--|--|
| tooltip | any | "" | L'élément à montrer dans le tooltip |
| tooltipStyle | object | {} | Le style CSS du tooltip |
| placement | string | "bottom" | Le placement du tooltip. Voir la documentation de [react-popper](https://www.npmjs.com/package/react-popper) |