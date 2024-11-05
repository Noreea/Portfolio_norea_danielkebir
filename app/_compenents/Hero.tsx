import { Section } from './Section';
import { Code } from './Code';


export const Hero = () => {
  return (
    <Section className="flex mag-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <div>
          <h2 className="text-5xl font-bold text-primary flex items-center gap-x-4">
            <img
              src="https://avatars.githubusercontent.com/u/123678522?v=4"
              className="w-auto h-auto max-w-[6rem] rounded-full max-md:w-51"
              alt="Noréa Dani El Kebir"
            />
            Noréa Dani El Kebir
          </h2>
          <h3 className="text-3xl m-8">Développeuse Web Full Stack !</h3>
        </div>
        <p className="text-base">
          Salut ! Moi, c’est Noréa, une développeuse web full stack avec un parcours pleins de rebondissements. 🎢
        </p>

        <p className="text-base">
          Tout a commencé à l&apos;âge de mes 18 ans quand je jonglais entre les clients affamés en boulangerie et les sourires des enfants dans un IME. Ces expériences m’ont appris la <Code>rigueur</Code> et l’art de <Code>l’adaptabilité</Code>. Puis, poussée par ma curiosité insatiable, je me suis lancée dans des études de psychologie, décrochant une licence qui a affûté mon <Code>écoute</Code> et mon <Code>sens de l’analyse</Code>. 🧠
        </p>

        <p className="text-base">
          C’est chez Urb-it, une start-up de livraison, que j’ai fait mes premiers pas dans un environnement <Code>ultra-dynamique</Code> en tant que customer care. Là-bas, j’ai découvert à quel point j’adorais <Code>résoudre des problèmes</Code> et transformer les défis en solutions. Ce goût pour l’innovation m’a menée chez TRUSK, où un collègue m’a ouvert la porte du développement web. Et là, BOUM 🤯, révélation ! 🚀
        </p>

        <p className="text-base">
          Au Wagon, j’ai eu l’opportunité de plonger dans le grand bain du code 👩‍💻. Avec une équipe de trois, on a monté une appli de A à Z, en utilisant <Code>Ruby et Rails</Code>, et suivant la <Code>méthodologie Agile</Code>. Après cette expérience intense, je me suis aventurée plus loin avec un bootcamp en <Code>JavaScript</Code>, <Code>React</Code> et <Code>Node.js</Code>. J&apos;ai aussi développé une appli pour un pote, tu peux y jeter un oeil juste en bas !
        </p>

        <p className="text-base">
          Aujourd’hui, je suis en Bachelor Développement Full Stack chez Yutopia Meta Campus. Entre deux lignes de code, je jongle avec <Code>Python</Code>, <Code>Django</Code>, et je m’éclate à créer des projets comme un jeu Snake ou une to-do list en CRUD. Et pour ne rien gâcher, je m’amuse aussi avec <Code>React</Code> et <Code>Next.js</Code>.
        </p>

        <p className="text-base">
          Je suis prête pour une alternance d’un à deux ans, avec un rythme de 3 semaines en entreprise et 1 semaine en école. L’objectif ? Plonger tête la première dans des projets concrets, continuer à monter en compétences, et surtout, m’éclater en contribuant à des applications innovantes. Alors, si vous cherchez une alternante motivée, créative, et un poil fun, je suis votre personne ! 🌟
        </p>
      </div>
      {/*
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://avatars.githubusercontent.com/u/123678522?v=4"
          className="w-auto h-auto max-w-[15rem] rounded-full max-md:w-56 ml-12"
          alt="Noréa Dani El Kebir"
        />
      </div>
      */}
    </Section>
  );
};
