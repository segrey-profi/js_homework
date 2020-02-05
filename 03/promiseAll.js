/**
 * Напишите функцию promiseAll(promises), поведение
 * которой аналогично поведению Promise.all(promises).
 *
 * @param  {Promise[]} promises массив с исходными промисами
 * @return {Promise}
 */
export const promiseAll = promises => new Promise((resolve, reject) => {
  const totalCount = promises.length;
  const results = new Array(totalCount);
  let hasError = false;
  let finishedCount = 0;
  for (let i = 0; i < totalCount; ++i) {
    promises[i].then(res => {
      if (hasError) return;
      results[i] = res;
      finishedCount += 1;
      if (finishedCount == totalCount) resolve(results);
    }).catch(err => {
      if (hasError) return;
      hasError = true;
      reject(err);
    });
  }
});
