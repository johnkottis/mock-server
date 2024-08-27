// models/clientModel.js

let clients = [
  { id: 1, name: 'Client A', industry: 'Finance' },
  { id: 2, name: 'Client B', industry: 'Healthcare' },
];

const getClients = () => {
  return clients;
};

const addClient = (client) => {
  const newClient = {
    id: clients.length + 1,
    ...client,
  };
  clients.push(newClient);
  return newClient;
};

module.exports = {
  getClients,
  addClient,
};
