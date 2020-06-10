import React, { useState, useRef, useMemo, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from 'components/shared';
import sendFile from 'services/storage/sendFile';
import avatar from 'assets/images/avatar.svg';

import { Container } from './styles';

interface SelectProps {
  name: string;
  className?: string;
  inputRole?: 'primary' | 'secondary';
}

const Avatar: React.FC<SelectProps> = ({
  name,
  className,
  inputRole = 'primary',
}) => {
  const inputRef = useRef<HTMLInputElement>();
  const [loading, setLoading] = useState(false);
  const [src, setSrc] = useState('');

  const { register, setValue } = useFormContext();

  const handleAttachFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e && e.target && e.target.files && e.target.files.length > 0) {
        setLoading(true);
        const { url } = await sendFile(e.target.files[0], 'avatar');
        setValue(name, url);
        setSrc(url);
        setLoading(false);
      }
    },
    [setValue, name],
  );

  return useMemo(
    () => (
      <Container className={className}>
        <input
          type="hidden"
          name={name}
          ref={(e: HTMLInputElement) => {
            register(e);
            inputRef.current = e;
          }}
        />
        <img src={src || avatar} alt="Avatar" />
        <label htmlFor="avatar">
          <input
            type="file"
            id="avatar"
            accept="image/*"
            onChange={handleAttachFile}
          />
          <Button loading={loading} buttonRole={inputRole} type="button">
            Inserir imagem de perfil
          </Button>
        </label>
      </Container>
    ),
    [name, className, handleAttachFile, loading, inputRole, register, src],
  );
};

export default Avatar;
