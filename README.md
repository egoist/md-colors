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
const mdColors = require('@egoist/md-colors')

module.exports = {
  theme: {
    // Override default colors
    colors: {
      transparent: 'transparent',
      ...mdColors
    }
  }
}
```

Color names are camelCased, e.g. `deepPurple` and `lightBlue`, you can reference one via `text-lightBlue-200` in TailwindCSS.

## License

MIT.
