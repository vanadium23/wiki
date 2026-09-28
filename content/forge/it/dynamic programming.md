---
{"date":"2024-08-05T12:54:20+03:00","modified_at":"2025-04-08T16:19:09+03:00","aliases":["динамическое программирование"],"dg-publish":true,"tags":["status/writing","review/needed"],"permalink":"/forge/it/dynamic programming/","dgPassFrontmatter":true}
---


Динамическое программирование - способ решения задач методом [[forge/math/математическая индукция|математической индукции]]. 
Как правило, сводится к следующим шагам:
1. решение методом рекурсии
    1. находим граничные условия
    2. находим формулу для нахождения N-ого элемента
2. мемоизация рекурсии
3. разворачивание формулы в прямой вид
    1. создаём кеш из шага 2
    2. заполняем его циклом, а не рекурсией
4. если мы знаем что в вычисление идёт только по N элементам можем убрать кеш
    1. тип делаем N переменных
    2. правильно их свапаем

Важным условием для использования динамического программирования будет то, что разложение вычисление на более маленькие будет давать пересечение того, какие результаты нам нужны. Классическим примером является числа Фибоначчи, где для вычисления шестого числа уже три раза потребуется третье:
- 8 = 5 + 3 = (2 + 3) + (2 + 1) = (**2** + (**2** + 1)) + (**2** + 1)

## Пример задач

### Одномерный

Рассмотрим на примере задачки [House Robber](https://leetcode.com/problems/house-robber/description/). Можно кратко её переформулировать так: найти максимальную сумму чисел в массиве, если нельзя брать рядом стоящие.

Рекурсия:
```python
def rob(nums: List[int]) -> int:
    if not len(nums):
        return 0
    return max(
         # rob current, skip next
        nums[0] + self.rob(nums[2:]), 
         # rob next, skip current
        self.rob(nums[1:])
    )
```

Мемоизация (как правило с внутренней функцией):

```python
def rob(nums: List[int]) -> int:
    memo = {}
    
    def rob_memo(i: int) -> int:
        if i < 0:
            return 0
        
        if i in memo:
            return memo[i]
        
        memo[i] = max(rob_memo(i - 2) + nums[i], rob_memo(i - 1))
        return memo[i]
    
    return rob_memo(len(nums) - 1)
```

Bottom up:
```python
def rob(nums):
    ln = len(nums)
    dp = [0] * (ln+2) # добавляем два, чтобы выйти за границы

    for i in range(ln-1,-1,-1):
        ths = nums[i] + dp[i+2]
        nxt = dp[i+1]
        dp[i] = max(ths, nxt)
    
    return dp[0]
```

### Многомерное dp

## Что дальше



context:: [[openbox/algorithms|алгоритмы]]
problem:: 

## Источники



- https://ru.hexlet.io/blog/posts/chto-takoe-dinamicheskoe-programmirovanie


## Как улучшить

- [ ] дописать пример с многомерным массивом
