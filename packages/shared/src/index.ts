/** server /api/health 的响应体类型，web/server 共用 */
export interface HealthStatus {
  ok: true
  service: string
}
