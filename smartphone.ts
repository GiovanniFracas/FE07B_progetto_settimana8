//interfaccia smartphone
interface Smartphone {
    carica: number;
    numeroChiamate: number;
    ricarica(minutiDurata: number): void;
    chiamata(unaRicarica: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;

}
class FirstUser implements Smartphone {
    carica: number;
    numeroChiamate: number;
    constructor(_carica: number, _numeroChiamate: number) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }


    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }
    public chiamata(minutiDurata: number): void {
        const spesa = 0.20;
        this.carica = this.carica - (spesa * minutiDurata);
        this.numeroChiamate++;
    }
    public numero404(): number {
        return this.carica;
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}
class Seconduser implements Smartphone {
    carica: number;
    numeroChiamate: number;
    constructor(_carica: number, _numeroChiamate: number) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }


    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }
    public chiamata(minutiDurata: number): void {
        const spesa = 0.20;
        this.carica = this.carica - (spesa * minutiDurata);
        this.numeroChiamate++;
    }
    public numero404(): number {
        return this.carica;
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}
class ThirdUser implements Smartphone {
    carica: number;
    numeroChiamate: number;
    constructor(_carica: number, _numeroChiamate: number) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }


    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }
    public chiamata(minutiDurata: number): void {
        const spesa = 0.20;
        this.carica = this.carica - (spesa * minutiDurata);
        this.numeroChiamate++;
    }
    public numero404(): number {
        return this.carica;
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}



//implementazione della classe

let tel1 = new FirstUser(2, 1);
tel1.ricarica(10);
tel1.chiamata(10);
let tel2 = new Seconduser(2, 1);
tel2.ricarica(20);
tel2.chiamata(10);
let tel3 = new ThirdUser(2, 1);
tel3.ricarica(30);
tel3.chiamata(10);

/* a questo punto istanzierei tre utenti utilizzando la stessa classe ma come richiesta creo tre classi */
console.log("---PRIMO UTENTE---")
console.log("Valore della carica disponibile" + tel1.numero404());
console.log("Numero delle chiamate" + tel1.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate:");
tel1.azzeraChiamate();
console.log(" ")
console.log("---SECONDO UTENTE---")
console.log(" ")
console.log("Numero delle chiamate utente 2" + tel2.getNumeroChiamate());
console.log("Valore della carica disponibile" + tel2.numero404());
console.log("Numero delle chiamate" + tel2.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate:");
tel2.azzeraChiamate();
console.log(" ")
console.log("---TERZO UTENTE---")
console.log(" ")

console.log("Numero delle chiamate" + tel3.getNumeroChiamate());
console.log("Valore della carica disponibile" + tel3.numero404());
console.log("Numero delle chiamate" + tel3.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate:");
tel3.azzeraChiamate();
console.log("Numero delle chiamate" + tel3.getNumeroChiamate());