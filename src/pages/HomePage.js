import HeroSection from '../sections/HeroSection';
import DynamicArticle from '../components/articles/DynamicArticle';
import AboutSection from '../sections/AboutSection';
import './_Pages.scss';

const HomePage = () => {

	return (

		<div className="wrapper">
			<main className="home-main">
				<HeroSection type="home-hero" />
				<DynamicArticle/>
			</main>
			<footer className="home-footer">
				<AboutSection />
			</footer>
		</div>

	)

};

export default HomePage;