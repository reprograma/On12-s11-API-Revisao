const findById = (model, id) => {
    let filteredData = model.find(item => item.id == id);

    return filteredData;
};

module.exports = {
    findById
};