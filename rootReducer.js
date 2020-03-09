const INITIAL_STATE = { mood: { face: "（＾ω＾）", color: "yellow" } }

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "MAKE_FECES":
      return { ...state, mood: action.payload }
    case "MAKE_HAPPY":
      return { ...state, mood: action.payload }
    case "MAKE_MONKEY":
      return { ...state, mood: action.payload }
    case "MAKE_EAT":
      return { ...state, mood: action.payload }
    case "MAKE_RANDOM":
      return { ...state, mood: action.payload }
    default:
      console.warn("Can't match this emotion: ", action.type)
      return state;
  }
}

const store = Redux.createStore(rootReducer);