export interface IUser {
    id?: number;
    nome: string;
    email: string;
    senha?: string;
    endereco: {
        logradouro: string;
        bairro: string;
        cep: string;
        cidade: string;
        uf: string;
        numero: string;
        complemento: string;
    }
}