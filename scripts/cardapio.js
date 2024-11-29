const carrinho = []

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
        <button type="button" onclick="adicionarProduto('${card[1]}', '${card[2]}')">ADICIONAR</button>
    </div>
    `
});

function adicionarProduto(nomeBolo, valor){
    alert('Item adicionado ao carrinho!')
    carrinho.push([nomeBolo, Number(valor)]) 
}