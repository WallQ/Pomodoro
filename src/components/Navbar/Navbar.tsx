import {
	ArrowLeftOnRectangleIcon,
	UserCircleIcon,
} from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';

const Navbar: React.FunctionComponent = ({}) => {
	const { data: sessionData } = useSession();

	return (
		<Fragment>
			<nav className='flex w-full flex-row items-center justify-between rounded-full py-6'>
				<Link
					href='/'
					className='flex flex-row items-center justify-center gap-x-3 text-lg font-bold text-white hover:opacity-75'>
					<Image
						src='/assets/Logo/32.svg'
						alt='Pomodoro'
						width={32}
						height={32}
					/>
					Pomodoro
				</Link>
				{sessionData ? (
					<button type='button'>
						<ArrowLeftOnRectangleIcon
							className='h-8 w-8 text-white'
							aria-hidden='true'
						/>
					</button>
				) : (
					<Link href='/auth/sign-in' className='hover:opacity-75'>
						<UserCircleIcon
							className='h-8 w-8 text-white'
							aria-hidden='true'
						/>
					</Link>
				)}
			</nav>
		</Fragment>
	);
};

export default Navbar;
