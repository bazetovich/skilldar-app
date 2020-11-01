import { UsersResponse } from './types';
// @ts-ignore
import User1Logo from '../../../assets/images/User1.png';
// @ts-ignore
import User2Logo from '../../../assets/images/User2.png';
// @ts-ignore
import User3Logo from '../../../assets/images/User3.png';

export const responseBerlin: UsersResponse = {
  definition:
    '#VFXengineers are beings who create illusions or visual tricks used in the film, television, theatre, video game and similar  industries to simulate the imagined events in a story or virtual world.',
  users: [
    {
      id: '1',
      name: 'JAMES HOWLETT',
      avatarUrl: User1Logo,
      descritpion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. I’ve worked with many professional film teams.',
      skills: ['VFX Engineer', '3D Animation', 'Editor', 'Skill1', 'Skill2'],
      location: 'Berlin, Germany',
      rating: {
        overall: 667,
        value1: 20,
        value2: 90,
      },
    },
    {
      id: '2',
      name: 'ANNE KEELER',
      avatarUrl: User2Logo,
      descritpion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. I’ve worked with many professional film teams.',
      skills: ['Motion Capture Artist', 'Photographer'],
      location: 'Berlin, Germany',
      rating: {
        overall: 722,
        value1: 20,
        value2: 90,
      },
    },
    {
      id: '3',
      name: 'HANNAH SKEPPSTAD',
      avatarUrl: User3Logo,
      descritpion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. I’ve worked with many professional film teams.',
      skills: ['VFX Engineer', '3D Animation', 'Sound Editing', 'Skill1', 'Skill2'],
      location: 'Berlin, Germany',
      rating: {
        overall: 471,
        value1: 20,
        value2: 90,
      },
    },
  ],
  totalPages: 6,
  relatedSearches: ['3Danimation', 'Visualeffects', 'MotionCaptureArtist', 'SFXcoordinator', 'CGIartist'],
};

export const responseStockholm: UsersResponse = {
  definition:
    '#VFXengineers are beings who create illusions or visual tricks used in the film, television, theatre, video game and similar  industries to simulate the imagined events in a story or virtual world.',
  users: [
    {
      id: '1',
      name: 'JAMES HOWLETT',
      avatarUrl: User1Logo,
      descritpion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. I’ve worked with many professional film teams.',
      skills: ['VFX Engineer', '3D Animation', 'Editor', 'Skill1', 'Skill2'],
      location: 'Stockholm, Sweden',
      rating: {
        overall: 667,
        value1: 20,
        value2: 90,
      },
    },
  ],
  totalPages: 6,
  relatedSearches: ['3Danimation', 'Visualeffects', 'MotionCaptureArtist', 'SFXcoordinator', 'CGIartist'],
};

export const responseUSA: UsersResponse = {
  definition:
    '#VFXengineers are beings who create illusions or visual tricks used in the film, television, theatre, video game and similar  industries to simulate the imagined events in a story or virtual world.',
  users: [
    {
      id: '1',
      name: 'JAMES HOWLETT',
      avatarUrl: User3Logo,
      descritpion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. I’ve worked with many professional film teams.',
      skills: ['VFX Engineer', '3D Animation', 'Editor', 'Skill1', 'Skill2'],
      location: 'New York, USA',
      rating: {
        overall: 667,
        value1: 20,
        value2: 90,
      },
    },
  ],
  totalPages: 6,
  relatedSearches: ['3Danimation', 'Visualeffects', 'MotionCaptureArtist', 'SFXcoordinator', 'CGIartist'],
};
