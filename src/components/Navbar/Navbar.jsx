import './Navbar.css'
import logo from '../../assets/logo.svg'
import profile from '../../assets/profile.png';
import bell from '../../assets/bell.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <img src={logo} alt="logo" />
            <ul>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by languages</li>
            </ul>

        </div>
        <div className='navbar-right'>
            <img src="" alt="" />
            <p>Child</p>
            <img className='icons' src={bell} alt="" />
            <div className="profile">
                <img src={profile} alt="" />
                <div className="dropdown">
                    <p>Sign out</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar