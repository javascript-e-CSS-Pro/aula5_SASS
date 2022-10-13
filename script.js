

function executarsoma() {
    const num1 = document.querySelector ("#numero_soma1")
    const num2 = document.querySelector ("#numero_soma2")

    const valor1 = Number(num1.value)
    const valor2 = Number(num2.value)

    const resultado = soma(valor1, valor2)

    const resultado1 = document.querySelector("#resultado")

    resultado1.innerHTML = resultado
}

function soma(numero_soma1, numero_soma2) {
    const resultado = numero_soma1 + numero_soma2
    return resultado
}

function executarmultiplicar() {
    const num_mult1 = document.querySelector ("#numero_multiplicar1")
    const num_mult2 = document.querySelector ("#numero_multiplicar2")

    const valor_mult1 = Number(num_mult1.value)
    const valor_mult2 = Number(num_mult2.value)

    const resultado_mult = multiplicar(valor_mult1, valor_mult2)

    const resultado_mult1 = document.querySelector("#resultado_mult")

    resultado_mult1.innerHTML = resultado_mult
}

function multiplicar(numero_multiplicar1, numero_multiplicar2) {
    const resultado_mult = numero_multiplicar1 * numero_multiplicar2
    return resultado_mult
}

function executardividir() {
    const num_div1 = document.querySelector ("#numero_dividir1")
    const num_div2 = document.querySelector ("#numero_dividir2")

    const valor_div1 = Number(num_div1.value)
    const valor_div2 = Number(num_div2.value)

    const resultado_div = dividir(valor_div1, valor_div2)

    const resultado_div1 = document.querySelector("#resultado_div")

    resultado_div1.innerHTML = resultado_div
}

function dividir(numero_dividir1, numero_dividir2) {
    const resultado_div = (numero_dividir1 / numero_dividir2).toFixed(2)
    return resultado_div

}