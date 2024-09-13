"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAnalyzer = void 0;
var TextAnalyzer = /** @class */ (function () {
    function TextAnalyzer(text) {
        this.text = text.toLowerCase().replace(/[.,!?;:()"]/g, '');
    }
    TextAnalyzer.prototype.contarPalavras = function () {
        var palavras = this.text.split(/\s+/);
        return palavras.length;
    };
    TextAnalyzer.prototype.contarEspacosEmBranco = function () {
        var espacos = this.text.match(/\s/g);
        return espacos ? espacos.length : 0;
    };
    TextAnalyzer.prototype.contarLetras = function () {
        var letras = this.text.replace(/\s/g, '');
        return letras.length;
    };
    TextAnalyzer.prototype.palavrasMaisDe10 = function () {
        var palavras = this.text.split(/\s+/);
        var contagem = {};
        palavras.forEach(function (palavra) {
            if (palavra) {
                contagem[palavra] = (contagem[palavra] || 0) + 1;
            }
        });
        var resultado = {};
        for (var palavra in contagem) {
            if (contagem[palavra] > 10) {
                resultado[palavra] = contagem[palavra];
            }
        }
        return resultado;
    };
    return TextAnalyzer;
}());
exports.TextAnalyzer = TextAnalyzer;
