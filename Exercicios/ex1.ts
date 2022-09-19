class cliente {
    //   Varáveis
    private nome: string = "Daniel";
    private sobrenome: string = "Andrade";
    private estadoCivil: string = "Solteiro";
    private idade: number = 21;
    private peso: number = 52;
    private altura: number = 1.65;
    private tattoo: boolean = true;
    private endereco: string = "Rua Sabaúna";
    private casaNumero: number = 226;

    //   Método Construtor
    constructor(nome: string, sobrenome: string, estadoCivil: string, idade: number, peso: number, altura: number, tattoo: boolean, endereco: string, casaNumero: number) {
        this.nome = "Daniel";
        this.sobrenome = "Andrade";
        this.estadoCivil = "Solteiro";
        this.idade = 21;
        this.peso = 52;
        this.altura = 1.65;
        this.tattoo = true;
        this.endereco = "Rua Sabaúna";
        this.casaNumero = 226;
    }
mostrarinformacoes():void{
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}\n Estado civil: ${this.estadoCivil}\n Idade: ${this.idade} anos\n Peso: ${this.peso} kilos\n Altura: ${this.altura} cm\n Possui tatuagem: ${this.tattoo}\n Endereço: ${this.endereco}, ${this.casaNumero}` );
}
    
}
var informacao: cliente = new cliente("Daniel", "de Andrade", "Solteiro", 21, 52, 1.65, true, "Rua Sabaúna", 226)
informacao.mostrarinformacoes();



