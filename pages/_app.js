import '../styles/globals.css';
import { createContext } from 'react';

const ThemeContext = createContext('dark');

function MyApp({ Component, pageProps }) {
	return (
		<ThemeContext.Provider value='dark'>
			<Component {...pageProps} />;
		</ThemeContext.Provider>
	);
}

export default MyApp;
