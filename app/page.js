'use client'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const particlesScript = document.createElement('script');
    particlesScript.src = '/particle_stuff/particles.js'; // Adjust the path based on your directory structure
    particlesScript.async = true;
    document.body.appendChild(particlesScript);

    const appScript = document.createElement('script');
    appScript.src = '/particle_stuff/app.js'; // Adjust the path based on your directory structure
    appScript.async = true;
    document.body.appendChild(appScript);
  }, []);

  return (
    <main className="min-h-screen">
      <div className="relative h-full overflow-hidden">
        <div id="particles-js" className="fixed inset-0 z-0"></div>
        <div className="text-center relative z-10 mt-20">
          <h1 className="text-8xl font-bold">Wrld</h1>
          <span className="text-slate-400">Enhancing your MX Bikes experience</span>
        </div>
        <div className="flex flex-row items-center justify-center mt-5 relative z-10">
          <button className="bg-[#5095cc] hover:bg-[#1e5f94] transition duration-300 text-white px-4 py-2 rounded-full flex items-center space-x-2"
          onClick={() => window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1123436273756033074&permissions=264192&scope=applications.commands%20bot"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            <span>Invite</span>
          </button>

          <button className="bg-[#5095cc] hover:bg-[#1e5f94] transition duration-300 text-white px-4 py-2 rounded-full flex items-center space-x-2 ml-4"
          onClick={() => window.location.href = "https://discord.gg/2vEqW5GfHU"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            <span>Support</span>
          </button>
        </div>
        <div className='text-center mt-80'>
          <span className='text-slate-600'>Not sure what to do with all this extra space, just invite wrld to your servers lol</span>
        </div>
      </div>
    </main>
  );
}
