function valider(form) {
    if (form.navn.value.length < 1) {
    alert('Udfyld navn!');
    form.navn.focus();
    form.navn.style.backgroundColor = '#ffaaaa';
    return false;
    } else {
        form.navn.style.backgroundColor = 'transparant';
    }
            
    if (form.email.value.length < 1) {
        alert('Udfyld email!');
        form.email.focus();
        form.email.style.backgroundColor = '#ffaaaa';
        return false;
        } else {
            if (validateEmail(form.email.value)) {
                alert('email er godkendt');
                form.email.style.backgroundColor = 'transparant';
            } else {
                alert('email er ikke godkendt');
                form.email.focus();
                form.email.style.backgroundColor = '#ffaaaa';
                return false;
        
        }
        return false;
    };
};

function validateEmail(email) {
let re = /(.+)@(.+){2,}\.(.+){2,}$/;
return re.test(String(email).toLowerCase());
};