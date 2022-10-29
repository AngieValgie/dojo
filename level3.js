//Level 3
        //challenge 1
        var x = [1,3,5];
        x[0] = x[2];
        x[1] = x[0];
        console.log(x);
        // Answer: [5,5,5]

        //challenge 2
        var x = [1,3,5];
        var y = [0,5,7];
        x[0] = x[1] + y[2];
        y[1] = y[2] - x[0];
        console.log(x);
        // Answer: [10,3,5]

        //challenge 3
        var x = [1,3,5,8];
        x[0] = x[x.length - 1];
        console.log(x);
        // Answer: [8,3,4,8]

        //challenge 4
        var x = [1,3,5,8];
        var temp = x[x.length - 1];
        x[x.length - 1] = x[0];
        console.log(x);
        // Answer: [1,3,5,1]

        //challenge 5
        var x = [1,3,5,8];
        var temp = x[x.length - 1];
        x[x.length - 1] = x[0];
        x[0] = temp;
        console.log(x);
        // Answer: [8,3,5,1]

        //challenge 6
        var x = [1,3,5,8];
        x.pop();
        x.push(7);
        console.log(x);
        // Answer: [1,3,5,7]

        //challenge 7
        var x = [1,3,5];
        x[0] = 15;
        x[3] = 77;
        console.log(x);
        // Answer: [15,3,5,77]

        //challenge 8
        var x = [1,3,5,8,2,-5,-8];
        x[0] = x[x.length - 1];
        x[x.length - 1] = x[0];
        console.log(x);
        // Answer: [-8,3,5,8,2,-5,-8]

        //challenge 9
        var x = [1,3,5,8,2,-5,-8];
        var temp = x[x.length - 1];
        x[x.length - 1] = x[0];
        x[0] = temp;
        console.log(x);
        // Answer: [-8,3,5,8,2,-5,1]

        //challenge 10
        var x = [1,3,5];
        x.push(7);
        console.log(x);
        // Answer: [1,3,5,7]

        //challenge 11
        var x = [2,4,6];
        x.push(3);
        console.log(x);
        // Answer: [2,4,6,3]

        //challenge 12
        var x = [1,3,5];
        var y = x[0] + x[1];
        x.push(y);
        console.log(x);
        // Answer: [1,3,5,4]

        //challenge 13
        var x = [2,3,5];
        x.push(x[0] + x[1]);
        console.log(x);
        // Answer: [2,3,5,5]

        //challenge 14
        var x = [1,3,5];
        x.pop();
        console.log(x);
        // Answer: [1,3]

        //challenge 15
        var x = [1,3,5];
        x.push(2);
        x.pop();
        console.log(x);
        // Answer: [1,3,5]