const Usuario = require("../models/user.model");

const register = (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  Usuario.findOne({ correo }).then((usuario) => {
    if (usuario) {
      return res.json({ mensaje: "Ya existe un usuario con este correo" });
    } else if (!nombre || !correo || !contraseña) {
      return res.json({ mensaje: "Falta nombre/correo/contraseña" });
    } else {
      const nuevoUsuario = new Usuario({
        nombre,
        correo,
        contraseña,
      });

      nuevoUsuario
        .save()
        .then((usuario) => {
          res.json({ mensaje: "Usuario creado correctamente", usuario });
        })
        .catch((error) => console.error(error));
    }
  });
};

module.exports = register;
