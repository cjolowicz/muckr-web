// @flow
export function env(name: string, fallback: ?string): string {
  const value = process.env[name];

  if (value != null) {
    return value;
  }

  if (fallback != null) {
    return fallback;
  }

  throw new Error(`${name} is required`);
}
