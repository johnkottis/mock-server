// models/colleagueModel.js

let colleagues = [
  { id: 1, name: 'Alice', position: 'Developer' },
  { id: 2, name: 'Bob', position: 'Designer' },
];

const getColleagues = () => {
  return colleagues;
};

const addColleague = (colleague) => {
  const newColleague = {
    id: colleagues.length + 1,
    ...colleague,
  };
  colleagues.push(newColleague);
  return newColleague;
};

module.exports = {
  getColleagues,
  addColleague,
};
