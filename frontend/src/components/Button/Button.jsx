import React, { Component } from 'react'
import styles from './ButtonStyles'
import PropTypes from 'prop-types'

import { applyClasses } from '../../helper/stylesHelper'

export class Button extends Component {
	render() {
		return (
			<button 
				className={applyClasses(styles, this.props.classes)}
				type="button"
			>
				{this.props.children}
			</button>
		)
	}
}

Button.propTypes = {
	classes: PropTypes.array,
	children: PropTypes.node
}