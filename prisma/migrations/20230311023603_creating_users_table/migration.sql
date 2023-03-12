-- CreateTable
CREATE TABLE "User" (
    "id_user" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birth_date" DATETIME NOT NULL,
    "is_active" INTEGER NOT NULL DEFAULT 0,
    "first_access" INTEGER NOT NULL DEFAULT 1,
    "last_login" DATETIME,
    "created_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
