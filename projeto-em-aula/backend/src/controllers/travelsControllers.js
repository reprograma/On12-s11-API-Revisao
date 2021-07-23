const travels = require("../models/travels.json");
const passengers = require("../models/passengers.json");
const utils = require("../utils/travelsUtils");

const fs = require("fs");

const getAllTravels = (req, res) => {
    res.status(200).send(travels);
};

const getTravelById = (req, res) => {
    // trazer o id vindo da requisição
    let idRequerido = req.params.id;

    // encontrar o item da lista que possui o mesmo id que foi solicitado
    let filteredTravel = utils.findById(travels, idRequerido);

    // enviar o item como resposta
    res.status(200).send(filteredTravel);
};

// adicionar um novo passageiro à uma viagem recebendo da requisão nome, email e numero do documento

const createPerson = (req, res) => {
    // trazer o dados da requisição
    let { name, email, documentNumber } = req.body;

    let newPerson = {
        id: Math.random().toString(32).substr(2),
        name,
        email,
        documentNumber
    };

    // id da viagem que chega através do path params
    let travelRequiredId = req.params.id;

    //verificar o id de cada item da lista de viagens para achar aquele que é igual ao id requerido
    let travelRequired = utils.findById(travels, travelRequiredId);

    travels.forEach((travel) => {
        let sameTravel = travel === travelRequired;

        if (sameTravel) {
            travel.passengersInfos.push(newPerson);
        };
    });

    // usar módulo fs para escrever as alterações no nosso arquivo

    fs.writeFile("./src/models/travels.json", JSON.stringify(travels), 'utf8', function(err) {
        if (err) {
            res.status(500).send({
                "message": err
            })
        } else {
            // enviar a resposta pro postman
            res.status(201).send({ "message": "Passageiro adicionado à viagem com sucesso", travelRequired });
        };
    });
};

// deletar um passageiro do SISTEMA (o registro dele continua nas informações da viagem)
const deletePerson = (req, res) => {
    // id requerido 
    const requestId = req.params.id;

    // achar o item da lista que corresponde ao id requerido
    const filteredPerson = utils.findById(passengers, requestId);
    console.log(filteredPerson);

    const index = passengers.indexOf(filteredPerson);

    if (index >= 0) {
        passengers.splice(index, 1);

        fs.writeFile("./scr/models/passengers.json", JSON.stringify(passengers), "utf8", (err) => {
            if (err) {
                res.status(500).send({
                    "message": err
                })
            } else {
                res.status(200).send({
                    "message": "Passageiro excluído com sucesso",
                    passengers
                })
            };
        });
    };
};

// atualizar um passageiro no sistema
const updatePerson = (req, res) => {
    // trazer id do passegeiro
    const requiredId = req.params.id;
    // trazer dados da atualização
    const { name, email, documentNumber } = req.body;

    // filtrar para achar o passageiro
    let filteredPassenger = utils.findById(passengers, requiredId);

    // console.log(filteredPassenger);
    // console.log('TRAVEL ID', filteredPassenger.travelId)
    // criar novo objeto do passageiro
    const updatedPassenger = {
        id: filteredPassenger.id,
        name,
        email,
        documentNumber,
        travelId: filteredPassenger.travelId
    };

    // achar index do passageiro
    const index = passengers.indexOf(filteredPassenger)


    // verificar se o index existe, se existir, usar método splice para substituição
    if (index >= 0) {
        passangers.splice(index, 1, updatedPassenger);
        // usar método fs e enviar resposta 
        fs.writeFile("./src/models/passangers.json", JSON.stringify(passengers), "utf8", (err) => {
            if (err) {
                res.status(500).send({
                    "message": err
                })
            } else {
                res.status(200).send({
                    "message": "Passageiro atualizado com sucesso",
                    filteredPassenger
                })
            }
        })
    }
};

// editar o nome do passageiro no sistema
const updateName = (req, res) => {
    const requiredId = req.params.id; // armazenando em uma variável o id do passageiro que chega via path params
    let newName = req.body.name; // armazenando o nome do passageiro a ser atualizado
    // console.log(requiredId)

    let filteredPassenger = utils.findById(passengers, requiredId);
    // console.log('PASSENGER', filteredPassenger);

    if (filteredPassenger) {
        // console.log(filteredPassenger)
        filteredPassenger.name = newName; // atribuição de valor

        fs.writeFile("./src/models/passengers.json", JSON.stringify(passengers), 'utf8', (err) => {
            if (err) {
                res.status(500).send({ message: err }) // caso de erro retorno status 500
            } else {
                res.status(200).json([{
                    "mensagem": "Nome do passageiro atualizado com sucesso",
                    filteredPassenger
                }]);
            }
        })
    } else {
        res.status(500).send({ "message": "Passageiro não encontrado" })
    }
};

module.exports = {
    getAllTravels,
    getTravelById,
    createPerson,
    deletePerson,
    updatePerson,
    updateName
}