### On12 API-CRUD | Projeto Guiado

## Bem vinda ao {reprograma}trip
Uma api que permite você observar diferentes viagens de ônibus, controlando informações sobre o motorista e passageiros!<br />

Vamos fazer o CRUD obsevando as demandas de negócio :point_down:

# Demandas de Negócio

-[OK]ver todas as viagens disponíveis<br />
- ver viagens por tempo de duração<br />
- ver viagens com número de passageiros<br />
- ordenar viagens com número de paradas<br />

- [OK]cadastrar novo passageiro em uma viagem enviando apenas nome, email e id da viagem<br />
- [ok]cadastrar todas as informações de um novo motorista em uma viagem<br />

-[OK]deletar uma viagem<br />
- [OK]deletar um passageiro no sistema<br />

- editar qualquer dado do motorista<br />
- [OK]substituir motorista<br />
- editar nome do passageiro no sistema<br />
- [OK]atualizar um passageiro no sistema<br />

# Orientações para requests (Contrato API)
Use o espaço abaixo para organizar as urls e respectivas ações do CRUD, relacionando com as demandas de negócio.<br />

## Em aula
REFERENTE À VIAGENS:
- ver todas as viagens disponíveis<br />
{GET}/travels
const getAllTravels

- pesquisar uma viagem por id<br />
{GET}/travels/:id
const getTravelById

REFERENTE À PASSAGEIRO:
- cadastrar novo passageiro em uma viagem enviando apenas nome, email e id da viagem<br />
{POST}/travels/:id/passenger/create
      {
             "id": automático,
            "name": String,
            "email": String,
            "documentNumber": String,
            "travelId":String
        }

const createPeople

- deletar um passageiro do sistema<br />
{DELETE}/passenger/:id/delete
const deletePeople

- atualizar um passageiro no sistema<br />
{PUT}/passenger/:id/update
const updatePeople

{
                "name": String,
                "email": String,
                "documentNumber": String,
                "travelId":String
            }

- editar nome do passageiro no sistema<br />
 {PATCH}/passenger/:id/updateName

  {         
            "name": String,
           
        }

### Para Casa
-[OK] ordenar viagens com número de passageiros<br />
- [OK]cadastrar todas as informações de um novo motorista em uma viagem<br />

- [OK]editar qualquer dado do motorista<br />
-[OK] substituir motorista<br />

- [ok]deletar uma viagem<br />

DESAFIO \o/<br />
- [OK]ver viagens por tempo de duração<br />
- [OK]ordenar viagens com número de paradas<br />

