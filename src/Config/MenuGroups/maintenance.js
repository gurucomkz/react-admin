const MENU_MAINTENANCE = {
    name: 'Maintenance',
    items: [
        {
            name: 'Jobs',
            path: '/jobs',
            perm: [
                'admin.jobs.index',
            ],
        },
        {
            name: 'Assign Job',
            path: '/jobs/jobmanagement',
            perm: [
                'admin.jobs.jobmanagement',
            ],
        },
        {
            name: 'Work Orders',
            path: '/workorders',
            perm: [
                'admin.workorders.index',
            ],
        },
        {
            name: 'Contractors',
            path: '/workorders/contractors',
            perm: [
                'admin.workorders.contractors',
            ],
        },
        {
            name: 'Times Report',
            path: '/workorders/timesreport',
            perm: [
                'admin.workorders.timesreport',
            ],
        },
        {
            name: 'Daily Time Analysis',
            path: '/workorders/dtareport',
            perm: [
                'admin.workorders.dtareport',
            ],
        },
        {
            name: 'Hours Sold',
            path: '/workorders/hourssold',
            perm: [
                'admin.workorders.hourssold',
            ],
        },
        {
            name: 'Maintenace notes',
            path: '/reports/maintenancenotes',
            perm: [
                'admin.reports.maintenancenotes',
            ],
            // 'counter': InternalCounter::get(ReportsController::UNREPORTED_MAINTENANCE_COUNTER_PREFIX),
        },
        {
            name: 'Schedules',
            path: '/woschedules',
            perm: [
                'admin.woschedules.index',
            ],
        },
    ],
};

export default MENU_MAINTENANCE;