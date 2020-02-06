/**
 * Напишите функцию promiseRace(promises), поведение
 * которой аналогично поведению Promise.race(promises).
 *
 * @param  {Promise[]} promises массив с исходными промисами
 * @return {Promise}
 */
const promiseRace = promises => new Promise((resolve, reject) => {
  let hasFinished = false;

  function processIfRunning(fn) {
    if (hasFinished) return;
    hasFinished = true;
    fn();
  }

  for (promise of promises) {
    promise.then(res => {
      processIfRunning(() => { resolve(res); });
    }).catch(err => {
      processIfRunning(() => { reject(err); });
    });
  }
});
