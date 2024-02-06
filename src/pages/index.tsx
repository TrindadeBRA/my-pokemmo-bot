// pages/index.tsx
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [botStatus, setBotStatus] = useState<string | null>(null);

  // const [logs, setLogs] = useState<string[]>([]);

  const runBot = async () => {
    try {
      const response = await fetch('/api/roadmaps/test');
      const data = await response.json();

      setBotStatus(data.message);
      // setLogs(data.logs);
    } catch (error) {
      console.error(error);
      setBotStatus('Erro ao executar o bot.');
    }
  };

  // useEffect(() => {
  //   // Aqui você pode processar e exibir os logs conforme necessário
  //   console.log("Logs:", logs);
  // }, [logs]);

  return (
    <div>
      <h1>Next.js Mouse Bot</h1>
      <button onClick={runBot}>Executar Bot</button>
      {botStatus && <p>Status do Bot: {botStatus}</p>}
    </div>
  );
};

export default Home;

