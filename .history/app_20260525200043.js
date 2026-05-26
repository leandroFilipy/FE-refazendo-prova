async function carregar6() {
    
    const  container = document.querySelector("#destaques-showcase")
    container.innerHTML = ""

    try{

        const resposta = await fetch ("https://api-restaurante-5iqb.onrender.com/api/produtos")
        const data = await resposta.json()

        const destacados = data.filter(produto => produto.destacados === true)

        for(let i =0; i<6; i++){

                container.innerHTML += `
                <div class="card" onclick="window.location.href='detail.html?id=${destacados[i].id}'" style="cursor: pointer">
                    <img src=${destacados[i].ima} alt="Nome do Produto" class="card-image" onerror="this.src='https://placehold.co/300x200?text=Sem+Imagem'">
                    <div class="card-body">
                        <span class="card-category text-muted">Entradas</span>
                        <h3 class="card-title">Nome do Produto</h3>
                        <p class="card-desc">Descrição do Produto</p>
                        <div class="card-footer">
                            <span class="price">R$ 0,00</span>
                            <button class="btn btn-secondary" onclick="event.stopPropagation(); window.location.href='detail.html?id=${product.id}'">
                                Ver Mais
                            </button>
                        </div>
                    </div>
                </div>
                `
            }
        
       

        

    }catch(error){
        console.log("erro foi: " + error)
    }

}