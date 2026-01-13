---
{"date":"2026-01-10T15:54:11+03:00","modified_at":"2026-01-13T17:59:10+03:00","dg-publish":true,"permalink":"/forge/productivity/Lifeflow FPF/","dgPassFrontmatter":true}
---


> **Для:** Детального трекинга персональных проектов
> **Контекст:** `Vault/actions/` (Bounded Context)
> **Стек:** Obsidian + Dataview + Linter + Templater
> **Агенты:** Human + LLM + Dataview Scripts

---

## 1. Universal Type System (UTS)

### Core Attributes

Наследуются **всеми типами** (кроме указанных исключений):

| Атрибут | Назначение | Заполняет |
|---------|------------|-----------|
| `type` | Идентификация типа | Templater |
| `date` | Дата создания (portable) | Templater |
| `modified_at` | Дата последнего изменения | Linter (auto) |
| `status` | Состояние жизненного цикла | Human |

> **Исключение:** `U.Domain` не имеет `status` — Areas are timeless.

---

### Status Values (унифицированные)

| Status | Описание | Применимо к |
|--------|----------|-------------|
| `To do` | Начальный статус, подготовительная работа | Goal, Project, Experiment, Idea |
| `In Progress` | Активная работа | Goal, Project, Experiment |
| `Reviewing` | Оценка результатов перед завершением | Goal, Project, Experiment |
| `Waiting` | Ожидание внешних результатов | Goal, Project, Experiment, Idea |
| `Completed` | Успешно завершено | Goal, Project, Experiment, Idea |
| `Discarded` | Безуспешно / отменено | Goal, Project, Experiment, Idea |

---

### Type Definitions

| U.Type | Tech | Определение | Type-Specific Attributes |
|--------|------|-------------|--------------------------|
| `U.Domain` | area | Зона ответственности (timeless) | `category`, `intensity`, `review_cycle` |
| `U.Outcome` | goal | Измеримый результат (метрики) | `area`, `parent`, `progress`, `target`, `unit`, `estimate`, `start_date`, `due_date`, `finish_date`, `created_by` |
| `U.Container` | project | Ограниченная работа с deliverable | `area`, `parent`, `estimate`, `start_date`, `due_date`, `finish_date`, `next`, `prev`, `created_by` |
| `U.Work` | task | Атомарное действие | `text` (checklist inside Project) |
| `U.Experiment` | experiment | Проверка гипотезы | `area`, `parent`, `outcome`, `start_date`, `finish_date` |
| `U.Incubation` | idea | Someday/maybe | `area`, `trigger`, `review_date`, `converts_to` |
| `U.Resource` | resource | Материал для изучения | _Moved out of actions/ context_ |

---

### Справочник атрибутов

#### Links (связи)

| Атрибут | Тип | Описание | Используется в |
|---------|-----|----------|----------------|
| `area` | link | Зона ответственности `[[Area Name]]` | Outcome, Container, Experiment, Incubation |
| `parent` | link | В рамках чего делаем | Outcome, Container, Experiment |
| `next` | link | Следующий в цепочке | Container |
| `prev` | link | Предыдущий в цепочке | Container |
| `created_by` | link | Контекст создания | Outcome, Container |
| `converts_to` | link | Во что превращается | Incubation |

#### Dates (даты)

| Атрибут | Тип | Описание | Используется в |
|---------|-----|----------|----------------|
| `start_date` | date | Дата начала работы | Outcome, Container, Experiment |
| `finish_date` | date | Дата фактического завершения | Outcome, Container, Experiment |
| `due_date` | date | Внешний дедлайн | Outcome, Container |
| `review_date` | date | Когда пересмотреть | Incubation |

#### Metrics (измерения)

| Атрибут | Тип | Описание | Используется в |
|---------|-----|----------|----------------|
| `estimate` | number | Оценка срока в днях | Outcome, Container |
| `progress` | number | Текущее значение метрики | Outcome |
| `target` | number | Целевое значение метрики | Outcome |
| `unit` | string | Единица измерения | Outcome |
| `intensity` | enum | Уровень внимания | Domain |

#### Special

| Атрибут | Тип | Описание | Используется в |
|---------|-----|----------|----------------|
| `category` | enum | Группировка areas (Life/Work/etc.) | Domain |
| `review_cycle` | enum | Частота пересмотра | Domain |
| `outcome` | enum | Результат эксперимента | Experiment |
| `trigger` | string | Условие активации идеи | Incubation |

---

### Матрица атрибутов

Легенда: ✅ = обязателен | ⚪ = опционален | — = не применим

