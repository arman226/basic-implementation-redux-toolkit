# SET THINGS UP

## INITIAL PROJECT SETUP

1. Create a React Project: `npx create-react-app redux-toolkit-sample`
2. Inside the root folder, create a new file and call it `jsconfig.json` and write the following code for absolute imports inside the src folder:

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

3. Install Redux Toolkit with the regular React-redux library: `npm install @reduxjs/toolkit react-redux`
4. Install Axios for Network Calls: `npm install axios`
5. Create the following folders under /src

```
   > components
   > data
     > configs
     > services
   > ducks
   > hooks
   > pages
```

6. Under `data/` folder, create a file and call it `constants.js`. Inside this file, write the following code :

```js
export const REQUEST_TIMEOUT_SECONDS: number = 30;

export const JSON_PLACEHOLDER_ENDPOINTS: Object = {
  LIST_OF_TODOS: "/todos",
};
```

7. Create a new file inside `data/configs` folder and call it `jsonPlaceholder.js` and inside this file, write the code below:

```js
import axios from "axios";
import { REQUEST_TIMEOUT_SECONDS } from "data/constants";

export default axios.create({
  baseURL: process.env.REACT_APP_JSON_PLACEHOLDER,
  timeout: REQUEST_TIMEOUT_SECONDS * 1000,
});
```

8. Create a file, under the root folder, that will contain all the environment constants/variables and call it `.env`.

```env
REACT_APP_JSON_PLACEHOLDER=https://jsonplaceholder.typicode.com/
```

9. Create a service that will get a list of todos using the axios instance that we created inside `data/configs` folder. Inside the `services` folder, create a file and name it as `listOfTodos.js` and write the code below:

```js
import { AxiosResponse } from "axios";
import jsonPlaceholder from "data/configs/jsonPlaceholder";
import { JSON_PLACEHOLDER_ENDPOINTS } from "data/constants";

export default {
  getListOfTodos: (): AxiosResponse =>
    jsonPlaceholder.get(JSON_PLACEHOLDER_ENDPOINTS.LIST_OF_TODOS),
};
```

## REDUX-TOOLKIT CONFIGURATION

10. Under the `ducks` folder, create a file and name it as `store.js` to configure our redux store, and, initially, write the code below:

```js
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {},
});
```

11. Let's modify our `index.js` file so we can wrap our application using the `Provider` Component from `react-redux`. This is how it should look like:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./ducks/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
```
