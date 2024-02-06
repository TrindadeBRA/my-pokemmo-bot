import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Home = () => {
    const [progress, setProgress]: any = useState('');
    const [results, setResults]: any = useState([]);
    const [botRunning, setBotRunning]: any = useState(false);

    useEffect(() => {
        // Conectar-se ao servidor Socket.IO
        const socket = io('http://localhost:3000');

        // Lidar com o evento de progresso
        socket.on('progress', (data) => {
            setProgress(data.message);
        });

        // Lidar com o evento de resultado
        socket.on('result', (data) => {
            setResults((prevResults: any) => [...prevResults, data]);
        });

        // Lidar com o evento de conclusão
        socket.on('completion', () => {
            setProgress('Bot concluído! - Informado pelo WebSocket');
            setBotRunning(false); // Define o estado do bot como não em execução após a conclusão
        });

        // Cleanup
        return () => {
            socket.disconnect();
        };
    }, []);

    const runBot = async () => {
        // Emitir um evento para iniciar o bot
        setBotRunning(true); // Define o estado do bot como em execução
        const response = await fetch('http://localhost:3000/api/roadmaps/test');
        if (!response.ok) {
            console.error('Erro ao iniciar o bot.');
            setBotRunning(false); // Define o estado do bot como não em execução em caso de erro
            return;
        }
        console.log('Bot iniciado com sucesso!');
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-3">My PokeMMO BOT</h1>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={runBot} disabled={botRunning}>Executar Bot</button>
            <p>Progresso: {progress}</p>
            <ul>
                {results.map((result: any, index: any) => (
                    <li key={index}>{result.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
