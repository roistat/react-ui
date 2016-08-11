Autoclosable wrapper component:

    <View style={{ flexDirection: 'column' }}>
        <View>
            <Button onClick={() => setState({ isOpen: true })}>
                Show popup
            </Button>
        </View>
        { state.isOpen &&
            <AutoClosable onClose={() => setState({ isOpen: false })}>
                <Popup>
                    Click outeside of popup
                </Popup>
            </AutoClosable>
        }
    </View>