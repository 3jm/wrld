import styles from './layout.module.css';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-4 md:p-12">
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl">
        <div className="w-full md:w-1/2 p-4 md:h-[70vh] flex justify-center items-center">
          <img src="/assets/logo.png" alt="Logo" className="w-3/4 h-auto rounded-full md:w-1/2 md:h-auto" />
        </div>
        <div className="w-full md:w-1/2 p-4 md:h-[70vh] flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold mb-4 text-[#b899ff]">Wrld</h1>
          <p className="text-lg text-center">
            Enhance your Discord server experience with Wrld Bot. From MXB commands to Fun commands, Wrld has it all. With a sleek design and powerful functions, Wrld is the perfect MXB Companion bot for your server.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-6 h-6 ${styles["jump-arrow"]}`}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
      <div>
        <div className="flex flex-col-reverse md:flex-row w-full max-w-screen-xl mt-8 text-center">
          <div className="w-full md:w-1/2 p-4 md:h-[40vh] flex flex-col justify-center items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/1202/1202760.png" alt="Image 1" className="w-3/4 h-auto md:w-1/2 md:h-auto" />
          </div>
          <div className="w-full md:w-1/2 p-4 md:h-[40vh] flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold mb-2 text-[#b899ff]">Statistics</h2>
            <p className="text-lg text-gray-300 text-center">
              We currently serve 20+ Servers with around 25k+ members total!
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full max-w-screen-xl mt-8">
          <div className="w-full md:w-1/2 p-4 md:h-[40vh] flex flex-col justify-center items-center">
              <h2 className="text-2xl font-semibold mb-2 text-[#b899ff]">Commands</h2>
              <p className="text-lg text-gray-300 text-center">
                Wrld has around 15+ commands dedicated to MX Bikes itself, and another about 10 for misc
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4 md:h-[40vh] flex flex-col justify-center items-center">
              <img src="https://freepngimg.com/thumb/symbol/63241-console-command-line-icons-terminal-computer-linux-interface.png" alt="Image 2" className="w-3/4 h-auto md:w-1/2 md:h-auto" />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full max-w-screen-xl mt-8">
          <div className="w-full md:w-1/2 p-4 md:h-[40vh] flex justify-center items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/5269/5269970.png" alt="Image 3" className="w-3/4 h-auto md:w-1/2 md:h-auto" />
          </div>
          <div className="w-full md:w-1/2 p-4 md:h-[40vh] flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold mb-2 text-[#b899ff]">Need Help?</h2>
            <p className="text-lg text-gray-300 text-center">
              Join our discord and ask your questions that you need in order for the bot to be more fun and useful to you and your community!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
