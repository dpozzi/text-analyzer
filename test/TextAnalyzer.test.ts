import { TextAnalyzer } from '../src/analyzer/TextAnalyzer';

describe('TextAnalyzer', () => {
    it('should count words correctly', () => {
        const text = 'Hello world! Hello everyone.';
        const analyzer = new TextAnalyzer(text);
        expect(analyzer.contarPalavras()).toBe(4);
    });

    it('should count letters correctly', () => {
        const text = 'Hello world!';
        const analyzer = new TextAnalyzer(text);
        expect(analyzer.contarLetras()).toBe(10); // "Hello" + "world"
    });

    it('should count spaces correctly', () => {
        const text = 'Hello world!';
        const analyzer = new TextAnalyzer(text);
        expect(analyzer.contarEspacosEmBranco()).toBe(1);
    });

    it('should find words appearing more than 10 times', () => {
        const text = 'hello '.repeat(11) + 'world ';
        const analyzer = new TextAnalyzer(text);
        const result = analyzer.palavrasMaisDe10();
        expect(result['hello']).toBe(11);
        expect(result['world']).toBeUndefined();
    });
});
