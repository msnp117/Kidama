const Usuario = require("../models/user.model");

const getUser = (req, res) => {
  const { id } = req.params;

  if (id.length === 24) {
    Usuario.findById(id).then((usuario) => {
      if (!usuario) {
        return res.json({ mensaje: "Usuario no encontrado" });
      } else {
        const { _id, contraseña, __v, ...resto } = usuario._doc;
        res.json(resto);
      }
    });
  } else {
    res.json({ mensaje: "Estas enviando un id incorrecto" });
  }
};

module.exports = getUser;
