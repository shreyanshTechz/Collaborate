import React from 'react';
import Select from 'react-dropdown-select';
import { useState } from 'react';
import App from './App';
import Navbar from './Navbar';
const Home = () => {
    const [currRoom, setcurrRoom] = useState("")
    const [currUser, setUser] = useState("")
    const [currLang, setcurrLang] = useState("")
    const [users,setusers] = useState([]);
    const [enter, setenter] = useState(false)
    const languages = [
        { value: "c", label: "C" },
        { value: "cpp", label: "C++" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
    ];
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(currLang);
        if (currRoom && currLang && currUser) {
            setenter(true)
        }
    }
    return (

        <div className="App">
            {enter ? <App user={currUser} userLang={currLang} room={currRoom} users={users} setusers={setusers}  /> : <div className='h-full'>
                <Navbar />
                <div className="flex h-[100vh] items-center justify-center">
                    <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Username
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="user"
                                            name="user"
                                            type="text"
                                            required
                                            onChange={(e)=>setUser(e.target.value)}
                                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">
                                            Room
                                        </label>
                                        <div className="text-sm">
                                            <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">

                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            required
                                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                            onChange={(e)=>setcurrRoom(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">
                                            Language
                                        </label>
                                        <div className="text-sm">
                                            <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <Select options={languages}
                                            onChange={(e) => setcurrLang(e[0].value)}
                                            placeholder={"Select Language"} />
                                    </div>
                                </div>

                                <div>
                                    <button
                                    onClick={handlesubmit}
                                        className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                                        Enter Room
                                    </button>
                                </div>
                            </div>

                            {/* <p className="mt-10 text-center text-sm text-gray-500">
                                Not a member?{' '}
                                <a href="#" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
                                    Start a 14 day free trial
                                </a>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Home
