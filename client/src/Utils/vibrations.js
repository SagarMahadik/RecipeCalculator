export const submitVibrations = () => {
  navigator.vibrate = navigator.vibrate;

  if (navigator.vibrate) {
    return navigator.vibrate(12);
  }
};
