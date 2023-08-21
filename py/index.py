my_array = [3, 1, 2, 3]

nuevo_array = []

for i, _ in enumerate(my_array):
    nuevo_array.append([my_array[i]])

for i, _ in enumerate(my_array[:-1]):
    nuevo_array.append([my_array[i], my_array[i+1]])

nuevo_array.append(my_array)

# print(nuevo_array)

k = 4
contador = 0
for i in nuevo_array:
    multi_total = 1
    for valor in i:
        multi_total *= valor
    # print(multi_total)
    if (multi_total <= k):
        contador += 1


print(contador)
