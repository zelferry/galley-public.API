## galey-public.API

api oficial da [galeria publica](https://galley.zelferry.repl.co)


## como usar?

```js
const galey = require("galeria.js")
let g = new galey()

g.rand().then((res) => {
  console.log(res) //https://imagem.png
})
```

## Async / Await

```js
let galey = require("galeria.js")
let g = new galey()

async function main() {
  const reply = await g.rand()
  console.log(reply);
}
main();
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