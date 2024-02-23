import { useRef, useState } from 'react';
import Editor from "@monaco-editor/react";
import Navbar from './Navbar';
import Chat from './chat';
import React from 'react';
import compile from './utils/compile';
function App({user,room,userLang,users,setusers}) {
  const [userCode, setUserCode] = useState(`//Enter Your Code here`);
  const editor = useRef();
  const [userTheme, setUserTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(20);
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState("");

  const options = {
    fontSize: fontSize
  }

  function gg(...args) {
    console.log(args);
  }
  return (
    <div className="App">
      <Navbar
        userTheme={userTheme} setUserTheme={setUserTheme}
        fontSize={fontSize} setFontSize={setFontSize}
        users={users} userLang={userLang}
        room={room}
      />
      <div className="main flex flex-row">
        <div className="left-container w-[70%]" id='editor' ref={editor}>
          <Editor
            options={options}
            height="calc(100vh - 50px)"
            width="100%"
            theme={userTheme}
            language={userLang}
            defaultLanguage={userLang}
            defaultValue="# Enter your code here"
            value={userCode}
            onChange={(value) => { setUserCode(value) }}
          />
        </div>
        <div className="flex bg-black h-[93vh] text-white flex-col w-[40%]">
          <div className="flex flex-col h-[50vh]">
            <div className='flex w-full'>
              <div className='w-[50%] m-3'>
                <h4 className='font-bold'>Input:</h4>

                <div className="input-box" >
                  <textarea style={{ overflow: 'auto' }} className='bg-black text-nowrap h-[30vh] w-[100%] text-white border rounded-lg  border-white p-3' id="code-inp border-t" onChange=
                    {(e) => setUserInput(e.target.value)}>
                  </textarea>
                </div>
              </div>
              <div className='w-[50%]  m-3'>
                <h4 className='font-bold'>Output:</h4>
                <pre style={{ overflow: 'auto' }} className='bg-black text-white border border-white p-3 rounded-lg  h-[30vh] w-[100%]'>{userOutput}</pre>

              </div>
            </div>
          </div>
          <div className="output-box w-full h-[8vh]">
            <button onClick={() => { }}
              className="clear-btn mr-2 bg-red-400 rounded-lg px-2 py-1 hover:text-white my-2">
              Clear
            </button>
            <button onClick={() => compile(userCode, userLang, userInput, setUserOutput)}
              className="clear-btn mr-2 bg-red-400 rounded-lg px-2 py-1 hover:text-white my-2">
              Run
            </button>
            <button onClick={() => { gg(setUserCode) }}
              className="clear-btn mr-2 bg-red-400 rounded-lg px-2 py-1 hover:text-white my-2">
              Commit
            </button>
          </div>
          <Chat users={users} setusers={setusers} username={user} room={room} userCode={userCode} setUserCode={setUserCode} />
        </div>

      </div>

    </div>
  );
}

export default App;
