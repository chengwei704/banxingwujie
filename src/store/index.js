// 全局响应式状态
const store = {
  // 网络 & 设备
  isOnline: true,
  batteryLevel: 100,
  isPowerSaving: false,

  // 行程
  currentTrip: null,

  // 心情
  mood: 'neutral', // happy | sad | anxious | excited | neutral

  // 同步
  lastSyncTime: null,
  isSyncing: false,
}

export default store