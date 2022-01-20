import KoePlugin from '../class/KoePlugin'
import { Danmaku } from './Danmaku'

/**
 * 插件接口
 */
export interface IKoePlugin {
  new (): KoePlugin
  handle(danmaku: Danmaku): Promise<Danmaku>
}
