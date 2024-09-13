"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageSelector = void 0;
var LanguageSelector = /** @class */ (function () {
    function LanguageSelector(language) {
        this.language = language;
    }
    LanguageSelector.prototype.getMessage = function (key) {
        var messages = {
            en: {
                askInputType: 'Do you want to read a local file or a URL? (local/url): ',
                askLocalPath: 'Please enter the local file path: ',
                askUrl: 'Please enter the URL: ',
                invalidOption: 'Invalid option, please choose either "local" or "url".',
            },
            pt: {
                askInputType: 'Deseja ler um arquivo local ou uma URL? (local/url): ',
                askLocalPath: 'Informe o caminho do arquivo local: ',
                askUrl: 'Informe a URL: ',
                invalidOption: 'Opção inválida. Por favor, informe "local" ou "url".',
            },
            it: {
                askInputType: 'Vuoi leggere un file locale o un URL? (locale/url): ',
                askLocalPath: 'Inserisci il percorso del file locale: ',
                askUrl: 'Inserisci l\'URL: ',
                invalidOption: 'Opzione non valida. Si prega di scegliere "locale" o "url".',
            }
        };
        return messages[this.language][key] || messages['en'][key];
    };
    return LanguageSelector;
}());
exports.LanguageSelector = LanguageSelector;
