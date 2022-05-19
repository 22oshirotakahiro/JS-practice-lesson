'use strict';

document.getElementById('calc').addEventListener('click', e => {
    let sum = parseFloat(document.getElementById('jp').value);
    sum += parseFloat(document.getElementById('math').value);
    sum += parseFloat(document.getElementById('en').value);

    let avg = sum / 3;

    document.getElementById('sum').innerHTML = `${sum}点`;
    document.getElementById('avg').innerHTML = `${avg}点`;
})