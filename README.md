# Nuxt Slaask [![NPM version][npm-image]][npm-url] 
> Add nuxt slaask to your nuxt.js application.

## Installation

Add `@netsells/nuxt-slaask` to your project using yarn or npm. 

```sh
yarn add @netsells/nuxt-slaask
```

## Setup

Add `@netsells/nuxt-slaask` to `modules` section of `nuxt.config.js`.

```js
export default {
    modules: [
        ['@netsells/nuxt-slaask', {
            key: '{{ SLAASK KEY }}',
        }],
    ],

    // or
    
    modules: [
        '@netsells/nuxt-slaask',
    ],

    slaask: {
        key: '{{ SLAASK KEY }}',
    },

    // or

    modules: [
        '@netsells/nuxt-slaask',
    ],

    publicRuntimeConfig: {
        slaask: {
            key: process.env.SLAASK_KEY,
        },
    },
};
```

## Options

### `key`
- Required
- Slaask key

## License

MIT © [Netsells](https://netsells.co.uk)

[npm-image]: https://badge.fury.io/js/%40netsells%2Fnuxt-slaask.svg
[npm-url]: https://npmjs.org/package/@netsells/nuxt-slaask
