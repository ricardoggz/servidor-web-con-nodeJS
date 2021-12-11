const data = require("./MOCK_DATA.json");

module.exports = {
  getUsers: () => data,
  getUser: (id) => {
    let identifierID = Number(id);
    let user = data.filter((userID) => userID.id === identifierID);
    return user;
  },
  createUser: (dataUser) => {
    let newUser = {
      id: data.length + 1,
      ...dataUser,
    };
    data.push(newUser);
    return newUser;
  },
};
