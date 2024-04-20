import Header from '../components/common/Header';
import './_HeroSection.scss';

const HeroSection = ({type}) => {
	return (
		<section className={`${type}`}>
			<Header/>
		</section>
	)
};

export default HeroSection;