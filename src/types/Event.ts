export enum DanmakuEventType {
  /**
   * 接收了到弹幕
   */
  ReceivedDanmaku = 'ReceivedDanmaku',

  /**
   * 获取人气值
   */
  GetPopularity = 'GetPopularity',

  /**
   * 人气值发生改变
   */
  PopularityChanged = 'PopularityChanged'
}