| Атрибут | Domain | Outcome | Container | Work | Experiment | Incubation |
|---------|--------|---------|-----------|------|------------|------------|
| **CORE** |
| `type` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `date` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `modified_at` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `status` | — | ✅ | ✅ | ✅ | ✅ | ✅ |
| **LINKS** |
| `area` | — | ✅ | ✅ | ⚪ | ✅ | ✅ |
| `parent` | — | ⚪ | ✅ | ✅ | ⚪ | — |
| `next` | — | — | ⚪ | — | — | — |
| `prev` | — | — | ⚪ | — | — | — |
| `created_by` | — | ⚪ | ⚪ | — | — | — |
| `converts_to` | — | — | — | — | — | ⚪ |
| **DATES** |
| `start_date` | — | ⚪ | ✅ | — | ✅ | — |
| `finish_date` | — | ⚪ | ⚪ | — | ⚪ | — |
| `due_date` | — | ✅ | ⚪ | — | — | — |
| `review_date` | — | — | — | — | — | ✅ |
| **METRICS** |
| `estimate` | — | ✅ | ✅ | — | — | — |
| `progress` | — | ✅ | — | — | — | — |
| `target` | — | ✅ | — | — | — | — |
| `unit` | — | ✅ | — | — | — | — |
| `intensity` | ✅ | — | — | — | — | — |
| **SPECIAL** |
| `category` | ✅ | — | — | — | — | — |
| `review_cycle` | ⚪ | — | — | — | — | — |
| `outcome` | — | — | — | — | ⚪ | — |
| `trigger` | — | — | — | — | — | ⚪ |

---

### Enum Values

| Атрибут | Возможные значения |
|---------|-------------------|
| `status` | `To do`, `In Progress`, `Reviewing`, `Waiting`, `Completed`, `Discarded` |
| `category` | `life`, `work`, `growth`, `relationships` (расширяемый) |
| `intensity` | `high`, `low`, `maintenance` |
| `review_cycle` | `weekly`, `bi-weekly`, `monthly`, `quarterly` |
| `outcome` | `success`, `failure`, `inconclusive` |
| `converts_to` | `project`, `experiment`, `goal` |

---

## 2. Граф связей

Goal — метрика успеха. Project — контейнер работы. `next`/`prev` обеспечивают цепочку.

```
area ←─── goal ────────┐
  ↑         ↑ parent   │
  │         │          │
  └── project (Phase 1) ←prev──next→ project (Phase 2)
```

**Все связи — links:** `area: "[[Health]]"`, `parent: "[[Goal Name]]"`

---

## 3. Areas Management

При 10+ areas используй `intensity` для управления вниманием.

| Intensity | Описание | Review частота | Max количество |
|-----------|----------|----------------|----------------|
| `high` | Активная работа | Daily scan | ≤7 |
| `low` | Периодически | Bi-weekly | Любое |
| `maintenance` | Редко, поддержка | Monthly | Любое |

**Self-check:** High areas ≤ 7? → Если больше, понизь intensity.

> **Важно:** Areas не имеют `status`. Неактуальные areas — удаляй или перемещай в архив.

---

## 4. Review Ритм

Daily + Friday Check заменяют Weekly. Monthly ловит стратегические проблемы.

| Review | Время | Фокус | Human Actions |
|--------|-------|-------|---------------|
| Daily | 15 мин | Tasks + Alerts | Check Alerts Dashboard, tasks inside active Projects |
| Friday Pulse | 10 мин | Project Status | Update `status`, check `next` links, review `Waiting` items |
| Monthly | 90 мин | Metrics & Dates | Update Goal `progress`. Compare progress vs `due_date`. Review Ideas |
| Quarterly | 2-3 ч | Analytics | Calc "Planning Error" (`estimate` vs actual duration). Review Areas |

---

## 5. Staleness Thresholds

Автоматические alerts (на основе Linter `modified_at`) ловят забытое.

| Тип | Warning | Critical | Действие |
|-----|---------|----------|----------|
| Project | 7d | 14d | Почему стоит? Blocker → `Waiting`. Done → `Completed` |
| Goal | 30d | 60d | Обновить `progress` или `Discarded` |
| Waiting items | 7d | 14d | Проверить внешнюю зависимость |
| Reviewing items | 7d | 14d | Завершить review → `Completed` или `Discarded` |
| To do items | 14d | 21d | Начать → `In Progress` или `Discarded` |
| Ideas | review_date | +30d | Пересмотреть триггер, обновить `review_date` |

---

## 6. Goal vs Project

Project может быть `Completed`, но Goal `Discarded`. Разделяй.

| | Goal | Project |
|---|------|---------|
| Вопрос | "Сколько осталось до цели?" | "Что делаем сейчас?" |
| Метрика | `progress` / `target` | Checklist completion |
| Время | `due_date` (Hard Limit) | `estimate` (Forecast in days) |
| Связь | Parent to Sub-Goal | `next`/`prev` to chain |
| `estimate` | Ставка на срок достижения | Прогноз длительности работы |

