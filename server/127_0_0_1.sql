-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Янв 07 2024 г., 16:47
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `DB`
--
CREATE DATABASE IF NOT EXISTS `DB` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `DB`;

-- --------------------------------------------------------

--
-- Структура таблицы `score`
--

CREATE TABLE `score` (
  `id` int NOT NULL,
  `id_user` blob NOT NULL,
  `name` varchar(64) NOT NULL,
  `score` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `score`
--

INSERT INTO `score` (`id`, `id_user`, `name`, `score`) VALUES
(3, 0x36353937303766643436323333, 'Михаил', 20),
(4, 0x36353937303832613236653833, 'Акакий', 102),
(5, 0x36353937303834646336336232, 'Игорь', 8),
(6, 0x36353937303837313830373065, 'Петрович', 56),
(7, 0x36353937303862363035376165, 'Снежана', 99),
(8, 0x36353937303863623164356431, 'Putin', 25),
(9, 0x36353937313863633965373663, 'Василий', NULL),
(10, 0x36353937313865666564636531, 'Семён', NULL),
(11, 0x36353937313931323435323931, 'димон-доминатор', 555);

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `id_user` blob NOT NULL,
  `login` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `username` text NOT NULL,
  `token` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `id_user`, `login`, `password`, `username`, `token`) VALUES
(21, 0x36353937303766643436323333, 'Mihuil', '4163835e7570c296e073e62b65e95ec2', 'Михаил', 'cc5dc0e75ca6793ec667c975a1abb338'),
(22, 0x36353937303832613236653833, 'Akakiy', '0a42827c6a25d87d22f92d409d234522', 'Акакий', 'ea4e1344d417669f78e56c4ee1ea6517'),
(23, 0x36353937303834646336336232, 'Igor', '8ce1adf3454bef150b0e3801dde5ef2e', 'Игорь', '61834a5cf945c2c2438377294604c019'),
(24, 0x36353937303837313830373065, 'Petrovich', 'bf551f585caff3bfbe8b1cb3b1d8c004', 'Петрович', '8025d43404ff07884a1e5179f0f7bf98'),
(25, 0x36353937303862363035376165, 'Snezhana', '55ba0c3d97aa959c8453a00f5aa5618e', 'Снежана', '39bd0d946d865cdbf0b64cf66bc6aabc'),
(26, 0x36353937303863623164356431, 'Putin', 'cb24609d5464a8e830d072fdf8f587a7', 'Путин', 'ae3f46e1a3f80e91352f5740b8d4912f'),
(27, 0x36353937313863633965373663, 'Vasya', 'c082282cad5d535061e6205f6e3576a4', 'Василий', 'a08ebe407c0069365339f619d5676c87'),
(28, 0x36353937313865666564636531, 'Semen', 'faaa930d100c5c0af294a4f582e27d33', 'Семён', '4cae5ef9ee8d305bea6db355fd84652a'),
(29, 0x36353937313931323435323931, 'dimachka', '8ad1db449b8740a7b0173195833a362a', 'димон-доминатор', '7b3442f0f11e16bca20f071eac49c8e6');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `score`
--
ALTER TABLE `score`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
