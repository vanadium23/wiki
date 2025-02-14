---
{"toc":true,"dg-publish":true,"date":"2023-01-14T12:31:40+03:00","modified_at":"2024-12-02T17:22:06+03:00","tags":["status/writing","topic/architecture"],"permalink":"/forge/it/event storming/","dgPassFrontmatter":true}
---


Практика для разработки [[forge/it/архитектура сервиса|архитектуры сервиса]], которую в последствии можно переложить на [[openbox/event based architecture|event based architecture]]. Основное проектирование заключается в описание поведения системы на основе событий. События получаются в следствие действий акторов. Акторы выбирают действие на основе доступной информации.

![примерное поведение](https://github.com/ddd-crew/eventstorming-glossary-cheat-sheet/raw/master/_resources/process-picture.jpg)

### Этапы проведения

- Big picture
    - собираем события на единую линию времени
    - параллельные события разделяем с помощью swimlane
    - проверяем корректностью с помощью чтения вперёд по временной линии и назад
    - события, которые делят контексты, делаем БОЛЬШЕ, чтобы понять переход между состояниями
- Process modeling
    - докидываем к событиями акторов и команды
    - если события из внешней системы, её тоже подписываем
    - для принятие решений акторам нужна рид модель
- Software design
    - докидываем аггрегаты, чтобы поменять сущности
    - emerging bounded context

### Чеклист граблей

- [ ] Event Storming описывает бизнес-поведение системы, а не техническую реализацию алгоритма команд.
- [ ] В названии команд и событий используются бизнес-термины, а не техническое описание алгоритма работы.
- [ ] Соблюдается аннотация Event Storming, как в последовательности вызова, так и в наборе стикеров.
- [ ] Получение необходимых данных для принятия решения акторами происходит с помощью read model.
- [ ] События называются с помощью однозначного глагола в прошедшем времени. В случае бизнес-событий — специфика бизнеса (что произошло в терминах бизнеса), а не в терминах технической реализации алгоритма. В случае со стриминг-событиями — какая операция произведена над ресурсом.

### Ссылки

- https://github.com/ddd-crew/eventstorming-glossary-cheat-sheet
- шаблон в miro: https://miro.com/miroverse/event-storming/
