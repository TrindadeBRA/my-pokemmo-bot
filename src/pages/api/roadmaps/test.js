import clickInitial from "../functions/clickInitial";
import sleep from "../functions/sleep";

export default async function handler(req, res) {
    try {
        let resultSleep = await sleep(1599);
        console.log(resultSleep);

        const resultClick = await clickInitial();
        console.log(resultClick);

        resultSleep = await sleep(1000);
        console.log(resultSleep);

        resultSleep = await sleep(2000);
        console.log(resultSleep);

        resultSleep = await sleep(3000);
        console.log(resultSleep);

        res.status(200).json({ message: "Bot concluido!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro no bot.' });
    }
}
