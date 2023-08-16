//factor of number using javascript

function factor(num)
{
    for(let i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            console.log(i);;
        }
    }
}    let result =factor(10)
console.log(result);

