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
    
    const container = document.querySelector("")
    
    const resposta = await fetch("https://api-restaurante-5iqb.onrender.com/api/produtos")
    const data = await resposta.json();

    data.forEach(produto)
    container.innerHTML +=

}