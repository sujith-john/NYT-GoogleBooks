import PropTypes from 'prop-types';
import { BookRow } from './BookRow';
import React from 'react';
export const BookList = ({data, highlight, visibility}) => {

	if (visibility && data[0] !== null) {
		return(
			<section >
				{data.map((entry, i) =>
					<BookRow key = {i}
					         rowNumber = {i}
					         title = {entry.title}
					         author = {entry.authors}
					         rating = {entry.rating}
					         highlight = {highlight}
					/>
				)}
			</section>
		)
	} else {
		return null;
	}
}

BookList.propTypes = {
	data: PropTypes.array
}