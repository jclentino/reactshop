import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';
import Image from 'next/image';


const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	};

	return (
		<div className={styles.OrderItem}>
			<figure>
				{/* <Image loader={()=> product.images[0]}  width={400} height={400} layout="responsive" src={product?.images[0]} alt={product?.title} /> */}
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image src={close} alt="close" onClick={() => handleRemove(product)} />
		</div>
	);
};

export default OrderItem;
