import prevButton from '../../img/icon-angle-left.svg';
import nextButton from '../../img/icon-angle-right.svg';
import './_Slider.scss';

const Slider = ({ prevButtonHandler, nextButtonHandler }) => {

	return (
		<div className='slider'>
			<button className='slider__button' onClick={prevButtonHandler}>
				<img src={prevButton} alt='previous slide' />
			</button>
			<button className='slider__button' onClick={nextButtonHandler}>
				<img src={nextButton} alt='next slide' />
			</button>
		</div>
	)

};

export default Slider;