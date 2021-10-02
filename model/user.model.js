module.exports = (sequelize, Sequelize) => {
    const UserBoffice = sequelize.define("UserBoffice", {
        idUser: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        name: {
            type: Sequelize.STRING,
        },
        phoneNo: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.TEXT,
        },
        role: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.BOOLEAN,
        },
        deptCode: {
            type: Sequelize.STRING,
        },
        salesPerson:{
            type: Sequelize.STRING
        },
    });
    return UserBoffice;
};
