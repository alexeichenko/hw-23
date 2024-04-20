import arrowIcon from '../../img/icon-arrow.svg';
const FetchedArticle = ({title, body}) => {

	return (
	
		<article className="article flow container">
			<h1>{title}</h1>
			<p>{body}</p>
			<a className='shop-link' href='/shop'>Shop now<img src={arrowIcon} alt='shop link'/></a>
		</article>
	
	)

};

export default FetchedArticle;