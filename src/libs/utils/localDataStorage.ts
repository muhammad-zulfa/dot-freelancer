export const get = (name: string) => {
  const data = localStorage.getItem(name);
  return JSON.parse(typeof data === "string" ? data : "[]")
}

export const set = (name: string, value: any) => {
  localStorage.setItem(name, JSON.stringify(value))
}
