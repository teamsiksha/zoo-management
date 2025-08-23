import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Comprehensive ticket seed data with realistic scenarios
const ticketData = [
  // Individual visitors - ONE_TIME passes
  { 
    name: 'Sarah Johnson', 
    dateOfVisit: new Date('2024-01-15T10:00:00Z'), 
    description: 'First time visitor, excited to see the big cats!', 
    passType: 'ONE_TIME', 
    userType: 'INDIVIDUAL', 
    passStatus: 'NORMAL' 
  },
  { 
    name: 'Michael Chen', 
    dateOfVisit: new Date('2024-01-16T14:30:00Z'), 
    description: 'Photography enthusiast visiting for wildlife shots', 
    passType: 'ONE_TIME', 
    userType: 'INDIVIDUAL', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Emma Rodriguez', 
    dateOfVisit: new Date('2024-01-17T09:15:00Z'), 
    description: 'Marine biology student researching sea life', 
    passType: 'ONE_TIME', 
    userType: 'INDIVIDUAL', 
    passStatus: 'NORMAL' 
  },
  { 
    name: 'David Thompson', 
    dateOfVisit: new Date('2024-01-18T11:45:00Z'), 
    description: 'Anniversary celebration with partner', 
    passType: 'ONE_TIME', 
    userType: 'INDIVIDUAL', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Lisa Wang', 
    dateOfVisit: new Date('2024-01-19T13:20:00Z'), 
    description: 'Weekend family outing with children', 
    passType: 'ONE_TIME', 
    userType: 'INDIVIDUAL', 
    passStatus: 'NORMAL' 
  },

  // Group visitors - ONE_TIME passes
  { 
    name: 'Lincoln Elementary School', 
    dateOfVisit: new Date('2024-01-22T10:00:00Z'), 
    description: 'Grade 4 field trip - 25 students studying animal habitats', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'NORMAL' 
  },
  { 
    name: 'Corporate Team Building - TechCorp', 
    dateOfVisit: new Date('2024-01-23T09:30:00Z'), 
    description: 'Company retreat for 40 employees with guided tour', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Senior Citizens Club', 
    dateOfVisit: new Date('2024-01-24T14:00:00Z'), 
    description: 'Monthly outing for 15 senior members', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'NORMAL' 
  },
  { 
    name: 'Nature Photography Club', 
    dateOfVisit: new Date('2024-01-25T08:00:00Z'), 
    description: 'Early morning wildlife photography session - 12 members', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'VIP' 
  },
  { 
    name: 'University Biology Department', 
    dateOfVisit: new Date('2024-01-26T11:00:00Z'), 
    description: 'Research visit for 20 graduate students', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'VIP' 
  },

  // Monthly pass holders - Individual
  { 
    name: 'Robert Martinez', 
    dateOfVisit: new Date('2024-02-01T10:30:00Z'), 
    description: 'Regular visitor, loves watching the primates', 
    passType: 'MONTHLY', 
    userType: 'INDIVIDUAL', 
    passStatus: 'NORMAL' 
  },
  { 
    name: 'Jennifer Lee', 
    dateOfVisit: new Date('2024-02-02T15:45:00Z'), 
    description: 'Monthly pass holder, frequent visitor with children', 
    passType: 'MONTHLY', 
    userType: 'INDIVIDUAL', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Thomas Anderson', 
    dateOfVisit: new Date('2024-02-03T12:15:00Z'), 
    description: 'Wildlife photographer with monthly access', 
    passType: 'MONTHLY', 
    userType: 'INDIVIDUAL', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Maria Garcia', 
    dateOfVisit: new Date('2024-02-04T09:00:00Z'), 
    description: 'Zoology student conducting behavioral observations', 
    passType: 'MONTHLY', 
    userType: 'INDIVIDUAL', 
    passStatus: 'NORMAL' 
  },
  { 
    name: 'James Wilson', 
    dateOfVisit: new Date('2024-02-05T16:30:00Z'), 
    description: 'Retired teacher, enjoys educational programs', 
    passType: 'MONTHLY', 
    userType: 'INDIVIDUAL', 
    passStatus: 'NORMAL' 
  },

  // Monthly pass holders - Group
  { 
    name: 'Homeschool Network', 
    dateOfVisit: new Date('2024-02-08T10:00:00Z'), 
    description: 'Weekly educational visits for 8 families', 
    passType: 'MONTHLY', 
    userType: 'GROUP', 
    passStatus: 'NORMAL' 
  },
  { 
    name: 'Wildlife Conservation Club', 
    dateOfVisit: new Date('2024-02-09T13:00:00Z'), 
    description: 'Monthly conservation education meetings', 
    passType: 'MONTHLY', 
    userType: 'GROUP', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Art Sketching Group', 
    dateOfVisit: new Date('2024-02-10T11:30:00Z'), 
    description: 'Artists group for live animal sketching sessions', 
    passType: 'MONTHLY', 
    userType: 'GROUP', 
    passStatus: 'NORMAL' 
  },

  // Yearly pass holders - Individual
  { 
    name: 'Dr. Amanda Foster', 
    dateOfVisit: new Date('2024-03-01T08:30:00Z'), 
    description: 'Veterinarian conducting annual health assessments', 
    passType: 'YEARLY', 
    userType: 'INDIVIDUAL', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Kevin O\'Brien', 
    dateOfVisit: new Date('2024-03-02T14:00:00Z'), 
    description: 'Annual pass holder, zoo enthusiast and donor', 
    passType: 'YEARLY', 
    userType: 'INDIVIDUAL', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Dr. Priya Patel', 
    dateOfVisit: new Date('2024-03-03T10:45:00Z'), 
    description: 'Animal behaviorist conducting long-term studies', 
    passType: 'YEARLY', 
    userType: 'INDIVIDUAL', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Rachel Green', 
    dateOfVisit: new Date('2024-03-04T12:30:00Z'), 
    description: 'Zoo volunteer and education program coordinator', 
    passType: 'YEARLY', 
    userType: 'INDIVIDUAL', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Mark Stevens', 
    dateOfVisit: new Date('2024-03-05T09:15:00Z'), 
    description: 'Documentary filmmaker working on wildlife series', 
    passType: 'YEARLY', 
    userType: 'INDIVIDUAL', 
    passStatus: 'VIP' 
  },

  // Yearly pass holders - Group
  { 
    name: 'City University Research Team', 
    dateOfVisit: new Date('2024-03-08T09:00:00Z'), 
    description: 'Ongoing research partnership with zoo', 
    passType: 'YEARLY', 
    userType: 'GROUP', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Wildlife Documentary Crew', 
    dateOfVisit: new Date('2024-03-09T07:30:00Z'), 
    description: 'Professional film crew for nature documentary', 
    passType: 'YEARLY', 
    userType: 'GROUP', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Conservation Partners Alliance', 
    dateOfVisit: new Date('2024-03-10T11:00:00Z'), 
    description: 'Partner organization for conservation initiatives', 
    passType: 'YEARLY', 
    userType: 'GROUP', 
    passStatus: 'VIP' 
  },

  // Recent visitors with varied dates
  { 
    name: 'Sophie Turner', 
    dateOfVisit: new Date('2024-03-15T13:45:00Z'), 
    description: 'Birthday celebration visit with family', 
    passType: 'ONE_TIME', 
    userType: 'INDIVIDUAL', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Adventure Scout Troop 247', 
    dateOfVisit: new Date('2024-03-16T10:15:00Z'), 
    description: 'Merit badge program - wildlife conservation', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'NORMAL' 
  },
  { 
    name: 'International Visitors Group', 
    dateOfVisit: new Date('2024-03-17T14:30:00Z'), 
    description: 'Tourism group from Japan - 30 visitors', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Local Artist Collective', 
    dateOfVisit: new Date('2024-03-18T11:30:00Z'), 
    description: 'Inspiration gathering for wildlife art exhibition', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'NORMAL' 
  },
  { 
    name: 'Daniel Kim', 
    dateOfVisit: new Date('2024-03-19T15:00:00Z'), 
    description: 'Graduate student researching animal communication', 
    passType: 'MONTHLY', 
    userType: 'INDIVIDUAL', 
    passStatus: 'NORMAL' 
  },

  // Future bookings
  { 
    name: 'Spring Break Families', 
    dateOfVisit: new Date('2024-04-01T10:00:00Z'), 
    description: 'Multiple families planning spring break visit', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'NORMAL' 
  },
  { 
    name: 'Medical Students Association', 
    dateOfVisit: new Date('2024-04-05T09:30:00Z'), 
    description: 'Comparative anatomy study visit', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Corporate Sponsor Visit', 
    dateOfVisit: new Date('2024-04-10T11:00:00Z'), 
    description: 'Major donor and sponsor appreciation event', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Children\'s Summer Camp Preview', 
    dateOfVisit: new Date('2024-04-15T14:00:00Z'), 
    description: 'Summer camp program planning and preview', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'NORMAL' 
  },
  { 
    name: 'Wildlife Photography Workshop', 
    dateOfVisit: new Date('2024-04-20T08:00:00Z'), 
    description: 'Professional photography workshop participants', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'VIP' 
  },

  // Additional individual visitors
  { 
    name: 'Alex Rivera', 
    dateOfVisit: new Date('2024-03-25T12:00:00Z'), 
    description: 'Animal lover visiting from out of state', 
    passType: 'ONE_TIME', 
    userType: 'INDIVIDUAL', 
    passStatus: 'NORMAL' 
  },
  { 
    name: 'Grace Mitchell', 
    dateOfVisit: new Date('2024-03-26T16:00:00Z'), 
    description: 'Celebrating graduation with zoo visit', 
    passType: 'ONE_TIME', 
    userType: 'INDIVIDUAL', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Carlos Mendez', 
    dateOfVisit: new Date('2024-03-27T10:30:00Z'), 
    description: 'Regular monthly visitor, loves reptile exhibits', 
    passType: 'MONTHLY', 
    userType: 'INDIVIDUAL', 
    passStatus: 'NORMAL' 
  },
  { 
    name: 'Dr. Helen Chang', 
    dateOfVisit: new Date('2024-03-28T13:15:00Z'), 
    description: 'Zoologist conducting comparative behavior study', 
    passType: 'YEARLY', 
    userType: 'INDIVIDUAL', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Ryan Cooper', 
    dateOfVisit: new Date('2024-03-29T11:45:00Z'), 
    description: 'Nature enthusiast with annual membership', 
    passType: 'YEARLY', 
    userType: 'INDIVIDUAL', 
    passStatus: 'VIP' 
  },

  // Weekend and holiday visitors
  { 
    name: 'Weekend Warriors Group', 
    dateOfVisit: new Date('2024-03-30T09:00:00Z'), 
    description: 'Weekend hiking club exploring zoo trails', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'NORMAL' 
  },
  { 
    name: 'Holiday Celebration Committee', 
    dateOfVisit: new Date('2024-03-31T15:30:00Z'), 
    description: 'Planning special holiday events at the zoo', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Earth Day Volunteers', 
    dateOfVisit: new Date('2024-04-22T08:30:00Z'), 
    description: 'Environmental awareness and cleanup volunteers', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'NORMAL' 
  },
  { 
    name: 'Mother\'s Day Special Visit', 
    dateOfVisit: new Date('2024-05-12T12:30:00Z'), 
    description: 'Special Mother\'s Day family celebration', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'VIP' 
  },
  { 
    name: 'Summer Solstice Celebration', 
    dateOfVisit: new Date('2024-06-21T18:00:00Z'), 
    description: 'Evening celebration for longest day of year', 
    passType: 'ONE_TIME', 
    userType: 'GROUP', 
    passStatus: 'VIP' 
  }
];

