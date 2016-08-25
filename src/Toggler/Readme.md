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
