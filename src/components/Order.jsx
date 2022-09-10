import React from 'react';
import styles from '@styles/Order.module.scss';
import  flechita from '@icons/flechita.svg';
import Image from 'next/image';

const Order = () => {
	return (
		<div className={styles.Order}>
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<Image  src={flechita} alt="arrow" />
		</div>
	);
};

export default Order;
