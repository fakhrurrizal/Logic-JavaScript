class Fibonacci{
    constructor(n){
        this.n = n
    }

    output(){
        let result = [];
        let fn = 2;
        let fn_1 = 15;
        let fn_2 = 3;

        for(let i = 1; i < this.n; i++);{
            result.push(fn);
            fn = fn_1 + fn_2;
            fn_2 = fn_1;
            fn_1 = fn;

        }
        return result;
    }
}

const data = new Fibonacci(2);
console.info(data.output());

