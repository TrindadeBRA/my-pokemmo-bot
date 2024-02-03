import robot from 'robotjs';
import sharp from 'sharp';
import fs from 'fs';

const path = require('path');
const ReadText = require('text-from-image');

var Tesseract = require('tesseract.js');

export default async function handler(req, res) {
    try {
        // Obtenha as coordenadas atuais do mouse
        const { x, y } = robot.getMousePos();

        // Definir a posição inicial do mouse
        const startX = 100;
        const startY = 100;

        // Mover o mouse para a posição inicial
        robot.moveMouse(startX, startY);
        robot.mouseClick();

        // Aguarde um pouco para garantir que a captura da tela seja concluída
        await sleep(1000);

        // Tesseract.recognize(
        //     'https://i.imgur.com/R5uBt1z.png',
        //     'eng',
        //     { logger: m => console.log(m) }
        // ).then(({ data: { text } }) => {
        //     console.log(text);
        // })

        // Capturar a tela na posição atual do mouse
        const screen = robot.screen.capture(0, 860, 450, 150);

        // Verificar se a captura de tela é válida
        if (!screen || !screen.image) {
            throw new Error('Falha ao capturar a tela');
        }

        // Obtenha a data atual
        const dataAtual = new Date();

        // Formate a data para YYYYMMDDHHMMSS
        const dataFormatada = dataAtual.toISOString().replace(/[^0-9]/g, '');


        // Salvar a imagem capturada como JPEG
        const imagesDir = path.resolve(process.cwd(), 'public/images');
        if (!fs.existsSync(imagesDir)) {
            fs.mkdirSync(imagesDir, { recursive: true });
        }

        const imageName = `screenshot_${dataFormatada}.jpg`;
        const imagePath = path.resolve(imagesDir, imageName);
        
        await sharp(Buffer.from(screen.image), { raw: { width: screen.width, height: screen.height, channels: 4 } })
            .jpeg({ quality: 100 })
            .toFile(imagePath);

        // console.log('Imagem salva como JPEG:', imagePath);

        console.log('Imagem salva como JPEG:', imagePath);

        const { data: { text } } = await Tesseract.recognize(
            imagePath,
            'eng',
            // { logger: m => console.log(m) }
        );      

        // console.log(text);

        
        // // Verificar se o texto corresponde ao padrão desejado
        const regex = /\[Battle\] The wild (.+?) fainted!/;
        const match = text.match(regex);

        if (match) {
            const pokemonName = match[1];
            console.log(`o nome do pokemon é ${pokemonName} !`);
            // Faça o que for necessário com o nome do Pokémon encontrado
        } else {
            console.log('Padrão não encontrado.');
        }

        // // Verificar se o texto corresponde ao padrão desejado
        // const regex = /\[Battle\] The wild (.+?) fainted!/;
        // const match = text.match(regex);

        // if (match) {
        //     const pokemonName = match[1];
        //     console.log(`Encontrado: [Battle] The wild ${pokemonName} fainted!`);
        //     // Faça o que for necessário com o nome do Pokémon encontrado
        // } else {
        //     console.log('Padrão não encontrado.');
        // }




        res.status(200).json({ message: 'Bot concluído.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro no bot.' });
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
