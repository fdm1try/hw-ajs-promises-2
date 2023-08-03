import read from './reader';
import json from './parser';
import GameSaving from './game-saving';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const string = await json(data);
    const obj = JSON.parse(string);
    return GameSaving.fromObject(obj);
  }
}
