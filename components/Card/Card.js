import React from 'react';
import styles from './Card.module.css'; 

const Card = ({ produto, adicionarAoCesto, removerDoCesto }) => {
  return (
    <section className={styles['grid-item']}> {}
      <h1 className={styles['title-product']}>{produto.title}</h1> {}
      <img src={produto.image} alt={produto.title} />
      <p>Custo total: {produto.price}€</p>
      <p className={styles['description-product']}>{produto.description}</p> {}
      
      <button onClick={() => adicionarAoCesto(produto)}>+ Adicionar ao cesto</button>
      <button onClick={() => removerDoCesto(produto)}>- Remover do cesto</button>
    </section>
  );
};

export default Card;
