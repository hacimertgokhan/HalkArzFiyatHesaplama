const outputs_ul = document.getElementById('outputs-ul');
const totals_ul = document.getElementById('totals-ul');
const haf = document.getElementById('ha-price');
const lot = document.getElementById('ha-lot');
const calc = document.getElementById('ha-calc');
let elements = outputs_ul.getElementsByTagName('li');
let total = totals_ul.getElementsByTagName('li');


// test logs - start

console.log(getOutputsUlLength());

// test logs - end

// functions for Outputs 

calc.addEventListener('click', () => {
    if(!(haf.value === '') && (haf.value > 0)) {
        if(!(lot.value === '') || (lot.value === 0)) {
            if(lot.value > 0) {
                haCalculate();
            }
        }
    }
})

function setTotalIDS() {
    total[0].innerHTML = `1.`;
    total[1].innerHTML = `2.`;
    total[2].innerHTML = `3.`;
    total[3].innerHTML = `4.`;
    total[4].innerHTML = `5.`;
    total[5].innerHTML = `6.`;
    total[6].innerHTML = `7.`;
    total[7].innerHTML = `8.`;
    total[8].innerHTML = `9.`;
    total[9].innerHTML = `10.`;
    total[10].innerHTML = `11.`;
    total[11].innerHTML = `12.`;
}

setTotalIDS();


function getOutputsUlLength() {return outputs_ul.querySelectorAll('li').length;}
function getTotalUlLength() {return totals_ul.querySelectorAll('li').length;}

function getSpecifiedLi(id) {
    return elements[id];
}

function getSpecifiedLiForTotal(id) {
    return total[id];
}



function setIDS() {
    for(let i = 0; i <= getOutputsUlLength(); i++) {
        let listing = i+1; 
        elements[i].innerHTML = `${listing}.`;
    }
}

setIDS();

