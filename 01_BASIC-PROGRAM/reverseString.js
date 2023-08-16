   //reverse string 
let st="hello world"
let lent=st.length;
let rev="";
for(let i=lent-1;i>=0;i--)
{
    rev=rev+st[i];
}
 console.log(`${st} \n reverse is\n ${rev}`);