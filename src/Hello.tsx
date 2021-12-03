import React from 'react'

import { Sort } from './models/Sort'
import { UtilsService } from './services/utils.service'

import './TableGrid.css'

interface ContainerProps {
	name?: string;
}

const utilsService = new UtilsService()

export const TableGrid: React.FC<ContainerProps> = ({ name }) => {
	console.log('Random Key', utilsService.randomKey());
	return (
		<div>
			<h1>Hello, {name ? name : 'world'}.</h1>
		</div>
	)
}
