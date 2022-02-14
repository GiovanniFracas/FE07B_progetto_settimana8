var FirstUser = /** @class */ (function () {
    function FirstUser(_carica, _numeroChiamate) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        var spesa = 0.20;
        this.carica = this.carica - (spesa * minutiDurata);
        this.numeroChiamate++;
    };
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
var Seconduser = /** @class */ (function () {
    function Seconduser(_carica, _numeroChiamate) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    Seconduser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    Seconduser.prototype.chiamata = function (minutiDurata) {
        var spesa = 0.20;
        this.carica = this.carica - (spesa * minutiDurata);
        this.numeroChiamate++;
    };
    Seconduser.prototype.numero404 = function () {
        return this.carica;
    };
    Seconduser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Seconduser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Seconduser;
}());
var ThirdUser = /** @class */ (function () {
    function ThirdUser(_carica, _numeroChiamate) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        var spesa = 0.20;
        this.carica = this.carica - (spesa * minutiDurata);
        this.numeroChiamate++;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
//implementazione della classe
var tel1 = new FirstUser(2, 1);
tel1.ricarica(10);
tel1.chiamata(10);
var tel2 = new Seconduser(2, 1);
tel2.ricarica(20);
tel2.chiamata(10);
var tel3 = new ThirdUser(2, 1);
tel3.ricarica(30);
tel3.chiamata(10);
/* a questo punto istanzierei tre utenti utilizzando la stessa classe ma come richiesta creo tre classi */
console.log("---PRIMO UTENTE---");
console.log("Valore della carica disponibile" + tel1.numero404());
console.log("Numero delle chiamate" + tel1.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate:");
tel1.azzeraChiamate();
console.log(" ");
console.log("---SECONDO UTENTE---");
console.log(" ");
console.log("Numero delle chiamate utente 2" + tel2.getNumeroChiamate());
console.log("Valore della carica disponibile" + tel2.numero404());
console.log("Numero delle chiamate" + tel2.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate:");
tel2.azzeraChiamate();
console.log(" ");
console.log("---TERZO UTENTE---");
console.log(" ");
console.log("Numero delle chiamate" + tel3.getNumeroChiamate());
console.log("Valore della carica disponibile" + tel3.numero404());
console.log("Numero delle chiamate" + tel3.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate:");
tel3.azzeraChiamate();
console.log("Numero delle chiamate" + tel3.getNumeroChiamate());
