import React from 'react';
import './Navbar.css';
const Navbar = ({ userLang, setUserTheme, fontSize, setFontSize,users,room }) => {
  console.log(userLang);
  return (
    <div className="navbar text-blue-200 bg-black font-extrabold ">
      <h1>Collaborate</h1>
      {fontSize?<>
      
      <label>Font Size</label>

      <input type="range" min="18" max="30"
        value={fontSize} step="2"
        onChange={(e) => { setFontSize(e.target.value) }} />
        Room : 
      <div className="room text-red-200">{room}</div>
      Language :
      <div className="room text-red-200">{userLang}</div>
      <div className="flex absolute right-7 items-center space-x-2">
      {users.map((user,id) => (
              <div key={id} className="flex items-center space-x-2 group">
                <div className="relative group">
                  <img
                    src={'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'}
                    alt={`Profile of ${user.name}`}
                    className="w-8 h-8 rounded-full object-cover transition duration-300 ease-in-out transform group-hover:scale-110"
                  />
                  <span className="hidden group-hover:block bottom-0 right-full bg-gray-800 text-white p-1 text-center">
                    {user.name}
                  </span>
                </div>
              </div>
            ))}
      </div>
      </>:""}
    </div>
	)
}

export default Navbar
