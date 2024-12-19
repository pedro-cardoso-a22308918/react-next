"use client";

import Card from '@/components/Card/Card'; 
import produtosData from '@/private/data/produtos.json'; 
import  { Produto } from "@/app/models/interfaces";
import styles from '../../components/Card/Card.module.css';
import { use, useEffect, useState } from 'react';

export default function Produtos() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<Produto[]>([]);
  const [cart, setCart] = useState<Produto[]>([]);

  //falta terminar a parte do carrinho
  useEffect(() =>{
    const newFilteredData = produtosData.filter((Produto) => {
      return Produto.title.toLowerCase().includes(search.toLowerCase())
    })
    setFilteredData(newFilteredData);

  }, [search,produtosData])

  return (
    <div>
      <h1 className='text-center'>Produtos</h1>
      <div className="grid-container">
        <input
          className={styles['search-Product']}
          placeholder="Pesquisar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {filteredData.map((produto: Produto) => (
          <Card key={produto.id} produto={produto} />
        ))}
      </div>
      <div className={styles.cesto}>
        <h1 className={styles['product-cesto']}>Preço Total: 0.00€</h1>
      </div>
    </div>
  );
}
