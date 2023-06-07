import styles from '../styles/Home.module.css';
import PageLayout from '../components/PageLayout';
import Image from 'next/image';

export default function Home({ articles }) {
	return (
		<PageLayout title='NewsApp - Home'>
			<div className={styles.container}>
				{articles.length ? (
					articles.map((article, index) => (
						<div key={article.title}>
							<Image
								src={article.urlToImage}
								alt={`Image for the article ${article.title}`}
								width={450}
								height={300}
								priority={index < 2}
							/>
							<h2>{article.title}</h2>
							<p>{article.description}</p>
						</div>
					))
				) : (
					<h1>No existen artículos</h1>
				)}
			</div>
		</PageLayout>
	);
}

// N requests -> Se ejecuta 1 vez en build time (o para refrescar la página)

export async function getStaticProps() {
	const response = await fetch(
		'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0d20f170a5804240b68cb4c4dd8d12ce',
	);
	const { articles } = await response.json();
	return {
		props: {
			articles,
		},
	};
}
// N requests -> Se ejecuta N veces
// para datos que necesitas que sean MUY live
// tiene demasiados datos dinámicos

// export async function getServerSideProps(context) {
// 	const response = await fetch(
// 		'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0d20f170a5804240b68cb4c4dd8d12ce',
// 	);
// 	const { articles } = await response.json();
// 	return {
// 		props: {
// 			articles,
// 		},
// 	};
// }
