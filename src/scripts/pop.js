console.log('Pop loaded!');

export default function () {

    const width = 900;
    const height = 600;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;

    const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=${width},height=${height},left=${left},top=${top}`;

    const popLinks = document.querySelectorAll('[data-pop]');
    console.log(popLinks);
    popLinks.forEach((link) => {
        //console.log(link.getAttribute('href'));
        link.onclick = () => {
            window.open(link.getAttribute('href'), 'pop', params);
            return false;
        }

    });
}

