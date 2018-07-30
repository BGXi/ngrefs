# `ng set`

> Удобная функция для установки значения, также может использоваться для автоматизации, туториалов или работы с глобальными конфигами.

```
ng set [key]=[value]
```

Сохранение настройки в `.angular-cli.json` и обновление смежных файлов, если в этом есть необходимость, например `tslint.json`.  

Пример `[key]`: `a[3].foo.bar[2]`

Конфиг-схема: https://github.com/angular/angular-cli/wiki/angular-cli 


## `--global`

* **Тип**: `Boolean`
* **Псевдонимы**: `-g`
* **По-умолчанию**: `false`

> Если какая-то настройка не указана в `.angular-cli.json`, то значение берется из глобального конфига. 

Сохранение настройки в глобальный конфиг Angular CLI.