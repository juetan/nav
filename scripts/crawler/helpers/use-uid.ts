/**
 * 生成随机、指定长度且不重复的字符串
 * @param length 字符串长度
 * @returns 随机字符串
 */
export const useUid = (length: number) => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cache = new Set<string>();
  const random = () => chars[Math.floor(Math.random() * chars.length)];
  const getCharts = (): string => {
    const i = Array.from({ length }, random).join("");
    if (cache.has(i)) {
      return getCharts();
    }
    cache.add(i);
    return i;
  };
  return getCharts;
};
