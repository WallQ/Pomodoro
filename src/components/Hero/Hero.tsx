import { Fragment } from 'react';
import {
	ChevronRightIcon,
	ArrowLongRightIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import Tomato from '~/components/Tomato/Tomato';

const Hero: React.FunctionComponent = ({}) => {
	return (
		<Fragment>
			<div className=''>
				<div className='grid grid-cols-2 grid-rows-1 gap-x-20'>
					<div className='flex flex-col items-start justify-between space-y-8'>
						<Image
							src='/assets/Logo/48.svg'
							alt='Pomodoro'
							width={48}
							height={48}
						/>
						<Link
							href='/'
							className='flex flex-row items-center justify-between space-x-4'>
							<span className='rounded-full bg-white px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-lust'>
								What&apos;s new
							</span>
							<span className='flex flex-row items-center justify-between space-x-1 text-sm font-medium text-white'>
								<span>Just shipped v1.0</span>
								<ChevronRightIcon
									className='h-5 w-5'
									aria-hidden='true'
								/>
							</span>
						</Link>
						<div className='flex flex-col items-start justify-between space-y-4'>
							<h1 className='bg-gradient-to-r from-red-400 to-lust bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl'>
								Stay focused and finish tasks effectively
							</h1>
							<p className='mt-6 text-xl text-gray-400'>
								Master your time and boost productivity with our
								Pomodoro application. Take more time to your
								life by adopting the renowned Pomodoro
								technique. Maximize focus, minimize
								distractions, and achieve a healthy work-life
								balance.
							</p>
						</div>
						<div className='flex flex-row items-center justify-between space-x-4'>
							<Link
								href='/'
								className='items-center rounded border border-transparent bg-lust px-2.5 py-1.5 text-sm font-bold text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2'>
								Get Started
							</Link>
							<Link href='/'>
								<span className='flex flex-row items-center justify-between space-x-1 text-sm font-medium text-white'>
									<span>Learn More</span>
									<ArrowLongRightIcon
										className='h-5 w-5'
										aria-hidden='true'
									/>
								</span>
							</Link>
						</div>
					</div>
					<Tomato />
				</div>
			</div>
		</Fragment>
	);
};

export default Hero;
