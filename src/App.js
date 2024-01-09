import './App.css';
import Comments from './components/comments/comments';
import LocalStorage from './components/localStorage/localStorage';
import News from './components/news/news';
import Todo from './components/todo/todo';

import CallBackHook from './components/callBackHooks/callBackHook';
import PasswordGenerator from './components/passwordGenerator/passwordGenerator';
import CleanupFunction from './components/cleanupFunction/cleanupFunction';
import ReverseString from './components/reverseString/reverseString';
function App() {
  return (
    <div className="App">
      {/* <News /> */}

      {/* <Comments /> */}


      {/* Local Storage */}
      <Todo />
      <LocalStorage />


      {/* <CallBackHook /> */}

      {/* <PasswordGenerator /> */}

      {/* <CleanupFunction /> */}

      {/* <ReverseString /> */}

    </div>
  );
}

export default App;
