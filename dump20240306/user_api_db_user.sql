-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: user_api_db
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` enum('male','female') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `registeredAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'ivan',NULL,'ivanov@yandex.ru','89991234568',NULL,NULL,'2024-03-05 18:31:02.711'),(6,'petr',NULL,'petrov@yandex.ru','89991234568',NULL,NULL,'2024-03-05 19:12:48.472'),(7,'vasyliy',NULL,'vasyliev@yandex.ru','89991234568',NULL,NULL,'2024-03-05 19:26:08.321'),(8,'sidor',NULL,'sidorov@yandex.ru','$2b$05$w07C6h5U9hjYUpstVbh0CuH8ct7V6aMKImZzhl6G4/Im779f3KhXm',NULL,NULL,'2024-03-05 20:35:39.351'),(13,'andrey',NULL,'andreev@yandex.ru','$2b$05$PYXtY0sj/hWT0d4xJfYRWe6JavBsiWh6BkC96cZQeVG3AAa9Ryb6e',NULL,NULL,'2024-03-05 22:03:12.916'),(16,'alexey',NULL,'alexeyev@yandex.ru','$2b$05$wRtAKOoxWZ2dobXcQwtl4OPe/VIKAPDjQvvpPb41j5smP4szOvi1K',NULL,NULL,'2024-03-05 22:08:41.928'),(17,'denis',NULL,'denisov@yandex.ru','$2b$05$MjiE4PXR67rU/132eoqQfOJnejxav4rOnwSz8NOfN3kBF554JTD2G',NULL,NULL,'2024-03-05 22:10:14.847'),(20,'maxim',NULL,'maximov@yandex.ru','$2b$05$Tw6gXIX1tw75iRmNqf05s.rFuGAvuQjl1NTohw7kowTX49PAzE6BO',NULL,NULL,'2024-03-05 22:11:10.573'),(21,'artem',NULL,'artemov@yandex.ru','$2b$05$GYSrWdxS7vqBMldmleq4WekIeM9yCfBZvjTRrZBopptY42xfLY9WS',NULL,NULL,'2024-03-05 22:11:32.549'),(22,'dmitriy',NULL,'dmitriev@yandex.ru','$2b$05$.JGamYM6IyzpVnjOS89OruY3sdCF9tp8wJaY/c9Dlj7WqGWQeHCb2',NULL,NULL,'2024-03-05 22:12:03.846'),(23,'sergey',NULL,'sergeev@yandex.ru','$2b$05$f1eGcHPqXhpVKQa/e14HAOktCxEYrvxdB/K/Dx/XjvCHh/patR4Vq',NULL,NULL,'2024-03-05 22:19:21.111'),(24,'vladimir',NULL,'vladimiriv@yandex.ru','$2b$05$bvpN/fFVQc8385mPLn2HTuMY530rz/HMzmdC7agXzr0huz7Dv3hy6',NULL,NULL,'2024-03-05 22:19:47.947'),(26,'vitaliy',NULL,'vitaliev@yandex.ru','$2b$05$PMGFGum55Bd1EKu3/F08yOqS8bTyG3fFSAO5fGSExCs7Jpo.MD6RO',NULL,NULL,'2024-03-05 22:24:19.870'),(27,'egor',NULL,'egoroff@yandex.ru','$2b$05$SVnj2QUvaArwul3STwk.4ObYLoUJsXDSbc02vOdlnAwBszWfitWlG',NULL,NULL,'2024-03-05 22:25:40.960'),(28,'pavel',NULL,'New-pavlov-123@yandex.ru','$2b$05$vthOT2WiMtRZmfO5HI3MdOT5kWPlAVauetbVtGUjvu1LPLqJJEnA.','male',NULL,'2024-03-05 22:26:34.231'),(30,'petr',NULL,'petroff@yandex.ru','$2b$05$v8LZ/CAuq22BhKEik77CEOmIdI.Q6Wbc/hAjiqrDeiE4/nlpCEx1O','male','petrov.png','2024-03-06 17:54:34.590');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-06 23:54:51
