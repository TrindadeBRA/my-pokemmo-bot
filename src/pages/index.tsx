// pages/index.tsx
import { useEffect, useState } from 'react';

const Home: React.FC = () => {

  useEffect(() => {
    const handleClick = (event) => {
      const { clientX, clientY } = event;
      console.log('Coordenadas do clique:', { x: clientX, y: clientY });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  
  const [botStatus, setBotStatus] = useState<string | null>(null);

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



  return (
    <div>
      <h1>Next.js Mouse Bot</h1>
      <button onClick={runBot}>Executar Bot</button>
      {botStatus && <p>Status do Bot: {botStatus}</p>}
    </div>
  );
};

export default Home;
