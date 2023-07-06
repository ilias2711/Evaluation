const createEntity = (req, res) => {
  // Récupérer les données du corps de la requête
  const { name, description } = req.body;

  // Logique pour créer l'entité avec les données fournies
  // ...

  // Envoyer une réponse avec les données de l'entité créée
  res.status(201).json({ success: true, message: 'Entité créée avec succès' });
};

module.exports = {
  createEntity
};
