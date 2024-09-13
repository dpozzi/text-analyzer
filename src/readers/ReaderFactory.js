"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReaderFactory = void 0;
var FileReader_1 = require("./FileReader");
var WebReader_1 = require("./WebReader");
var ReaderFactory = /** @class */ (function () {
    function ReaderFactory() {
    }
    ReaderFactory.createReader = function (type) {
        if (type === 'local') {
            return new FileReader_1.FileReader();
        }
        else if (type === 'web') {
            return new WebReader_1.WebReader();
        }
        else {
            throw new Error('Tipo de leitor não suportado.');
        }
    };
    return ReaderFactory;
}());
exports.ReaderFactory = ReaderFactory;
