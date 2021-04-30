const MENU_SERVICING = {
    name: 'Servicing',
    items: [
        {
            name: 'Servicing',
            path: '/easyservices',
            perm: [
                'admin.easyservices.index',
            ],
        },
        {
            name: 'Assign Tasks',
            path: '/easytasks/serviceassignment',
            perm: [
                'admin.easytasks.serviceassignment',
            ],
        },
        {
            name: 'Manage Generated Tasks',
            path: '/easytasks/servicemanagement',
            perm: [
                'admin.easytasks.servicemanagement',
            ],
        },
        {
            name: 'View Tasks',
            path: '/easytasks',
            perm: [
                'admin.easytasks.index',
            ],
        },
        {
            name: 'Create Task',
            path: '/easytasks/create',
            perm: [
                'admin.easytasks.create',
            ],
        },
        {
            name: 'Inventory',
            path: '/propertyinventory',
            perm: [
                'admin.propertyinventory.index',
            ],
        },
        {
            name: 'Product usage forecast',
            path: '/propertyinventory/forecast',
            perm: [
                'admin.propertyinventory.forecast',
            ],
        },
        {
            name: 'Service notes',
            path: '/reports/servicenotes',
            perm: [
                'admin.reports.servicenotes',
            ],
            // 'counter': InternalCounter::get(ReportsController::UNREPORTED_SERVICENOTES_COUNTER_PREFIX),
        },
        {
            name: 'Register Observation',
            path: '/observations/register',
            perm: [
                'admin.observations.register',
            ],
        },
        {
            name: 'Times Report',
            path: '/easytasks/timesreport',
            perm: [
                'admin.easytasks.timesreport',
            ],
        },
        {
            name: 'Daily Time Analysis',
            path: '/easytasks/dtareport',
            perm: [
                'admin.easytasks.dtareport',
            ],
        },
        {
            name: 'Hours Sold',
            path: '/easytasks/hourssold',
            perm: [
                'admin.easytasks.hourssold',
            ],
        },

        {
            name: 'Items for Loan',
            icon: 'fa-tasks',
            items: [
                {
                    name: 'Items',
                    path: '/loanitems',
                    perm: [
                        'admin.loanitems.index',
                    ],
                },
                {
                    name: 'Overview',
                    path: '/loanitems/overview',
                    perm: [
                        'admin.loanitems.overview',
                    ],
                },
            ],
        },
    ],
};

export default MENU_SERVICING;