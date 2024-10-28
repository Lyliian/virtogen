<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class ViteAssetExtension extends AbstractExtension
{
    private $isDev;
    private $manifestData;

    public function __construct(
        string $mode,
        private readonly string $manifest,
        private readonly string $viteServer,
        private readonly string $buildFolder = 'build'
    ) {
        $this->isDev = $mode == 'dev';
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('vite_asset', $this->asset(...), ['is_safe' => ['html']]),
        ];
    }

    public function asset(string $entry): string
    {
        return $this->isDev ? $this->assetDev($entry) : $this->assetProd($entry);
    }

    public function assetDev(string $entry): string
    {
        $html = '<script type="module" src="'.$this->viteServer.'/'.$this->buildFolder.'/@vite/client"></script>';
        $html .= '<script type="module" src="'.$this->viteServer.'/'.$this->buildFolder.'/'.$entry.'" defer></script>';

        return $html;
    }

    private function assetProd(string $entry): string
    {
        if (null === $this->manifestData) {
            $this->manifestData = json_decode(file_get_contents($this->manifest), true);
        }
        $file = $this->manifestData[$entry]['file'];
        if ('js' === \pathinfo((string) $file, \PATHINFO_EXTENSION)) {
            $html = '<script type="module" src="/'.$this->buildFolder.'/'.$file.'" defer></script>';
            $css = $this->manifestData[$entry]['css'] ?? [];
            $imports = $this->manifestData[$entry]['imports'] ?? [];

            foreach ($css as $cssFile) {
                $html .= '<link rel="stylesheet" media="screen" href="/'.$this->buildFolder.'/'.$cssFile.'"/>';
            }
            foreach ($imports as $import) {
                $html .= '<link rel="modulepreload" href="/'.$this->buildFolder.'/'.$import.'"/>';
            }
        } else {
            $html = '<link rel="stylesheet" media="screen" href="/'.$this->buildFolder.'/'.$file.'"/>';
        }

        return $html;
    }
}