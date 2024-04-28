import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';

const Logo = () => {

	return <div className='logo'>
		<Link className='logo__link' to='/home'><img src={logo} alt='room' className='logo__icon' /></Link>
	</div>

};

export default Logo;