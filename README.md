# Frontend - Expense

## Overview
This is the frontend part of the Expense App built with React (Vite), **TypeScript**, and styled using **Tailwind CSS**.

## Thinking Process

### 1. **Application Flow**
The first step was to define the user experience and the overall flow of the application. The core functionality revolves around:
- Adding expenses.
- Removing the Expenses (i.e bonus)
- Visualizing the data in the form of a bar chart.

With these goals in mind, the app needed a clear and intuitive interface where users can easily add, view, and analyze their expenses.

### 2. **Choosing the Tech Stack**
After defining the app’s functionality, I selected the technologies based on their ability to meet the requirements efficiently.

#### Frontend:
- **React**: React is ideal for building dynamic, interactive user interfaces. Since this app involves state management and real-time data updates (like adding and viewing expenses), React's component-based architecture and hooks fit well with the app's needs.

#### UI Framework:
- **ShadCn UI**: For rapid UI development and a polished user experience, I decided to use ShadCn UI. It provides a collection of customizable and easy-to-implement components, helping with faster development without compromising on design quality.

#### State Management:
- **Zustand**: For state management, I opted for Zustand because it offers a lightweight and simple solution for managing global state. It also provide the functionality to persist the state in the localStorage which meet the requirements.

#### Charting:
- **Rechats**: To visualize spending by category, I chose **Recharts** due to its ease of integration with React and its robust features for rendering charts. Beside the shadCn has Chart component section so i can easily pick from it.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Arkar20/expense-app
```

Go to the project directory

```bash
  cd expense-app
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm dev
```


## Technology Used

React (Vite), Tailwind Css, Shadcn UI, Zustand




## Roadmap

- Adding Unit Testing and E2E testing for long run

- Setup Microfrontend for scalability


## Live Website

https://lucky-faloodeh-507b35.netlify.app/
