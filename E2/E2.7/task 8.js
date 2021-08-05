let map = new Map();

map.set('1', 'string')
    .set(1, 'num')
    .set(true, 'bool');

map.forEach((value, key, map) => {
    console.log(`Ключ — ${key}, значение — ${value}`)
});