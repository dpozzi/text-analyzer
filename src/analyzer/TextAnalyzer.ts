export class TextAnalyzer {
    private text: string;

    constructor(text: string) {
        this.text = text.toLowerCase().replace(/[.,!?;:()"]/g, '');
    }

    public contarPalavras(): number {
        const palavras = this.text.split(/\s+/);
        return palavras.length;
    }

    public contarEspacosEmBranco(): number {
        const espacos = this.text.match(/\s/g);
        return espacos ? espacos.length : 0;
    }

    public contarLetras(): number {
        const letras = this.text.replace(/\s/g, '');
        return letras.length;
    }

    public palavrasMaisDe10(): { [key: string]: number } {
        const palavras = this.text.split(/\s+/);
        const contagem: { [key: string]: number } = {};

        palavras.forEach(palavra => {
            if (palavra) {
                contagem[palavra] = (contagem[palavra] || 0) + 1;
            }
        });

        const resultado: { [key: string]: number } = {};
        for (const palavra in contagem) {
            if (contagem[palavra] > 10) {
                resultado[palavra] = contagem[palavra];
            }
        }

        return resultado;
    }
}
