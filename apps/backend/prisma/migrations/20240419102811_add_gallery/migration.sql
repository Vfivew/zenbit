-- CreateTable
CREATE TABLE "galleries" (
    "id" TEXT NOT NULL,
    "count" TEXT NOT NULL,
    "days" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "sold" TEXT NOT NULL,
    "tiket" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "yield" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "galleries_pkey" PRIMARY KEY ("id")
);
