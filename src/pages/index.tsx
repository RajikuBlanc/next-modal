import Image from 'next/image';
import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import { imageData } from '../data/imgrada';
export default function Home() {
  const [openModal, setOpenModal] = useState<string>('');
  const onOpenModal = (url: string) => {
    setOpenModal(url);
  };
  return (
    <HomeStyle>
      <h1>Hello World!</h1>
      <ul>
        {imageData.map((image) => {
          return (
            <li key={image.id}>
              <Image
                src={image.img}
                alt='画像'
                width={300}
                height={500}
                onClick={() => {
                  onOpenModal(image.img);
                }}
              ></Image>
              {image.img === openModal && <Modal closeModal={setOpenModal} imgUrl={image.img} />}
            </li>
          );
        })}
      </ul>
    </HomeStyle>
  );
}

const HomeStyle = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
`;
