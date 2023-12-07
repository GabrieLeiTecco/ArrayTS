// criar um array que receba a quantidade de valores que o usuário quiser
// verificar o que ele quer fazer com os números e fazer 

//let teste : string[] = ['sess', 'dasda', 'hgdhdf', 'weqrqwe', 'uytiuyt']
//console.log(teste[0], teste[1], teste[2], teste[3], teste[4])
// ou
//let teste: Array<string> = ['sess', 'dasda', 'hgdhdf', 'weqrqwe', 'uytiuyt']

let caixa : Array<number> = []
let max : number = Number(prompt("Digite quantos números você quer no array: "))

if (isNaN(max) == true){
    console.log("Digite um número na próxima.")
}else{
    for(let i = 0; i < max;){
        let l : number = 1+i
        let num : number = Number(prompt("Digite o número da posição "+l+": "))
        if(isNaN(num) == true){
            prompt("Digita número irmao")
            break
        }else{
            caixa.push(num)
            i++
        }
    }
    contas(caixa)
}

function contas(caixa : Array<number>){
    let resp : string = String(prompt("O que você quer fazer com o array criado?"+"\n"+
    "Somar = Digite 'soma'"+"\n"+
    "Subtrair = Digite 'sub'"+"\n"+
    "Listar = Digite 'list'"))
    switch(resp){
        case "soma":
            let soma : number = 0
            for(let i = 0; i<caixa.length; i++){
                soma+=caixa[i]
            }
            alert("A soma dos números é: "+soma)
            break
        case "sub":
            let sub : number = 0
            for(let i = 0; i<caixa.length; i++){
                sub-=caixa[i]
            }
            alert("A subtração dos números é: "+sub)
            break
        case "list":
            alert(caixa)
            break
        default:
            alert("Opção inválida")
            break
    }
}
