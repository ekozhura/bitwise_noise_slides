## Make Noise

As a result of execution we have 8-bit PCM sample values with 8kHz sample rate:

```bash
#compile program
gcc source.c -o execut

#run it and store outpit into a file
./execut | head -c 4M > rawaudio.raw

#transform output into PCM sample values
sox -r 8000 -c 1 -t u8 rawaudio.raw tune.wav
```