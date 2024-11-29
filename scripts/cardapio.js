const lista = [
    ['../images/bolo pelado.png', 'Doce Fino', 50],
    ['../images/Bolo-no-pote.jpeg', 'Bolo no Pote', 10],
    ['../images/trufa.jpeg', 'Trufa', 3],
    ['../images/copo da felicidadejpg.jpg', 'Copo da Felicidade', 15],
]

lista.forEach(card => {
    document.getElementById('mural').innerHTML += `
    <div id="card">
        <img src="${card[0]}" alt="">
        <h3>${card[1]}</h3>
        <p>R$ ${card[2]},00</p>
        <br>
        <button>ADICIONAR</button>
    </div>
    `
});

const carrinho = []

document.getElementById('modal').innerHTML = `
<div>
    
</div>
`