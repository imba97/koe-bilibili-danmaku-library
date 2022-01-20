export interface Danmaku {
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
