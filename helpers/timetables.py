from pprint import pprint as p
from random import shuffle,randint
t = []
f = []
o = []
tables = (1, 10, 11, 2, 5, 4, 3, 9, 6, 8)

for i in range(2, 10):
# for i in tables:
    
    l = [(i, j) for j in range(i, 10)]
    f += l
    t.append(l)

for i in f:
    first = randint(0, 1)
    last = 1-first
    o.append("%d + %d" % (i[first], i[last]))
    o.append("%d * %d" % (i[first], i[last]))

shuffle(o)
p(o)
