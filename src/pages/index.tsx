import { Box } from "../components/Box";
import { MainGrid } from "../components/MainGrid";
import { Menu } from "../components/Menu";
import { OrkutNostalgicIconSet } from "../components/OrkutNostalgicIconSet";
import { ProfileRelationsBoxWrapper } from "../components/ProfileRelationsBox";

type HomeProps = {
  gitHubUser: string;
};

function ProfileSideBar({ gitHubUser }: HomeProps) {
  // console.log(gitHubUser)
  return (
    <Box>
      <img src={`https://github.com/${gitHubUser}.png`} alt="Jaymes Costa" />
    </Box>
  );
}

export default function Home() {
  const gitHubUser = "jaaymes";
  const pessoasFavoritas = ["luis", "jaaymes", "andre", "joao"];
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
