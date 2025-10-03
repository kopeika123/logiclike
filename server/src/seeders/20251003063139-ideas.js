'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ideas', [
      {
        title: 'Улучшение парков в городе',
        description: 'Расширить зелёные зоны, добавить больше скамеек и урн для мусора. Это сделает город более комфортным для прогулок.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Бесплатный Wi-Fi в общественных местах',
        description: 'Организовать бесплатный интернет в парках, скверах и метро. Полезно для студентов и туристов.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Введение школьных обедов для всех учеников',
        description: 'Сделать питание в школах бесплатным и здоровым. Это поможет детям из малообеспеченных семей.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Развитие велосипедной инфраструктуры',
        description: 'Построить больше велодорожек и стоянок для велосипедов. Поощрить экологичный транспорт.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Культурные фестивали для жителей',
        description: 'Организовать регулярные фестивали с музыкой, танцами и едой. Укрепит сообщество и привлечёт туристов.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Экологическая уборка города',
        description: 'Провести массовые субботники и установить контейнеры для раздельного сбора мусора.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Поддержка местных предпринимателей',
        description: 'Создать гранты и льготы для малого бизнеса. Поможет экономике и создаст новые рабочие места.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Доступное жильё для молодёжи',
        description: 'Строить социальное жильё с низкой арендой. Решит проблему с жильём для студентов и молодых семей.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Внедрение солнечных панелей на общественных зданиях',
        description: 'Установить солнечные панели для генерации чистой энергии. Снизит затраты на электроэнергию и поможет экологии.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Создание центров для пожилых людей',
        description: 'Открыть клубы и центры досуга для пенсионеров с программами здоровья и общения. Улучшит качество жизни старшего поколения.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Улучшение общественного транспорта',
        description: 'Обновить автобусы и трамваи, добавить новые маршруты. Сделать транспорт более удобным и доступным.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Программы по борьбе с бездомностью',
        description: 'Создать приюты и программы реабилитации для бездомных. Предоставить медицинскую и психологическую помощь.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Развитие спортивных площадок',
        description: 'Построить новые спортзалы и открытые площадки для различных видов спорта. Поощрить здоровый образ жизни.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Образовательные программы для взрослых',
        description: 'Организовать курсы и тренинги для повышения квалификации. Поможет людям найти лучшую работу.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Защита животных и создание приютов',
        description: 'Открыть приюты для бездомных животных и запустить программы стерилизации. Улучшит отношение к животным в городе.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Внедрение умного освещения в городе',
        description: 'Установить датчики движения для уличного освещения. Снизит энергозатраты и повысит безопасность.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Поддержка искусства и культурных программ',
        description: 'Финансировать выставки, концерты и театральные постановки. Развитая культура привлечёт больше жителей и туристов.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Здоровое питание в школах и детских садах',
        description: 'Ввести программы по обучению правильному питанию и здоровым привычкам. Поможет детям развиваться гармонично.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Развитие туризма в регионе',
        description: 'Создать туристические маршруты и информационные центры. Привлечёт инвестиции и создаст рабочие места.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Цифровизация государственных услуг',
        description: 'Перевести все услуги в онлайн-формат. Упростит доступ к документам и сократит бюрократию.',
        votes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ideas', null, {});
  },
};
