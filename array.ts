// criar um array que receba a quantidade de valores que o usuário quiser

//let teste : string[] = ['sess', 'dasda', 'hgdhdf', 'weqrqwe', 'uytiuyt']
//console.log(teste[0], teste[1], teste[2], teste[3], teste[4])
// ou
//let teste: Array<string> = ['sess', 'dasda', 'hgdhdf', 'weqrqwe', 'uytiuyt']

let caixa : Array<number> = []
let max : number = Number(prompt("Digite quantos números você quer no array: "))

if (isNaN(max) == true){
    console.log("Digite um número da próxdima.")
}else{
    for(let i = 0; i < max;){
        let num : number = Number(prompt("Digite o número da posição "+i+": "))
        if(isNaN(num) == true){
            prompt("Digita número irmao")
        }else{
            caixa.push(num)
            i++
        }
    }
    console.log(caixa)
}