---
{"dg-publish":true,"date":"2024-11-18T13:58:04+03:00","modified_at":"2024-11-29T15:47:08+03:00","permalink":"/meta/кастомизация движка Quartz/","dgPassFrontmatter":true}
---


Здесь будет более менее живая заметка о том, как происходит переход. Идея была честно скопирована с западного примера: https://quartz.eilleeenz.com/Quartz-customization-log

## Что хочется поменять

Функционально:
- [x] добавить Recent notes слева на Desktop
- [x] добавить чтобы у заметки была дата создания и дата обновления
- [ ] сделать кастомный crawler, который поменяет Openbox url на урлы до [[openbox/цифровой архив|цифрового архива]].
- [x] добавить navbar с дизайном с vanadium23.me
- [ ] на десктопе сделать более широкий контент
- [ ] переверстать страницу одной заметки на более минималистичную
- [ ] накатить новый дизайн на classless

Проблемы:
- [x] из-за наличия permalinks у меня не сломались старые пути, но новые выглядят как `openbox/Openbox` - необходимо придумать как от дубля избавиться
    - решилось тем, что openbox в архив, а quartz натянут на блог 
- [x] починить slugify в [[openbox/software/obsidian-digital-garden|obsidian-digital-garden]], который создаёт бесконечный редирект на quartz
    - решилось тем, что отключил slugify в настройках [[openbox/software/obsidian-digital-garden|obsidian-digital-garden]]
- [x] починить preview для ссылок (opengraph метаданные)
    - [x] поменять картинку
- [x] починить загрузку картинок через digital garden
- [x] разобраться с бесконечным permalink, если совпадает с slug
    - [ ] закинуть PR с фиксом бесконечных редиректов в upstream
- [x] починить шрифт в картинках на превьюшках
    - Quartz по умолчанию качает ttf с google fonts api, который не имеет маппинга для кириллицы
    - пока сделал какой-то костыль [src](https://github.com/vanadium23/wiki/commit/336e09cfda0c7ba1ab4f50a21c401a379b7e33cb)
- [ ] не работает загрузка excalidraw через [[openbox/software/obsidian-digital-garden|obsidian-digital-garden]]
- [x] неправильно работает загрузка и diff в publication center [[openbox/software/obsidian-digital-garden|obsidian-digital-garden]]
    - оказалось логика дублируется, поэтому пришлось опять костылить [src](https://github.com/vanadium23/obsidian-digital-garden/commit/ed6fcabf3d44d2ff510ef58b094b4fc554a9e2eb) 

## Добавлено в quartz

### Подтягивание дат

В quartz настроено куча полей откуда по умолчанию брать даты создания и изменения ([src](https://github.com/jackyzha0/quartz/blob/v4/quartz/plugins/transformers/lastmod.ts)), суть в том что на всех не напасёшься. Поэтому пришлось сделать пару изменений ([src](https://github.com/vanadium23/vanadium23.github.io/commit/3a2f8cea7926366ba764a7bb06063e884aa370ee)).

По хорошему эта переделка должна быть такой:
- [ ] В contentMeta сказать какие поля показывать в качестве дат (по умолчанию только created).
- [ ] В lastmod для frontmatter добавить конфиг с полями для проверки даты модификации и старты.

И это тогда можно законтрибьютить назад.

### Navbar

В quartz есть header, но он помещается над основным контентом и учитывает левые и правый сайдбар в ширине. А на сайтах часто есть ещё и navbar сверху, над всем контентом сайта.

В этом плане мне нравится то, что добавились семантические теги в html.

![semantic html|400](https://www.w3schools.com/html/img_sem_elements.gif)

Header уже сделан неправильно, но вот nav точно должен быть над article. Получилось сделать в [PR 11](https://github.com/vanadium23/vanadium23.github.io/pull/11). 

- [x] Законтрибьюьтить navbar обратно в upstream quartz. ✅ 2024-11-13
    - https://github.com/jackyzha0/quartz/pull/1588

## Переход на quartz

В тот же момент, когда и выбирал разворачивать в прошлый раз [quartz](https://quartz.jzhao.xyz/) уже был. Правда, вся его архитектура была другая: в основе был hugo и сверху него был скрипт, который приводил obsidian markdown к hugo like. Выглядела конструкция хрупко, а сейчас у этого инструмента уже v4. 

В этот раз всё сделано с помощью Typescript и довольно сильно напоминает [eleventy](https://www.11ty.dev/). И стоит посмотреть на архитектуру:
- сам quartz из себя представляет pipeline применённых [плагинов](https://quartz.jzhao.xyz/configuration#plugins), которые разделяются на три вида:
    - transformers - меняют контент внутри заметки ([[openbox/regexp|регулярки]] на стероидах) 
    - filters - фильтруют какие файлы не надо публиковать
    - emitters - преобразуют заметку + метаданные в финальный вид (html для сайта, xml для RSS, json для графа)
- компоненты - это то из чего состоит страница.
    - сама страница разбивается на 5 блока: сверху, контент, справа и футер
    - компонентами являются: метаданные, table of content, локальный граф, и [много чего ещё](https://quartz.jzhao.xyz/tags/component)
