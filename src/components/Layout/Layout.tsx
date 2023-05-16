import { Inter, Roboto_Mono } from 'next/font/google';
import { Fragment } from 'react';
import Header from '../Header/Header';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-mono',
});

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<Fragment>
			<Header />
			<div
				className={`${inter.variable} ${robotoMono.variable} mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 font-sans lg:px-8`}>
				{children}
			</div>
		</Fragment>
	);
};

export default Layout;
