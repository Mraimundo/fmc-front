import { expect } from 'chai';

import { Badge } from './constants';
import { menu } from './mock';
import {
  getParticipantBadgeByPortugueseTerm,
  getMenuByUrl,
  isSelectedMenu,
} from './utils';

describe('src/state/modules/header/utils', () => {
  describe('getParticipantBadgeByPortugueseTerm', () => {
    test('should be a function', () => {
      expect(getParticipantBadgeByPortugueseTerm).to.be.a('function');
    });

    test('should return correct badge value', () => {
      expect(getParticipantBadgeByPortugueseTerm('Terra')).to.be.equal(
        Badge.Land,
      );
      expect(getParticipantBadgeByPortugueseTerm('Raiz')).to.be.equal(
        Badge.Root,
      );
      expect(getParticipantBadgeByPortugueseTerm('Semente')).to.be.equal(
        Badge.Seed,
      );
      expect(getParticipantBadgeByPortugueseTerm('Água')).to.be.equal(
        Badge.Water,
      );
    });
  });

  describe('getMenuByUrl', () => {
    test('should be a function', () => {
      expect(getMenuByUrl).to.be.a('function');
    });

    test('should return null when url is not exists in menu list', () => {
      expect(getMenuByUrl('/editar-participante', menu)).to.be.null;
    });

    test('should return extract menu when URL is /extrato', () => {
      expect(getMenuByUrl('/extrato', menu)).to.be.equal(menu[1]);
    });

    test('should return points management menu when URL is /distribuicao-de-pontos', () => {
      expect(getMenuByUrl('/distribuicao-de-pontos', menu)).to.be.equal(
        menu[0],
      );
    });
  });

  describe('isSelectedMenu', () => {
    test('should be a function', () => {
      expect(isSelectedMenu).to.be.a('function');
    });

    test('should return false when selected menu and current menu is different', () => {
      expect(isSelectedMenu(menu[0], menu[1])).to.be.false;
    });

    test('should return false when selected menu and current menu is different', () => {
      expect(isSelectedMenu(menu[0], null)).to.be.false;
    });

    test('should return true when selected menu and current menu is equal', () => {
      expect(isSelectedMenu(menu[0], menu[0])).to.be.true;
    });
  });
});
