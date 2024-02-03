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

        await sleep(1500);

        // // Curar Pokemons
        // for (let i = 0; i < 7; i++) {
        //     robot.keyTap('z');
        //     await sleep(1200);
        // }

        // //Sair do pokecenter
        // robot.keyTap('down');
        // await sleep(250);
        // robot.keyTap('down');
        // await sleep(250);
        // robot.keyTap('down');
        // await sleep(250);
        // robot.keyTap('down');
        // await sleep(250);
        // robot.keyTap('down');
        // await sleep(250);
        // robot.keyTap('down');
        // await sleep(500);

        // //Ir até o lago
        // robot.keyTap('right');
        // await sleep(250);
        // robot.keyTap('right');
        // await sleep(250);
        // robot.keyTap('right');
        // await sleep(250);
        // robot.keyTap('right');
        // await sleep(250);
        // robot.keyTap('right');
        // await sleep(250);
        // robot.keyTap('right');
        // await sleep(250);
        // robot.keyTap('right');
        // await sleep(500);

        // //Olhar para o lago
        // await sleep(250);
        // robot.keyTap('up');
        // await sleep(500);

        // Pescar
        robot.keyTap('1');

        // // Clique no ultimo pkmn 
        // robot.moveMouse(1891, 663);
        // robot.mouseClick();

        // // Use o ataque 
        // robot.moveMouse(1748, 838);
        // robot.mouseClick();

        // Atacar
        for (let i = 0; i < 15; i++) {
            robot.keyTap('z');
            await sleep(1000);
        }
        
        
        
        
        
        
        
        
        
        // robot.keyTap('up');
        // await sleep(250);
        // robot.keyTap('up');
        // await sleep(250);
        // robot.keyTap('up');
        // await sleep(250);
        // robot.keyTap('up');
        // await sleep(250);
        // robot.keyTap('up');
        // await sleep(250);



        res.status(200).json({ message: 'Bot concluído.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro no bot.' });
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

