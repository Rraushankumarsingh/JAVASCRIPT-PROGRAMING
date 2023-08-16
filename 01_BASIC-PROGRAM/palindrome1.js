let st="test";
  let  length=st.length
  var msg="it is a palindrome"
   for(let i=0;i<length/2;i++)
   {
    if(st[i]!=st[length-1-i])
    {
       var msg=(` is not a palindrome`);
    }
   }
   console.log(` ${st} :${msg}`);


