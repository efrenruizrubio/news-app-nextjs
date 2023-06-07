import Head from 'next/head';
import styles from '../styles/PageLayout.module.css';
import Link from 'next/link';

export default function PageLayout({ children, title = 'NewsApp' }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta
					name='description'
					content='NewsApp - The best app to read news'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header className={styles.header}>
				<div>
					<Link href='/'>📰 newspaper</Link>
				</div>
				<div>
					<Link href='/about'>About</Link>
				</div>
			</header>
			<main>{children}</main>
		</>
	);
}
