import GameSavingLoader from './game-saving-loader';

(async () => {
  try {
    const savedData = GameSavingLoader.load();
    return savedData !== true;
  } catch (error) {
    return error;
  }
})();
