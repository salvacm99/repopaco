<?php

namespace App\Repository;

use App\Entity\Productos2;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Productos2|null find($id, $lockMode = null, $lockVersion = null)
 * @method Productos2|null findOneBy(array $criteria, array $orderBy = null)
 * @method Productos2[]    findAll()
 * @method Productos2[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class Productos2Repository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Productos2::class);
    }

    // /**
    //  * @return Productos2[] Returns an array of Productos2 objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Productos2
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
