// import './App.css';
// import * as React from "react";
import React from "react";
import "./Nav.css";
import Cart from "./components/Cart";
import Detail from './pages/Detail';
import Home from './pages/Home';
import Nav from "./components/Nav";
import About from "./components/About";
import Store from "./components/Store";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Contact from "./components/Contact";
import { StoreProvider } from './utils/GlobalState';
import {
  BrowserRouter as 
  Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
// import DemoCarousel from "./components/Carousel";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
 
  return (
    <ApolloProvider client={client}>
      <div className="App">
        
        <header className="App-header">
          <StoreProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sauces/:id" element={Detail} />
          </Routes>
          </StoreProvider>
          <h2 className="Name"></h2>
          <br />
          <div className="slogan"></div>
        </header>
      </div>
     </ApolloProvider>
  );
}

export default App;
