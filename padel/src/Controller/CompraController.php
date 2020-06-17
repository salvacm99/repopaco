<?php

namespace App\Controller;

use App\Entity\{Productos};
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

class CompraController extends AbstractController
{
  /**
     * @Route("/compra", name="compra")
     */
    public function show(EntityManagerInterface $entityManager)
    {
        $productos=$this->getFoto();

        return $this->render('compra/index.html.twig', [
            'title' => 'Productos',
            'productos' => $productos
        ]);
    }

    public function getFoto()
    {
        $productos = $this->getDoctrine()
            ->getRepository(Productos::class)
            ->find();

        return  $productos;

    }
}
