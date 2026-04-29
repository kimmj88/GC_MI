//UTC Time : 1970-01-01 09:00:00.000 +0900
const DEFAULT_DATE = 0o0;

//Functions
export function $unixToDate(unixTime?: number): Date {
  return unixTime ? new Date(unixTime * 1000) : new Date(DEFAULT_DATE);
}

export function $dateToUnix(dateTime?: Date): number | undefined {
  return dateTime ? Math.floor(dateTime.getTime() / 1000) : undefined;
}

export function toDefaultDate(dateTime?: Date): Date | undefined {
  const inputUnixTime = Math.floor(dateTime.getTime() / 1000);

  return inputUnixTime == DEFAULT_DATE ? undefined : dateTime;
}
