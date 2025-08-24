# Project Title
**NZP** : Zoo Management System

## Demo link:
Access this application at [NZP](https://zms.shishuranjan.online/)

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)
- [API Documentation](#api-documentation)
- [Credits](#credits)
- [Contributors](#contributors)

---

## About The App
**NZP - Zoo Management System** is a full-stack platform designed to manage both the visitor and administrative sides of a zoo.  

### 🐾 Visitor Side  
- Beautiful landing page with sections: `Header`, `Hero`, `About`, `Features`, `Map`, `Footer`.  
- Visitors can **book tickets** by filling out a form.  
- After successful booking, a **success popup** shows a Ticket ID (which can be copied).  
- Using the **View Ticket** feature, visitors can enter the Ticket ID to view their detailed ticket.  

### 🦁 Admin Side  
- Dedicated **Admin Portal** accessible from the header.  
- Admins can login with email & password.  
- Dashboard includes:  
  - **Animal Management**: View all animals (fetched from API), add new animals, edit details, or remove them.  
  - **Staff Management**: (Under construction).  
- Secure **authentication system** using JWT.  
- Admin can **logout** anytime.  

---

## Screenshots  

### Gif : Walk Through
![View](./zms-frontend/src/assets/screenshots/walkthrough_zms.gif)  


### 🖥️ Visitor Side - Landing Page & ticket Booking/Viewing 
![View](./zms-frontend/src/assets/screenshots/landing_page.png)  
![View](./zms-frontend/src/assets/screenshots/ticket_booking_page.png)  
![View](./zms-frontend/src/assets/screenshots/booking_success_pop.png)  
![View](./zms-frontend/src/assets/screenshots/view_ticket_page.png)  
![View](./zms-frontend/src/assets/screenshots/ticket_with_id.png)  


### 🔐 Admin Portal  
![View](./zms-frontend/src/assets/screenshots/Signin_page.png)  
![View](./zms-frontend/src/assets/screenshots/Admin_dashboard.png)  
![View](./zms-frontend/src/assets/screenshots/add_animal.png)  
![View](./zms-frontend/src/assets/screenshots/update_animal.png)  


---

## Technologies  

### Frontend  
- `React` - library for building UI  
- `TypeScript` - strongly typed JS  
- `React-Router-Dom` - for routing and navigation  
- `Tailwind CSS` - utility-first CSS framework  
- `Lucide React` - icons  
- `Motion` - animations  
- `Axios` - API calls  
- `Vite` - build tool  
- `ESLint` - code linting  

### Backend  
- `Node.js` with `Express` - REST API  
- `Prisma ORM` - database management  
- `PostgreSQL` - relational database  
- `JWT` - authentication  
- `bcryptjs` - password hashing  
- `zod` - validation  
- `dotenv` - environment variables  

---

## Setup  

### Frontend  
```bash
# Clone repo
git clone https://github.com/yourusername/zms-frontend.git
cd zms-frontend

# Install dependencies
bun install

# Start dev server
bun run dev

# Build App
bun run build
```
### Backend
```bash
# Clone repo
git clone https://github.com/yourusername/zms-backend.git
cd zms-backend

# Install dependencies
bun install

# Setup database (PostgreSQL required)
bunx prisma migrate dev --name init

# Seed initial data
bun run db:seed

# Run backend server
bun run dev
```

### Environment Variables  
Backend requires a `.env` file:  
```env
DATABASE_URL="postgresql://username:password@localhost:5432/zms_db"
JWT_SECRET="your-secret-key"
```

Default admin credentials after seeding:
```
Email: admin@zms.com  
Password: admin123  
```

## Approach  

- **Architecture:** Full-stack app using React (frontend) and Express + Prisma + PostgreSQL (backend).  
- **Frontend:** Built with React (Vite + TS) to ensure type safety & speed. Landing page designed to be engaging and responsive.  
- **Backend:** RESTful API built with Express + Prisma ORM. Used JWT for secure authentication.  
- **Ticket System:** Created public APIs for ticket booking & viewing, with unique IDs for retrieval.  
- **Admin Portal:** Implemented role-based authentication. Only authenticated admins can manage animals/staff.  
- **Data Handling:** Prisma ORM ensures schema consistency & scalability. API endpoints follow REST conventions.  
- **Challenges Faced:**  
  - Implementing secure role-based authentication.  
  - Ticket validation flow & success popup integration.  
  - CRUD operations for animals with proper validation.  
  - Designing reusable UI components in React.  

---

## Status  
**NZP** is `In Progress` 🚀  
- Visitor-facing features ✅ Completed  
- Admin Animal Management ✅ Completed  
- Staff Management 🚧 Under Construction  

---

## API Documentation
The complete backend API documentation can be found here:  
👉 [ZMS API Docs](./zms-backend/API_DOCUMENTATION.md)

---

## Credits  
List of Help Guides:  
- [Prisma Docs](https://www.prisma.io/docs)  
- [PostgreSQL Docs](https://www.postgresql.org/docs/)  
- [React Docs](https://react.dev/)  
- [TailwindCSS Docs](https://tailwindcss.com/)  
- [Lucide Icons](https://lucide.dev/)  
- [MDN Docs](https://developer.mozilla.org/en-US/)  

---

## Contributors
- Shishu Ranjan
- Alhera Ahmad
- Murugan
- Shivam

