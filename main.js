function somar(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')
    n1 = Number.parseFloat(tn1.value)
    n2 = Number.parseFloat(tn2.value)
    s = n1 + n2
    res.innerHTML = 'A soma entre ${n1} + ${n2} = <strong>${s}</strong>'
    }
