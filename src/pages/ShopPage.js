import HeroSection from '../sections/HeroSection';
import ShopArticle from '../components/articles/ShopArticle';
const ShopPage = () => {

	return (

		<div className="wrapper">
			<main className="shop-main">
				<HeroSection type="shop-hero" />
				<ShopArticle />
			</main>
		</div>
	);

};

export default ShopPage;