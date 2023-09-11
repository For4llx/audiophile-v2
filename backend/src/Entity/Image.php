<?php

namespace App\Entity;

use App\Repository\ImageRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


#[ORM\Entity(repositoryClass: ImageRepository::class)]
class Image
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["getProducts"])]
    private ?string $small = null;

    #[ORM\Column(length: 255)]
    #[Groups(["getProducts"])]
    private ?string $medium = null;

    #[ORM\Column(length: 255)]
    #[Groups(["getProducts"])]
    private ?string $large = null;

    #[ORM\ManyToOne(inversedBy: 'gallery')]
    private ?Product $product = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSmall(): ?string
    {
        return $this->small;
    }

    public function setSmall(string $small): static
    {
        $this->small = $small;

        return $this;
    }

    public function getMedium(): ?string
    {
        return $this->medium;
    }

    public function setMedium(string $medium): static
    {
        $this->medium = $medium;

        return $this;
    }

    public function getLarge(): ?string
    {
        return $this->large;
    }

    public function setLarge(string $large): static
    {
        $this->large = $large;

        return $this;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): static
    {
        $this->product = $product;

        return $this;
    }
}
