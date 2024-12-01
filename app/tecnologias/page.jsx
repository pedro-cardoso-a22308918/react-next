import React from 'react';
import tecnologias from '@/private/data/tecnologias.json';
import Card from '@/components/Card/Card';
const Tecnologias = () => {
  return (
    <div>
      <h1 id="title-page">Tecnologias que Aprendi</h1>
      <div className="grid-container">
        {tecnologias.map((tecnologia) => (
          <Card
            key={tecnologia.title}
            title={tecnologia.title}
            description={tecnologia.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Tecnologias;
