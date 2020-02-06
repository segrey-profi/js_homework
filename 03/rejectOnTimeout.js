/**
 * Напишите функцию rejectOnTimeout(promise, ms), возвращающую
 * промис, отражающий поведение исходного promise, либо
 * отменяющийся со значением 'timeout_error', если исходный
 * промис не завершился в течение ms миллисекунд.
 *
 * Не использовать Promise.race.
 *
 * @param  {Promise} promise исходный промис
 * @param  {Number}  ms время для timeout в миллисекундах
 * @return {Promise} промис с нужным поведением
 */
export const rejectOnTimeout = (promise, ms) => new Promise((resolve, reject) => {
  let hasFinished = false;

  function processIfRunning(fn) {
    if (hasFinished) return;
    hasFinished = true;
    fn();
  }

  function rejectIfRunning(err) {
    processIfRunning(() => { reject(err); });
  }

  promise.then(res => {
    processIfRunning(() => { resolve(res); });
  }).catch(err => {
    rejectIfRunning(err);
  });

  setTimeout(() => {
    rejectIfRunning(Error('timeout_error'));
  }, ms);
});
