# Loader Component Library

A simple, customizable loader component built with React. It allows you to specify the color, number of bouncing elements, and whether or not to show an overlay behind the loader.

## Installation

Install the library via npm (or pnpm, if you're using it):

```bash
npm install @ui-libs/loader
```

Or using pnpm:

```bash
pnpm add @ui-libs/loader
```

Usage

Here’s how you can use the Loader component in your React project

```jsx
import React from 'react';
import Loader from '@ui-libs/loader';

const App = () => {
  return (
    <div>
      <h1>Welcome to the Loader Demo</h1>
      <Loader color="red" bounceElements={4} withOverlay={true} />
    </div>
  );
};

export default App;
```


| Property | Type | Default | Description |
| --- | --- | --- | --- |
| color | string | - | The color of the loader |
| bounceElements | number | 3 | The number of bouncing elements (balls) in the loader animation. |
| withOverlay | boolean | false | Determines whether an overlay appears behind the loader. |

Example Usage

Loader with 3 bouncing elements and an overlay:

```jsx
<Loader color="#00ff00" bounceElements={3} withOverlay={true} />
```

Loader with 5 bouncing elements and no overlay:

```jsx
<Loader color="#ff0000" bounceElements={5} withOverlay={false} />
```