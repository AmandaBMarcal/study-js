/*
You will be given two strings a and b consisting of lower case letters, 
but a will have at most one asterix character. 
The asterix (if any) can be replaced with an arbitrary sequence (possibly empty) of lowercase letters. 
No other character of string a can be replaced. 
If it is possible to replace the asterix in a to obtain string b, 
then string b matches the pattern.
If the string matches, return true else false.
*/

const solve =(a,b) => new RegExp(`^${a.replace('*','.*')}$`).test(b);


/* I had difficulty with this problem and could not complete it. When looking at the solutions I didn't quite understand what they did either. Working oon 8kyu */