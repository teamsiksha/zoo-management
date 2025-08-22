import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Check if admin already exists
  const existingAdmin = await prisma.admin.findFirst();
  
  if (existingAdmin) {
    console.log('Admin already exists in the database');
    return;
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash('admin123', 10);

  // Create initial admin
  const admin = await prisma.admin.create({
    data: {
      fullName: 'System Administrator',
      email: 'admin@zms.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log('Initial admin created:', {
    id: admin.id,
    fullName: admin.fullName,
    email: admin.email,
    role: admin.role,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
