import { useRef, useState } from 'react';
import Editor from "@monaco-editor/react";
import Navbar from './Navbar';
import Chat from './chat';
import React from 'react';
import Axios from 'axios';
import QueryString from 'qs';
function App() {
  const [userCode, setUserCode] = useState(`//Enter Your Code here`);
  const [room, setroom] = useState("");
  const [users, setusers] = useState("");
  const editor = useRef();

  const [userLang, setUserLang] = useState("C++");
  const [userTheme, setUserTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(20);
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const options = {
    fontSize: fontSize
  }
  function compile() {
    let data = JSON.stringify({
      code: userCode,
      lang: userLang,
      input: userInput,
      inputRadio:userInput!==''
    });
  //   var code = req.body.code;	
	// var input = req.body.input;
  //   var inputRadio = req.body.inputRadio;
  //   var lang = req.body.lang;
    console.log(data);
    let config = {
      method: 'post',
      url: 'https://codeserver-ckyr.onrender.com/compilecode',
      headers: {
        'Content-Type': 'application/json',
        'mode': 'no-cors',
        'Access-Control-Allow-Origin':'*'
      },
      data: data
    };
    //calling the code compilation API
    Axios(config)
      .then((response) => {
        setUserOutput(response.data.output);
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    setLoading(true);

    // if (userCode === `//Enter Your Code here`) {
    //   return
    // }
    // Axios.post(`http://localhost:4000/compile`, {
    //   code: userCode,
    //   language: userLang,
    //   input: userInput
    // }).then((res) => {
    //   setUserOutput(res.data.output);
    // }).then(() => {
    //   setLoading(false);
    // })
  }
  return (
    <div className="App">
      <Navbar
        userLang={userLang} setUserLang={setUserLang}
        userTheme={userTheme} setUserTheme={setUserTheme}
        fontSize={fontSize} setFontSize={setFontSize}
        room={room} setroom={setroom}
        setusers={setusers}

      />
      <div className="main flex flex-row">
        {/* <textarea id='editor' ref={editor} value={userCode} onChange={(e) =>setUserCode(e.target.value)}></textarea> */}
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
                  <textarea style={{overflow:'auto'}} className='bg-black text-nowrap h-[30vh] w-[100%] text-white border rounded-lg  border-white p-3' id="code-inp border-t" onChange=
                    {(e) => setUserInput(e.target.value)}>
                  </textarea>
                </div>
              </div>
              <div className='w-[50%]  m-3'>
                <h4 className='font-bold'>Output:</h4>
                <pre style={{overflow:'auto'}} className='bg-black text-white border border-white p-3 rounded-lg  h-[30vh] w-[100%]'>{userOutput}</pre>

              </div>
            </div>
          </div>
          <div className="output-box w-full h-[8vh]">
            <button onClick={() => { }}
              className="clear-btn mr-2 bg-red-400 rounded-lg px-2 py-1 hover:text-white my-2">
              Clear
            </button>
            <button onClick={compile}
              className="clear-btn mr-2 bg-red-400 rounded-lg px-2 py-1 hover:text-white my-2">
              Run
            </button>
            <button onClick={() => { }}
              className="clear-btn mr-2 bg-red-400 rounded-lg px-2 py-1 hover:text-white my-2">
              Commit
            </button>
          </div>
          <Chat username={users} room={room} userCode={userCode} setUserCode={setUserCode} />
        </div>

      </div>

    </div>
  );
}

export default App;
