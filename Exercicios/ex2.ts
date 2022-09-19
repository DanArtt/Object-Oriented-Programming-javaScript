class aviao {
    private piloto: string;
    private copiloto: string;
    private aeromocas: number;
    private linha: string;
    private tipo: string;
    private motor: string;
    private capacidade: number;
    private comprimento: number;
    private saidaDeEmergencia: number;
    private banheiro: number;

    constructor(piloto: string, copiloto: string, aeromocas: number, linha: string, tipo: string, motor: string, capacidade: number, comprimento: number,saidaDeEmergencia: number, banheiro: number) {
        this.piloto = piloto;
        this.copiloto = copiloto;
        this.aeromocas = aeromocas;
        this.linha = linha;
        this.tipo = tipo;
        this.motor = motor;
        this.capacidade = capacidade;
        this.comprimento = comprimento;
        this.saidaDeEmergencia = saidaDeEmergencia;
        this.banheiro = banheiro;
    }

    mostrarInformacoes():void {
        console.log(`Nome do Piloto: ${this.piloto}.\n Nome do Copiloto: ${this.copiloto}.\n Quantidade de aeromoças a bordo: ${this.aeromocas} aeromoças.\n Linha aérea responsável: ${this.linha}.\n Modelo do avião: ${this.tipo} 777.\n Motor do avião: ${this.motor}90.\n Capacidade máxima de passageiros: ${this.capacidade} passageiros.\n Comprimento do avião: ${this.comprimento}cm.\n Quantidades de saídas de emergência: ${this.saidaDeEmergencia} saídas.\n Quantidades de banheiros dentro do avião: ${this.banheiro} banheiros.`)
    }
}
var infoaviao: aviao = new aviao("Bruno Araujo", "Guilherme Kono", 10, "LATAM Brasil", "Boeing", "GE", 410, 73.86, 10, 10)
infoaviao.mostrarInformacoes()
