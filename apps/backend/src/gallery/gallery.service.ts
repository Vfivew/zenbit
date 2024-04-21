// gallery.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GalleryService {
    constructor(private readonly prismaService: PrismaService) {}

    async getAllGalleryItems() {
        return this.prismaService.gallery.findMany();
    }
}
