import { Card , Container, Image} from "semantic-ui-react";


export default function ArtistList() {
//   const [dataArr, setData] = useState([
//     {
//       id: 1,
//       name: "Trio Prime",
//       nationality: "Ukraine",
//       image: "./assets/flags/Ukraine.png",
//       description: `Un numéro d'équilibre différent et exclusivement féminin. Comme dans tous
//                 les programmes de haut niveau, il faut un moment de poésie. Ici pas de
//                 muscles ni de forces mais bien des positions créatives et complexes
//                 réalisées avec grâce et élégance par trois jeunes filles Ukrainiennes. Un
//                 moment innovant de charme et de finesse au cours de ce spetacles aux
//                 multiples surprises.`,
//     },
//     {
//       id: 2,
//       name: "Robi Berousek (CZ)",
//       nationality: "République Tchèque",
//       image: "./assets/flags/Czech.png",
//       description: `Invité au Festival International du cirque de Monte-Carlo, cela en dit long
//                 sur la qualité de son numéro. Cet artiste confirmé présente une préstation
//                 exceptionnelle et étonnante sur plusieurs échelles... libres ! La encore,
//                 l'équilibre doit être optimal...`,
//     },
//     {
//       id: 3,
//       name: "Anton Navratil (CZ)",
//       nationality: "République Tchèque",
//       image: "./assets/flags/Czech.png",
//       description: `Numéro impressionnant au trapèze Washington avec équilibres sur tête et sur
//                 chaise sur la seule "barre" de quelques centimètres de ce même trapèze. Le
//                 tout à la coupole du chapiteau. Ce numéro demande une maitrise de
//                 l'équilibre et une concentration extrême. Il a reçu la médaille de Bronze au
//                 Festival du Cirque de Prague 2020.`,
//     },
//     {
//       id: 4,
//       name: "Catwall",
//       nationality: "Canada",
//       image: "./assets/flags/Canada.png",
//       description: `Nous sommes très fiers de pouvoir vous présenter ce numéro de trampoline à
//                 360° et qui n'a rien à voir avec les numéros de trampoline déjà vus. Cinq
//                 artistes canadiens arrivent de la prestigieuse école du Cirque de Montréal.
//                 Clown de bronze au festival de Monte-Carlo, ce numéro extraodinaire est
//                 composé d'excercices et sauts périllieux exceptionnels rattrapés au sommet
//                 d'un véritable mur de 4,5m de haut. Il faut le voir pour le croire.`,
//     },
//     {
//       id: 5,
//       name: "Orchestre (CH)",
//       nationality: "Suisse",
//       image: "./assets/flags/Suisse.png",
//       description: `Passé par le festival du Cirque de Monte-Carlo, le chef d'orchestre Tino
//                 Aeby a exactement le tempérament requis pour animer un vrai spectacle de
//                 cirque de très haut niveau.`,
//     },
//     {
//       id: 6,
//       name: "Le Carrousel de Louis (CH)",
//       nationality: "Suisse",
//       image: "./assets/flags/Suisse.png",
//       description: ` Carrousel équestre et chevaux en liberté, cette famille Suisse s'est vue
//                 attribuer en 2019, le prix piste d'Or au festival de Massy. En 5
//                 participations au festival International de Monte-Carlo, elle a raflé 3
//                 clowns d'Or et 2 clowns D'argent. Dans cette discipline légendaire, il vous
//                 sera proposé un show des plus spectaculaires avec "très rare" des chevaux
//                 qui pivotent sur eux-mêmes.`,
//     },
//     {
//       id: 7,
//       name: "Mario Berousek (CZ)",
//       nationality: "République Tchèque",
//       image: "./assets/flags/Czech.png",
//       description: `Un numéro unique qui a voyagé dans le monde entier. Clown de bronze à
//                 Monaco, il s'agit du jongleur le plus rapide du monde qui figure au Guiness
//                 Book des records. La rapidité de ses mouvements et la vitesse des massues
//                 qui tourbillonnent font penser à des hélices d'avions. Numéro présenté sur
//                 la scène du Moulin Rouge à Paris pendant 5 ans.`,
//     },
//     {
//       id: 8,
//       name: "Flying Mendonca",
//       nationality: "Brésil",
//       image: "./assets/flags/Brésil.jpg",
//       description: `La légendaire triple saut périlleux et double passage font partie de ce
//                 numéro de trapèze volant. Il reste un des plus spectaculaires au cirque
//                 surtout sous un grand chapiteau comme celui-ci. Cette sympathique troupe
//                 brésilienne qui parcourt le monde entier avec beaucoup de qualité est restée
//                 toute une saison au cirque d'hiver de Paris durant l'année 2017.`,
//     },

//     {
//       id: 9,
//       name: "Nicol Nicols",
//       nationality: "Espagne",
//       image: "./assets/flags/Espagne.jpg",
//       description: `La légendaire triple saut périlleux et double passage font partie de ce
//                 numéro de trapèze volant. Il reste un des plus spectaculaires au cirque
//                 surtout sous un grand chapiteau comme celui-ci. Cette sympathique troupe
//                 brésilienne qui parcourt le monde entier avec beaucoup de qualité est restée
//                 toute une saison au cirque d'hiver de Paris durant l'année 2017.`,
//     },

//     {
//       id: 10,
//       name: "Jimmy l'Italien",
//       nationality: "Italie",
//       image: "./assets/flags/Italy.jpg",
//       description: `Ce n'est pas dans les habitudes du concept de la Générosité, mais vous
//                 l'avez plébiscité, donc il revient avec de nouveaux numéros. Avec des
//                 sketches "INVENTES", c'est le CLOWN chef d'orchestre avec son humour
//                 naturel, communication et garanti. Avec Jimmy on se laisse vite prendre au
//                 jeu du rire. Toute la joie, la bonne humeur et la gaité sont réunies dans
//                 les apparitions de cet artiste recoonu mondialement.`,
//     },

//     {
//       id: 11,
//       name: "Diana Boiachin (H)",
//       nationality: "Hongrie",
//       image: "./assets/flags/Hongrie.png",
//       description: `Cette jeune artiste a voulu métamorphoser le numéro classique de "mât
//                 chinois". Le mât devient "pôle aérien" et les figures pratiquées
//                 habituellement au sol sont ici exécutées à 12 mètres de hauteau. Un joli
//                 moment d'audace, de grâce et d'esthétisme. Ce numéro orginal est une
//                 première en France.`,
//     },
//   ]);

  return (
    <Container fluid >
        <Card.Group  itemsPerRow={4}>
         <Card>
            <Image src='/assets/user.png' />
            <Card.Content>
                <Card.Header >Trio Prime</Card.Header>
                <Card.Description>Un numéro d'équilibre différent et exclusivement féminin. Comme dans tous
                les programmes de haut niveau, il faut un moment de poésie. Ici pas de
                muscles ni de forces mais bien des positions créatives et complexes
                réalisées avec grâce et élégance par trois jeunes filles Ukrainiennes. Un
                moment innovant de charme et de finesse au cours de ce spetacles aux
                multiples surprises.</Card.Description>
            </Card.Content>
            <Card.Content extra>
            Ukraine
            </Card.Content>
        </Card>
         <Card>
            <Image src='/assets/user.png' />
            <Card.Content>
                <Card.Header>Robi Berousek (CZ)</Card.Header>
                <Card.Description>Invité au Festival International du cirque de Monte-Carlo, cela en dit long
                sur la qualité de son numéro. Cet artiste confirmé présente une préstation
                exceptionnelle et étonnante sur plusieurs échelles... libres ! La encore,
                l'équilibre doit être optimal...</Card.Description>
            </Card.Content>
            <Card.Content extra>
            République Tchèque
            </Card.Content>
        </Card>
         <Card>
            <Image src='/assets/user.png' />
            <Card.Content>
                <Card.Header >Anton Navratil (CZ)</Card.Header>
                <Card.Description>Numéro impressionnant au trapèze Washington avec équilibres sur tête et sur
                chaise sur la seule "barre" de quelques centimètres de ce même trapèze. Le
                tout à la coupole du chapiteau. Ce numéro demande une maitrise de
                l'équilibre et une concentration extrême. Il a reçu la médaille de Bronze au
                Festival du Cirque de Prague 2020.</Card.Description>
            </Card.Content>
            <Card.Content extra>
            République Tchèque
            </Card.Content>
        </Card>
         <Card>
            <Image src='/assets/user.png' />
            <Card.Content>
                <Card.Header>Diana Boiachin (H)</Card.Header>
                <Card.Description>Cette jeune artiste a voulu métamorphoser le numéro classique de "mât
                chinois". Le mât devient "pôle aérien" et les figures pratiquées
                habituellement au sol sont ici exécutées à 12 mètres de hauteau. Un joli
                moment d'audace, de grâce et d'esthétisme. Ce numéro orginal est une
                première en France.</Card.Description>
            </Card.Content>
            <Card.Content extra>
                Hongrie
            </Card.Content>
        </Card>
        <Card>
            <Image src='/assets/user.png' />
            <Card.Content>
                <Card.Header>Jimmy l'Italien</Card.Header>
                <Card.Description>Ce n'est pas dans les habitudes du concept de la Générosité, mais vous
                l'avez plébiscité, donc il revient avec de nouveaux numéros. Avec des
                sketches "INVENTES", c'est le CLOWN chef d'orchestre avec son humour
                naturel, communication et garanti. Avec Jimmy on se laisse vite prendre au
                jeu du rire. Toute la joie, la bonne humeur et la gaité sont réunies dans
                les apparitions de cet artiste reconnu mondialement..</Card.Description>
            </Card.Content>
            <Card.Content extra>
                Italie
            </Card.Content>
        </Card>
        <Card>
            <Image src='/assets/user.png' />
            <Card.Content>
                <Card.Header>Nicol Nicols</Card.Header>
                <Card.Description>La légendaire triple saut périlleux et double passage font partie de ce
                numéro de trapèze volant. Il reste un des plus spectaculaires au cirque
                surtout sous un grand chapiteau comme celui-ci. Cette sympathique troupe
                brésilienne qui parcourt le monde entier avec beaucoup de qualité est restée
                toute une saison au cirque d'hiver de Paris durant l'année 2017.</Card.Description>
            </Card.Content>
            <Card.Content extra>
                Espagne
            </Card.Content>
        </Card>
        <Card>
            <Image src='/assets/user.png' />
            <Card.Content>
                <Card.Header>Flying Mendonca</Card.Header>
                <Card.Description>La légendaire triple saut périlleux et double passage font partie de ce
                numéro de trapèze volant. Il reste un des plus spectaculaires au cirque
                surtout sous un grand chapiteau comme celui-ci. Cette sympathique troupe
                brésilienne qui parcourt le monde entier avec beaucoup de qualité est restée
                toute une saison au cirque d'hiver de Paris durant l'année 2017.</Card.Description>
            </Card.Content>
            <Card.Content extra>
            Brésil
            </Card.Content>
        </Card>
        <Card>
            <Image src='/assets/user.png' />
            <Card.Content>
                <Card.Header>Mario Berousek (CZ)</Card.Header>
                <Card.Description>Un numéro unique qui a voyagé dans le monde entier. Clown de bronze à
                Monaco, il s'agit du jongleur le plus rapide du monde qui figure au Guiness
                Book des records. La rapidité de ses mouvements et la vitesse des massues
                qui tourbillonnent font penser à des hélices d'avions. Numéro présenté sur
                la scène du Moulin Rouge à Paris pendant 5 ans.</Card.Description>
            </Card.Content>
            <Card.Content extra>
            République Tchèque
            </Card.Content>
        </Card>
        <Card>
            <Image src='/assets/user.png' />
            <Card.Content>
                <Card.Header>Le Carrousel de Louis (CH)</Card.Header>
                <Card.Description>Carrousel équestre et chevaux en liberté, cette famille Suisse s'est vue
                attribuer en 2019, le prix piste d'Or au festival de Massy. En 5
                participations au festival International de Monte-Carlo, elle a raflé 3
                clowns d'Or et 2 clowns D'argent. Dans cette discipline légendaire, il vous
                sera proposé un show des plus spectaculaires avec "très rare" des chevaux
                qui pivotent sur eux-mêmes.</Card.Description>
            </Card.Content>
            <Card.Content extra>
            Suisse
            </Card.Content>
        </Card>
        <Card>
            <Image src='/assets/user.png' />
            <Card.Content>
                <Card.Header>Le Carrousel de Louis (CH)</Card.Header>
                <Card.Description>Passé par le festival du Cirque de Monte-Carlo, le chef d'orchestre Tino
                Aeby a exactement le tempérament requis pour animer un vrai spectacle de
                cirque de très haut niveau.</Card.Description>
            </Card.Content>
            <Card.Content extra>
            Suisse
            </Card.Content>
        </Card>
        <Card>
            <Image src='/assets/user.png' />
            <Card.Content>
                <Card.Header>Orchestre (CH)</Card.Header>
                <Card.Description>Passé par le festival du Cirque de Monte-Carlo, le chef d'orchestre Tino
                Aeby a exactement le tempérament requis pour animer un vrai spectacle de
                cirque de très haut niveau.</Card.Description>
            </Card.Content>
            <Card.Content extra>
            Suisse
            </Card.Content>
        </Card>
        <Card>
            <Image src='/assets/user.png' />
            <Card.Content>
                <Card.Header>Catwall</Card.Header>
                <Card.Description>Nous sommes très fiers de pouvoir vous présenter ce numéro de trampoline à
                360° et qui n'a rien à voir avec les numéros de trampoline déjà vus. Cinq
                artistes canadiens arrivent de la prestigieuse école du Cirque de Montréal.
                Clown de bronze au festival de Monte-Carlo, ce numéro extraodinaire est
                composé d'excercices et sauts périllieux exceptionnels rattrapés au sommet
                d'un véritable mur de 4,5m de haut. Il faut le voir pour le croire.</Card.Description>
            </Card.Content>
            <Card.Content extra>
            Canada
            </Card.Content>
        </Card>
        </Card.Group>
    </Container>
  );
}
