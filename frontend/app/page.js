import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Landing Page</title>
        <meta name="description" content="A landing page example" />
      </Head>

      <main className="flex min-h-screen">
        <section className="w-1/2 bg-[#9656a1] flex flex-col items-center justify-center text-white px-10">
          <h1 className="text-4xl text-center font-bold mb-8">Study Solo</h1>
          <p className="text-lg text-center mb-10">
            Create your perfect study environment with atmospheric backgrounds,
            personal timers, and goals-in your very own study room.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Start Solo Study
          </button>
        </section>
        <section className="w-1/2 bg-gradient-to-b from-[#FF8E3C] to-[#FF3939] flex flex-col items-center justify-center text-white px-10">
          <h1 className="text-4xl text-center font-bold mb-8">Study Together</h1>
          <p className="text-lg text-center mb-10">
            Join motivated students from all over the world in one of our group
            study rooms to boost your productivity and find your study flow.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Join Group Study
          </button>
          <button className="text-green-500 hover:text-green-600 underline mt-4">
            Create Group Study Room
          </button>
          <p className=" text-xs text-white mt-10">
            Note: Your devices are deactivated when joining. You can activate
            your camera as you like.
          </p>
        </section>
      </main>
    </div>
  );
}
