import React, { useState } from "react";
import Client from "./Client";

const Sidebar = () => {
  const [clients, setClients] = useState([
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "John Doe" },
    { socketId: 2, username: "John Doe" },
    { socketId: 2, username: "John Doe" },
    { socketId: 2, username: "John Doe" },
    { socketId: 2, username: "John Doe" },
  ]);

  return (
    <div className="bg-gray-800 w-[20%] h-screen flex flex-col justify-between m-1 rounded-md">
      <div className="p-4">
        <div className="text-2xl font-bold text-green-400">Code Sync</div>
        <div className="text-xs text-white">Realtime collaboration</div>
        <hr className="my-2" />
        <h1 className="text-white font-semibold mb-2">Connected..</h1>
        <div className="flex flex-wrap items-center gap-3">
          {clients.map((client) => (
            <Client key={client.socketId} username={client.username} />
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="flex flex-col gap-4">
          <button className="px-4 py-2 bg-white rounded-md font-bold">
            Copy Room ID
          </button>
          <button className="px-4 py-2 bg-green-400 rounded-md font-bold">
            Leave
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
