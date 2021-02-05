<img alt="Gobarber" src="./github/capa.png"/>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/badge/Languages-1-blue">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-lightgrey">
  </a>
</p>

<p align="center">
  <a href="#sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#documentações">Documentações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## Sobre o projeto
Food api é uma api REST para o gerenciamento de alimentos de uma cozinha. Com essa api é possivel cadastrar, consultar, modificar caracteristas e deletar alimentos.

## Tecnologias
 - [TypeScript](https://www.typescriptlang.org/)
 - [ Nodejs ]( https://nodejs.org/en/ )
 - [ Expressjs ]( https://expressjs.com/pt-br/ )
 - [ Jest ]( https://jestjs.io/ )
 - [ docker ]( https://hub.docker.com/ )
 - [ MongoDB]( https://www.mongodb.com/cloud/atlas )

  ## Documentações
  - Swagger
  A documentação do swagger estará dispovivel no endereço abaixo assim que a aplicação estiver rodando.
  ####Swagger food API
 - [http://localhost:3333/v1/apiDoc](http://localhost:3333/v1/apiDoc)
  ### Como usar
   Para fazer o download do projeto abra o **```terminal```** e execute o comando abaixo:
  ```
  git clone https://github.com/bhyago/go-barber-2.0.git
  ```

  ## Pré-requisito
:rotating_light:Esse projeto faz uso de algumas tecnologias obrigatorias para o fucionamento da aplicação. Antes de seguir em frente certifique-se de que o e **Nodejs** na versão **12.14.1** ou superios, esteja instalados no seu computador.

- Instale o mongodb e configure seguindo as mesmas configurações do arquivo ``./foodapi/ormconfig``
- A instalação pode ser feita no seu ambiente usando **Docker** ou **instalador**


**Instalando as Dependências**

  Para instalar as dependências necessarias e gerar a pasta **```node_modules```** execute o comando:
  ```
  yarn
  ```
  OU
  ```
  npm install
  ```
  :rotating_light:**obs**:recomendamos que seja utilizado o **``yarn``**


**Inicialização do servidor**

  Para inicializar o servidor, no terminal execute o comando ``/backend``:
  ```
  yarn dev:server
  ```
  Se desejar iniciar o servidor juntamente com **```degub```** do **```vscode```**, execute o seguinte comando:
  ```
  yarn dev:degub
  ```

#### :memo: Licença

  Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.


 ##### **Feito com :heart: by Hyago Braga**