function haCalculate() {

    let t1 = ((Number(haf.value)*10)/100);
    let t1s = Number(haf.value)+t1;
    getSpecifiedLi(0).innerText = t1s.toFixed(2) + ' TL';
    let toplamKazanc_0 = (Number(t1)*Number(lot.value));
    getSpecifiedLiForTotal(0).innerHTML = `${toplamKazanc_0.toFixed(2)} TL`;


    let t2 = ((Number(t1s)*10)/100);
    let t2s = t2+Number(t1s);
    getSpecifiedLi(1).innerHTML = t2s.toFixed(2) + ' TL';
    let toplamKazanc_1 = (Number(t2)*Number(lot.value));
    getSpecifiedLiForTotal(1).innerHTML = `${toplamKazanc_1.toFixed(2)} TL`;

    let t3 = ((Number(t2s)*10)/100);
    let t3s =Number(t2s)+t3;
    getSpecifiedLi(2).innerHTML = t3s.toFixed(2) + ' TL';
    let toplamKazanc_2 = (Number(t3)*Number(lot.value));
    getSpecifiedLiForTotal(2).innerHTML = `${toplamKazanc_2.toFixed(2)} TL`;

    let t4 = ((Number(t3s)*10)/100);
    let t4s =Number(t3s)+t4;
    getSpecifiedLi(3).innerHTML = t4s.toFixed(2)  + ' TL';
    let toplamKazanc_3 = (Number(t4)*Number(lot.value));
    getSpecifiedLiForTotal(3).innerHTML = `${toplamKazanc_3.toFixed(2)} TL`;

    let t5 = ((Number(t4s)*10)/100);
    let t5s =Number(t4s)+t5;
    getSpecifiedLi(4).innerHTML = t5s.toFixed(2)  + ' TL';
    let toplamKazanc_4 = (Number(t5)*Number(lot.value));
    getSpecifiedLiForTotal(4).innerHTML = `${toplamKazanc_4.toFixed(2)} TL`;

    let t6 = ((Number(t5s)*10)/100);
    let t6s =Number(t5s)+t6;
    getSpecifiedLi(5).innerHTML = t6s.toFixed(2)  + ' TL';
    let toplamKazanc_5 = (Number(t6)*Number(lot.value));
    getSpecifiedLiForTotal(5).innerHTML = `${toplamKazanc_5.toFixed(2)} TL`;

    let t7 = ((Number(t6s)*10)/100);
    let t7s =Number(t6s)+t7;
    getSpecifiedLi(6).innerHTML = t7s.toFixed(2)  + ' TL';
    let toplamKazanc_6 = (Number(t6)*Number(lot.value));
    getSpecifiedLiForTotal(6).innerHTML = `${toplamKazanc_6.toFixed(2)} TL`;

    let t8 = ((Number(t7s)*10)/100);
    let t8s =Number(t7s)+t8;
    getSpecifiedLi(7).innerHTML = t8s.toFixed(2)  + ' TL';
    let toplamKazanc_7 = (Number(t7)*Number(lot.value));
    getSpecifiedLiForTotal(7).innerHTML = `${toplamKazanc_7.toFixed(2)} TL`;

    let t9 = ((Number(t8s)*10)/100);
    let t9s =Number(t8s)+t9;
    getSpecifiedLi(8).innerHTML = t9s.toFixed(2)  + ' TL';
    let toplamKazanc_8 = (Number(t8)*Number(lot.value));
    getSpecifiedLiForTotal(8).innerHTML = `${toplamKazanc_8.toFixed(2)} TL`;

    let t10 = ((Number(t9s)*10)/100);
    let t10s =Number(t9s)+t10;
    getSpecifiedLi(9).innerHTML = t10s.toFixed(2) + ' TL';
    let toplamKazanc_9 = (Number(t10)*Number(lot.value));
    getSpecifiedLiForTotal(9).innerHTML = `${toplamKazanc_9.toFixed(2)} TL`;

    let t11 = ((Number(t10s)*10)/100);
    let t11s =Number(t10s)+t11;
    getSpecifiedLi(10).innerHTML = t11s.toFixed(2) + ' TL';
    let toplamKazanc_10 = (Number(t11)*Number(lot.value));
    getSpecifiedLiForTotal(10).innerHTML = `${toplamKazanc_10.toFixed(2)} TL`;

    let t12 = ((Number(t11s)*10)/100);
    let t12s =Number(t11s)+t12;
    getSpecifiedLi(11).innerHTML = t12s.toFixed(2) + ' TL';
    let toplamKazanc_11 = (Number(t12)*Number(lot.value));
    getSpecifiedLiForTotal(11).innerHTML = `${toplamKazanc_11.toFixed(2)} TL`;

    function total_1$2() {return (toplamKazanc_0 + toplamKazanc_1);}
    function total_1$3() {return (toplamKazanc_0 + toplamKazanc_1 + toplamKazanc_2);}
    function total_1$4() {return (toplamKazanc_0 + toplamKazanc_1 + toplamKazanc_2 + toplamKazanc_3 );}
    function total_1$5() {return (toplamKazanc_0 + toplamKazanc_1 + toplamKazanc_2 + toplamKazanc_3 + toplamKazanc_4);}
    function total_1$6() {return (toplamKazanc_0 + toplamKazanc_1 + toplamKazanc_2 + toplamKazanc_3 + toplamKazanc_4 + toplamKazanc_5);}
    function total_1$7() {return (toplamKazanc_0 + toplamKazanc_1 + toplamKazanc_2 + toplamKazanc_3 + toplamKazanc_4 + toplamKazanc_5 + toplamKazanc_6);}
    function total_1$8() {return (toplamKazanc_0 + toplamKazanc_1 + toplamKazanc_2 + toplamKazanc_3 + toplamKazanc_4 + toplamKazanc_5 + toplamKazanc_6 + toplamKazanc_7);}
    function total_1$9() {return (toplamKazanc_0 + toplamKazanc_1 + toplamKazanc_2 + toplamKazanc_3 + toplamKazanc_4 + toplamKazanc_5 + toplamKazanc_6 + toplamKazanc_7 + toplamKazanc_8);}
    function total_1$10() {return (toplamKazanc_0 + toplamKazanc_1 + toplamKazanc_2 + toplamKazanc_3 + toplamKazanc_4 + toplamKazanc_5 + toplamKazanc_6 + toplamKazanc_7 + toplamKazanc_8 + toplamKazanc_9 );}
    function total_1$11() {return (toplamKazanc_0 + toplamKazanc_1 + toplamKazanc_2 + toplamKazanc_3 + toplamKazanc_4 + toplamKazanc_5 + toplamKazanc_6 + toplamKazanc_7 + toplamKazanc_8 + toplamKazanc_9 + toplamKazanc_10);}
    function total_1$12() {return (toplamKazanc_0 + toplamKazanc_1 + toplamKazanc_2 + toplamKazanc_3 + toplamKazanc_4 + toplamKazanc_5 + toplamKazanc_6 + toplamKazanc_7 + toplamKazanc_8 + toplamKazanc_9 + toplamKazanc_10 + toplamKazanc_11);}

    document.getElementById('_1$2').innerHTML = total_1$2().toFixed(2);
    document.getElementById('_1$3').innerHTML = total_1$3().toFixed(2);
    document.getElementById('_1$4').innerHTML = total_1$4().toFixed(2);
    document.getElementById('_1$5').innerHTML = total_1$5().toFixed(2);
    document.getElementById('_1$6').innerHTML = total_1$6().toFixed(2);
    document.getElementById('_1$7').innerHTML = total_1$7().toFixed(2);
    document.getElementById('_1$8').innerHTML = total_1$8().toFixed(2);
    document.getElementById('_1$9').innerHTML = total_1$9().toFixed(2);
    document.getElementById('_1$10').innerHTML = total_1$10().toFixed(2);
    document.getElementById('_1$11').innerHTML = total_1$11().toFixed(2);
    document.getElementById('_1$12').innerHTML = total_1$12().toFixed(2);

}
