## Patterns

An expression with a single variable `t`, math and bitwise operations (logic `AND`, `OR`, shifts etc).

```c
(t*(t>>5|t>>8))>>(t>>16)
```

```c
t*(((t>>11)&(t>>8))&(123&(t>>3)))
```

```c
(t>>6|t|t>>(t>>16))*10+((t>>11)&7)
```