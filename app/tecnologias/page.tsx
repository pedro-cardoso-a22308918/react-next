'use client'
import React from 'react';
import tecnologias from '@/private/data/tecnologias.json';
import Card from '../../components/Card/Card'; 
import { Produto } from '@/app/models/interfaces';
import styles from '../../components/Card/Card.module.css';

//TODO: Por resolver nao encontra as imagens
export default function Tecnologias() {
  return (
    <div>
      <h1 className="text-center">Tecnologias que Aprendi</h1>
      <div className="grid-container">
        {JSON.parse(JSON.stringify(tecnologias)).map((tecnologias: Produto) => (

          <Card key={tecnologias.id} produto={tecnologias} />

        ))} 
      </div>
    </div>
  );
};