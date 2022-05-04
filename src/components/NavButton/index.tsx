import { Container } from './styles'
import { useState } from 'react'

export const NavButton: React.FC<any> = ({children}) => {

    const [nav, setNav] = useState(true);

    function buttonHandler() {
      setNav(!nav);
      console.log(nav);
    }

    return (
    <>
        {nav ? <Container id="button" onClick={buttonHandler}>{children}</Container> : <Container id="button" onClick={buttonHandler}>{children}</Container>   }
    </>
  );
}