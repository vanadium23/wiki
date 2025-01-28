---
{"dg-publish":true,"date":"2023-02-09T21:47:57+04:00","modified_at":"2025-01-28T16:59:54+03:00","permalink":"/forge/it/makefile/","dgPassFrontmatter":true}
---

GNU Make - программа для генерации программ из исходников. Изначально было заточено под C, но потом стали использовать и как файлик под скрипты.

Важно, что при вызове команды `make` не учиывается переменная окружения `SHELL`, а просто вызывается `sh`.

Конфиг хранится в файле `Makefile`.

## Syntax

```
# задание опциональных аргументов
arg ?= "default"
```

## Base

Команда, чтобы вывести другие команды плюс сразу напоминаем про `.PHONY`:

```
.PHONY: help

## help: show list of available commands.
help : Makefile
	@echo "+--------------------+"
	@echo "| AVAILABLE COMMANDS |"
	@echo "+--------------------+\n"
	@cat Makefile | grep "##" | sed -n 's/^## /make /p' | column -t -s ':' && echo ""
```

Забираем environment из `.env` если он есть:
```
ifneq (,$(wildcard ./.env))
    include .env
    export
endif
```
## Python

Типичный файл для [[openbox/python|python]]:
- создать virtualenv
- установить зависимости из requirements.txt
- запустить приложение
- хорошее дополнение: генерация по pip-tools и разделе prod/dev

Шаблон:
```make
SHELL:=/bin/bash
VENV_DIR=.venv
VENV_BIN=$(VENV_DIR)/bin
PYTHON=$(VENV_BIN)/python3
PIP=$(VENV_BIN)/pip3

## venv: create virtualenv
venv: $(VENV_DIR)

$(VENV_DIR):
	python3 -m venv $(VENV_DIR)

## setup: init project - create virtualenv, install requirements
setup: venv pip

## pip-tools: generate requirements.txt and sync with virtualenv
pip-tools: venv requirements.in requirements-dev.in
	$(PIP) install -U pip-tools
	$(VENV_BIN)/pip-compile --generate-hashes --output-file=requirements.txt requirements.in
	$(VENV_BIN)/pip-compile --generate-hashes --output-file=requirements-dev.txt requirements-dev.in
	$(VENV_BIN)/pip-sync requirements.txt requirements-dev.txt

## pip: install requirements
pip: requirements.txt
	$(PIP) install -r requirements.txt
	$(PIP) install -r requirements-dev.txt

## run: run project
run: venv
	$(PYTHON) src/app.py

## clean: clear python project (*.pyc, etc).
clean:
	find . -name '*.pyc' -delete
	find . -name '__pycache__' -type d | xargs rm -fr
```
