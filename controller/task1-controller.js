const sequileze =  require('../model').sequelize;

const task1 =  async (req, res) => {

    sequileze.query(
        `
            INSERT INTO "Users" ("UserName", "Parent", "createdAt", "updatedAt") VALUES ('Ali', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
            INSERT INTO "Users" ("UserName", "Parent", "createdAt", "updatedAt") VALUES ('Budi', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
            INSERT INTO "Users" ("UserName", "Parent", "createdAt", "updatedAt") VALUES ('Cecep', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

            SELECT "id" AS ID,"UserName",(SELECT "UserName" FROM "Users" B WHERE B."id" = A."Parent") AS UserParent FROM "Users" A
        `)
    .then((data) => {
        return res.status(200).send({
            success: true,
            message: "Success Get Data",
            response: data
        });
    })
    .catch((error) => {
        return res.status(400).send({
            success: false,
            message: "Can't load users"
        });
    })

}

module.exports = {
    task1
}