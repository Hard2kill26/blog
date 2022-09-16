import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb+srv://jandresgonz:64LBdLjO9z87ayi1@jamtest.1ic95ei.mongodb.net/realmadrid");
    console.log("DB conectada a", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
