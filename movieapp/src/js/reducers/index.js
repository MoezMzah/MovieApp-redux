import { ADD_MOVIES, GET_SEARCH_INPUT, GET_INPUT_RATE } from "../constantes";
const initialState = {
  MovieList: [
    {
      id: 1,
      title: "The invisible guest",
      Rate: 2,
      description:
        "A successful entrepreneur accused of murder and a witness preparation expert have less than three hours to come up with an impregnable defense.",
      trailer: "https://www.youtube.com/embed/epCg2RbyF80",
      image: "/assets/the invisible guest.jpg",
    },
    {
      id: 2,
      title: "The body",
      Rate: 4,
      description:
        "The corpse of a powerful businesswoman disappears from the morgue in the middle of the night! The inspector in charge of the resolution of this investigation discovers much more damning the widower of the victim ...",
      trailer: "https://www.youtube.com/embed/NyE5LnY3dT0",
      image: "/assets/the body.jpg",
    },
    {
      id: 3,
      title: "Titanic",
      Rate: 3,
      description:
        "Southampton, April 10, 1912. The largest and most modern ocean liner in the world, renowned for its unsinkable nature, the “Titanic” sets sail for its maiden voyage. Four days later, it hits an iceberg. On board, a poor artist and a big bourgeois fall in love.",
      trailer: "https://www.youtube.com/embed/lFOc2Vv7zSM",
      image: "./assets/titanic.jpg",
    },
    {
      id: 4,
      title: "The Gentlemen",
      Rate: 4,
      description:
        "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
      trailer: "https://www.youtube.com/embed/2B0RpUGss2c",
      image: "./assets/gentlemen.jpg",
    },
  ],
  inputSearch: "",
  inputRate: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MOVIES:
      return { ...state, MovieList: [...state.MovieList, payload] };
    case GET_SEARCH_INPUT:
      return { ...state, inputSearch: payload };
    case GET_INPUT_RATE:
      return { ...state, inputRate: payload };
    default:
      return state;
  }
};
