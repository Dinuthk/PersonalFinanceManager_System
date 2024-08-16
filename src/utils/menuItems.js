import {user, dashboard, budget, income, expenses, goals} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Profile',
        icon: user,
        link: '/dashboard'
    },
    {
        id: 2,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 3,
        title: "Budgeting",
        icon: budget,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Income",
        icon: income,
        link: "/dashboard",
    },
    {
        id: 5,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id: 6,
        title: "Goals",
        icon: goals,
        link: "/dashboard",
    },
]