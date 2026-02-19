const readline = require("readline")
const leitura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitura.question("Escolha a operação(+, -, *, /):\n", (operacao) =>{
    leitura.question("Digite o primeiro número:\n", (num1) =>{
        leitura.question("Digite o segunod número:\n", (num2) =>{
            num1 = parseFloat(num1)
            num2 = parseFloat(num2)

            let resultado
            switch (operacao){
                case "+":
                    resultado = num1 + num2
                    break
                case "-":
                    resultado = num1 - num2
                    break
                case "*":
                    resultado = num1 * num2
                    break
                case "/":
                    resultado = num2 !== 0 ? num1 / num2: "Erro: divisão por 0"
                    break
                    default:
                        resultado = "Operação invalida"             
            }
            console.log("Resultado:\n", resultado);
            leitura.close()
        })
    })
})