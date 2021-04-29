# tailwind-navbar-react-17

> A responsive Tailwind navbar component for use with React.

## Install

```bash
npm install --save tailwind-navbar-react-17
```

## Usage

```jsx
import React, { Component } from 'react';

import { TailwindNavbar } from 'tailwind-navbar-react';
import './tailwind.output.css';

class Example extends Component {
  render () {
    return (
      <TailwindNavbar
        brand={
          <img src="https://media.discordapp.net/attachments/694834406493257762/729067815499202651/matthew_border.png" width="40" height="40" alt="Brand logo" />
        }
        className="py-1"
      >
        <nav>
          <ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
            <li>
              <a className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400" href="/">
                A Link
              </a>
            </li>
          </ul>
        </nav>
      </TailwindNavbar>
    );
  }
}
```
### Forked from (https://gitlab.com/bbworld1/tailwind-navbar-react)

Just modified react dependency from 16 to 17