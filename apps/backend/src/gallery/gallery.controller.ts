// gallery.controller.ts
import { Controller, Get } from '@nestjs/common';
import { GalleryService } from './gallery.service';

@Controller('gallery')
export class GalleryController {
    constructor(private readonly galleryService: GalleryService) {}

    @Get()
    async getAllGalleryItems() {
        return this.galleryService.getAllGalleryItems();
    }
}
