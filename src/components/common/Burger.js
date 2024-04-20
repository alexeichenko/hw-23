import openBurgerIcon from '../../img/icon-hamburger.svg';
import closeBurgerIcon from '../../img/icon-close.svg';
import { useState } from 'react';
import Nav from './Nav';
import './_Burger.scss';

const Burger = () => {

	const [active, setActive] = useState(false);

	const burgerStateHandler = () => {
		setActive(!active)
	};

	return (
		<div className='burger'>
			<button className='burger__button' onClick={burgerStateHandler}>
				{active ? <img src={closeBurgerIcon} alt='close menu' /> : <img src={openBurgerIcon} alt='open menu' />}
			</button>
			<Nav state={active && 'active'} />
		</div>
	)

};

export default Burger;