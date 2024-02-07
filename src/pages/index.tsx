// pages/index.tsx
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [botStatus, setBotStatus] = useState<string | null>(null);

  const runBot = async () => {
    try {
      const response = await fetch('/api/functions/clickInitial');
      const data = await response.json();

      setBotStatus(data.message);

      // Se houver logs, você pode exibi-los em tempo real, se necessário
      if (data.logs) {
        data.logs.forEach((log: string) => {
          console.log("Log:", log);
        });
      }

    } catch (error) {
      console.error(error);
      setBotStatus('Erro ao executar o bot.');
    }
  };

  // Função para fazer polling a cada 5 segundos (ou outro intervalo desejado)
  const startPolling = () => {
    setInterval(() => {
      runBot();
    }, 500); // 5000 milissegundos = 5 segundos
  };

  useEffect(() => {
    startPolling();
  }, []); // Executa uma vez quando o componente é montado

  return (
    <div>
      <h1>Next.js Mouse Bot</h1>
      <button onClick={runBot}>Executar Bot</button>
      {botStatus && <p>Status do Bot: {botStatus}</p>}
    </div>
  );
};

export default Home;
