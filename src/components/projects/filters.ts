import type { Project, ProjectStatus } from '../../content/projects'

export type Filters = { tags: string[]; status: ProjectStatus[]; years: number[] }
export const emptyFilters: Filters = { tags: [], status: [], years: [] }

/** OR inside a group, AND across groups. */
export function filterProjects(list: Project[], f: Filters): Project[] {
  return list.filter(
    (p) =>
      (f.tags.length === 0 || p.tags.some((x) => f.tags.includes(x))) &&
      (f.status.length === 0 || f.status.includes(p.status)) &&
      (f.years.length === 0 || f.years.includes(p.year)),
  )
}
