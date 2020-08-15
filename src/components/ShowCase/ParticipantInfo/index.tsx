import React, { useState, useEffect, useCallback } from 'react';
import { Participant } from 'services/showcase/interfaces';
import { ReactSVG } from 'react-svg';
import sendFile from 'services/storage/sendFile';
import changeAvatar from 'services/auth/changeAvatar';

import cameraIcon from 'assets/images/showcase/camera.svg';
import transformer, {
  Response as Data,
} from 'services/showcase/transformers/toParticipantTransformer';
import { Link } from 'react-router-dom';

import { Container, Content, Circle } from './styles';

interface Props {
  participant: Participant;
  className?: string;
  showChangePicture: boolean;
}

const ParticipantInfo: React.FC<Props> = ({
  participant,
  className,
  showChangePicture,
}) => {
  const [data, setData] = useState<Data | null>(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    setData(transformer(participant));
    setImageUrl(participant.imageUrl || '');
  }, [participant]);

  const handleAttachFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e && e.target && e.target.files && e.target.files.length > 0) {
        const { url } = await sendFile(e.target.files[0], 'avatar');
        setImageUrl(url);
        changeAvatar({ type: participant.type, pictureUrl: url });
      }
    },
    [participant],
  );

  return (
    <Container className={className}>
      {!!data && (
        <Content>
          <Circle>
            {imageUrl ? (
              <img src={imageUrl} alt={data.name} />
            ) : (
              <span>
                {`${
                  participant.type === 'cnpj'
                    ? 'Imagem do canal'
                    : 'Imagem do perfil'
                } `}
              </span>
            )}
            {showChangePicture && (
              <div>
                <label htmlFor="fileAvatarId">
                  <input
                    type="file"
                    id="fileAvatarId"
                    accept="image/*"
                    onChange={handleAttachFile}
                  />
                  <ReactSVG src={cameraIcon} />
                </label>
              </div>
            )}
          </Circle>
          <h3>{data.name}</h3>
          <h4>{data.points} pontos</h4>
          <a href={data.urlAccess} target="_blank" rel="noreferrer">
            {data.type === 'cnpj' ? 'Catálogo do canal' : 'Meu catálogo'}
          </a>
        </Content>
      )}
    </Container>
  );
};

export default ParticipantInfo;
