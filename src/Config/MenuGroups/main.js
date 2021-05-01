import React from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PaymentIcon from '@material-ui/icons/Payment';

const MENU_MAIN = {
    name: 'Bookings',
    items: [
        {
            name: 'Bookings',
            icon: <DateRangeIcon />,
            items: [
                {
                    name: 'Overview',
                    path: '/bookings/overview',
                    perm: [
                        'admin.bookings.overview',
                    ],
                },
                {
                    name: 'View Arrivals',
                    path: '/bookings/arrivals',
                    perm: [
                        'admin.bookings.arrivals',
                    ],
                },
                {
                    name: 'View Departures',
                    path: '/bookings/departures',
                    perm: [
                        'admin.bookings.departures',
                    ],
                },
                {
                    name: 'View Bookings',
                    path: '/bookings',
                    perm: [
                        'admin.bookings.index',
                    ],
                },
                {
                    name: 'New Booking',
                    path: '/bookings/create',
                    perm: [
                        'admin.bookings.create',
                    ],
                },
                {
                    name: 'VIP/Blacklist',
                    path: '/vipblacklists',
                    perm: [
                        'admin.vipblacklists.index',
                    ],
                },
                {
                    name: 'LTC',
                    path: '/longtermcontracts',
                    perm: [
                        'admin.longtermcontracts.index',
                    ],
                },
            ]
        },
        {
            name: 'Transactions',
            icon: <PaymentIcon />,
            items: [
                {
                    name: 'All Transactions',
                    path: '/transactions',
                    perm: [
                        'admin.transactions.index',
                    ],
                },
                {
                    name: 'Receipt Owner',
                    path: '/transactions/receiptowner',
                    perm: [
                        'admin.transactions.receiptowner',
                    ],
                },
                {
                    name: 'Receipt Creditor',
                    path: '/transactions/receiptcreditor',
                    perm: [
                        'admin.transactions.receiptcreditor',
                    ],
                },
                {
                    name: 'Create Invoice',
                    path: '/invoices/create',
                    perm: [
                        'admin.invoices.create',
                    ],
                },
                {
                    name: 'Pay Creditor',
                    path: '/transactions/paycreditor',
                    perm: [
                        'admin.transactions.paycreditor',
                    ],
                },
                {
                    name: 'Charge Bulk Fee',
                    path: '/transactions/chargebulkadminfee',
                    perm: [
                        'admin.transactions.chargebulkadminfee',
                    ],
                },
                {
                    name: 'Import Bank Feed',
                    path: '/transactions/importbankfeed',
                    perm: [
                        'admin.transactions.importbankfeed',
                    ],
                },
            ]
        },
    ],
};

export default MENU_MAIN;