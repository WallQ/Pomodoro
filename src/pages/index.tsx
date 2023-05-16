import { type NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';

import Hero from '~/components/Hero/Hero';

const Home: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Pomodoro - Homepage</title>
			</Head>
			<Hero />
		</Fragment>
	);
};

export default Home;
