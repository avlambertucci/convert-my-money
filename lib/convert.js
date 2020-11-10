const convert = (qtd, cotacao)=>{
  return cotacao * qtd
}
const toMoney = valor => {
  return parseFloat(valor).toFixed(2)
}

module.exports = {
  convert,
  toMoney
}