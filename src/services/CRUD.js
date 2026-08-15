const connection = require("../config/database");
const getAllUser = async () => {
  let [result, fields] = await connection.query("SELECT * FROM Users");
  return result;
};

const getUserById = async (id) => {
  let [result, fields] = await connection.query(
    "SELECT * FROM Users WHERE id = ?",
    [id],
  );
  return result;
};

const editUser = async (id, email, name, city) => {
  let [result, fields] = await connection.query(
    "UPDATE Users SET email= ?, name= ?, city= ? WHERE id= ?",
    [email, name, city, id],
  );
};

const deleteUser = async (id) => {
  let [result, fields] = await connection.query(
    "DELETE FROM Users WHERE id= ?",
    [id],
  );
};

module.exports = {
  getAllUser,
  getUserById,
  editUser,
  deleteUser,
};
