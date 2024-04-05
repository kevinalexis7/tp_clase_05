/* Micro-desafío 02 */
let hamburguesa;
function totalAPagar(hamburguesa,jamon,queso,salsaTomate,mayonesa,mostaza,tomate, lechuga, cebolla){
   
    switch (hamburguesa){
        case 'carne a la parrilla':
        precioBase = 1800
        break;
        case 'pollo':
        precioBase = 1500;
        break;
        case 'vegegtariana':
        PrecioBase = 1200
        default:
            return 'especefique su pedido'
    }
    
    !jamon ? $jamon = 0 : $jamon = 30;
    !queso ? $queso = 0 : $queso = 25;
    !salsaTomate ? $salsaTomate = 0 : $salsaTomate = 5;
    !mayonesa ? $mayonesa = 0 : $mayonesa = 5;
    !mostaza ? $mostaza = 0 : $mostaza = 5;
    !tomate ? $tomate = 0 : $tomate = 15;
    !lechuga ? $lechuga = 0 : $lechuga = 10;
    !cebolla ? $cebolla = 0 : $cebolla = 10;
    
    let total = precioBase + $jamon + $queso + $salsaTomate + $mayonesa + $mostaza + $tomate + $lechuga + $cebolla;

    return total
}
// console.log(totalAPagar('pollo', false, false, false, false, false, false, true, true))

function mensaje(nombre, apellido, callback){ 
        if (total == isNaN) { 
            return "ERROR"
            
        }
}


console.log(mensaje('Fulanito', 'De tal', totalAPagar('asdwas', false, false, false, false, false, false, true, true)))