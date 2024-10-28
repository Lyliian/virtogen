<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    #[Route('/{page}', name: 'app_page')]
    #[Route('/character/{id}', name: 'app_character_page')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }

    #[Route('/logout', name: 'app_logout')]
    public function logout(): void {}
}
