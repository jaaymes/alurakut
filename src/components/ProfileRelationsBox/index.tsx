import { useState } from 'react'
import { ProfileRelationsBoxWrapper } from './style';
import { getSummaryArray } from '../../utils/get-summary-arary';
import { ListObjectBox } from '../../utils/types'

interface ProfileRelationsBoxProps {
  title: string;
  data: Array<ListObjectBox>;
  target?: '_blank' | '_parent' | '_self' | '_top';
  loading?: boolean;
  error?: boolean;
}


export function ProfileRelationsBox({
  title,
  data,
  target = '_self',
  loading = false,
  error = false,
}: ProfileRelationsBoxProps) {
  const [seeMoreData, setSeeMoreData] = useState(false);
  const [seeMoreText, setSeeMoreText] = useState('Ver Mais');

  const showSeeMoreButton = data.length > 6;

  function handleClickSeeMore() {
    setSeeMoreText((prevState) => prevState === 'Ver Mais' ? 'Ver Menos' : 'Ver Mais');
    setSeeMoreData((prevState) => !prevState);
  }

  function onImageError(key: string) {
    const imageError = document.getElementById(key) as HTMLImageElement;
    if (imageError) imageError.src = 'https://via.placeholder.com/150';
  }

  return (
    <ProfileRelationsBoxWrapper>
      <h2 className='smallTitle'>{title}</h2>
      {!error && loading && <p>Carregando...</p>}
      {!loading && error && (
        <p>
          Falha ao realizar a consulta, por favor, atualize a página ou tente
          novamente mais tarde.
        </p>
      )}
      {!loading && !error && (
        <ul style={{ maxHeight: !showSeeMoreButton ? '220px' : '100%' }}>
          {(!seeMoreData
            ? getSummaryArray<ListObjectBox>(data, 6)
            : data
          ).map((item) => (
            <li key={item.key}>
              <a href={item.href} target={target}>
                <img
                  id={item.key}
                  src={item.imageSrc}
                  alt={item.title}
                  onError={() => onImageError(item.key)}
                />
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
      {showSeeMoreButton && (
        <p className="seeMore" onClick={handleClickSeeMore}>
          {seeMoreText}
        </p>
      )}
    </ProfileRelationsBoxWrapper>
  )
}