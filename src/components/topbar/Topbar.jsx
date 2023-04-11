import email from  './../../assests/icons/email.png';
import person from  './../../assests/icons/person.png'
import './topbar.scss'
const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"topbar "+ (menuOpen && "active")}>
      <div className='wrapper'>
          <div className="left">
            <a href='#intro' className='logo'>genius</a>
            <div className="itemContainer">
                 <img className='icon' style={{height:"20px",width:"20px"}} src={person}/>
                 <span> +39 3515765995</span>
            </div>
            <div className="itemContainer">
                 <img className='icon' style={{height:"20px",width:"20px"}} src={email}/>
                 <span> seyedhassan.hoseiny@gmail.com</span>
            </div>
          </div>
          <div className='right'>
              <div className="hamburger" onClick={() => {setMenuOpen(!menuOpen)}}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Topbar
