import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*
ReactDOM.createRoot = 매개변수로 들어오는 요소를 가상 DOM의 루트로 삼는다.
root.render() : 매개변수로 들어오는 값들을 렌더링한다.
<App /> : 태그처럼 보이지만 컴포넌트라고 부른다.
컴포넌트 : HTML 태그들을 Return하는 함수 
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);