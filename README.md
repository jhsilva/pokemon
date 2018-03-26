# Pokemon

Visualize os pokemons e suas descrições é bem divertido, aplie seu conhecimento sobre esse fantástico universo.

<p align="center">
  <img src="https://raw.githubusercontent.com/jhsilva/pokemon/master/docs/home.png" width="400" />
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/jhsilva/pokemon/master/docs/pikachu.png" width="400" />
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/jhsilva/pokemon/master/docs/charmeleon.png" width="400" />
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/jhsilva/pokemon/master/docs/venusaur.png" width="400" />
</p>

## Funcionamento:

- List

  Listagem de pokemon com a opção de carregar mais.

- Details

  Detalhes sobre de um pokemon especifico, mostrando suas habilidades e status.

- IndexedDB

  Com o PouchDB é possível deixar todas as requisicões já realizadas armazedas no client, assim evitando requests duplicados e carregando todo o conteúdo já requisitado diretamente do indexedDB do browser.

## Rodando o projeto local

- `npm install` instala as dependencias do projeto
- `npm start` roda o projeto na porta `localhost:4000`

## Tecnologias:

- ES6
- React
- Redux
- StyledComponents
- Webpack
- PouchDB
- Recharts
- TyniColor

## Tarefas Pendentes:

- [ ] deixar link full nos items da lista
- [ ] colocar loading para requisições ajax
- [ ] botão de voltar na pagina details
- [ ] estilos do botão carregar mais
- [ ] pegar descripion sempre por "en"
- [ ] carregar details automatico
- [ ] ajustar responsive
