 //Level 2
        //challenge 1
        var x = [1,2,4];
        console.log(x);
        // Answer: [1,2,4]

        //challenge 2
        var x = [1,3,5];
        console.log(x[0]);
        // Answer: 1

        //challenge 3
        var x = [2,4,6];
        console.log(x[1]);
        // Answer: 4

        //challenge 4
        var x = [1,3,5];
        console.log(x[2]);
        // Answer: 5

        //challenge 5
        var x = [1.3];
        console.log(x[0]);
        // Answer: 1.3

        //challenge 6
        var x = [1,2,4];
        x[0] = x[1];
        console.log(x);
        // Answer: [2,2,4]

        //challenge 7
        var x = [1,2,4];
        var y = x.length;
        console.log(y);
        // Answer: 3

        //challenge 8
        var x = [2,4,6,3,7];
        var y = x.length - 2;
        console.log(x[y]);
        // Answer: 3

        //challenge 9
        var x = [2,4,6,3,7];
        var y = x.length;
        console.log(x[y - 1]);
        // Answer: 7

        //challenge 10
        var x = [1,3,5,7];
        x[0] = x[x.length - 2];
        console.log(x);
        // Answer: [5,3,5,7]

        //challenge 11
        var x = [1,3,5,7];
        x[x.length - 3] = x[x.length/2 + x.length/4];
        console.log(x);
        // Answer: [1,7,5,7]

        //challenge 12
        var x = [1,3,5,7];
        var y = [2,4,6];
        x[2] = y[x.length - 3];
        console.log(x);
        // Answer: [1,3,4,7]

        //challenge 13
        var x = [1,3,5,7];
        var y = [2,4,6];
        x[2] = y[x.length - 3] + x[x[0] + y[0]];
        console.log(x);
        // Answer: [1,3,11,7]
