import { tokenExpiresSoon } from "../api";

const checkIfModalShouldBeToggled = (headers, toggleInnloggingsModal) => {
  if (tokenExpiresSoon(headers)) {
    toggleInnloggingsModal();
  }
};

export default checkIfModalShouldBeToggled;
