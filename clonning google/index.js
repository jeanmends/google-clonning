const btnQuadrado = document.getElementById("btn-quadrado");
const flutuante = document.getElementById("flutante");
let contador = 0;
btnQuadrado.addEventListener("click",function(){
 contador++;
 btnQuadrado.classList.toggle("teste");

   if (flutuante.style.visibility== 'visible'){

    flutuante.style.visibility = 'hidden';
   }else{

    flutuante.style.visibility = 'visible';
   }
});

window.addEventListener('click', function(e){   
  if (btnQuadrado.contains(e.target) || flutuante.contains(e.target)){
    // Clicked in box
  } else{
    // Clicked outside the box
    flutuante.style.visibility = 'hidden';
    btnQuadrado.classList.remove("teste");
  }
});


let cor = document.getElementById("escolher-cor");
let confirmar = document.getElementById("btn-confirmar");
let escolhida = '#ffffff'
cor.addEventListener("change", function(){
  escolhida = document.getElementById("escolher-cor").value;
})
  confirmar.addEventListener("click", function(){
  
    document.body.style.backgroundColor = escolhida;
  })

const btnEditar = document.getElementById("btn-editar");
const flutanteEditar = document.querySelector(".painel-editar");
btnEditar.addEventListener("click",function(){
  contador++;
  btnEditar.classList.toggle("editar-efeito");
  if (flutanteEditar.style.visibility== 'visible'){

    flutanteEditar.style.visibility = 'hidden';
   }else{

    flutanteEditar.style.visibility = 'visible';
   }
})

window.addEventListener('click', function(e){   
  if (btnEditar.contains(e.target) || flutanteEditar.contains(e.target)){
    // Clicked in box
  } else{
    // Clicked outside the box
    flutanteEditar.style.visibility = 'hidden';
    btnEditar.classList.remove("editar-efeito");
  }
});