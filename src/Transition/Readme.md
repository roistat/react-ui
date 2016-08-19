### Use cases

This component you should use for transition animation

Example 

    <div style={{ height: 100 }}>
        <Button onClick={() => setState({ isShown: !state.isShown })}>
            {state.isShown ? 'Hide' : 'Show'} 
       </Button>
       <Transition>
            {state.isShown && (({ isAppear, isEnter, isLeave, isUpdate }) => (
                <div 
                    style={{ 
                        margintTop: 20,
                        transition: 'all .2s ease-out', 
                        opacity: isEnter ? 1 : 0,
                        transform: `translateY(${ isEnter? 0 : '30%'})`
                    }}>
                    Some awesome content...
                </div>
            ))}
       </Transition>
    </div>