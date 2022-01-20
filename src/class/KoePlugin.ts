import { Danmaku, IKoePlugin } from '..'

export default abstract class KoePlugin {
  private _name: string

  public constructor() {
    this._name = (this as any).__proto__.constructor.name
  }

  abstract handle(danmaku: Danmaku): Promise<Danmaku>

  public get name() {
    return this._name
  }
}
