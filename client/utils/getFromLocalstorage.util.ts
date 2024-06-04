export const GetFromLocalstorageStatus = (localValue: string) => {
  const value = localStorage.getItem(`${localValue}`);
  if (value) {
    const data = JSON.parse(value);
    return data;
  }
};

export const GetFromLocalstorageToken = (localValue: string) => {
  const data = localStorage.getItem(`${localValue}`);
  return data;
};
