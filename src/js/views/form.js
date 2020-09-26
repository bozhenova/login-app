/**
 * Function inputErrorTemplate.
 * @param {String} msg
 */

function inputErrorTemplate(msg) {
  return `
<div class="invalid-feedback">${msg}</div>
`;
}

/**
 * Function showInputError. Adds input error.
 * @param {HTMLInputElement} el
 */

export function showInputError(el) {
  const parent = el.parentElement;
  const msg = el.dataset.invalidMessage || 'Invalid input';
  const template = inputErrorTemplate(msg);
  el.classList.add('is-invalid');
  if (!parent.querySelector('.invalid-feedback')) {
    parent.insertAdjacentHTML('beforeend', template);
  }
}

/**
 * Function removeInputError. Adds input error.
 * @param {HTMLInputElement} el
 */
export function removeInputError(el) {
  const parent = el.parentElement;
  const err = parent.querySelector('.invalid-feedback');
  if (!err) return;

  el.classList.remove('is-invalid');
  parent.removeChild(err);
}
