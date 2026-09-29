import { House,Clapperboard, History,ListVideo,Clock3,ThumbsUp, Video, Download, Podcast, ShoppingBag,
    Music,
    Film,
    Gamepad2,
    Radio,
    Trophy,
    GraduationCap,
    Shirt,ChevronUp, ChevronDown, Flag  } from 'lucide-react' 
import { FaYoutube } from "react-icons/fa";
import { useState } from 'react';
import './SideBar.css'

function SideBar(){
 const Explore =[
  { name: "Shopping", icon: ShoppingBag },
    { name: "Music", icon: Music },
    { name: "Movies and TV", icon: Film },
    { name: "Playables", icon: Gamepad2 },
    { name: "Live", icon: Radio },
    { name: "Sports", icon: Trophy },
    { name: "Course", icon: GraduationCap },
    { name: "Fashion and Beauty", icon: Shirt },
    { name: "Podcast", icon: Podcast }
 ]
 const [showmore,setShowmore]=useState(false);
 const visible = showmore ? Explore : Explore.slice(0,3);
    return(
        <div className='SideBar'>

            <button className='house'>
                <House className='home-icon' />
                <input 
             className='Home'
             placeholder='Home'
            />
            </button>

           <button className='Clapperboard'>
                <Clapperboard className='Clapperboard-icon' />
                <p className='shorts'>Shorts</p>
            </button>

            <hr className='horizontal-line'/>

            <div className='section-2'>

              <div className='top'>
               <button className='you'> You 
               <p className='Symbol'>&gt;</p>
               </button>
              </div>

              <button className='history-icon'  onClick={() => window.location.href = "https://www.youtube.com/feed/history"}>
               <History />
               <p className='history'>History</p>
              </button>

              <button className='playlist-icon'>
               <ListVideo />
               <p className='playlist'>Playlists</p>
              </button>

                <button className='watchlater-icon'>
               <Clock3 />
               <p className='watchlater'>Watchlater</p>
              </button>

              <button className='thumbsup-icon'>
               <ThumbsUp />
               <p className='thumbsup'>Like Videos</p>
              </button>

               <button className='video-icon'>
               <Video />
               <p className='video'>Your Videos</p>
              </button>

              <button className='download-icon'>
               <Download />
               <p className='download'>Downloads</p>
              </button>

               <hr className='horizontal-line'/>

            </div>

             <div className='section-3'>
                <p >More from YouTube</p>
                <button className='youtube'>
                 <FaYoutube className='youtube-icon' />
                 <p className='youtube-text'>Try premium for $0</p>
                </button>

                <button className='youtube'>
                <FaYoutube className='youtube-icon' />
                <p className='youtube-text'>YouTube Kids</p>
              </button>
              </div>
            <hr className='horizontal-line'/>

            <div className='section-4'>
                <p>Explore</p>
                {visible.map((data)=>
                {
                 const Icon = data.icon;
                 return(
                     <button className='Explore'> 
                     <Icon />
                     {data.name}
                     </button>
                 )
})}
             <button className="Show-icon" onClick={()=>setShowmore(!showmore)}>
               <p>{showmore ? <ChevronUp />  : <ChevronDown /> }</p>
                {showmore ? "   Show Less" : "   Show More"}
             </button>
            </div>

            <hr className='horizontal-line'/>

        <div className='section-5'>
            <button className='report'>
         <Flag />
         <p>Report History</p>
         </button>
        </div>
        </div>
    )
}

export default SideBar;