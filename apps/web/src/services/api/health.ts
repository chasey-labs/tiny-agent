import type { HealthStatus } from '@tiny-agent/shared'

/** 查本机 server 是否活着（monorepo 起步，返回类型来自 packages/shared） */
export const checkServerHealth = async (): Promise<HealthStatus> => {
  const res = await fetch('/api/health')
  return (await res.json()) as HealthStatus
}
