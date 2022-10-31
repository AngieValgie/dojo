//Level 5
   //challenge 1
   for(var i = 0;i < 10;i++){
    console.log(i);
   }
    // Answer: 0,1,2,3,4,5,6,7,8,9

   //challenge 2
   var x = 1;
   for(var i = 0; i < 3; i++){
      x = x + 1;
   }
   console.log(x);
   // Answer: 4

   //challenge 3
   var x = 1;
   for(var i = 0; i < 3; i = i + 2){
      x = x + 1;
   }
   console.log(x);
   console.log(i);
   // Answer: 3,4

   //challenge 4
   var x = 1;
   for(var i = 0; i < -1; i = i + 2){
      x = x + 1;
   }
   console.log(x);
   // Answer: 1

   //challenge 5
   var x = [];
   for(var i = 0; i < 10; i++){
      x = push(1*2);
   }
   console.log(x);
   // Answer: [0,2,4,6,8,10,12,14,16,18]

   //challenge 6
   var x = [1,3,5,8];
   for(var i = 0; i < x.length; i++){
      if (x[i] > 4) {
         x[i] = 0;
      }
   }
   console.log(x);
   // Answer: [1,3,0,0]

   //challenge 7
   var x = [-1,3,2,7];
   for(var i = 0; i < x.length; i++){
      if (x[i] > i) {
         x[i] = -10;
      }
   }
   console.log(x);
   // Answer: [-10,3,2,7]

   //challenge 8
   for(var i = 20; i != 10; i--){
      console.log(i);
   }
   // Answer: 20,19,18,17,16,15,14,13,12,11

   //challenge 9
   var x = 0;
   for(var i = 1; i < 4; i++){
      x = x + i;
      console.log(x);
      console.log(i);
   }
   // Answer: 1,1,3,2,6,3

   //challenge 10
   var x = 0;
   for(var i = 1; i < 4; i = i + 2){
      x = x + i;
      console.log(x);
      console.log(i);
   }
   // Answer: 1,1,4,3