# STANs Frontend

## Overview

The **STANs Frontend** is a React application built with Vite that provides a responsive user interface for managing patients, studies, and bills. It interacts with the STANs Backend API for user authentication, data management, and file uploads. The app uses Tailwind CSS for styling and follows modern React best practices, including the use of custom hooks and React Router v6 for routing.

## Features

- **User Authentication:** Secure login, registration, and protected routes.
- **Dashboard:** Overview of key navigations.
- **Patient Management:** List, view, add, edit, and delete patient records.
- **Study Management:** List, view, add, edit, and file uploads for studies.
- **Billing Management:** List, view, add, edit, and file uploads for bills.
- **Search, Filtering, and Pagination:** Dynamic search, adjustable page sizes, and pagination controls.
- **Responsive Design:** Optimized for both mobile and desktop experiences.
- **Modular and Scalable:** Well-organized project structure using Vite for fast builds.

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Router (v6)
- Axios for API calls
- TypeScript for type safety

## Project Structure

- `src/`: Main source directory.
  - `components/`: Reusable UI components (e.g., `NavBar`, `PaginationComponent`, `PatientsListComponent`).
  - `pages/`: Page components corresponding to routes (e.g., `DashboardPage`, `PatientsPage`, `EditPatientPage`).
  - `api/`: API service functions (e.g., `patientsService`, `studiesService`, `billsService`).
  - `context/`: React Context providers (e.g., `AuthContext`).
  - `types/`: TypeScript type definitions.
  - `router/`: React Router configuration.
  - `layouts/`: Layout components (e.g., `MainLayout`, `AuthLayout`).
  - `assets/`: Static assets (e.g., images).
  - `App.tsx`: Main application component.
  - `main.tsx`: Application entry point.

## Routing

The application uses React Router v6 to define routes. Example routes include:

- `/register` – Sign in page.
- `/login` – Login page.
- `/dashboard` – Main dashboard.
- `/patients` – Patients list page.
- `/patients/add` – Add patient page.
- `/patients/:patientId` – Patient details page.
- `/patients/:patientId/edit` – Edit patient page.
- `/studies` – Studies list page.
- `/studies/add` – Add study page.
- `/studies/:studyId` – Study details page.
- `/studies/:studyId/edit` – Edit study page.
- `/studies/:studyId/upload-result` – Upload study result page.
- `/studies/patient/:patientId` – Studies list for a specific patient.
- `/bills` – Bills list page.
- `/bills/add` – Add bill page.
- `/bills/:billId` – Bill details page.
- `/bills/:billId/edit` – Edit bill page.
- `/bills/:billId/upload-payment` – Upload payment proof page.
- `/bills/patient/:patientId` – Bills list for a specific patient.

## API Integration

API calls are handled via Axios. The base URL is configured using the `VITE_API_URL` environment variable. All API service functions reside in the `src/api/` directory.