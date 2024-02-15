import { useRef, useState } from 'react';
import Editor from "@monaco-editor/react";
import Navbar from './Navbar';
import Chat from './chat';

function App() {
  const [userCode, setUserCode] = useState(`dc`);
  const [room,setroom] = useState("");
  const [users,setusers] = useState("");
  const editor = useRef();
 
  // useEffect(() => {
  //   editor.current.addEventListener("keyup", (evt) => {
  //     socket.send(userCode);
  //   })
  //   socket.on('messagecode', (data) => {
  //     setUserCode(data);
  //   })
  // },[userCode])
 

 
  
  
  const [userLang, setUserLang] = useState("cpp");

  // State variable to set editors default theme
  const [userTheme, setUserTheme] = useState("vs-dark");

  // State variable to set editors default font size
  const [fontSize, setFontSize] = useState(20);

  // State variable to set users input
  const [userInput, setUserInput] = useState("");
  

  // State variable to set users output
  const [userOutput, setUserOutput] = useState("");

  // Loading state variable to show spinner
  // while fetching data
  const [loading, setLoading] = useState(false);

  const options = {
    fontSize: fontSize
  }

  // Function to call the compile endpoint
  function compile() {
  	setLoading(true);
  	if (userCode === ``) {
  		return
  	}

  // 	// Post request to compile endpoint
  	// Axios.post(`http://localhost:8000/compile`, {
  	// 	code: userCode,
  	// 	language: userLang,
  	// 	input: userInput
  	// }).then((res) => {
  	// 	setUserOutput(res.data.output);
  	// }).then(() => {
  	// 	setLoading(false);
  	// })
  }

  // Function to clear the output screen


  return (
    <div className="App">
      <Navbar
                userLang={userLang} setUserLang={setUserLang}
                userTheme={userTheme} setUserTheme={setUserTheme}
                fontSize={fontSize} setFontSize={setFontSize}
                room = {room} setroom={setroom}
                setusers={setusers}
      
            />
      <div className="main">
        {/* <textarea id='editor' ref={editor} value={userCode} onChange={(e) =>setUserCode(e.target.value)}></textarea> */}
         <div className="left-container" id='editor' ref={editor}>
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
          <button className="run-btn" onClick={() => compile()}>
						Run
					</button>
        </div>
        <div className="right-container">
          <h4>Input:</h4>
          <div className="input-box">
            <textarea id="code-inp" onChange=
              {(e) => setUserInput(e.target.value)}>
            </textarea>
          </div>
          <h4>Output:</h4>
           {loading ? (
						<div className="spinner-box">
							<img src={""} alt="Loading..." />
						</div>
					) : (
						<div className="output-box">
							<pre>{userOutput}</pre>
							<button onClick={() => {  }}
								className="clear-btn">
								Clear
							</button>
						</div>
					)}
        </div>
      </div>
      <Chat username={users} room={room} userCode={userCode} setUserCode={setUserCode}/>
    </div>
  );
}

export default App;
