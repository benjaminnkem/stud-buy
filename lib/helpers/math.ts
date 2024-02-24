export const minus = (setter: React.Dispatch<React.SetStateAction<number>>) =>
  setter((prev) => (prev <= 0 ? 0 : prev - 1));
export const plus = (setter: React.Dispatch<React.SetStateAction<number>>) => setter((prev) => prev + 1);