---

## 7. Quick NQD Self-Check

Перед добавлением нового элемента в систему.

| Dimension | Вопрос | Red flag |
|-----------|--------|----------|
| **N**ecessity | Есть ли `parent` Goal/Project? | Orphan element |
| **N**ecessity | Есть ли `area`? | Unlinked element |
| **Q**uality | `estimate` заполнен? (для Goal/Project) | Пустой estimate сломает аналитику |
| **Q**uality | `due_date` заполнен? (для Goal) | Goal без deadline — wish, not goal |
| **D**anger | `next`/`prev` ссылки валидны? | Broken chain links |
| **D**anger | `status` из списка допустимых? | Invalid status |

---

## 8. Frontmatter Templates

### U.Domain (Area)

```yaml
---
type: area
date: {{date}}
modified_at: {{date}}
category: work
intensity: high
review_cycle: monthly
---
```

### U.Outcome (Goal)

```yaml
---
type: goal
date: {{date}}
modified_at: {{date}}
area: "[[Area Name]]"
parent: 
status: To do
progress: 0
target: 100
unit: "%"
estimate: 90
start_date: {{date:YYYY-MM-DD}}
due_date: 
finish_date:
created_by: "[[Current Context]]"
---
```

### U.Container (Project)

```yaml
---
type: project
date: {{date}}
modified_at: {{date}}
area: "[[Area Name]]"
parent: "[[Goal Name]]"
status: To do
estimate: 14
start_date: {{date:YYYY-MM-DD}}
due_date:
finish_date:
next:
prev:
created_by: "[[Current Context]]"
---
```

### U.Experiment

```yaml
---
type: experiment
date: {{date}}
modified_at: {{date}}
area: "[[Area Name]]"
parent:
status: To do
outcome:
start_date: {{date:YYYY-MM-DD}}
finish_date:
---
# Название файла = гипотеза
```

### U.Incubation (Idea)

```yaml
---
type: idea
date: {{date}}
modified_at: {{date}}
area: "[[Area Name]]"
status: To do
trigger: ""
review_date: {{date+90d:YYYY-MM-DD}}
converts_to:
---
```

---

## 9. LLM Collaboration Points

| Задача | Промпт-паттерн |
|--------|----------------|
| Audit areas/goals | "NQD-аудит списка: [вставить]. Риски? Overlap?" |
| Stuck project | "Project X в статусе `Waiting` 14 дней. Контекст: [...]. Что блокирует?" |
| Monthly review | "Вот мои goals и progress. Что off-track? Что пересмотреть?" |
| UTS evolution | "Хочу добавить атрибут Y. NQD-check против текущей UTS." |
| Idea trigger | "Для идеи X сформулируй конкретный trigger условие." |

---

## 10. Папки Obsidian

```
actions/
├── areas/          # U.Domain — зоны ответственности
├── dashboards/     # System views & alerts
├── experiments/    # U.Experiment — проверка гипотез
├── goals/          # U.Outcome — измеримые результаты
├── ideas/          # U.Incubation — someday/maybe
└── projects/       # U.Container — активные контейнеры работы
```

---

## 11. Alerts Dashboard

Файл: `actions/dashboards/00-alerts.md`

### Структура alerts по severity:

| Severity | Что ловит |
|----------|-----------|
| 🔴 **Critical** | Overdue items, Stale projects (14d+), High areas > 7 |
| 🟡 **Warning** | Stale projects (7-14d), Stale goals (30d+), Long waiting (7d+), Stuck in reviewing (7d+), Goals behind schedule |
| 🟠 **Attention** | Orphan projects, Goals без projects, Experiments без outcome, Ideas ready for review, Old To do items (14d+) |
| ⚪ **Data Quality** | Missing required fields, Invalid status values, Broken chain links, Completed without finish_date |

---

## 12. Emergency Checklist

| Симптом | Вероятная причина | Решение |
|---------|-------------------|---------|
| Всё горит | High areas > 7 | Понизить intensity |
| Projects дрейфуют | Нет Friday check | Включить 10-мин pulse |
| Goals не двигаются | Нет contributing project | Создать project или `Discarded` |
| Много в `Waiting` | Внешние зависимости копятся | Friday check: escalate или drop |
| Много в `Reviewing` | Перфекционизм | Timebox review, ship it |
| Много в `To do` | Overcommitment | NQD audit, `Discarded` лишнее |
| Система сложная | Слишком много атрибутов | NQD audit, упростить |
| Alerts не пустые | Пропуск Daily check | Дисциплина: 15 мин утром |

---

_Version 1.5 | Method: FPF-aligned | Focus: Unified Statuses & Link-based Relations_
