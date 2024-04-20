import HeroSection from "../sections/HeroSection";
import AboutUsArticle from '../components/articles/AboutUsArticle';

const AboutPage = () => {

	return (
		<div className="wrapper">
			<main className="about-main">
				<HeroSection type="about-hero" />
				<AboutUsArticle />
			</main>
		</div>
	)

};

export default AboutPage;