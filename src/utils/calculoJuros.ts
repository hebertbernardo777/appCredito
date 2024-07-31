export const TAXAJUROS = 5;

export function calcularParcela(valor:number,taxaJuros:number,parcelas:number){

    if(parcelas === 0){
        return 0;
    }
    
    let taxaDecimal = taxaJuros /100;

    const resultado = (valor * (taxaDecimal *  Math.pow((1 + taxaDecimal),parcelas) ) / ( Math.pow((1+taxaDecimal),parcelas) -1));
    console.log('parametros')
    console.log(valor)
    console.log(parcelas)
    console.log(resultado)
    return resultado
}



export function calcularSaldoDevedor(valor:number,taxaJuros:number,parcelas:number){

    let jurosTotais = 0;
    let saldo = 0;


    for (let i = 0; i < parcelas; i++){


        console.log(i + 1); // Adicionei +1 ao i para começar do número 1
    }
}
