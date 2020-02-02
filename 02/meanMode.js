/**
 * Напишите функцию meanMode(numbers), принимающую массив чисел numbers
 * и возвращающую true, если среднее значение числового ряда равно
 * числу (или любому из чисел), встречающемуся чаще остальных. Иначе
 * вернуть false.
 *
 * Если есть несколько чисел, встречающихся одинаковое количество раз,
 * и чаще всех остальных, считать входящий массив невалидным и
 * возвращать false.
 *
 * Пример:
 * meanMode([1]) === true
 * meanMode([4, 4, 4, 6, 2]) === true
 * meanMode([1, 2, 3]) === false
 * meanMode([1, 1, 1, 2, 5]) === false
 * meanMode([]) === false
 *
 *
 * @param  {number[]} numbers массив целых положительных чисел.
 * @return {boolean}
 */
export function meanMode(numbers) {
  if (numbers.length === 0) return false;
  if (numbers.length === 1) return true;

  let sum = 0;
  let maxCount = 0;
  let freqNumber = NaN;
  const countMap = new Map();
  for (let n of numbers) {
    sum += n;
    const count = (countMap.get(n) || 0) + 1;
    countMap.set(n, count);
    if (count > maxCount) {
      maxCount = count;
      freqNumber = n;
    }
  }

  const avg = sum / numbers.length;
  if (avg !== freqNumber) return false;

  countMap.delete(freqNumber);

  for (let c in countMap.values()) {
    if (c === maxCount) return false;
  }

  return true;
}
