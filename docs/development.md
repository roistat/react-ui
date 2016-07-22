## Разработка компонентов

## Структура проека
```
    + .storybook  // конфиграция storybook
    + assets // статические файлы для собрки storybook и документации
    + docs // документация для разработчика
    + src
        |
        ...
        + Button // папка компонента - начинается с заглавной буквы
            |
            ...
            - Button.jsx // файл реализации компонента
            - index.js // индекс файл для подключения компонента как папки
            - stroy.jsx // кейсы использования (разработка ведется через добавление нового кейса)
            - Readme.md // Примеры использования компонента и дополнительная документация

        + const // константы
            |
            ...
            - theme.js // тема для roistat компонетов (цвета, шрифты, размеры)

        + helpers // библиотека вспомогательных функций
            |
            ...
            + styles // библиотека для работы со стилями
            - addEventListener.js // listener для не реакт DOM событий
```

### Установка

1. Делаем форк репозитория
2. Клонируем репозиторий: git clone https://github.com/{your_github_nickname}/react-ui
3. Переходим в директорию проекта и добавляем удаленный репозиторий для обновления: git remote add upstream https://github.com/roistat/react-ui
4. Из дериктории проекта выполняем команду npm i


### Запуск документации и примеров

npm run server - примеры с документацией будут доступны по адрессу http://localhost:3000


### Запуск storybook

npm run storybook - кейсы использования будут доступны по адресу  http://localhost:9010


### Собрка документации и storybook для публикации

npm run build

### Требования к компонентам

1. У компонента должны быть описанны все props через propTypes
2. У каждого компонента должен быть Readme.md файл с примерами использования и документацией к публичным методам, если они имеются.
2. Предпочтительно api через props.children

Плохо:
```js
<Menu items={[{ title: 'one', value: 1}, { title: 'two', value: 2 }]} />
````

Хорошо:
```js
<Menu>
    <MenuItem value={1}>
        One
    </MenuItem>
    <MenuItem value={1}>
        Two
    </MenuItem>
</Menu>
````

### Процесс разработки
1. Запускается storybook
2. Добавляется кейс использования в story.jsx
```js
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button.jsx';

storiesOf('Button', module)
    .addWithInfo('Button default view', 'Default Button with click handler', () => (
        <Button onClick={ action('button clicked') }>
            Hello!!!
        </Button>
    ))
```
3. Имплементируется кейс
4. При необходимости кейс переносится как пример использования в Readme.md

### Верста компонентов

Для стилей комонентов используется библиотека [jss](https://github.com/jsstyles/jss) и плагин [jss-nested](https://github.com/jsstyles/jss-nested), префиксы проставляются автоматически через плагин jss-vendor-prefixer


#### Пример стилизации:
```js
import { StyleSheet, css } from '../helpers/styles';

const ExampleDIV = () => (
    <div className={css(styles.root)}>Some awesome red color div</div>
)

const styles = StyleSheet.create({
    root: {
        background: 'red',
        color: '#fff',
        width: '16px',
        height: '16px'
    }
});
```

Если компонент предполагает передачу css стилей с верху, то у него должен быть имплементирован проперти styles.
Проперти styles - массив объектов стилей которые являются аргументами для метода css, например styles.root из примера выше.

#### Пример стилей с условиями:
```js
import { StyleSheet, css } from '../helpers/styles';

const ExampleDIV = (props) => (
    <div className={css(styles.root, props.isActive && styles.active)}>
        Some awesome red color div
    </div>
)

const styles = StyleSheet.create({
    root: {
        background: 'red',
        color: '#fff',
        width: '16px',
        height: '16px'
    },
    active: {
        background: 'blue',
        width: '18px',
        height: '18px'
    }
});
```

#### Пример стилей - разные размеры:
```js
import { StyleSheet, css } from '../helpers/styles';

const ExampleDIV = (props) => {
    const size = (props.size || 'm').toUpperCase();

    return (
        <div className={css(styles.root, styles[`size${size}`])}>
            Some awesome red color div
        </div>
    )
}

const styles = StyleSheet.create({
    root: {
        background: 'red',
        color: '#fff'
    },
    sizeM: {
        width: '16px',
        height: '16px'
    },
    sizeL: {
       width: '36px',
       height: '36px'
    }
});
```

Компонент View является базовым блоком для построения компонентов.
