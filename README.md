## roistat-react-UI - библиотека компонентов пользовательского интерфейса

<a href="https://roistat.github.io/react-ui/" target="_blank" alt="Immutable Data and React"><img src="http://i.imgur.com/OKvnKV0.png" /></a>

### Необходимая экосистема
* React JS
* Webpack
* Babel
* ES6
* Flowtype

### Установка

##### Новая установка
```sh
$ git clone https://github.com/roistat/react-ui.git
$ cd react-ui
$ npm i
```

##### Установка в существующий проект
```sh
$ npm i @roistat/ui --save
```

```js
import Button from '@roistat/ui/lib/Button'
```

### Запуск 

##### Запуск документации и примеров
```sh
$ npm run docs
```

> примеры с документацией будут доступны <a href="http://localhost:3000" target="_blank" alt="Immutable Data and React">http://localhost:3000 &rarr;</a>

##### Запуск react-storybook для разработки компонентов в изолированной среде

```sh
$ npm run storybook
```

> кейсы использования storybook будут доступны <a href="http://localhost:9010" target="_blank" alt="Immutable Data and React">http://localhost:9010 &rarr;</a>

> узнать что такое <a href="https://github.com/storybooks/react-storybook" target="_blank" alt="Immutable Data and React">react-storybook &rarr;</a>

### Основные реализованные компоненты 
* <a href="https://roistat.github.io/react-ui/#Button" target="_blank" alt="Immutable Data and React">Button</a>
* <a href="https://roistat.github.io/react-ui/#Modal" target="_blank" alt="Immutable Data and React">Modal</a>
* <a href="https://roistat.github.io/react-ui/#Popup" target="_blank" alt="Immutable Data and React">Popup</a>
* <a href="https://roistat.github.io/react-ui/#Spinner" target="_blank" alt="Immutable Data and React">Spinner</a>
* <a href="https://roistat.github.io/react-ui/#FontIcon" target="_blank" alt="Immutable Data and React">FontIcon</a>
* <a href="https://roistat.github.io/react-ui/#AutoClosable" target="_blank" alt="Immutable Data and React">AutoClosable</a>

<a href="https://roistat.github.io/react-ui/" target="_blank" alt="Immutable Data and React">Перейти ко всем компонентам &rarr;</a>

### Структура проека
```
├── roistat-ui/ //корневая директория
│   │
│   ├── .storybook/ //конфиграция storybook
│   │
│   ├── assets/ //статические файлы для сборки storybook и документации
│   │
│   ├── docs/ //документация для разработчика
│   │
│   ├── lib/ //внешние библиотеки
│   │
│   ├── src/
│   │
│   │   ├── Button //папка компонента
│   │   │   └── Button.jsx //файл реализации компонента
│   │   │   └── index.js //индексный файл для подключения компонента
│   │   │   └── story.jsx //кейсы использования
│   │   │   └── Readme.md //примеры использования компонента и дополнительная документация
│   │   ├── const //константы
│   │   ...        
│   │   └── helpers/ //библиотека вспомогательных функций
│   │    ├── styles //библиотека для работы со стилями
│   │    └── addEventListener.js //listener для не реакт DOM событий
│   │   
└── └── .babelrc //конфиг Babel
│   │   
└─  └── package.json.html 
│   │   
└─  └── styleguide.config.js //пример webpack-конфига
```

> <a href="https://github.com/roistat/react-ui/blob/master/docs/development.md" target="_blank" alt="Immutable Data and React">Рекомендации по разработке компонентов &rarr;</a>