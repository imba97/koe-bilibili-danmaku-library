import { KoePlugin } from '..'
import { Danmaku } from './Danmaku'

export interface IKoePlugin {
  new (): KoePlugin
  handle(danmaku: Danmaku): Promise<Danmaku>
}
