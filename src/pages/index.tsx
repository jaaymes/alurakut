import React, { FormEvent, useState } from "react";
import { Box } from "../components/Box";
import { MainGrid } from "../components/MainGrid";
import { Menu } from "../components/Menu";
import { OrkutNostalgicIconSet } from "../components/OrkutNostalgicIconSet";
import { ProfileRelationsBoxWrapper } from "../components/ProfileRelationsBox";
import { ProfileSideBarMenuDefault } from "../components/ProfileSideBarMenuDefault";

type HomeProps = {
  gitHubUser: string;
};

type comunidadeProps = {
  id: string;
  title: string;
  image: string;
}


// comunidade: comunidadeProps[];

function ProfileSideBar({ gitHubUser }: HomeProps) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${gitHubUser}.png`} alt="Jaymes Costa" />
      <hr />
      <a className="boxLink" href={`http://github.com/${gitHubUser}`}>
        @{gitHubUser}
      </a>
      <hr />
      <ProfileSideBarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const [comunidades, setComunidades] = useState([{
    id: '12312313',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
  }])

  const gitHubUser = "jaaymes";

  const pessoasFavoritas = ["luis", "jaaymes", "carol", "jose"];

  function handleSubmit(e: FormEvent) {
    e.preventDefault();



    const dadosDoForm = new FormData(e.target as HTMLFormElement)

    const comunidade = {
      id: new Date().toISOString(),
      title: dadosDoForm.get('title') as String,
      image: dadosDoForm.get('image') as String,
    } as comunidadeProps;

    const comunidadesAtualizadas = [...comunidades, comunidade]

    // console.log('Campo: ', dadosDoForm.get('title'));
    // console.log('Campo: ', dadosDoForm.get('image'));

    setComunidades(comunidadesAtualizadas);

  }
  return (
    <>
      <Menu gitHubUser={gitHubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar gitHubUser={gitHubUser} />
        </div>
        <div style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo (a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div style={{ gridArea: "profileRelationsArea" }}>
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.title}>
                    <a href={`/users/${itemAtual.title}`}>
                      {/* eslint-disable-next-line jsx-a11y/alt-text */}
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((pessoaAtual) => {
                return (
                  <li key={pessoaAtual}>
                    <a href={`/users/${pessoaAtual}`}>
                      {/* eslint-disable-next-line jsx-a11y/alt-text */}
                      <img src={`https://github.com/${pessoaAtual}.png`} />
                      <span>{pessoaAtual}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