async function seedTickets() {
  console.log('🎫 Starting ticket seeding...');

  // Check if tickets already exist
  const existingTickets = await prisma.ticket.count();
  
  if (existingTickets > 0) {
    console.log(`ℹ️  ${existingTickets} tickets already exist in the database`);
    console.log('🔄 Clearing existing tickets and reseeding...');
    
    // Delete existing tickets
    await prisma.ticket.deleteMany({});
    console.log('🗑️  Existing tickets cleared');
  }

  // Create tickets
  console.log(`🌱 Creating ${ticketData.length} tickets...`);
  const createdTickets = await prisma.ticket.createMany({
    data: ticketData,
    skipDuplicates: true,
  });

  console.log(`✅ Successfully created ${createdTickets.count} tickets`);

  // Get comprehensive statistics
  const totalTickets = await prisma.ticket.count();
  
  // Statistics by pass type
  const ticketsByPassType = await prisma.ticket.groupBy({
    by: ['passType'],
    _count: {
      passType: true,
    },
    orderBy: {
      _count: {
        passType: 'desc',
      },
    },
  });

  // Statistics by user type
  const ticketsByUserType = await prisma.ticket.groupBy({
    by: ['userType'],
    _count: {
      userType: true,
    },
  });

  // Statistics by pass status
  const ticketsByPassStatus = await prisma.ticket.groupBy({
    by: ['passStatus'],
    _count: {
      passStatus: true,
    },
  });

  // Date-based statistics
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const futureTickets = await prisma.ticket.count({
    where: {
      dateOfVisit: {
        gte: today,
      },
    },
  });

  const pastTickets = await prisma.ticket.count({
    where: {
      dateOfVisit: {
        lt: today,
      },
    },
  });

  // Monthly breakdown for current year
  const monthlyStats = await prisma.$queryRaw`
    SELECT 
      EXTRACT(MONTH FROM "dateOfVisit") as month,
      EXTRACT(YEAR FROM "dateOfVisit") as year,
      COUNT(*) as count
    FROM "Ticket"
    WHERE EXTRACT(YEAR FROM "dateOfVisit") = EXTRACT(YEAR FROM CURRENT_DATE)
    GROUP BY EXTRACT(MONTH FROM "dateOfVisit"), EXTRACT(YEAR FROM "dateOfVisit")
    ORDER BY month
  `;

  console.log('\n📊 Ticket Database Statistics:');
  console.log(`Total Tickets: ${totalTickets}`);
  console.log(`Future Visits: ${futureTickets}`);
  console.log(`Past Visits: ${pastTickets}`);

  console.log('\n🎟️  Pass Type Breakdown:');
  ticketsByPassType.forEach(type => {
    console.log(`${type.passType}: ${type._count.passType}`);
  });

  console.log('\n👥 User Type Breakdown:');
  ticketsByUserType.forEach(type => {
    console.log(`${type.userType}: ${type._count.userType}`);
  });

  console.log('\n⭐ Pass Status Breakdown:');
  ticketsByPassStatus.forEach(status => {
    console.log(`${status.passStatus}: ${status._count.passStatus}`);
  });

  console.log('\n📅 Monthly Visit Distribution (Current Year):');
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  (monthlyStats as any[]).forEach(month => {
    const monthName = monthNames[Number(month.month) - 1];
    console.log(`${monthName} ${month.year}: ${month.count} visits`);
  });

  // Revenue estimation (sample pricing)
  const revenueEstimate = await prisma.$queryRaw`
    SELECT 
      "passType",
      "passStatus",
      COUNT(*) as count,
      CASE 
        WHEN "passType" = 'ONE_TIME' AND "passStatus" = 'NORMAL' THEN COUNT(*) * 25
        WHEN "passType" = 'ONE_TIME' AND "passStatus" = 'VIP' THEN COUNT(*) * 45
        WHEN "passType" = 'MONTHLY' AND "passStatus" = 'NORMAL' THEN COUNT(*) * 75
        WHEN "passType" = 'MONTHLY' AND "passStatus" = 'VIP' THEN COUNT(*) * 120
        WHEN "passType" = 'YEARLY' AND "passStatus" = 'NORMAL' THEN COUNT(*) * 200
        WHEN "passType" = 'YEARLY' AND "passStatus" = 'VIP' THEN COUNT(*) * 350
      END as estimated_revenue
    FROM "Ticket"
    GROUP BY "passType", "passStatus"
    ORDER BY estimated_revenue DESC
  `;

  console.log('\n💰 Estimated Revenue by Pass Type & Status:');
  let totalRevenue = 0;
  (revenueEstimate as any[]).forEach(item => {
    console.log(`${item.passType} (${item.passStatus}): $${item.estimated_revenue} (${item.count} tickets)`);
    totalRevenue += Number(item.estimated_revenue);
  });
  console.log(`Total Estimated Revenue: $${totalRevenue}`);

  console.log('\n🎉 Ticket seeding completed successfully!');
}

seedTickets()
  .catch((e) => {
    console.error('❌ Error during ticket seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
