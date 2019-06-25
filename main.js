$id = (e)  => {
    return document.getElementById(e).value;
}

soma = (v1,v2,v3) => {
    var va1 = parseInt(v1);
    var va2 = parseInt(v2);
    var va3 = parseInt(v3);

    var total = (va1 + va2 + va3)/3;

    return total
}

getValues = () => {
    // Projeto
    var pro1 = $id('pro1');
    var pro2 = $id('pro2');
    var pro3 = $id('pro3');

    // Jurídico
    var ju1 = $id('ju1');
    var ju2 = $id('ju2');
    var ju3 = $id('ju3');

    // Mercado 
    var mer1 = $id('mer1');
    var mer2 = $id('mer2');
    var mer3 = $id('mer3');
    
    // Investimento 
    var in1 = $id('in1');
    var in2 = $id('in2');
    var in3 = $id('in3');

    // Publicidade 
    var pu1 = $id('pu1');
    var pu2 = $id('pu2');
    var pu3 = $id('pu3');

    // Valores para exibir
    var projeto = soma(pro1,pro2,pro3);
    var juridico = soma(ju1,ju2,ju3);
    var mercado = soma(mer1,mer2,mer3);
    var investimento = soma(in1,in2,in3);
    var publicidade = soma(pu1,pu2,pu3);

    //Verifica checkbox e adiciona no canvas
    if(document.getElementById("ifood").checked) ifood();
    if(document.getElementById("uber").checked) uber();

    var lista = [projeto, juridico, mercado, investimento, publicidade];

    setData("Sua empresa", lista, "#777777");
}



// funções de empresas
ifood = () => {
    var arr = [10, 10, 4, 10, 10];
    setData("iFood", arr, "#ff0000");
}

uber = () => {
    var arr = [6, 4, 8, 2, 3];
    setData("Uber", arr, "#999999");
}




// Pegar id do canvas
var ctx = document.getElementById('myChart').getContext('2d');

// Definir dados
function setData(nome, listadados, cor) {
    var _data = data;
    var _datasets = _data.datasets;

    var obj = {
        label: nome,
        data: listadados,
        //backgroundColor: cor
        borderColor: cor
    }

    _datasets.push(obj);
    myChart.update();
}

// Data inicial
var data = {
    labels: ['Projeto', 'Jurídico', 'Mercado', 'Investimento', 'Publicidade'],
    datasets: []
}

// Inicia chart
var myChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
        animation: {
            easing: 'easeOutBounce',
            duration: 1750
        },
        tooltips: {
            mode: 'point',
            backgroundColor: 'blue',
            position: 'average',
            callbacks: {
                label: function(tooltipItem, data) {
                    var label = data.datasets[tooltipItem.datasetIndex].label || '';
                    if (label) {
                        label += ': ';
                    }
                    label += Math.round(tooltipItem.yLabel * 100) / 100;
                    return label;
                }
            }
        }
    }
});