import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const Error404: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Finance Tracker - 404</title>
			</Head>
			<div className='flex w-full flex-1 flex-col items-center justify-center gap-y-4'>
				<h1 className='text-5xl font-extrabold leading-normal text-slate-900 md:text-8xl'>
					Error&nbsp;
					<span className='text-amber-500'>404</span>!
				</h1>
				<p className='text-2xl font-medium leading-normal text-slate-900'>
					Oops! It seems you&apos;ve taken a wrong turn in your
					financial tracking journey.
				</p>
				<Link
					href='/'
					className='flex flex-row items-center justify-center gap-x-2 text-base font-bold text-amber-500 hover:opacity-75'>
					Back to home page
					<ArrowLongRightIcon
						className='h-6 w-6'
						aria-hidden='true'
					/>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Error404;
