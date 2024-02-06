// pages/index.tsx
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [botStatus, setBotStatus] = useState<string | null>(null);

  useEffect(() => {
    const runBot = async () => {
      try {
        const response = await fetch('/api/kanto-island5-money');
        const data = await response.json();
        setBotStatus(data.message);
      } catch (error) {
        console.error(error);
        setBotStatus('Erro ao executar o bot.');
      }
    };

    // Chama a função ao carregar o componente
    runBot();
  }, []); // O array vazio assegura que o useEffect é executado apenas uma vez no montar do componente

  return (
    <div>
      <h1>Next.js Mouse Bot</h1>
      {botStatus !== null ? (
        <p>Status do Bot: {botStatus}</p>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Home;
