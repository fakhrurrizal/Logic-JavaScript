//Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

    //A. productArray([12,20])           => [20,12]

    function productArrayku1(arr, n)
    {
        if (n == 1) {
            console.log(0);
            return;
        }
        let left = new Array(n);
        let right = new Array(n);
        let prod = new Array(n);
  
        let i, j;

        left[0] = 1;
        right[n - 1] = 1;
  
        for (i = 1; i < n; i++)
            left[i] = arr[i - 1] * left[i - 1];
  
        for (j = n - 2; j >= 0; j--)
            right[j] = arr[j + 1] * right[j + 1];
  
        for (i = 0; i < n; i++)
            prod[i] = left[i] * right[i];

        for (i = 0; i < n; i++)
            console.log(prod[i] + " ");
  
        return;
    }
    console.log("Product Array 20 dan 12");
    let arr = [ 20,12];
    let n = arr.length;
    productArrayku1(arr, n);

    //B. productArray([12,20])           => [12,20]
    function productArrayku2(array, p)
    {
        if (p == 1) {
            console.log(0);
            return;
        }
        let left = new Array(p);
        let right = new Array(p);
        let prod = new Array(p);
    
        let a, b;
    
        left[0] = 1;
        right[p - 1] = 1;
    
        for (a = 1; a < p; a++)
            left[a] = array[a - 1] * left[a - 1];
    
        for (b = p - 2; b >= 0; b--)
            right[b] = array[b + 1] * right[b + 1];
    
        for (a = 0; a < p; a++)
            prod[a] = left[a] * right[a];
    
        for (a = 0; a < p; a++)
            console.log(prod[a] + " ");
    
        return;
    }
    
    console.log("Product Array 12 dan 20");
    let array = [ 12,20];
    let p = array.length;
    productArrayku2(array, p);

     //C. productArray([3,27,4,2])        => [216,24,162,324]

     function productArrayku3(array3, p1)
    {
    if (p1 == 1) {
        console.log(0);
        return;
    }
    let left = new Array(p1);
    let right = new Array(p1);
    let prod = new Array(p1);

    let c, d;

    left[0] = 1;
    right[p1 - 1] = 1;

    for (c = 1; c < p1; c++)
        left[c] = array3[c - 1] * left[c - 1];

    for (d = p1 - 2; d >= 0; d--)
        right[d] = array3[d + 1] * right[d + 1];

    for (c = 0; c < p1; c++)
        prod[c] = left[c] * right[c];

    for (c = 0; c < p1; c++)
        console.log(prod[c] + " ");

    return;
    }

    console.log("Product Array 3, 27, 4,2");
    let array3 = [ 3,27,4,2];
    let p1 = array3.length;
    productArrayku3(array3, p1);

    //D. productArray([13,10,5,2,9])     => [900,1170,2340,5850,1300]

    function productArrayku4(array4, p2)
    {
    if (p2 == 1) {
        console.log(0);
        return;
    }
    let left = new Array(p2);
    let right = new Array(p2);
    let prod = new Array(p2);

    let x, y;

    left[0] = 1;
    right[p2 - 1] = 1;

    for (x = 1; x < p2; x++)
        left[x] = array4[x - 1] * left[x - 1];

    for (y = p2 - 2; y >= 0; y--)
        right[y] = array4[y + 1] * right[y + 1];

    for (x = 0; x < p2; x++)
        prod[x] = left[x] * right[x];

    for (x = 0; x < p2; x++)
        console.log(prod[x] + " ");

    return;
    }

    console.log("Product Array 13,10,5,2,9");
    let array4 = [13,10,5,2,9];
    let p2 = array4.length;
    productArrayku4(array4, p2);

    //E. productArray([16,17,4,3,5,2])   => [2040,1920,8160,10880,6528,16320]

    function productArrayku5(array5, p3)
    {
    if (p3 == 1) {
        console.log(0);
        return;
    }
    let left = new Array(p3);
    let right = new Array(p3);
    let prod = new Array(p3);

    let m, n;

    left[0] = 1;
    right[p3 - 1] = 1;

    for (m = 1; m < p3; m++)
        left[m] = array5[m - 1] * left[m - 1];

    for (n = p3 - 2; n >= 0; n--)
        right[n] = array5[n + 1] * right[n + 1];

    for (m = 0; m < p3; m++)
        prod[m] = left[m] * right[m];

    for (m = 0; m < p3; m++)
        console.log(prod[m] + " ");

    return;
    }

    console.log("Product Array 16,17,4,3,5,2");
    let array5 = [16,17,4,3,5,2];
    let p3 = array5.length;
    productArrayku5(array5, p3);
