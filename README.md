# Material Design Color Palettes

https://material.io/design/color/the-color-system.html

## Install

This package actually only contains a [JSON file](./colors.json).

```bash
yarn add @egoist/md-colors --dev
```

## Usage

### Using with TailwindCSS

In your `tailwind.config.js`:

```js
const colors = require('@egoist/md-colors')

module.exports = {
  theme: {
    // Override default colors here
    colors
  }
}
```

Color names are camelCased, e.g. `deepPurple` and `lightBlue`, you can reference one via `text-lightBlue-200` in TailwindCSS.

### TypeScript support

To load this module in a `.ts` file:

```ts
// Individual imports
import { red, green } from '@egoist/md-colors'

// Or load everything
import * as colors from '@egoist/md-colors'
```

## License

MIT.
