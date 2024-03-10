import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <section className="w-2/3 bg-gradient-to-r from-teal-900 to-cyan-800 flex flex-col items-center justify-center text-white px-10">
        {/* Recommended friends section */}
        <h2 className="text-2xl font-bold mb-4">Recommended Friends</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Each card should be placed here */}
          <FriendCard name="Aztec" status="Playing Visual Studio Code" />
          <FriendCard name="Bhavik" status="Online" />
          <FriendCard name="Cratan" status="Online" />
          {/* More friend cards... */}
        </div>
      </section>
      <section className="w-1/3 bg-gradient-to-r from-purple-800 to-pink-700 flex flex-col items-center justify-center text-white px-10">
        {/* Active friends section */}
        <h2 className="text-2xl font-bold mb-4">Active Friends</h2>
        <div className="flex flex-col space-y-4">
          <ActiveFriend name="kichona" status="Online" />
          <ActiveFriend name="TechAkhil" status="Online" />
          <ActiveFriend name="Yellow Haired Asia Requiem" status="Do Not Disturb" />
          {/* More active friends... */}
        </div>
      </section>
    </div>
  );
}

function FriendCard({ name, status }) {
  return (
    <div
      className="shadow-md rounded-lg bg-gray-700 backdrop-blur-md bg-opacity-50 hover:bg-opacity-70 p-4"
    >
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-gray-300">{status}</p>
    </div>
  );
}

function ActiveFriend({ name, status }) {
  return (
    <div
      className="flex items-center space-x-4 bg-gray-700 backdrop-blur-md bg-opacity-50 hover:bg-opacity-70 rounded-lg p-4"
    >
      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
      <div>
        <h3 className="text-lg font-bold mb-1">{name}</h3>
        <p className="text-gray-300">{status}</p>
      </div>
    </div>
  );
}
