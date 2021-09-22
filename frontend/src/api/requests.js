// import { api } from './api';

const getStuff = async () => {
  const res = {
    data: {
      questions: [
        {
          questionName: "yes",
          question: "something",
          id: "1",
        },
        {
          questionName: "yes",
          question: "something",
          id: "2",
        },
        {
          questionName: "yes",
          question: "something",
          id: "3",
        },
        {
          questionName: "yes",
          question: "something",
          id: "4",
        },
        {
          questionName: "yes",
          question: "something",
          id: "5",
        },
      ],
    },
  };
  return res.data;
};

export default getStuff;
