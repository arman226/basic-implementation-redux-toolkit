# SET THINGS UP

1. Create a React Project: `npx create-react-app redux-toolkit-sample`
2. Install Redux Toolkit with the regular React-redux library: `npm install @reduxjs/toolkit react-redux`
3. Install Axios for Network Calls: `npm install axios`
4. Create the following folders under /src

```
   > components
   > data
     > configs
     > services
   > ducks
   > hooks
   > pages
```

5. under `data/` folder, create a file and call it `constants.js`. Inside this file, write the following code :

```js
export const REQUEST_TIMEOUT_SECONDS: number = 30;

export const JSON_PLACEHOLDER_ENDPOINTS: Object = {
  LIST_OF_TODOS: "/todos",
};
```
