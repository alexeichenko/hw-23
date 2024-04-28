import './_Nav.scss';
import { Link } from "react-router-dom";

const Nav = ({state}) => {

	const navLinks = [
		{name: 'home' , url: '/home'},
		{name: 'shop' , url: '/shop'},
		{name: 'about' , url: '/about'},
		{name: 'contact' , url: '/contact'},
	];

	return (
	
		<nav className={`nav ${state}`}>
			<ul className='nav__list'>
				{navLinks.map(({name, url}) => (
					<li key={name} className='nav__item'><Link to={url} className='nav__link'>{name}</Link></li>
				))}
			</ul>
		</nav>
	
	)

};

export default Nav;