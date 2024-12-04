---
{"dg-publish":true,"date":"2024-11-25T17:41:59+03:00","modified_at":"2024-12-04T16:45:44+03:00","tags":["status/completed","review/pending","topic/notes"],"permalink":"/forge/note-taking/frontmatter/","dgPassFrontmatter":true}
---


Front matter / ((передний край)) - один из способов размещать структурированные данные внутри markdown файлов. Представляет из себя "заголовок" в начале файла отбитые `---`. Польза их в том, что с ними можно обработать массово с помощью скриптов - [python](https://github.com/eyeseast/python-frontmatter), [golang](https://github.com/adrg/frontmatter) или построить [полноценную базу данных](https://markdowndb.com/). Хотя [[forge/note-taking/метаданные в obsidian|метаданные в obsidian]] можно делать и по-другому.

Пример в YAML:
```md
---
date: 2024-11-25
---
```

Внутри может быть и JSON:
```md
---
{"date": "2024-11-25"}
---
```

Стандартные для [[forge/it/static site generator|static site generator]] заголовки:
- date - дата создания
- tags - список тегов в заметке
- permalink - ссылки на файл
- title - заголовок страницы, если отличается от названия файла
- published - дата публикации
- modified - дата последнего изменения

## Что дальше



context:: [[forge/note-taking/структурирование заметок|структурирование заметок]]
problem:: [[forge/note-taking/метаданные в заметках|метаданные в заметках]]

Можно в качестве примера глянуть [[mine/quotes/202303210958|Front matter в callout]]

## Источники



- https://gohugo.io/content-management/front-matter/
- https://www.11ty.dev/docs/data-configuration/

## Как улучшить

- [x] найти какую проблему это решает ✅ 2024-11-28
