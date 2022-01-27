(()=> {
    'use strict'

    let user = {
        data: {
            a: 1,
            b: 2,
            c: 3,
            d: {
                a1: 1,
                b1: 2,
                c1: 3,
                d1: {
                    a2: 3,
                    b2: 3,
                    c2: 3,
                }
            },
        }
    }

    const DeepFreeze = (object) => {
        
        Object.freeze(object)

        for (const i in object) {
            if(typeof(object[i]) === 'object') return DeepFreeze(object[i]);

            Object.defineProperty(object, i, {
                'configurable': false,
                'writable': false,
            })
        }
    }  
    
    DeepFreeze(user);

    console.log(Object.getOwnPropertyDescriptors(user));
    console.log(Object.getOwnPropertyDescriptors(user.data));
    console.log(Object.getOwnPropertyDescriptors(user.data.d));
    console.log(Object.getOwnPropertyDescriptors(user.data.d.d1));
    
    // все элементы внутри user выдают writable: false, enumerable: true, configurable: false. 

})()


