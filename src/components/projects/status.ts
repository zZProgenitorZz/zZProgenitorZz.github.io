import type { ProjectStatus } from '../../content/projects'

export const statusColor: Record<ProjectStatus, string> = {
  shipped: 'text-ok',
  wip: 'text-accent-2',
  school: 'text-muted',
}
