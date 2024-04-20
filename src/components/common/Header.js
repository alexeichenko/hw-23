import Logo from './Logo';
import Burger from './Burger';
import './_Header.scss';

const Header = () => {

	return (
	
		<header className="header">
			<Logo/>
			<Burger/>
		</header>
	
	)

};

export default Header;