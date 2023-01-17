const LogoutIcon = ({ className = '' }) => {
	return (
		<div className={className}>
			<svg
				width='16'
				height='20'
				viewBox='0 0 16 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M8 10H15M15 10L12 13M15 10L12 7M15 4V3C15 2.46957 14.7893 1.96086 14.4142 1.58579C14.0391 1.21071 13.5304 1 13 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17V16'
					stroke='#282828'
					strokeOpacity='0.8'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	);
};

export default LogoutIcon;
