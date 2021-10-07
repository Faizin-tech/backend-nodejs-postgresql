module.exports = (sequelize, Sequelize) => {
    const LogSearch = sequelize.define("LogSearch", {
        UrlEndPoint: {
            type: Sequelize.STRING
        },
        Parameter: {
            type: Sequelize.STRING
        }
    });
    return LogSearch;
};
