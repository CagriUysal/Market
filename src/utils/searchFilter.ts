// TODO: improve searching algorithm
export default function searchFilter(target: string, searchTerm: string) {
  return target.toLowerCase().includes(searchTerm.toLowerCase().trim());
}
