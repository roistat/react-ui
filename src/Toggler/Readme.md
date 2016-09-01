Show popup on button click

    <TeleportContext>
        <div style={{ margin: '40px' }}>
            <Toggler>
                {(isShown) => (
                    <TargetWrapper>
                        <Button>
                            {isShown ? 'Hide' : 'Show'}
                        </Button>
                        { isShown &&
                            <Placer xAxisPresets={['inside-left']} yAxisPresets={['outside-bottom']}>
                                <Popup>
                                    Popup content
                                </Popup>
                            </Placer>
                        }
                    </TargetWrapper>
                )}
            </Toggler>
        </div>
    </TeleportContext>

Show popup on button click in right bottom corner

    <TeleportContext>
        <div style={{ margin: '20px' }}>
            <Toggler>
                {(isShown) => (
                    <TargetWrapper>
                        <Button>
                            {isShown ? 'Hide' : 'Show'}
                        </Button>
                        { isShown &&
                            <Placer xAxisPresets={['outside-right']} yAxisPresets={['outside-bottom']}>
                                <Popup>
                                    Popup content
                                </Popup>
                            </Placer>
                        }
                    </TargetWrapper>
                )}
            </Toggler>
        </div>
    </TeleportContext>
