function varType (a) {
    typeof a;
    if (typeof a === "number") {
        console.log('число');
    } else if (typeof a === "string") {
        console.log('строка');
    } else {
        console.log('undefined');
    }
}

varType('12');
varType(74);
varType(true);
varType(null);
varType(undefined);
varType([1,2,3]);
varType('Automobile');
varType(234);