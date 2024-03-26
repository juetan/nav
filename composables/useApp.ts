export const useApp = () => {
  return useState<{ title: string; description: string; logoUrl: string } | null>('app', () => null)
}
