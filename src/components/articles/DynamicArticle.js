import FetchedArticle from "./FetchedArticle";
import Slider from '../slider/Slider';
import useArticle from '../../hooks/useArticle';
import { useState } from 'react';
import './_Article.scss';
import './_DynamicArticle.scss';

const DynamicArticle = () => {

	const [articleID, setArticleID] = useState(1);

	const sliderPreviousButtonBehavior = () => {
		setArticleID(prev => Math.max(prev - 1, 1));
	};

	const sliderNextButtonBehavior = () => {
		setArticleID(prev => prev + 1);
	};

	const { loading, article } = useArticle(articleID);

	return (

		<section className='dynamic-article'>
			{loading ? <h1 className='dynamic-article__loading'>Loading...</h1> : (
				<>
					<FetchedArticle title={article.title} body={article.body} />
					<Slider prevButtonHandler={sliderPreviousButtonBehavior} nextButtonHandler={sliderNextButtonBehavior} />
				</>
			)}
		</section>
	)

};

export default DynamicArticle;