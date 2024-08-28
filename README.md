# Weather app

Приложение позволяет узнать погоду в выбранном городе

## Что используется:
- API с поиском по городу [DaData](https://dadata.ru/api/)
- API погоды [OpenWeatherMap.org](https://openweathermap.org/api)
- Анимация [React Spring](https://www.react-spring.dev/)

## Локальный запуск
1. Создаем .env файл с API ключами DaData и OpenWeatherMap
```shell
cp .env.example .env
```
2. Запускаем контейнер с приложением
```shell
cd docker
docker compose up
```
3. Переходим на http://localhost:3000