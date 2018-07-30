# `ng new`

```
ng new [name]
ng n [name]
```

> С этой команды начинается работа с Angular.

Создание скелета Angular приложения, готового к разработке и запуску.

## `--directory`

* **Тип**: `String`
* **Псевдонимы**: `-dir`

> По-умолчанию создается папка с именем приложения и уже в ней все файлы. Это не всегда удобно, если у вас уже есть определенная структура или необходимо другое имя.

Папка, в которой будет создан проект. 

Генерация в текущую папку: `ng new [name] --dir=.`


## `--dry-run`

* **Тип**: `Boolean`
* **Псевдонимы**: `-d`
* **По-умолчанию**: `false`

> В основном используется для тестов.

Запуск без каких-либо реальных изменений. Список созданных файлов выводится в консоль.


## `--verbose`

* **Тип**: `Boolean`
* **Псевдонимы**: `-v`
* **По-умолчанию**: `false`

> Если во время создания аппы возникают ошибки и вы хотите получить больше информации.

Вывод более детальной информации.


## `--link-cli`

* **Тип**: `Boolean`
* **Псевдонимы**: `-lc`
* **По-умолчанию**: `false`

> Удобно при разработке внутри `angular-cli`.

Установка `@angular/cli` через `npm link`.


## `--skip-install`

* **Тип**: `Boolean`
* **Псевдонимы**: `-si`
* **По-умолчанию**: `false`

Пропуск установки пакетов, после генерации файлов.


## `--skip-commit`

* **Тип**: `Boolean`
* **Псевдонимы**: `-sc`
* **По-умолчанию**: `false`

Не делать `initial commit` после генерации файлов.


## `--skip-git`

* **Тип**: `Boolean`
* **Псевдонимы**: `-sg`
* **По-умолчанию**: `false`

Не инициализировать .git-репозиторий.


## `--skip-tests`

* **Тип**: `Boolean`
* **Псевдонимы**: `-st`
* **По-умолчанию**: `false`

Не создавать `.spec` файлы и не добавлять функционал для e2e-тестирования.


## `--collection`

* **Тип**: `String`
* **Псевдонимы**: `-c`
* **По-умолчанию**: `@schematics/angular`

> [Schematics](https://github.com/angular/devkit/blob/master/packages/angular_devkit/schematics/README.md) очень мощный инструмент, вся генерация кода (как и начального приложения, так и дальнейших компонентов) декларируется в отдельном пакете и вы можете использовать Angular CLI с шаблонами от других поставщиков.

Набор шаблонов (schematics) для генерации скелета и последующего использования. 


## `--minimal`

* **Тип**: `Boolean`
* **По-умолчанию**: `false`

> Отлично подходит для быстрого прототипирования или проверки идей.

Создание минималистичного приложения, без тестов и с минимальным набором зависимостей.


## `--inline-style`

* **Тип**: `Boolean`
* **Псевдонимы**: `-is`
* **По-умолчанию**: `false`

Генерировать компоненты, которые стилизуются через `styles`, а не `styleUrls`.

  
## `--inline-template`

* **Тип**: `Boolean`
* **Псевдонимы**: `-it`
* **По-умолчанию**: `false`

Генерировать компоненты, которые хранят шаблоны в `template`, а не `templateUrl`.


## `--prefix`

* **Тип**: `String`
* **Псевдонимы**: `-p`
* **По-умолчанию**: `app`

Префикс для генерируемых компонентов.


## `--style`

* **Тип**: `css`, `scss`, `less`, `sass`, `styl`
* **По-умолчанию**: `css`

> Можно выбрать один из популярных css-препроцессоров.

Расширение файлов для подключемых файлов стилей, для генерируемых компонентов.


## `--routing`

* **Тип**: `Boolean`
* **По-умолчанию**: `false`

> Удобный параметр, т.к чаще всего нам нужен роутинг в приложении.

Добавление `app-routing.module` при генерации.


## `--source-dir`

* **Тип**: `String`
* **Псевдонимы**: `-sd`
* **По-умолчанию**: `src`

Имя папки с исходниками приложения.

Позже значение можно изменить в `.angular-cli.json`, параметр `apps[].root`. 