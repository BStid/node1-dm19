let animals = ['rat', 'komodo dragon', 'spider', 'unicorn', 'bunny', 'lemming'];

module.exports = {
  getAnimals: (req, res) => {
    if (animals.length >= 1) {
      res.status(200).json(animals);
    } else {
      res.status(404).json('There are no animals');
    }
  },

  editAnimal: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    animals.splice(id, 1, name);
    res.json(animals);
  },

  addAnimal: (req, res) => {
    animals.push(req.body.name);
    res.json(animals);
  },

  deleteAnimal: (req, res) => {
    const { id } = req.params;

    animals.splice(id, 1);
    res.json(animals);
  }
};
