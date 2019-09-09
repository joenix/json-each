# json-each

each for json

```bash
npm i json-each
# or
yarn add json-each
```

```js
import each from "json-each";

each({ a: 1, b: 2, c: 3 }, (value, key) => {
  console.log(key, value); // key => value
});

each({ a: 1, b: 2, c: 3 }, {value, key} => {
  console.log(key, value); // key => value
}, true);
```
