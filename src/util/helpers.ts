export function parseForm<T>(formData: FormData): T {
  const data = {};
  for (let field of formData as any) {
    const [key, value] = field;
    data[key] = value;
  }
  return data as T;
}
