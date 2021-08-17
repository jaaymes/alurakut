import React, { FormEvent, useEffect, useState } from "react";
import { Box } from "../components/Box";
import { MainGrid } from "../components/MainGrid";
import { Menu } from "../components/Menu";
import { OrkutNostalgicIconSet } from "../components/OrkutNostalgicIconSet";
import { ProfileRelationsBox } from "../components/ProfileRelationsBox";
// import { ProfileRelationsBoxWrapper } from "../components/ProfileRelationsBox/style";
import { ProfileSideBar } from "../components/ProfileSideBar";
import { githubApi } from "../services/githubApi";
import { HomeProps, comunidadeProps, FriendsProps } from '../utils/types';


export default function Home({ friends }: HomeProps) {
  const [comunidades, setComunidades] = useState([{
    id: '12312313',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
  }])
  const [followers, setFollowers] = useState<FriendsProps[]>([])

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  const gitHubUser = "jaaymes";

  const pessoasFavoritas = ["luis", "jaaymes", "carol", "jose"];

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const dadosDoForm = new FormData(e.target as HTMLFormElement)

    const comunidade = {
      id: new Date().toISOString(),
      title: dadosDoForm.get('title') as string,
      image: dadosDoForm.get('image') as string,
    } as comunidadeProps;

    const comunidadesAtualizadas = [...comunidades, comunidade]

    // console.log('Campo: ', dadosDoForm.get('title'));
    // console.log('Campo: ', dadosDoForm.get('image'));

    setComunidades(comunidadesAtualizadas);

  }

  useEffect(() => {
    Promise.all([
      githubApi.get(`/users/${gitHubUser}/followers`)
    ]).then(([responseFollowers]) => {
      setFollowers(responseFollowers.data)
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    }
    )

  })


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

          <ProfileRelationsBox
            title={`Seguidoes(${followers.length})`}
            data={followers.map((follower) => ({
              key: String(follower.id),
              href: follower.html_url,
              imageSrc: follower.avatar_url,
              title: follower.login,
            }))}
            target="_blank"
            loading={loading}
            error={error}
          />

          <ProfileRelationsBox
            title={`Comunidades(${comunidades.length})`}
            data={comunidades.map((comunidade) => ({
              key: String(comunidade.id),
              href: comunidade.image,
              imageSrc: comunidade.image,
              title: comunidade.title,
            }))}
            target="_blank"
            loading={loading}
            error={error}
          />

          <ProfileRelationsBox
            title={`Pessoas Favoritas(${pessoasFavoritas.length})`}
            data={pessoasFavoritas.map((pessoaAtual) => ({
              key: String(pessoaAtual),
              href: `https://github.com/users/${pessoaAtual}`,
              imageSrc: `https://github.com/${pessoaAtual}.png`,
              title: pessoaAtual,
            }))}
            target="_blank"
            loading={loading}
            error={error}
          />
        </div>
      </MainGrid>
    </>
  );
}
