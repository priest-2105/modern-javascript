//  Logicall Operatiors - OR || and AND &&


const password = 'p@ss';


if (password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');    
} else if (password.length >= 8 || password.includes('@')){
    console.log('that password is long enough!');
} else{
    console.log('password is not long enough');
}
