Simple button:

    class Button extends AbstractButton {
        render() {
            return (
                <button
                    {...this.getDefaultRenderProps()}
                    style={Object.assign({}, ...this.buildStyleList(STYLE, 'root'))}>
                    {this.props.children}
                </button>
            )
        }
    }

    const STYLE = {
        root: {
            ...AbstractButton.BASE_ROOT_STYLE,
            border: '1px solid #ccc',
            borderRadius: '2px',
            lineHeight: '24px',
            padding: '9px 18px'
        },
        rootIsHovered: {
            background: '#eee'
        },
        rootIsActive: {
            background: '#bbb'
        }
    };

    <Button>Click me</Button>

Simple checkbox:

    class Checkbox extends AbstractButton {
        static defaultProps = {
            ...AbstractButton.defaultProps,
            isToggleMod: true
        };

        render() {
            return (
                <button
                    {...this.getDefaultRenderProps()}
                    style={Object.assign({}, ...this.buildStyleList(STYLE, 'root'))} >
                    {
                        this.state.isChecked &&
                        <div style={STYLE.iconRoot}>
                            <svg
                                width="11"
                                height="8"
                                viewBox="0 0 11 7">
                                <path d="M0.844,2.844 L4.844,6.844 L10.844,0.844 " style={STYLE.icon}/>
                            </svg>
                        </div>
                    }
                </button>
            )
        }
    }

    const STYLE = {
        root: {
            ...AbstractButton.BASE_ROOT_STYLE,
            width: '16px',
            height: '16px',
            borderRadius: '2px',
            boxShadow: 'inset 0 0 0 1px #b0b9bd, inset 0px 2px 2px 0px rgba(27, 42, 48, .2)',
            transition: 'all .15s ease-in'
        },
        rootIsChecked: {
            background: 'rgb(176, 218, 241)',
            boxShadow: 'none'
        },
        rootIsFocused: {
            boxShadow: '0 0 2px 0px #50c3fe, inset 0 0 0 1px #77bfe6, inset 0 0 0 1px #b0b9bd, inset 0px 2px 2px 0px rgba(27, 42, 48, .2)'
        },
        iconRoot: {
            width: '100%',
            height: '100%'
        },
        icon: {
            display: 'inline-block',
            stroke: '#333',
            strokeWidth: '1px',
            fill: 'none',
            fillRule: 'evenodd'
        }
    };

    <Checkbox />

### Class has two public method

1. getDefaultRenderProps(): object - _return default props for button, witch attach all event handlers to node_

```js
class Button extends AbstractButton {
    render() {
        return (
            <button {...this.getDefaultRenderProps()}>
                Click me!
            </button>
        )
    }
}
```

2.  buildStyleList(styles: object, prefix: string): array - _return array of style objects sorted by ..._