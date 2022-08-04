const Usuario = require("../models/user.model");

const login = (req, res) => {
  const { correo, contraseña } = req.body;

  Usuario.findOne({ correo }).then((usuario) => {
    if (!usuario) {
      return res.json({ mensaje: "Usuario no encontrado" });
    }

    if (contraseña === usuario.contraseña) {
      const { id, nombre } = usuario;

      res.json({
        mensaje: "Usuario logueado correctamente",
        usuario: { id, nombre },
      });
    } else {
      return res.json({ mensaje: "Contraseña incorrecta" });
    }
  });
};

module.exports = login;
