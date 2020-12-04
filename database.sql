-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.11-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for portafolio
CREATE DATABASE IF NOT EXISTS `portafolio` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish2_ci */;
USE `portafolio`;

-- Dumping structure for table portafolio.keywords
CREATE TABLE IF NOT EXISTS `keywords` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `keyword` varchar(120) DEFAULT NULL,
  `keyword_section` tinyint(4) DEFAULT NULL,
  `status` tinyint(4) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table portafolio.keywords: ~0 rows (approximately)
DELETE FROM `keywords`;
/*!40000 ALTER TABLE `keywords` DISABLE KEYS */;
INSERT INTO `keywords` (`id`, `keyword`, `keyword_section`, `status`) VALUES
	(1, 'Web Developer', 1, 1),
	(2, 'Front-End Developer', 1, 1),
	(3, 'Back-End Developer', 1, 1);
/*!40000 ALTER TABLE `keywords` ENABLE KEYS */;

-- Dumping structure for table portafolio.landing_inicio
CREATE TABLE IF NOT EXISTS `landing_inicio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `subtitle` varchar(50) DEFAULT NULL,
  `keyword_section` tinyint(4) DEFAULT 1,
  `img_src` varchar(250) DEFAULT NULL,
  `status` tinyint(4) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table portafolio.landing_inicio: ~0 rows (approximately)
DELETE FROM `landing_inicio`;
/*!40000 ALTER TABLE `landing_inicio` DISABLE KEYS */;
INSERT INTO `landing_inicio` (`id`, `title`, `subtitle`, `keyword_section`, `img_src`, `status`) VALUES
	(1, 'Alejandro Sanchez', 'I\'m', 1, '../img/hero-bg.jpg', 1);
/*!40000 ALTER TABLE `landing_inicio` ENABLE KEYS */;

-- Dumping structure for table portafolio.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `status` tinyint(4) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table portafolio.users: ~0 rows (approximately)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `password`, `status`) VALUES
	(1, 'alejo', 'alejo123', 1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
