const MENU_REPORTS = {
    name: 'Reports',
    items: [
        {
            name: 'Changeover Report',
            path: '/reports/changeovers',
            perm: [
                'admin.reports.changeovers',
            ],
        },
        {
            name: 'Overdue Booking Payments',
            path: '/reports/overduebookings',
            perm: [
                'admin.reports.overduebookings',
            ],
        },
        {
            name: 'Occupancy Report',
            path: '/reports/occupancy',
            perm: [
                'admin.reports.occupancy',
            ],
        },
        {
            name: 'Property Occupancy Report',
            path: '/reports/propertyoccupancy',
            perm: [
                'admin.reports.propertyoccupancy',
            ],
        },
        {
            name: 'Debtors Report',
            path: '/reports/debtors',
            perm: [
                'admin.reports.debtors',
            ],
        },
        {
            name: 'Daily Tender Total Report',
            path: '/reports/dailytenders',
            perm: [
                'admin.reports.dailytenders',
            ],
        },
        {
            name: 'GST',
            path: '/reports/gst',
            perm: [
                'admin.reports.gst',
            ],
        },
        {
            name: 'Monthly Income Report',
            path: '/reports/monthlyincome',
            perm: [
                'admin.reports.monthlyincome',
            ],
        },
        {
            name: 'Observations',
            path: '/reports/observations',
            perm: [
                'admin.reports.observations',
            ],
            // 'counter': array_sum(InternalCounter::getMultiple(ReportsController::UNREPORTED_OBSERVATIONS_COUNTER_PREFIX)),
        },
        {
            name: 'Currently vacant',
            path: '/reports/vacant',
            perm: [
                'admin.reports.vacant',
            ],
        },
        {
            name: 'Retained amounts',
            path: '/reports/retained',
            perm: [
                'admin.reports.retained',
            ],
        },
        {
            name: 'Forward Deposits',
            path: '/reports/forwarddeposit',
            perm: [
                'admin.reports.forwarddeposit',
            ],
        },
        {
            name: 'Vouchers',
            path: '/reports/vouchers',
            perm: [
                'admin.reports.vouchers',
            ],
        },
        {
            name: 'Returning tenants',
            path: '/reports/returntenants',
            perm: [
                'admin.reports.returntenants',
            ],
        },
    ],
};

export default MENU_REPORTS;