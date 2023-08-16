let st="madam";
   let stsp=st.split('');
   console.log(stsp);
   let rev=stsp.reverse('');
   console.log(rev);
   let revjoin=rev.join('');
   console.log(revjoin);

   if(st===revjoin)
   {
    console.log(`${st} is the paliamdrome`);
   }else{
    console.log(`${st} is not a paliamdrome`);
   }