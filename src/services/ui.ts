/**
 * Switches the Dark Mode buttons to match the current status,
 * if the button elements are available.
 */
export const switchModeButtons = (): void => {
  if (document.documentElement.classList.contains("dark")) {
    document.getElementById("darkModeOn")?.classList.add("hidden");
    document.getElementById("darkModeOff")?.classList.remove("hidden");
  } else {
    document.getElementById("darkModeOn")?.classList.remove("hidden");
    document.getElementById("darkModeOff")?.classList.add("hidden");
  }
};

/**
 * Toggles the Dark Mode.
 * Returns `true` if the Dark Mode is active, or else `false`.
 * @return {boolean}
 */
export const toggleDarkMode = (): boolean => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    switchModeButtons();
    return false;
  } else {
    document.documentElement.classList.add("dark");
    switchModeButtons();
    return true;
  }
};
