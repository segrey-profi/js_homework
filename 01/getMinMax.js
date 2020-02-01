/**
 * Напишите функцию getMinMax(input), принимающую строку input,
 * и ищущую в ней максимальное и минимальное числа.
 *
 * Числа в строке выделяются пробелами или знаками препинания.
 *
 * Пример:
 * getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028');
 * // { min: -1028, max: 15 }
 *
 * getMinMax('"To Infinity and beyond", - repeated Buzz Lightyear 4 times in a row')
 * { max: Infinity, min: 4 }
 *
 * @param  {string} input входная строка
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 */
function getMinMax(input) {
  // Если я правильно понял условия, то при отсутствии чисел будет такой результат
  const result = {min: -Infinity, max: Infinity};
  if (!input) return result;

  input.split(/[\s,;:"]+/).forEach(s => {
    if (!s || s === '.') return;
    const n = Number(s.startsWith('.') ? s.substr(1) : s);
    if (isNaN(n)) return;
    if (result.min === -Infinity || n < result.min) result.min = n;
    if (result.max === Infinity || n > result.max) result.max = n;
  });

  if (result.min === result.max) result.max = Infinity;
  return result;
}

/**
 * Напишите обработчик, срабатывающий при сабмите формы,
 * передающий значение поля str в качестве аргумента в функцию getMinMax.
 *
 * Результат работы функции getMinMax вывести в блок с id="result"
 *
 */
window.addEventListener('load', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const text = form.elements['str'].value;
    const {min, max} = getMinMax(text);
    document.getElementById('result').innerHTML = `{min: ${min}, max: ${max}}`;
  });
});
