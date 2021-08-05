import { FormEvent } from "react";
import { Box } from "../components/Box";
import { MainGrid } from "../components/MainGrid";
import { Menu } from "../components/Menu";
import { OrkutNostalgicIconSet } from "../components/OrkutNostalgicIconSet";
import { ProfileRelationsBoxWrapper } from "../components/ProfileRelationsBox";
import { ProfileSideBarMenuDefault } from "../components/ProfileSideBarMenuDefault";

type HomeProps = {
  gitHubUser: string;
};

function ProfileSideBar({ gitHubUser }: HomeProps) {
  return (
    <Box>
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
  const gitHubUser = "jaaymes";
  const pessoasFavoritas = ["luis", "jaaymes", "andre", "joao"];

  function handleSubmit(e:FormEvent){
    e.preventDefault();
    console.log(e)

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
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((pessoaAtual) => {
                return (
                  <li key={pessoaAtual}>
                    <a href={`/users/${pessoaAtual}`}>
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
