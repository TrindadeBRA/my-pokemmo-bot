import robot from 'robotjs';

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

        // await sleep(1500);

        // await curarPokemons();

        // await sairDoPokestop();

        // await irAteOSpot();

        // await procurarPokemon();
        // await batalhar();
        // await sleep(5000);
        // await batalhar();


        // await olhaeEEntrarNoLagoComSurf();

        // await batalhar5Vezes();

        // await sairDoLago();

        // await entrarNoPokestop();

        res.status(200).json({ message: 'Bot concluído.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro no bot.' });
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(1000);
    pressKeyForDuration('right', 50);
    await sleep(2500);
}

async function procurarPokemon() {

    for (let i = 0; i < 3; i++) {

        pressKeyForDuration('right', 50);
        await sleep(500);
        pressKeyForDuration('up', 50);
        await sleep(500);
        pressKeyForDuration('left', 50);
        await sleep(500);
        pressKeyForDuration('down', 50);
        await sleep(500);

    }

    await sleep(2500);
}

async function batalhar() {
    for (let i = 0; i < 1; i++) {

        // Clique no ultimo pkmn 
        robot.moveMouse(1891, 663);
        robot.mouseClick();
        await sleep(500);

        // Use o ataque 
        robot.moveMouse(1751, 869);
        robot.mouseClick();
        await sleep(15000);


        pressKeyForDuration('z', 50);
        await sleep(1000);
        pressKeyForDuration('z', 50);
        await sleep(1000);
        pressKeyForDuration('z', 50);
        await sleep(1000);
        pressKeyForDuration('z', 50);
        await sleep(30000);

        pressKeyForDuration('z', 50);
        await sleep(1000);
        pressKeyForDuration('right', 50);
        await sleep(1000);
        pressKeyForDuration('z', 50);
        await sleep(1000);



    }
    await sleep(2500);
}

async function sairDoLago() {
    //Sair do lago
    pressKeyForDuration('down', 50);
    await sleep(2500);
}

async function curarPokemons() {
    // Curar Pokemons
    for (let i = 0; i < 7; i++) {
        robot.keyTap('z');
        await sleep(1200);
    }
}

async function entrarNoPokestop() {

    //Ir a porta do pokestop
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(1000);
    pressKeyForDuration('left', 50);
    await sleep(2500);

    //Entrar
    pressKeyForDuration('up', 50);
    await sleep(1000);
    pressKeyForDuration('up', 50);
    await sleep(2500);

    //Andar até pokestop
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