import React from "react";
import ReactDOM from 'react-dom';
import { createBrowserRouter } from "react-router-dom";
import Demo from "./demo";
import Home from "./home";
let App = createBrowserRouter([
    { 
        path : '/',
        element : <Demo/>
    },
]);

export default App;