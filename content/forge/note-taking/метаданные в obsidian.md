---
{"dg-publish":true,"date":"2023-03-26T13:52:58+04:00","modified_at":"2024-12-02T23:40:44+03:00","tags":["topic/notes","status/completed","review/pending"],"permalink":"/forge/note-taking/метаданные в obsidian/","dgPassFrontmatter":true}
---


Практическая реализация записи [[forge/note-taking/метаданные в заметках|метаданных в заметках]]  в рамках [[openbox/software/obsidian|obsidian]]. Так как в Obsidian есть плагин [[openbox/software/obsidian-dataview|obsidian-dataview]], которые реализует свой синтаксис начинают возникать вопросы что использовать: [встроенные синтаксис](https://blacksmithgu.github.io/obsidian-dataview/annotation/add-metadata/) или через yaml в [[forge/note-taking/frontmatter|frontmatter]].

Простой ответ: оба подхода можно использовать одновременно, если это не сбивает с подхода.

В своих заметках сложилось следующее разделение:
- в основном, использую frontmatter из-за того, что он скрывается из заметки при экспорте и не отображается в режиме для чтения. 
- если требуется редактор obsidian - ссылки, поиск обратных и так далее; то кладу в текст заметки через `::` согласно документации dataview.

### Таблица сравнение


|  |Плюсы|Минусы|
|:--|:--|:--|
|Front matter|Можно использовать вне Obsidian <br> Можно писать вложенные объекты  <br> Можно скрыть из отображения   <br> Можно использовать при экспорте pandoc в другие форматы|В YAML легко допустить ошибку <br> Не все фишки редактора Obsidian доступны |
|Dataview field|Можно писать прям в тексте заметке  <br> Часть сторонних плагинов умеют их использовать (obsidian-tracker) |Работает только в Obsidian <br> Из сложных объектов доступен только список  <br> |

### Ещё примеры

- [[mine/quotes/202303210958|Front matter в callout из чата Zettelkasten]]
