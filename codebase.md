# tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES6",
    "lib": ["dom", "dom.iterable"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "sourceMap": true,
    "noErrorTruncation": true,
    "noUnusedLocals": true,
    "types": ["jest", "node"],
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": [".eslintrc.js", "src"],
  "exclude": ["node_modules", "build", "public"],
  
}

```

# package.json

```json
{
  "name": "anthropic-claude-aleph1",
  "version": "1.0.1",
  "private": true,
  "main": "public/electron.js",
  "license": "MIT",
  "author": {
    "name": "Aleph1",
    "url": "https://aleph1.io/",
    "email": "hello@aleph1.io"
  },
  "homepage": "./",
  "description": "This app allows you to communicate with Anthropic's Claude through an intuitive UI. You can save conversations, configure models and parameters, and get generated responses from the models.",
  "scripts": {
    "build": "react-app-rewired build",
    "start": "react-app-rewired start",
    "start:dev": "concurrently -k \"BROWSER=none npm start\" \"npm:electron:dev\"",
    "electron:dev": "wait-on http://127.0.0.1:3000 && cross-env NODE_ENV=DEV electron .",
    "start:prod": "npm run build && npm run electron:prod",
    "electron:prod": "cross-env NODE_ENV=PROD electron .",
    "package": "npm run build && electron-builder",
    "lint": "eslint . --ext .ts --ext .js --ext .tsx",
    "lint:fix": "eslint --fix . --ext .ts --ext .js --ext .tsx",
    "prettify": "prettier --write .",
    "stylelint": "stylelint '**/*.{css,scss}'"
  },
  "dependencies": {
    "@dnd-kit/core": "^6.0.8",
    "@dnd-kit/sortable": "^7.0.2",
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/material": "^5.13.5",
    "@reduxjs/toolkit": "^1.9.5",
    "classnames": "^2.3.2",
    "cors": "^2.8.5",
    "cross-env": "^7.0.3",
    "express": "^4.18.2",
    "http-proxy-middleware": "^2.0.6",
    "normalize.css": "^8.0.1",
    "path": "^0.12.7",
    "prismjs": "^1.29.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-outside-click-handler": "^1.3.0",
    "react-redux": "^8.0.7",
    "react-router-dom": "^6.11.2",
    "react-scripts": "^5.0.1",
    "react-toastify": "^9.1.3",
    "redux": "^4.2.1",
    "redux-persist": "^6.0.0",
    "remark": "^14.0.3",
    "remark-parse": "^10.0.2",
    "remark-slate": "^1.8.6",
    "remark-slate-transformer": "^0.7.5",
    "slate": "^0.94.1",
    "slate-history": "^0.93.0",
    "slate-react": "^0.97.1",
    "typescript": "^5.0.4",
    "unified": "^10.1.2",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "@electron-forge/cli": "^6.1.1",
    "@types/mdast": "^3.0.11",
    "@types/node": "^16.18.34",
    "@types/prismjs": "^1.26.0",
    "@types/react": "^18.2.7",
    "@types/react-dom": "^18.2.4",
    "@types/react-outside-click-handler": "^1.3.1",
    "@types/react-redux": "^7.1.25",
    "@types/uuid": "^9.0.2",
    "@typescript-eslint/eslint-plugin": "^5.59.8",
    "@typescript-eslint/parser": "^5.59.8",
    "concurrently": "^8.0.1",
    "customize-cra": "^1.0.0",
    "electron": "^25.0.0",
    "electron-builder": "^24.4.0",
    "electron-devtools-installer": "^3.2.0",
    "eslint": "^8.41.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-airbnb-typescript": "^17.0.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-config-standard-with-typescript": "^34.0.1",
    "eslint-import-resolver-typescript": "^3.5.5",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-n": "^15.7.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-promise": "^6.1.1",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-sort-keys-fix": "^1.1.2",
    "prettier": "^2.8.8",
    "react-app-rewired": "^2.2.1",
    "sass": "^1.62.1",
    "sass-resources-loader": "^2.2.5",
    "stylelint": "^15.6.2",
    "stylelint-config-prettier-scss": "^1.0.0",
    "stylelint-config-standard-scss": "^9.0.0",
    "tsconfig-paths-webpack-plugin": "^4.0.1",
    "wait-on": "^7.0.1"
  },
  "build": {
    "directories": {
      "buildResources": "build"
    },
    "files": [
      "build/**/*",
      "public/**/*"
    ],
    "dmg": {
      "sign": false
    },
    "mac": {
      "icon": "build/icons/icon.icns"
    },
    "appId": "anthropic.app",
    "productName": "Claude ft. Aleph1",
    "artifactName": "claude-aleph1.${ext}",
    "linux": {
      "target": [
        "deb",
        "rpm",
        "snap"
      ],
      "category": "Utility",
      "icon": "build/icons/icon.icns"
    },
    "win": {
      "target": [
        "nsis",
        "zip"
      ],
      "artifactName": "${productName}-${os}.${ext}",
      "icon": "build/icons/icon.ico"
    }
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```

# config-overrides.js

```js
const {
  override,
  adjustStyleLoaders,
  addWebpackResolve,
  addWebpackModuleRule,
} = require('customize-cra');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = override(
  addWebpackModuleRule({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
  }),
  adjustStyleLoaders(({ use: [, css, postcss, resolve, processor] }) => {
    // allow aliased import of mixins, variables, i.e. `@import 'core.scss'`
    if (processor && processor.loader.includes('sass-loader')) {
      processor.options.sassOptions = {
        includePaths: [path.resolve(__dirname, 'src/assets/styles')],
      };
    }
  }),
  addWebpackResolve({ plugins: [new TsconfigPathsPlugin()] }),
);

```

# README.md

```md
# Claude ft. Aleph1

Claude ft. Aleph1 is an open-source user interface for [Anthropic's Claude AI](https://www.anthropic.com/). We developed this enhanced UI to offer features that are currently not available or problematic in the existing UI, such as model selection, chat saving, and improved chat editing functionality. Our goal is to provide an intuitive, bug-free experience while interacting with Claude to its fullest capability.

![Claude_ft_Aleph1_1280x800](https://github.com/ezetech/anthropic-gui/assets/134277023/d0d36dc5-d03f-46b2-8699-3a0a99ec7cb0)


## Demo Highlight 🎥

<details>
<summary>Watch the demo here</summary>
  
### Claude ft. Aleph1 Demo
  
https://github.com/ezetech/anthropic-gui/assets/40824065/7eb0f1f1-34b3-4371-b410-77ff1ba5ed22

</details>


## Key Features 🎯

- **API Key Input** 🔑 Securely authenticate and connect to the Anthropic API.
- **Saved Chats and Drag & Drop Functionality** 📁 With our UI, you can not only save your chats for future reference, but also neatly organize them with ease using folders and drag & drop.
- **Prompt Interface** 💬 Enter your message in a user-friendly prompt interface and view Claude's responses in real-time.
- **Code Editor View** 💻 Get, write, and edit a prompt with code as in a code editor.
- **Model Selection** 🤖 Our UI allows you to choose from various available models. You can select the most suitable model, including token size, to interact with Anthropic. **We also support Claude-2 model**.
- **Prompt Parameters Configuration** ⚙️ Customize Claude's responses according to your needs. Our tool provides options to configure prompt parameters, offering you more control over your interactions with Claude.
- **Stream API** 📡 Get live responses from Claude with our Stream API integration. This ensures you're receiving up-to-the-minute responses.
- **Dark Mode** 🌙 For those who prefer a darker theme, we've included a Dark Mode experience.

## Installation 💽

1. Clone the repo.

\`\`\`
git clone https://github.com/ezetech/anthropic-gui.git
\`\`\`

2. Install dependencies.

\`\`\`
npm install
\`\`\`

or

\`\`\`
yarn
\`\`\`

3. Run the app.

**In development mode:**

\`\`\`
yarn start:dev
\`\`\`

**In production mode:**

\`\`\`
yarn start:prod
\`\`\`

4. Enter your API key to use the app.

## Build 🛠️

To build the app run:


\`\`\`
npm run build
\`\`\`
or
\`\`\`
yarn build
\`\`\`

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Packaging 📦

To create a distribution kit for Mac, Windows or Linux OS use these commands:

\`\`\`
npm run package
\`\`\`

or

\`\`\`
yarn package
\`\`\`

This will generate executable files for your OS in the `dist` folder.

Download distribution kits for Windows or Linux [here](https://github.com/ezetech/anthropic-gui/releases/tag/release-v1.0.1)

## Hotkeys 🔥

Press Enter on the keyboard if you want to write a text or code from the new row.

It also adds new list item if you edit a list.

Press Shift + Enter if you want to move the focus below the code area.

It also allows to finish list and start writing a regular text.

## Few features with back quote ⛓️

To start writing code as in a code editor write:

\`\`\`
\`\`\`code_extension

For example:

\`\`\`javascript
\`\`\`
and then press 'Enter'

To highlight text write:

\`\`\`
`your text`
\`\`\`
and then press 'Enter'



## Contributing 🤝

The app was built by [Aleph One](https://aleph1.io/). We welcome all contributions from the community. If you'd like to contribute, here's how you can help:

- **Reporting Bugs:** If you encounter any bugs, please file an issue in our GitHub repository. Make sure to include as many details as possible to help us reproduce the bug, such as your operating system, browser version, steps to reproduce, and any error messages.
- **Suggesting Enhancements:** If you have ideas for new features or improvements, feel free to open an issue. Describe your idea in as much detail as possible.
- **Code Contributions:** If you'd like to write code to fix bugs or implement new features, you're more than welcome! Simply fork our repository, make your changes, and submit a pull request. Please make sure your code follows our style guide and include tests where possible.

## License 🗒️

This project is licensed under the MIT License.

```

# .stylelintrc.json

```json
{
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss"
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "block-no-empty": null,
    "font-family-no-missing-generic-family-keyword": null,
    "number-leading-zero": null,
    "alpha-value-notation": "number",
    "color-function-notation": null,
    "color-hex-length": "long",
    "selector-class-pattern": null,
    "no-descending-specificity": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global"]
      }
    ],
    "scss/at-rule-no-unknown": true
  }
}

```

# .prettierrc

```
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "trailingComma": "all",
  "arrowParens": "avoid"
}

```

# .lintstagedrc.json

```json
{
  "*.{ts,tsx,js}": "eslint --fix",
  "*.{css,scss}": ["stylelint"]
}

```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

/dist

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

# .eslintrc.js

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['build/**/*.js', 'public/**/*.js', 'config-overrides.js'],
  overrides: [
    {
      files: ['.eslintrc.js'],
      rules: {
        'sort-keys-fix/sort-keys-fix': [
          'error',
          'asc',
          {
            caseSensitive: false,
          },
        ],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'jest',
    'import',
    'sort-keys-fix',
  ],

  root: true,
  rules: {
    '@typescript-eslint/default-param-last': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      { format: ['UPPER_CASE'], selector: 'enum' },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    'arrow-body-style': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': 'off',

    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'external',
            pattern: 'react',
            position: 'before',
          },
          {
            group: 'internal',
            pattern: '@/**',
            position: 'before',
          },
          {
            group: 'object',
            pattern: '{.,..}/**/*.scss',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        warnOnUnassignedImports: true,
      },
    ],
    'linebreak-style': 'off',
    'no-console': 1,
    'prefer-const': 'error',

    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/display-name': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-uses-react': 'off',
    'react/no-array-index-key': 'error',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
    react: {
      version: 'detect',
    },
  },
};

```

# .eslintignore

```
// .eslintignore
.idea
.storybook
.config
node_modules/*
config/*
public/*
scripts/*
build/*
src/react-app-env.d.ts
src/reportWebVitals.ts
```

# src/react-app-env.d.ts

```ts
/// <reference types="react-scripts" />

```

# src/models.ts

```ts
export const models = [
  {
    name: 'claude-2',
    description: 'claude-2',
  },
  {
    name: 'claude-1',
    description:
      'Our largest model, ideal for a wide range of more complex tasks.',
  },
  {
    name: 'claude-1-100k',
    description:
      'An enhanced version of claude-v1 with a 100,000 token (roughly 75,000 word) context window. Ideal for summarizing, analyzing, and querying long documents and conversations for nuanced understanding of complex topics and relationships across very long spans of text.',
  },
  {
    name: 'claude-instant-1',
    description:
      'A smaller model with far lower latency, sampling at roughly 40 words/sec! Its output quality is somewhat lower than the latest claude-v1 model, particularly for complex tasks. However, it is much less expensive and blazing fast. We believe that this model provides more than adequate performance on a range of tasks including text classification, summarization, and lightweight chat applications, as well as search result summarization.',
  },
  {
    name: 'claude-instant-1-100k',
    description:
      'An enhanced version of claude-instant-v1 with a 100,000 token context window that retains its performance. Well-suited for high throughput use cases needing both speed and additional context, allowing deeper understanding from extended conversations and documents.',
  },
  {
    name: 'claude-1.3',
    description:
      "Compared to claude-v1.2, it's more robust against red-team inputs, better at precise instruction-following, better at code, and better and non-English dialogue and writing.",
  },
  {
    name: 'claude-1.3-100k',
    description:
      'An enhanced version of claude-v1.3 with a 100,000 token (roughly 75,000 word) context window.',
  },
  {
    name: 'claude-1.2',
    description:
      'An improved version of claude-v1. It is slightly improved at general helpfulness, instruction following, coding, and other tasks. It is also considerably better with non-English languages. This model also has the ability to role play (in harmless ways) more consistently, and it defaults to writing somewhat longer and more thorough responses.',
  },
  {
    name: 'claude-1.0',
    description: 'An earlier version of claude-v1.',
  },
  {
    name: 'claude-instant-1.1',
    description:
      'Our latest version of claude-instant-v1. It is better than claude-instant-v1.0 at a wide variety of tasks including writing, coding, and instruction following. It performs better on academic benchmarks, including math, reading comprehension, and coding tests. It is also more robust against red-teaming inputs.',
  },
  {
    name: 'claude-instant-1.1-100k',
    description:
      'An enhanced version of claude-instant-v1.1 with a 100,000 token context window that retains its lightning fast 40 word/sec performance.',
  },
  {
    name: 'claude-instant-1.0',
    description: 'An earlier version of claude-instant-v1.',
  },
];

```

# src/index.tsx

```tsx
import { createRoot } from 'react-dom/client';

import { App } from './app/App';

import './assets/styles/index.scss';

const rootIdSelector = 'root';
const container = document.getElementById(rootIdSelector);
if (!container) {
  throw new Error(`Root element with id '${rootIdSelector}' not found`);
}

const root = createRoot(container);
root.render(<App />);

```

# public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <base href="./" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Anthropic Claude ft. Aleph1</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

```

# public/electron.js

```js
const path = require('path');

const { app, BrowserWindow } = require('electron');

const cors = require('cors');

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const isDev = process.env.NODE_ENV === 'DEV';

function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 1060,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: isDev,
      enableRemoteModule: true,
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );

  if (isDev) {
    const {
      default: installExtension,
      REDUX_DEVTOOLS,
    } = require('electron-devtools-installer');
    
    win.webContents.once('dom-ready', async () => {
      await installExtension([REDUX_DEVTOOLS])
        .finally(() => {
          win.webContents.openDevTools();
        });
    });
  }
}

async function createServerAndWindow() {
  const server = express();
  server.use(cors());
  server.use(
    '/anthropic',
    createProxyMiddleware({
      target: 'https://api.anthropic.com',
      changeOrigin: true,
      pathRewrite: {
        '^/anthropic': '',
      },
    })
  );

  server.listen(8001);

  createWindow();
}

app.whenReady().then(createServerAndWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

```

# .vscode/settings.json

```json
{
  "typescript.tsdk": "node_modules/typescript/lib"
}

```

# src/typings/uuid.d.ts

```ts
declare module 'uuid';

```

# src/typings/types.d.ts

```ts
type ValueOf<T> = T[keyof T];

```

# src/typings/common.ts

```ts
import type { MutableRefObject } from 'react';

export type ApiErrorDetails = {
  fields?: Record<string, string>;
  message?: string;
  code: string | number;
};

export interface ApiSettingOptions {
  apiKey: string;
  model: string;
  maxTokens: number;
  temperature: number;
  topK: number;
  topP: number;
}

export type PromptType = 'Human' | 'Assistant';

export interface ConversationCommon {
  id: string;
  name: string;
  createdAt: Date;
  children: ConversationCommon[];
  type: 'folder' | 'chat';
}

export interface ChatContent {
  id: string;
  type: PromptType;
  text: string;
}

export interface TreeItem {
  id: string;
  name: string;
  type: string;
  content?: ChatContent[];
  children: TreeItem[];
  createdAt?: Date;
  collapsed?: boolean;
}

export type TreeItems = TreeItem[];

export interface FlattenedItem extends TreeItem {
  parentId: null | string;
  parentType: null | string;
  depth: number;
  index: number;
}

export type SensorContext = MutableRefObject<{
  items: FlattenedItem[];
  offset: number;
}>;

```

# src/theme/useTheme.ts

```ts
import { useEffect } from 'react';

import { PaletteMode } from '@mui/material';

import { Theme } from './constants';

export const useCustomTheme = (mode: PaletteMode) => {
  useEffect(() => {
    if (mode === 'light') {
      document.body.classList.remove(Theme.DARK);
      document.body.classList.add(Theme.LIGHT);
    }

    if (mode === 'dark') {
      document.body.classList.remove(Theme.LIGHT);
      document.body.classList.add(Theme.DARK);
    }
  }, [mode]);
};

```

# src/theme/themePalette.ts

```ts
import { PaletteMode } from '@mui/material';

export const getThemePalette = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#6129ff',
          },
          secondary: {
            main: '#000000',
          },
          text: {
            primary: '#000000',
            secondary: '#AEAEAE',
          },
          background: {
            default: '#ffffff',
            paper: '#F2F2F2',
          },
        }
      : {
          primary: {
            main: '#6129ff',
          },
          secondary: {
            main: '#000000',
          },
          text: {
            primary: '#ffffff',
            secondary: '#AEAEAE',
          },
          background: {
            default: '#191824',
            paper: '#252836',
          },
        }),
  },
});

```

# src/theme/constants.ts

```ts
export const Theme = {
  LIGHT: 'appLightTheme',
  DARK: 'appDarkTheme',
} as const;

export type ThemeType = ValueOf<typeof Theme>;

```

# src/theme/CustomThemeProvider.tsx

```tsx
import { PropsWithChildren } from 'react';

import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import { useAppSelector } from '@/redux/hooks';
import { selectThemeMode } from '@/redux/theme/theme.selectors';

import { getThemePalette } from './themePalette';
import { useCustomTheme } from './useTheme';

export const CustomThemeProvider = ({ children }: PropsWithChildren) => {
  const mode = useAppSelector(selectThemeMode);

  const theme = createTheme(getThemePalette(mode));

  useCustomTheme(mode);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

```

# src/redux/store.ts

```ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { apiSettingsSlice } from './apiSettings/apiSettings.slice';
import { conversationsSlice } from './conversations/conversationsSlice';
import { themeSlice } from './theme/themeSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  apiSettings: apiSettingsSlice.reducer,
  chats: conversationsSlice.reducer,
  theme: themeSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

```

# src/redux/hooks.ts

```ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

```

# src/helpers/textParser.ts

```ts
export const escapeHtml = (unsafe: string) =>
  unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export const unEscapeHtml = (safe: string) =>
  safe
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");

interface TextFragment {
  type: 'text';
  content: string;
}

interface CodeFragment {
  type: 'code';
  lang: string;
  content: string;
}

type Fragment = TextFragment | CodeFragment;

export const splitTextAndCode = (inputText: string): Fragment[] => {
  const regex = /(\`\`\`(\S*?)[\s\S]*?\`\`\`)/g;

  let match;
  let lastIndex = 0;
  const fragments: Fragment[] = [];

  while ((match = regex.exec(inputText)) !== null) {
    if (lastIndex !== match.index) {
      fragments.push({
        type: 'text',
        content: inputText.slice(lastIndex, match.index).trim(),
      });
    }

    fragments.push({
      type: 'code',
      lang: match[2],
      content: match[0].slice(3 + match[2].length, -3).trim(),
    });

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex !== inputText.length) {
    fragments.push({
      type: 'text',
      content: inputText.slice(lastIndex).trim(),
    });
  }

  return fragments;
};

```

# src/app/App.tsx

```tsx
import { createContext, useState } from 'react';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/redux/store';
import { CustomThemeProvider } from '@/theme/CustomThemeProvider';

import { RouterComponent } from './router/RouterComponent';

type NavigationContextType = {
  didNewChatNavigate: boolean;
  setDidNewChatNavigate: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavigationContext = createContext<NavigationContextType>({
  didNewChatNavigate: false,
  setDidNewChatNavigate: () => {},
});

export const App = () => {
  const [didNewChatNavigate, setDidNewChatNavigate] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter>
          <NavigationContext.Provider
            value={{ didNewChatNavigate, setDidNewChatNavigate }}
          >
            <CustomThemeProvider>
              <RouterComponent />
            </CustomThemeProvider>
          </NavigationContext.Provider>
        </HashRouter>
      </PersistGate>
    </Provider>
  );
};

```

# src/api/prompt.api.ts

```ts
// src/api/prompt.api.ts

import { ANTHROPIC_CONFIG } from '@/api/config';
import { ApiSettingOptions } from '@/typings/common';

export interface PromptRequest extends ApiSettingOptions {
  prompt: string;
  signal?: AbortSignal;
}

export const submitPrompt = async ({
  model,
  temperature,
  topK,
  topP,
  apiKey,
  maxTokens,
  prompt,
  signal,
}: PromptRequest) => {
  const requestBody = {
    prompt,
    model,
    temperature,
    top_k: topK,
    top_p: topP,
    max_tokens_to_sample: maxTokens,
    stop_sequences: ['\n\nHuman:'],
    stream: true,
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'anthropic-version': '2023-06-01', // Add this line
      accept: 'application/json',
    },
    signal: signal,
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetch(
      `${ANTHROPIC_CONFIG.anthropicApiPrefix}/complete`,
      requestOptions,
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error so it can be handled by the calling function
  }
};

```

# src/api/config.ts

```ts
export const ANTHROPIC_CONFIG = {
  anthropicApiPrefix: `http://localhost:8001/anthropic/v1`,
  anthropicBaseUrl: 'https://api.anthropic.com',
} as const;

```

# public/icons/icon.ico

This is a binary file of the type: Binary

# public/icons/icon.icns

This is a binary file of the type: Binary

# src/ui/TextFieldComponent/index.ts

```ts
export * from './TextFieldComponent';

```

# src/ui/TextFieldComponent/TextFieldComponent.tsx

```tsx
import { memo } from 'react';

import TextField, { TextFieldProps } from '@mui/material/TextField';
import classNames from 'classnames';

import styles from './TextFieldComponent.module.scss';

export const TextFieldComponent = memo((props: TextFieldProps) => (
  <TextField
    {...props}
    className={classNames(styles.textField, styles.wrapper, props.className)}
    sx={{
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderWidth: '1px',
          borderColor: 'var(--primary-color)',
        },
      },
    }}
  />
));
TextFieldComponent.displayName = 'TexFieldComponent';

```

# src/ui/TextFieldComponent/TextFieldComponent.module.scss

```scss
.wrapper.textField {
  fieldset {
    border: 1px solid var(--text-secondary);
    border-radius: 8px;
  }

  div:hover input:not(:focus) + fieldset {
    border-color: var(--btn-outlined-hover);
  }

  input {
    border: 0;
    color: var(--text-primary);
    padding-top: 12px;
    padding-bottom: 12px;

    &::placeholder {
      color: var(--text-secondary);
      font-weight: 500;
    }
  }
}

```

# src/ui/TextFieldAuthComponent/index.ts

```ts
export * from './TextFieldAuthComponent';

```

# src/ui/TextFieldAuthComponent/TextFieldAuthComponent.tsx

```tsx
import { memo } from 'react';

import TextField, { TextFieldProps } from '@mui/material/TextField';
import classNames from 'classnames';

import styles from './TextFieldAuthComponent.module.scss';

export const TextFieldAuthComponent = memo((props: TextFieldProps) => (
  <TextField
    {...props}
    error={props.error}
    className={classNames(
      styles.textField,
      styles.wrapper,
      props.className,
      props.error,
    )}
    sx={{
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderRadius: '8px',
          border: '1px solid #AEAEAE',
          transition: '0.3s',
        },
        '&:hover fieldset': {
          borderColor: '#000000',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#6129ff',
          borderWidth: '1px',
        },
      },
      '& .MuiOutlinedInput-root.Mui-error': {
        '& fieldset': {
          borderColor: '#eb4040',
        },
        '& input': {
          color: '#eb4040',
        },
        '&:hover fieldset': {
          borderColor: '#eb4040',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#eb4040',
          borderWidth: '1px',
        },
      },
    }}
  />
));

TextFieldAuthComponent.displayName = 'TexFieldAuthComponent';

```

# src/ui/TextFieldAuthComponent/TextFieldAuthComponent.module.scss

```scss
.wrapper.textField {
  min-width: 264px;
  height: 45px;
  margin-bottom: 5px;

  input {
    border: 0;
    color: #000000;
    padding-top: 11px;
    padding-bottom: 11px;

    &::placeholder {
      color: #AEAEAE;
      font-family: var(--font-family-main);
      font-weight: 500;
      font-size: 16px;
    }
  }
}

```

# src/ui/SliderComponent/index.ts

```ts
export * from './SliderComponent';

```

# src/ui/SliderComponent/SliderComponent.tsx

```tsx
import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';

import { Stack } from '@mui/material';
import Slider, { SliderProps } from '@mui/material/Slider';

import styles from './SliderComponent.module.scss';

type SliderComponentProps = SliderProps & {
  label: string;
  handleChange: (value: number) => void;
  max: number;
  min: number;
  step: number;
};

export const SliderComponent = memo((props: SliderComponentProps) => {
  const { handleChange, ...otherProps } = props;
  const [input, setInput] = useState(props.value as number | string);
  const [isFocused, setIsFocused] = useState(false);

  const onSliderChange = useCallback(
    (_: Event, value: number | number[]) => {
      handleChange(value as number);
    },
    [handleChange],
  );

  const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocused(false);
    const value = Number(input);

    if (!Number.isNaN(value)) {
      handleChange(Math.min(Math.max(value, props.min), props.max));
    } else {
      setInput(props.value as number);
    }
  }, [input, handleChange, props.min, props.max, props.value]);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    if (!isFocused) {
      setInput(props.value as number);
    }
  }, [props.value, isFocused]);

  return (
    <div className={styles.wrapper}>
      <Stack justifyContent="space-between" flexDirection="row" mb="10px">
        <h4 className={styles.label}>{props.label}</h4>
        <input
          className={styles.input}
          value={input}
          onChange={onInputChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </Stack>
      <Slider
        {...otherProps}
        classes={{ rail: styles.rail }}
        onChange={onSliderChange}
      />
    </div>
  );
});

SliderComponent.displayName = 'SliderComponent';

```

# src/ui/SliderComponent/SliderComponent.module.scss

```scss
.wrapper {
  width: 100%;
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  padding: 14px 13px 20px;
  transition: 0.3s;

  .rail {
    background-color: var(--bg-slider-rail);
  }

  .label {
    font-size: 14px;
    font-weight: 500;
  }

  .input {
    background: var(--bg-primary);
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 6px 12px;
    font-family: var(--font-family-main);
    font-weight: 500;
    width: 90px;
    text-align: center;
    transition: 0.3s;
    outline: none;
    color: var(--text-primary);
  }

  &:hover {
    border-color: var(--btn-outlined-hover);

    .input {
      border-color: var(--btn-outlined-hover);
    }
  }

  .input:focus {
    border-color: var(--primary-color);
  }
}

```

# src/ui/IconComponent/index.ts

```ts
export * from './IconComponent';

```

# src/ui/IconComponent/IconComponent.tsx

```tsx
import { HTMLAttributes, memo } from 'react';

import { ReactComponent as ai } from '@/assets/icons/ai.svg';
import { ReactComponent as aiResponse } from '@/assets/icons/aiResponse.svg';
import { ReactComponent as arrowDown } from '@/assets/icons/arrow-down.svg';
import { ReactComponent as backgroundChatDark } from '@/assets/icons/backgroundChat-dark.svg';
import { ReactComponent as backgroundChatLight } from '@/assets/icons/backgroundChat-light.svg';
import { ReactComponent as cancel } from '@/assets/icons/cancel.svg';
import { ReactComponent as close } from '@/assets/icons/close.svg';
import { ReactComponent as closedFolder } from '@/assets/icons/closed-folder.svg';
import { ReactComponent as confirm } from '@/assets/icons/confirm.svg';
import { ReactComponent as conversation } from '@/assets/icons/conversation.svg';
import { ReactComponent as copy } from '@/assets/icons/copy.svg';
import { ReactComponent as deleteIcon } from '@/assets/icons/delete.svg';
import { ReactComponent as edit } from '@/assets/icons/edit.svg';
import { ReactComponent as heart } from '@/assets/icons/heart.svg';
import { ReactComponent as human } from '@/assets/icons/human.svg';
import { ReactComponent as logoDark } from '@/assets/icons/logo-dark.svg';
import { ReactComponent as logoLight } from '@/assets/icons/logo-light.svg';
import { ReactComponent as logout } from '@/assets/icons/logout.svg';
import { ReactComponent as newFolder } from '@/assets/icons/new-folder.svg';
import { ReactComponent as openedFolder } from '@/assets/icons/opened-folder.svg';
import { ReactComponent as plus } from '@/assets/icons/plus.svg';
import { ReactComponent as regenerate } from '@/assets/icons/regenerate.svg';
import { ReactComponent as search } from '@/assets/icons/search.svg';
import { ReactComponent as stop } from '@/assets/icons/stop.svg';
import { ReactComponent as submit } from '@/assets/icons/submit.svg';
import { ReactComponent as themeDark } from '@/assets/icons/theme-dark.svg';
import { ReactComponent as themeLight } from '@/assets/icons/theme-light.svg';
import { ReactComponent as warning } from '@/assets/icons/warning.svg';

const ICONS = {
  themeLight,
  themeDark,
  arrowDown,
  logoDark,
  logoLight,
  logout,
  plus,
  search,
  newFolder,
  conversation,
  closedFolder,
  openedFolder,
  edit,
  deleteIcon,
  confirm,
  cancel,
  ai,
  aiResponse,
  human,
  backgroundChatLight,
  regenerate,
  submit,
  warning,
  heart,
  copy,
  backgroundChatDark,
  stop,
  close,
} as const;

export type IconType = keyof typeof ICONS;

interface IconComponentsProps extends HTMLAttributes<SVGElement> {
  type?: IconType;
  className?: string;
}

export const IconComponent = memo(
  ({ type, className, ...otherProps }: IconComponentsProps) => {
    if (!type) {
      return null;
    }

    const NewIcon = ICONS[type];
    return <NewIcon className={className} {...otherProps} />;
  },
);

IconComponent.displayName = 'IconComponent';

```

# src/ui/ButtonComponent/index.ts

```ts
export * from './ButtonComponent';

```

# src/ui/ButtonComponent/ButtonComponents.module.scss

```scss
.buttonWrapper.button {
  padding: 8.5px 30px;
  transition: 0.3s;
  font-family: var(--font-family-bold);
  font-weight: 700;
  font-size: 16px;
  text-transform: none;
  border-radius: 8px;

  svg {
    margin-left: 7px;
  }

  &.contained {
    background-color: var(--primary-color);
    color: #ffffff;
    min-width: 150px;

    svg {
      stroke: #ffffff;
    }

    &:disabled {
      background-color: var(--bg-btn-disabled);
      color: var(--text-disabled);

      svg {
        stroke: var(--text-disabled);
      }
    }

    &:hover {
      background-color: var(--primary-hover);
    }
  }

  &.outlined {
    min-width: 150px;
    border: 1px solid var(--text-secondary);
    color: var(--text-primary);

    &:disabled {
      border-color: var(--bg-btn-disabled);
      color: var(--bg-btn-disabled);

      svg {
        stroke: var(--bg-btn-disabled);
      }
    }

    &:hover {
      color: var(--btn-outlined-hover);
      border-color: var(--btn-outlined-hover);
      background-color: transparent;
    }

    svg {
      stroke: var(--text-primary);
    }
  }

  &.text {
    color: var(--text-primary);
    padding: 3px;
    font-family: var(--font-family-main);
    font-weight: 500;
    border-radius: 8px;

    &:disabled {
      color: var(--text-secondary);
    }

    &:hover {
      border: 0;
      background-color: var(--bg-primary);
    }
  }
}

```

# src/ui/ButtonComponent/ButtonComponent.tsx

```tsx
import { ReactNode, memo } from 'react';

import Button, { ButtonProps } from '@mui/material/Button';
import classNames from 'classnames';

import styles from './ButtonComponents.module.scss';

interface ButtonComponentProps extends ButtonProps {
  children: ReactNode;
}

export const ButtonComponent = memo((props: ButtonComponentProps) => {
  const { variant = 'contained', className } = props;

  return (
    <Button
      {...props}
      variant={variant}
      className={classNames([
        styles.button,
        styles.buttonWrapper,
        styles[variant],
        className,
      ])}
    >
      {props.children}
    </Button>
  );
});

ButtonComponent.displayName = 'ButtonComponent';

```

# src/ui/ButtonAuthComponent/index.ts

```ts
export * from './ButtonAuthComponent';

```

# src/ui/ButtonAuthComponent/ButtonAuthComponents.module.scss

```scss
.buttonWrapper.button {
  padding-top: 13px;
  padding-bottom: 13px;
  transition: 0.3s;
  font-family: var(--font-family-bold);
  font-weight: 700;
  font-size: 16px;
  text-transform: none;
  border-radius: 8px;
  min-width: 264px;
  height: 45px;

  &.contained {
    background-color: #6129ff;
    color: #ffffff;

    &:hover {
      background-color: #480fea;
    }
  }

  &.disabled {
    background-color: #363c4a;
    color: #828592;
    pointer-events: none;
  }

  &.text {
    padding: 3px;
    font-family: var(--font-family-bold);
    font-weight: 700;
    border-radius: 8px;

    &:disabled {
      color: #828592;
    }

    &:hover {
      border: 0;
      background-color: #252836;
    }
  }
}

```

# src/ui/ButtonAuthComponent/ButtonAuthComponent.tsx

```tsx
import { memo } from 'react';

import Button, { ButtonProps } from '@mui/material/Button';
import classNames from 'classnames';

import styles from './ButtonAuthComponents.module.scss';

export const ButtonAuthComponent = memo((props: ButtonProps) => {
  const { variant = 'contained', disabled } = props;
  return (
    <Button
      {...props}
      variant={variant}
      disabled={disabled}
      className={classNames(
        styles.button,
        styles.buttonWrapper,
        props.className,
        { [styles.disabled]: disabled },
      )}
    />
  );
});

ButtonAuthComponent.displayName = 'ButtonAuthComponent';

```

# src/redux/theme/themeSlice.ts

```ts
import { PaletteMode } from '@mui/material';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  mode: PaletteMode;
}

const initialState: ThemeState = { mode: 'light' };

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<PaletteMode>) => {
      state.mode = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

```

# src/redux/theme/theme.selectors.ts

```ts
import { RootState } from '@/redux/store';

export const selectThemeMode = (state: RootState) => state.theme.mode;

```

# src/redux/conversations/helpers.tsx

```tsx
import { TreeItems, FlattenedItem } from '@/typings/common';

export const flatten = (
  items: TreeItems,
  parentType: string | null = null,
  parentId: string | null = null,
  depth = 0,
): FlattenedItem[] =>
  items?.reduce<FlattenedItem[]>(
    (acc, item, index) => [
      ...acc,
      { ...item, parentType, parentId, depth, index },
      ...(Array.isArray(item.children)
        ? flatten(item.children, item.type, item.id, depth + 1)
        : []),
    ],
    [],
  );

```

# src/redux/conversations/conversationsSlice.ts

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { TreeItem, TreeItems, ChatContent } from '@/typings/common';

import { findChatById } from './conversations.selectors';

interface ConversationsState {
  conversations: TreeItem[];
}

const initialState: ConversationsState = {
  conversations: [],
};

const renameChatTree = (
  items: TreeItem[],
  chatTreeId: string,
  chatTreeName: string,
): TreeItem[] =>
  items.map(item => {
    if (item.id === chatTreeId) {
      return { ...item, name: chatTreeName };
    }

    if (item.children && item.children.length) {
      return {
        ...item,
        children: renameChatTree(item.children, chatTreeId, chatTreeName),
      };
    }

    return item;
  });

const deleteChatTree = (items: TreeItem[], chatTreeId: string): TreeItem[] => {
  const newItems = [];
  for (const item of items) {
    if (item.id === chatTreeId) {
      continue;
    }
    const newItem = { ...item };
    if (item.children.length) {
      newItem.children = deleteChatTree(item.children, chatTreeId);
    }

    newItems.push(newItem);
  }
  return newItems;
};

const collapseChatTree = <T extends keyof TreeItem>(
  items: TreeItems,
  id: string,
  property: T,
  setter: (value: TreeItem[T]) => TreeItem[T],
) => {
  for (const item of items) {
    if (item.id === id) {
      item[property] = setter(item[property]);
      continue;
    }

    if (item.children.length) {
      item.children = collapseChatTree(item.children, id, property, setter);
    }
  }

  return [...items];
};

export const conversationsSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {
    saveChat: (
      state,
      action: PayloadAction<Omit<TreeItem, 'type' | 'createdAt' | 'children'>>,
    ) => {
      state.conversations?.unshift({
        type: 'chat',
        children: [],
        createdAt: new Date(),
        ...action.payload,
      });
    },
    saveFolder: (
      state,
      action: PayloadAction<
        Omit<TreeItem, 'type' | 'id' | 'createdAt' | 'children'>
      >,
    ) => {
      state.conversations?.unshift({
        type: 'folder',
        id: uuidv4(),
        createdAt: new Date(),
        children: [],
        collapsed: true,
        ...action.payload,
      });
    },
    renameChatTreeItem: (
      state,
      action: PayloadAction<{ chatTreeId: string; chatTreeName: string }>,
    ) => {
      const { chatTreeId, chatTreeName } = action.payload;
      const conversationToRename = renameChatTree(
        state.conversations,
        chatTreeId,
        chatTreeName,
      );
      state.conversations = conversationToRename;
    },
    updateChatContents: (
      state,
      action: PayloadAction<{ chatId: string; contents: ChatContent[] }>,
    ) => {
      const { chatId, contents } = action.payload;
      const chatToUpdate = findChatById(state.conversations, chatId);
      if (chatToUpdate) {
        (chatToUpdate as TreeItem).content = contents;
      }
    },
    updateContentById: (
      state,
      action: PayloadAction<{
        chatId: string;
        contentId: string;
        text: string;
      }>,
    ) => {
      const { chatId, contentId, text } = action.payload;
      const chat = findChatById(state.conversations, chatId);

      const contentToUpdate = chat?.content?.find(
        content => content.id === contentId,
      );
      if (contentToUpdate) {
        contentToUpdate.text = text;
      }
    },
    addPromptToChat: (
      state,
      action: PayloadAction<{ chatId: string; content: ChatContent }>,
    ) => {
      const { chatId, content } = action.payload;

      const chat = findChatById(state.conversations, chatId);

      if (chat && chat.content) {
        chat.content.push(content);
      } else if (chat) {
        chat.content = [content];
      }
    },
    collapseChatTreeItem: (
      state,
      action: PayloadAction<{ chatTreeId: string }>,
    ) => {
      const { chatTreeId } = action.payload;
      state.conversations = collapseChatTree(
        state.conversations,
        chatTreeId,
        'collapsed',
        value => !value,
      );
    },
    deleteChatTreeItem: (
      state,
      action: PayloadAction<{ chatTreeId: string }>,
    ) => {
      const { chatTreeId } = action.payload;
      state.conversations = deleteChatTree(state.conversations, chatTreeId);
    },
    updateChatTree: (state, action: PayloadAction<{ chatTree: TreeItems }>) => {
      const { chatTree } = action.payload;
      state.conversations = chatTree;
    },
    clearConversations: () => initialState,
  },
});

export const {
  saveChat,
  saveFolder,
  updateChatContents,
  clearConversations,
  addPromptToChat,
  updateContentById,
  renameChatTreeItem,
  deleteChatTreeItem,
  updateChatTree,
  collapseChatTreeItem,
} = conversationsSlice.actions;

```

# src/redux/conversations/conversations.selectors.ts

```ts
import { createSelector } from '@reduxjs/toolkit';

import { TreeItem } from '@/typings/common';

import { RootState } from '../store';

import { flatten } from './helpers';

export const selectConversationsList = (state: RootState) =>
  state.chats.conversations;

export const selectConversationFlattenList = createSelector(
  selectConversationsList,
  conversation => flatten(conversation),
);

export const selectCountConversations = createSelector(
  selectConversationsList,
  conversations => {
    let countItems = 0;
    if (!conversations?.length) {
      return 0;
    }
    for (const item of conversations) {
      if (item.type === 'chat') {
        countItems += 1;
      }
      if (item.children?.length) {
        countItems += item.children.length;
      }
    }
    return countItems;
  },
);

export const searchChats = (
  conversations: TreeItem[],
  searchedName: string,
): TreeItem[] => {
  const newItems: TreeItem[] = [];

  const searchRecursively = (items: TreeItem[]) => {
    const search = searchedName.toLowerCase();
    for (const item of items) {
      if (item.type === 'chat' && item.name.toLowerCase().includes(search)) {
        newItems.push(item);
      }

      if (item?.children?.length) {
        searchRecursively(item.children);
      }
    }
  };

  searchRecursively(conversations);
  return newItems;
};

export const selectConversationsSearchedList = (searchedName: string) =>
  createSelector(selectConversationsList, conversations =>
    searchChats(conversations, searchedName),
  );

export const findChatById = (
  conversations: TreeItem[],
  id: string,
): TreeItem | undefined => {
  let result: TreeItem | undefined;
  if (!conversations?.length) {
    return;
  }
  for (const item of conversations) {
    if (item.type === 'chat' && item.id === id) {
      result = item as TreeItem;

      break;
    }

    if (item.children?.length) {
      result = findChatById(item.children, id);
      if (result) {
        break;
      }
    }
  }

  return result;
};

export const selectChatById = (id: string) =>
  createSelector(selectConversationsList, conversations =>
    findChatById(conversations, id),
  );

```

# src/ui/SelectComponent/selectTypes.ts

```ts
import { SelectProps } from '@mui/material/Select';

export interface SelectItem {
  value: string | number;
  label?: string;
}

export type SelectComponentProps = SelectProps & {
  selectItems: SelectItem[];
  label: string;
};

```

# src/ui/SelectComponent/index.ts

```ts
export * from './SelectComponent';

```

# src/ui/SelectComponent/SelectComponent.tsx

```tsx
import { SyntheticEvent, useState } from 'react';

import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import classNames from 'classnames';

import { ReactComponent as arrowDown } from '@/assets/icons/arrow-down.svg';

import { SelectComponentProps } from './selectTypes';

import styles from './SelectComponent.module.scss';

export const SelectComponent = (props: SelectComponentProps) => {
  const { selectItems, ...otherProps } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (event: SyntheticEvent<Element>) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  const handleOpen = (event: SyntheticEvent<Element>) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  return (
    <FormControl className={styles.wrapper} onClick={handleOpen} fullWidth>
      <InputLabel
        className={styles.label}
        sx={{
          '&.Mui-focused': {
            color: 'var(--text-primary)',
          },
        }}
      >
        {props.label}
      </InputLabel>
      <Select
        {...otherProps}
        open={isOpen}
        onClose={handleClose}
        onOpen={handleOpen}
        variant="outlined"
        className={classNames(styles.select, { [styles.open]: isOpen })}
        IconComponent={arrowDown}
        sx={{
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid var(--btn-outlined-hover)',
            },
          },
        }}
        MenuProps={{
          sx: {
            '& .MuiMenuItem-root.Mui-selected, .MuiMenuItem-root.Mui-selected:hover':
              {
                backgroundColor: 'var(--primary-color) !important',
                color: '#ffffff',
              },
          },
        }}
      >
        {selectItems.map(({ label, value }) => (
          <MenuItem value={value} key={value}>
            {label ?? value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

```

# src/ui/SelectComponent/SelectComponent.module.scss

```scss
.wrapper {
  cursor: pointer;

  .select {
    position: static;
    padding: 10px 12px;

    legend {
      display: none;
    }

    & > div {
      padding: 0;
      font-family: var(--font-family-main);
      font-weight: 500;
      color: var(--text-primary);
      font-size: 16px;
    }

    fieldset {
      transition: 0.3s;
      border: 1px solid var(--border-primary);
      border-radius: 8px;
    }

    svg {
      stroke: var(--text-primary);
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      transition: 0.3s;
    }

    &.open {
      fieldset {
        border-color: var(--btn-outlined-hover);
      }

      svg {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }

  &:hover fieldset {
    border-color: var(--btn-outlined-hover);
  }

  .label {
    position: static;
    transform: none;
    padding: 5px 12px 0;
    font-size: 14px;
    font-family: var(--font-family-main);
    font-weight: 500;
    color: var(--text-primary);
  }
}

```

# src/redux/apiSettings/apiSettings.slice.ts

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApiSettingOptions } from '@/typings/common';

const initialState: ApiSettingOptions = {
  apiKey: '',
  model: 'claude-2',
  maxTokens: 8000,
  temperature: 0.7,
  topK: 5,
  topP: 0,
};

export const apiSettingsSlice = createSlice({
  name: 'apiSettings',
  initialState,
  reducers: {
    setApiKey: (state, action: PayloadAction<string>) => {
      state.apiKey = action.payload;
    },
    setModel: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      if (!value.includes('100k')) {
        if (state.maxTokens > initialState.maxTokens) {
          state.maxTokens = initialState.maxTokens;
        }
      }
      state.model = value;
    },
    setMaxTokens: (state, action: PayloadAction<number>) => {
      state.maxTokens = Math.round(action.payload);
    },
    setTemperature: (state, action: PayloadAction<number>) => {
      const value = action.payload;
      if (value > 0) {
        state.topP = initialState.topP;
      }
      state.temperature = value;
    },
    setTopK: (state, action: PayloadAction<number>) => {
      state.topK = Math.round(action.payload);
    },
    setTopP: (state, action: PayloadAction<number>) => {
      const value = action.payload;

      if (value > 0) {
        state.temperature = 0;
      }

      state.topP = value;
    },
    cleanApiKey: state => {
      state.apiKey = '';
    },
    cleanApiSettings: () => initialState,
    resetApiSettings: state => {
      const apiKey = state.apiKey;
      state = { ...initialState, apiKey };

      return state;
    },
  },
});

export const {
  setApiKey,
  setMaxTokens,
  setModel,
  setTemperature,
  setTopK,
  setTopP,
  cleanApiKey,
  cleanApiSettings,
  resetApiSettings,
} = apiSettingsSlice.actions;

```

# src/redux/apiSettings/apiSettings.selectors.ts

```ts
import { RootState } from '@/redux/store';

export const selectApiKey = (state: RootState) => state.apiSettings.apiKey;

export const selectApiModel = (state: RootState) => state.apiSettings.model;

export const selectApiMaxTokens = (state: RootState) =>
  state.apiSettings.maxTokens;

export const selectApiTemperature = (state: RootState) =>
  state.apiSettings.temperature;

export const selectApiTopK = (state: RootState) => state.apiSettings.topK;

export const selectApiTopP = (state: RootState) => state.apiSettings.topP;

```

# src/pages/ChatLayoutPage/index.ts

```ts
export * from './ChatLayoutPage';

```

# src/pages/ChatLayoutPage/ChatLayoutPage.tsx

```tsx
import { PropsWithChildren } from 'react';

import classNames from 'classnames';

import { ApiSettings } from '@/features/ApiSettings';
import { Sidebar } from '@/features/Sidebar';

import styles from './ChatLayoutPage.module.scss';

export const ChatLayoutPage = ({ children }: PropsWithChildren) => (
  <div className={classNames(['app', styles.wrapper])}>
    <Sidebar />
    {children}
    <ApiSettings />
  </div>
);

```

# src/pages/ChatLayoutPage/ChatLayoutPage.module.scss

```scss
.wrapper {
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(250px, 340px) minmax(650px, 1fr) minmax(250px, 340px);

  @media (width >= 2400px) {
    grid-template-columns: minmax(250px, 500px) minmax(650px, 1fr) minmax(250px, 500px);
  }
}

```

# src/pages/AuthPage/index.ts

```ts
export * from './AuthPage';

```

# src/pages/AuthPage/AuthPage.tsx

```tsx
// src/pages/AuthPage/AuthPage.tsx

import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useRef,
  useState,
} from 'react';

import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { submitPrompt } from '@/api/prompt.api';
import { ROUTES } from '@/app/router/constants/routes';
import { selectApiModel } from '@/redux/apiSettings/apiSettings.selectors';
import { setApiKey as dispatchApiKey } from '@/redux/apiSettings/apiSettings.slice';
import { useAppDispatch } from '@/redux/hooks';
import { ButtonAuthComponent } from '@/ui/ButtonAuthComponent';
import { IconComponent } from '@/ui/IconComponent';
import { TextFieldAuthComponent } from '@/ui/TextFieldAuthComponent';

import styles from './AuthPage.module.scss';

export const AuthPage = () => {
  const [apiKey, setApiKey] = useState('');
  const [invalidKey, setInvalidKey] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const model = useSelector(selectApiModel);

  const navigate = useNavigate();

  const formRef = useRef<HTMLFormElement | null>(null);

  const dispatch = useAppDispatch();

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const cursorPosition = input.selectionStart;
    const value = input.value;

    if (value.includes(' ')) {
      const newValue = value.replace(/ /g, '');
      input.value = newValue;
      setApiKey(newValue);

      if (cursorPosition) {
        input.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
      }
    } else {
      setApiKey(value);
    }

    setInvalidKey(false);
    setErrorMessage('');
  }, []);

  const validateApiKey = useCallback(
    async (keyApi: string): Promise<boolean> => {
      try {
        const response = await submitPrompt({
          model: model,
          temperature: 0,
          topK: 0,
          topP: 0,
          apiKey: keyApi,
          maxTokens: 1,
          prompt: `\n\nHuman: ' '\n\nAssistant:`,
        });
        if (response?.ok) {
          return true;
        } else {
          const errorData = await response?.json();
          setErrorMessage(errorData?.error?.message || 'Invalid API Key');
          return false;
        }
      } catch (error) {
        console.error('API Key validation error:', error);
        setErrorMessage(
          'An error occurred while validating the API Key. Please try again.',
        );
        return false;
      }
    },
    [model],
  );

  const onSubmit = useCallback(
    async (event?: FormEvent<HTMLFormElement>) => {
      event?.preventDefault();
      if (apiKey.length > 10) {
        const isValidKey = await validateApiKey(apiKey);
        if (isValidKey) {
          dispatch(dispatchApiKey(apiKey));
          navigate(ROUTES.Home, { replace: true });
        } else {
          setInvalidKey(true);
        }
      } else {
        setInvalidKey(true);
        setErrorMessage('API Key must be longer than 10 characters');
      }
    },
    [apiKey, validateApiKey, dispatch, navigate],
  );

  const onEnter = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' || event.code === 'NumpadEnter') {
        onSubmit();
      }
    },
    [onSubmit],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundWrapper}></div>
      <div className={styles.logoWrapper}>
        <IconComponent type="logoLight" className={styles.logoAuth} />
      </div>
      <div className={styles.formWrapper}>
        <form onSubmit={onSubmit} ref={formRef} className={styles.form}>
          <Stack spacing={1}>
            <div className={styles.errorContainer}>
              <p className={styles.textApiKey}>API Key</p>
              {apiKey.length > 0 && invalidKey && (
                <div>
                  <IconComponent type="warning" />
                  <span className={styles.textInvalidKey}>{errorMessage}</span>
                </div>
              )}
            </div>
            <TextFieldAuthComponent
              className={`${styles.textField} ${
                invalidKey ? styles.invalid : ''
              }`}
              placeholder="Enter key"
              value={apiKey}
              onChange={onChange}
              onKeyDown={onEnter}
              autoComplete="off"
              error={invalidKey && apiKey !== ''}
            />

            <ButtonAuthComponent
              type="submit"
              variant="contained"
              disabled={invalidKey || apiKey === ''}
            >
              Enter
            </ButtonAuthComponent>
          </Stack>
        </form>
      </div>
    </div>
  );
};

```

# src/pages/AuthPage/AuthPage.module.scss

```scss
.wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .backgroundWrapper {
    background: linear-gradient(188.69deg, rgba(97, 41, 255, 0.6) 0.56%, rgba(255, 255, 255, 0.135065) 41.89%);
    transform: matrix(1, 0, 0, -1, 0, 0);
    height: 100vh;
    position: fixed;
    inset: 0;
    z-index: -1;
  }

  .contentWrapper {
    position: relative;
    z-index: 1;
  }

  .logoWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30vh;

    .logoAuth {
      margin-right: 14px;
    }
  }

  .formWrapper {
    margin-top: 7vh;

    .errorContainer {
      min-height: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .textApiKey {
        font-family: var(--font-family-main);
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        display: flex;
        align-items: center;
        color: #000000;
      }

      .textInvalidKey {
        font-family: var(--font-family-main);
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #eb4040;
        margin-left: 5px;
      }
    }
  }
}

```

# src/hooks/useDebounce/useDebounce.ts

```ts
import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

```

# src/hooks/useDebounce/index.ts

```ts
export { useDebounce } from './useDebounce';

```

# src/features/Sidebar/index.ts

```ts
export * from './Sidebar';

```

# src/features/Sidebar/Sidebar.tsx

```tsx
import { memo } from 'react';

import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/app/router/constants/routes';
import { Logo } from '@/components/Logo';
import { Logout } from '@/components/Logout';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Conversations } from '@/features/Conversations';
import { ButtonComponent } from '@/ui/ButtonComponent';
import { IconComponent } from '@/ui/IconComponent';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const navigate = useNavigate();

  const onClickNewChat = () => {
    navigate(ROUTES.Home);
  };

  return (
    <div className={classNames(className, styles.wrapper)}>
      <Logo />
      <ButtonComponent onClick={onClickNewChat}>
        <span>New Chat</span>
        <IconComponent type="plus" className={styles.newChatIcon} />
      </ButtonComponent>
      <Conversations />
      <div className={styles.bottomItems}>
        <ThemeSwitcher />
        <Logout />
      </div>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';

```

# src/features/Sidebar/Sidebar.module.scss

```scss
.wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 17px;
  padding: 25px 18px;
  border-right: 1px solid var(--border-primary);
  overflow-y: hidden;
  height: 100vh;

  .bottomItems {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    row-gap: 17px;
  }

  .newChatIcon {
    stroke: #ffffff;
  }
}

```

# src/features/Conversations/index.ts

```ts
export * from './Conversations';

```

# src/features/Conversations/helpers.tsx

```tsx
import { arrayMove } from '@dnd-kit/sortable';

import {
  collapseChatTreeItem,
  deleteChatTreeItem,
} from '@/redux/conversations/conversationsSlice';
import { FlattenedItem, TreeItem, TreeItems } from '@/typings/common';

export const removeChildrenOf = (
  items: FlattenedItem[],
  ids: string[] | string,
) => {
  const excludeParentIds = Array.isArray(ids) ? [...ids] : [ids];

  return items?.filter(item => {
    if (item.parentId && excludeParentIds.includes(item.parentId)) {
      if (item.children.length) {
        excludeParentIds.push(item.id);
      }
      return false;
    }

    return true;
  });
};

export const getDragDepth = (offset: number, width: number) => {
  const dragDepth = Math.round(offset / width);
  return dragDepth >= 1 ? 1 : dragDepth;
};

const getMaxDepth = ({ previousItem }: { previousItem: FlattenedItem }) => {
  if (previousItem) {
    return previousItem?.depth + 1;
  }

  return 0;
};
export const getMinDepth = ({ nextItem }: { nextItem: FlattenedItem }) => {
  if (nextItem) {
    return nextItem?.depth;
  }

  return 0;
};

export const getProjection = (
  items: FlattenedItem[],
  actvId: string,
  overTheId: string,
  dragOffset: number,
  width: number,
) => {
  const overItemIndex = items.findIndex(({ id }) => id === overTheId);
  const activeItemIndex = items.findIndex(({ id }) => id === actvId);
  const activeCurrentItem = items[activeItemIndex];

  if (!activeCurrentItem) {
    return null;
  }

  const newItems = arrayMove(items, activeItemIndex, overItemIndex);
  const previousItem = newItems[overItemIndex - 1] || null;
  const nextItem = newItems[overItemIndex + 1] || null;
  const dragDepth = getDragDepth(dragOffset, width);
  const projectedDepth = activeCurrentItem.depth + dragDepth;
  const maxDepth = getMaxDepth({
    previousItem,
  });
  const minDepth = getMinDepth({ nextItem });
  let depth = projectedDepth;

  const getParentId = () => {
    if (depth === 0 || !previousItem) {
      return null;
    }

    if (depth > 1) {
      return previousItem.parentId;
    }

    if (depth === previousItem.depth) {
      return previousItem.parentId;
    }

    if (depth > previousItem.depth) {
      return previousItem.id;
    }

    const newParent = newItems
      .slice(0, overItemIndex)
      .reverse()
      .find(item => item?.depth === depth)?.parentId;

    return newParent ?? null;
  };

  const getParentType = () => {
    if (depth === 0 || !previousItem) {
      return null;
    }

    if (depth === previousItem.depth) {
      return previousItem.parentType;
    }

    if (depth > previousItem.depth) {
      return previousItem.type;
    }

    const newParent = newItems
      .slice(0, overItemIndex)
      .reverse()
      .find(item => item?.depth === depth)?.parentType;

    return newParent ?? null;
  };

  if (projectedDepth >= maxDepth) {
    if (maxDepth > 1) {
      depth = 1;
    } else {
      depth = maxDepth;
    }
  } else if (projectedDepth < minDepth) {
    depth = minDepth;
  }

  return {
    depth,
    maxDepth,
    minDepth,
    collapsed: activeCurrentItem.collapsed,
    currentType: activeCurrentItem.type,
    parentType: getParentType(),
    parentId: getParentId(),
  };
};

export const countChildren = (items: TreeItem[], count = 0): number =>
  items.reduce((acc, { children }) => {
    if (children.length) {
      return countChildren(children, acc + 1);
    }

    return acc + 1;
  }, count);

export const findItem = (items: TreeItem[], itemId: string) =>
  items.find(({ id }) => id === itemId);

export const buildTree = (flatndItems: FlattenedItem[]): TreeItems => {
  const root: TreeItem = {
    id: 'root',
    children: [],
    name: '',
    type: '',
  };
  const nodes: Record<string, TreeItem> = { [root.id]: root };
  const items = flatndItems.map(item => ({ ...item, children: [] }));

  for (const item of items) {
    const { id, children } = item;
    const parentId = item.parentId ?? root.id;
    const parent = nodes[parentId] ?? findItem(items, parentId);

    nodes[id] = { id, children, name: item.name, type: item.type };
    parent.children.push(item);
  }

  return root.children;
};

export const findItemDeep = (
  items: TreeItems,
  itemId: string,
): TreeItem | undefined => {
  for (const item of items) {
    const { id, children } = item;

    if (id === itemId) {
      return item;
    }

    if (children.length) {
      const child = findItemDeep(children, itemId);

      if (child) {
        return child;
      }
    }
  }

  return undefined;
};

export const getChildCount = (items: TreeItems, id: string) => {
  if (!id) {
    return 0;
  }

  const item = findItemDeep(items, id);

  return item ? countChildren(item.children) : 0;
};

export const findChatParent = (
  items: TreeItems,
  itemId: string,
): TreeItem | undefined => {
  for (const item of items) {
    const { id, children } = item;
    if (id === itemId) {
      return undefined;
    }
    if (children.length) {
      const child = findItem(children, itemId);
      if (child) {
        return item;
      }
    }
  }
  return undefined;
};

export const removeItem = (
  id: string,
  dispatch: (arg0: {
    payload: { chatTreeId: string };
    type: 'conversations/deleteChatTreeItem';
  }) => void,
) => {
  dispatch(deleteChatTreeItem({ chatTreeId: id }));
};

export const collapseItem = (
  id: string,
  dispatch: (arg0: {
    payload: { chatTreeId: string };
    type: 'conversations/collapseChatTreeItem';
  }) => void,
) => {
  dispatch(collapseChatTreeItem({ chatTreeId: id }));
};

export const handleRemove = (
  id: string,
  removableItem: boolean | undefined,
  dispatch: (arg0: {
    payload: { chatTreeId: string };
    type: 'conversations/deleteChatTreeItem';
  }) => void,
) => (removableItem ? () => removeItem(id, dispatch) : undefined);

```

# src/features/Conversations/Conversations.tsx

```tsx
import { ChangeEvent, memo, useState } from 'react';

import { InputAdornment } from '@mui/material';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch } from 'react-redux';

import { ChatsTree } from '@/features/Conversations/ChatsTree';
import { useDebounce } from '@/hooks/useDebounce';
import { selectCountConversations } from '@/redux/conversations/conversations.selectors';
import {
  clearConversations,
  saveFolder,
} from '@/redux/conversations/conversationsSlice';
import { useAppSelector } from '@/redux/hooks';
import { ButtonComponent } from '@/ui/ButtonComponent';
import { IconComponent } from '@/ui/IconComponent';
import { TextFieldComponent } from '@/ui/TextFieldComponent';

import { ChatsTreeSearch } from './ChatsTreeSearch';

import styles from './Conversations.module.scss';

export const Conversations = memo(() => {
  const [isClearing, setIsClearing] = useState(false);
  const dispatch = useDispatch();
  const [searchedName, setSearchedName] = useState('');
  const debouncedSearch = useDebounce(searchedName, 500);
  const conversationLength = useAppSelector(selectCountConversations);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchedName(event.target.value);
  };

  const onClickNewFolder = () => {
    dispatch(saveFolder({ name: 'New Folder' }));
  };

  const onClickClear = () => {
    setIsClearing(true);
  };

  const onClickCancel = () => {
    setIsClearing(false);
  };

  const onClickResetSearch = () => {
    setSearchedName('');
  };

  const onClearConfirm = () => {
    dispatch(dispatch(clearConversations()));
    setIsClearing(false);
  };

  const onOutsideClick = () => {
    onClickCancel();
  };

  return (
    <>
      <TextFieldComponent
        autoComplete="off"
        placeholder="Search conversation"
        fullWidth
        onChange={onSearchChange}
        value={searchedName}
        className={styles.textField}
        inputProps={{
          style: { marginTop: '3px' },
        }}
        InputProps={{
          startAdornment: (
            <div className={styles.searchContainer}>
              <InputAdornment position="start">
                <IconComponent type="search" className={styles.searchIcon} />
              </InputAdornment>
            </div>
          ),
          endAdornment: searchedName ? (
            <div className={styles.cancelContainer}>
              <InputAdornment position="end" className={styles.cancelIcon}>
                <IconComponent type="cancel" onClick={onClickResetSearch} />
              </InputAdornment>
            </div>
          ) : null,
        }}
      />
      <div className={styles.header}>
        <p>{`Conversations (${conversationLength})`}</p>
        <OutsideClickHandler onOutsideClick={onOutsideClick}>
          {isClearing ? (
            <div className={styles.confirmationClear}>
              <IconComponent type="confirm" onClick={onClearConfirm} />
              <IconComponent type="cancel" onClick={onClickCancel} />
            </div>
          ) : (
            <ButtonComponent onClick={onClickClear} variant="text">
              Clear
            </ButtonComponent>
          )}
        </OutsideClickHandler>
      </div>

      {debouncedSearch ? (
        <div className={`${styles.newFolderDisabled} `}>
          <button>
            <IconComponent type="newFolder" />
          </button>
          <span>Add new folder</span>
        </div>
      ) : (
        <div className={styles.newFolder} onClick={onClickNewFolder}>
          <button>
            <IconComponent type="newFolder" />
          </button>
          <span>Add new folder</span>
        </div>
      )}

      {debouncedSearch ? (
        <ChatsTreeSearch searchName={debouncedSearch} />
      ) : (
        <div className={styles.treeContainer}>
          <ChatsTree collapsible removable />
        </div>
      )}
    </>
  );
});

Conversations.displayName = 'Conversations';

```

# src/features/Conversations/Conversations.module.scss

```scss
.searchContainer, .cancelContainer {
  svg {
    stroke: var(--bg-default);
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      stroke: var(--text-primary);
    }
  }
}

.cancelContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.searchIcon {
  stroke: var(--text-secondary);
}

.cancelIcon {
  stroke: var(--text-secondary);
  cursor: pointer;
}

.confirmationClear {
  flex-shrink: 0;
  display: flex;
  column-gap: 8px;
  align-items: center;
  padding: 10px 0;

  svg {
    stroke: var(--bg-default);
  }
}

.newFolder {
  display: inline-flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
  padding: 10px 0;
  transition: 0.3s;
  font-weight: 700;
  font-family: var(--font-family-bold);

  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: var(--bg-primary);
    transition: 0.3s;

    svg {
      transition: 0.3s;
      stroke: var(--text-primary);
    }
  }
}

.confirmationClear svg:hover {
  stroke: var(--text-primary);
}

.newFolder:hover {
  button {
    background-color: var(--primary-hover);

    svg {
      stroke: #ffffff;
    }
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 3px;
  border-bottom: 1px solid var(--border-primary);
}

.treeContainer {
  height: 70vh;
  row-gap: '0px';
  overflow-y: auto;
  padding-right: 15px;
  scrollbar-width: thin;
}

.newFolderDisabled {
  display: inline-flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
  padding: 10px 0;
  transition: 0.3s;
  font-weight: 700;
  font-family: var(--font-family-bold);
  pointer-events: none;
  color: var(--bg-btn-disabled);

  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: var(--bg-btn-disabled);
    border-color: var(--btn-disabled-border);
    transition: 0.3s;
    
    svg {
      stroke: var(--btn-disabled-stroke);
    }
  }

}
```

# src/features/Conversations/ChatsTreeSearch.tsx

```tsx
import { memo } from 'react';

import { selectConversationsSearchedList } from '@/redux/conversations/conversations.selectors';
import { useAppSelector } from '@/redux/hooks';
import { TreeItem } from '@/typings/common';

import { SearchItem } from './components/SearchItem';

import styles from './ChatsTreeSearch.module.scss';

export const ChatsTreeSearch = memo(
  ({ searchName }: { searchName: string }) => {
    const conversations = useAppSelector(
      selectConversationsSearchedList(searchName),
    );

    return (
      <div className={styles.wrapper}>
        {conversations?.length ? (
          conversations.map((conversation: TreeItem) => (
            <SearchItem conversationItem={conversation} key={conversation.id} />
          ))
        ) : (
          <p>No results</p>
        )}
      </div>
    );
  },
);

ChatsTreeSearch.displayName = 'ChatsTreeSearch';

```

# src/features/Conversations/ChatsTreeSearch.module.scss

```scss
.wrapper {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: '0px';
  overflow-y: auto;
}

```

# src/features/Conversations/ChatsTree.tsx

```tsx
import { memo, useEffect, useMemo, useRef, useState } from 'react';

import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  DropAnimation,
  MeasuringStrategy,
  Modifier,
  PointerSensor,
  closestCenter,
  defaultDropAnimation,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  buildTree,
  collapseItem,
  findChatParent,
  getChildCount,
  getProjection,
  removeChildrenOf,
  removeItem,
} from '@/features/Conversations/helpers';
import {
  selectConversationsList,
  selectConversationFlattenList,
} from '@/redux/conversations/conversations.selectors';
import { updateChatTree } from '@/redux/conversations/conversationsSlice';
import {
  TreeItems,
  FlattenedItem,
  SensorContext,
  TreeItem,
} from '@/typings/common';

import { SortableTreeItem } from './components/TreeItem/SortableTreeItem';

const measuring = {
  droppable: {
    strategy: MeasuringStrategy.Always,
  },
};

const dropAnimation: DropAnimation = {
  ...defaultDropAnimation,
};

interface Props {
  collapsible?: boolean;
  defaultItems?: TreeItems;
  indentationWidth?: number;
  indicator?: boolean;
  removable?: boolean;
}

const adjustTranslate: Modifier = ({ transform }) => ({
  ...transform,
  y: transform.y - 25,
});

export const ChatsTree = memo(
  ({ collapsible, indicator, indentationWidth = 20, removable }: Props) => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [overId, setOverId] = useState<string | null>(null);
    const [offsetLeft, setOffsetLeft] = useState(0);
    const dispatch = useDispatch();
    const treeItems = useSelector(selectConversationsList);
    const flattenedTree = useSelector(selectConversationFlattenList);

    const flattenedItems = useMemo(() => {
      const collapsedItems = flattenedTree?.reduce<string[]>(
        (acc, { children, collapsed, id }) =>
          collapsed && children.length ? [...acc, id] : acc,
        [],
      );

      return removeChildrenOf(
        flattenedTree,
        activeId ? [activeId, ...collapsedItems] : collapsedItems,
      );
    }, [activeId, flattenedTree]);

    const projected =
      activeId && overId
        ? getProjection(
            flattenedItems,
            activeId,
            overId,
            offsetLeft,
            indentationWidth,
          )
        : null;

    const sensorContext: SensorContext = useRef({
      items: flattenedItems,
      offset: offsetLeft,
    });

    const sensors = useSensors(useSensor(PointerSensor));

    const sortedIds = useMemo(
      () =>
        flattenedItems && flattenedItems?.length
          ? flattenedItems?.map(({ id }) => id)
          : [],
      [flattenedItems],
    );

    const activeItem = activeId
      ? flattenedItems.find(({ id }) => id === activeId)
      : null;

    const handleCollapse = (
      id: string,
      type: string,
      collapsibleItem: boolean | undefined,
      children: TreeItem[],
    ) =>
      (collapsibleItem && children?.length) ||
      (collapsibleItem && type === 'folder')
        ? () => collapseItem(id, dispatch)
        : undefined;

    const handleDragStart = ({ active: { id: currentId } }: DragStartEvent) => {
      setActiveId(String(currentId));
      setOverId(String(currentId));
      document.body.style.setProperty('cursor', 'grabbing');
    };

    const handleDragMove = ({ delta }: DragMoveEvent) => {
      if (projected?.currentType === 'folder') {
        setOffsetLeft(0);
      } else {
        setOffsetLeft(delta.x);
      }
      if (!projected?.collapsed) {
        collapseItem(String(activeId), dispatch);
      }
    };

    const handleDragOver = ({ over }: DragOverEvent) => {
      setOverId(over?.id?.toString() ?? null);
    };

    const resetState = () => {
      setOverId(null);
      setActiveId(null);
      setOffsetLeft(0);
      document.body.style.setProperty('cursor', '');
    };

    const handleDragEnd = ({ active, over }: DragEndEvent) => {
      resetState();
      if (projected && over) {
        const { depth, parentId, parentType, currentType, collapsed } =
          projected;

        if (collapsed) {
          collapseItem(String(active.id), dispatch);
        }

        if (
          (currentType === 'chat' && parentType === 'chat') ||
          (currentType === 'folder' &&
            (parentType === 'folder' || parentType === 'chat'))
        ) {
          const parentItem = findChatParent(flattenedTree, parentId || '');

          const clonedItems: FlattenedItem[] = structuredClone(flattenedTree);
          const overIndex = clonedItems.findIndex(({ id }) => id === parentId);
          const activeIndex = clonedItems.findIndex(
            ({ id }) => id === active.id,
          );
          const activeTreeItem = clonedItems[activeIndex];
          clonedItems[activeIndex] = {
            ...activeTreeItem,
            depth: parentItem ? depth : 0,
            parentId: parentItem ? parentItem?.id || null : null,
          };
          const sortedItems = arrayMove(
            clonedItems,
            activeIndex,
            activeIndex < overIndex ? overIndex : overIndex + 1,
          );
          const newItems = buildTree(sortedItems);
          dispatch(updateChatTree({ chatTree: newItems }));

          return;
        }
        const clonedItems: FlattenedItem[] = structuredClone(flattenedTree);
        const overIndex = clonedItems.findIndex(({ id }) => id === over.id);
        const activeIndex = clonedItems.findIndex(({ id }) => id === active.id);
        const activeTreeItem = clonedItems[activeIndex];
        clonedItems[activeIndex] = { ...activeTreeItem, depth, parentId };
        const sortedItems = arrayMove(clonedItems, activeIndex, overIndex);
        const newItems = buildTree(sortedItems);
        dispatch(updateChatTree({ chatTree: newItems }));
      }
    };

    const handleDragCancel = () => {
      resetState();
    };

    const handleRemove = (id: string, removableItem: boolean | undefined) =>
      removableItem ? () => removeItem(id, dispatch) : undefined;

    useEffect(() => {
      sensorContext.current = {
        items: flattenedItems,
        offset: offsetLeft,
      };
    }, [flattenedItems, offsetLeft]);

    return (
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        measuring={measuring}
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext
          items={sortedIds}
          strategy={verticalListSortingStrategy}
        >
          {flattenedItems?.map(
            ({ id, name, type, children, collapsed, depth }) => (
              <SortableTreeItem
                key={id}
                id={id}
                value={id}
                name={name}
                type={type}
                depth={id === activeId && projected ? projected.depth : depth}
                indentationWidth={indentationWidth}
                indicator={indicator}
                childCount={children?.length}
                collapsed={Boolean(
                  collapsed && (children?.length || type === 'folder'),
                )}
                onCollapse={handleCollapse(id, type, collapsible, children)}
                onRemove={handleRemove(id, removable)}
              />
            ),
          )}
          {createPortal(
            <DragOverlay
              dropAnimation={dropAnimation}
              modifiers={indicator ? [adjustTranslate] : undefined}
            >
              {activeId && activeItem ? (
                <SortableTreeItem
                  clone
                  id={activeId}
                  depth={activeItem?.depth}
                  childCount={getChildCount(treeItems, activeId) + 1}
                  value={activeId}
                  indentationWidth={indentationWidth}
                  name=""
                  type=""
                />
              ) : null}
            </DragOverlay>,
            document.body,
          )}
        </SortableContext>
      </DndContext>
    );
  },
);

ChatsTree.displayName = 'ChatsTree';

```

# src/features/Chat/index.ts

```ts
export { ChatSelected } from './ChatSelected';
export { ChatNew } from './ChatNew';

```

# src/features/Chat/ChatSelected.tsx

```tsx
import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { submitPrompt } from '@/api/prompt.api';
import { NavigationContext } from '@/app/App';
import { ROUTES } from '@/app/router/constants/routes';
import {
  selectApiKey,
  selectApiMaxTokens,
  selectApiModel,
  selectApiTemperature,
  selectApiTopK,
  selectApiTopP,
} from '@/redux/apiSettings/apiSettings.selectors';
import { selectChatById } from '@/redux/conversations/conversations.selectors';
import {
  addPromptToChat,
  renameChatTreeItem,
  updateChatContents,
  updateContentById,
} from '@/redux/conversations/conversationsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { TreeItem, ChatContent } from '@/typings/common';
import { ButtonComponent } from '@/ui/ButtonComponent';
import { IconComponent } from '@/ui/IconComponent';
import { TextFieldComponent } from '@/ui/TextFieldComponent';

import { EditablePrompt } from './components/EditablePrompt';

import styles from './Chat.module.scss';

const findLastAssistantContent = (chat?: TreeItem): ChatContent | null => {
  if (!chat || !chat?.content) {
    return null;
  }

  for (let i = chat.content.length - 1; i >= 0; i--) {
    const content = chat.content[i];
    if (content.type === 'Assistant' && content.text.replace(/\n/g, '')) {
      return content;
    }
  }
  return null;
};

export const ChatSelected: React.FC = () => {
  const { id: chatId = '' } = useParams();

  const chat = useAppSelector(selectChatById(chatId));

  const navigate = useNavigate();

  const abortControllerRef = useRef<AbortController | null>(null);

  const { didNewChatNavigate, setDidNewChatNavigate } =
    useContext(NavigationContext);

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [conversationName, setConversationName] = useState(chat?.name ?? '');

  const [updatingAiPromptId, setUpdatingAiPromptId] = useState('');

  const [isStreaming, setIsStreaming] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = useSelector(selectApiKey);
  const model = useSelector(selectApiModel);
  const temperature = useSelector(selectApiTemperature);
  const maxTokens = useSelector(selectApiMaxTokens);
  const topK = useSelector(selectApiTopK);
  const topP = useSelector(selectApiTopP);

  const dispatch = useAppDispatch();

  const lastAssistantPrompt = useMemo(
    () => findLastAssistantContent(chat),
    [chat],
  );

  useEffect(() => {
    if (!chat) {
      return navigate(ROUTES.Home);
    }
  }, [chat, navigate]);

  useEffect(() => {
    if (chat?.name) {
      setConversationName(chat?.name);
    }
  }, [chatId, chat?.name]);

  const addPromptRow = useCallback(
    (promptType = '') =>
      () => {
        const newPromptType =
          promptType ||
          (chat?.content?.[chat.content.length - 1]?.type === 'Human'
            ? 'Assistant'
            : 'Human');

        const newPrompt: ChatContent = {
          type: newPromptType as 'Human' | 'Assistant',
          text: '',
          id: uuidv4(),
        };

        dispatch(
          addPromptToChat({ chatId: chat?.id || '', content: newPrompt }),
        );
      },
    [chat?.content, chat?.id, dispatch],
  );

  const deletePromptRow = useCallback(
    (id: string) => () => {
      if (chat?.content?.length === 1) {
        return;
      }

      if (chat?.content) {
        const index = chat?.content?.findIndex(prompt => prompt.id === id);

        if (index !== -1) {
          const newPrompts = [...chat.content];
          newPrompts.splice(index, 1);

          dispatch(
            updateChatContents({
              chatId: chat?.id || '',
              contents: newPrompts,
            }),
          );
        }
      }
    },
    [chat?.content, chat?.id, dispatch],
  );

  const generateResponse = useCallback(
    async (isRegenerate?: boolean) => {
      setIsLoading(true);
      const newAbortController = new AbortController();
      const signal = newAbortController.signal;
      abortControllerRef.current = newAbortController;

      const chatContent =
        isRegenerate &&
        chat?.content?.length &&
        lastAssistantPrompt?.id !== undefined
          ? chat.content.slice(
              0,
              chat.content.findIndex(
                content => content.id === lastAssistantPrompt.id,
              ),
            )
          : chat?.content;

      let promptTexts = chatContent?.length
        ? chatContent
            .map(prompt => {
              const type = prompt?.type;
              const promptText = prompt?.text.trim();

              return `\n\n${type}: ${promptText}`;
            })
            .join('')
        : '\n\nHuman: \n\nAssistant:';

      if (
        chatContent?.length &&
        (chatContent[chatContent?.length - 1]?.type === 'Human' ||
          chatContent[chatContent?.length - 1]?.text.trim().length)
      ) {
        promptTexts += '\n\nAssistant:';
      }

      if (chatContent?.length && chatContent[0]?.type === 'Assistant') {
        promptTexts = '\n\nHuman: ' + promptTexts;
      }

      const requestBody = {
        model,
        temperature,
        topK,
        topP,
        apiKey,
        maxTokens,
        prompt: promptTexts.replace(/\s+$/, ''),
        signal,
      };

      try {
        const response = await submitPrompt(requestBody);
        if (response?.ok) {
          setIsStreaming(true);
          const reader = response?.body?.getReader();
          const decoder = new TextDecoder('utf-8');

          let newPrompt: ChatContent | undefined;

          if (!isRegenerate) {
            newPrompt = {
              type: 'Assistant',
              text: '',
              id: uuidv4(),
            };
            dispatch(
              addPromptToChat({ chatId: chat?.id || '', content: newPrompt }),
            );
          }

          while (true) {
            const res = await reader?.read();

            if (res?.done) {
              setIsStreaming(false);
              break;
            }
            let lastLine = null;
            const lastLineData = decoder.decode(res?.value);

            const lastLineArray = lastLineData.split('data: ');

            for (let i = lastLineArray.length - 1; i >= 0; i--) {
              if (
                lastLineArray[i].includes('{"completion":') &&
                (lastLineArray[i].includes('"exception":null}') ||
                  lastLineArray[i].includes('"exception": null}'))
              ) {
                lastLine = lastLineArray[i];
                break;
              }
            }

            if (lastLine) {
              const eventData = JSON.parse(lastLine);

              if (eventData.completion) {
                if (isRegenerate) {
                  setUpdatingAiPromptId(lastAssistantPrompt?.id || '');
                } else {
                  setUpdatingAiPromptId(newPrompt?.id || '');
                }
                dispatch(
                  updateContentById({
                    chatId: chat?.id ?? '',
                    contentId:
                      (isRegenerate
                        ? lastAssistantPrompt?.id
                        : newPrompt?.id) || '',
                    text: eventData.completion,
                  }),
                );
              } else if (eventData.error) {
                setIsLoading(false);
                setIsStreaming(false);
                alert('Error: ' + eventData.error.message);
              }
            }
          }
          if (!isRegenerate) {
            addPromptRow('Human')();
          }
        } else {
          console.error('Error: ' + response?.statusText);
          setIsStreaming(false);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('error', error);
      } finally {
        setIsLoading(false);
        setIsStreaming(false);
      }
    },
    [
      addPromptRow,
      apiKey,
      chat?.id,
      dispatch,
      maxTokens,
      model,
      temperature,
      topK,
      topP,
      chat?.content,
      lastAssistantPrompt?.id,
    ],
  );

  const handleRegenerate = useCallback(async () => {
    if (lastAssistantPrompt) {
      await generateResponse(true);
    }
  }, [generateResponse, lastAssistantPrompt]);

  const handlePromptSubmit = useCallback(async () => {
    await generateResponse();
    setHasSubmitted(true);
  }, [generateResponse]);

  useEffect(() => {
    if (didNewChatNavigate && !hasSubmitted) {
      handlePromptSubmit();
      setDidNewChatNavigate(false);
    }
  }, [
    didNewChatNavigate,
    handlePromptSubmit,
    setDidNewChatNavigate,
    hasSubmitted,
  ]);

  const handlePromptBlur = (id: string, text: string) => {
    dispatch(
      updateContentById({
        chatId: chat?.id || '',
        contentId: id,
        text,
      }),
    );
  };

  const stopStream = useCallback(() => {
    setIsStreaming(false);
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  }, []);

  useEffect(
    () => () => {
      stopStream();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => stopStream, [chatId]);

  const onSuccessGhangeChatName = useCallback(() => {
    if (conversationName) {
      setConversationName(conversationName.trim());

      dispatch(
        renameChatTreeItem({
          chatTreeId: chat?.id || '',
          chatTreeName: conversationName.trim(),
        }),
      );
    }
  }, [dispatch, conversationName, chat?.id]);

  const onCancelGhangeChatName = useCallback(() => {
    setConversationName(chat?.name || '');
  }, [setConversationName, chat?.name]);

  const onGhangeConversationName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setConversationName(event.target.value);
    },
    [setConversationName],
  );

  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    const containerElement = containerRef.current;

    const handleScroll = () => {
      if (!containerElement) return;

      const { scrollTop, scrollHeight, clientHeight } = containerElement;
      const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      setIsScrolledToBottom(isAtBottom);
    };

    if (containerElement) {
      containerElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const scrollToBottom = () => {
        container.scrollTop = container.scrollHeight;
      };

      observerRef.current = new MutationObserver(() => {
        if (isScrolledToBottom) {
          scrollToBottom();
        }
      });

      observerRef.current.observe(container, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }

    return () => observerRef.current?.disconnect();
  }, [isScrolledToBottom]);

  const deleteDisabled = useMemo(
    () => chat?.content?.length === 1,
    [chat?.content],
  );

  return (
    <div className={styles.chatGeneralContainer} ref={containerRef}>
      <div className={styles.conversationName}>
        <TextFieldComponent
          value={conversationName}
          onChange={onGhangeConversationName}
          fullWidth
          autoComplete="off"
          InputProps={{
            endAdornment: (
              <div
                className={classNames(styles.confirmationRename, {
                  [styles.edited]: chat?.name !== conversationName,
                })}
              >
                <InputAdornment
                  position="end"
                  onClick={onSuccessGhangeChatName}
                >
                  <IconComponent type="confirm" />
                </InputAdornment>
                <InputAdornment position="end" onClick={onCancelGhangeChatName}>
                  <IconComponent type="cancel" />
                </InputAdornment>
              </div>
            ),
          }}
        />
      </div>
      {chat?.content?.map(({ text, type, id }) => (
        <div className={styles.chatPromptContainer} key={id}>
          <EditablePrompt
            id={id}
            text={text}
            deletePromptRow={deletePromptRow}
            type={type}
            handlePromptBlur={handlePromptBlur}
            readOnly={updatingAiPromptId === id && isStreaming}
            deleteDisabled={deleteDisabled}
          />
        </div>
      ))}
      <div className={styles.chatButtonsContainer}>
        <div>
          <div className={styles.buttonsColumn}>
            <button
              onClick={addPromptRow()}
              className={styles.buttonAddChat}
              disabled={isStreaming || isLoading}
            >
              <IconComponent type="plus" className={styles.iconPlus} />
            </button>
            {!isStreaming ? (
              <ButtonComponent
                type="submit"
                variant="contained"
                onClick={handlePromptSubmit}
                disabled={isLoading}
              >
                <span>Submit</span>
                <IconComponent type="submit" />
              </ButtonComponent>
            ) : (
              <ButtonComponent variant="outlined" onClick={stopStream}>
                <span>Stop</span>
                <IconComponent className={styles.iconRegenerate} type="stop" />
              </ButtonComponent>
            )}
          </div>
          <div className={styles.buttonsColumn}>
            <ButtonComponent
              type="submit"
              variant="outlined"
              onClick={handleRegenerate}
              disabled={isStreaming || !lastAssistantPrompt || isLoading}
            >
              <span>Regenerate</span>
              <IconComponent
                className={styles.iconRegenerate}
                type="regenerate"
              />
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

```

# src/features/Chat/ChatNew.tsx

```tsx
import React, { useContext, useMemo, useState } from 'react';

import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

import { NavigationContext } from '@/app/App';
import { ROUTES } from '@/app/router/constants/routes';
import { saveChat } from '@/redux/conversations/conversationsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectThemeMode } from '@/redux/theme/theme.selectors';
import { PromptType } from '@/typings/common';
import { ButtonComponent } from '@/ui/ButtonComponent';
import { IconComponent } from '@/ui/IconComponent';

import { EditablePrompt } from './components/EditablePrompt';

import styles from './Chat.module.scss';

interface ChatPrompt {
  type: PromptType;
  text: string;
}

if (typeof window !== 'undefined') {
  injectStyle();
}

type ExtendedChatPrompt = ChatPrompt & { id: string };

export const ChatNew: React.FC = () => {
  const [prompts, setPrompts] = useState<ExtendedChatPrompt[]>([
    { type: 'Human', text: '', id: uuidv4() },
  ]);
  useState<AbortController | null>(null);
  const { setDidNewChatNavigate } = useContext(NavigationContext);
  const theme = useAppSelector(selectThemeMode);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const addPromptRow =
    (promptType = '') =>
    () => {
      const newPromptType =
        promptType ||
        (prompts[prompts?.length - 1]?.type === 'Human'
          ? 'Assistant'
          : 'Human');

      const newPrompt: ExtendedChatPrompt = {
        type: newPromptType as 'Human' | 'Assistant',
        text: '',
        id: uuidv4(),
      };

      setPrompts(prevPrompt => [...prevPrompt, newPrompt]);
    };

  const deletePromptRow = (id: string) => () => {
    if (prompts.length === 1) {
      return;
    }
    const index = prompts.findIndex(prompt => prompt.id === id);
    if (index !== -1) {
      const newPrompts = [...prompts];
      newPrompts.splice(index, 1);
      setPrompts(newPrompts);
    }
  };

  const deleteDisabled = useMemo(() => prompts.length === 1, [prompts]);

  const updatePromptByKey = (id: string, text: string) => {
    setPrompts(prevPrompts => {
      const newPrompts = prevPrompts.map(obj => {
        if (obj.id === id) {
          return { ...obj, text };
        }
        return obj;
      });
      return newPrompts;
    });
  };

  const handlePromptSubmit = async () => {
    if (!prompts.some(prompt => prompt.text.replace(/\n/g, ''))) {
      toast(
        <div className={styles.toasterDiv}>
          <span className={styles.toasterSpan}>Add content, please</span>
          <IconComponent type="heart" className={styles.iconHeart} />
        </div>,
        {
          closeButton: (
            <>
              <IconComponent type="close" className={styles.iconClose} />
            </>
          ),
        },
      );

      return;
    }

    const newChat = {
      id: uuidv4(),
      name: 'New Chat',
      content: prompts,
    };

    dispatch(saveChat(newChat));
    setDidNewChatNavigate(true);
    navigate(`${ROUTES.Chat}/${newChat.id}`);
  };

  const handlePromptBlur = (id: string, text: string) => {
    updatePromptByKey(id, text);
  };

  return (
    <div className={styles.chatMainContainer}>
      <div
        className={classNames(
          styles.chatGeneralContainer,
          styles.chatGeneralContainerNew,
        )}
      >
        {prompts.map(({ text, type, id }) => (
          <div className={styles.chatPromptContainer} key={id}>
            <EditablePrompt
              id={id}
              text={text}
              deletePromptRow={deletePromptRow}
              type={type}
              handlePromptBlur={handlePromptBlur}
              deleteDisabled={deleteDisabled}
            />
          </div>
        ))}
        <div className={styles.chatBgContainer}>
          <div className={styles.titleAiContainer}>
            {theme === 'dark' ? (
              <IconComponent
                type="backgroundChatDark"
                className={styles.bgImg}
              />
            ) : (
              <IconComponent
                type="backgroundChatLight"
                className={styles.bgImg}
              />
            )}
          </div>
          <div className={styles.titleAiContainer}>
            {theme === 'dark' ? (
              <IconComponent type="logoDark" className={styles.iconTitle} />
            ) : (
              <IconComponent type="logoLight" className={styles.iconTitle} />
            )}
          </div>
        </div>
        <div className={styles.chatButtonsContainer}>
          <div>
            <div className={styles.buttonsColumn}>
              <button onClick={addPromptRow()} className={styles.buttonAddChat}>
                <IconComponent type="plus" className={styles.iconPlus} />
              </button>
              <ButtonComponent
                type="submit"
                variant="contained"
                onClick={handlePromptSubmit}
              >
                <span>Submit</span>
                <IconComponent type="submit" />
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        hideProgressBar
        toastStyle={
          theme === 'dark'
            ? { background: '#363C4A' }
            : { background: '#000000' }
        }
        style={{
          width: '100%',
          position: 'absolute',
        }}
        position="bottom-center"
      />
    </div>
  );
};

```

# src/features/Chat/Chat.module.scss

```scss
.chatMainContainer {
  width: 100%;
  position: relative;
  height: 100%;
  overflow-y: auto;
}

.chatGeneralContainer {
  display: flex;
  flex-direction: column;
  padding: 0 30px 25px;
  margin: 0 auto;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 1500px;
  position: relative;

  @media (width >= 1900px) {
    padding: 0 100px 25px;
  }
}

.chatGeneralContainerNew {
  padding: 30px 30px 25px;
}

.conversationName {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
  padding: 20px 0 10px 60px;
  background-color: var(--bg-color-main);
  margin: 0 0 18px;

  input {
    font-family: var(--font-family-bold);
    font-weight: 700;
  }
}

.chatPromptContainer {
  display: flex;
  margin-bottom: 15px;
  justify-content: center;
  align-self: center;
  flex-direction: row;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
}

.chatBgContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  row-gap: 50px;
  width: 100%;
  height: 100%;
  margin-top: -60px;
}

.titleAiContainer {
  display: flex;
  justify-content: center;
}

.iconTitle {
  margin-right: 14px;
}

.bgImg {
  justify-content: center;
  align-items: center;
}

.chatButtonsContainer {
  width: 100%;
  margin-top: auto;

  & > div {
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}

.buttonsColumn {
  align-items: center;
  display: flex;
  column-gap: 15px;
}

.buttonAddChat {
  flex-shrink: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--primary-color);
  transition: 0.3s;
  z-index: 1;

  svg {
    transition: 0.3s;
    stroke: #ffffff;
  }

  &:not(:disabled):hover {
    background-color: var(--primary-hover);
  }

  &:disabled {
    background-color: var(--bg-btn-disabled);
    cursor: default;

    svg {
      stroke: var(--text-disabled);
    }
  }
}

.iconRegenerate {
  margin-left: 15px;
}

.iconAiMagic {
  margin-top: -32px;
  margin-left: 15px;
}

.confirmationRename {
  opacity: 0;
  flex-shrink: 0;
  display: flex;
  column-gap: 5px;
  align-items: center;
  margin-left: auto;
  transition: 0.3s;

  svg {
    stroke: var(--bg-default);
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      stroke: var(--text-primary);
    }
  }

  &.edited {
    opacity: 1;
  }
}

.toastContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.toasterDiv {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.toasterSpan {
  font-family: var(--font-family-main);
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
}

.iconHeart {
  align-self: center;
  margin-left: 8px;
}

.iconClose {
  align-self: center;
  margin-right: 8px;
}

```

# src/features/ApiSettings/index.ts

```ts
export * from './ApiSettings';

```

# src/features/ApiSettings/apiSettings.constants.ts

```ts
import { models } from '@/models';

export const modelSelectItems = models.map(model => ({
  value: model.name,
}));

```

# src/features/ApiSettings/ApiSettings.tsx

```tsx
import { memo, useCallback, useMemo } from 'react';

import { SelectChangeEvent, Stack } from '@mui/material';
import classNames from 'classnames';

import {
  selectApiMaxTokens,
  selectApiModel,
  selectApiTemperature,
  selectApiTopK,
  selectApiTopP,
} from '@/redux/apiSettings/apiSettings.selectors';
import {
  setMaxTokens,
  setModel,
  setTemperature,
  setTopK,
  setTopP,
  resetApiSettings,
} from '@/redux/apiSettings/apiSettings.slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ButtonComponent } from '@/ui/ButtonComponent';
import { SelectComponent } from '@/ui/SelectComponent';
import { SliderComponent } from '@/ui/SliderComponent';

import { modelSelectItems } from './apiSettings.constants';

import styles from './ApiSettings.module.scss';

interface ApiSettingsProps {
  className?: string;
}

export const ApiSettings = memo(({ className }: ApiSettingsProps) => {
  const dispatch = useAppDispatch();
  const temperature = useAppSelector(selectApiTemperature);
  const model = useAppSelector(selectApiModel);
  const maxTokens = useAppSelector(selectApiMaxTokens);
  const topK = useAppSelector(selectApiTopK);
  const topP = useAppSelector(selectApiTopP);

  const onTemperatureChange = useCallback(
    (value: number) => {
      dispatch(setTemperature(value));
    },
    [dispatch],
  );

  const onMaxTokensChange = useCallback(
    (value: number) => {
      dispatch(setMaxTokens(value));
    },
    [dispatch],
  );

  const onTopPChange = useCallback(
    (value: number) => {
      dispatch(setTopP(value));
    },
    [dispatch],
  );

  const onTopKChange = useCallback(
    (value: number) => {
      dispatch(setTopK(value));
    },
    [dispatch],
  );

  const onModelChange = (event: SelectChangeEvent<unknown>) => {
    const newModel = event.target.value as string;

    dispatch(setModel(newModel));
  };

  const isModelWithMaxToken = useMemo(
    () => model.includes('100k') || model === 'claude-2',
    [model],
  );

  const resetSettings = useCallback(() => {
    dispatch(resetApiSettings());
  }, [dispatch]);

  return (
    <Stack
      gap="10px"
      useFlexGap
      className={classNames(className, styles.wrapper)}
    >
      <h3 className={styles.title}>Settings</h3>
      <SelectComponent
        label="Model"
        onChange={onModelChange}
        selectItems={modelSelectItems}
        value={model}
      />
      <SliderComponent
        label="Max tokens"
        value={maxTokens}
        handleChange={onMaxTokensChange}
        max={isModelWithMaxToken ? 100000 : 8000}
        min={1000}
        step={1}
      />
      <SliderComponent
        label="Temperature"
        value={temperature}
        handleChange={onTemperatureChange}
        max={1}
        min={0}
        step={0.1}
      />
      <SliderComponent
        label="Top K"
        value={topK}
        handleChange={onTopKChange}
        max={10}
        min={0}
        step={1}
      />
      <SliderComponent
        label="Top P"
        value={topP}
        handleChange={onTopPChange}
        max={1}
        min={0}
        step={0.1}
      />
      <ButtonComponent
        type="submit"
        variant="outlined"
        onClick={resetSettings}
        className={styles.resetBtn}
      >
        <span>Reset Settings</span>
      </ButtonComponent>
    </Stack>
  );
});

ApiSettings.displayName = 'ApiSettings';

```

# src/features/ApiSettings/ApiSettings.module.scss

```scss
.wrapper {
  padding: 35px 20px;
  border-left: 1px solid var(--border-primary);

  .title {
    font-size: 16px;
    margin-bottom: 12px;
  }
}

.resetBtn {
  margin-top: 15px;
}

```

# src/components/ThemeSwitcher/index.ts

```ts
export * from './ThemeSwitcher';

```

# src/components/ThemeSwitcher/ThemeSwitcher.tsx

```tsx
import { memo } from 'react';

import { PaletteMode } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import classNames from 'classnames';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { selectThemeMode } from '@/redux/theme/theme.selectors';
import { setTheme } from '@/redux/theme/themeSlice';
import { IconComponent } from '@/ui/IconComponent';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = memo(() => {
  const mode = useAppSelector(selectThemeMode);
  const dispatch = useAppDispatch();

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newMode: PaletteMode,
  ) => {
    if (newMode !== null) {
      return dispatch(setTheme(newMode));
    }

    dispatch(setTheme(mode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ToggleButtonGroup
      exclusive
      onChange={handleChange}
      value={mode}
      className={classNames([styles.wrapper, styles.buttonGroup, styles[mode]])}
      fullWidth
    >
      <ToggleButton
        value="dark"
        aria-label="dark"
        fullWidth
        className={classNames([styles.darkBtn, styles.button])}
      >
        <IconComponent type="themeDark" />
      </ToggleButton>
      <ToggleButton
        value="light"
        aria-label="light"
        fullWidth
        className={classNames([styles.lightBtn, styles.button])}
      >
        <IconComponent type="themeLight" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';

```

# src/components/ThemeSwitcher/ThemeSwitcher.module.scss

```scss
.wrapper.buttonGroup {
  border-radius: 10px;
  overflow: hidden;

  .button {
    transition: 0.3s;
    border-color: transparent;

    svg {
      fill: #828592;
      stroke: #828592;
    }
  }

  &.light {
    background: var(--theme-switcher-bg-primary);

    .lightBtn {
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      background-color: var(--theme-switcher-bg-secondary);

      svg {
        fill: #ffffff;
        stroke: #ffffff;
      }
    }
  }

  &.dark {
    background: var(--theme-switcher-bg-secondary);

    .darkBtn {
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
      background-color: var(--theme-switcher-bg-primary);

      svg {
        fill: #ffffff;
        stroke: #ffffff;
      }
    }
  }

  &.light .darkBtn:hover {
    background: transparent;
  }

  &.dark .lightBtn:hover {
    background: transparent;
  }

  &.dark:hover {
    background: var(--theme-switcher-bg-hover-light);

    .lightBtn svg {
      fill: #ffffff;
      stroke: #ffffff;
    }
  }

  &.light:hover {
    background: var(--theme-switcher-bg-hover-dark);

    .darkBtn svg {
      fill: #ffffff;
      stroke: #ffffff;
    }
  }
}

```

# src/components/Logout/index.ts

```ts
export * from './Logout';

```

# src/components/Logout/Logout.tsx

```tsx
import { memo } from 'react';

import { cleanApiKey } from '@/redux/apiSettings/apiSettings.slice';
import { useAppDispatch } from '@/redux/hooks';
import { IconComponent } from '@/ui/IconComponent';

import styles from './Logout.module.scss';

export const Logout = memo(() => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(cleanApiKey());
  };

  return (
    <button className={styles.btn} onClick={onLogout}>
      <span>Logout</span>
      <IconComponent type="logout" />
    </button>
  );
});

Logout.displayName = 'Logout';

```

# src/components/Logout/Logout.module.scss

```scss
.btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 11px;
  background-color: var(--bg-primary);
  border: 1px solid transparent;
  border-radius: 8px;
  transition: border 0.3s;
  cursor: pointer;

  &:hover {
    border-color: var(--primary-hover);
  }

  span {
    color: var(--text-primary);
  }
}

```

# src/components/Logo/index.ts

```ts
export * from './Logo';

```

# src/components/Logo/Logo.tsx

```tsx
import { useAppSelector } from '@/redux/hooks';
import { selectThemeMode } from '@/redux/theme/theme.selectors';
import { IconComponent } from '@/ui/IconComponent';

export const Logo = () => {
  const theme = useAppSelector(selectThemeMode);

  return (
    <div>
      {theme === 'dark' ? (
        <IconComponent type="logoDark" />
      ) : (
        <IconComponent type="logoLight" />
      )}
    </div>
  );
};

```

# src/assets/styles/index.scss

```scss
@import "normalize.css/normalize.css";
@import "fonts";
@import "themes/light";
@import "themes/dark";
@import "variables/global";

* {
  box-sizing: border-box;
  margin: 0;
}

html,
body {
  font-size: 16px;
  font-family: var(--font-family-main);
  font-weight: 500;
}

.app {
  background-color: var(--bg-color-main);
  color: var(--text-primary);
  width: 100%;
  overflow-x: auto;
}

// reset autofill background color for inputs in chrome
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
}

input[type="number"] {
  appearance: textfield;

  // remove arrows in number picker input
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
}

```

# src/assets/styles/fonts.scss

```scss
@font-face {
  font-family: InterMedium;
  src: url("../fonts/Inter-Medium.ttf");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: InterBold;
  src: url("../fonts/Inter-Bold.ttf");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: InterExtra;
  src: url("../fonts/Inter-ExtraBold.ttf");
  font-weight: 900;
  font-style: normal;
}

```

# src/assets/fonts/Inter-Medium.ttf

This is a binary file of the type: Binary

# src/assets/fonts/Inter-ExtraBold.ttf

This is a binary file of the type: Binary

# src/assets/fonts/Inter-Bold.ttf

This is a binary file of the type: Binary

# src/app/router/RouterComponent.tsx

```tsx
import { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '@/app/router/constants/routes';
import { ChatNew, ChatSelected } from '@/features/Chat';
import { AuthPage } from '@/pages/AuthPage';
import { ChatLayoutPage } from '@/pages/ChatLayoutPage';

import { PrivateRoute } from './PrivateRoute';

export const RouterComponent = () => (
  <Suspense fallback="Loading ...">
    <Routes>
      <Route path={ROUTES.Auth} element={<AuthPage />} />
      <Route
        path={ROUTES.Home}
        element={
          <PrivateRoute>
            <ChatLayoutPage>
              <ChatNew />
            </ChatLayoutPage>
          </PrivateRoute>
        }
      />
      <Route
        path={`${ROUTES.Chat}/:id`}
        element={
          <PrivateRoute>
            <ChatLayoutPage>
              <ChatSelected />
            </ChatLayoutPage>
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={
          <PrivateRoute>
            <ChatLayoutPage>
              <ChatNew />
            </ChatLayoutPage>
          </PrivateRoute>
        }
      />
    </Routes>
  </Suspense>
);

```

# src/app/router/PrivateRoute.tsx

```tsx
import { PropsWithChildren } from 'react';

import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from '@/app/router/constants/routes';
import { selectApiKey } from '@/redux/apiSettings/apiSettings.selectors';

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const apiKey = useSelector(selectApiKey);

  if (!apiKey) {
    return (
      <Navigate to={{ pathname: ROUTES.Auth }} state={{ from: location }} />
    );
  }

  if (children) {
    return <>{children}</>;
  }

  return <Outlet />;
};

```

# src/assets/icons/warning.svg

This is a file of the type: SVG Image

# src/assets/icons/theme-light.svg

This is a file of the type: SVG Image

# src/assets/icons/theme-dark.svg

This is a file of the type: SVG Image

# src/assets/icons/submit.svg

This is a file of the type: SVG Image

# src/assets/icons/stop.svg

This is a file of the type: SVG Image

# src/assets/icons/search.svg

This is a file of the type: SVG Image

# src/assets/icons/regenerate.svg

This is a file of the type: SVG Image

# src/assets/icons/plus.svg

This is a file of the type: SVG Image

# src/assets/icons/opened-folder.svg

This is a file of the type: SVG Image

# src/assets/icons/new-folder.svg

This is a file of the type: SVG Image

# src/assets/icons/logout.svg

This is a file of the type: SVG Image

# src/assets/icons/logo-light.svg

This is a file of the type: SVG Image

# src/assets/icons/logo-dark.svg

This is a file of the type: SVG Image

# src/assets/icons/human.svg

This is a file of the type: SVG Image

# src/assets/icons/heart.svg

This is a file of the type: SVG Image

# src/assets/icons/edit.svg

This is a file of the type: SVG Image

# src/assets/icons/delete.svg

This is a file of the type: SVG Image

# src/assets/icons/copy.svg

This is a file of the type: SVG Image

# src/assets/icons/conversation.svg

This is a file of the type: SVG Image

# src/assets/icons/confirm.svg

This is a file of the type: SVG Image

# src/assets/icons/closed-folder.svg

This is a file of the type: SVG Image

# src/assets/icons/close.svg

This is a file of the type: SVG Image

# src/assets/icons/cancel.svg

This is a file of the type: SVG Image

# src/assets/icons/backgroundChat-light.svg

This is a file of the type: SVG Image

# src/assets/icons/backgroundChat-dark.svg

This is a file of the type: SVG Image

# src/assets/icons/arrow-down.svg

This is a file of the type: SVG Image

# src/assets/icons/aiResponse.svg

This is a file of the type: SVG Image

# src/assets/icons/ai.svg

This is a file of the type: SVG Image

# src/features/Conversations/components/index.ts

```ts
export { TreeItemMemo, SortableTreeItem } from './TreeItem';

export { SearchItem } from './SearchItem';

```

# src/components/PortalAwareItem/index.ts

```ts
export * from './PortalAwareItem';

```

# src/components/PortalAwareItem/PortalAwareItem.tsx

```tsx
import { createPortal } from 'react-dom';

const portal = document.createElement('div');
document.body.appendChild(portal);

export function PortalAwareItem({ provided, snapshot, children }: any) {
  const usePortal = snapshot.isDragging;

  const child = (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {children}
    </div>
  );

  if (!usePortal) {
    return child;
  }

  // if dragging - put the item in a portal
  return createPortal(child, portal);
}

```

# src/assets/styles/variables/global.scss

```scss
:root {
  // fonts
  --font-family-main: "InterMedium", serif;
  --font-family-bold: "InterBold", serif;
  --font-family-extra: "InterExtra", serif;

  // colors
  --primary-color: #6129ff;
  --primary-hover: #480fea;
  --disabled: #aeaeae;

  // components backgrounds
  --theme-switcher-bg-primary: #252836;
  --theme-switcher-bg-secondary: #363c4a;
  --theme-switcher-bg-hover-dark: #1a1c25;
  --theme-switcher-bg-hover-light: #515a6e;
  --bg-default: #828592;
}

```

# src/assets/styles/themes/light.scss

```scss
.appLightTheme {
  // colors
  --bg-color-main: #ffffff;
  --text-primary: #000000;
  --text-conversation: #000000;
  --text-secondary: #aeaeae;
  --text-disabled: #ffffff;
  --btn-outlined-hover: #000000;
  --btn-disabled-border: #aeaeae;
  --btn-disabled-stroke: #ffffff;
  --btn-disabled-text: #aeaeae;

  // components backgrounds
  --bg-primary: #f2f2f2;
  --bg-secondary: #000000;
  --bg-btn-disabled: #aeaeae;
  --bg-slider-rail: #aeaeae;
  --inline-code: #000000;

  // border
  --border-primary: #eeeeee;
}

```

# src/assets/styles/themes/dark.scss

```scss
.appDarkTheme {
  // colors
  --bg-color-main: #191824;
  --text-primary: #ffffff;
  --text-secondary: #828592;
  --text-conversation: #828592;
  --text-disabled: #828592;
  --btn-outlined-hover: #ffffff;
  --btn-disabled-border: #aeaeae;
  --btn-disabled-text: #aeaeae;
  --btn-disabled-stroke: #828592;
  --inline-code: #cccccc;

  // components backgrounds
  --bg-primary: #252836;
  --bg-secondary: #363c4a;
  --bg-btn-disabled: #363c4a;
  --bg-slider-rail: #949495;

  // border
  --border-primary: #2e3036;
}
```

# src/app/router/constants/routes.ts

```ts
export const ROUTES = {
  Home: '/',
  Auth: '/auth',
  Chat: '/chat',
} as const;

```

# src/features/Chat/components/EditablePrompt/typings.ts

```ts
import { Element, Text } from 'slate';

import { PromptType } from '@/typings/common';

export type CustomRange = {
  prismToken: string;
  anchor: { path: number[]; offset: number };
  focus: { path: number[]; offset: number };
};

export type PrismToken = string | { type: string; content: PrismToken[] };

export interface CustomText extends Text {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  strikethrough?: boolean;
  deleted?: boolean;
  inserted?: boolean;
  prismToken?: string;
  inlineCode?: boolean;
}

export interface CustomElement extends Element {
  type?: string;
  value?: string;
  url?: string;
  lang?: string;
  ordered?: boolean;
  start?: number;
}

export interface IEditablePrompt {
  type: PromptType;
  text: string;
  deletePromptRow: (id: string) => () => void;
  id: string;
  handlePromptBlur: (id: string, text: string) => void;
  deleteDisabled: boolean;
  readOnly?: boolean;
}

```

# src/features/Chat/components/EditablePrompt/index.ts

```ts
export * from './EditablePrompt';

```

# src/features/Chat/components/EditablePrompt/Prompts.module.scss

```scss
.promptAiField {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 81px;
  width: 100%;
  height: 100%;
  background: var(--bg-primary);
  color: var(--text-conversation);
  border-radius: 8px;
  padding: 15px;
  overflow-x: auto;
  cursor: text;
  font-family: var(--font-family-main);
  font-weight: 500;
  line-height: 22px;

  .markdown {
    .codeWrapper {
    }
  }
}

.promptContainerHeader {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  padding: 15px;
  z-index: 2;
}

.promptText {
  font-family: var(--font-family-main);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: var(--text-conversation);
  margin: 14px 18px;
  outline: none;
  height: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.placeholderText {
  font-family: var(--font-family-bold);
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: var(--text-primary);
  width: 100%;
  display: block;
}

.fieldContainer {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.promptField {
  min-height: 81px;
  height: 100%;
  background: var(--bg-primary);
  color: var(--text-conversation);
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 50px 15px 15px;
  overflow-x: auto;
  cursor: text;
  font-family: var(--font-family-main);
  font-weight: 500;
  line-height: 22px;
  width: 100%;
  z-index: 1;
  white-space: pre-wrap;
  outline: none;
  overflow-wrap: anywhere !important;

  &:focus {
    border: 1px solid var(--primary-color);
  }

  .codeWrapper {
    * {
      margin: 0;
      white-space: pre;
    }

    pre {
      color: #ffffff;
      background: var(--bg-secondary);
      border-radius: 0 0 8px 8px;
      padding: 15px;
      overflow-x: auto;

      code {
        background: var(--bg-secondary);
        border-radius: 8px;

        span {
          background: transparent;
        }
      }
    }

    .codeHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #515a6e !important;
      border-radius: 8px 8px 0 0;
      padding: 10px 15px;
      color: var(--text-secondary);

      & > span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      & > svg {
        flex-shrink: 0;
        margin-left: 20px;
      }
    }

    .copyIcon {
      cursor: default;
      stroke: var(--text-secondary);
      margin: 0;
      transition: 0.3s stroke;
    }

    .copyActive {
      cursor: pointer;

      &:hover {
        stroke: var(--text-primary);
      }
    }
  }

  * {
    white-space: pre-wrap;
    margin-bottom: 10px;
  }

  & > :last-child {
    margin-bottom: 0;
  }
}

.promptContainer {
  position: relative;
  display: flex;
  column-gap: 15px;
  width: 100%;

  & > :first-child {
    flex-shrink: 0;
  }
}

.iconDelete {
  cursor: pointer;
  transition: 0.3s;
  stroke: var(--text-secondary);
  z-index: 1;

  &.iconDeleteDisabled {
    cursor: default;

    &:hover {
      stroke: var(--text-secondary);
    }
  }

  &:hover {
    stroke: var(--text-primary);
  }
}

.inlineCode {
  color: var(--inline-code);
  font-family: var(--font-family-extra);
  font-weight: 900;
}

```

# src/features/Chat/components/EditablePrompt/EditablePrompt.tsx

```tsx
import { memo, useCallback, useEffect, useMemo, useRef } from 'react';

import classNames from 'classnames';
import 'prismjs/themes/prism-funky.min.css';
import markdown from 'remark-parse';
import { remarkToSlate } from 'remark-slate-transformer';
import {
  Descendant,
  Editor,
  Node,
  Path,
  Point,
  Range,
  Text,
  Transforms,
  createEditor,
} from 'slate';
import { withHistory } from 'slate-history';
import {
  Editable,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact,
} from 'slate-react';
import { unified } from 'unified';

import { IconComponent } from '@/ui/IconComponent';

import { CodeLeaf, decorateCodeFunc } from './parsers/code';
import { transformResultParse } from './parsers/html';
import { serialize } from './parsers/slate2md';
import { CustomElement, CustomRange, IEditablePrompt } from './typings';

import styles from './Prompts.module.scss';

export const EditablePrompt = memo(
  ({
    text = '',
    deletePromptRow,
    id,
    type,
    handlePromptBlur,
    readOnly,
    deleteDisabled,
  }: IEditablePrompt) => {
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);

    const valueRef = useRef<Descendant[]>([
      {
        type: 'paragraph',
        children: [{ text: '' }],
      } as CustomElement,
    ]);

    const onCopyClick = (textToCopy: string) => (event: React.MouseEvent) => {
      event.stopPropagation();
      navigator.clipboard.writeText(textToCopy);
    };

    const renderLeaf = useCallback(
      (props: RenderLeafProps) => <CodeLeaf {...props} />,
      [],
    );

    const decorate = useCallback(
      ([node, path]: [Node, number[]]) => {
        const customNode = node as CustomElement;
        if (
          customNode.type === 'code' &&
          customNode.lang &&
          customNode.lang !== 'null'
        ) {
          let allRanges: CustomRange[] = [];
          for (const [child, childPath] of Node.children(editor, path)) {
            if (Text.isText(child)) {
              allRanges = allRanges.concat(
                decorateCodeFunc(editor, [child, childPath], customNode.lang),
              );
            }
          }
          return allRanges;
        }
        return [];
      },
      [editor],
    );

    const renderElement = useCallback(
      (props: RenderElementProps) => {
        const { element, children, attributes } = props;

        const customElement = element as CustomElement;

        switch (customElement.type) {
          case 'code':
            const language = customElement.lang;

            if (!language || language === 'null') {
              return <p {...attributes}>{children}</p>;
            }

            return (
              <div className={styles.codeWrapper}>
                <div className={styles.codeHeader} contentEditable={false}>
                  <span>{language}</span>
                  <IconComponent
                    type="copy"
                    onClick={onCopyClick(
                      element.children
                        .map(child => (child as { text: string }).text)
                        .join('\n'),
                    )}
                    className={classNames(styles.copyIcon, {
                      [styles.copyActive]: !readOnly,
                    })}
                  />
                </div>
                <pre {...attributes}>
                  <code>{children}</code>
                </pre>
              </div>
            );
          case 'blockQuote':
            return <blockquote {...attributes}>{children}</blockquote>;
          case 'headingOne':
            return <h1 {...attributes}>{children}</h1>;
          case 'headingTwo':
            return <h2 {...attributes}>{children}</h2>;
          case 'headingThree':
            return <h3 {...attributes}>{children}</h3>;
          case 'headingFour':
            return <h4 {...attributes}>{children}</h4>;
          case 'headingFive':
            return <h5 {...attributes}>{children}</h5>;
          case 'headingSix':
            return <h6 {...attributes}>{children}</h6>;
          case 'listItem':
            return <li {...attributes}>{children}</li>;
          case 'list':
            return customElement.ordered ? (
              <ol start={customElement.start} {...attributes}>
                {children}
              </ol>
            ) : (
              <ul {...attributes}>{children}</ul>
            );
          case 'html':
            return <div {...attributes}>{children}</div>;
          case 'link':
            return (
              <a
                {...attributes}
                href={customElement.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            );
          default:
            return <p {...attributes}>{children}</p>;
        }
      },
      [readOnly],
    );

    useEffect(() => {
      const processor = unified().use(markdown).use(remarkToSlate);

      const result = processor.processSync(text).result;

      const transformedResult = transformResultParse(result).flat();

      if (transformedResult.length) {
        Transforms.delete(editor, {
          at: {
            anchor: Editor.start(editor, []),
            focus: Editor.end(editor, []),
          },
        });

        Transforms.removeNodes(editor, {
          at: [0],
        });

        Transforms.insertNodes(editor, transformedResult as Descendant[]);
      }
    }, [text, editor]);

    const onBlur = useCallback(() => {
      if (valueRef.current === null) {
        return;
      }

      const markdownText = serialize(valueRef.current);

      handlePromptBlur(id, markdownText);
    }, [handlePromptBlur, id]);

    useEffect(
      () => () => {
        if (valueRef.current) {
          const markdownText = serialize(valueRef.current);
          handlePromptBlur(id, markdownText);
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
    );

    const onChange = (newValue: Descendant[]) => {
      valueRef.current = newValue;
    };

    const CustomEditor = useMemo(
      () => ({
        isCodeBlock: (editorArg: Editor) => {
          const [match] = Editor.nodes(editorArg, {
            match: (n: Node) => 'type' in n && n.type === 'code',
          });
          return !!match;
        },
        isListItem: (editorArg: Editor) => {
          const [match] = Editor.nodes(editorArg, {
            match: (n: Node) => 'type' in n && n.type === 'listItem',
          });
          return !!match;
        },
      }),
      [],
    );

    const onKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Tab' && CustomEditor.isCodeBlock(editor)) {
          event.preventDefault();
          Transforms.insertText(editor, '  ');
          return;
        }
        if (event.key === 'Backspace' || event.key === 'Delete') {
          const { selection } = editor;
          if (selection && Range.isCollapsed(selection)) {
            const [match] = Editor.nodes(editor, {
              match: (n: Node) => 'type' in n && n.type === 'code',
            });
            if (match) {
              const [node, path] = match;
              const start = Editor.start(editor, path);
              const isAtStart = Point.equals(selection.anchor, start);

              const nodeText = Node.string(node);

              if (nodeText.length === 0 && isAtStart) {
                event.preventDefault();
                Transforms.setNodes(
                  editor,
                  { type: 'paragraph', children: [{ text: '' }] },
                  { at: path },
                );
                return;
              }
            }
          }
        }
        if (event.key === 'Enter') {
          if (CustomEditor.isCodeBlock(editor)) {
            event.preventDefault();
            if (event.shiftKey === false) {
              Transforms.insertText(editor, '\n');
              return;
            }

            if (editor.selection) {
              Transforms.insertNodes(editor, {
                type: 'paragraph',
                children: [{ text: '' }],
              } as CustomElement);

              const point = Editor.end(editor, editor.selection.focus.path);
              const newPath = [
                ...point.path.slice(0, -1),
                point.path[point.path.length - 1] + 1,
              ];

              if (Editor.hasPath(editor, newPath)) {
                Transforms.select(editor, Editor.start(editor, newPath));
              }
            }

            return;
          }

          if (CustomEditor.isListItem(editor) && editor.selection) {
            event.preventDefault();

            if (event.shiftKey === false) {
              const [, currentListItemPath] = Editor.node(
                editor,
                editor.selection.focus.path,
              );

              const [, parentParagraphPath] = Editor.parent(
                editor,
                currentListItemPath,
              );
              const [, parentListPath] = Editor.parent(
                editor,
                parentParagraphPath,
              );

              const newPath = Path.next(parentListPath);

              const newItem = {
                type: 'listItem',
                children: [
                  {
                    type: 'paragraph',
                    children: [{ text: '' }],
                  } as CustomElement,
                ],
              } as CustomElement;

              Transforms.insertNodes(editor, newItem, { at: newPath });
              Transforms.select(editor, Editor.start(editor, newPath));

              return;
            }

            if (event.shiftKey === true) {
              event.preventDefault();

              const [, currentListItemPath] = Editor.node(
                editor,
                editor.selection.focus.path,
              );

              const [, parentParagraphPath] = Editor.parent(
                editor,
                currentListItemPath,
              );

              const [, parentListPath] = Editor.parent(
                editor,
                parentParagraphPath,
              );

              const [, grandParentListPath] = Editor.parent(
                editor,
                parentListPath,
              );

              const newPath = Path.next(
                grandParentListPath.length
                  ? grandParentListPath
                  : parentListPath,
              );

              const paragraph = { type: 'paragraph', children: [{ text: '' }] };

              Transforms.insertNodes(editor, paragraph, { at: newPath });

              Transforms.select(editor, Editor.start(editor, newPath));

              return;
            }
          }
          const { selection } = editor;

          if (selection && !Range.isCollapsed(selection)) return;

          const [match] = Editor.nodes(editor, {
            match: n => (n as CustomElement).type === 'paragraph',
          });

          if (!match) return;

          const [, path] = match;

          const prevText = Node.string(match[0]);
          const codeRegex = /^\`\`\`(.+)?$/;

          const codeMatch = prevText.match(codeRegex);

          if (codeMatch) {
            const codeBlock = {
              type: 'code',
              lang: codeMatch[1] || 'clike',
              children: [{ text: '' }],
            } as CustomElement;

            Transforms.insertNodes(editor, codeBlock, { at: path });

            const nextPath = Path.next(path);
            if (Editor.hasPath(editor, nextPath)) {
              Transforms.delete(editor, { at: nextPath });
            }

            const codeBlockPath = path;

            Transforms.select(editor, Editor.start(editor, codeBlockPath));

            event.preventDefault();
            return;
          }
        }
      },
      [editor, CustomEditor],
    );

    const handlePaste = useCallback(
      (event: React.ClipboardEvent<HTMLDivElement>) => {
        if (CustomEditor.isCodeBlock(editor)) {
          event.preventDefault();
          const pastedText = event.clipboardData.getData('text/plain');
          const lines = pastedText.split('\n');

          Transforms.insertText(editor, lines[0]);

          for (let i = 1; i < lines.length; i++) {
            Transforms.insertText(editor, '\n' + lines[i]);
          }
        }
      },
      [editor, CustomEditor],
    );

    return (
      <div className={styles.promptContainer}>
        {type === 'Human' ? (
          <div>
            <IconComponent type="human" />
          </div>
        ) : (
          <div>
            <IconComponent type="ai" />
          </div>
        )}
        <div className={styles.fieldContainer}>
          <div className={styles.promptContainerHeader}>
            {type === 'Human' ? (
              <div className={styles.placeholderText}>You</div>
            ) : (
              <div className={styles.placeholderText}>AI</div>
            )}
            <div
              className={classNames(styles.iconDelete, {
                [styles.iconDeleteDisabled]: readOnly || deleteDisabled,
              })}
              onClick={
                readOnly || deleteDisabled ? undefined : deletePromptRow(id)
              }
            >
              <IconComponent type="deleteIcon" />
            </div>
          </div>
          {valueRef.current ? (
            <Slate
              editor={editor}
              initialValue={valueRef.current}
              onChange={onChange}
            >
              <Editable
                spellCheck={false}
                renderElement={renderElement}
                className={styles.promptField}
                onBlur={onBlur}
                renderLeaf={renderLeaf}
                decorate={decorate}
                onKeyDown={onKeyDown}
                readOnly={readOnly}
                onPaste={handlePaste}
              />
            </Slate>
          ) : null}
        </div>
      </div>
    );
  },
);

EditablePrompt.displayName = 'EditablePrompt';

```

# src/features/Conversations/components/TreeItem/index.ts

```ts
export { TreeItemMemo } from './TreeItem';
export { SortableTreeItem } from './SortableTreeItem';

```

# src/features/Conversations/components/TreeItem/TreeItem.tsx

```tsx
import React, {
  ChangeEvent,
  HTMLAttributes,
  MouseEvent,
  forwardRef,
  memo,
  useState,
} from 'react';

import classNames from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import { ROUTES } from '@/app/router/constants/routes';
import { renameChatTreeItem } from '@/redux/conversations/conversationsSlice';
import { useAppDispatch } from '@/redux/hooks';
import { IconComponent } from '@/ui/IconComponent';
import { TextFieldComponent } from '@/ui/TextFieldComponent';

import styles from './TreeItem.module.scss';

export interface Props extends HTMLAttributes<HTMLLIElement> {
  childCount?: number;
  clone?: boolean;
  collapsed?: boolean;
  depth?: number;
  disableInteraction?: boolean;
  disableSelection?: boolean;
  ghost?: boolean;
  handleProps?: HTMLAttributes<HTMLDivElement>;
  indicator?: boolean;
  indentationWidth: number;
  value: string;
  name: string;
  type: string;
  onCollapse?(): void;
  onRemove?(): void;
  wrapperRef?(node: HTMLLIElement): void;
}

const TreeItem = forwardRef<HTMLDivElement, Props>(
  (
    {
      childCount,
      clone,
      depth = 0,
      disableSelection,
      disableInteraction,
      ghost,
      handleProps,
      indentationWidth,
      indicator,
      collapsed,
      onCollapse,
      onRemove,
      style,
      value,
      name,
      type,
      wrapperRef,
      ...props
    },
    ref,
  ) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedItemName, setEditedItemName] = useState(name);
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const navigation = useNavigate();

    const onClickDelete = (event: MouseEvent) => {
      event.stopPropagation();
      setIsDeleting(true);
    };

    const onCancel = (event?: MouseEvent) => {
      event?.stopPropagation();
      setIsDeleting(false);
      setIsEditing(false);
      if (name !== editedItemName) {
        setEditedItemName(name);
      }
    };

    const onConfirm = (event: MouseEvent) => {
      event.stopPropagation();
      if (isDeleting) {
        onRemove?.();
        setIsDeleting(false);
      }
      if (isEditing) {
        if (editedItemName) {
          const trimmedName = editedItemName.trim();
          setEditedItemName(trimmedName.trim());
          dispatch(
            renameChatTreeItem({
              chatTreeId: value,
              chatTreeName: trimmedName,
            }),
          );
          setEditedItemName(trimmedName);
        }
        setIsEditing(false);
      }
    };

    const onClickEdit = (event: {
      stopPropagation: () => void;
      preventDefault: () => void;
    }) => {
      event.stopPropagation();
      setEditedItemName(name);
      setIsEditing(true);
      event.preventDefault();
    };

    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();
      setEditedItemName(event.target.value);
    };

    const onOutsideClick = () => {
      if (isDeleting || isEditing) {
        onCancel();
      }
    };

    const onItemMouseDown = (event: MouseEvent) => {
      event.stopPropagation();
      if (onCollapse && type === 'folder' && !isEditing) {
        onCollapse();
      }

      if (type === 'chat') {
        navigation(`${ROUTES.Chat}/${value}`);
      }
    };

    const handleNoDrag = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target?.dataset?.nodrag && (!isEditing || !isDeleting)) {
        return;
      } else {
        handleProps?.onPointerDown?.(
          event as React.PointerEvent<HTMLDivElement>,
        );
      }
    };

    return (
      <OutsideClickHandler onOutsideClick={onOutsideClick}>
        <li
          {...props}
          className={classNames(
            styles.Wrapper,
            clone && styles.clone,
            ghost && styles.ghost,
            indicator && styles.indicator,
            disableSelection && styles.disableSelection,
            disableInteraction && styles.disableInteraction,
          )}
          ref={wrapperRef}
          style={
            {
              marginLeft: `${indentationWidth * depth}px`,
            } as React.CSSProperties
          }
        >
          <div
            onPointerDown={handleNoDrag}
            className={classNames(styles.wrapperItem, {
              [styles.editing]: isEditing,
              [styles.selected]: value === id,
              [styles.folder]: type === 'folder',
            })}
            ref={ref}
            style={{
              ...style,
              borderLeft:
                depth && !clone ? '1px solid var(--bg-default)' : 'none',
              borderRadius: depth && !clone ? '0' : '8px',
            }}
            onMouseDown={onItemMouseDown}
          >
            <div className={styles.itemName}>
              {type === 'chat' && (
                <IconComponent
                  className={styles.conversationIcon}
                  type="conversation"
                />
              )}

              {type === 'folder' &&
                (onCollapse && !!childCount ? (
                  <IconComponent
                    className={styles.folderIcon}
                    type="openedFolder"
                  />
                ) : (
                  <IconComponent
                    className={styles.folderIcon}
                    type="closedFolder"
                  />
                ))}

              {isEditing ? (
                <TextFieldComponent
                  autoComplete="off"
                  inputProps={{ 'data-nodrag': true }}
                  value={editedItemName}
                  onChange={onChangeName}
                  className={styles.editInput}
                  autoFocus
                  fullWidth
                  onClick={handleNoDrag}
                />
              ) : (
                <>
                  {type === 'folder' ? (
                    <span className={styles.TextFolder}>{name}</span>
                  ) : (
                    <NavLink
                      to={`${ROUTES.Chat}/${value}`}
                      className={classNames({
                        [styles.selected]: value === id,
                      })}
                    >
                      <span
                        className={classNames(styles.TextChat, {
                          [styles.selected]: value === id,
                        })}
                      >
                        {name}
                      </span>
                    </NavLink>
                  )}
                </>
              )}

              {isEditing || isDeleting ? (
                <div className={styles.confirmation}>
                  <IconComponent
                    data-nodrag="true"
                    type="confirm"
                    onMouseDown={onConfirm}
                  />
                  <IconComponent
                    data-nodrag="true"
                    type="cancel"
                    onMouseDown={onCancel}
                  />
                </div>
              ) : (
                <div className={styles.settings}>
                  <IconComponent
                    data-nodrag="true"
                    type="edit"
                    onMouseDown={onClickEdit}
                  />
                  <IconComponent
                    data-nodrag="true"
                    type="deleteIcon"
                    onMouseDown={onClickDelete}
                  />
                </div>
              )}
            </div>

            {type === 'folder' && childCount === 0 && !ghost && (
              <div
                className={classNames(styles.nestedContent)}
                hidden={collapsed || isEditing}
              >
                <div>
                  <p>Empty folder</p>
                  <p>Drag conversations to add</p>
                </div>
              </div>
            )}
          </div>
        </li>
      </OutsideClickHandler>
    );
  },
);

export const TreeItemMemo = memo(TreeItem);

TreeItem.displayName = 'TreeItem';

```

# src/features/Conversations/components/TreeItem/TreeItem.module.scss

```scss
.Wrapper {
  list-style: none;
  box-sizing: border-box;
  padding-left: var(--spacing);
  margin-bottom: -1px;

  &.clone {
    display: inline-block;
    pointer-events: none;
    padding: 0;
    margin-left: 10px;
    margin-top: 5px;
  }

  &.ghost {
    &.indicator {
      opacity: 1;
      position: relative;
      z-index: 1;
      margin-bottom: -1px;
    }

    &:not(.indicator) {
      opacity: 0.5;
    }
  }

  &:hover {
    color: var(--text-primary);
  }
}

.TextFolder {
  text-align: start;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.TextChat {
  text-align: start;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.disableInteraction {
  pointer-events: none;
}

.disableSelection,
.clone {
  .TextFolder,
  .TextChat {
    user-select: none;
  }
}

.wrapperItem {
  min-width: 100px;
  padding: 10px 13px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 8px;
  color: var(--bg-default);
  text-decoration: none;
  transition-property: color, background, border;
  transition-duration: 0.3s;

  .itemName {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  svg {
    flex-shrink: 0;
  }

  svg:focus {
    outline: none;
  }

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  a {
    text-decoration: none;
    color: var(--bg-default);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  a:hover {
    color: var(--text-primary);
  }

  .editInput {
    input {
      height: 20px;
      padding: 0;
      padding-left: 5px;
    }

    fieldset {
      border-radius: 4px;
    }
  }

  .conversationIcon {
    transition: 0.3s;
    stroke: var(--bg-default);
  }

  .folderIcon {
    transition: 0.3s;
    stroke: var(--bg-default);
  }

  &:active {
    background-color: var(--bg-primary);
    border: 1px dashed var(--text-primary) !important;
    color: var(--text-primary);

    .conversationIcon {
      stroke: var(--text-primary);
    }
  }

  &:hover {
    background-color: var(--bg-primary);
    color: var(--text-primary);

    .folderIcon {
      stroke: var(--text-primary);
    }

    .conversationIcon {
      stroke: var(--text-primary);
    }

    .TextChat {
      color: var(--text-primary);
    }

    .TextFolder {
      color: var(--text-primary);
    }

    .deleteIcon {
      display: block;
      opacity: 1;
    }

    .settings {
      display: flex;
      opacity: 1;
    }
  }

  &.selected {
    color: var(--text-primary);

    .conversationIcon {
      stroke: var(--text-primary);
      fill: var(--text-primary);
    }

    .TextChat {
      color: var(--text-primary);
    }
  }

  .settings {
    margin-left: auto;
    opacity: 0;
    display: none;
    column-gap: 8px;
    align-items: center;
    transition: 0.3s;

    svg {
      width: 16px;
      height: 16px;
      transition: 0.3s;
      cursor: pointer;
      stroke: var(--bg-default);
    }
  }

  .settings svg:hover {
    stroke: var(--text-primary);
  }

  .confirmation {
    flex-shrink: 0;
    display: flex;
    column-gap: 8px;
    align-items: center;
    margin-left: auto;

    svg {
      width: 16px;
      height: 16px;
      stroke: var(--bg-default);
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        stroke: var(--text-primary);
      }
    }
  }

  .deleteIcon {
    margin-left: auto;
    opacity: 0;
    display: none;
    transition: 0.3s;
    cursor: pointer;
    stroke: var(--bg-default);

    &:hover {
      stroke: var(--text-primary);
    }
  }

  .confirmationDelete {
    flex-shrink: 0;
    display: flex;
    column-gap: 8px;
    align-items: center;
    margin-left: auto;

    svg {
      stroke: var(--bg-default);

      &:hover {
        stroke: var(--text-primary);
      }
    }
  }
}

.nestedContent {
  display: block;
  position: relative;
  color: var(--bg-default);
  margin: 5px 0 0 7px;
  border-left: 1px solid var(--bg-default);

  p {
    padding-left: 18px;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}

```

# src/features/Conversations/components/TreeItem/SortableTreeItem.tsx

```tsx
import { CSSProperties } from 'react';

import { AnimateLayoutChanges, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { TreeItemMemo, Props as TreeItemProps } from './TreeItem';

interface Props extends TreeItemProps {
  id: string;
  name: string;
  type: string;
}

const iOS = /iPad|iPhone|iPod/.test(navigator.platform);

const animateLayoutChanges: AnimateLayoutChanges = ({
  isSorting,
  wasDragging,
}) => (isSorting || wasDragging ? false : true);

export const SortableTreeItem = ({ id, type, depth, ...props }: Props) => {
  const {
    attributes,
    isDragging,
    isSorting,
    listeners,
    setDraggableNodeRef,
    setDroppableNodeRef,
    transform,
    transition,
  } = useSortable({
    id,
    animateLayoutChanges,
  });
  const style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <TreeItemMemo
      ref={setDraggableNodeRef}
      wrapperRef={setDroppableNodeRef}
      style={style}
      depth={depth}
      ghost={isDragging}
      disableSelection={iOS}
      disableInteraction={isSorting}
      type={type}
      handleProps={{
        ...attributes,
        ...listeners,
      }}
      {...props}
    />
  );
};

SortableTreeItem.displayName = 'SortableTreeItem';

```

# src/features/Conversations/components/SearchItem/index.ts

```ts
export * from './SearchItem';

```

# src/features/Conversations/components/SearchItem/SearchItem.tsx

```tsx
import { ChangeEvent, memo, useState } from 'react';

import classNames from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import { ROUTES } from '@/app/router/constants/routes';
import {
  deleteChatTreeItem,
  renameChatTreeItem,
} from '@/redux/conversations/conversationsSlice';
import { useAppDispatch } from '@/redux/hooks';
import { TreeItem } from '@/typings/common';
import { IconComponent } from '@/ui/IconComponent';
import { TextFieldComponent } from '@/ui/TextFieldComponent';

import styles from './SearchItem.module.scss';

interface SearchItemProps {
  conversationItem: TreeItem;
}

export const SearchItem = memo(({ conversationItem }: SearchItemProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedItemName, setEditedItemName] = useState(conversationItem.name);
  const { id } = useParams();
  const navigation = useNavigate();

  const dispatch = useAppDispatch();

  const onClickDelete = () => {
    setIsDeleting(true);
  };

  const onCancel = () => {
    setIsDeleting(false);
    setIsEditing(false);
    if (conversationItem.name !== editedItemName) {
      setEditedItemName(conversationItem.name);
    }
  };

  const onConfirm = () => {
    if (isDeleting) {
      dispatch(deleteChatTreeItem({ chatTreeId: conversationItem.id }));
      setIsDeleting(false);
    }
    if (isEditing) {
      if (editedItemName) {
        const trimmedName = editedItemName.trim();
        setEditedItemName(trimmedName);
        dispatch(
          renameChatTreeItem({
            chatTreeId: conversationItem.id,
            chatTreeName: trimmedName,
          }),
        );
      }
      setIsEditing(false);
    }
  };

  const onClickEdit = () => {
    setEditedItemName(conversationItem.name);
    setIsEditing(true);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedItemName(event.target.value);
  };

  const onOutsideClick = () => {
    if (isDeleting || isEditing) {
      onCancel();
    }
  };

  const onItemMouseDown = () => {
    navigation(`${ROUTES.Chat}/${conversationItem.id}`);
  };

  return (
    <OutsideClickHandler onOutsideClick={onOutsideClick}>
      <li className={classNames(styles.Wrapper)}>
        <div
          className={classNames(styles.wrapperItem, {
            [styles.editing]: isEditing,
            [styles.selected]: conversationItem.id === id,
          })}
          onMouseDown={onItemMouseDown}
        >
          <div className={styles.itemName}>
            <IconComponent
              className={styles.conversationIcon}
              type="conversation"
            />

            {isEditing ? (
              <TextFieldComponent
                autoComplete="off"
                value={editedItemName}
                onChange={onChangeName}
                className={styles.editInput}
                autoFocus
                fullWidth
              />
            ) : (
              <NavLink
                to={`${ROUTES.Chat}/${conversationItem.id}`}
                className={classNames({
                  [styles.selected]: conversationItem.id === id,
                })}
              >
                <span
                  className={classNames(styles.TextChat, {
                    [styles.selected]: conversationItem.id === id,
                  })}
                >
                  {conversationItem.name}
                </span>
              </NavLink>
            )}

            {isEditing || isDeleting ? (
              <div className={styles.confirmation}>
                <IconComponent type="confirm" onClick={onConfirm} />
                <IconComponent type="cancel" onClick={onCancel} />
              </div>
            ) : (
              <div className={styles.settings}>
                <IconComponent type="edit" onClick={onClickEdit} />
                <IconComponent type="deleteIcon" onClick={onClickDelete} />
              </div>
            )}
          </div>
        </div>
      </li>
    </OutsideClickHandler>
  );
});

SearchItem.displayName = 'SearchItem';

```

# src/features/Conversations/components/SearchItem/SearchItem.module.scss

```scss
.Wrapper {
  list-style: none;
  box-sizing: border-box;
  padding-left: var(--spacing);
  margin-bottom: -1px;

  &.clone {
    display: inline-block;
    pointer-events: none;
    padding: 0;
    margin-left: 10px;
    margin-top: 5px;
  }

  &.ghost {
    &.indicator {
      opacity: 1;
      position: relative;
      z-index: 1;
      margin-bottom: -1px;
    }

    &:not(.indicator) {
      opacity: 0.5;
    }
  }

  &:hover {
    color: var(--text-primary);
  }
}

.TextFolder {
  text-align: start;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.TextChat {
  text-align: start;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.disableInteraction {
  pointer-events: none;
}

.disableSelection,
.clone {
  .TextFolder,
  .TextChat {
    user-select: none;
  }
}

.wrapperItem {
  min-width: 100px;
  padding: 10px 13px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 8px;
  color: var(--bg-default);
  text-decoration: none;
  transition-property: color, background, border;
  transition-duration: 0.3s;

  .itemName {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  svg {
    flex-shrink: 0;
  }

  svg:focus {
    outline: none;
  }

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  a {
    text-decoration: none;
    color: var(--bg-default);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  a:hover {
    color: var(--text-primary);
  }

  .editInput {
    input {
      height: 20px;
      padding: 0;
      padding-left: 5px;
    }

    fieldset {
      border-radius: 4px;
    }
  }

  .conversationIcon {
    transition: 0.3s;
    stroke: var(--bg-default);
  }

  .folderIcon {
    transition: 0.3s;
    stroke: var(--bg-default);
  }

  &:active {
    background-color: var(--bg-primary);
    border: 1px dashed var(--text-primary) !important;
    color: var(--text-primary);

    .conversationIcon {
      stroke: var(--text-primary);
    }
  }

  &:hover {
    background-color: var(--bg-primary);
    color: var(--text-primary);

    .folderIcon {
      stroke: var(--text-primary);
    }

    .conversationIcon {
      stroke: var(--text-primary);
    }

    .TextChat {
      color: var(--text-primary);
    }

    .TextFolder {
      color: var(--text-primary);
    }

    .deleteIcon {
      display: block;
      opacity: 1;
    }

    .settings {
      display: flex;
      opacity: 1;
    }
  }

  &.selected {
    color: var(--text-primary);

    .conversationIcon {
      stroke: var(--text-primary);
      fill: var(--text-primary);
    }

    .TextChat {
      color: var(--text-primary);
    }
  }

  .settings {
    margin-left: auto;
    opacity: 0;
    display: none;
    column-gap: 8px;
    align-items: center;
    transition: 0.3s;

    svg {
      width: 16px;
      height: 16px;
      transition: 0.3s;
      cursor: pointer;
      stroke: var(--bg-default);
    }
  }

  .settings svg:hover {
    stroke: var(--text-primary);
  }

  .confirmation {
    flex-shrink: 0;
    display: flex;
    column-gap: 8px;
    align-items: center;
    margin-left: auto;

    svg {
      width: 16px;
      height: 16px;
      stroke: var(--bg-default);
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        stroke: var(--text-primary);
      }
    }
  }

  .deleteIcon {
    margin-left: auto;
    opacity: 0;
    display: none;
    transition: 0.3s;
    cursor: pointer;
    stroke: var(--bg-default);

    &:hover {
      stroke: var(--text-primary);
    }
  }

  .confirmationDelete {
    flex-shrink: 0;
    display: flex;
    column-gap: 8px;
    align-items: center;
    margin-left: auto;

    svg {
      stroke: var(--bg-default);

      &:hover {
        stroke: var(--text-primary);
      }
    }
  }
}

.nestedContent {
  display: block;
  position: relative;
  color: var(--bg-default);
  margin: 5px 0 0 7px;
  border-left: 1px solid var(--bg-default);

  p {
    padding-left: 18px;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}

```

# src/features/Chat/components/EditablePrompt/parsers/slate2md.ts

```ts
import { Element, Node, Text } from 'slate';

import { CustomElement, CustomText } from '../typings';

const isCustomText = (node: Node): node is CustomText => Text.isText(node);

const isCustomElement = (node: Node): node is CustomElement =>
  Element.isElement(node);

const serializeEach = (
  node: Node | CustomText | CustomElement,
  parentStart = 1,
  insideOrderedList = false,
): string => {
  if (isCustomText(node)) {
    const escaped = node.text;
    if (node.bold) return `**${escaped}**`;
    if (node.italic) return `*${escaped}*`;
    if (node.strikethrough) return `**${escaped}**`;
    if (node.deleted) return `~~${escaped}~~`;
    if (node.inserted) return `__${escaped}__`;
    if (node.underline) return `__${escaped}__`;
    if (node.inlineCode) return `\`${escaped}\``;
    return escaped;
  }

  if (isCustomElement(node)) {
    const children = node.children
      .map(n => serializeEach(n, parentStart))
      .join('');

    switch (node.type) {
      case 'link':
        return `\n${children}\n`;
      case 'blockQuote':
        return `> ${children}\n`;
      case 'list':
        if (node.ordered) {
          const startNumber = node.start || 1;
          return (
            node.children
              .map(
                (n, i) =>
                  `${startNumber + i}. ${serializeEach(n, startNumber, true)}`,
              )
              .join('\n') + '\n'
          );
        } else {
          return children;
        }
      case 'listItem':
        if (insideOrderedList) {
          return `${children.trim()}\n`;
        } else {
          return `* ${children.trim()}\n`;
        }
      case 'headingOne':
        return `# ${children}\n`;
      case 'headingTwo':
        return `## ${children}\n`;
      case 'headingThree':
        return `### ${children}\n`;
      case 'headingFour':
        return `#### ${children}\n`;
      case 'headingFive':
        return `##### ${children}\n`;
      case 'headingSix':
        return `###### ${children}\n`;
      case 'horizontalRule':
        return `---`;
      case 'code':
        const code = node.children
          .map(n => (isCustomText(n) ? n.text : ''))
          .join('\n');
        return `\n\`\`\`${node.lang}\n${code}\n\`\`\`\n`;
      case 'image':
        const title = node?.type;
        const src = node?.url;
        const alt = 'alt default';
        return `![${title}](${src} "${alt}")`;
      case 'paragraph':
        return `\n${children}\n`;
      case 'html':
        return `\n${children}\n`;
      default:
        return children;
    }
  }

  return '';
};

export const serialize = (data: (Node | CustomText | CustomElement)[] = []) =>
  data.map(node => serializeEach(node)).join('');

```

# src/features/Chat/components/EditablePrompt/parsers/html.ts

```ts
type NodeType =
  | {
      children?: NodeType[];
      type?: string;
      text?: string;
    }
  | string
  | null;

const isSiblingText = (children: NodeType[]): boolean =>
  children.some(
    child => typeof child === 'object' && child !== null && 'text' in child,
  );

function isTextObject(node: NodeType): node is { text?: string } {
  return typeof node === 'object' && node !== null && 'text' in node;
}

export const transformResultParse = (
  node: NodeType | NodeType[],
): NodeType[] => {
  if (Array.isArray(node)) {
    return node.flatMap(transformResultParse);
  } else if (typeof node === 'object' && node !== null) {
    if ('children' in node && node.children) {
      const newChildren: NodeType[] = [];

      if (
        'children' in node &&
        Array.isArray(node.children) &&
        node.children.length === 0
      ) {
        return [];
      }
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];

        if (
          typeof child === 'object' &&
          child &&
          child.type === 'html' &&
          isSiblingText(node.children)
        ) {
          if (
            child &&
            child.children?.[0] &&
            typeof child.children[0] === 'object'
          ) {
            newChildren.push({ text: child.children?.[0].text });
          }
        } else if (
          typeof child === 'object' &&
          child &&
          child.type === 'break'
        ) {
          const prevIndex = newChildren.length - 1;
          if (
            prevIndex >= 0 &&
            newChildren[prevIndex] &&
            isTextObject(newChildren[prevIndex])
          ) {
            const elem = newChildren[prevIndex] as { text: string };
            elem.text = (elem.text || '') + '\n';
          }
        } else {
          newChildren.push(...transformResultParse(child));
        }
      }
      return [
        {
          ...node,
          children: newChildren,
        },
      ];
    }
    return [node];
  } else {
    return [node];
  }
};

```

# src/features/Chat/components/EditablePrompt/parsers/code.tsx

```tsx
import { memo } from 'react';

import { languages as PrismLanguages, tokenize } from 'prismjs';
import { languages } from 'prismjs/components';
import { BaseEditor, Text } from 'slate';
import { RenderLeafProps } from 'slate-react';

import { CustomRange, CustomText, PrismToken } from '../typings';

import styles from '../Prompts.module.scss';

export const pushString = (
  token: string,
  path: number[],
  start: number,
  ranges: CustomRange[],
  tokenType = 'text',
): number => {
  ranges.push({
    prismToken: tokenType,
    anchor: { path, offset: start },
    focus: { path, offset: start + token.length },
  });
  start += token.length;
  return start;
};

export const recurseTokenize = (
  token: PrismToken,
  path: number[],
  ranges: CustomRange[],
  start: number,
  parentTag?: string,
): number | undefined => {
  if (typeof token === 'string') {
    return pushString(token, path, start, ranges, parentTag);
  }
  if ('content' in token) {
    for (const subToken of token.content) {
      start = recurseTokenize(subToken, path, ranges, start, token.type) ?? 0;
    }
    return start;
  }
};

export const decorateCodeFunc = (
  _: BaseEditor,
  [node, path]: [CustomText, number[]],
  lang: string,
): CustomRange[] => {
  const ranges: CustomRange[] = [];

  if (!Text.isText(node) || !node || !node.text) {
    return ranges;
  }

  const lang_aliases: Record<string, string> = {
    html: 'markup',
    js: 'javascript',
    ts: 'typescript',
    py: 'python',
    xml: 'markup',
    'c++': 'cpp',
    'c#': 'csharp',
  };

  let language = '';

  if (lang in lang_aliases) {
    language = lang_aliases[lang];
  }

  if (!language) {
    language = lang in languages ? lang : 'clike';
  }

  switch (language) {
    case 'cpp':
      require('prismjs/components/prism-c');
      break;
    case 'tsx':
      require('prismjs/components/prism-jsx');
      require('prismjs/components/prism-typescript');
      break;
    case 'scala':
      require('prismjs/components/prism-java');
      break;
    default:
      break;
  }

  require(`prismjs/components/prism-${language}`);

  const tokens: PrismToken[] = tokenize(
    node.text,
    PrismLanguages[language],
  ) as PrismToken[];

  let start = 0;
  for (const token of tokens) {
    start = recurseTokenize(token, path, ranges, start) ?? 0;
  }
  return ranges;
};

export const CodeLeaf = memo(
  ({ attributes, children, leaf }: RenderLeafProps) => {
    const customLeaf = leaf as CustomText;

    if (customLeaf.inlineCode) {
      return (
        <strong {...attributes} className={styles.inlineCode}>
          {children}
        </strong>
      );
    }

    if (customLeaf.prismToken) {
      return (
        <span
          {...attributes}
          className={`token ${(leaf as CustomText).prismToken}`}
        >
          {children}
        </span>
      );
    }

    return <span {...attributes}>{children}</span>;
  },
);

CodeLeaf.displayName = 'CodeLeaf';

```

