import { Link } from "react-router-dom";
import { Button, Container, Header, Segment } from "semantic-ui-react";

export default function HomePage(){

    return(
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/n7WuSrxqNW0" title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                   
                </Header>
                <Header as ='h2' inverted content="Bienvenue au cirque"/>
                        <Button as={Link} to='/principalPage' size='huge' inverted>
                            Entrer sur le site
                        </Button>
            </Container>   
        </Segment>
    );
}