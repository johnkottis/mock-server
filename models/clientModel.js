let clients = [
  { id: 1, name: 'Client A', industry: 'Finance' },
  { id: 2, name: 'Client B', industry: 'Healthcare' },
];

// Simulate auto-increment ID
const addClient = (client) => {
  const newClient = {
    id: clients.length + 1,
    ...client,
  };
  clients.push(newClient);
  return newClient;
};

const getClients = () => {
  return clients;
};

module.exports = {
  addClient,
  getClients,
};
