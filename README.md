## Considerações sobre o desafio

O Projeto foi um grande desafio, muito legal, diga-se de passagem.

Utilizei alguns conceitos que vinha observando na comunidade e muita coisa que aprendi ao longo do tempo que estou estudando front-end.

Utilizei o Redux e Redux Saga para o gerenciamento dos estados de contas vinculadas aos canais de social media, e também para persistir os mesmo ao recarregar a aplicação na próxima visita (Refresh / F5). Também utilizei styled components para o CSS, gosto muito de trabalhar com essa lib, consigo me organizar melhor com essa ferramenta.

Apliquei um loading ao consultar as contas disponíveis para vinculação em cada canal disponível (Eu adoro esse tipo de coisa/animação).

Para os layouts entre desktop / mobile utilizei uma lib que identifica o dispositivo do usuário e para cada um deles eu chamei rotas específicas (alterando o endereço da URL sempre), no caso do desktop estou chamando as rotas de modal/popup e para o mobile eu chamo as rotas normalmente sem a modal, criando um layout "fullscreen". (quando testar o site em dispositivos diferentes, lembre de dar um refresh para que o site faça a validação do dispositivo, como se estivesse acessando o site pela primeira vez).

O menu responsivo foi um grande desafio pois eu não tinha idéia de qual layout eu deveria seguir nessa situação, mas gostei do resultado final.

Tentei componentizar ao máximo, mas ao longo do desenvolvimento vi que poderia componentizar muito mais.

Vale lembrar que não encontrei alguns SVGs disponíveis idênticos ao menu da mLabs nas versões free do FontAwesome e MaterialDesign então acabei utilizando alguns semelhantes, sim, eu sei, o UX vai pegar no meu pé, mas com ele por perto acredito que eu conseguiria ter todo o material necessário para buildar corretamente seguindo o layout, mil perdões ... :P

No geral gostei muito da experiência, e do resultado final. Notei vários pontos que posso melhorar ainda mais, como melhoria para o projeto caso tivesse mais tempo, olharia com mais carinho para a parte responsiva do site, a componentização de mais elementos que encontrei pelo caminho, e a implementação dos testes com Jest.

Abaixo alguns scripts para executar o projeto

- Utilizei o Reactotron para monitorar as chamadas e troca de estados, pode ser que apareça algum 'error' no console que não conseguiu se conectar a ele em ambiente de dev, mas isso não impede que o site funcione.

## Available Scripts

In the project directory, you can run:

### `npm install` or `yarn`

Install the dependencies of the project.

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
