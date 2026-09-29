import videos from '../data/videos'
import { UserCircle } from 'lucide-react';
import './videos.css'

function Videos(){
    return(
        <div className='videos'>
        {videos.map((data)=>(
            <div className='video_text'>
            <div key={data.id} className='video'>
                <a href={data.videoUrl} target="_blank" rel="noreferrer">
                    <img src={data.thumbnail} alt={data.title} />
                </a>         
                <div className='decription'>
            <UserCircle className='usercircle' />
             <p>{data.title}</p>
         </div>
         <div className='text'>
         <p>{data.channel}</p>
         <p>{data.views}</p>
         <p>{data.uploaded}</p>
         </div>
             </div>
             </div>
        ))}
        </div>
    )
}

export default Videos;
