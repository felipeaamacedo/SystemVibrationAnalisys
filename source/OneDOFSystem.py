import math

print('Type the mass (m) of your system: ')
m = int(input())
print('Type the stiffness (k) of your system: ')
k = int(input())
print('Type the damping (d) of your system: ')
d = int(input())

def naturalFrequency(m, k):
    w_n = math.sqrt(k/m)
    return w_n

def frequency(m, k):
    f = 1 / math.sqrt(k/m)
    return f

w_n = naturalFrequency(m, k)
f = 1/w_n

print('w_n = ' + str(w_n))
print('f = ' + str(f))
