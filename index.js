const menu = document.querySelector('.menu-bar');
const navMenu = document.querySelector('.menu');
const navMenu2 = document.querySelector('.nav-menu');
const back = document.querySelector('.back');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
    navMenu.classList.toggle('ativo')
    navMenu2.classList.toggle('ativo')
    // back.style = 'display: block;'
})

function changeImage(novaImg, estiloImg, borda){
    document.getElementById('img-principal').src = novaImg;
    document.querySelector(estiloImg).style.opacity = '0.4'
    document.querySelector(estiloImg).style.zIndex = '-1'
    let imgsMiniatura = document.querySelectorAll('#img-miniatura-principal img');
    imgsMiniatura.forEach(function(img){
        estiloImg = estiloImg.replace('.','');    
        if(!img.classList.contains(estiloImg)){
            img.style.opacity = '1';
            img.style.zIndex = 'initial';
        }
    })

    document.querySelector(borda).style = 'box-shadow: 0px 0px 0px 2px orange;'
    let imgsMiniaturaBorda = document.querySelectorAll('.div-imgsMiniatura');
    imgsMiniaturaBorda.forEach(function(img){
        borda = borda.replace('.','');    
        if(!img.classList.contains(borda)){
            img.style.boxShadow = 'none';
        }
    })
}

function changeImageModal(novaImgModal, estiloImgModal, bordaModal){
    document.getElementById('img-principal-modal').src = novaImgModal;
    document.querySelector(estiloImgModal).style.opacity = '0.4';
    let imgsMiniatura = document.querySelectorAll('#img-miniatura-modal img');
    imgsMiniatura.forEach(function(imgModal){
        estiloImgModal = estiloImgModal.replace('.','');    
        if(!imgModal.classList.contains(estiloImgModal)){
            imgModal.style.opacity = '1';
        }
    });

    document.querySelector(bordaModal).style.boxShadow = '0px 0px 0px 2px orange';
    let imgsMiniaturaBordaModal = document.querySelectorAll('.div-imgsMiniatura-modal');
    imgsMiniaturaBordaModal.forEach(function(imgModal){
        bordaModal = bordaModal.replace('.','');    
        if(!imgModal.classList.contains(bordaModal)){
            imgModal.style.boxShadow = 'none';
        }
    });
}

let carrinho = document.querySelector('.icone-carrinho');
let caixaCarrinho = document.querySelector('.container-carrinho');
carrinho.addEventListener('click', () =>{
    caixaCarrinho.classList.toggle('container-carrinho2');
})

const larguraTela = window.innerWidth;
if(larguraTela >= 591){
    let imgPrincipal = document.getElementById('img-principal');
    imgPrincipal.addEventListener('click', function(){
        document.querySelector('.modal').style.display = 'flex';
        document.querySelector('.icone-carrinho').style = 'z-index: -1'
        document.querySelector('.valor-qtd-carrinho').style = 'z-index: -1'
    });
}

let btnClose = document.querySelector('.btnClose');
btnClose.addEventListener('click', function(){
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.icone-carrinho').style = 'z-index: 2'
    document.querySelector('.valor-qtd-carrinho').style = 'z-index: 2'
});

try{
    let btnMais = document.querySelector('.mais');
    let quantidade = document.querySelector('.quantidade');
    let valor = 0;
    btnMais.addEventListener('click', function(){
        valor += 1;
        quantidade.innerHTML = valor;
    })
    let btnMenos = document.querySelector('.menos');
    btnMenos.addEventListener('click', function(){
        if(valor - 1 < 0 && valor == 0){
            throw new Error('Valor não pode ser negativo');
        } else {
            valor -= 1;
            quantidade.innerHTML = valor;
        }
    })   

    let btnAdd = document.querySelector('.btn-add');
    btnAdd.addEventListener('click', function(){
        if(valor == 0){
            throw new Error('Valor inválido');
        } else {
            let qtdCarrinho = document.querySelector('.valor-qtd-carrinho');
            qtdCarrinho.innerHTML = valor;
            let valorProduto = Number(document.querySelector('.valor-produto').innerText.replace(/(50%)/, '').replace('R$', ''));
            let multiplicacao = valorProduto * valor;
            let carrinho = document.querySelector('.carrinho');
            carrinho.classList.add('carrinho-atualizado');
            carrinho.innerHTML = `<img class='img-produto-carrinho' src=\'images/image-product-1-thumbnail.jpg\'><div style='height:100%; display:flex; flex-direction: column; justify-content: center; gap:10px'><p>Tênis de edição limitada de outono</p><p>R$125 x ${valor} R$${multiplicacao}</p></div><img class='btn-remove' style='cursor:pointer; width:15px' src='images/icon-delete.svg'>`;
            let containerCarrinho = document.querySelector('.container-carrinho');
            if(!document.querySelector('.div-botao-checkout')){
                containerCarrinho.innerHTML += '<div class="div-botao-checkout" style="padding: 0 15px"><button class="btn-checkout" style="cursor:pointer; width:100%; color: black; background: #ff7d1b; font-weight:700; font-size:16px; padding: 15px; border-radius: 5px; border: none;";>Checkout</button></div>';
            }
            document.querySelector('.btn-checkout').style.display = 'block';
            
            let remove = document.querySelector('.btn-remove');
            remove.addEventListener('click', function(){
                let carrinhoAtt = document.querySelector('.carrinho');
                carrinhoAtt.classList.remove('carrinho-atualizado')
                carrinhoAtt.innerHTML = "Seu carrinho está vazio";
                
                let temp = document.querySelector('.btn-checkout').style.display = 'none';
                qtdCarrinho.innerHTML = ''
            })
        } 
    })
} catch (error){
    console.log(error);
}







