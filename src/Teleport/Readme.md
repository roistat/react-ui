Teleport usage

    <TeleportContext>
        <div style={{ position: 'relative' }}>
            move to
            <div>
                some awesome block
            </div>
            <div>
                <Teleport>
                    <div style={{ marginLeft: 200, color: 'green' }}>
                        Target 1
                    </div>
                </Teleport>
                move from
            </div>
        </div>
    </TeleportContext>