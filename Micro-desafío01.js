/* Micro-desafio 01 */
function alquilerVeiculo(tipo, dias, silla){
switch(tipo){
    case 'compacto' : 
     valorVeiculo = 14000;
     break;
    case 'mediano' : 
     valorVeiculo = 17000;
     break;
    case 'camioneta' : 
     valorVeiculo = 28000;
     break;
    default: return 'Vehículo invalido';
}
silla === true ? valorSilla = 1200 * dias : valorSilla = 0;
silla === true ? silla = `, con la silla para bebés ($${valorSilla})` : silla = '';
let total = (valorVeiculo * dias) + valorSilla;
    return `Estimado cliente: en base al tipo de vehículo ${tipo} alquilado, considerando los ${dias} días
utilizados${silla}, el monto total a pagar es de $${total}.`
 }
    


console.log(alquilerVeiculo('camioneta',2 ,true))