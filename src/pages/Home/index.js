import React, { useState } from 'react';

import { Container, LefContent, ProjectContent, Project } from './styles';

export default function Home() {
  const [active, setActive] = useState(false);
  const [troca, setTroca] = useState(false);

  const dic = {
    sku: 'nome',
    id: 'intenificador',
  };
  const mock = {
    sku: '123121',
    id: 1,
    outro: '11',
    outro2: '3213',
  };
  const mockKeys = Object.keys(mock);
  const filtrado = [];
  mockKeys.forEach(key => {
    if (dic[key]) {
      filtrado.push({ name: dic[key], value: mock[key] });
    }
  });

  return (
    <Container className={active && 'active'}>
      <LefContent className={active && 'active'} />
      <ProjectContent className={active && 'active'}>
        <Project className={`${active && 'active'} ${troca && 'show'}`}>
          <button
            type="button"
            onClick={() => {
              setActive(!active);
            }}
          >
            abrir
          </button>
          {!active && (
            <button
              type="button"
              onClick={() => {
                setTroca(!troca);
              }}
            >
              trocar
            </button>
          )}
        </Project>
        <Project className={`${active && 'active'} ${!troca && 'show'}`}>
          <button
            type="button"
            onClick={() => {
              setActive(!active);
            }}
          >
            abrir
          </button>
          {!active && (
            <button
              type="button"
              onClick={() => {
                setTroca(!troca);
              }}
            >
              trocar
            </button>
          )}
        </Project>
      </ProjectContent>
    </Container>
  );
}
