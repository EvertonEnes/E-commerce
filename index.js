function changeImage(novaImg, estiloImg){
    document.getElementById('img-principal').src = novaImg;
    document.querySelector(estiloImg).style = 'opacity:0.5; border: solid 3px orange';
    let imgsMiniatura = document.querySelectorAll('#img-miniatura-principal img');
    imgsMiniatura.forEach(function(img){
        estiloImg = estiloImg.replace('.','');    
        if(!img.classList.contains(estiloImg)){
            img.style = 'opacity: 1; border: none'
        }
    })
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
            // document.querySelector('.carrinho-vazio').style.display = 'none'
            let valorProduto = Number(document.querySelector('.valor-produto').innerText.replace(/(50%)/, '').replace('R$', ''));
            let multiplicacao = valorProduto * valor;
            let carrinho = document.querySelector('.carrinho')
            carrinho.classList.add('carrinho-atualizado')
            carrinho.innerHTML = `<img class='img-produto-carrinho' src=\'images/image-product-1-thumbnail.jpg\'><div style='height:100%; display:flex; flex-direction: column; justify-content: center; gap:10px'><p>Tênis de edição limitada de outono</p><p>R$125 x ${valor} R$${multiplicacao}</p></div><img class='btn-remove' style='width:15px' src='images/icon-delete.svg'>`;
            let containerCarrinho = document.querySelector('.container-carrinho')
            if(!document.querySelector('.botao-checkout')){
                containerCarrinho.innerHTML += '<div class="botao-checkout" style="padding: 0 15px"><button style="cursor:pointer; width:100%; color: black; background: #ff7d1b; font-weight:700; font-size:16px; padding: 15px; border-radius: 5px; border: none;";>Checkout</button></div>'
            }
        }    
    })

} catch (error){
    console.log(error)
}



