window.onload = function () {
  const moodElement = document.querySelector("#face");
  moodElement.innerText = store.getState().mood.face;
  moodElement.style.background = store.getState().mood.color;

  document.querySelector("#happy").addEventListener("click", function () {
    store.dispatch({
      type: "MAKE_HAPPY", payload:
        { face: "（＾ω＾) ", color: "yellow" }
    });
  });

  document.querySelector("#feces").addEventListener("click", function () {
    store.dispatch({
      type: "MAKE_FECES", payload:
        { face: "（-=≡~ξ-＿-*) ", color: " brown" }
    });
  });

  document.querySelector("#monkey").addEventListener("click", function () {
    store.dispatch({
      type: "MAKE_MONKEY", payload:
        { face: "└@(･ｪ･)@┐ ", color: "grey" }
    });
  });

  document.querySelector("#eat").addEventListener("click", function () {
    store.dispatch({
      type: "MAKE_EAT", payload:
        { face: "◥█̆̈◤࿉∥ ", color: "green" }
    });
  });
  document.querySelector("#random").addEventListener("click", function () {
    store.dispatch({ type: "MAKE_RANDOM", payload: random() });
  });

  function handleChange() {
    const currentMood = store.getState().mood;
    moodElement.innerText = currentMood.face;
    moodElement.style.background = currentMood.color;
  }

  store.subscribe(handleChange)

  const moods = [{ face: "（-=≡~ξ-＿-*) ", color: " brown" }, { face: "└@(･ｪ･)@┐ ", color: "grey" }, { face: "◥█̆̈◤࿉∥ ", color: "green" }, { face: "（＾ω＾) ", color: "yellow" }]

  function random() {
    let idx = Math.floor(Math.random() * moods.length)
    return moods[idx]
  }
};