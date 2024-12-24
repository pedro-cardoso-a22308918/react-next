import React from 'react';
import styles from './Card.module.css'; 
import { Produto } from '@/app/models/interfaces';

interface CardProps {
  produto: Produto;
  addToCart: (produto: Produto) => void;
}

const Card: React.FC<CardProps> = ({ produto, addToCart }) => {
  return (
    <section className={styles['grid-item']}> {}
      <h1 className={styles['title-product']}>{produto.title}</h1> {}
      <img src={produto.image} alt={produto.title} />
      
      {produto.type !== 'technology' && (
        <p>Custo total: {produto.price}€</p>
      )}
      
      <p className={styles['description-product']}>{produto.description}</p> {}

      <button className={styles['btn-add']} onClick={() => addToCart(produto)}>+Adicionar ao cesto</button>

    </section>
  );
};

export default Card;
