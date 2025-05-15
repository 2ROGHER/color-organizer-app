export interface IFilter <T extends string>  {
  searchTerm: T;
  filterValue: T;
  sortBy: T;
  filteredItems: T[];
}
