/**
 * Напишите функцию limitCalls(fn, maxCalls), принимающую функцию fn,
 * и возвращающую новую функцию, которую можно вызвать не более
 * указанного в maxCalls количества раз.
 *
 * В целях упрощени, входящая функция не принимает никаких аргументов, работу с
 * аргументами можно не учитывать.
 *
 * Пример:
 * const limitedLog = limitCalls(() => console.log('log'), 2);
 * limitedLog(); // 'log'
 * limitedLog(); // 'log'
 * limitedLog(); // undefined
 * limitedLog(); // undefined
 *
 *
 * @param  {Function} fn функция
 * @param  {number} maxCalls максимальное количество вызовов
 * @return {Function}
 */
export function limitCalls(fn, maxCalls) {
  let callsCount = 0;
  return function() {
    if (callsCount < maxCalls) {
      callsCount += 1;
      return fn();
    }
  };
}
