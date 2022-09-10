import React, { useContext } from 'react';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	};

	return (
		<div className={styles.ProductItem}>
			<Image loader={()=> product.images[0]} width="100%" height="100%" layout="responsive" src={product.images[0]} alt={product.title} />
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} role='presentation' >
					<Image src={addToCartImage} alt="addToCartImage" />
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;
