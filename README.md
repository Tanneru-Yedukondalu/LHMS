# Leave & Holiday Management System (LHMS)

A lightweight web application to manage leaves and holidays for small teams.  
Built using **Next.js**, this system supports employee leave requests, manager approvals, role-based access, email notifications, and calendar integration.

---

## 🚀 Features

### 👥 Roles
- **Employee**
  - Request leaves
  - Select yearly public holidays
  - View leave balance & calendar
- **Manager**
  - Approve or reject leave requests
  - View team leave calendar
  - Receive notifications

---

### 🗓️ Leave Types

#### 1. Casual Leave
- 1 leave per month
- Cannot be carried forward
- Expires at month end
- Requires manager approval

#### 2. Public Holidays
- 8 holidays per year
- Selected by employee
- Automatically added to calendar
- Manager receives email reminder 1 day before

#### 3. Birthday Leave
- 1 leave per year
- Based on employee date of birth
- Auto or manual application (configurable)

---

### 🔔 Notifications
- In-app notifications
- Email notifications for:
  - Leave requests
  - Leave approvals/rejections
  - Upcoming public holidays

---

## 🧱 Tech Stack

### Frontend
- Next.js (App Router)
- Tailwind CSS
- ShadCN UI
- FullCalendar

### Backend
- Next.js API Routes
- Server Actions
- Prisma ORM

### Database
- PostgreSQL / MySQL

### Authentication
- NextAuth (Auth.js)
- JWT-based sessions

### Email & Jobs
- Nodemailer (SMTP)
- Cron jobs for scheduled reminders

---

## 📁 Project Structure (Planned)

```text
/
├── app/
│   ├── api/
│   ├── employee/
│   ├── manager/
│   ├── login/
│   └── layout.tsx
├── components/
├── lib/
├── prisma/
├── public/
├── styles/
└── README.md
