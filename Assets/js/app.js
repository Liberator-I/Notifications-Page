const no = document.querySelector('.no');
const btn = document.querySelector('.mark');
const notiActive = document.querySelectorAll('.notification.active');
const notiUnread = document.querySelectorAll('.unread');

let unread = notiUnread.length;
no.innerText = unread;

let clearNoti = () => {
    notiActive.forEach(noti => {
        if(noti.classList.contains('active')) {
            noti.classList.remove('active');
        } else {
            // do nothing
        }
    });

    notiUnread.forEach(noti => {
        if(noti.classList.contains('unread')) {
            noti.classList.remove('unread');
            unread = notiUnread.length;
            updateNotifications();
        } else {
            // do nothing
        }
    })
}

let updateNotifications = () => {
    notiUnread.forEach(noti => {
        if (!noti.classList.contains('active')) {
            no.innerText = 0;
        } else {
            // do nothing
        }
    })
}

btn.addEventListener('click', clearNoti);

