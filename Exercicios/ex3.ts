class computador {
    private gabinete: string;
    private fonte: string;
    private placaMae: string;
    private processador: string;
    private memoriaRam: string;
    private ssd: string;
    private hd: string;
    private PlacaDeVideo: string;
    private tela: string;
    private teclado: string;
    private mouse: string;
    private mousePad: string;
    private headset: string;

    constructor(gabinete: string, fonte: string, placaMae: string, processador: string, memoriaRam: string, ssd: string, hd: string, placaDeVideo: string, tela: string, teclado: string, mouse: string, mousePad: string, headset: string) {
        this.gabinete = gabinete;
        this.fonte = fonte;
        this.placaMae = placaMae;
        this.processador = processador;
        this.memoriaRam = memoriaRam;
        this.ssd = ssd;
        this.hd = hd;
        this.PlacaDeVideo = placaDeVideo;
        this.tela = tela;
        this.teclado = teclado;
        this.mouse = mouse;
        this.mousePad = mousePad;
        this.headset = headset;

    }
    mostrarInformacao():void {
        console.log(`Gabinete: ${this.gabinete}.\n Fonte: ${this.fonte}.\n Placa Mãe: ${this.placaMae}.\n Processador: ${this.processador}.\n MemóriaRam: ${this.memoriaRam}.\n SSD: ${this.ssd}.\n HD: ${this.hd}.\n Placa de Vídeo: ${this.PlacaDeVideo}.\n Monitor: ${this.tela}.\n Teclado: ${this.teclado}.\n Mouse: ${this.mouse}.\n MousePad: ${this.mousePad}.\n Headset: ${this.headset}`)
    }


}
var infocomputador: computador = new computador("Gabinete Cougar MX200 Black", "Corsair VS Series VS600 80 Plus Bronze 600W", "Placa Mae Asus PRIME A520M-E AM4", "AMD Ryzen 5 5600X 6-Core, 12-Threads, 3.7GHz", "2x Memoria Team Group T-Force Vulcan Pichau 8GB 2400MHz", "SSD Kingston 240GB", "HD Seagate 500GB", "Placa De Vídeo PowerColor Radeon Rx 570 4gb", "Monitor 19.5'' LG 20MK400H Preto", "Teclado Gamer Membrana Redragon Dyaus 2 RGB", "Mouse Gamer VICKERS RGB 4200DPI", "Mouse Pad Gamer Iluminado led Rgb Grande 80 cm por 30", "HEADSET GAMER K-MEX MIC ARS6 USB PRETO")
infocomputador.mostrarInformacao()