## Рекомендации по разработке компонентов

### Общие рекомендации:

> У компонента должны быть описаны все props через propTypes.

> У каждого компонента должен быть Readme.md файл с примерами использования и документацией к публичным методам, если они имеются.

> Предпочтительно api через props.children.

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

### Процесс разработки:
1. Запускается storybook.
2. Добавляется кейс использования в story.jsx.
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
3. Имплементируется кейс.
4. При необходимости кейс переносится как пример использования в Readme.md.

### Верстка компонентов:

> Для стилей комонентов используется библиотека [jss](https://github.com/jsstyles/jss) и плагин [jss-nested](https://github.com/jsstyles/jss-nested), префиксы проставляются автоматически через плагин jss-vendor-prefixer.


### Пример стилизации:
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

> Если компонент предполагает передачу css стилей с верху, то у него должен быть имплементирован styles через props (prop.styles).

> prop.styles - массив объектов стилей, которые являются аргументами для метода css, например styles.root из примера выше.

### Пример стилей с условиями:
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

### Пример стилей - разные размеры:
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

### Компонент View является базовым блоком для построения компонентов:
```js
import { StyleSheet, css } from '../helpers/styles';
import { View } from '../View';

const SomeWrapper = (props) => {
    const childElem = props.childElem;

    return (
        <View className={css(styles.root])}>
            {childElem}
        </div>
    )
}
});
```