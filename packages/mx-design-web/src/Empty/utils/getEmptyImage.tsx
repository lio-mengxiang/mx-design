import React from 'react';
import { IconEmpty } from '../../Icon';
import { IEmptyImage } from '../interface';

export const emptyImage: IEmptyImage = ({ imgSrc, alt, icon }) => (imgSrc ? <img alt={alt} src={imgSrc} /> : icon || <IconEmpty />);
