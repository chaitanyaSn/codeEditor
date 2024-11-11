import React, { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [roomId, setRoomId] = useState();
  const [username, setUsername] = useState();

  const navigate = useNavigate();

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("Created a new room!");
  };

  const joinRoom = (e) => {
    e.preventDefault();

    if (!roomId || !username) {
      toast.error("Room ID and Username are required!");
      return;
    }
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter=(e)=>{
    e.preventDefault()
    if(e.code==='Enter'){
      joinRoom()
    }
  }
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="bg-gray-800 rounded-md w-full shadow-lg p-6 max-w-sm">
        <h1 className="text-3xl font-bold text-green-500 mb-6 text-center">
          Code Sync
        </h1>
        <hr className="mb-1" />
        <p className="text-gray-400 text-center mb-4">Realtime collaboration</p>
        <form onSubmit={joinRoom} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="ROOM ID "
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 p-2 w-full font-semibold"
              onKeyUp={handleInputEnter}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="USERNAME "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 p-2 w-full font-semibold"
              onKeyUp={handleInputEnter}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-400 px-6 py-1 cursor-pointer rounded-md font-bold  hover:bg-green-600 transition duration-200 left-0"
            >
              Join
            </button>
          </div>
          <p className="text-white text-sm mt-4">
            if you don't have an invite then create{" "}
            <a
              href=""
              onClick={createNewRoom}
              className="text-green-400 underline "
            >
              new room
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Home;
