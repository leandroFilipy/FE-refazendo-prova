# 🍽️ Avaliação Prática - Cardápio Digital

**Turma**: 👨‍💻 Programação Front-End (MI77)

Você atua como Desenvolvedor Front-End em uma agência de tecnologia. Um cliente do setor gastronômico solicitou a finalização de um **Cardápio Digital de alto padrão**. A interface (HTML/CSS) já foi desenvolvida, agora é sua vez de implementar a lógica JavaScript para consumir uma API e gerenciar os dados dinamicamente! 🚀

---

## 🎯 Desafios Propostos

Considerando o ambiente de desenvolvimento configurado e a documentação da API fornecida, você deve:

### 1️⃣ **Página Inicial (Home)**
Apresentar **6 itens destacados**, buscando na API e ordenando-os do **menor ao maior preço** (manipulando arrays no JavaScript).

### 2️⃣ **Cardápio em Seções**
Buscar a listagem completa de produtos e agrupá-los no DOM formando **"seções" por categoria** (Entradas, Principais, etc). Cada seção deve ter seu título dinâmico construído a partir dos dados da API.

### 3️⃣ **Produtos Relacionados (Detalhes)**
Na página de detalhes do produto, implementar uma seção de **"Mais produtos"** consultando produtos da mesma categoria e exibindo até 3 sugestões que diferem do produto atual.

---

## 📦 Resultados e Entregas

### ⚠️ **INSTRUÇÕES OBRIGATÓRIAS DE ENTREGA**

1. ⬇️ Instale a extensão **Local History** (publicada por xyz) no seu VS Code
2. ⚙️ Certifique-se de habilitar a opção de **Salvamento Automático (Auto Save)** do VS Code
3. 📦 Ao submeter a sua avaliação, você deve enviar o arquivo `.zip` do projeto contendo **obrigatoriamente** a pasta oculta `.history` (gerada automaticamente pela extensão)

> **⛔ Atenção**: Caso não siga estas instruções ou entregue o arquivo `.zip` sem a pasta `.history`, a prova será considerada como **incorreta, gerando nota zero**.

### 📋 Requisitos Técnicos

- ✅ **Entrega Técnica**: Interface funcional com a listagem vinda da API implementada via scripts no arquivo `app.js`, que deve estar identado e documentado
- 📁 **Formato Final de Envio**: Arquivo `.zip` completo (contendo todos os arquivos do site e a pasta `.history`)
- ⏱️ **Tempo estimado**: 3h

### 📎 Lista de Anexos

- 📦 Arquivo zipado com a estrutura inicial de código (`prova77.zip` com o arquivo `app.js` vazio além do HTML atualizado)
- 📚 Documentação da API: [api-restaurante-front.vercel.app](https://api-restaurante-front.vercel.app)

---

## 🛠️ Critérios de Avaliação

### 🎓 Capacidades (CAP)

| Código | Descrição |
| :---: | :--- |
| **C1** | 🔗 Aplicar técnicas de programação para integração de interfaces front-end com APIs |
| **C2** | 📝 Reconhecer diferentes linguagens de scripts para a aplicação de lógica no sistema |
| **C3** | 💡 Aplicar técnicas e linguagens atuais de acordo com escopo do projeto, considerando o ambiente de IDE |
| **C4** | 🎨 Reconhecer as características e funcionalidades da programação front-end |
| **C5** | 🌟 Adotar comportamentos profissionais com iniciativa e criatividade |

### ✅ Lista de Verificação (Desenvolvimento)

| Critério Avaliado | CAP | Nota Máx. |
| :--- | :---: | :---: |
| 🌐 Realizou o consumo do endpoint **GET** para listagem de produtos via **Fetch API** | C1 | 1,0 |
| 📊 Estruturou com consistência a lógica de **ordenação (sort)** e **agrupamento (filter)** de arrays | C1 | 1,0 |
| 🔄 Manipulou as respostas **JSON** aplicando raciocínio correto para estruturar o DOM | C1 | 1,0 |
| 🔁 Aplicou **estruturas de repetição** demonstrando compreensão da lógica | C2 | 0,5 |
| ❓ Aplicou **lógica condicional** para validar existência de dados antes da exibição | C2 | 0,5 |
| 💱 Implementou lógica de **tratamento de tipos** (ex: formatação de moeda) | C2 | 0,5 |
| ⚡ Utilizou recursos modernos (**Arrow Functions**, **Template Strings**, **Destructuring**) | C3 | 0,5 |
| 🐛 Demonstrou domínio da IDE e compreensão técnica para depuração | C3 | 0,5 |
| ⏳ Articulou o fluxo assíncrono (**async/await**) compreendendo o ciclo de vida dos dados | C3 | 0,5 |
| 🏗️ Gerou elementos HTML de forma dinâmica com **semântica** correta | C4 | 1,0 |
| 🎚️ Configurou eventos de **mudança (change)** dos selects | C4 | 0,5 |
| 📐 Alocou dados dinâmicos preservando o **layout original** | C4 | 0,5 |
| 📅 Geriu atividades com responsabilidade evidenciando propriedade técnica | C5 | 0,5 |
| 📖 Seguiu rigorosamente as especificações técnicas da API | C5 | 1,0 |
| 🎯 Demonstrou organização, autonomia e clareza sobre a solução | C5 | 0,5 |

---

## 🚀 Como Executar Localmente

Para garantir que as requisições à API funcionem corretamente (evitando bloqueios de CORS):

1. 📂 Abra a pasta raiz do projeto no seu editor de código (VS Code, etc)
2. 🔧 Instale uma extensão de servidor local (Live Server, HTTP Server, etc)
3. ▶️ Inicie a aplicação e acesse via `http://localhost:PORT`
4. 🌐 As requisições à API estarão protegidas contra bloqueios de CORS

### Alternativa com Python

```bash
# Python 3
python -m http.server 8000

# Depois acesse: http://localhost:8000
