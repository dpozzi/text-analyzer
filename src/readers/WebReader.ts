import axios from 'axios';

export class WebReader {
    public async read(url: string): Promise<string> {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            throw new Error(`Erro ao acessar a URL: ${(err as Error).message}`);
        }
    }
}
