// prisma/seed.ts - human code 80%
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding started...');

  // Clean old data
  await prisma.borrowRequest.deleteMany();
  await prisma.book.deleteMany();
  await prisma.user.deleteMany();

  // 1. Create Admin
  const adminPass = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@booknest.com',
      password: adminPass,
      role: 'ADMIN'
    }
  });
  console.log('Admin created:', admin.email);

  // 2. Create Normal User
  const userPass = await bcrypt.hash('user123', 10);
  const user = await prisma.user.create({
    data: {
      name: 'Prasanna',
      email: 'user@booknest.com',
      password: userPass,
      role: 'USER'
    }
  });
  console.log('User created:', user.email);

  // 3. Create 8 Sample Books
  const books = [
    { title: 'Atomic Habits', author: 'James Clear', category: 'Self-Help', totalCopies: 5, availableCopies: 5, description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones. Very popular book.' },
    { title: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction', totalCopies: 3, availableCopies: 2, description: 'A magical fable about following your dream. Journey of a shepherd boy.' },
    { title: 'Clean Code', author: 'Robert Martin', category: 'Technology', totalCopies: 4, availableCopies: 4, description: 'A Handbook of Agile Software Craftsmanship. Must read for developers.' },
    { title: 'Harry Potter', author: 'J.K. Rowling', category: 'Fantasy', totalCopies: 6, availableCopies: 3, description: 'Harry Potter and the Philosopher Stone. Wizard world adventure.' },
    { title: 'Wings of Fire', author: 'A.P.J Abdul Kalam', category: 'Biography', totalCopies: 2, availableCopies: 2, description: 'Autobiography of Dr Kalam. Inspiring story.' },
    { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', category: 'Finance', totalCopies: 5, availableCopies: 4, description: 'What the Rich Teach Their Kids About Money.' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', category: 'Fantasy', totalCopies: 3, availableCopies: 1, description: 'Bilbo Baggins adventure to reclaim treasure.' },
    { title: 'Deep Work', author: 'Cal Newport', category: 'Self-Help', totalCopies: 4, availableCopies: 4, description: 'Rules for Focused Success in a Distracted World.' },
  ];

  for (const b of books) {
    await prisma.book.create({ data: b });
  }

  console.log('8 Books created');
  console.log('Seeding done!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });