import robot from 'robotjs';
const Tesseract = require("tesseract.js");

export default async function handler(req, res) {
    try {
        // Obtenha as dimensões da tela
        const larguraTela = robot.getScreenSize().width;
        const alturaTela = robot.getScreenSize().height;

        // Configuração da região para capturar a tela inteira
        const capturaTelaInteira = {
            x: 0,
            y: 0,
            largura: larguraTela,
            altura: alturaTela,
        };

        // Captura da tela usando robot.js
        const imagem = robot.screen.capture(capturaTelaInteira.x, capturaTelaInteira.y, capturaTelaInteira.largura, capturaTelaInteira.altura);

        // Convertendo a imagem para texto usando Tesseract.js
        const resultadoOCR = await Tesseract.recognize(imagem.image, { lang: "eng" });

        // Obtendo o texto extraído
        const textoExtraido = resultadoOCR.data.text;

        console.log("Texto extraído:", textoExtraido);

        res.status(200).json({ message: 'Bot concluído.', textoExtraido });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro no bot.' });
    }
}
