function keyObject (obj) { 
    for (var key in obj) {
        console.log(obj[key] + ' - значение');
        console.log(key + ' - ключ');
    }
}

keyObject({nameUser: 'Pavel', surnameUser: 'Durov'});
