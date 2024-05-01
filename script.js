function ramdomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

var produtos = [
    ["Arroz Bem Caseiro", 2.25],
    ["Macarrão Bonsabor", 1.39],
    ["Azeite de Oliva Córdoba", 12.99],
    ["Óleo de Soja Soya", 3.25],
    ["Maionese Quero", 1.15],
    ["Carne Bovina em conserva Target", 3.99],
    ["Leite em pó Integral CCGL", 3.45],
    ["Creme de Leite Piracanjuba", 10.40]
];
var compras = [
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0],
    ["", 1, 0, 0]
];
var alertP = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

var quantP = ramdomValue(0, 18);
var item;

for(var d = 0; d < quantP; d++) 
    item = 6;

    console.log("Item 1: "+ item);

    var verif = false;

    console.log("Item 2: "+ item);

    for(var v = 0; v < quantP; v++){
        if(compras[v][0] == produtos[item][0]){
            verif = true;
            compras[v][1]++;
            d--;
            quantP--;
        }
    }
    console.log("Item 3: "+ item);
    
    if(verif == false){
        compras[d][0] = produtos[item][0];
        compras[d][2] = produtos[item][1];
    }

var quntT = 0;
var valorT;
for(var p = 0; p < quantP; p++){
    alertP[p] = "\n "+ compras[p][0] +"  /  "+ compras[p][1] +"un.";
    quntT = quntT + compras[p][1];
}

alert("\"Nome do Cliente\"\n----------------------------------------------------------------------------\n<Item>  /  <Quant.>  /  <Valor Un.>  /  <Valor Total>"+ alertP[0] + alertP[1] + alertP[2]+ alertP[3] + alertP[4]+ alertP[5] + alertP[6]+ alertP[7] + alertP[8]+ alertP[9] + alertP[10]+ alertP[11] + alertP[12]+ alertP[13] + alertP[14]+ alertP[15] + alertP[16]+ alertP[17] + alertP[18] + "\n----------------------------------------------------------------------------\n Quantidade Total de Produtos: "+ quntT +"   Valor Total: "+ valorT);