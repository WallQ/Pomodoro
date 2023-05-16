import Head from 'next/head';

const Header: React.FunctionComponent = ({}) => {
	return (
		<Head>
			<title>Pomodoro</title>
			<meta charSet='UTF-8' />
			<meta name='author' content='Sérgio Félix' />
			<meta
				name='description'
				content='Pomodoro is a productivity app designed for your work and study. Stay focused and finish tasks effectively. Take more time to your life.'
			/>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1.0'
			/>
			<meta property='og:url' content='' />
			<meta property='og:type' content='website' />
			<meta property='og:title' content='Pomodoro' />
			<meta
				property='og:description'
				content='Pomodoro is a productivity app designed for your work and study. Stay focused and finish tasks effectively. Take more time to your life.'
			/>
			<meta property='og:image' content='' />
			<meta name='twitter:card' content='summary_large_image' />
			<meta property='twitter:domain' content='' />
			<meta property='twitter:url' content='' />
			<meta name='twitter:title' content='Pomodoro' />
			<meta
				name='twitter:description'
				content='Pomodoro is a productivity app designed for your work and study. Stay focused and finish tasks effectively. Take more time to your life.'
			/>
			<meta name='twitter:image' content='' />
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/apple-touch-icon.png'
			/>
			<link rel='icon' href='/favicon.ico' />
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='192x192'
				href='/android-chrome-192x192.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/favicon-16x16.png'
			/>
			<link rel='manifest' href='/site.webmanifest' />
			<link
				rel='mask-icon'
				href='/safari-pinned-tab.svg'
				color='#e22225'
			/>
			<meta name='apple-mobile-web-app-title' content='Pomodoro' />
			<meta name='application-name' content='Pomodoro' />
			<meta name='msapplication-TileColor' content='#211d2b' />
			<meta
				name='msapplication-TileImage'
				content='/mstile-144x144.png'
			/>
			<meta name='theme-color' content='#211d2b' />
		</Head>
	);
};

export default Header;
