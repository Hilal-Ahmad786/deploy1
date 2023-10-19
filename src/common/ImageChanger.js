const imageChanger = () => {
    let imageselect = document.querySelector('.imageselect');
    let butli = document.querySelector('.butli');
    let butda = document.querySelector('.butda');
    let butsuc = document.querySelector('.butsuc');

    butli.addEventListener('click', () => {
        img.src = '/assets/img/slid/n/light.png';
    })

    butda.addEventListener('click', () => {
        img.src = '/assets/img/slid/n/dark.png';
    })

    butsuc.addEventListener('click', () => {
        img.src = '/assets/img/slid/n/yesil.png';
    })

    butpri.addEventListener('click', () => {
        img.src = '/assets/img/slid/n/red.png';
    })

};

export default imageChanger;