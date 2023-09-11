<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Response;

class ProductController extends AbstractController
{
    #[Route('/api/category/earphones', name: 'getAllEarphones')]
    public function getAllEarphones(ProductRepository $productRepository, SerializerInterface $serializer): JsonResponse
    {
        $earphonesList = $productRepository->findBy(['category' => 'earphones']);
        $jsonEarphonesList = $serializer->serialize($earphonesList, 'json', ['groups' => 'getProducts']);
        return new JsonResponse($jsonEarphonesList, Response::HTTP_OK, [], true);
    }
}
