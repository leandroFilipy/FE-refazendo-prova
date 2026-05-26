async function carregar6() {
    
    const  container = document.querySelector("#destaques-showcase")
    container.innerHTML = ""

    try{

        const resposta = await fetch ("https://api-restaurante-5iqb.onrender.com/api/produtos")
        const data = await resposta.json()

        data.sort((a,b) => a.preco - b.preco)
        const destacados = data.filter(produto => produto.destacado === true);
        const sixSeven = destacados.slice(0,6)

        sixSeven.forEach(produto => {
            
            container.innerHTML += `
            <div class="card" onclick="window.location.href='detail.html?id=${produto.id}'" style="cursor: pointer">
                    <img src=${produto.imagem} alt=${produto.imagem} class="card-image" onerror="this.src='https://placehold.co/300x200?text=Sem+Imagem'">
                    <div class="card-body">
                        <span class="card-category text-muted">${produto.categoria}</span>
                        <h3 class="card-title">${produto.nome}</h3>
                        <p class="card-desc">${produto.descricao}</p>
                        <div class="card-footer">
                            <span class="price">R$ ${produto.preco.toFixed(2).replace(".", ",")}</span>
                            <button class="btn btn-secondary" onclick="event.stopPropagation(); window.location.href='detail.html?id=${produto.id}'">
                                Ver Mais
                            </button>
                        </div>
                    </div>
                </div>
            `
        });

        /*for(let i =0; i<6; i++){

                container.innerHTML += `
                
                `
            }
        */
       

        

    }catch(error){
        console.log("erro foi: " + error)
    }

}

async function pegarTodosname() {
    
    const container = document.querySelector("#catalogo-wrapper")
    
    const resposta = await fetch("https://api-restaurante-5iqb.onrender.com/api/produtos")
    const data = await resposta.json();

   
    const entradas = data.filter(produto => produto.categoria == "Entradas")
    const pratosPrincipais = data.filter(produto => produto.categoria == "Pratos Principais")
    const bebidas = data.filter(produto => produto.categoria == "Bebidas")
    const Sobremesas = data.filter(produto => produto.categoria == "Sobremesas")

    entradas.forEach(produto =>)
    container.innerHTML += `
    <div class="bloco-grupo-pratos" style="margin-bottom: 3rem;">

        <!-- Cabeçalho da Seção com Título e Filtro de Preço -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #333; padding-bottom: 1rem; margin-bottom: 2rem;">
          <h2>${entradas.categoria} <span style="font-size: 1rem; color: #888; font-weight: normal;"> - 2 itens</span></h2>
          <select class="seletor-ordem" style="padding: 0.5rem; border-radius: 4px; border: 1px solid #444; background-color: #222; color: #fff;">
            <option value="asc">Menor Preço</option>
            <option value="desc">Maior Preço</option>
          </select>
        </div>

        <!-- Grid de Produtos da Categoria -->
        <div class="grid">
          <!-- Modelo de Card de Produto -->
          <div class="card" onclick="window.location.href='detail.html?id=123'" style="cursor: pointer">
            <img src="https://placehold.co/300x200?text=Sem+Imagem" alt="Nome do Produto" class="card-image" onerror="this.src='https://placehold.co/300x200?text=Sem+Imagem'">
            <div class="card-body">
              <span class="card-category text-muted">Entradas</span>
              <h3 class="card-title">Nome do Produto Mockado</h3>
              <p class="card-desc">Descrição breve do produto aparecerá aqui...</p>
              <div class="card-footer">
                <span class="price">R$ 0,00</span>
                <button class="btn btn-secondary" onclick="event.stopPropagation(); window.location.href='detail.html?id=123'">
                  Ver Mais
                </button>
              </div>
            </div>
          </div>
          <!-- Fim do Modelo de Card -->
        </div>

      </div>`


}