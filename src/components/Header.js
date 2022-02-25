import Logo from '../images/Logo.png'
import '../css/header.css'
const h1={margin:'20px',color:'grey'}
const Header=()=>
{
    return(
        <div className="header">
        <div className="header-t">
          <div className="header-logo">
            <a href="/" className="header-logo"><img src={Logo}/></a>
          </div>
          <h1 style={h1}> <i>&ensp;&ensp;&ensp;Manage your daily scrum activities here!</i></h1>
       </div>
</div>    
)
    }

export default Header;