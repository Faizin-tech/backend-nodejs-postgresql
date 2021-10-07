module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        UserName: {
            type: Sequelize.STRING,
        },
        Parent: {
            type: Sequelize.INTEGER,
        },
    });
    return User;
};
