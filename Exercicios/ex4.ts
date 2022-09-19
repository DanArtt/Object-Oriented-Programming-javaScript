class funcionario {
    private nome: string;
    private idade: number;
    private nascimento: string;
    private estadoCivil: string;
    private endereco: string;
    private nomeEmpresa: string;
    private enderecoEmpresa: string;
    private cargo: string;
    private salario: string;
    
    constructor (nome: string, idade: number, nascimento: string, estadoCivil: string, endereco: string, nomeEmpresa: string, enderecoEmpresa: string, cargo: string, 
        salario: string) {
            this.nome = nome;
            this.idade = idade;
            this.nascimento = nascimento;
            this.estadoCivil = estadoCivil;
            this.endereco = endereco;
            this.nomeEmpresa = nomeEmpresa;
            this.enderecoEmpresa = enderecoEmpresa;
            this.cargo = cargo;
            this.salario = salario;
        }
        mostrarInformacao():void {
            console.log(`Nome do funcionário: ${this.nome}.\n Idade do funcionário: ${this.idade} anos.\n Data de Nascimento: ${this.nascimento}.\n Estado Civil: ${this.estadoCivil}.\n Endereço: ${this.endereco}. \n Nome da Empresa: ${this.nomeEmpresa}.\n Endereço da empresa: ${this.enderecoEmpresa}.\n Cargo do funcionário: ${this.cargo}.\n Salário do funcionário: ${this.salario}.`)
        }
    }
var infoFuncionario: funcionario = new funcionario("Daniel de Andrade da Silva", 21, "21/02/2001", "Solteiro", "Rua Sabaúna, 226", "Prill Tecnologia", " R. do Passeio, 38 - Centro, Rio de Janeiro", "Desenvolvedor Junior", "R$ 2.500,00 Reais.")
infoFuncionario.mostrarInformacao()