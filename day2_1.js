function recursion(n)
{
    if(n==0)
    {
        return 0;
    }
    else if(n==1)
    {
        return 1;
    }
    else 
    {
        return recursion(n-2)+recursion(n-1)
    }
}
let a=recursion(6)
console.log(a)