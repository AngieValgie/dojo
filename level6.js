//Level 6
   //challenge 1
    function a(){
        console.log(5);
    }

    a();
    // Answer: 5


    //challenge 2
    function a(){
        console.log(25);
    }
    // Answer: 


    //challenge 3
    a();

    function a(){
        console.log(25);
    }
    // Answer: 25


    //challenge 4
    function a(){
        var b = 25;
        b = b + 10;
        console.log(b);
    }

    a();
    // Answer: 35


    //challenge 5
    function a(b, c){
        console.log(b);
        console.log(c);
    }

    a(3,5);
    // Answer: 3,5


    //challenge 6
    function a(b, c){
        return b + c;
    }

    console.log(a(3,5));
    // Answer: 8


    //challenge 7
    function a(b, c){
        return b * c;
    }

    console.log(a(3,5));
    // Answer: 15


    //challenge 8
    function a(b, c){
        return b*3 - c;
    }

    console.log(a(3,2));
    console.log(a(1,1));
    // Answer: 7,2


    //challenge 9
    function a(b, c){
        return b + c;
    }

    console.log(a(1,1) + a(2,2));
    // Answer: 6


    //challenge 10
    function a(b, c){
        return b + c;
    }

    console.log(a(1, a(2,3)));
    // Answer: 6


    //challenge 11
    function a(b, c){
        return b + c;
    }

    console.log(a(a(1,2), a(2,3)));
    // Answer: 8


    //challenge 12
    function a(b, c){
        return b + c;
    }

    console.log(a(a(1,2), a(2,a(1,2))));
    // Answer: 8


    //challenge 13
    function a(b, c){
        console.log(b);
        return b + c; 
    }

    console.log(a(3,2));
    // Answer: 3,5


    //challenge 14
    function a(b, c){
        console.log(c);
        return b - c; 
    }

    console.log(a(3,2));
    // Answer: 2,1


    //challenge 15
    function a(){
        return 25;
        return 50; 
    }

    console.log(a());
    // Answer: 25


    //challenge 16
    function a(b, c){
        return 25;
        return b + c; 
    }

    console.log(a(3,2));
    // Answer: 25


    //challenge 17
    function a(b, c){
        return b + c;
    }

    console.log(a(a(2,3), a(1,1)));
    // Answer: 7


    //challenge 18
    function a(b, c){
        return 0;
    }

    console.log(a(a(2,3), a(1,1)));
    // Answer: 0