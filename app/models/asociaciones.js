import User from "./user.model.js";
import Bootcamp from "./bootcamp.model.js";


//relacion muchos a muchos
User.belongsToMany(Bootcamp, {
    as: "bootcamps",
    through: "user_bootcamp"
});

Bootcamp.belongsToMany(User, {
    as: "users",
    through: "user_bootcamp",
});