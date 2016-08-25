'use strict';

import React, { PropTypes } from 'react';
import View from '../View';
import Toggler from '../Toggler';
import { TeleportContext } from '../Teleport';
import AutoClosable from '../AutoClosable';
import Placer, { TargetWrapper }  from '../Placer';
import Transition from '../Transition';

export default class PopupShowner extends React.Component {
	static propTypes = {
		/**
		 * Presets for Placer
		 */
		presets: PropTypes.arrayOf(PropTypes.shape({
			x: PropTypes.string,
			y: PropTypes.string
		}))
	};

	toggle() {
		this._toggler && this._toggler.toggle();
	}

	render() {
		const props = this.props;

		return (
			<Toggler ref={(c) => this._toggler = c}>
				{(isShown, node, toggle) => (
					<TargetWrapper>
						{props.children[0]}
						{ isShown &&
							<Placer
								xAxisPresets={[props.presets[0].xAxis]}
								yAxisPresets={[props.presets[0].yAxis]}
								offsetX={props.presets[0].offsetX}
								offsetY={props.presets[0].offsetY}>
								<AutoClosable
									onClose={() => props.isAutoClosable && toggle()}
									parentDOMNode={node}>
									<TeleportContext>
										{React.cloneElement(props.children[1], { onClose: () => toggle() })}
									</TeleportContext>
								</AutoClosable>
							</Placer>
						}
					</TargetWrapper>
				)}
			</Toggler>
		)
	}
}
