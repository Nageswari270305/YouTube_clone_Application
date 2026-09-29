import { Search,Mic,Bell,Plus,UserCircle, Menu} from 'lucide-react'
import { FaYoutube, } from 'react-icons/fa';
import './header.css'


function Header(){
return(
  <div className='header_subheader'>
     <div className='header'>
      <div className='YouTube'>
        <Menu className='menu' />
      <FaYoutube className='you-icon' />
      <p className='text-youtube'>YouTube</p>
      </div>
       <div className="search-box">
    <input
      className="searchbar"
      type="text"
      placeholder="Search"
    />

    <button className="search">
      <Search />
    </button>
  </div>
       <button className='mic'>
        <Mic />
    </button>

    <div className='plus-create'>
      <button className='plus'>
        <Plus className='plus-icon' />
        <input
          className='create'
          type='text'
          placeholder='Create'
        />
      </button>
      <Bell className='bell'/>
      <UserCircle className='User'/>
    </div>
      
      </div>

      <div>
         <div className="SubHeader">
            <button className='All'>
                All
            </button>
            <button className='Music'>
                Music
            </button>
            <button className='Rowan-AtkinsonAll'>
                Rowan Atkinson
            </button>
            <button className='Mixes'>
                Mixes
            </button>
            <button className='Tamil-Cinema'>
                Tamil Cinema
            </button>
            <button className='Webseries'>
                Webseries
            </button>
            <button className='Live'>
                Live
            </button>
            <button className='Rhythms'>
                Rhythms
            </button>
            <button className='Presentations'>
                Presentations
            </button>
             <button className='Recently-uploaded'>
                Recently uploaded
            </button>
             <button className='Watched'>
                Watched
            </button>
        
        </div>
      </div>
  </div>
   
)
}

export default Header;