import React from 'react';
import Logo from '../Assets/Images/logo.svg';

const SplashScreen = () => {
	return (
		<div
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				textAlign: 'center',
			}}
		>
			<img src={Logo} alt="logo" className="w-50" />
			<h2 className="mt-2">Indeplot</h2>
		</div>
	);
};

export default SplashScreen;
