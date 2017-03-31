## What is Bitwise Noise?

Technique, discovered by [Ville-Matias Heikkila](http://countercomplex.blogspot.com/) in 2010s.

Bitwise noise is created from a simple expression, enclosed into a program in C:

```c
main() 
{
  int t=0;
  for(;;t++) putchar(t&t>>8);
}

```