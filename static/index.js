const viloes = document.querySelectorAll('.vilao');
const meninas = document.querySelectorAll('.menina');

let meninaSelecionado = 0;
let vilaoSelecionada = 0;

for(const vilao of viloes){

    vilao.addEventListener('click', function(){
        
        if(document.getElementsByClassName('vilao-selecionado').length < 1){
            this.classList.add('vilao-selecionado');
            vilaoSelecionado = this.getAttribute('data-vida'); 
        }else{ 
            this.classList.remove('vilao-selecionado'); 
            vilaoSelecionado = 0
        }
    })
}


for(const menina of meninas){

    menina.addEventListener('click', function(){

        if(document.getElementsByClassName('menina-selecionada').length < 1){
            this.classList.add('menina-selecionada');
            meninaSelecionada = this.getAttribute('data-dano');
        }else{
            this.classList.remove('menina-selecionada');
            meninaSelecionada = 0
        }
    })
}

function calcularDano(){

    const danoDados = rolarOsDados();
    const danoTotal = danoDados + meninaSelecionada;

    if(vilaoSelecionado == 0 || meninaSelecionada == 0){
        window.alert('Você precisa selecionar uma menina e um vilão!!!');
    }else{
        if(danoTotal >= vilaoSelecionado){
            window.alert(`Dano: ${danoTotal}! E o dia foi salvo graças as meninas super poderosas!!!`);
        }else{
            window.alert(`Dano: ${danoTotal}... O vilão sobreviveu ao ataque...`);
        }
    }
    document.getElementById('vilao').classList.remove('vilao-selecionado');
    document.getElementById('menina').classList.remove('menina-selecionada');

}

function rolarOsDados() {
    const min = Math.ceil(1);
    const max = Math.floor(10);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}