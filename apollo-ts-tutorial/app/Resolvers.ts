import people from "./dataset";
const Resolvers = {
  Query: {
    getAllPeople: () => people,
    getPerson: (_: any, args: any) => {
      console.log(args);
      return people.find((person) => person.id === args.id);
    },
  },
  Mutation: {
    addPerson: (_: any, args: any) => {
      console.log(args);
      const newPerson = {
        id: people.length + 1,
        name: args.name,
      };
      people.push(newPerson);
      return newPerson;
    },
  },
};
export default Resolvers;
