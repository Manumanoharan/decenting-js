// Decending order
var a=23;
  var b=43;
var c=12;

   if(a>b&&a>c&&b>c)
   {
      console.log(a,b,c);
   }
  else if(a>b&&a>b&&c>b){
      console.log(a,c,b);
   }
else if(a<b&&c>b&&a<c){
   console.log(c,b,a);
}

else if(b>a&&a>c&&b>c){
   console.log(b,a,c);
}