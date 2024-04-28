import { useEffect, useRef, useState } from "react";
import getArticles from '../services/getArticles';

const useArticle = (id) => {
	const URL = useRef('https://jsonplaceholder.typicode.com/posts');
	const [loading, setLoading] = useState(true);
	const [article, setArticle] = useState({});

	useEffect(() => {
			const fetchArticle = async () => {
					try {
							const data = await getArticles(`${URL.current}/${id}`);
							setArticle(data);
					} catch (error) {
							console.error("Error fetching article:", error);
					} finally {
							setLoading(false);
					}
			};

			fetchArticle();
	}, [id]);

	return { loading, article };
};

export default useArticle;