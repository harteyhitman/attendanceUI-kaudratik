
import { Icon } from '@iconify-icon/react';


export const portal= [
    {
        id: 'admin',
        portalNames: 'Admin Portal',
        portalIcons: <Icon icon="ri:admin-fill" />,
        route: "/admin"
    },
    {
        id: 'admssion',
        portalNames: 'Admissions',
        portalIcons: <Icon icon="material-symbols-light:other-admission-outline-sharp" />,
        route: "/admssion"
    },
    {
        id: 'asset',
        portalNames: 'Asset',
        portalIcons: <Icon icon="carbon:software-resource-cluster" />,
        route: "/asset"
    },
    {
        id: 'attendance',
        portalNames: 'Attendance',
        portalIcons: <Icon icon="material-symbols-light:co-present-outline" />,
        route: "/attendance"
    },
    {
        id: 'busing',
        portalNames: 'Busing',
        portalIcons: <Icon icon="solar:bus-outline" />,
        route: "/busing"
    },
    {
        id: 'clubs',
        portalNames: 'Clubs',
        portalIcons: <Icon icon="emojione-monotone:game-die" />,
        route: "/clubs"
    },
    {
        id: 'engagement',
        portalNames: 'Engagement',
        portalIcons: <Icon icon="fluent:people-community-20-regular" />,
        route: "/engagement"
    },
    {
        id: 'enrollment',
        portalNames: 'Enrollment',
        portalIcons: <Icon icon="fluent-mdl2:open-enrollment" />,
        route: "/enrollment"
    },
    {
        id: 'finance',
        portalNames: 'Finance',
        portalIcons: <Icon icon="arcticons:finance-manager" />,
        route: "/finance"
    },
    {
        id: 'forms',
        portalNames: 'Forms',
        portalIcons: <Icon icon="fluent:form-new-28-regular"/>,
        route: "/forms"
    },
    {
        id: 'gradebooks',
        portalNames: 'Gradebook',
        portalIcons: <Icon icon="arcticons:score-sheets"/>,
        route: "/gradebooks"
    },
    {
        id: 'newsletter',
        portalNames: 'Newsletter',
        portalIcons: <Icon icon="quill:inbox-newsletter"/>,
        route: "/newsletter"
    },
    {
        id: 'planner',
        portalNames: 'Planner',
        portalIcons: <Icon icon="fluent-mdl2:plan-view" className='  hover:text-primary' />,
        route: "/planner"
    },
]

export const dashboardBtn=[
    {
        id: 'dashboard',
        ButtonIcon: <Icon icon="material-symbols:dashboard-outline" className='hover:text-secondary text-xl w-4 h-4 text-primary ' />,
        name: 'Dashboard',
    },
    {
        id: 'track',
        ButtonIcon: <Icon icon="eos-icons:monitoring" className='hover:text-secondary text-xl w-4 h-4 text-primary' />,
        name: 'Track',
    },
    {
        id: 'reports',
        ButtonIcon: <Icon icon="iconoir:reports-solid" className='hover:text-secondary text-xl w-4 h-4 text-primary' />,
        name: 'Reports',
    },
    {
        id: 'profile',
        ButtonIcon: <Icon icon="iconamoon:profile-circle-light" className='hover:text-secondary text-xl w-4 h-4 text-primary' />,
        name: 'Profile',
    },
]