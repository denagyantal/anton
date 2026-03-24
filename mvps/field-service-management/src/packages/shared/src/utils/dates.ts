export function toISOString(date: Date): string {
  return date.toISOString();
}

export function parseISO(iso: string): Date {
  return new Date(iso);
}
