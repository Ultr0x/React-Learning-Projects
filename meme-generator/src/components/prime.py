def isPrime(n):
    for i in range(2, n//2+1):
        if(not (n%i)):
            return 0
    return 1

numPrime = 0

for i in range(2, 1000):
    numPrime += isPrime(i)
    print (numPrime)

print(str(numPrime))