import Header from '../header/header'
import SideBar from '../SideBar/Sidebar'
import SubHeader from '../SubHeader/SubHeader';
import './Home.css'
import Videos from '../videos/vidoes';

function Home(){

    return(
        <div className='home'>
        <Header />
        <div className='sider'>
        <SideBar />
        <div className='main-content'>
            <div className='subheader-wrap'>
        </div>
        <Videos className='videos' />
        </div>
        </div>
        
        </div>
    )
}

export default Home;