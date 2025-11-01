const app = require("./app");

const sequelize = require("./config/db");

const PORT = process.env.PORT || 3000;
const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`DB connected succesfully`);

    app.listen(PORT, () => {
      console.log(`SERVER RUNNING AT PORT ${PORT}`);
    });
  } catch (error) {
    console.log("DB NOT CONNECTED", error);
  }
};

startServer();
