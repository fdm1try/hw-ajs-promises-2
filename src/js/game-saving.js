export default class GameSaving {
  constructor(id, created, userInfo) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }

  static fromObject(obj) {
    const { id, created, userInfo } = obj;
    return new GameSaving(id, created, userInfo);
  }
}
