import { NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

export default function NavBar(){
    return (
       <Menu inverted fixed='top'>
           <Container>
               <Menu.Item as={NavLink} to='/' exact header>
                   <img 
                        src='/assets/logo.png'
                        alt='logo'
                        style={{marginRight:'10px'}}
                    />
                    Cirque de haute voltige
               </Menu.Item>
               <Menu.Item as={NavLink} to='/principalPage' name='Nos artistes' />
               {/* <Menu.Item as={NavLink} to='/whoAreWe' name='Qui sommes-nous ' /> */}
               <Menu.Item as={NavLink} to='/contact' name='Contact' />
           </Container>
       </Menu>
    );
}