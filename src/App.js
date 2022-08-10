import Links from './components/Links';
import Output from './components/Output';
import './App.css';
import axios from 'axios';

function App() {
  // ! AXIOS GLOBAL
  // ! jwt.io - for tokens
  axios.defaults.headers.common["X-Auth-Token"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  return (
    <>
      <div className="container text-center">
        <h1 className="display-3 mt-5">Axios Crash Course</h1>
        <Links />
      </div>
      <Output />
    </>
  );
}

export default App;
