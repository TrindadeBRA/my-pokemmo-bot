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

        for (let i = 0; i < 10; i++) {

            await sleep(1000);

            await curarPokemons();

            await sairDoPokestop();

            await irAteOSpot();

            //Farm
            for (let i = 0; i < 4; i++) {

                await sleep(1000);

                await sweetScent();

                let canFight = null;

                while (canFight === false || canFight === null) {
                    const imagePath = await gameplayHudPrintAndSave();
                    canFight = await checkIfCanFight(imagePath);
                    await sleep(500);
                }

                await deleteImage(imagePath);

                pressKeyForDuration('z', 50);
                await sleep(1000);
                pressKeyForDuration('z', 50);
                await sleep(1000);
                pressKeyForDuration('z', 50);
                await sleep(1000);
                pressKeyForDuration('z', 50);

                canFight = null;
                while (canFight === false || canFight === null) {
                    const imagePath = await gameplayHudPrintAndSave();
                    canFight = await checkIfCanFight(imagePath);
                    await sleep(500);
                }

                await deleteImage(imagePath);

                pressKeyForDuration('z', 50);
                await sleep(1000);
                pressKeyForDuration('right', 50);
                await sleep(1000);
                pressKeyForDuration('z', 50);
                await sleep(1000);
                pressKeyForDuration('z', 50);

                let isFinalBattle = null;
                while (isFinalBattle === false || isFinalBattle === null) {
                    const imagePath = await gameplayHudPrintAndSave();
                    isFinalBattle = await checkIsFinalBattle(imagePath);
                    await sleep(500);
                }

                await deleteImage(imagePath);
        
                await sleep(5000);

            }

            await voltarAoPokestop();
            await entrarNoPokestop();
        }

        
        res.status(200).json({ message: "Bot concluido!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro no bot.' });
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function curarPokemons() {
    // Curar Pokemons
    for (let i = 0; i < 7; i++) {
        robot.keyTap('z');
        await sleep(1200);
    }
}

async function sairDoPokestop() {
    //Sair do pokecenter
    pressKeyForDuration('down', 50);
    await sleep(1000);
    pressKeyForDuration('down', 50);
    await sleep(1000);
    pressKeyForDuration('down', 50);
    await sleep(1000);
    pressKeyForDuration('down', 50);
    await sleep(1000);
    pressKeyForDuration('down', 50);
    await sleep(1000);
    pressKeyForDuration('down', 50);
    await sleep(2500);
}

async function entrarNoPokestop() {
    //Sair do pokecenter
    pressKeyForDuration('up', 50);
    await sleep(1000);
    pressKeyForDuration('up', 50);
    await sleep(1000);
    pressKeyForDuration('up', 50);
    await sleep(1000);
    pressKeyForDuration('up', 50);
    await sleep(1000);
    pressKeyForDuration('up', 50);
    await sleep(1000);
    pressKeyForDuration('up', 50);
    await sleep(2500);
}

async function irAteOSpot() {
    //Ir até o mato
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);

    await sleep(1000);
    pressKeyForDuration('down', 50);
    await sleep(1000);
    pressKeyForDuration('down', 50);
    await sleep(1000);
    pressKeyForDuration('down', 50);
    await sleep(1000);
    pressKeyForDuration('down', 50);
    await sleep(1000);
    pressKeyForDuration('down', 50);

    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);

    await sleep(1000);
    pressKeyForDuration('up', 50);
    await sleep(1000);
    pressKeyForDuration('up', 50);
    await sleep(1000);
    pressKeyForDuration('up', 50);
    await sleep(1000);
    pressKeyForDuration('up', 50);
    await sleep(1000);
    pressKeyForDuration('up', 50);

    await sleep(2500);
}

async function voltarAoPokestop() {
    //Ir até o pokestop

    await sleep(1000);
    pressKeyForDuration('down', 50);
    await sleep(1000);
    pressKeyForDuration('down', 50);
    await sleep(1000);
    pressKeyForDuration('down', 50);
    await sleep(1000);
    pressKeyForDuration('down', 50);
    await sleep(1000);
    pressKeyForDuration('down', 50);

    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);

    await sleep(1000);
    pressKeyForDuration('up', 50);
    await sleep(1000);
    pressKeyForDuration('up', 50);
    await sleep(1000);
    pressKeyForDuration('up', 50);
    await sleep(1000);
    pressKeyForDuration('up', 50);
    await sleep(1000);
    pressKeyForDuration('up', 50);


    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);

    await sleep(1000);
    pressKeyForDuration('up', 50);


    await sleep(2500);
}

async function sweetScent() {
    // Clique no ultimo pkmn 
    robot.moveMouse(1894, 663);
    robot.mouseClick();
    await sleep(500);

    // Use o ataque 
    robot.moveMouse(1794, 787);
    robot.mouseClick();
    // await sleep(15000);

    await sleep(2500);
}

async function chatPrintAndSave() {
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
    const imagesDir = path.resolve(process.cwd(), 'public/images/chat');
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
    }

    const imageName = `screenshot_${dataFormatada}.jpg`;
    const imagePath = path.resolve(imagesDir, imageName);

    await sharp(Buffer.from(screen.image), { raw: { width: screen.width, height: screen.height, channels: 4 } })
        .jpeg({ quality: 100 })
        .toFile(imagePath);

    // console.log('Imagem salva como JPEG:', imagePath);

    return imagePath;
}

async function gameplayHudPrintAndSave() {
    // Capturar a tela na posição atual do mouse
    const screen = robot.screen.capture(280, 650, 450, 150);

    // Verificar se a captura de tela é válida
    if (!screen || !screen.image) {
        throw new Error('Falha ao capturar a tela');
    }

    // Obtenha a data atual
    const dataAtual = new Date();

    // Formate a data para YYYYMMDDHHMMSS
    const dataFormatada = dataAtual.toISOString().replace(/[^0-9]/g, '');


    // Salvar a imagem capturada como JPEG
    const imagesDir = path.resolve(process.cwd(), 'public/images/hud');
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
    }

    const imageName = `screenshot_${dataFormatada}.jpg`;
    const imagePath = path.resolve(imagesDir, imageName);

    await sharp(Buffer.from(screen.image), { raw: { width: screen.width, height: screen.height, channels: 4 } })
        .jpeg({ quality: 100 })
        .toFile(imagePath);

    // console.log('Imagem salva como JPEG:', imagePath);

    return imagePath;
}

async function pressKeyForDuration(key, duration) {
    return new Promise((resolve) => {
        // Pressionar a tecla
        robot.keyToggle(key, 'down');

        // Aguardar a duração especificada
        setTimeout(() => {
            // Soltar a tecla após a duração
            robot.keyToggle(key, 'up');
            resolve();
        }, duration);
    });
}

async function checkIfCanFight(imagePath) {

    const { data: { text } } = await Tesseract.recognize(
        imagePath,
        'eng'
    );

    // console.log(text);

    const regex = /\bFIGHT\b/;
    const match = text.match(regex);

    return match
}
async function checkIsFinalBattle(imagePath) {

    const { data: { text } } = await Tesseract.recognize(
        imagePath,
        'eng'
    );

    // console.log(text);

    const regex = /\bgained\b/;
    const match = text.match(regex);

    return match
}

async function deleteImage(imagePath) {
    try {
        fs.unlinkSync(imagePath);
        console.log(`Imagem deletada: ${imagePath}`);
    } catch (error) {
        console.error(`Erro ao deletar imagem: ${error.message}`);
    }
}