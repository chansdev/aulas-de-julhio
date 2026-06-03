import React from 'react';
import { FlatList } from 'react-native';

import Jogo from '../components/Jogo.tsx';

export default function Index() {
  const jogos = [
    {
      id: '1',
      nome: 'Minecraft',
      categoria: 'Sandbox',
      plataforma: 'PC',
      descricao:
        'Jogo de construção em mundo aberto.',
      imagem: 'https://picsum.photos/300',
      data: '01/06/2026'
    },

    {
      id: '2',
      nome: 'GTA V',
      categoria: 'Ação',
      plataforma: 'PC',
      descricao:
        'Mundo aberto cheio de missões.',
      imagem: 'https://picsum.photos/301',
      data: '02/06/2026'
    },

    {
      id: '3',
      nome: 'Valorant',
      categoria: 'FPS',
      plataforma: 'PC',
      descricao:
        'Jogo competitivo de tiro.',
      imagem: 'https://picsum.photos/302',
      data: '03/06/2026'
    },

    {
      id: '4',
      nome: 'Fortnite',
      categoria: 'Battle Royale',
      plataforma: 'PC',
      descricao:
        'Sobreviva até o final da partida.',
      imagem: 'https://picsum.photos/303',
      data: '04/06/2026'
    },

    {
      id: '5',
      nome: 'The Witcher 3',
      categoria: 'RPG',
      plataforma: 'PC',
      descricao:
        'Aventura épica de fantasia.',
      imagem: 'https://picsum.photos/304',
      data: '05/06/2026'
    },

    {
      id: '6',
      nome: 'Cyberpunk 2077',
      categoria: 'RPG',
      plataforma: 'PC',
      descricao:
        'Futuro distópico cheio de ação.',
      imagem: 'https://picsum.photos/305',
      data: '06/06/2026'
    },

    {
      id: '7',
      nome: 'FIFA 26',
      categoria: 'Esportes',
      plataforma: 'PlayStation',
      descricao:
        'Simulador de futebol.',
      imagem: 'https://picsum.photos/306',
      data: '07/06/2026'
    },

    {
      id: '8',
      nome: 'Call of Duty',
      categoria: 'FPS',
      plataforma: 'Xbox',
      descricao:
        'Combates intensos online.',
      imagem: 'https://picsum.photos/307',
      data: '08/06/2026'
    },

    {
      id: '9',
      nome: 'Red Dead Redemption 2',
      categoria: 'Aventura',
      plataforma: 'PC',
      descricao:
        'Velho oeste em mundo aberto.',
      imagem: 'https://picsum.photos/308',
      data: '09/06/2026'
    },

    {
      id: '10',
      nome: 'League of Legends',
      categoria: 'MOBA',
      plataforma: 'PC',
      descricao:
        'Batalhas estratégicas em equipe.',
      imagem: 'https://picsum.photos/309',
      data: '10/06/2026'
    },

    {
      id: '11',
      nome: 'Hollow Knight',
      categoria: 'Metroidvania',
      plataforma: 'PC',
      descricao:
        'Exploração e combate.',
      imagem: 'https://picsum.photos/310',
      data: '11/06/2026'
    },

    {
      id: '12',
      nome: 'Celeste',
      categoria: 'Plataforma',
      plataforma: 'PC',
      descricao:
        'Desafios e superação.',
      imagem: 'https://picsum.photos/311',
      data: '12/06/2026'
    },

    {
      id: '13',
      nome: 'Terraria',
      categoria: 'Sandbox',
      plataforma: 'PC',
      descricao:
        'Aventura em 2D.',
      imagem: 'https://picsum.photos/312',
      data: '13/06/2026'
    },

    {
      id: '14',
      nome: 'Among Us',
      categoria: 'Party',
      plataforma: 'Mobile',
      descricao:
        'Descubra o impostor.',
      imagem: 'https://picsum.photos/313',
      data: '14/06/2026'
    },

    {
      id: '15',
      nome: 'Roblox',
      categoria: 'Sandbox',
      plataforma: 'Mobile',
      descricao:
        'Milhares de experiências criadas pelos usuários.',
      imagem: 'https://picsum.photos/314',
      data: '15/06/2026'
    },

    {
      id: '16',
      nome: 'Resident Evil 4',
      categoria: 'Terror',
      plataforma: 'PC',
      descricao:
        'Sobrevivência e ação.',
      imagem: 'https://picsum.photos/315',
      data: '16/06/2026'
    },

    {
      id: '17',
      nome: 'God of War',
      categoria: 'Ação',
      plataforma: 'PlayStation',
      descricao:
        'Mitologia nórdica e combate.',
      imagem: 'https://picsum.photos/316',
      data: '17/06/2026'
    },

    {
      id: '18',
      nome: 'Spider-Man',
      categoria: 'Aventura',
      plataforma: 'PlayStation',
      descricao:
        'Aventura do herói da Marvel.',
      imagem: 'https://picsum.photos/317',
      data: '18/06/2026'
    },

    {
      id: '19',
      nome: 'Elden Ring',
      categoria: 'RPG',
      plataforma: 'PC',
      descricao:
        'Mundo aberto desafiador.',
      imagem: 'https://picsum.photos/318',
      data: '19/06/2026'
    },

    {
      id: '20',
      nome: 'Stardew Valley',
      categoria: 'Simulação',
      plataforma: 'PC',
      descricao:
        'Construa sua fazenda.',
      imagem: 'https://picsum.photos/319',
      data: '20/06/2026'
    }
  ];

  return (
    <FlatList
      data={jogos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Jogo {...item} />
      )}
    />
  );
}