/**
 * Напишите функцию mergeNumbers(number), складывающую
 * все цифры числа number до тех пор, пока не получится
 * однозначный результат.
 *
 * Пример:
 * mergeNumbers(1) === 1
 * mergeNumbers(10001) === 2
 * mergeNumbers(15334232) === 5
 * mergeNumbers(50349814743854) === 2
 *
 * @param number
 */
export function mergeNumbers(number) {
  const figures = `${number}`.replace(/[^0-9]+/g, '').split('');
  const sum = figures.reduce((sum, c) => (sum + Number(c)), 0);
  return sum > 9 ? mergeNumbers(sum) : sum;
}
