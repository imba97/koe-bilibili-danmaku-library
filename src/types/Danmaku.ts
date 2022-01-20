/**
 * 弹幕信息
 */
export interface Danmaku {
  /**
   * 唯一 ID
   */
  id: string

  /**
   * 发送者 ID
   */
  uid: number

  /**
   * 发送者
   */
  sender: string
  /**
   * 弹幕
   */
  message: string
}
