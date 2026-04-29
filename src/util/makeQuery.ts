import { ILike } from 'typeorm';

export const makeCondition = (
  columns: string[],
  value: string,
  options?: { filter?: Record<string, any> },
): Record<string, any>[] => {
  const conditions = [];
  const fixedCondition = options?.filter || {};

  for (const column of columns) {
    const condition = {
      ...fixedCondition,
      [column]: value ? ILike(`%${value}%`) : undefined,
    };

    if (Object.values(condition).some((v) => v !== undefined)) {
      conditions.push(condition);
    }
  }

  return conditions;
};
