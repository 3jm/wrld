export const metadata = {
  title: 'Wrld | About',
  description: 'About wrld and it\'s intensions.',
}
import Link from 'next/link'
import styles from '../layout.module.css'
export default function Home() {
  return (
    <main className="flex justify-between flex-col items-center p-12">
      <div className="flex justify-between flex-col items-center">
      <Link href="/" className='w-48 h-auto mb-2'>
         <img
           src="https://cdn.discordapp.com/avatars/1123436273756033074/dd4f4dbc252c76b0e25db45557e7a016.png?size=1024"
           alt="Logo"
         />
       </Link>
        <h1 className="text-center text-7xl mb-2 font-sans font-bold">About <wrld className="text-red-500	">Wrld</wrld></h1>
        <div className="w-5/6 text-center">
          <h3 className="text-center block break-normal"></h3><wrld className="text-red-500	">Wrld </wrld>is a bot that I designed as a small project to consume some of my freetime as I was getting bored with things to do. Once I started building the basic features of the bot I decided to show it off to Pepiti & others in the MX Bikes Community Discord server. This marks <wrld className="text-red-500	">Wrld </wrld>'s birthday! 06/29/2023. Almost immediately some people thought the bot was cool, and I thought it was nice that others thought it was a cool thing so I continued. About 2 weeks later I posted some more pictures & videos of the bot and it gained more attention by others and sure enough, 07/12/2023, <wrld className="text-red-500	">Wrld </wrld> had made it into the official MX Bikes Community Discord server!
          <br /><br />
          <div className='flex justify-between flex-col items-center '>
            <hr className='w-64'/>
          </div>
          <br />
          <h3 className="text-center block break-normal">As of now <wrld className="text-red-500	">Wrld </wrld> is slowly growing, serving around <wrld className="text-red-500	">20+</wrld> servers and <wrld className="text-red-500	">26k+ </wrld> users!</h3>
        </div>
      </div>
    </main>
  );
}