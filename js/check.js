const refs = {
    input: document.querySelector('.js-input'),
    btn: document.querySelector('.js-btn'),
    check: document.querySelector('.js-ch')
}
refs.check.addEventListener('change', onLicenseChange);
function onLicenseChange(event) {
    refs.btn.disabled = !event.currentTarget.checked;
}