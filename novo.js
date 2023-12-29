let nome = 'mari'
let xp= 5.000
let nivel= ''
if(xp<=1.001){
   nivel= "latao"
}else if(xp===1.001 || xp===2.000){
    nivel="ferro"

} else if(xp=== 2.001 ||xp===5.000){
    nivel= "prata"
} else if(xp===5.001 || xp=== 7.000){
    nivel= "ouro"
} else if(xp===7.001|| xp===8.000){
    nivel = "platina"

} else if(xp===8.001 || xp===9.000){
    nivel= "ascendente"

} else if(xp===9.001|| xp===10.000){
    nivel= "imortal"
}  else if(xp>=10.001){
    nivel= "radiante"
}
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)


