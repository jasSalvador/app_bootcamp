import User from "../models/user.model.js";
import Bootcamp from "../models/bootcamp.model.js";


//encuentra todos los usuarios y muestra los bootcamp vinculados
export const findAll = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'firstName', 'lastName', 'email'],
            include: [
                {
                    model: Bootcamp,
                    as: "bootcamps",
                    attributes: { attributes: [] },
                    attributes: ['id', 'title', 'cue', 'description']
                },
            ],
            where: { status: true }
        });
        res.send({ code: 200, data: users });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: "Error al consultar los usuarios",
        });
    }
};



//Crear y guardar usuario
export const createUser = async (req, res) => {
    try {
        let { firstName, lastName, email } = req.body;

        const [user, created] = await User.findOrCreate({
            where: { email },
            defaults: {
                firstName,
                lastName,
                email,
            },
        });

        if (!created) {
            return res.status(400).send({ code: 400, message: `Usuario con email (${user.email}) ya existe.` })
        }

        res.status(201).send({
            code: 201,
            message: `Usuario ${user.firstName}, con ID: ${user.id} creado con exito.`,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({ code: 500, message: error.message });
    }
};



//Obtener los bootcamp de un usuario
export const findUserById = async (req, res) => {
    try {
        let { id } = req.params;

        const user = await User.findOne({
            where: { id },
            attributes: ['id', 'firstName', 'lastName', 'email'],
            include: {
                model: Bootcamp,
                as: "bootcamps",
                through: { attributes: [] },
                attributes: ['id', 'title', 'cue', 'description']
            },

        });
        res.send({ code: 200, data: user });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: error.message,
        });
    }
};


//Actualizar datos de usuario por ID
export const updateUserById = async (req, res) => {
    try {
        let { id } = req.params;
        let { firstName, lastName, email } = req.body;
        let user = await User.findByPk(id)
        if (user) {
            let updatedUser = await User.update(
                { id, firstName, lastName, email },
                { where: { id } }
            );
            return res.status(201).send(` User with ID: ${updatedUser} updated successfully`)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            code: 500,
            message: error.message
        })
    }
};


//borramos a traves de un update al cambiar el status
export const changesStatus = async (req, res) => {
    try {
        let { id } = req.params;
        let { status } = req.body
        await User.update(
            { status },
            { where: { id } }
        )
        res.status(201).send(`User with ID: ${id} deleted successfully`)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            code: 500,
            message: error.message
        })
    }
};



//elimina de la base de datos la informacion
export const deleteUserById = async (req, res) => {
    try {
        let { id } = req.params;
        await User.destroy({
            where: { id }
        })
        res.status(201).send(`User with ID: ${id} deleted successfully`)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            code: 500,
            message: error.message
        })
    }
}
