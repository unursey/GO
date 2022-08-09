export const valid = () => {
    const modalTitle = document.querySelector('.modal__title');
    const inputPhone = document.querySelector('.modal__input-phone');

    const phoneMask = new Inputmask('+7 (999) 999-99-99');
    phoneMask.mask(inputPhone);

    const justValidate = new JustValidate('.modal__form');
    justValidate
        .addField('.modal__input-name', [
            {
                rule: 'required',
                errorMessage: 'Укажите Ваше имя',
            },
            {
                rule: 'minLength',
                value: 2,
                errorMessage: 'Слишком короткое',
            },   
        ])
        .addField('.modal__input-phone', [
            {
                rule: 'required',
                errorMessage: 'Укажите телефон',
            },
            {
                validator(value) {
                    const phone = inputPhone.inputmask.unmaskedvalue();
                    return !!(Number(phone) && phone.length === 10);
                },
                errorMessage: 'Телефон не корректный'
            },  
            
        ])
        .onSuccess(e => {
            axios.post('http://jsonplaceholder.typicode.com/posts', {
                name: e.target.name.value,
                phone: e.target.phone.value,
            })
            .then(response => {
                e.target.reset();
                modalTitle.textContent = `Ваша заявка № ${response.data.id} принята!`;
            })
            .catch (err => {
                console.error(err);
                modalTitle.textContent = 'Ошибка, попробуйте позже.';
            })
        });

};
