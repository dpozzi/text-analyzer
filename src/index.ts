import * as readline from 'readline';
import { ReaderFactory } from './readers/ReaderFactory';
import { TextAnalyzer } from './analyzer/TextAnalyzer';
import { LanguageSelector } from './languages/LanguageSelector';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Choose your language (en/pt/it): ', (language) => {
    const languageSelector = new LanguageSelector(language);

    rl.question(languageSelector.getMessage('askInputType'), (tipo) => {
        const reader = ReaderFactory.createReader(tipo as 'local' | 'web');

        if (tipo === 'local') {
            rl.question(languageSelector.getMessage('askLocalPath'), async (caminho) => {
                try {
                    const text = await reader.read(caminho);
                    processText(text);
                } catch (error) {
                    console.error(error);
                }
                rl.close();
            });
        } else if (tipo === 'web') {
            rl.question(languageSelector.getMessage('askUrl'), async (url) => {
                try {
                    const text = await reader.read(url);
                    processText(text);
                } catch (error) {
                    console.error(error);
                }
                rl.close();
            });
        } else {
            console.log(languageSelector.getMessage('invalidOption'));
            rl.close();
        }
    });
});

function processText(text: string): void {
    const analyzer = new TextAnalyzer(text);

    console.log(`Total de palavras: ${analyzer.contarPalavras()}`);
    console.log(`Total de letras: ${analyzer.contarLetras()}`);
    console.log(`Total de espaços em branco: ${analyzer.contarEspacosEmBranco()}`);

    const palavrasMaisDe10 = analyzer.palavrasMaisDe10();
    console.log('Palavras que aparecem mais de 10 vezes:');
    for (const [palavra, count] of Object.entries(palavrasMaisDe10)) {
        console.log(`${palavra}: ${count} vezes`);
    }
}
