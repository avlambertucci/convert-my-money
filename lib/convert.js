const convert = (qtd, cotacao)=>{
  return cotacao * qtd
}
const toMoney = valor => {
  return valor.toFixed(2)
}

module.exports = {
  convert,
  toMoney
}