const create = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { name, address, city, state, zip, img, mortgage, rent } = req.body;

  dbInstance
    .create([name, address, city, state, zip, img, mortgage, rent])
    .then(item => res.status(200).json(item))
    .catch(err => {
      res.status(500).send({ errorMessage: "Unable to create item" });
      console.log(err);
    });
};

const readOne = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { id } = req.params;

  dbInstance
    .read_one(id)
    .then(item => res.status(200).send(item))
    .catch(err => {
      res.status(500).send({ errorMessage: "Unable to read or get item" });
      console.log(err);
    });
};

const readAll = (req, res, next) => {
    const dbInstance = req.app.get("db");
  
    dbInstance
      .read_all()
      .then(items => res.status(200).send(items))
      .catch(err => {
        res.status(500).send({ errorMessage: "Unable to read or get items" });
        console.log(err);
      });
  };
  
  const updateItem = (req, res, next) => {
    dbInstance = req.app.get("db");
    const { params, body } = req;
  
    dbInstance
      .update([params.id, body.name, body.price, body.image_url])
      .then(item => res.status(200).json(item))
      .catch(err => {
        res.status(500).send({ errorMessage: "Unable to update items" });
        console.error(err);
      });
  };
   
  const deleteItem = (req, res, next) => {
    dbInstance = req.app.get("db");
    const { id } = req.params;
    console.log(id);
    dbInstance
      .delete(+id)
      .then(inventory => res.status(200).json(inventory))
      .catch(err => {
        res.status(500).send({ errorMessage: "Unable to delete items" });
        console.log(err);
      });
  };
  
  module.exports = {
    create,
    readOne,
    readAll,
    updateItem,
    deleteItem
  };