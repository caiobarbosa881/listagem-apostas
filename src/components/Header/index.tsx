import React, { useState } from "react";
import {Container} from './styles';

export const Header: React.FC<any> = ({children}) => {
    return (
    <Container>{children}</Container> 
 );
}