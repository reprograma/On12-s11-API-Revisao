const travels = require("../models/travels.json");
const passengers = require("../models/passengers.json");
const utils = require("../utils/travelsUtils");// deixar em uma pasta aparti os cód recorrentes escritos de forma genérica para serem usados em qualquer arquivo do projeto
const fs = require("fs"); //File System, não precisa instalar pois é módulo nativo do node.js, basta importar por meio do require.

const getAllTravels = (req, res) => {
    res.status(200).send(travels)
};
const getTravelById = (req, res) =>{
    let idRequerido = req.params.id;
    let filterdTravel = utils.findById(travels, idRequerido);
    res.status(200).send(filterdTravel);
};

//pegando todas as viagens ordenadas pela capacidade
const getAllTravelsOrderedByCapacity = (req, res) => {
    const filterTravel = travels.filter(travel => travel.busInfos.capacity > 0)
    const sortTravelCapacity = filterTravel.sort(function (a, b) {
	
        return (a.busInfos.capacity > b.busInfos.capacity) ? 1 : ((b.busInfos.capacity > a.busInfos.capacity) ? -1 : 0);
     
    });
    res.status(200).send(sortTravelCapacity)
};

const getAllTravelsOrderedByDurationPrediction = (req, res) => {
    const filterTravel = travels.filter(travel => travel.durationPrediction > 0)
    const sortTravelDurationPrediction = filterTravel.sort(function (a, b) {
	
        return (a.durationPrediction > b.durationPrediction) ? 1 : ((b.durationPrediction > a.durationPrediction) ? -1 : 0);
     
    });
    res.status(200).send(sortTravelDurationPrediction)
};

const getAllTravelsOrderedByStops = (req, res) => {
    const filterTravel = travels.filter(travel => travel.stops > 0)
    const sortTravelStops = filterTravel.sort(function (a, b) {
	
        return (a.stops > b.stops) ? 1 : ((b.stops > a.stops) ? -1 : 0);
     
    });
    res.status(200).send(sortTravelStops)
};
//adicionar um novo passageiro à uma viagem recebendo o nome do passageiro, seu email , número do documento e id da viagem na rota.
const createPerson = (req, res)=>{
    //trazer os dados da requisição
    let {name, email, documentNumber} = req.body;

    let newPerson = {
        id: Math.random().toString(32).substr(2),
         name, 
         email,
         documentNumber
        };
    let travelRequiredId = req.params.id;
    //verificar o id de cada item da lista de viagens para achar aquele q é igual ao id requerido
    let travelRequired = utils.findById(travels, travelRequiredId);

    travels.forEach((travel)=>{
        //achar a viagem requerida dentro das viagens.
        let sameTravel = travel === travelRequired;
        //garantir que o passageiroseja incluído exclusivamente na viagem escolhida.
        if(sameTravel){
            travel.passengersInfos.push(newPerson);
        };
    });
    //usar módulo fs para escrever as alterações no arquivo, o que for incluído no body será gravado no model.
    fs.writeFile("./src/models/travels.json", JSON.stringify(travels), 'utf8', function (err){
        if(err){
            res.status(500).send({
                "message": err
            })
        }else{
            res.status(201).send({
                "message": "Passageiro adicionado à viagem com sucesso", travelRequired});
        }
    });   
};
//editar motorista
const editDriver = (req,res) => {
    let requestIdTravel = req.params.id
    let {id, name, license} = req.body

    let TravelFilter = utils.findById(travels,requestIdTravel)

    const index = travels.indexOf(TravelFilter)

    const updateDriver = {
        id,
        name,
        license
    }

    if (index >= 0) {
        travels.splice(index,1,updateDriver)
        fs.writeFile("./src/models/travels.json", JSON.stringify(travels), 'utf8', function(err){
            if (err) {
                res.status(500).send({message: err})
            } 
            else {
                res.status(200).json([{
                    "message": "Motorista substituido com sucesso",
                    updatePassenger
                }])
            }
        })
    } 
    else {
        res.status(404).send({message: "Motorista não encontrado"})
    }
};


const replaceDriver = (req, res) =>{
    let requestIdTravel = req.params.id
    let {name, license} = req.body

    const newDriver = {
        id: Math.random().toString(32).substr(2),
        name,
        license
    }

    let TravelFilter = utils.findById(travels,requestIdTravel)

    travels.forEach((travel) => {
        let sameTravel = travel == TravelFilter

        if(sameTravel){
            travel.driverInfos = []
            travel.driverInfos.push(newDriver)
        }

    })

    fs.writeFile("./src/models/travels.json", JSON.stringify(travels), 'utf8', function(err){
        if(err){
            res.status(500).send({
                "message": err
            })
        } else{
            res.status(201).send({
                "message": "Motorista substituído com sucesso", newDriver
            })
        }
    })
};


//deletar um passageiro do sistema) o registro dele continua nas informações da viagem)
const deletePerson =(req, res)=>{
    const requestId = req.params.id;
    const filteredPerson = utils.findById(passengers,requestId);
    const index = passengers.indexOf(filteredPerson);
    if(index >=0){
        passengers.splice(index,1);
        fs.writeFile("./src/models/passengers.json", JSON.stringify(passengers), "utf8",function (err){
            if(err){
                res.status(500).send({
                    "message": err
                })
            }else{
                res.status(201).send({
                    "message": "Passageiro adicionado à viagem com sucesso", passengers});
            };
        });
    }
};

//deletar uma viagem
const deleteTravel = (req,res) => {
    const requestId = req.params.id

    const filterId = utils.findById(travels, requestId)
    
    const index = travels.indexOf(filterId)

    if(index >= 0){
        travels.splice(index,1)

        fs.writeFile("./src/models/travels.json", JSON.stringify(travels), 'utf8', (err) => {
            if(err){
                res.status(500).send({
                    "message": err
                })
            }else{
                res.status(201).send({
                    "message": "Viagem excluido com sucesso", travels
                })
            }
        })
    }
}


module.exports = {
    getAllTravels,
    getTravelById,
    getAllTravelsOrderedByCapacity,
    getAllTravelsOrderedByDurationPrediction,
    getAllTravelsOrderedByStops,
    createPerson,
    editDriver,
    replaceDriver,
    deletePerson,
    deleteTravel
}