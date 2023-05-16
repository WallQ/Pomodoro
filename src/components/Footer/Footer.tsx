import { Fragment } from 'react';

const Footer: React.FunctionComponent = ({}) => {
	return (
		<Fragment>
			<footer className='flex w-full flex-col items-center justify-center gap-y-2 py-6'>
				<small className='text-sm font-normal text-white'>
					&copy; {new Date().getFullYear()} Pomodoro. All Rights
					Reserved.
				</small>
				<small className='text-sm font-normal text-white'>
					Designed by&nbsp;
					<a
						href='https://wallq.github.io/Portfolio/'
						target='_blank'
						rel='noreferrer'
						className='text-lust hover:opacity-75'>
						Sérgio Félix
					</a>
				</small>
			</footer>
		</Fragment>
	);
};

export default Footer;
