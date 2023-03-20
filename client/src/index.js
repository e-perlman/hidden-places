import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App';
import { createGlobalStyle } from "styled-components";
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/User';
import { StatesProvider } from './context/States';
import { FeedProvider } from './context/Feed'

const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
  }

  body {
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
    background: #282c34;
    color: hsla(0, 0%, 100%, 0.88)
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle/>
      <UserProvider>
        <StatesProvider>
          <FeedProvider>
            <App />
         </FeedProvider>
        </StatesProvider>
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
