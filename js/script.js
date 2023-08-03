let listaProdutos = [
    produto = {
        imgProduto: 'img/pao-frances.jpg',
        nomeProduto: 'Pão Francês',
        descProduto: 'Tradicional pão deito com farinha refinada, àgua e sal.',
        precoProduto: 'R$11,99 kg'
    },

    produto = {
        imgProduto: 'img/pao-queijo.jpg',
        nomeProduto: 'Pão de queijo',
        descProduto: 'Quentinho, saindo do forno',
        precoProduto: 'R$0,99 und'
    },

    produto = {
        imgProduto: 'img/pao-doce.jpg',
        nomeProduto: 'Pão Doce',
        descProduto: 'Pãozinho doce, bem doce mesmo.',
        precoProduto: '12,99 kg'
    },

    produto = {
        imgProduto: 'img/pao-integral.jpg',
        nomeProduto: 'Pão integral',
        descProduto: 'Pão feito com farinha integral, que mantém todos os nutrientes.',
        precoProduto: 'R$15,99 kg'
    }
];

let divProdutos = document.getElementById('produtos');

if (listaProdutos.length > 0) {
    for (let i = 0; i < listaProdutos.length; i++) {

        let img = document.createElement('img');
        img.classList.add('img-produto');
        img.setAttribute('src', listaProdutos[i].imgProduto);
        img.setAttribute('alt', listaProdutos[i].nomeProduto);

        let divNomeProd = document.createElement('div');
        divNomeProd.classList.add('nome-produto');
        divNomeProd.setAttribute('alt', listaProdutos[i].nomeProduto);
        divNomeProd.innerText = listaProdutos[i].nomeProduto;

        let divDescricao = document.createElement('div');
        divDescricao.classList.add('descricao');
        divDescricao.innerText = listaProdutos[i].descProduto;

        let divPreco = document.createElement('div');
        divPreco.classList.add('preco');
        divPreco.innerText = listaProdutos[i].precoProduto;

        let button = document.createElement('button');
        button.classList.add('btn', 'btn-success');
        button.innerText = "Comprar >>>";
        {/* <button type="button" class="btn btn-outline-success"></button> */}


        let divCol = document.createElement('div');
        divCol.classList.add('col-3');

        let divRow = document.createElement('div');
        divRow.classList.add('row');

        divProdutos.appendChild(divRow)
        divRow.appendChild(divCol);
        divCol.appendChild(img);
        divCol.appendChild(divNomeProd);
        divCol.appendChild(divDescricao);
        divCol.appendChild(divPreco);
        divCol.appendChild(button);
    }
}