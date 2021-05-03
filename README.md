## galey-public.API

api oficial da [galeria publica](https://galley.zelferry.repl.co)



## como usar?

```js
const galey = require("galley.API")
let g = new galey()

g.rand().then((res) => {
  console.log(res) //https://imagem.png
})
```

## eventos
`<> = obrigatório`
`[] = opcional`

**.rand(...)**
```js
g.rand([numero])//imagem aleatória
```

**.getdatabase(...)**
```js
g.getdatabase() //retornar a DATABASE
```

**.json(...)**
```js
g.json([numero]) //retorna o numero de links de imagens aleatórias
```

:)