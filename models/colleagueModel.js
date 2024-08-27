let colleagues = [
  { id: 1, name: 'Alice', position: 'Developer' },
  { id: 2, name: 'Bob', position: 'Designer' },
];

// Simulate auto-increment ID
const addColleague = (colleague) => {
  const newColleague = {
    id: colleagues.length + 1,
    ...colleague,
  };
  colleagues.push(newColleague);
  return newColleague;
};

const getColleagues = () => {
  return colleagues;
};

module.exports = {
  addColleague,
  getColleagues,
};
