### On12 API-CRUD | Projeto Guiado

## Bem vinda ao {reprograma}trip
Uma api que permite você observar diferentes viagens de ônibus, controlando informações sobre o motorista e passageiros!<br />

Vamos fazer o CRUD obsevando as demandas de negócio :point_down:

# Demandas de Negócio
referente a viagem
- ver todas as viagens disponíveis<br />
{GET} Travels
const getAllTravels

- ver viagens por tempo de duração<br />
{GET}travels/:id
const getTravelById

- ver viagens com número de passageiros<br />

- ordenar viagens com número de paradas<br />

- cadastrar novo passageiro em uma viagem enviando apenas nome, email e id da viagem<br />
{POST}/travels/:id /passager/ create
const createPeople


- cadastrar todas as informações de um novo motorista em uma viagem<br />

- deletar uma viagem<br />

- deletar um passageiro no sistema<br />
{DELETE}/passeger/:id
const deletePeople

- editar qualquer dado do motorista<br />

- substituir motorista<br />
- editar nome do passageiro no sistema<br />
{PACTH}/passager/:id/updateName


- atualizar um passageiro no sistema<br />
{PUT}/passager/:id/update
const updatePeople


# Orientações para requests (Contrato API)
Use o espaço abaixo para organizar as urls e respectivas ações do CRUD, relacionando com as demandas de negócio.<br />

## Em aula

- ver todas as viagens disponíveis<br />

- pesquisar uma viagem por id<br />

- cadastrar novo passageiro em uma viagem enviando apenas nome, email e id da viagem<br />

- deletar um passageiro do sistema<br />

- atualizar um passageiro no sistema<br />

- editar nome do passageiro no sistema<br />
 

