# Start developing with GoaldN

Make 2 git folders, for open & private code.

Install `aldev`.

After the first `npm run android` runs, we're going to start adding the Devotion stack.

Maybe add all this before:

   2. Remove the old installation if any: `npm uninstall -g react-native-cli @react-native-community/cli`
   3. Let's install something fresh: `npx @react-native-community/cli@latest init MyAwesomeProject`
   4. Let's prepare for monorepo mode: `mv MyAwesomeProject native`
   5. Let's install the deps: `cd native && npm i`

- [ ] remove the `App.tsx`, add the `index.js` file
- [ ] add `src/`, `assets`
- [ ] rename `name` in `package.json`
- [ ] add:
  - `global.css`
  - `tsconfig.json`
  - `babel.config.js`
  - `metro.config.js`
  - `.aldev.yaml`
- [ ] Add and customize: `env.d.ts`
- [ ] Add and customize: `android/app/build.gradle`
- [ ] Add and customize: `package.json` : add the devDebug variant
- [ ] npm install:
  - npm i @react-navigation/bottom-tabs @react-navigation/native-stack react-native-gesture-handler react-native-screens
  - npm i react-native-orientation-locker
  - npm i jotai form-atoms @react-native-async-storage/async-storage
  - npm i nativewind react-native-reanimated react-native-safe-area-context@5.4.0 tailwindcss-animate lucide-react-native class-variance-authority tailwind-merge clsx
  - npm i react-native-reanimated-carousel @react-native-community/slider @rn-primitives/slot @rn-primitives/switch
  - npm i i18next react-i18next react-native-localize
  - react-native-fs react-native-html-to-pdf react-native-share
  - react-native-config
  - react-native-ble-manager react-native-permissions => only if using the BLE
  - react-native-svg

  - react-native-print --force => only if needed
  -
- [ ] npm install --save-dev:
  - npm i -D @rnx-kit/metro-resolver-symlinks
  - npm i -D prettier@^3.0 tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11
  - npm i -D babel-plugin-module-resolver
  - npm i -D @types/react-native-html-to-pdf => only if printing PDF

after bootstraping: aldev refresh -v