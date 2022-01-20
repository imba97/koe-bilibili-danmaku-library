import { Danmaku } from '../types/Danmaku'

/**
 * 插件约束类
 */
export default abstract class KoePlugin {
  private _name: string

  public constructor() {
    this._name = (this as any).__proto__.constructor.name
  }

  /**
   * 弹幕处理函数
   * @description 接收弹幕相关信息，返回处理后的弹幕信息
   * @param danmaku 弹幕信息
   */
  abstract handle(danmaku: Danmaku): Promise<Danmaku>

  /**
   * 插件ID 插件类名
   */
  public get name() {
    return this._name
  }
}
