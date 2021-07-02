# UI-Kit

UI-Kit is a React component library

## Installation

To be decided (NPM Registry?)

```bash
yarn add ui-kit
```

## Usage

### Consume component
```javascript
import { Button } from 'ui-kit'

function App () {
  return <Button>Click Here</Button>
}
```

### Consume style
```css
@import "~uikit/dist/main.css"
```

## Development
1. install the dependencies
  ```bash
  yarn install
  ```
2. start the Stylegudist dev-server (http://localhost:6060):
  ```bash
  yarn serve:sg
  ```
3. create a folder for the new component "Example"

4. add file "Example.tsx" extension

5. once some implementation has been done, create a file "Example.md", so we can see a live preview generated by Stylegudist

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Release Notes
...

## License
[MIT](https://choosealicense.com/licenses/mit/)