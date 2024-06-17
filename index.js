function changeImage(novaImg) {
    document.getElementById('img-principal').src = novaImg;
}

function changeImageModal(novaImg) {
    document.getElementById('img-principal-modal').src = novaImg;
}

let carrinho = document.querySelector('.icone-carrinho')
let caixaCarrinho = document.querySelector('.container-carrinho')
carrinho.addEventListener('click', () =>{
    caixaCarrinho.classList.toggle('container-carrinho2')
})

let imgPrincipal = document.getElementById('img-principal');
imgPrincipal.addEventListener('click', function(){
    document.querySelector('.modal').style.display = 'flex';
});

let btnClose = document.querySelector('.btnClose');
btnClose.addEventListener('click', function(){
    document.querySelector('.modal').style.display = 'none'
});

try{
    let btnMais = document.querySelector('.mais');
    let quantidade = document.querySelector('.quantidade');
    let valor = 0
    btnMais.addEventListener('click', function(){
        valor += 1
        quantidade.innerHTML = valor;
    })
    
    let btnMenos = document.querySelector('.menos');
    btnMenos.addEventListener('click', function(){
        if(valor - 1 < 0 && valor == 0){
            throw new Error('Valor não pode ser negativo');
        } else {
            valor -= 1
            quantidade.innerHTML = valor;
        }
    }) 

    let btnAdd = document.querySelector('.btn-add');
    btnAdd.addEventListener('click', function(){
        if(valor == 0){
            throw new Error('Valor inválido')
        } else {
            document.querySelector('.carrinho-vazio').style.display = 'none'
            let carrinho = document.querySelector('.carrinho')
            const img = document.createElement('img');
            img.src = 'images/image-product-1-thumbnail.jpg'
            img.classList.add('img-produto-carrinho')
            carrinho.appendChild(img);
            console.log(valor)
        }    
    })
    
    
} catch (error){
    console.log(error)
}



