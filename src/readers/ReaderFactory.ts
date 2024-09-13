import { FileReader } from './FileReader';
import { WebReader } from './WebReader';

export class ReaderFactory {
    public static createReader(type: 'local' | 'web'): FileReader | WebReader {
        if (type === 'local') {
            return new FileReader();
        } else if (type === 'web') {
            return new WebReader();
        } else {
            throw new Error('Tipo de leitor não suportado.');
        }
    }
}
