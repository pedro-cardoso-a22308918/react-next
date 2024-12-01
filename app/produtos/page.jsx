"use client";

import { useEffect } from 'react';
import Card from '../../components/Card/Card'; 
import produtosData from '@/private/data/produtos.js'; 


export default function Produtos() {
  // Função para adicionar produto ao cesto
  function adicionarAoCesto(produto) {
    const cestoProdutos = JSON.parse(localStorage.getItem('cestoProdutos')) || [];
    cestoProdutos.push(produto);
    localStorage.setItem('cestoProdutos', JSON.stringify(cestoProdutos));
    calcularPrecoTotal();
  }

  // Função para remover produto do cesto
  function removerDoCesto(produto) {
    const cestoProdutos = JSON.parse(localStorage.getItem('cestoProdutos')) || [];
    const produtosRestantes = cestoProdutos.filter(item => item.id !== produto.id);
    localStorage.setItem('cestoProdutos', JSON.stringify(produtosRestantes));
    calcularPrecoTotal();
  }

  // Função para calcular o preço total
  function calcularPrecoTotal() {
    const cestoProdutos = JSON.parse(localStorage.getItem('cestoProdutos')) || [];
    const precoTotal = cestoProdutos.reduce((total, produto) => total + produto.price, 0);
    
    const precoTotalElemento = document.querySelector('.product-cesto');
    if (precoTotalElemento) {
      precoTotalElemento.textContent = `Preço Total: ${precoTotal.toFixed(2)}€`;
    }
  }

  useEffect(() => {
    // Atualiza o cesto ao carregar a página
    const cestoProdutos = JSON.parse(localStorage.getItem('cestoProdutos')) || [];
    cestoProdutos.forEach(produto => {
      console.log('Produto no cesto:', produto);
    });
    calcularPrecoTotal();
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <div className="grid-container">
        {produtosData.map(produto => (
          <Card 
            key={produto.id} 
            produto={produto} 
            adicionarAoCesto={adicionarAoCesto} 
            removerDoCesto={removerDoCesto} 
          />
        ))}
      </div>
      <div className="cesto">
        <h1 className="product-cesto">Preço Total: 0.00€</h1>
      </div>
    </div>
  );
}
