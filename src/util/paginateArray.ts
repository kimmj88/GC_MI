export const $paginateArray = <T>(array: T[], perPage: number, page: number) =>
  array.slice((page - 1) * perPage, page * perPage);
