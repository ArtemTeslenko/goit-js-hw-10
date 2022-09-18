import Notiflix from "notiflix";
export { onFetchError, onFetchTooMach };

function onFetchTooMach() {
  Notiflix.Notify.info(
    "Too many matches found. Please enter a more specific name.",
    { position: "center-top" }
  );
}

function onFetchError() {
  Notiflix.Notify.failure("Oops, there is no country with that name", {
    position: "center-top",
  });
}
