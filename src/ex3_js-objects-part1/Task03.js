function objName (obj, str) {
    for (var key in obj) {
        if (key === str) {
            return true;
        } 
    }
    return false;
}

objName ({name: 'Pavel', surName: 'Durov'}, 'surName');
console.log(objName ({name: 'Pavel', surName: 'Durov'}, 'surName'));
console.log(objName ({name: 'Pavel', surName: 'Durov'}, 'а'));