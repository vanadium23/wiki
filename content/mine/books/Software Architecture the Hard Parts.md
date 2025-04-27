---
{"dg-publish":true,"up":"[[Books]]","title":"Software Architecture  the Hard Parts","category":"book","status":"Reviewing","tags":["source/book"],"rating":3,"date":"2024-07-18","modified_at":"2025-04-27T16:27:57+03:00","aliases":"Software Architecture  the Hard Parts","permalink":"/mine/books/Software Architecture the Hard Parts/","dgPassFrontmatter":true}
---




Эта книга про [[openbox/competencies/software architecture|software architecture]], и даже скорее про [[forge/it/распределённые системы|распределённые системы]]. Что ещё рассказать про неё? Здесь Нил Форд в очередной раз выдаёт своё задротство.
Значит, что нам рассказывается из интересных понятий:
1. архитектурный квант - неважно как поделены сервисы, пока они привязаны к одним и тем же данных в рамках одной и той же базы (представления), то мы остаёмся в монолите
2. помимо связности между компонентами - важен их размер. в хорошей системе, все компоненты должны быть приблизительно равны
3. статический и динамический каплинг надо считать и брать под контроль с помощью автоматизации и observability, а вот семантический каплинг - вот где нас ждут основные трудности

Рекомендую прочитать книгу полностью, но только первую половину или две трети. В тот момент когда книга заходит на территорию аналитики, то она теряет значимость в организации данных.


## Цитаты

- [[mine/quotes/202407180931|202407180931]]: static and dymanic coupling
- [[mine/quotes/202408081304|202408081304]]: architecture story vs techdebt
- [[mine/quotes/202408081305|202408081305]]: identify and size components
- [[mine/quotes/202408081306|202408081306]]: have consistent component size
- [[mine/quotes/202412161311|202412161311]]: granularity disintegrators
- [[mine/quotes/202412161315|202412161315]]: integration factors
- [[mine/quotes/202412170925|202412170925]]: write everything twice (in distributed systems)
- [[mine/quotes/202412201317|202412201317]]: model semantics closely to implementation


## Задачи

- [x] #task Обработать все выдержки из книги в рамках Zettels ⏳ 2025-04-24 ✅ 2025-04-24
- [x] #task Написать выдержку из книги ✅ 2025-04-27
- [ ] #task Доработать свои заметки на основе идей из книг
