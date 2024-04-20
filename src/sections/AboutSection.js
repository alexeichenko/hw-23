import aboutDarkImg from '../img/image-about-dark.jpg';
import aboutLightImg from '../img/image-about-light.jpg';
import AboutUsArticle from '../components/articles/AboutUsArticle';
import './_AboutSection.scss';
const AboutSection = () => {

	return (
		<section className='about-section'>
			<div className='about-section__picture'>
				<img src={aboutDarkImg} alt="dark design of about section" className='about-section__img' />
			</div>
			<AboutUsArticle />
			<div className='about-section__picture'>
				<img src={aboutLightImg} alt="light design of about section" className='about-section__img' />
			</div>
		</section>
	)

};

export default AboutSection;